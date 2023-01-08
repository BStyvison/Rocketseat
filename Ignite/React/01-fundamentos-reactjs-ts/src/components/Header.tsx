import styles from "./Header.modules.css";

import igniteLogo from "../assets/Ignite-logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <img src={igniteLogo} alt="" />
    </header>
  );
};
