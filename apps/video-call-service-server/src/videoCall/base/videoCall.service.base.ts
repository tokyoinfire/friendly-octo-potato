/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  VideoCall as PrismaVideoCall,
  VideoCallParticipant as PrismaVideoCallParticipant,
} from "@prisma/client";

export class VideoCallServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.VideoCallCountArgs, "select">
  ): Promise<number> {
    return this.prisma.videoCall.count(args);
  }

  async videoCalls(
    args: Prisma.VideoCallFindManyArgs
  ): Promise<PrismaVideoCall[]> {
    return this.prisma.videoCall.findMany(args);
  }
  async videoCall(
    args: Prisma.VideoCallFindUniqueArgs
  ): Promise<PrismaVideoCall | null> {
    return this.prisma.videoCall.findUnique(args);
  }
  async createVideoCall(
    args: Prisma.VideoCallCreateArgs
  ): Promise<PrismaVideoCall> {
    return this.prisma.videoCall.create(args);
  }
  async updateVideoCall(
    args: Prisma.VideoCallUpdateArgs
  ): Promise<PrismaVideoCall> {
    return this.prisma.videoCall.update(args);
  }
  async deleteVideoCall(
    args: Prisma.VideoCallDeleteArgs
  ): Promise<PrismaVideoCall> {
    return this.prisma.videoCall.delete(args);
  }

  async findVideoCallParticipants(
    parentId: string,
    args: Prisma.VideoCallParticipantFindManyArgs
  ): Promise<PrismaVideoCallParticipant[]> {
    return this.prisma.videoCall
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .videoCallParticipants(args);
  }
}
