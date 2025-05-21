"use client";
import React from "react";
import Weapon from "./Weapon";
import { WeaponDetection } from "@/components/ui/types/detection";


const WeaponDataProvider: React.FC = () => {
  const sampleDetections: WeaponDetection[] = [
    {
      personImage: "/person1.jpg",
      weaponName: "Knife",
      detectedAt: new Date().toISOString(),
      hasWeapon: true,
    },
    {
      personImage: "/person2.jpg",
      weaponName: null,
      detectedAt: new Date().toISOString(),
      hasWeapon: false,
    },
    {
      personImage: "/person3.jpg",
      weaponName: "Gun",
      detectedAt: new Date().toISOString(),
      hasWeapon: true,
    },
    {
      personImage: "/person4.jpg",
      weaponName: "Baseball Bat",
      detectedAt: new Date().toISOString(),
      hasWeapon: true,
    },
    {
      personImage: "/person5.jpg",
      weaponName: null,
      detectedAt: new Date().toISOString(),
      hasWeapon: false,
    },
    {
      personImage: "/person6.jpg",
      weaponName: "Pistol",
      detectedAt: new Date().toISOString(),
      hasWeapon: true,
    },
    {
      personImage: "/person7.jpg",
      weaponName: null,
      detectedAt: new Date().toISOString(),
      hasWeapon: false,
    },
    {
      personImage: "/person8.jpg",
      weaponName: "Machete",
      detectedAt: new Date().toISOString(),
      hasWeapon: true,
    },
    {
      personImage: "/person9.jpg",
      weaponName: null,
      detectedAt: new Date().toISOString(),
      hasWeapon: false,
    },
  ];

  return <Weapon detections={sampleDetections} />;
};

export default WeaponDataProvider;
