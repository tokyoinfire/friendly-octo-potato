import * as graphql from "@nestjs/graphql";
import { VideoCallResolverBase } from "./base/videoCall.resolver.base";
import { VideoCall } from "./base/VideoCall";
import { VideoCallService } from "./videoCall.service";

@graphql.Resolver(() => VideoCall)
export class VideoCallResolver extends VideoCallResolverBase {
  constructor(protected readonly service: VideoCallService) {
    super(service);
  }
}
