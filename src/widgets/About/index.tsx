import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="about" className="border-t border-gray-1 bg-gradient-to-b py-[6vw] md:py-[4vw] z-0">
      <SectionOpacity classes='z-2'>
        <SectionTitle title="O NAMA." classes="px-[6vw] md:px-[3vw] pt-[3vw] z-10" />
        <div className="relative self-start px-[6vw] md:px-[3vw] pb-[5vw] pt-[3vw]">
          <div className="flex space-x-[5vw] md:space-x-0 md:flex-col md:space-y-[3vw] md:items-center">
            <p className="flex grow-[4] basis-0 flex-wrap text-[2.3vw] md:text-[3.8vw] md:leading-[1.3] md:text-balance md:text-center">
<b>Media by VM je digitalna agencija za kreiranje kvalitetnog statičnog i dinamičkog sadržaja namenjenog brend komunikaciji i digitalnom oglašavanju.</b> Kroz strateški pristup, kreativna rešenja i pažljivo planiranu distribuciju, pomažemo brendovima da izgrade prepoznatljiv identitet i ostvare merljive rezultate u online prostoru.
</p>

            <div className="relative h-[20vw] w-[30vw] md:h-[40vw] md:max-w-[90%] md:text-center grow-[3] md:w-full basis-0 md:basis-[initial]  bg-bg-2">
<video autoPlay loop muted playsInline>
  <source src="/images/video.mp4" type="video/mp4" />
</video>
            </div>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
