import { First, Second, Third, Fourth, Fifth } from '@/icons/ApproachIcons';

export const NAV_ITEMS = [
  {
    title: 'Main',
    href: 'main',
  },
  {
    title: 'O Nama',
    href: 'about',
  },
  {
    title: 'Usluge',
    href: 'services',
  },
  {
    title: 'Pristup',
    href: 'approach',
  },
  {
    title: 'Kontakt',
    href: 'contact',
  },
];

export const CARDS = [
  {
    title: 'Digitalni Marketing',
    description:
      'Digitalni marketing koji prodaje. Pomažemo brendovima da povećaju vidljivost, izgrade poverenje i pretvore pratioce u kupce.',
    services: [
      ['Instagram', 'TikTok'],
      ['Facebook', 'YouTube'],
    ],
    number: '01.',
    classes: '',
  },
  {
    title: 'Brending i kreativni sadržaj',
    description:
      'Pomažemo vam da se izdvojite kroz moderan dizajn, dosledan vizuelni stil i sadržaj koji privlači pažnju. Spoj estetike i strategije koji gradi poverenje.',
    services: [
      ['Foto i video', 'Dizajn i estetika '],
      ['Objave i Reels', 'Snimanje dronom'],
    ],
    number: '02.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Web razvoj',
    description:
      'Kreiramo moderne, brze i SEO optimizovane sajtove koji rade za vas, pretvaraju posetioce u klijente i predstavljaju vaš brend u najboljem svetlu.',
    services: [['Izrada web sajtova', 'SEO optimizacija']],
    number: '03.',
    classes: 'border-t border-gray-1/50',
  },
];

export const APPROACH_CARDS = [
  {
    icon: First,
    title: 'Konsultacija',
    description:
      "Pažljivo slušamo vaše ideje, ciljeve i potrebe. Zajedno definišemo strategiju i pravac koji vodi do stvarnih rezultata.",
  },
  {
    icon: Second,
    title: 'Strategija i dizajn',
    description:
      'Kreiramo vizuelni identitet i plan komunikacije koji oslikava vaš brend. Od boja do tona poruke, sve je usklađeno s vašim ciljem.',
  },
  {
    icon: Third,
    title: 'Realizacija kampanje',
    description: 'Pokrećemo sadržaj na društvenim mrežama, optimizujemo objave i oglase, dok pratimo rezultate i prilagođavamo pristup u realnom vremenu.',
  },
  {
    icon: Fourth,
    title: 'Rezultati i analiza',
    description:
      'Na kraju analiziramo performanse, predstavljamo izveštaj i predlažemo nove korake za još veći rast i prodaju.',
  },
  {
    icon: Fifth,
    title: 'Održavanje i rast',
    description:
      'Nastavljamo da pratimo rezultate i razvijamo vaš brend. Optimizujemo kampanje, predlažemo nove ideje i brinemo da vaš digitalni rast nikad ne stane.',
  },
];

export const RADIO_FIELDS = [
  {
    title: 'Koja vrsta usluge vam je potrebna?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Društvene mreže (Instagram / TikTok / Facebook)', value: 'design/branding' },
      { name: 'Foto & video produkcija', value: 'web-dev' },
      { name: 'Brendiranje i dizajn', value: 'mobile-dev' },
      { name: 'Izrada web sajta', value: 'all-types' },
      { name: 'Drugo', value: 'other-service' },
    ],
    formKey: '_service',
  },
  {
    title: 'Koji je vaš okvirni mesečni budžet?',
    classes: '',
    radioArray: [
      { name: 'do 200 €', value: '2-4' },
      { name: '200 € - 400 €', value: '4-8' },
      { name: '400 € - 700 €', value: '8-10' },
      { name: 'preko 700 €', value: '10+' },
    ],
    formKey: '_budget',
  },
  {
    title: 'Koji je cilj vaše saradnje sa nama?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Povećanje prodaje', value: '<5' },
      { name: 'Rast na društvenim mrežama', value: '6-10' },
      { name: 'Izgradnja brenda', value: '11-20' },
      { name: 'Novi sajt / redizajn postojećeg', value: '20+' },
      { name: 'Drugo', value: '20+' },

    ],
    formKey: '_pages',
  },
  {
    title: 'Koliko brzo želite da pokrenemo projekat?',
    classes: '',
    radioArray: [
      { name: 'Što pre', value: 'max-fast' },
      { name: 'U narednih 7 dana', value: 'high-prio ' },
      { name: 'Tokom sledećeg meseca', value: 'regular' },
      { name: 'Samo prikupljam informacije', value: 'take-your-time' },
    ],
    formKey: '_quickness',
  },
];

export const INPUT_FIELDS = [
  { label: 'Ime i prezime', name: 'first', classes: 'inline-block !w-[calc(50%-2vw)] mr-[4vw]', required: true },
  { label: 'Telefon', name: 'phone', classes: 'inline-block !w-[calc(50%-2vw)]', type: 'number', required: true },
  { label: 'Email', name: 'email', classes: '', type: 'email' },
  { label: 'Ime kompanije', name: 'company', classes: '', required: true },
];

export const BOOK_FORM_DEFAULT_STATE = {
  _service: null,
  _budget: null,
  _pages: null,
  _quickness: null,
  first: '',
  phone: '',
  email: '',
  company: '',
  websiteUrl: '',
  message: '',
};
