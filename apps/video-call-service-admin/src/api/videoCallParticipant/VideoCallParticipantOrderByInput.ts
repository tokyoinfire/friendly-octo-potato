import { SortOrder } from "../../util/SortOrder";

export type VideoCallParticipantOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  videoCallId?: SortOrder;
  userId?: SortOrder;
};
