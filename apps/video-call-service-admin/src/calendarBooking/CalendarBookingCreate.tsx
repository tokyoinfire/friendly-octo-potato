import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const CalendarBookingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="startTime" source="startTime" />
        <DateTimeInput label="endTime" source="endTime" />
        <TextInput label="call" source="call" />
      </SimpleForm>
    </Create>
  );
};
