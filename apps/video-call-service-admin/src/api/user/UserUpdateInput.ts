import { InputJsonValue } from "../../types";
import { VideoCallParticipantUpdateManyWithoutUsersInput } from "./VideoCallParticipantUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  videoCallParticipants?: VideoCallParticipantUpdateManyWithoutUsersInput;
};
