import { VideoCallParticipant } from "../videoCallParticipant/VideoCallParticipant";

export type VideoCall = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  endTime: Date | null;
  title: string | null;
  startTime: Date | null;
  videoCallParticipants?: Array<VideoCallParticipant>;
};
