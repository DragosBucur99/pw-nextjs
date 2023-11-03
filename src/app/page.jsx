"use client";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  const fetchAPI = async () => {
    // const resp = await fetch("/api/test", { method: "POST" });
    try {
      const resp = await fetch("http://165.227.155.70:3000/tests", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const body = await resp.json();
      console.log(body);
      setData(body.data.replace(/\u001B\[[0-9;]*[A-Za-z]/g, "") + new Date());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-3xl">
      <h1>Hello</h1>
      <button className="p-5 border-4" onClick={fetchAPI}>
        FETCH
      </button>
      {data && <p>{data}</p>}
    </div>
  );
}
