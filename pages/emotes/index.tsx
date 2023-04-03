import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Emote from '@/components/emotes/emote';

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
      <div className="mb-5 flex justify-between ">
          <span>
            <button
              aria-label="Create Emote"
              title="Create Emote"
              onClick={handleClick}
              className="font-bold text-base py-2 px-4 rounded bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600"
            >
              Create Emote
            </button>
          </span>
        <span className="space-x-2">
          <span>Order by: </span>
          <span>
            <button
              aria-label="Order Emotes by Creation Date"
              title="Order Emotes by Creation Date"
              onClick={() => setOrderBy('created_at')}
              className="font-bold text-base py-2 px-4 rounded bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600"
            >
              Created
            </button>
          </span>
          <span>
            <button
              aria-label="Order Emotes by Title"
              title="Order Emotes by Title"
              onClick={() => setOrderBy('title')}
              className="font-bold text-base py-2 px-4 rounded bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600"
            >
              Title
            </button>
          </span>
        </span>
      </div>
        {fetchError && <p>{fetchError}</p>}
        {emotes && (
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-5 justify-between">
            {emotes.map((emote) => (
              <div className="" key={emote.id}>
                <Emote key={emote.id} emote={emote} onDelete={handleDelete} />
              </div>
            ))}
          </div>
        )}
    </>
  );
};

export default Emotes;
