import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CalendarBookingWhereInput = {
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  call?: StringNullableFilter;
};
