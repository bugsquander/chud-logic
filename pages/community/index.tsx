import Reddit from "@/components/community/reddit"
import Youtube from "@/components/community/youtube"

const reddit = 'https://www.reddit.com';
const subreddit = 'r/chudlogic';

const YOUTUBE_CHANNELS_API =
  'https://www.googleapis.com/youtube/v3/channels';

export async function getStaticProps() {
  const about = await fetch(`${reddit}/${subreddit}/about.json`).then((ra) =>
    ra.json()
  );
  const latest = await fetch(`${reddit}/${subreddit}/new.json?limit=6`).then(
    (rb) => rb.json()
  );
  const hot = await fetch(`${reddit}/${subreddit}/hot.json?limit=6`).then(
    (rc) => rc.json()
  );
  const youtube = await fetch(`${YOUTUBE_CHANNELS_API}?part=snippet%2Cstatistics&id=${process.env.YOUTUBE_CHANNEL_ID}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`).then((rd) =>
  rd.json()
  );

  return {
    props: {
      latest,
      about,
      hot,
      youtube
    },
    revalidate: 21600
  };
}

export default function Community({ latest, about, hot, youtube }) {
  return (
    <>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Youtube latest={latest} about={about} hot={hot} youtube={youtube} />
        <Reddit latest={latest} about={about} hot={hot} />
<div></div>
      </div>
      
    </>
  );
}
