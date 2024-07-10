import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VIDEOCALL_TITLE_FIELD } from "../videoCall/VideoCallTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const VideoCallParticipantList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VideoCallParticipants"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
