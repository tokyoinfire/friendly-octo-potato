import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VideoCallTitle } from "../videoCall/VideoCallTitle";
import { UserTitle } from "../user/UserTitle";

export const VideoCallParticipantCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
