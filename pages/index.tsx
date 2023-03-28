import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import styles from "@/styles/index.module.css";
import "swiper/css";
import "swiper/css/navigation";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getStaticProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${process.env.YOUTUBE_PLAYLIST_ID}&maxResults=12&key=${process.env.GOOGLE_API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 21600,
  };
}

export default function Index({ data }) {
  SwiperCore.use([Autoplay, Navigation]);

  return (
    <>
        <Swiper
          slidesPerView={"auto"}
          autoplay={{
            delay: 4000,
          }}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.items.map((item) => {
            const { id, snippet = {} } = item;
            const { title, thumbnails = {}, resourceId } = snippet;
            const { maxres = {} } = thumbnails;
            return (
              <SwiperSlide key={id}>
                <div key={id} className={styles.card}>
                  <a
                    href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                    title={title}
                    aria-label={title}
                  >
                    <div className={styles.image}>
                      <img
                        width={maxres.width}
                        height={maxres.height}
                        src={maxres.url}
                        alt=""
                      />
                    </div>
                    <div className={styles.title}>{title}</div>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
    </>
  );
}
