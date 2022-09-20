export interface Config {
 category:string;
 name:string;
 shortDescription:string;
 description:string;
 technologies:string;
 images:string[];
 links:string[];
}

/********************
 *
 * Projects table for demo version
 * links[0] - link for demo version ,use 'disabled' value if there is no demo
 * links[1] - link for github repository,use 'disabled' value if there is no github link
 */
export const CONFIG:Config[] = [
  {
    category:'frontend',
    name:'flowershop',
    shortDescription:'Kwiaciarnia online.',
    description:'Projekt powstał jako dodatek do mojego CV.Główne elementy to lista produktów i koszyk zakupów.',
    technologies:'Angular,css,ts,html',
    images:['flowershop1','flowershop2','flowershop3','flowershop4'],
    links:[
      'https://krzysiekm266.github.io/flower-shop',
      'https://github.com/krzysiekm266/flower-shop'
    ],
  },
  {
    category:'frontend',
    name:'mybookshelf',
    shortDescription:'Półka na książki w wersji online.',
    description:'Półka na książki online,z prostym wyszukiwaniem.',
    technologies:'Angular,css,ts,html',
    images:['mybookshelf1','mybookshelf2','mybookshelf3'],
    links: [
      'https://krzysiekm266.github.io/mybookshelf',
      'https://github.com/krzysiekm266/mybookshelf'
    ],
  },
  {
    category:'frontend/backend',
    name:'myweb',
    shortDescription:' Prosta strona z panelem administratora.',
    description:'Strona z panelem admistratora z edycja postow i prostym systemem autoryzacji.',
    technologies:'Laravel(Blade),php,css,tailwind,html',
    images:['myweb1','myweb2'],
    links: [
      'disabled',
      'https://github.com/krzysiekm266/myweb'
    ],
  },
  {
    category:'frontend',
    name:'todoapp',
    shortDescription:'Lista zadań z kolorkami.',
    description:'Lista zadań z kolorkami i możliwością edycji.',
    technologies:'Angular,css,ts,html',
    images:['todoapp1','todoapp2','todoapp3','todoapp4'],
    links: [
      'https://krzysiekm266.github.io/todoapp-front-v2',
      'https://github.com/krzysiekm266/todoapp-front-v2'
    ],
  },
  {
     category:'frontend',
     name:'testapp',
     shortDescription:'Prosta lista zdań do testów.',
     description:'Lista do testów itp.',
     technologies:'Angular,css,ts,html',
     images:['testapp1'],
     links: [
      'https://krzysiekm266.github.io/testapp/',
      'https://github.com/krzysiekm266/testapp'
    ],
  },
  {
    category:'backend',
    name:'todoapp-back',
    shortDescription:'Backend dla todoapp-front.',
    description:'Prosty backend dla listy zadań.',
    technologies:'Laravel,php,mysql',
    images:[''],
    links: [
     'disabled',
     'https://github.com/krzysiekm266/todoapp-back'
   ],
 },
 {
  category:'frontend',
  name:'testbootstrap',
  shortDescription:'Testowa aplikcja bootstrap.',
  description:'Przykładowa strona firmowa.',
  technologies:'html,scss,bootstrap',
  images:['testbootstrap1','testbootstrap2','testbootstrap3','testbootstrap4'],
  links: [
   'https://krzysiekm266.github.io/test-bootstrap',
   'https://krzysiekm266.github.io/test-bootstrap/'
  ],
},
];
