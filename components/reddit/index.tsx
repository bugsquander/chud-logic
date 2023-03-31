const reddit = "https://www.reddit.com";
const subreddit = "r/chudlogic";

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
  return {
    props: {
      latest,
      about,
      hot,
    },
    revalidate: 21600,
  };
}

export default function Reddit({ latest, about, hot }) {
  return (
    <>
        <div>
          {[about].map((about) => {
            const { data = {} } = about;
            var date = new Date(data.created * 1000)
              .toUTCString()
              .substring(0, 50);
            return (
              <div key={data.id}>
                <div>
                  <img src={data.mobile_banner_image} alt="" />
                </div>
                <div>
                  <a href={reddit}>{data.title}</a>
                </div>
                <div>{data.public_description}</div>
                <div>
                  <span>Members: {data.subscribers}</span>
                  <span>Online: {data.accounts_active}</span>
                </div>
                <div>{date}</div>
              </div>
            );
          })}
        </div>
        {[latest].map((latest, index) => {
          const { data = {} } = latest;
          return (
            <div key={index}>
              {[data].map((divide, index) => {
                const { children = {} } = divide;
                return (
                  <div key={index}>
                    {children.map((posts) => {
                      const { data = {} } = posts;
                      var date = new Date(data.created * 1000)
                        .toUTCString()
                        .substring(0, 50);
                      return (
                        <div key={data.id}>
                          <div>
                            <a href={`${reddit}${data.permalink}`}>
                              {data.title}
                            </a>
                          </div>
                          <div>
                            <span>
                              <a href={`${reddit}/u/${data.author}`}>
                                {data.author}
                              </a>
                            </span>
                            <span>{date}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
        {[hot].map((hot, index) => {
          const { data = {} } = hot;
          return (
            <div key={index}>
              {[data].map((divide, index) => {
                const { children = {} } = divide;
                return (
                  <div key={index}>
                    {children.map((posts) => {
                      const { data = {} } = posts;
                      var date = new Date(data.created * 1000)
                        .toUTCString()
                        .substring(0, 50);
                      const getStyle = () => {
                        if (data.link_flair_text == "Memes") return 'bg-[#46d160]';
                        if (data.link_flair_text == "Drama") return 'bg-[#7193ff]';
                        if (data.link_flair_text == "Schizo") return 'bg-[#610a19]';
                        if (data.link_flair_text == "Discussion ") return 'bg-[#ffd635]';
                        else return '';
                      };
                      return (
                        <div key={data.id}>
                          <div>
                            <a href={`${reddit}${data.permalink}`}>
                              {data.title}
                            </a>
                          </div>
                          <div>
                            <span>
                              <a href={`${reddit}/u/${data.author}`}>
                                {data.author}
                              </a>
                            </span>
                            <span>{date}</span>
                          </div>
                          <div>
                            <span className={getStyle()}>{data.link_flair_text}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
    </>
  );
}
