import React from "react";
import ReactTooltip from "react-tooltip";
const Footer = () => {
  return (
    <div className="bg-background text-headline p-5 pl-10">
      &copy; Copyright {new Date().getFullYear()},{" "}
      <a className="hover:text-amber-400" data-tip="Visit my Website for more!" href="https://guille.tech">
        Guille.tech
      </a>
      <ReactTooltip class="z-50" place="top" type="info" effect="solid" />
    </div>
  );
};

export default Footer;
