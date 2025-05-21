"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { Bell, Menu, X } from "lucide-react";

interface NavbarProps {
  onReportClick: () => void;
  onDashboardClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReportClick, onDashboardClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const notificationCount = 5;

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image
          src="/Logo.jpg"
          alt="Proforce Logo"
          width={60}
          height={60}
          className={styles.logo}
        />
        <span className={styles.title}>Proforce Intelligence System</span>
      </div>

      <button className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
        <a href="#" className={styles.link} onClick={onDashboardClick}>
          Dashboard
        </a>

        <a href="#" className={styles.link} onClick={onReportClick}>
          <span className={styles.reportLink}>
            Reports
            <Bell className={styles.bellIcon} />
            {notificationCount > 0 && (
              <span className={styles.badge}>{notificationCount}</span>
            )}
          </span>
        </a>

        <a href="#" className={styles.link}>Settings</a>

        <div className={styles.filterContainer}>
          <label htmlFor="date">Filter by Date:</label>
          <input type="date" id="date" name="date" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

