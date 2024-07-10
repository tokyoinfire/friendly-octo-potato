import { VideoCallWhereInput } from "./VideoCallWhereInput";
import { VideoCallOrderByInput } from "./VideoCallOrderByInput";

export type VideoCallFindManyArgs = {
  where?: VideoCallWhereInput;
  orderBy?: Array<VideoCallOrderByInput>;
  skip?: number;
  take?: number;
};
