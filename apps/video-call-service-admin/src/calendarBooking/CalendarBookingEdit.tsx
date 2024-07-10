import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const CalendarBookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="startTime" source="startTime" />
        <DateTimeInput label="endTime" source="endTime" />
        <TextInput label="call" source="call" />
      </SimpleForm>
    </Edit>
  );
};
