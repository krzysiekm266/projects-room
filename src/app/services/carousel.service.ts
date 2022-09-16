import { CONFIG_CAROULSEL } from './../models/config-carousel';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConfigCarousel } from '../models/config-carousel';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  // images$:Observable<string[]> = of([
  //   'flowershop/flowershop1',
  //   'mybookshelf/mybookshelf1',
  //   'myweb/myweb1',
  //   'todoapp/todoapp1'
  // ]);
  // headers$:Observable<string[]> = of([
  //   'Flowershop',
  //   'Mybookshelf',
  //   'Myweb',
  //   'Todoapp'
  // ]);
  // captions$:Observable<string[]> = of([
  //   'Prosty sklep online sprzedający kwiatki:).',
  //   'Półka na książki w wersji online.',
  //   'Prosta strona z panelem administratora.',
  //   'Lista zadań z kolorkami.',

  // ]);
  configCarousel$:Observable<ConfigCarousel[]> = of(CONFIG_CAROULSEL);
  constructor() { }
  getConfigCarousel():Observable<ConfigCarousel[]> {
    return this.configCarousel$;
  }
  // getImages():Observable<string[]> {
  //   return this.images$;
  // }
  // getHeaders():Observable<string[]> {
  //   return this.headers$;
  // }
  // getCaptions():Observable<string[]> {
  //   return this.captions$;
  // }
}
