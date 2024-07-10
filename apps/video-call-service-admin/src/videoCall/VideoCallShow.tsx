import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { VIDEOCALL_TITLE_FIELD } from "./VideoCallTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const VideoCallShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="endTime" source="endTime" />
        <TextField label="title" source="title" />
        <TextField label="startTime" source="startTime" />
        <ReferenceManyField
          reference="VideoCallParticipant"
          target="videoCallId"
          label="VideoCallParticipants"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="videoCall"
              source="videocall.id"
              reference="VideoCall"
            >
              <TextField source={VIDEOCALL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
