export interface Config {
 category:string;
 name:string;
 shortDescription:string;
 description:string;
 technologies:string;
 images:string[];
 links:Set<string>;
}
export const CONFIG:Config[] = [
  {
    category:'frontend',
    name:'flowershop',
    shortDescription:'Kwiaciarnia online.',
    description:'Projekt powstał jako dodatek do mojego CV.Główne elementy to lista produktów i koszyk zakupów.',
    technologies:'Angular,css,ts,html',
    images:['flowershop1','flowershop2','flowershop3','flowershop4'],
    links: new Set<string>().add('https://krzysiekm266.github.io/flower-shop'),
  },
  {
    category:'frontend',
    name:'mybookshelf',
    shortDescription:'',
    description:'',
    technologies:'Angular,css,ts,html',
    images:['mybookshelf1','mybookshelf2','mybookshelf3'],
    links: new Set<string>().add('https://krzysiekm266.github.io/flower-shop'),
  },
  {
    category:'frontend/backend',
    name:'myweb',shortDescription:'',
    description:'',
    technologies:'Laravel(Blade),php,css,tailwind,html',
    images:['myweb1','mwyweb2'],
    links: new Set<string>().add('https://krzysiekm266.github.io/flower-shop'),
  },
  {
    category:'frontend',
    name:'todoapp',
    shortDescription:'',
    description:'',
    technologies:'Angular,css,ts,html',
    images:['todoapp1','todoapp2','todoapp3','todoapp4'],
    links: new Set<string>().add('https://krzysiekm266.github.io/flower-shop'),
  },
  {
     category:'frontend',
     name:'testapp',
     shortDescription:'',
     description:'',
     technologies:'Angular,css,ts,html',
     images:['testapp1'],
     links: new Set<string>().add('https://krzysiekm266.github.io/flower-shop'),
    },
];
