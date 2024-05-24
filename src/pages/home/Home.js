import React from "react";
import "./Home.scss";
import { MenuTab, Sidebar } from "../../components";

export function Home() {
  return (
    <>
      <div className="main_content">
        <div className="content_qr">
          <h2>QRemix, Tu Generador de QRs</h2>
          <MenuTab />
        </div>
        <div className="content_sidebar">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
  