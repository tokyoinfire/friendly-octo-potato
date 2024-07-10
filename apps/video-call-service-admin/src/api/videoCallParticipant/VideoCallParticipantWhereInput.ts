import { StringFilter } from "../../util/StringFilter";
import { VideoCallWhereUniqueInput } from "../videoCall/VideoCallWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoCallParticipantWhereInput = {
  id?: StringFilter;
  videoCall?: VideoCallWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
