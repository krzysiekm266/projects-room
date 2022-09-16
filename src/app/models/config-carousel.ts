export interface ConfigCarousel {
  image:string;
  header:string;
  caption:string;
  bgColor:string;
}
export const CONFIG_CAROULSEL:ConfigCarousel[] = [
  {
    image:'flowershop/flowershop1',
    header:'Flowershop',
    caption:'Prosty sklep online sprzedający kwiatki:).',
    bgColor:'rgb(23, 150, 6)'
  },
  {
    image:'mybookshelf/mybookshelf1',
    header:'Mybookshelf',
    caption:'Półka na książki w wersji online.',
    bgColor:'rgb(221, 6, 5)'
  },
  {
    image:'myweb/myweb1',
    header:'Myweb',
    caption: 'Prosta strona z panelem administratora.',
    bgColor:'rgb(63, 82, 253)'
  },
  {
    image:'todoapp/todoapp1',
    header:'Todoapp',
    caption: 'Lista zadań z kolorkami.',
    bgColor:'rgb(223, 219, 0)'
  },
];
