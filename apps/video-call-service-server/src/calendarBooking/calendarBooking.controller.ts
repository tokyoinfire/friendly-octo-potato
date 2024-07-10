import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CalendarBookingService } from "./calendarBooking.service";
import { CalendarBookingControllerBase } from "./base/calendarBooking.controller.base";

@swagger.ApiTags("calendarBookings")
@common.Controller("calendarBookings")
export class CalendarBookingController extends CalendarBookingControllerBase {
  constructor(protected readonly service: CalendarBookingService) {
    super(service);
  }
}
