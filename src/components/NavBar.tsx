import React from "react";
import WalletButton from "./WalletButton";

function NavBar() {
  return (
    <nav className="flex flex-row w-full justify-between items-center px-4 h-[80px]">
      <img src="zkam-icon-0-no-background.png" alt="zkam-logo" className="w-12" />
      <p className="font-bold text-lg">ZKam</p>
      <WalletButton />
    </nav>
  );
}

export default NavBar;
