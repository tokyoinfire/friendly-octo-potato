import { VideoCall as TVideoCall } from "../api/videoCall/VideoCall";

export const VIDEOCALL_TITLE_FIELD = "title";

export const VideoCallTitle = (record: TVideoCall): string => {
  return record.title?.toString() || String(record.id);
};
