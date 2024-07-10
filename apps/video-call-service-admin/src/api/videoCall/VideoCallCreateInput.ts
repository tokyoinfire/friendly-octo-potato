import { VideoCallParticipantCreateNestedManyWithoutVideoCallsInput } from "./VideoCallParticipantCreateNestedManyWithoutVideoCallsInput";

export type VideoCallCreateInput = {
  description?: string | null;
  endTime?: Date | null;
  title?: string | null;
  startTime?: Date | null;
  videoCallParticipants?: VideoCallParticipantCreateNestedManyWithoutVideoCallsInput;
};
