import { VideoCallWhereUniqueInput } from "../videoCall/VideoCallWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoCallParticipantUpdateInput = {
  videoCall?: VideoCallWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
