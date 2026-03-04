import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { FaInstagram, FaTiktok, FaFacebookF, FaLinkedinIn } from "react-icons/fa";


import Button from '@/components/ui/Button';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  const router = useRouter();

  const handleFormToggle = () => {
    router.push('/book');
  };

  return (
    <SectionOpacity classes="flex flex-col justify-center h-screen">

      <div className=" mx-auto flex w-full max-w-[60vw] md:max-w-[90%] flex-1 flex-col items-center justify-center text-center">
        <h3 className="text-[4vw] md:text-[8vw] font-medium">POVEŽIMO SE</h3>
        <p className="mt-[0.6vw] text-[1.7vw] md:text-[3.2vw] font-normal text-gray-300 md:leading-[1.3]">
          Recite nam više o svom biznisu, idejama i ciljevima. Zajedno možemo da izgradimo vaše digitalno prisustvo i pokrenemo rast.
        </p>
        <Button
          onClick={handleFormToggle}
          title="POŠALJITE PORUKU"
          classes="px-[1.8vw] py-[vw] w-[35vw] md:w-[45vw] min-h-[6vw] md:min-h-[8vw] text-[1.25vw] md:text-[2.25vw] bg-bg-1 hover:bg-bg-1/80"
          btnClasses="mt-[1.2vw]"
        />
      </div>

     <footer id="kontakt" className="border-t border-gray-800 px-5 py-8 md:px-12 md:py-10">
  <div className="mx-auto max-w-6xl flex flex-col gap-6">

    {/* 1️⃣ Socials */}
    <ul className="flex justify-center gap-5">
  {[
    { icon: <FaInstagram />, href: "https://www.instagram.com/vukma.marketing/" },
    { icon: <FaTiktok />, href: "https://www.tiktok.com/@vukma.marketing" },
    { icon: <FaFacebookF />, href: "https://www.facebook.com/vukma.marketing" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/milo%C5%A1-vukmirovi%C4%87-213142251" },
  ].map((item, index) => (
    <li key={index}>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 hover:bg-white/10 transition"
      >
        <span className="text-lg md:text-xl">
          {item.icon}
        </span>
      </a>
    </li>
  ))}
</ul>


    {/* 2️⃣ Location + Phone */}
   <div className="flex flex-col items-center gap-1 text-sm md:text-base text-gray-300">
  <a
    href="tel:+381611415035"
    className="text-white hover:underline font-medium"
  >
    Telefon: 061 141 5035
  </a>

  <div>
    Mladenovac, Srbija
  </div>
</div>

    {/* 3️⃣ Copyright */}
    <div className="text-center text-xs md:text-sm text-gray-500 pt-4 border-t border-gray-800">
      © {new Date().getFullYear()}{" "}
      <span className="font-semibold text-white">Vukma</span>. Sva prava
      zadržana.
    </div>

  </div>
</footer>



    </SectionOpacity>
  );
};
export default Index;
