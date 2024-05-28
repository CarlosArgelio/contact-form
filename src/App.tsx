import { Layout } from "./Components/Layout";

const App = () => {
  return (
    <>
      <main className="m-4 h-[100vh]">
        <section className="p-6 bg-white rounded-lg">
          <header>Contact Us</header>
          <Layout>
            <form>
              <fieldset>
                <fieldset>
                  <label className="block" htmlFor="first-name">
                    First Name *
                  </label>
                  <input id="first-name" type="text" />

                  <label className="block" htmlFor="last-name">
                    Last Name *
                  </label>
                  <input id="last-name" type="text" />
                </fieldset>

                <fieldset>
                  <label className="block" htmlFor="email">
                    Email Address *
                  </label>
                  <input id="email" type="email" />
                </fieldset>

                <fieldset>
                  <legend>Query Type</legend>
                  <label className="block" htmlFor="general-enquiry">
                    General Enquiry *
                  </label>
                  <input id="general-enquiry" type="radio" />

                  <label className="block" htmlFor="support-request">
                    Support Request *
                  </label>
                  <input id="support-request" type="radio" />
                </fieldset>

                <fieldset>
                  <label className="block" htmlFor="message">
                    Message *
                  </label>
                  <input id="message" type="text" />
                </fieldset>
              </fieldset>

              <fieldset className="my-10">
                <label htmlFor="privilagies">
                  I consent to being contacted by the team *
                </label>
                <input type="checkbox" id="privilagies" />
              </fieldset>

              <button>Submit</button>
            </form>
          </Layout>
        </section>
      </main>
    </>
  );
};

export default App;
