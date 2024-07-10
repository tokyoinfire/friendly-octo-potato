import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { VideoCallParticipantListRelationFilter } from "../videoCallParticipant/VideoCallParticipantListRelationFilter";

export type VideoCallWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  videoCallParticipants?: VideoCallParticipantListRelationFilter;
};
