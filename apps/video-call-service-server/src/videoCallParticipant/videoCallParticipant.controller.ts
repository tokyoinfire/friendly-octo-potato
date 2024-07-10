import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VideoCallParticipantService } from "./videoCallParticipant.service";
import { VideoCallParticipantControllerBase } from "./base/videoCallParticipant.controller.base";

@swagger.ApiTags("videoCallParticipants")
@common.Controller("videoCallParticipants")
export class VideoCallParticipantController extends VideoCallParticipantControllerBase {
  constructor(protected readonly service: VideoCallParticipantService) {
    super(service);
  }
}
