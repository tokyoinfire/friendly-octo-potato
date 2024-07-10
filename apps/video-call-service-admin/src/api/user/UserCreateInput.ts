import { InputJsonValue } from "../../types";
import { VideoCallParticipantCreateNestedManyWithoutUsersInput } from "./VideoCallParticipantCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  videoCallParticipants?: VideoCallParticipantCreateNestedManyWithoutUsersInput;
};
