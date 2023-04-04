import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <>
      <section className="dark:bg-gray-900">
        <div className="">
          <h2 className="mb-2.5 text-3xl font-black uppercase italic dark:text-white">
            <FontAwesomeIcon icon={faEnvelope} className="text-vomit-500 mr-1" />
            Contact
          </h2>
          <p className="mb-5 text-white">
            Got a technical issue? Need to make a complaint? Sick and tired of
            hearing about Mr Girl? (Preferably don't) Get in contact.
          </p>
          <form action="#" className="space-y-5">
            <div>
              <input
                type="email"
                id="email"
                className="block p-2.5 w-full text-base text-white bg-zinc-700/20 rounded-lg border border-zinc-700 hover:border-zinc-600 focus:border-zinc-500"
                placeholder="username@email.com"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                className="block p-2.5 w-full text-base text-white bg-zinc-700/20 rounded-lg border border-zinc-700 hover:border-zinc-600 focus:border-zinc-500"
                placeholder="Subject"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <textarea
                id="message"
                className="block p-2.5 w-full text-base text-white bg-zinc-700/20 rounded-lg border border-zinc-700 hover:border-zinc-600 focus:border-zinc-500"
                placeholder="What do you need to whine about you fucking baby?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="font-bold text-base w-fit py-2 px-4 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600 hover:border-zinc-500"
              >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
