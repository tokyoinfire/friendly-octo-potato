import { CalendarBookingWhereInput } from "./CalendarBookingWhereInput";
import { CalendarBookingOrderByInput } from "./CalendarBookingOrderByInput";

export type CalendarBookingFindManyArgs = {
  where?: CalendarBookingWhereInput;
  orderBy?: Array<CalendarBookingOrderByInput>;
  skip?: number;
  take?: number;
};
