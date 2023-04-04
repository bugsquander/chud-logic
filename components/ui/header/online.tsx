import Link from 'next/link';
import Image from 'next/image';

const Online = () => {
  return (
    <Link
      href="/stream"
      className="grid grid-cols-[1fr] w-[48px] sm:w-[78px]"
      aria-label="Chud Logic"
      title="Chud Logic // STREAMING LIVE ON TWITCH.TV"
    >
      <div className="row-start-1 col-start-1 z-10">
        <Image
          src="/cl-logo-web.png"
          alt="Chud Logic"
          width={0}
          height={0}
          priority
          className="rounded-full border-2 border-vomit-500 animate-glow p-0 m-0 w-12 h-12 sm:w-[78px] sm:h-[78px]"
        />
      </div>
      <div className="row-start-1 col-start-1 z-20 flex items-end justify-center">
        <div className="bg-red-600 text-white font-semibold px-[2px] py-[0px] sm:px-[4px] sm:py-[0px] rounded not-italic text-[0.6rem] sm:text-sm leading-3">LIVE</div>
      </div>
    </Link>
  );
};

export default Online;
