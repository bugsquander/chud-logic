import { GetStaticPropsResult } from 'next';

import Donation from '@/components/donation';
import { getActiveProductsWithPrices } from '@/utils/supabase-client';
import { Product } from 'types';

interface Props {
  products: Product[];
}

export default function Donate({ products }: Props) {
  return <Donation products={products} />;
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
