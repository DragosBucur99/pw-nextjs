import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";

export default function Playground() {
  const [data, setData] = useState<string | undefined>(undefined);
  const notify = () => toast("Tests triggered!");
  const [selectedKeys, setSelectedKeys] = useState(new Set(["test1"]));

  // const fetchAPI = async () => {
  //   try {
  //     notify();
  //     const resp = await fetch("https://api.dragosportfolio.com", {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     const body = await resp.json();
  //     setData(JSON.stringify(body));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const fetchAPI = async () => {
    try {
      notify();
      const resp = await fetch("http://localhost:5066/playground", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ITEM: "cake",
        }),
      });
      const body = await resp.json();
      setData(JSON.stringify(body));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
        <Listbox
          aria-label="Multiple selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          // @ts-ignore
          onSelectionChange={setSelectedKeys}
        >
          <ListboxItem key="test1">Test1</ListboxItem>
          <ListboxItem key="test2">Test2</ListboxItem>
          <ListboxItem key="test3">Test3</ListboxItem>
        </Listbox>
      </div>
      <div className="border-small border-default-200 px-1 py-2 rounded-small min-h-[10rem]">
        <h3>Test steps</h3>
      </div>
      <Button color="primary" onClick={fetchAPI}>
        RUN
      </Button>
      <ToastContainer />
    </div>
    // <>
    //   <div className="w-full bg-neutral-800">
    //     <button className="p-5 border-4" onClick={fetchAPI}>
    //       FETCH
    //     </button>
    //     {data && <p>{data}</p>}
    //   </div>
    // </>
  );
}
