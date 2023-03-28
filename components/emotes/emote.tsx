import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from '@/pages/emotes/emotes.module.css';

const Emote = ({ emote, onDelete }) => {
  const supabase = useSupabaseClient();

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('emotes')
      .delete()
      .eq('id', emote.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(emote.id);
    }
  };

  return (
    <div className="emote">
      <div>
        <img src={emote.url}></img>
      </div>
      <h3>{emote.title}</h3>
      <p>{emote.shortcut}</p>

      <span className={styles.edit}>
        <Link
          href={'/emotes/' + emote.id}
          aria-label="Edit Emote"
          title="Edit Emote"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </Link>
      </span>

      <span className={styles.delete}>
        <FontAwesomeIcon
          icon={faTrash}
          aria-label="Delete Emote"
          title="Delete Emote"
          onClick={handleDelete}
        />
      </span>
    </div>
  );
};

export default Emote;
