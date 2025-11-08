'use client';

import { useRouter } from 'next/navigation';
import { FC, FormEvent, useState } from 'react';

import { BOOK_FORM_DEFAULT_STATE, INPUT_FIELDS, RADIO_FIELDS } from '@/data';

//components
import Button from '@/components/ui/Button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';

interface Props {}

const Index: FC<Props> = () => {
  const [form, setForm] = useState(BOOK_FORM_DEFAULT_STATE);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { push } = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.ok) {
        setSuccess('Hvala! Vaš upit je uspešno poslat. Uskoro ćemo vam se javiti.');
        setForm(BOOK_FORM_DEFAULT_STATE);
      } else {
        setError(data.error || 'Došlo je do greške. Pokušajte ponovo.');
      }
    } catch (err) {
      console.error(err);
      setError('Nešto je pošlo po zlu. Pokušajte ponovo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-xl px-4 py-8 md:py-12">
      {/* Back + naslov */}
      <div className="mb-6 flex items-center gap-3">
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition"
          onClick={() => push('/')}
          type="button"
        >
          <svg
            focusable="false"
            className="h-4 w-4 fill-stone-300"
            viewBox="0 0 24 24"
          >
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path>
          </svg>
        </button>

        <h1 className="text-lg md:text-2xl font-semibold">
          Forma za upit
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* RADIO POLJA – JEDNO ISPOD DRUGOG */}
        {RADIO_FIELDS.map((item) => (
          <div key={item.title} className="flex flex-col gap-2">
            <h4 className="text-sm md:text-base font-medium text-white">
              {item.title}
            </h4>

            <RadioGroup
              onValueChange={(value) =>
                setForm((prev) => ({ ...prev, [item.formKey]: value }))
              }
              className="flex flex-col gap-1.5"
            >
              {item.radioArray.map((radio) => (
                <label
                  key={radio.value}
                  htmlFor={radio.name}
                  className="flex items-center gap-2 text-xs md:text-sm text-white/80"
                >
                  <RadioGroupItem
                    value={radio.value}
                    id={radio.name}
                    required
                    className="h-4 w-4 border-white/60 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                  />
                  <span>{radio.name}</span>
                </label>
              ))}
            </RadioGroup>
          </div>
        ))}

        {/* INPUT POLJA – JEDNO ISPOD DRUGOG */}
        {INPUT_FIELDS.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <label
              htmlFor={item.label}
              className="text-xs md:text-sm text-white/70"
            >
              {item.label}
              {item.required && <span className="text-orange-400"> *</span>}
            </label>
            <input
              onChange={({ target: { name, value } }) =>
                setForm((prev) => ({ ...prev, [name]: value }))
              }
              type={item.type || 'text'}
              name={item.name}
              id={item.label}
              className="h-11 w-full rounded-md border border-white/20 bg-black/40 px-3 text-sm text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/70 transition placeholder:text-white/30"
              required={item.required}
            />
          </div>
        ))}

        {/* TEXTAREA */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="message"
            className="text-xs md:text-sm text-white/70"
          >
            Recite nam više
          </label>
          <textarea
            minLength={20}
            maxLength={500}
            onChange={({ target: { name, value } }) =>
              setForm((prev) => ({ ...prev, [name]: value }))
            }
            id="message"
            name="message"
            className="min-h-[120px] w-full rounded-md border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none resize-none focus:border-orange-700 focus:ring-1 focus:ring-orange-500/70 transition placeholder:text-white/30"
            placeholder="Kratko opišite čime se bavite i šta želite da postignete..."
          />
        </div>

        {/* STATUS PORUKE */}
        {success && (
          <p className="text-xs md:text-sm text-emerald-400">{success}</p>
        )}
        {error && <p className="text-xs md:text-sm text-orange-700">{error}</p>}

        {/* DUGME */}
        <div className="pt-2">
          <Button
            title={loading ? 'Slanje...' : 'Pošalji upit'}
            type="submit"
            classes="
              rounded-full
              px-6 py-2.5 text-sm md:text-base
              bg-orange-500 hover:bg-orange-400 text-black font-medium
              disabled:opacity-60 disabled:cursor-not-allowed
            "
            btnClasses=""
            disabled={loading}
          />
        </div>
      </form>
    </div>
  );
};

export default Index;
