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
    className="block p-2.5 w-full text-base text-white bg-zinc-700/20 rounded-lg border border-zinc-700 hover:border-zinc-600 focus:border-zinc-500 focus:outline-0"
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
