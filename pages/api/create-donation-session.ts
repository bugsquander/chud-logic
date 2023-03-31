import { NextApiRequest, NextApiResponse } from 'next';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

import { stripe } from '@/utils/stripe';
import { createOrRetrieveCustomer } from '@/utils/supabase-admin';
import { getURL } from '@/utils/helpers';

const CreateCheckoutSession = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === 'POST') {
    const { amount } = req.body;

    try {
        const supabase = createServerSupabaseClient({ req, res });
        const {
            data: { user }
          } = await supabase.auth.getUser();

          const customer = await createOrRetrieveCustomer({
            uuid: user?.id || '',
            email: user?.email || ''
          });
    
      const items = [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `Donate to Chud Logic`
            },
            unit_amount: amount * 100
          },
          quantity: 1
        }
      ];

      const session = await stripe.checkout.sessions.create({
        line_items: items,
        mode: 'payment',
        payment_method_types: ['card'],
        submit_type: 'donate',
        customer,
        success_url: `${getURL()}/account`,
        cancel_url: `${getURL()}/`
      });

      res.status(200).json({ id: session.id });
    } catch (err: any) {
      console.log(err);
      res
        .status(500)
        .json({ error: { statusCode: 500, message: err.message } });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default CreateCheckoutSession;
