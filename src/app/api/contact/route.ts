import { NextResponse } from "next/server";
import { Resend } from "resend";

// ✔ bezbedno čitanje ključa
const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  console.error("RESEND_API_KEY nije podešen u .env.local");
}

const resend = new Resend(apiKey as string);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      _service,
      _budget,
      _pages,
      _quickness,
      first,
      phone,
      email,
      company,
      websiteUrl,
      message,
    } = body;

    if (!email || !message) {
      return NextResponse.json(
        { ok: false, error: "Email i poruka su obavezni." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      // ⚠️ ovde koristi neki verifikovan sender sa Resend-a,
      // npr. "onboarding@resend.dev" dok ne verifikuješ svoj domen
      from: "Media By VM <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "tvojmail@gmail.com",
      subject: `Novi upit sa sajta — ${first || "bez imena"}`,
      text: `
Ime i prezime: ${first || "-"}
Telefon: ${phone || "-"}
Email: ${email}
Kompanija: ${company || "-"}
Website: ${websiteUrl || "-"}

Vrsta usluge: ${_service || "-"}
Budžet: ${_budget || "-"}
Cilj: ${_pages || "-"}
Brzina pokretanja: ${_quickness || "-"}

Poruka:
${message || "-"}
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Došlo je do greške. Pokušajte ponovo." },
      { status: 500 }
    );
  }
}
