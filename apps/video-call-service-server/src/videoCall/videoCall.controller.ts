import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VideoCallService } from "./videoCall.service";
import { VideoCallControllerBase } from "./base/videoCall.controller.base";

@swagger.ApiTags("videoCalls")
@common.Controller("videoCalls")
export class VideoCallController extends VideoCallControllerBase {
  constructor(protected readonly service: VideoCallService) {
    super(service);
  }
}
