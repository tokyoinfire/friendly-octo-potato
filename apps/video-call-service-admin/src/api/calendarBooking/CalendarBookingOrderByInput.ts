import { SortOrder } from "../../util/SortOrder";

export type CalendarBookingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  call?: SortOrder;
};
