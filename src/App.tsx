import { TextField, RadioSelection, TitleObligatory } from "./Components/Input";
import { Button } from "./Components/Button";
import { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <main className="m-4 h-[100vh]">
        <section className="relative p-6 mt-8 md:mx-10 md:my-32 xl:mx-80 bg-white rounded-lg">
          {open && (
            <aside className="absolute p-4 -top-2 left-1 md:left-28 md:-top-20 lg:left-56 xl:left-44 bg-grey-900 rounded-lg">
              <header className="text-white font-karla-bold">
                Message Sent!
              </header>
              <p className="text-honeydew">
                Thanks for completing the form. We'll be in touch soon!
              </p>
            </aside>
          )}
          <form onSubmit={handleOnSubmit}>
            <header className="text-3xl tracking-[-1px] font-karla-bold mb-8">
              Contact Us
            </header>
            <fieldset>
              <fieldset className="md:grid md:grid-cols-2 md:gap-4">
                <TextField id="first-name" title="First Name" type="text" />
                <TextField id="last-name" title="Last Name" type="text" />
              </fieldset>

              <fieldset>
                <TextField id="email" title="Email Address" type="email" />
              </fieldset>

              <fieldset className="my-6 md:grid md:grid-cols-2 md:gap-4">
                <legend className="mb-4">
                  <TitleObligatory title="Query Type" />
                </legend>

                <RadioSelection id="general-enquiry" title="General Enquiry" />
                <RadioSelection id="support-request" title="Support Request" />
              </fieldset>

              <fieldset>
                <TextField id="message" title="Message" type="text" />
              </fieldset>
            </fieldset>

            <fieldset className="flex gap-4 my-10 text-grey-900">
              <input type="checkbox" id="privilagies" />
              <label htmlFor="privilagies">
                I consent to being contacted by the team *
              </label>
            </fieldset>

            <Button />
          </form>
        </section>
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
};

export default App;
