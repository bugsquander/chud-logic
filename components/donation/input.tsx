import React from 'react';

type Props = {
  name: string;
  value: number;
  min: number;
  max: number;
  currency: string;
  step: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomDonationInput = ({
  name,
  value,
  min,
  max,
  step,
  onChange
}: Props) => (
    <input
      className="block p-3 w-full text-base text-white bg-transparent rounded-lg border border-gray-500 hover:border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
      type="number"
      name={name}
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
    ></input>
);

export default CustomDonationInput;
