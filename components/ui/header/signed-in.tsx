import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "@/styles/header.module.css";

export default function SignedIn({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [username, setUsername] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from("users")
        .select(`full_name, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setUsername(data.full_name);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }

  return (
    <>
      <div className={styles.panel}>
        <div className={styles.user}>
          <Link href="/account" aria-label={username} title={username}>
            <img src={avatar_url}></img>
          </Link>
        </div>
        <div className={styles.signout}>
          <Link
            href="#"
            onClick={() => supabase.auth.signOut()}
            aria-label="Sign Out"
            title="Sign Out"
          >
            <FontAwesomeIcon icon={faRightFromBracket} className={styles.icon} />
            <span className={styles.title}>Sign Out</span>
          </Link>
        </div>
      </div>
    </>
  );
}
