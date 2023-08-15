import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-white text-black p-4 py-12 font-poppins flex flex-col justify-center items-center gap-2">
      <div>Membership Policy | BDSM Party Rules</div>
      <div>2023 © Beehive Discreet Club. All rights reserved</div>
    </div>
  );
};

export default Footer;
