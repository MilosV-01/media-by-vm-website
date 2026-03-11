'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
} from 'react-icons/fa';

import Button from '@/components/ui/Button';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const socialLinks = [
  {
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/vukma.marketing/',
    isExternal: true,
  },
  {
    icon: <FaTiktok />,
    href: 'https://www.tiktok.com/@vukma.marketing',
    isExternal: true,
  },
  {
    icon: <FaFacebookF />,
    href: 'https://www.facebook.com/vukma.marketing',
    isExternal: true,
  },
  {
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/in/milo%C5%A1-vukmirovi%C4%87-213142251',
    isExternal: true,
  },
  {
    icon: <FaEnvelope />,
    href: 'mailto:milos@vukma.com',
    isExternal: false,
  },
];

const Index: FC<Props> = () => {
  const router = useRouter();

  const handleFormToggle = () => {
    router.push('/book');
  };

  return (
    <SectionOpacity classes="flex flex-col justify-center h-screen">
      <div className="mx-auto flex w-full max-w-[60vw] flex-1 flex-col items-center justify-center text-center md:max-w-[90%]">
        <h3 className="text-[4vw] font-medium md:text-[8vw]">POVEŽIMO SE</h3>

        <p className="mt-[0.6vw] text-[1.7vw] font-normal text-gray-300 md:text-[3.2vw] md:leading-[1.3]">
          Recite nam više o svom biznisu, idejama i ciljevima. Zajedno možemo da
          izgradimo vaše digitalno prisustvo i pokrenemo rast.
        </p>
        <br />

        <Button
          onClick={handleFormToggle}
          title="UPIT ZA SARADNJU"
          classes="w-[35vw] min-h-[6vw] bg-bg-1 px-[1.8vw] py-[1vw] text-[1.25vw] hover:bg-bg-1/80 md:w-[45vw] md:min-h-[8vw] md:text-[2.25vw]"
          btnClasses="mt-[1.2vw]"
        />
      </div>

      <footer
        id="kontakt"
        className="border-t border-gray-800 px-5 py-8 md:px-12 md:py-10"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          <ul className="flex justify-center gap-5">
            {socialLinks.map((item, index) => (
              <li key={index}>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-gray-500 hover:bg-white/10 hover:text-white md:h-12 md:w-12"
                    aria-label={`Social link ${index + 1}`}
                  >
                    <span className="text-lg md:text-xl">{item.icon}</span>
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-gray-500 hover:bg-white/10 hover:text-white md:h-12 md:w-12"
                    aria-label="Pošalji email"
                  >
                    <span className="text-lg md:text-xl">{item.icon}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-1 text-sm text-gray-300 md:text-base">
            <a
              href="tel:+381611415035"
              className="font-medium text-white hover:underline"
            >
              Telefon: 061 141 5035
            </a>

            <div>Mladenovac, Srbija</div>
          </div>

          <div className="border-t border-gray-800 pt-4 text-center text-xs text-gray-500 md:text-sm">
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-white">VUKMA</span>. Sva prava
            zadržana.
          </div>
        </div>
      </footer>
    </SectionOpacity>
  );
};

export default Index;