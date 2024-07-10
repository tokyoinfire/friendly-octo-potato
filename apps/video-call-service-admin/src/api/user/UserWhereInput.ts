import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VideoCallParticipantListRelationFilter } from "../videoCallParticipant/VideoCallParticipantListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  videoCallParticipants?: VideoCallParticipantListRelationFilter;
};
