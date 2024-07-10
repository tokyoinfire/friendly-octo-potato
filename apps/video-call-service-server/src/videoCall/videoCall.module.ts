import { Module } from "@nestjs/common";
import { VideoCallModuleBase } from "./base/videoCall.module.base";
import { VideoCallService } from "./videoCall.service";
import { VideoCallController } from "./videoCall.controller";
import { VideoCallResolver } from "./videoCall.resolver";

@Module({
  imports: [VideoCallModuleBase],
  controllers: [VideoCallController],
  providers: [VideoCallService, VideoCallResolver],
  exports: [VideoCallService],
})
export class VideoCallModule {}
