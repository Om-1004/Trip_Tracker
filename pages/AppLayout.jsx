import React from "react";
import AppNav from "../src/components/AppNav";
import Sidebar from "../src/components/Sidebar";

import styles from "./AppLayout.module.css";
import Map from "../src/components/Map";
import User from "../src/components/User";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}
