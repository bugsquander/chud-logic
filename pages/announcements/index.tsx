import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import Announcement from '../../components/announcements/announcement';
import { useRouter } from 'next/router';

const Announcements = () => {
  const supabase = useSupabaseClient();
  const router = useRouter();

  const [fetchError, setFetchError] = useState(null);
  const [announcements, setAnnouncements] = useState(null);
  const [orderBy, setOrderBy] = useState('created_at');

  const handleDelete = (id) => {
    setAnnouncements((prevAnnouncements) => {
      return prevAnnouncements.filter((announcement) => announcement.id !== id);
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/announcements/create');
  };

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const { data, error } = await supabase
        .from('announcements')
        .select()
        .order(orderBy, { ascending: false });

      if (error) {
        setFetchError('Could not fetch the announcement');
        setAnnouncements(null);
      }
      if (data) {
        setAnnouncements(data);
        setFetchError(null);
      }
    };

    fetchAnnouncements();
  }, [orderBy]);

  return (
    <>
      <div className="mb-5 flex justify-between ">
        <span>
          <button
            aria-label="Create Announcement"
            title="Create Announcement"
            onClick={handleClick}
            className="font-bold text-base py-2 px-4 rounded bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600"
          >
            Create Announcement
          </button>
        </span>
        <span className="space-x-2">
          <span>Order by: </span>
          <span>
            <button
              aria-label="Order Announcements by Creation Date"
              title="Order Announcements by Creation Date"
              onClick={() => setOrderBy('created_at')}
              className="font-bold text-base py-2 px-4 rounded bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600"
            >
              Created
            </button>
          </span>
          <span>
            <button
              aria-label="Order Announcements by Title"
              title="Order Announcements by Title"
              onClick={() => setOrderBy('title')}
              className="font-bold text-base py-2 px-4 rounded bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600"
            >
              Title
            </button>
          </span>
        </span>
      </div>
      <div>
        {fetchError && <p>{fetchError}</p>}
        {announcements && (
          <div className="w-full flex flex-wrap justify-start items-center content-center gap-2.5 ">
            {announcements.map((announcement) => (
              <div key={announcement.id}>
                <Announcement
                  key={announcement.id}
                  announcement={announcement}
                  onDelete={handleDelete}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Announcements;
