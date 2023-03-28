import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

const Create = () => {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

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
      .insert([{ title, body, user_id: user.id }]);
      router.push("/announcements");

    if (error) {
      console.log(error);
      setFormError("Please fill in all the fields correctly.");
    }
    if (data) {
      console.log(data);
      setFormError(null);
    }
  };

  return (
    <div className="page create">
      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="button" onClick={handleSubmit}>
          Create Announcement
        </button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Create;

export const getServerSideProps = withPageAuth({ redirectTo: "/login" });