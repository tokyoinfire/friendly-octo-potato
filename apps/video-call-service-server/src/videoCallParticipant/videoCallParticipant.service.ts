import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VideoCallParticipantServiceBase } from "./base/videoCallParticipant.service.base";

@Injectable()
export class VideoCallParticipantService extends VideoCallParticipantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
