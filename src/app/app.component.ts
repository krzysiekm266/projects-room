import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projects-room';
  projectOpen:boolean = false;
  col:string = '3';
  colClose:string = '3';
  colOpen:string = '12';

}
