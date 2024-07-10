import { VideoCall } from "../videoCall/VideoCall";
import { User } from "../user/User";

export type VideoCallParticipant = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  videoCall?: VideoCall | null;
  user?: User | null;
};
