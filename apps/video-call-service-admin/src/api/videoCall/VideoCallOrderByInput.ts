import { SortOrder } from "../../util/SortOrder";

export type VideoCallOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  endTime?: SortOrder;
  title?: SortOrder;
  startTime?: SortOrder;
};
