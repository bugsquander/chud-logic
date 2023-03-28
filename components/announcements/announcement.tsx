import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Announcement = ({ announcement, onDelete }) => {
  const supabase = useSupabaseClient();

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("announcements")
      .delete()
      .eq("id", announcement.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(announcement.id);
    }
  };

  return (
    <div className="announcement">
      <h3>{announcement.title}</h3>
      <p>{announcement.body}</p>
      <p>{announcement.created_at}</p>

      <Link
        href={"/announcements/" + announcement.id}
        aria-label="Edit Announcement"
        title="Edit Announcement"
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </Link>
      <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
    </div>
  );
};

export default Announcement;
