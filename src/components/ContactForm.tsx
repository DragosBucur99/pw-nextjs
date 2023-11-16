import Button from "./Button";

export default function ContactForm() {
  return (
    <form
      id="contact-form"
      onSubmit={() => console.log("YES")}
      method="POST"
      className="flex flex-col gap-2 "
    >
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" aria-describedby="emailHelp" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea rows={2}></textarea>
      </div>
      <Button name="Submit" type="submit" />
    </form>
  );
}
