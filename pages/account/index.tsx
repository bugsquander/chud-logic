import { useState, ReactNode } from 'react';
import Link from 'next/link';
import { GetServerSidePropsContext } from 'next';
import {
  createServerSupabaseClient,
  User
} from '@supabase/auth-helpers-nextjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';

import AccountDetails from '@/components/account';

import LoadingDots from '@/components/ui/loadingdots';
import Button from '@/components/ui/button';
import { useUser } from '@/utils/useUser';
import { postData } from '@/utils/helpers';

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

function Card({ title, description, footer, children }: Props) {
  return (
    <div className="border border-zinc-700	max-w-3xl w-full p rounded-md m-auto my-8">
      <div className="px-5 py-4">
        <h3 className="text-2xl mb-1 font-medium">{title}</h3>
        <p className="text-zinc-300">{description}</p>
        {children}
      </div>
      <div className="border-t border-zinc-700 bg-zinc-900 p-4 text-zinc-500 rounded-b-md">
        {footer}
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    };

  return {
    props: {
      initialSession: session,
      user: session.user
    }
  };
};

export default function Account({ user }: { user: User }) {
  const [loading, setLoading] = useState(false);
  const { isLoading, subscription, userDetails } = useUser();

  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url, error } = await postData({
        url: '/api/create-portal-link'
      });
      window.location.assign(url);
    } catch (error) {
      if (error) return alert((error as Error).message);
    }
    setLoading(false);
  };

  const subscriptionPrice =
    subscription &&
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: subscription?.prices?.currency,
      minimumFractionDigits: 0
    }).format((subscription?.prices?.unit_amount || 0) / 100);

  return (
    <section className="sm:flex sm:justify-items-start sm:space-x-5">
      <div className=" bg-black/20 w-fit p-5 border rounded-lg border-zinc-800 mb-5 sm:m-0">
        <h3 className="text-2xl uppercase italic font-black mb-5">
          <FontAwesomeIcon icon={faUser} className="text-vomit-500 mr-1" />
          Account
        </h3>
        {userDetails ? (
          <div className="flex justify-between gap-5">
            <div>
              <img id="uploadedimage" src={userDetails.avatar_url} className="border-2 border-zinc-600 rounded-full" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-sm text-zinc-500">Username</div>
                <div>{userDetails.full_name}</div>
              </div>
              <div>
                <div className="text-sm text-zinc-500">Email</div>
                <div>{user ? user.email : undefined}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <LoadingDots />
          </div>
        )}
      </div>

      <div className="border border-zinc-800 bg-black/20 w-fit p-5 rounded-lg">
        <h3 className="text-2xl uppercase italic font-black mb-5">
          <FontAwesomeIcon icon={faStar} className="text-vomit-500 mr-1" />
          Subscription
        </h3>
        {userDetails ? (
          <div className="grid grid-cols-1 grid-rows-3">
            <div>
              {subscription
                ? `You currently have a ${subscription?.prices?.products?.name} subscription.`
                : ''}
            </div>
            <div>
              {isLoading ? (
                <div>
                  <LoadingDots />
                </div>
              ) : subscription ? (
                `${subscriptionPrice}/${subscription?.prices?.interval}`
              ) : (
                <Link href="/">Choose your subscription</Link>
              )}
            </div>
            <div>
              <Button
                variant="slim"
                loading={loading}
                disabled={loading || !subscription}
                onClick={redirectToCustomerPortal}
              >
                Manage Subscription
              </Button>
            </div>
          </div>
        ) : (
          <div className="">
            <LoadingDots />
          </div>
        )}
      </div>
    </section>
  );
}
