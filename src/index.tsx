import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DriverLicenceInfo } from "./DriverLicenceInfo";
import { DriverStatus } from "./DriverStatus";
import { InfractionDetail } from "./InfractionDetail";
import { Infractions } from "./Infractions";
import { LicencePoints } from "./LicencePoints";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="driver-status" element={<DriverStatus />} />
        <Route path="licence-points" element={<LicencePoints />} />
        <Route path="driver-licence-info" element={<DriverLicenceInfo />} />
        <Route path="infractions" element={<Infractions />} />
        <Route path="infraction-detail" element={<InfractionDetail />} />

        <Route path="*" element={<Navigate to="/driver-status" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
