import React from "react";

const EventPage = React.lazy(() =>
  import("./views/components/eventpage/eventpage")
);

const EventRegister = React.lazy(() =>
  import("./views/components/eventregister")
);
const ParticipantRegister = React.lazy(() =>
  import("./views/components/participantregister")
);
const EventEdit = React.lazy(() =>
  import("./views/components/eventedit/eventedit")
);

const routes = [
  {
    path: "/",
    exact: true,
    name: "Events",
    component: EventPage,
  },
  {
    path: "/EventRegister",
    exact: true,
    name: "Event Register",
    component: EventRegister,
  },
  {
    path: "/ParticipantRegister",
    exact: true,
    name: "Participant Register",
    component: ParticipantRegister,
  },
  {
    path: "/EventEdit",
    exact: true,
    name: "Event Edit",
    component: EventEdit,
  },
];

export default routes;
