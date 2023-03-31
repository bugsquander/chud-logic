import { useState } from 'react';
import { useRouter } from 'next/router';
import { getStripe } from '@/utils/stripe-client';
import { useUser } from '@/utils/useUser';
import { formatAmountForDisplay } from '@/utils/helpers';
import axios from 'axios';
import Input from './input';

export default function DonationButton() {
  const router = useRouter();
  const { user } = useUser();

  const [input, setInput] = useState({
    amount: Math.round(0)
  });

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });

  const createCheckOutSession = async () => {
    if (!user) {
      return router.push('/signin');
    }
    try {
      const checkoutSession = await axios.post('/api/create-donation-session', {
        amount: input.amount
      });
      const stripe = await getStripe();
      stripe?.redirectToCheckout({
        sessionId: checkoutSession.data.id
      });
    } catch (error) {
      return alert((error as Error)?.message);
    }
  };

  return (
    <div className="flex-col items-center z-10 space-y-5 rounded-md">
      <div className="flex w-full items-center">
        <Input
          name={'amount'}
          value={input.amount}
          min={0}
          max={null}
          step={1}
          currency={'gbp'}
          onChange={handleInputChange}
        />
      </div>
      <button
        onClick={createCheckOutSession}
        className="font-bold text-base w-full py-2 px-4 rounded bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600"
      >
        Donate {formatAmountForDisplay(input.amount, 'gbp')}
      </button>
    </div>
  );
}
