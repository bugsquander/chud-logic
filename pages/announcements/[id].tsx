import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

const Announcement = () => {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  const { id } = router.query;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) {
      setFormError("Please fill in all the fields correctly.");
      return;
    }

    const { data, error } = await supabase
      .from("announcements")
      .update([{ title, body, user_id: user.id }])
      .eq("id", id)
      .select();

    if (error) {
      console.log(error);
      setFormError("Please fill in all the fields correctly.");
    }
    if (data) {
      console.log(data);
      setFormError(null);
      router.push("/announcements");
    }
  };

  useEffect(() => {
    const fetchAnnouncement = async () => {
      const { data, error } = await supabase
        .from("announcements")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        router.push("/announcements");
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
        <form>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="shortcut">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <button type="button" onClick={handleSubmit}>
            Update Announcement
          </button>
          
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </>
  );
};

export default Announcement;

export const getServerSideProps = withPageAuth({ redirectTo: "/login" });