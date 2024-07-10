import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VideoCallTitle } from "../videoCall/VideoCallTitle";
import { UserTitle } from "../user/UserTitle";

export const VideoCallParticipantEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="videoCall.id"
          reference="VideoCall"
          label="videoCall"
        >
          <SelectInput optionText={VideoCallTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
