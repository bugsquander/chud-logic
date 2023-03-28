import styles from "./videos.module.css";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getStaticProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${process.env.YOUTUBE_PLAYLIST_ID}&maxResults=12&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 21600,
  };
}

export default function Videos({ data }) {
  return (
    <>
        <div className={styles.gallery}>
          {data.items.map((item) => {
            const { id, snippet = {} } = item;
            const { title, thumbnails = {}, resourceId } = snippet;
            const { medium = {} } = thumbnails;
            return (
              <div key={id} className={styles.card}>
                <a
                  href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                  title={title}
                  aria-label={title}
                >
                  <div className={styles.image}>
                    <img src={medium.url} alt="" />
                  </div>
                  <div className={styles.title}>{title}</div>
                </a>
              </div>
            );
          })}
        </div>
    </>
  );
}
