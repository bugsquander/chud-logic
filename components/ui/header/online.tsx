import Link from 'next/link';
import Image from 'next/image';

const Online = () => {
  return (
    <Link
      href="/stream"
      className="grid grid-cols-[1fr] w-[78px]"
      aria-label="Chud Logic"
      title="Chud Logic // STREAMING LIVE ON TWITCH.TV"
    >
      <div className="row-start-1 col-start-1 z-10">
        <Image
          src="/cl-logo-web.png"
          alt="Chud Logic"
          width={78}
          height={78}
          priority
          className="rounded-full border-2 border-vomit-500 animate-glow p-0 m-0"
        />
      </div>
      <div className="row-start-1 col-start-1 z-20 flex items-end justify-center">
        <div className="bg-red-600 text-white font-semibold py-1 px-1 rounded not-italic text-sm leading-3">LIVE</div>
      </div>
    </Link>
  );
};

export default Online;
