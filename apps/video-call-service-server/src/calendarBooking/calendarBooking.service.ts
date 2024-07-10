import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CalendarBookingServiceBase } from "./base/calendarBooking.service.base";

@Injectable()
export class CalendarBookingService extends CalendarBookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
