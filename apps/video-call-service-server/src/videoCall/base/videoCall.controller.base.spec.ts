import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { VideoCallController } from "../videoCall.controller";
import { VideoCallService } from "../videoCall.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  description: "exampleDescription",
  endTime: new Date(),
  title: "exampleTitle",
  startTime: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  description: "exampleDescription",
  endTime: new Date(),
  title: "exampleTitle",
  startTime: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    description: "exampleDescription",
    endTime: new Date(),
    title: "exampleTitle",
    startTime: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  description: "exampleDescription",
  endTime: new Date(),
  title: "exampleTitle",
  startTime: new Date(),
};

const service = {
  createVideoCall() {
    return CREATE_RESULT;
  },
  videoCalls: () => FIND_MANY_RESULT,
  videoCall: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("VideoCall", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: VideoCallService,
          useValue: service,
        },
      ],
      controllers: [VideoCallController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /videoCalls", async () => {
    await request(app.getHttpServer())
      .post("/videoCalls")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        endTime: CREATE_RESULT.endTime.toISOString(),
        startTime: CREATE_RESULT.startTime.toISOString(),
      });
  });

  test("GET /videoCalls", async () => {
    await request(app.getHttpServer())
      .get("/videoCalls")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          endTime: FIND_MANY_RESULT[0].endTime.toISOString(),
          startTime: FIND_MANY_RESULT[0].startTime.toISOString(),
        },
      ]);
  });

  test("GET /videoCalls/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/videoCalls"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /videoCalls/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/videoCalls"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        endTime: FIND_ONE_RESULT.endTime.toISOString(),
        startTime: FIND_ONE_RESULT.startTime.toISOString(),
      });
  });

  test("POST /videoCalls existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/videoCalls")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        endTime: CREATE_RESULT.endTime.toISOString(),
        startTime: CREATE_RESULT.startTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/videoCalls")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
