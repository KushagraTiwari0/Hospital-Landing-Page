import fetch from "node-fetch";

export async function handler(event, context) {
  const categories = "happiness,inspirational,philosophy";
  const url = `https://api.api-ninjas.com/v2/quotes?categories=${categories}&limit=5`;

  const response = await fetch(url, {
    headers: { "X-Api-Key": process.env.API_KEY },
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}
