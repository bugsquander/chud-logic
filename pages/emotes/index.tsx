import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Emote from '../../components/emotes/emote';
import styles from './emotes.module.css';

const Emotes = () => {
  const supabase = useSupabaseClient();
  const router = useRouter();

  const [fetchError, setFetchError] = useState(null);
  const [emotes, setEmotes] = useState(null);
  const [orderBy, setOrderBy] = useState('title');

  const handleDelete = (id) => {
    setEmotes((prevEmotes) => {
      return prevEmotes.filter((emote) => emote.id !== id);
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/emotes/create');
  };

  useEffect(() => {
    const fetchEmotes = async () => {
      const { data, error } = await supabase
        .from('emotes')
        .select()
        .order(orderBy, { ascending: true });

      if (error) {
        setFetchError('Could not fetch the emotes');
        setEmotes(null);
      }
      if (data) {
        setEmotes(data);
        setFetchError(null);
      }
    };

    fetchEmotes();
  }, [orderBy]);

  return (
    <>
      <div className={styles.buttons}>
        <span className={styles.create}>
          <button
            aria-label="Create Emote"
            title="Create Emote"
            onClick={handleClick}
          >
            Create Emote
          </button>
        </span>
        <span>Order by: </span>
        <span className={styles.orderbycreate}>
          <button
            aria-label="Order Emotes by Creation Date"
            title="Order Emotes by Creation Date"
            onClick={() => setOrderBy('created_at')}
          >
            Created
          </button>
        </span>
        <span className={styles.orderbytitle}>
          <button
            aria-label="Order Emotes by Title"
            title="Order Emotes by Title"
            onClick={() => setOrderBy('title')}
          >
            Title
          </button>
        </span>
      </div>
      <div className={styles.emote}>
        {fetchError && <p>{fetchError}</p>}
        {emotes && (
          <div className={styles.grid}>
            {emotes.map((emote) => (
              <div className={styles.item} key={emote.id}>
                <Emote key={emote.id} emote={emote} onDelete={handleDelete} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Emotes;
