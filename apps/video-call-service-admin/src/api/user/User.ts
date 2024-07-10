import { JsonValue } from "type-fest";
import { VideoCallParticipant } from "../videoCallParticipant/VideoCallParticipant";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  videoCallParticipants?: Array<VideoCallParticipant>;
};
