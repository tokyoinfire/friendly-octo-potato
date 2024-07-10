import * as graphql from "@nestjs/graphql";
import { CalendarBookingResolverBase } from "./base/calendarBooking.resolver.base";
import { CalendarBooking } from "./base/CalendarBooking";
import { CalendarBookingService } from "./calendarBooking.service";

@graphql.Resolver(() => CalendarBooking)
export class CalendarBookingResolver extends CalendarBookingResolverBase {
  constructor(protected readonly service: CalendarBookingService) {
    super(service);
  }
}
