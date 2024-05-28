const App = () => {
  return (
    <>
      <main>
        <section>
          <header>Contact Us</header>
          <form>
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

            <fieldset>
              <input type="checkbox" name="" id="" />
              <p>I consent to being contacted by the team *</p>
            </fieldset>

            <button>Submit</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default App;
