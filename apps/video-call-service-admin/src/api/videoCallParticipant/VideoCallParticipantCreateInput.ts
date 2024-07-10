import { VideoCallWhereUniqueInput } from "../videoCall/VideoCallWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoCallParticipantCreateInput = {
  videoCall?: VideoCallWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
