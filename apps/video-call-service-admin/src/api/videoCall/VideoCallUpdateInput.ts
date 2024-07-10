import { VideoCallParticipantUpdateManyWithoutVideoCallsInput } from "./VideoCallParticipantUpdateManyWithoutVideoCallsInput";

export type VideoCallUpdateInput = {
  description?: string | null;
  endTime?: Date | null;
  title?: string | null;
  startTime?: Date | null;
  videoCallParticipants?: VideoCallParticipantUpdateManyWithoutVideoCallsInput;
};
