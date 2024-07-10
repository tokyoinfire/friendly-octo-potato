import { VideoCallParticipant as TVideoCallParticipant } from "../api/videoCallParticipant/VideoCallParticipant";

export const VIDEOCALLPARTICIPANT_TITLE_FIELD = "id";

export const VideoCallParticipantTitle = (
  record: TVideoCallParticipant
): string => {
  return record.id?.toString() || String(record.id);
};
