import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { generateSignature } from '../../utils/cloudinary-signature';
import Script from 'next/script';
import styles from './emotes.module.css';

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

      <div className={styles.emote}>
        <img id="uploadedimage" src=""></img>
        <form>
          <div className={styles.image}>
            <img id="uploadedimage" src={url}></img>
          </div>
          <input
            type="hidden"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className={styles.title}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.shortcut}>
            <label htmlFor="shortcut">Shortcut:</label>
            <input
              type="text"
              id="shortcut"
              value={shortcut}
              onChange={(e) => setShortcut(e.target.value)}
            />
          </div>
          <span className={styles.upload}>
            <button type="button" onClick={openWidget}>
              Add Image
            </button>
          </span>
          <span className={styles.create}>
            <button type="button" onClick={handleSubmit}>
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
