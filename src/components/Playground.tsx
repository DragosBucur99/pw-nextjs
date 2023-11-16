import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

export default function Playground() {
  const [data, setData] = useState<string | undefined>(undefined);
  const notify = () => toast("Tests triggered!");
  const fetchAPI = async () => {
    try {
      notify();
      const resp = await fetch("https://api.dragosportfolio.com", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const body = await resp.json();
      setData(JSON.stringify(body));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full bg-neutral-800 min-h-[20rem]">
        <button className="p-5 border-4" onClick={fetchAPI}>
          FETCH
        </button>
        <ToastContainer />
        {data && <p>{data}</p>}
      </div>
    </>
  );
}
