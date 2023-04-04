import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { generateSignature } from '../../utils/cloudinary-signature';
import Script from 'next/script';

const CreateEmote = () => {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [shortcut, setShortcut] = useState('');
  const [url, setUrl] = useState(undefined);
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !shortcut || !url) {
      setFormError('Please fill in all the fields correctly.');
      return;
    }

    const { data, error } = await supabase
      .from('emotes')
      .insert([{ title, shortcut, url, user_id: user.id }]);
    router.push('/emotes');

    if (error) {
      console.log(error);
      setFormError('Please fill in all the fields correctly.');
    }
    if (data) {
      console.log(data);
      setFormError(null);
    }
  };

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
        <form className="space-y-5">
          <div>
            <img
              id="uploadedimage"
              src={url}
              className="w-[100px] h-[100px]"
            ></img>
          </div>
          <input
            type="hidden"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div>
            <button
              type="button"
              onClick={openWidget}
              className="font-bold text-base w-fit py-2 px-4 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600 hover:border-zinc-500"
            >
              Add Image
            </button>
          </div>
          <div>
            <input
              type="text"
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block p-2.5 w-fit text-base text-white bg-zinc-700/20 rounded-lg border border-zinc-700 hover:border-zinc-600 focus:border-zinc-500 outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              id="shortcut"
              placeholder="Shortcut"
              value={shortcut}
              onChange={(e) => setShortcut(e.target.value)}
              className="block p-2.5 w-fit text-base text-white bg-zinc-700/20 rounded-lg border border-zinc-700 hover:border-zinc-600 focus:border-zinc-500 outline-none"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={handleSubmit}
              className="font-bold text-base w-fit py-2 px-4 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600 hover:border-zinc-500"
            >
              Create Emote
            </button>
          </div>
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </>
  );
};

export default CreateEmote;
