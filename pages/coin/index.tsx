import { GetStaticPropsResult } from 'next';

import Coins from '@/components/coins';
import { getActiveProductsWithPrices } from '@/utils/supabase-client';
import { Product } from 'types';

interface Props {
  products: Product[];
}

export default function Coin({ products }: Props) {
  return <Coins products={products} />;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const products = await getActiveProductsWithPrices();

  return {
    props: {
      products
    },
    revalidate: 60
  };
}
