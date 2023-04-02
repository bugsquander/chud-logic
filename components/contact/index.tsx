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
                className="shadow-sm bg-transparent border border-gray-500 hover:border-gray-300 text-white text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="username@email.com"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-base text-white bg-transparent rounded-lg border border-gray-500 hover:border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Subject"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <textarea
                id="message"
                className="block p-2.5 w-full text-base text-white bg-transparent rounded-lg shadow-sm border border-gray-500 hover:border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="What do you need to whine about you fucking baby?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="font-bold text-base py-2 px-4 rounded bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600"
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
