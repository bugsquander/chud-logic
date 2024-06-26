import { useSession } from '@supabase/auth-helpers-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faRightToBracket
} from '@fortawesome/free-solid-svg-icons';
import SignedIn from './signed-in';
import Link from 'next/link';

const User = () => {
  const session = useSession();

  return (
    <div className="flex flex-col flex-wrap content-between justify-between h-full">
      {!session ? (
        <>
          <div className="flex justify-center">
            <Link
              href="/signin"
              aria-label="User"
              title="User"
              className="flex items-center justify-center rounded-full border-2 border-vomit-500 h-5 w-5 md:w-14 md:h-14"
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-[8px] md:text-lg text-vomit-500"
              />
            </Link>
          </div>

          <div className="text-xs md:text-base text-right">
            <Link href="/signin" aria-label="Login" title="Register">
              <FontAwesomeIcon
                icon={faRightToBracket}
                className="mr-1 text-vomit-500"
              />
              <span className="hidden md:inline">Sign up</span>
            </Link>
          </div>
          </>
      ) : (
        <SignedIn session={session} />
      )}
    </div>
  );
};

export default User;
