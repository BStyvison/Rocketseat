import styles from "./Header.modules.css";

import igniteLogo from "../assets/Ignite-logo.svg";

console.log(igniteLogo);

export const Header = () => {
  return (
    <header className="header">
      <img src={igniteLogo} alt="" />
    </header>
  );
};
