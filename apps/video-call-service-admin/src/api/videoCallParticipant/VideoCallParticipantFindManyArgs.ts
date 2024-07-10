import { VideoCallParticipantWhereInput } from "./VideoCallParticipantWhereInput";
import { VideoCallParticipantOrderByInput } from "./VideoCallParticipantOrderByInput";

export type VideoCallParticipantFindManyArgs = {
  where?: VideoCallParticipantWhereInput;
  orderBy?: Array<VideoCallParticipantOrderByInput>;
  skip?: number;
  take?: number;
};
