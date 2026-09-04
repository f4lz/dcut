import { LogoutButton } from "@/features/logout";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <LogoutButton />
    </header>
  );
};
