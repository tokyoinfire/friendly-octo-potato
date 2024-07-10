import * as graphql from "@nestjs/graphql";
import { VideoCallParticipantResolverBase } from "./base/videoCallParticipant.resolver.base";
import { VideoCallParticipant } from "./base/VideoCallParticipant";
import { VideoCallParticipantService } from "./videoCallParticipant.service";

@graphql.Resolver(() => VideoCallParticipant)
export class VideoCallParticipantResolver extends VideoCallParticipantResolverBase {
  constructor(protected readonly service: VideoCallParticipantService) {
    super(service);
  }
}
