import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VideoCallParticipantTitle } from "../videoCallParticipant/VideoCallParticipantTitle";

export const VideoCallEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endTime" source="endTime" />
        <TextInput label="title" source="title" />
        <DateTimeInput label="startTime" source="startTime" />
        <ReferenceArrayInput
          source="videoCallParticipants"
          reference="VideoCallParticipant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VideoCallParticipantTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
