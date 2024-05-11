import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/react";
import { FaPaperPlane as PaperPlane } from "react-icons/fa";
import { useMemo, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mknlazko");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const isInvalid = useMemo(() => {
    if (formData.email === "") return false;

    return validateEmail(formData.email) ? false : true;
  }, [formData]);

  const handleFormSubmit = async (e: any) => {
    try {
      await toast.promise(handleSubmit(e), {
        pending: "Sending message...",
        success: {
          render() {
            return "Message sent!";
          },
          toastId: "success1",
        },
        error: "Failed to send the message. Please try again later!",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-10">
      <div>
        <Input
          isRequired={true}
          size="lg"
          type="name"
          id="name"
          name="name"
          variant="underlined"
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div>
        <Input
          isRequired={true}
          size="lg"
          type="email"
          id="email"
          name="email"
          variant="underlined"
          label="Email Address"
          isInvalid={isInvalid}
          errorMessage={isInvalid && "Please enter a valid email"}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <Textarea
          isRequired={true}
          disableAutosize={true}
          size="lg"
          id="message"
          name="message"
          label="Mesasage"
          variant="underlined"
          placeholder="Enter your message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="mt-5">
        <Button
          isLoading={state.submitting}
          type="submit"
          color="primary"
          disabled={state.submitting}
          endContent={<PaperPlane size={20} />}
          size="lg"
          className="text-xl font-bold"
        >
          Send
        </Button>
      </div>
    </form>
  );
}
