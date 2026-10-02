const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://portfolio-backend-cefs.onrender.com");

export async function sendContact(payload) {
  // Render (plan free) puede tardar en despertar.
  const res = await fetch(`${API_URL}/api/email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(60000),
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
}
