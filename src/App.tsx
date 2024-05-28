import { Layout } from "./Components/Layout";
import { TextField, RadioSelection } from "./Components/Input";

const App = () => {
  return (
    <>
      <main className="m-4 h-[100vh]">
        <section className="p-6 mt-8 bg-white rounded-lg">
          <header className="text-3xl tracking-[-1px] font-karla-bold mb-8">
            Contact Us
          </header>
          <Layout>
            <form>
              <fieldset>
                <fieldset>
                  <TextField id="first-name" title="First Name" type="text" />
                  <TextField id="last-name" title="Last Name" type="text" />
                </fieldset>

                <fieldset>
                  <TextField id="email" title="Email Address" type="text" />
                </fieldset>

                <fieldset className="my-6">
                  <legend className="mb-4">Query Type</legend>

                  <RadioSelection
                    id="general-enquiry"
                    title="General Enquiry"
                  />
                  <RadioSelection
                    id="support-request"
                    title="Support Request"
                  />
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
