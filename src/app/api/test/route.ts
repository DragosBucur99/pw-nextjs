import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Replace 'API_URL' with the actual URL of the API you want to call
    const apiUrl = "http://165.227.155.70:3000/api/test"; // Replace with your API URL

    // Make an HTTP GET request to the API
    const response = await fetch(apiUrl);

    if (response.ok) {
      // If the response is successful, use NextResponse.json() to parse it
      return NextResponse.json(await response.text());
    } else {
      // If the API returns an error, you can handle it here
      return new Response("API request failed", {
        status: response.status,
        statusText: response.statusText,
      });
    }
  } catch (error) {
    // Handle any errors that may occur during the API request
    console.error("Error:", error);
    return new Response("An error occurred while making the API request", {
      status: 500,
    });
  }
}
