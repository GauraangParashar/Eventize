import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  /* {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  }, */
  {
    _tag: "CSidebarNavItem",
    name: "Events",
    to: "/",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },

  {
    _tag: "CSidebarNavTitle",
    _children: ["My Events"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "EventRegister",
    to: "/eventregister",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Edit Events",
    to: "/components/EventRegister",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Live Events"],
  },

  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },

  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];

export default _nav;
