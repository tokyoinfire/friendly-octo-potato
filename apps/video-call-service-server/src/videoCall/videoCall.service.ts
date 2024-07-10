import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VideoCallServiceBase } from "./base/videoCall.service.base";

@Injectable()
export class VideoCallService extends VideoCallServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
