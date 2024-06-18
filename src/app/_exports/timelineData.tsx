import LoyaltySharpIcon from "@mui/icons-material/LoyaltySharp";
import WaterSharpIcon from "@mui/icons-material/WaterSharp";
import NightShelterSharpIcon from "@mui/icons-material/NightShelterSharp";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CastleIcon from "@mui/icons-material/Castle";
import Groups2Icon from "@mui/icons-material/Groups2";
import TapasIcon from "@mui/icons-material/Tapas";
import SchoolIcon from "@mui/icons-material/School";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import liverpoolPic from "/public/liverpool.webp";
import blackpoolPic from "/public/blackpool.webp";
import londonPic from "/public/london.webp";
import airplantsPic from "/public/airplants.webp";
import graduationAlepPic from "/public/graduationALE.webp";
import scotlandPic from "/public/scotland.webp";
import graduationUclanPic from "/public/graduationUCLAN.webp";

export const colorOptions: any = [
  "primary",
  "secondary",
  "success",
  "error",
  "warning",
  "grey",
  "inherit",
  "info",
];

export function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colorOptions.length);
  return colorOptions[randomIndex];
}

export const timelineData = [
  {
    date: "14 FEB 2022",
    icon: LoyaltySharpIcon,
    title: "1st Date",
    description: "Valentine's Day!",
    colour: getRandomColor(),
    imageUrl: airplantsPic,
    imageAlt: "Change me",
  },
  {
    date: "13 MAR 2022",
    icon: WaterSharpIcon,
    title: "Blackpool",
    description: "First trip together!",
    colour: getRandomColor(),
    imageUrl: blackpoolPic,
    imageAlt: "Change me",
  },
  {
    date: "25 MAR 2022",
    icon: NightShelterSharpIcon,
    title: "London",
    description: "Two days trip together with Nanako!",
    colour: getRandomColor(),
    imageUrl: londonPic,
    imageAlt: "Change me",
  },
  {
    date: "1 APR 2022",
    icon: TapasIcon,
    title: "First date night",
    description: "Before Jupi's Easter Holiday!",
    colour: getRandomColor(),
    imageUrl: airplantsPic,
    imageAlt: "Change me",
  },
  {
    date: "30 APR 2022",
    icon: MilitaryTechIcon,
    title: "Military Field Trip",
    description: "Uni trip to Preston - Fulwood!",
    colour: getRandomColor(),
    imageUrl: airplantsPic,
    imageAlt: "Change me",
  },
  {
    date: "13 JUN 2022",
    icon: SchoolIcon,
    title: "Ale's graduation",
    description: "One week trip to Bucharest! Graduation ceremony On the 16th",
    colour: getRandomColor(),
    imageUrl: graduationAlepPic,
    imageAlt: "Change me",
  },
  {
    date: "18 JUN 2022",
    icon: Groups2Icon,
    title: "Meeting Jupi's Familiy",
    description: "One week trip to Austria!",
    colour: getRandomColor(),
    imageUrl: airplantsPic,
    imageAlt: "Change me",
  },
  {
    date: "04 July 2022",
    icon: CastleIcon,
    title: "Scotland",
    description: "3 Days Exploring Glasgow & Edinburgh",
    colour: getRandomColor(),
    imageUrl: scotlandPic,
    imageAlt: "Change me",
  },
  {
    date: "08 JULY 2022",
    icon: SportsSoccerIcon,
    title: "Liverpool",
    description: "One day trip to Liverpool!",
    colour: getRandomColor(),
    imageUrl: liverpoolPic,
    imageAlt: "Change me",
  },
  {
    date: "12 JULY 2022",
    icon: SchoolIcon,
    title: "Our Graduation",
    description: "BSc Software Engineering, UCLAN, Preston, United Kingdom",
    colour: getRandomColor(),
    imageUrl: graduationUclanPic,
    imageAlt: "Change me",
  },
];
