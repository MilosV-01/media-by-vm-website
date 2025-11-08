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
    <div className="mx-auto max-w-[70vw] md:max-w-[85vw] px-[4vw] ">
      <div className="relative">
        <button
          className=" group absolute left-0 top-[25%] z-10 box-content rounded-full bg-stone-800 p-[0.5vw] hover:bg-stone-800"
          onClick={() => push('/')}
          type="button"
        >
          <svg
            focusable="false"
            className="h-[1.5vw] w-[1.5vw] md:h-[2.25vw] md:w-[2.25vw] fill-stone-400 transition group-hover:fill-stone-300"
            viewBox="0 0 24 24"
          >
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path>
          </svg>
        </button>
        <h1 className="mb-[1.75vw] md:text-[4.6vw] md:mb-[2.25vw] text-center text-[3.5vw] font-bold leading-[100%]">
          Forma za upit
        </h1>
      </div>

      <form className="flex h-full flex-col items-center" onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          {RADIO_FIELDS.map((item) => (
            <RadioGroup
              key={item.title}
              onValueChange={(value) => setForm((prev) => ({ ...prev, [item.formKey]: value }))}
              className={`mb-[1.75vw] inline-block w-[calc(50%-1.75vw)] ${item.classes}`}
            >
              <h4 className="mb-[0.2vw] md:mb-[0.5vw] text-[1.3vw] md:text-[1.6vw] font-medium">
                {item.title}
              </h4>
              {item.radioArray.map((radio) => (
                <div
                  key={radio.value}
                  className="flex items-center space-x-[0.65vw] md:space-x-[1vw] md:space-y-[0.3vw] font-[400]"
                >
                  <RadioGroupItem value={radio.value} id={radio.name} required />
                  <label
                    htmlFor={radio.name}
                    className="text-[1vw] md:text-[1.25vw] leading-[1.75vw]"
                  >
                    {radio.name}
                  </label>
                </div>
              ))}
            </RadioGroup>
          ))}

          <div className="w-full space-y-[2vw] text-[1.1vw]">
            {INPUT_FIELDS.map((item) => (
              <div key={item.label} className={`w-full ${item.classes}`}>
                <label
                  htmlFor={item.label}
                  className="leading-[1.5] mb-[0.4vw] text-[1.2vw] md:text-[1.5vw] inline-block"
                >
                  {item.label}
                </label>
                <input
                  onChange={({ target: { name, value } }) =>
                    setForm((prev) => ({ ...prev, [name]: value }))
                  }
                  type={item.type || 'text'}
                  name={item.name}
                  id={item.label}
                  className="h-[3vw] md:h-[4vw] w-full appearance-none rounded-[0.25vw] border-[0.125vw] border-primary/80 bg-transparent px-[1vw] py-[0.8vw]"
                  required={item.required}
                />
              </div>
            ))}
            <div className="w-full">
              <label
                className="leading-[1.5] mb-[0.4vw] text-[1.2vw] md:text-[1.5vw] inline-block"
                htmlFor="message"
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
                className="min-h-[10vw] w-full resize-none border-[0.125vw] rounded-[0.125vw] text-[1.2vw] md:text-[1.5vw] border-primary/80 bg-transparent px-[0.8vw] py-[0.6vw]"
              />
            </div>

            {/* poruke o uspehu / grešci */}
            {success && (
              <p className="text-[1vw] md:text-[1.2vw] text-green-400 mt-[0.5vw]">
                {success}
              </p>
            )}
            {error && (
              <p className="text-[1vw] md:text-[1.2vw] text-red-400 mt-[0.5vw]">
                {error}
              </p>
            )}
          </div>

          <Button
            title={loading ? 'Slanje...' : 'Pošalji'}
            type="submit"
            classes="py-[1.2vw] px-[5vw] md:py-[1.6vw] md:px-[8vw] text-[1.1vw] md:text-[1.5vw] bg-bg-1/90 hover:bg-bg-1/80 disabled:opacity-60"
            btnClasses="p-[0.2vw] md:p-[0.25vw] capitalize self-start mt-[2.5vw]"
            disabled={loading}
          />
        </div>
      </form>
    </div>
  );
};

export default Index;
