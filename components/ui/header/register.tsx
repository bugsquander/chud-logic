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
              className="flex items-center justify-center rounded-full border-2 border-vomit-500 h-6 w-6 sm:w-14 sm:h-14"
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-[8px] sm:text-lg text-vomit-500"
              />
            </Link>
          </div>

          <div className="text-base">
            <Link href="/signin" aria-label="Login" title="Register">
              <FontAwesomeIcon
                icon={faRightToBracket}
                className="mr-1 text-vomit-500"
              />
              <span className="hidden sm:inline">Sign up</span>
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
