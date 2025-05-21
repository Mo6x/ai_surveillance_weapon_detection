"use client";
import React, { useState } from "react";
import Navbar from "@/components/ui/navbars/Navbar";
import Watcher from "@/components/ui/watchers/Watcher";
import WeaponDataProvider from "@/components/ui/weapons/WeaponDataProvider";


const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<"dashboard" | "reports" | "settings">("dashboard");

  return (
    <>
      <Navbar
        onDashboardClick={() => setActiveSection("dashboard")}
        onReportClick={() => setActiveSection("reports")}
      />

      {activeSection === "dashboard" && <Watcher />}
      {activeSection === "reports" && <WeaponDataProvider />}
      {activeSection === "settings" && <div>Settings Page</div>}
    </>
  );
};

export default Home;

