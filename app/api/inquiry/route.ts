/**
 * Receives the Join Us inquiry form and forwards it as JSON to INQUIRY_WEBHOOK_URL
 * (e.g. a Formspree form endpoint, Zapier/Make webhook, or Slack workflow).
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const str = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

  // Honeypot: pretend success so bots don't retry.
  if (str(body.company)) return Response.json({ ok: true });

  const inquiry = {
    name: str(body.name, 200),
    phone: str(body.phone, 50),
    email: str(body.email, 200),
    interests: Array.isArray(body.interests) ? body.interests.map((i: unknown) => str(i, 100)).filter(Boolean) : [],
    children: str(body.children, 500),
    preferredDate: str(body.preferredDate, 20),
    preferredTime: str(body.preferredTime, 20),
    message: str(body.message),
  };

  if (!inquiry.name || !inquiry.phone || !/^\S+@\S+\.\S+$/.test(inquiry.email)) {
    return Response.json({ error: "Name, phone and a valid email are required" }, { status: 400 });
  }

  const webhook = process.env.INQUIRY_WEBHOOK_URL;
  if (!webhook) {
    console.error("INQUIRY_WEBHOOK_URL is not set; inquiry was not delivered", inquiry.email);
    return Response.json({ error: "Inquiry delivery is not configured" }, { status: 503 });
  }

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...inquiry,
      interests: inquiry.interests.join(", "),
      _subject: `New Fifth House inquiry from ${inquiry.name}`,
      _replyto: inquiry.email,
    }),
  });

  if (!res.ok) {
    console.error("Inquiry webhook failed", res.status, await res.text().catch(() => ""));
    return Response.json({ error: "Could not deliver inquiry" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
