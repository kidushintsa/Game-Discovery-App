// import React from 'react'
import {
  FaWindows,
  FaLinux,
  FaApple,
  FaAndroid,
  FaPlaystation,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { Platform } from "../hooks/useGames";
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  return (
    <div className="flex  mt-2">
      {platforms.map((platform) => {
        switch (platform.name) {
          case "PC":
            return <FaWindows className = "ms-2 text-zinc-400" key={platform.name} />;
          case "Playstation":
            return <FaPlaystation className = "ms-2 text-zinc-400" key={platform.name} />;
          case "Xbox":
            return <FaXbox className = "ms-2 text-zinc-400" key={platform.name} />;
          case "Nintendo":
            return <SiNintendo className = "ms-2 text-zinc-400" key={platform.name} />;
          case "Mac":
            return <FaApple className = "ms-2 text-zinc-400" key={platform.name} />;
          case "Linux":
            return <FaLinux className = "ms-2" key={platform.name} />;
          case "Ios":
            return <MdPhoneIphone className = "ms-2 text-zinc-400" key={platform.name} />;
          case "Android":
            return <FaAndroid className = "ms-2 text-zinc-400" key={platform.name} />;
          case "Web":
            return <BsGlobe className = "ms-2 text-zinc-400" key={platform.name} />;
        }
      })}
    </div>
  );
};

export default PlatformIconList;
