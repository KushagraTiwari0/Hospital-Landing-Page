import fetch from "node-fetch";

export async function handler() {
  try {
    // Check API key first
    if (!process.env.API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing API key in Netlify settings" })
      };
    }

    const categories = "happiness,inspirational,philosophy";
    const url = `https://api.api-ninjas.com/v2/quotes?categories=${categories}&limit=5`;

    const response = await fetch(url, {
      headers: { "X-Api-Key": process.env.API_KEY }
    });

    // If request fails
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "API request failed" })
      };
    }

    const data = await response.json();

    // Return quotes
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
