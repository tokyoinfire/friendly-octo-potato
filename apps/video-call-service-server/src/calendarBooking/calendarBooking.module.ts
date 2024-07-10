import { Module } from "@nestjs/common";
import { CalendarBookingModuleBase } from "./base/calendarBooking.module.base";
import { CalendarBookingService } from "./calendarBooking.service";
import { CalendarBookingController } from "./calendarBooking.controller";
import { CalendarBookingResolver } from "./calendarBooking.resolver";

@Module({
  imports: [CalendarBookingModuleBase],
  controllers: [CalendarBookingController],
  providers: [CalendarBookingService, CalendarBookingResolver],
  exports: [CalendarBookingService],
})
export class CalendarBookingModule {}
