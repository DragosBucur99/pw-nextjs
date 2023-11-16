import Button from "./Button";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mknlazko");
  if (state.succeeded) {
    return <p>Message sent!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <label htmlFor="name" className="text-sm">
          Name
        </label>
        <input id="name" type="name" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="email" className="text-sm">
          Email Address
        </label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="message" className="text-sm">
          Message
        </label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <Button name="Submit" type="submit" disabled={state.submitting} />
    </form>
  );
}
