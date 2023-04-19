import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';

const reddit = 'https://www.reddit.com';

export default function Reddit({ latest, about, hot }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-5">
        {[about].map((about) => {
          const { data = {} } = about;
          var date = new Date(data.created * 1000)
            .toUTCString()
            .substring(0, 50);
          return (
            <section key={data.id}>
              <div className=" bg-black/20 w-full p-5 border rounded-lg border-zinc-800 text-sm">
                <h3 className="text-2xl uppercase italic font-black">
                  <FontAwesomeIcon
                    icon={faRedditAlien}
                    className="text-vomit-500 mr-1"
                  />
                  Reddit
                </h3>
                <div className="w-full my-3">
                  <img
                    src={data.mobile_banner_image}
                    className="object-cover h-[250px] border rounded-lg border-zinc-800"
                  />
                </div>
                <div>
                  <a href={`${reddit}/r/${data.title}`}>r/{data.title}</a>
                </div>
                <div>{data.public_description}</div>
                <div>
                  <span className="text-zinc-500 mr-1">Members:</span>
                  <span>{data.subscribers}</span>
                  <span className="mx-1 text-zinc-400">/</span>
                  <span className="text-zinc-500 mr-1">Online:</span>
                  <span>{data.accounts_active}</span>
                </div>
                <div>
                  <span className="text-zinc-500 mr-1">Created:</span>
                  <span>{date}</span>
                </div>
              </div>
            </section>
          );
        })}
        {[latest].map((latest, index) => {
          const { data = {} } = latest;
          return (
            <section key={index} className="w-full">
              <div className=" bg-black/20 w-full p-5 border rounded-lg border-zinc-800">
                <h3 className="text-2xl uppercase italic font-black">
                  <FontAwesomeIcon
                    icon={faRedditAlien}
                    className="text-vomit-500 mr-1"
                  />
                  Latest Posts
                </h3>
                {[data].map((divide, index) => {
                  const { children = {} } = divide;
                  return (
                    <div key={index} className="text-xs">
                      {children.map((posts, index) => {
                        const { data = {} } = posts;
                        var date = new Date(data.created * 1000)
                          .toUTCString()
                          .substring(0, 50);
                        const getStyle = () => {
                          if (data.link_flair_text == 'Memes')
                            return 'bg-[#46d160] text-black px-1 py-1 rounded-md mt-2 w-fit';
                          if (data.link_flair_text == 'Drama')
                            return 'bg-[#7193ff] px-1 py-1 rounded-md mt-2 w-fit';
                          if (data.link_flair_text == 'Schizo')
                            return 'bg-[#610a19] px-1 py-1 rounded-md mt-2 w-fit';
                          if (data.link_flair_text == 'Discussion ')
                            return 'bg-[#ffd635] px-1 py-1 rounded-md mt-2 w-fit';
                          else return '';
                        };
                        return (
                          <div key={index} className="mt-2">
                            <div>
                              <a
                                href={`${reddit}${data.permalink}`}
                                className="hover:text-zinc-300 text-sm"
                              >
                                {data.title}
                              </a>
                            </div>
                            <div>
                              <span className="text-zinc-500">
                                <a
                                  href={`${reddit}/u/${data.author}`}
                                  className="hover:text-zinc-600"
                                >
                                  {data.author}
                                </a>
                              </span>
                              <span className="mx-1 text-zinc-400">/</span>
                              <span>{date}</span>
                            </div>
                            <div className={`${getStyle()}`}>
                              {data.link_flair_text}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
        {[hot].map((hot, index) => {
          const { data = {} } = hot;
          return (
            <section key={index} className="w-full">
              <div className=" bg-black/20 w-full p-5 border rounded-lg border-zinc-800">
                <h3 className="text-2xl uppercase italic font-black">
                  <FontAwesomeIcon
                    icon={faRedditAlien}
                    className="text-vomit-500 mr-1"
                  />
                  Hot Posts
                </h3>

                {[data].map((divide, index) => {
                  const { children = {} } = divide;
                  return (
                    <div key={index} className="text-xs">
                      {children.map((posts, index) => {
                        const { data = {} } = posts;
                        var date = new Date(data.created * 1000)
                          .toUTCString()
                          .substring(0, 50);
                        const getStyle = () => {
                          if (data.link_flair_text == 'Memes')
                            return 'bg-[#46d160] text-black px-1 py-1 rounded-md mt-2 w-fit';
                          if (data.link_flair_text == 'Drama')
                            return 'bg-[#7193ff] px-1 py-1 rounded-md mt-2 w-fit';
                          if (data.link_flair_text == 'Schizo')
                            return 'bg-[#610a19] px-1 py-1 rounded-md mt-2 w-fit';
                          if (data.link_flair_text == 'Discussion ')
                            return 'bg-[#ffd635] px-1 py-1 rounded-md mt-2 w-fit';
                          else return '';
                        };
                        return (
                          <div key={index} className="mt-2">
                            <div>
                              <a
                                href={`${reddit}${data.permalink}`}
                                className="hover:text-zinc-300 text-sm"
                              >
                                {data.title}
                              </a>
                            </div>
                            <div>
                              <span className="text-zinc-500">
                                <a
                                  href={`${reddit}/u/${data.author}`}
                                  className="hover:text-zinc-600"
                                >
                                  {data.author}
                                </a>
                              </span>
                              <span className="mx-1 text-zinc-400">/</span>
                              <span>{date}</span>
                            </div>
                            <div className={`${getStyle()}`}>
                              {data.link_flair_text}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
