import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { generateSignature } from '../../utils/cloudinary-signature';
import Script from 'next/script';

const Emote = () => {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  const { id } = router.query;

  const [title, setTitle] = useState('');
  const [shortcut, setShortcut] = useState('');
  const [url, setUrl] = useState('');
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !shortcut || !url) {
      setFormError('Please fill in all the fields correctly.');
      return;
    }

    const { data, error } = await supabase
      .from('emotes')
      .update([{ title, shortcut, url, user_id: user.id }])
      .eq('id', id)
      .select();

    if (error) {
      console.log(error);
      setFormError('Please fill in all the fields correctly.');
    }
    if (data) {
      console.log(data);
      setFormError(null);
      router.push('/emotes');
    }
  };

  useEffect(() => {
    const fetchEmote = async () => {
      const { data, error } = await supabase
        .from('emotes')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        router.push('/emotes');
      }
      if (data) {
        setTitle(data.title);
        setShortcut(data.shortcut);
        setUrl(data.url);
      }
    };
    fetchEmote();
  }, [id]);

  const openWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        uploadSignature: generateSignature,
        apiKey: process.env.CLOUDINARY_API_KEY,
        uploadPreset: 'emotes',
        sources: ['local', 'url'],
        showAdvancedOptions: false,
        multiple: false,
        defaultSource: 'local',
        resource_type: 'image',
        styles: {
          palette: {
            window: '#000000',
            sourceBg: '#000000',
            windowBorder: '#8E9FBF',
            tabIcon: '#FFFFFF',
            inactiveTabIcon: '#8E9FBF',
            menuIcons: '#2AD9FF',
            link: '#08C0FF',
            action: '#336BFF',
            inProgress: '#00BFFF',
            complete: '#33ff00',
            error: '#EA2727',
            textDark: '#000000',
            textLight: '#FFFFFF'
          }
        }
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info);
          setUrl(result.info.secure_url);
          document
            .getElementById('uploadedimage')
            .setAttribute('src', result.info.secure_url);
        }
      }
    );
    widget.open(); // open up the widget after creation
  };

  return (
    <>
      <Script
        src="https://widget.Cloudinary.com/v2.0/global/all.js"
        type="text/javascript"
      />

      <div>
        <form>
          <div>
            <img id="uploadedimage" src={url} className="w-[100px] h-[100px]"></img>
          </div>
          <span>
            <button
              type="button"
              onClick={openWidget}
              className="font-bold text-base py-2 px-4 rounded bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600"
            >
              Add Image
            </button>
          </span>
          <input
            type="hidden"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div>
            <input
              type="text"
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block p-3 text-base text-white bg-transparent rounded-lg border border-gray-500 hover:border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            />
          </div>
          <div>
            <input
              type="text"
              id="shortcut"
              placeholder="Shortcut"
              value={shortcut}
              onChange={(e) => setShortcut(e.target.value)}
              className="block p-3 text-base text-white bg-transparent rounded-lg border border-gray-500 hover:border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            />
          </div>
          <span>
            <button
              type="button"
              onClick={handleSubmit}
              className="font-bold text-base py-2 px-4 rounded bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600"
            >
              Create Emote
            </button>
          </span>
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </>
  );
};

export default Emote;

// export const getServerSideProps = withPageAuth({ redirectTo: '/login' });
