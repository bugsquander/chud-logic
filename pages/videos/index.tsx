const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getStaticProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${process.env.YOUTUBE_PLAYLIST_ID}&maxResults=12&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      data
    },
    revalidate: 21600
  };
}

export default function Videos({ data }) {
  return (
    <>
      <div
        className="grid gap-5 sm:grid-cols-[repeat(1,minmax(200px,1fr))] md:grid-cols-[repeat(4,minmax(200px,1fr))]"
      >
        {data.items.map((item) => {
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId } = snippet;
          const { medium = {} } = thumbnails;
          return (
            <div key={id}>
              <a
                href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                title={title}
                aria-label={title}
              >
                <div>
                  <img
                    src={medium.url}
                    alt=""
                    className="w-full h-full object-contain block"
                  />
                </div>
                <div className="text-black bg-white text-base font-black italic text-justify text-ellipsis line-clamp-2 border-8 border-white m-0">
                  {title}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
