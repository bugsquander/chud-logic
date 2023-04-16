import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

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

      <span>
        <Link
          href={'/emotes/' + emote.id}
          aria-label="Edit Emote"
          title="Edit Emote"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </Link>
      </span>

      <span>
        <FontAwesomeIcon
          icon={faTrash}
          aria-label="Delete Emote"
          title="Delete Emote"
          onClick={handleDelete}
          className='cursor-pointer'
        />
      </span>
    </div>
  );
};

export default Emote;
