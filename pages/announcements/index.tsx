import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import Announcement from '../../components/announcements/announcement';
import { useRouter } from 'next/router';
import styles from './announcements.module.css';

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
      <div className={styles.buttons}>
        <span className={styles.create}>
          <button
            aria-label="Create Announcement"
            title="Create Announcement"
            onClick={handleClick}
          >
            Create Announcement
          </button>
        </span>
        <span>Order by: </span>
        <span className={styles.orderbycreate}>
          <button
            aria-label="Order Announcements by Creation Date"
            title="Order Announcements by Creation Date"
            onClick={() => setOrderBy('created_at')}
          >
            Created
          </button>
        </span>
        <span className={styles.orderbytitle}>
          <button
            aria-label="Order Announcements by Title"
            title="Order Announcements by Title"
            onClick={() => setOrderBy('title')}
          >
            Title
          </button>
        </span>
      </div>
      <div className={styles.announcement}>
        {fetchError && <p>{fetchError}</p>}
        {announcements && (
          <div className={styles.grid}>
            {announcements.map((announcement) => (
              <div className={styles.item} key={announcement.id}>
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
