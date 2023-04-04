import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';

const Announcement = () => {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  const { id } = router.query;

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) {
      setFormError('Please fill in all the fields correctly.');
      return;
    }

    const { data, error } = await supabase
      .from('announcements')
      .update([{ title, body, user_id: user.id }])
      .eq('id', id)
      .select();

    if (error) {
      console.log(error);
      setFormError('Please fill in all the fields correctly.');
    }
    if (data) {
      console.log(data);
      setFormError(null);
      router.push('/announcements');
    }
  };

  useEffect(() => {
    const fetchAnnouncement = async () => {
      const { data, error } = await supabase
        .from('announcements')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        router.push('/announcements');
      }
      if (data) {
        setTitle(data.title);
        setBody(data.body);
      }
    };
    fetchAnnouncement();
  }, [id]);

  return (
    <>
      <div>
        <form className="space-y-5">
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block p-2.5 w-fit text-base text-white bg-zinc-700/20 rounded-lg border border-zinc-700 hover:border-zinc-600 focus:border-zinc-500 outline-none"
          />

          <textarea
            id="body"
            value={body}
            placeholder="Body"
            onChange={(e) => setBody(e.target.value)}
            className="block p-2.5 w-fit text-base text-white bg-zinc-700/20 rounded-lg border border-zinc-700 hover:border-zinc-600 focus:border-zinc-500 outline-none"
          />

          <button
            type="button"
            onClick={handleSubmit}
            className="font-bold text-base w-fit py-2 px-4 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600 hover:border-zinc-500"
          >
            Update Announcement
          </button>

          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </>
  );
};

export default Announcement;

export const getServerSideProps = withPageAuth({ redirectTo: '/login' });
