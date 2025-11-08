'use client';
import { FC, useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import SidebarMenu from '@/components/SidebarMenu';
import { AnimatePresence } from 'framer-motion';
import { LogoIcon } from '@/icons/ApproachIcons/LogoIcon';

interface Props {}

const Index: FC<Props> = () => {
  const [isActive, setIsActive] = useState(false);
  const closeSidebar = () => setIsActive(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsActive(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);
return (
  <div>
    {/* 🟠 HAMBURGER MENI */}
    <div className="fixed right-0 z-[4001] p-[4vw] md:p-[2vw]">
      <button
        type="button"
        onClick={() => setIsActive(!isActive)}
        className="
          flex items-center justify-center rounded-full bg-stone-400 transition duration-300
          w-[80px] h-[80px]        /* 📱 standardna veličina za mobilni */
          md:w-[60px] md:h-[60px]  /* 💻 manja za desktop */
          hover:bg-stone-500
        "
      >
        <div className={`burger ${isActive && 'burgerActive'}`}></div>
      </button>
    </div>

    {/* 🟠 LOGO */}
    <Link
      href="/"
      title="Početna"
      className="p-[4vw] md:p-[1.5vw] fixed z-[100] top-0 left-0 group"
    >
      <Image
        src="/images/logo.png"
        alt="Media By VM logo"
        width={100}
        height={100}
        className="
          rounded-full object-cover border-2 border-orange-500
          group-hover:opacity-80 transition duration-300
          w-[80px] h-[80px]        /* 📱 veći logo na mobilnom */
          md:w-[50px] md:h-[50px]  /* 💻 standardni logo za desktop */
        "
      />
    
</Link>

      <AnimatePresence mode="wait">{isActive && (
        <SidebarMenu close={closeSidebar} />
      )}
      </AnimatePresence>
    </div>
  );
};
export default Index;
