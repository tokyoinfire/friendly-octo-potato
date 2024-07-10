import { Module } from "@nestjs/common";
import { VideoCallParticipantModuleBase } from "./base/videoCallParticipant.module.base";
import { VideoCallParticipantService } from "./videoCallParticipant.service";
import { VideoCallParticipantController } from "./videoCallParticipant.controller";
import { VideoCallParticipantResolver } from "./videoCallParticipant.resolver";

@Module({
  imports: [VideoCallParticipantModuleBase],
  controllers: [VideoCallParticipantController],
  providers: [VideoCallParticipantService, VideoCallParticipantResolver],
  exports: [VideoCallParticipantService],
})
export class VideoCallParticipantModule {}
