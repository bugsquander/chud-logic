import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  
  return (
    <>
      <section className="dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-black uppercase italic text-center dark:text-white">
            <FontAwesomeIcon icon={faEnvelope} className="text-vomit-500" /> Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-white text-center text-white dark:text-gray-400 text-sm">
            Got a technical issue? Need to make a complaint? Sick and tired of
            hearing about Mr Girl? (Preferably don't) Get in contact.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-transparent border border-gray-500 hover:border-gray-300 text-white text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@email.com"
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
                placeholder="What do you need to talk about?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="font-bold text-base py-2 px-4 rounded bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600"
            >
              Send message
            </button>
          </form>

          <div className="flex flex-wrap justify-center">
  <button
    type="button"
    className="inline-block rounded bg-danger px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]"
    data-te-toggle="popover"
    data-te-title="Popover title"
    data-te-content="And here's some amazing content. It's very engaging. Right?"
    data-te-ripple-init
    data-te-ripple-color="light">
    Click to toggle popover
  </button>
</div>

        </div>
      </section>{' '}
    </>
  );
};

export default Contact;
