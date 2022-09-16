import { Config, CONFIG } from './../models/config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config$:Observable<Config[]> = of(CONFIG);
  constructor(private _http:HttpClient) { }
  getConfig(projectName:string):Observable<Config> {
    return this.config$.pipe(
     map(config => {return config.find( cfg => cfg.name === projectName ) as Config}),
    //  tap(config => console.log(config)),
    ) as Observable<Config>;
  }
}
