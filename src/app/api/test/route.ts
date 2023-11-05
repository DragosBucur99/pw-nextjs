import { NextResponse } from "next/server";

// export async function POST() {
//   // Replace 'API_URL' with the actual URL of the API you want to call
//   const apiUrl = "http://165.227.155.70:3000/tests"; // Replace with your API URL

//   const res = await fetch(apiUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: "testToken",
//     },
//   });

//   const data = await res.json();

//   return Response.json(data);
// }

export async function GET() {
  const response = await fetch("https://134.209.225.36/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return NextResponse.json(await response.json(), { status: 200 });
}
