import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VideoCallList } from "./videoCall/VideoCallList";
import { VideoCallCreate } from "./videoCall/VideoCallCreate";
import { VideoCallEdit } from "./videoCall/VideoCallEdit";
import { VideoCallShow } from "./videoCall/VideoCallShow";
import { CalendarBookingList } from "./calendarBooking/CalendarBookingList";
import { CalendarBookingCreate } from "./calendarBooking/CalendarBookingCreate";
import { CalendarBookingEdit } from "./calendarBooking/CalendarBookingEdit";
import { CalendarBookingShow } from "./calendarBooking/CalendarBookingShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { VideoCallParticipantList } from "./videoCallParticipant/VideoCallParticipantList";
import { VideoCallParticipantCreate } from "./videoCallParticipant/VideoCallParticipantCreate";
import { VideoCallParticipantEdit } from "./videoCallParticipant/VideoCallParticipantEdit";
import { VideoCallParticipantShow } from "./videoCallParticipant/VideoCallParticipantShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VideoCallService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="VideoCall"
          list={VideoCallList}
          edit={VideoCallEdit}
          create={VideoCallCreate}
          show={VideoCallShow}
        />
        <Resource
          name="CalendarBooking"
          list={CalendarBookingList}
          edit={CalendarBookingEdit}
          create={CalendarBookingCreate}
          show={CalendarBookingShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="VideoCallParticipant"
          list={VideoCallParticipantList}
          edit={VideoCallParticipantEdit}
          create={VideoCallParticipantCreate}
          show={VideoCallParticipantShow}
        />
      </Admin>
    </div>
  );
};

export default App;
