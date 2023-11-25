import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/react";
import { IoRocketOutline as Rocket } from "react-icons/io5";
import { useMemo, useState } from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mknlazko");
  const [value, setValue] = useState("");
  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);
  if (state.succeeded) {
    return <p>Message sent!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div>
        <Input
          size="lg"
          type="name"
          id="name"
          name="name"
          variant="underlined"
          label="Name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div>
        <Input
          value={value}
          size="lg"
          type="email"
          id="email"
          name="email"
          variant="underlined"
          label="Email Address"
          isInvalid={isInvalid}
          errorMessage={isInvalid && "Please enter a valid email"}
          onValueChange={setValue}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <Textarea
          size="lg"
          id="message"
          name="message"
          label="Mesasage"
          variant="underlined"
          placeholder="Enter your message"
          className="max-w-xs"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="mt-5">
        <Button
          type="submit"
          color="primary"
          endContent={<Rocket size={25} />}
          size="lg"
          className="text-xl font-bold"
        >
          Send
        </Button>
        {/* <Button name="Send 🚀" type="submit" disabled={state.submitting} /> */}
      </div>
    </form>
  );
}
