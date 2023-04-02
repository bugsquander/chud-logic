import { useState } from 'react';
import { ProductWithPrice } from 'types';
import Button from '@/components/donation/button';

interface Props {
  products: ProductWithPrice[];
}

type ProductName = 'Donation' | 'ChudCoin';

export default function Donation({ products }: Props) {
  const [productName, setProductName] = useState<ProductName>('Donation');

  if (!products.length)
    return (
      <section className="bg-black">
        <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center"></div>
          <p className="text-6xl font-extrabold text-white sm:text-center sm:text-6xl">
            No donation or ChudCoin products found. Create them in your{' '}
            <a
              className="text-pink-500 underline"
              href="https://dashboard.stripe.com/products"
              rel="noopener noreferrer"
              target="_blank"
            >
              Stripe Dashboard
            </a>
            .
          </p>
        </div>
      </section>
    );

  return (
    <section className="">
      <div className="sm:flex sm:flex-col sm:align-center">
        <div className="relative self-center mt-6 bg-zinc-900 rounded-lg p-0.5 flex sm:mt-8 border border-zinc-800">
          <button
            onClick={() => setProductName('Donation')}
            type="button"
            className={`${
              productName === 'Donation'
                ? 'relative w-1/2 bg-zinc-700 border-zinc-800 shadow-sm text-white'
                : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'
            } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-vomit-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
          >
            Donation
          </button>
          <button
            onClick={() => setProductName('ChudCoin')}
            type="button"
            className={`${
              productName === 'ChudCoin'
                ? 'relative w-1/2 bg-zinc-700 border-zinc-800 shadow-sm text-white'
                : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'
            } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-vomit-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
          >
            ChudCoin
          </button>
        </div>
      </div>
      <div className="mt-8 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
        {products.map((product) => {
          const name = product?.prices?.find(
            (name) => product.name === productName
          );
          if (!name) return null;
          return (
            <div
              key={product.id}
              className="rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900"
            >
              <div className="p-6">
                <h2 className="text-2xl leading-6 font-semibold text-white">
                  {product.name}
                </h2>
                <p className="mt-4 text-zinc-300">{product.description}</p>

                <Button />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
