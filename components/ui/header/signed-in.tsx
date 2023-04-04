import { useState, useEffect } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

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
        .from('users')
        .select(`full_name, avatar_url`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setUsername(data.full_name);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert('Error loading user data!');
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <Link href="/account" aria-label={username} title={username}>
          <img
            src={avatar_url}
            className="flex items-center justify-center rounded-full border-2 border-vomit-500 h-5 w-5 sm:w-14 sm:h-14"
          ></img>
        </Link>
      </div>

      <div className="text-xs sm:text-base text-right">
        <Link
          href="#"
          onClick={() => supabase.auth.signOut()}
          aria-label="Sign Out"
          title="Sign Out"
        >
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className="mr-1 text-vomit-500"
          />
          <span className="hidden sm:inline">Sign Out</span>
        </Link>
      </div>
    </>
  );
}
