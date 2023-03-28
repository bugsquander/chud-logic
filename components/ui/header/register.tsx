import { useSession } from "@supabase/auth-helpers-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAddressCard,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import SignedIn from "./signed-in";
import Link from "next/link";
import styles from "@/styles/header.module.css";

const User = () => {
  const session = useSession();

  return (
    <div className={styles.login}>
      {!session ? (
        <div className={styles.panel}>
          <div className={styles.user}>
            <Link href="/signin" aria-label="User" title="User">
              <FontAwesomeIcon icon={faUser} className={styles.icon} />
            </Link>
          </div>
          <div className={styles.register}>
            <Link href="/signin" aria-label="Login" title="Register">
              <FontAwesomeIcon icon={faRightToBracket} className={styles.icon} />
              <span className={styles.title}>Sign up</span>
            </Link>
          </div>
        </div>
      ) : (
        <SignedIn session={session} />
      )}
    </div>
  );
};

export default User;
