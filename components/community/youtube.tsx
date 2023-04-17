import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const youtubeurl = 'https://www.youtube.com';

export default function Youtube({ latest, about, hot, youtube }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-5">
        {youtube.items.map((channel) => {
          const { id, snippet, statistics = {} } = channel;
          const { title, description, customUrl, publishedAt, thumbnails =  {}, resourceId } = snippet;
          const { viewCount, subscriberCount, videoCount } = statistics;
          const { high = {} } = thumbnails;
          return (
            <section key={id}>
              <div className=" bg-black/20 w-full p-5 border rounded-lg border-zinc-800 text-sm">
                <h3 className="text-2xl uppercase italic font-black">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="text-vomit-500 mr-1"
                  />
                  YouTube
                </h3>
                <div className="w-full my-3">
                  <img
                    src={high.url}
                    alt=""
                    className="object-cover border rounded-lg border-zinc-800"
                  />
                </div>

                <div>
                  <a href={`${youtubeurl}/${customUrl}`}>{title}</a>
                </div>
                <div>{description}</div>
                <div>
                  <span className="text-zinc-500 mr-1">Created:</span>
                  <span>{publishedAt}</span>
                </div>
                <div>
                  <span className="text-zinc-500 mr-1">Views:</span>
                  <span>{viewCount}</span>
                </div>
                <div>
                  <span className="text-zinc-500 mr-1">Subscribers:</span>
                  <span>{subscriberCount}</span>
                </div>
                <div>
                  <span className="text-zinc-500 mr-1">Videos:</span>
                  <span>{videoCount}</span>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
