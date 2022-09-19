import { Component, OnInit, AfterViewInit, enableProdMode } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,AfterViewInit {
  collapsed = true;
  isCollapsed = true;
  outOfView:boolean = false;
  constructor() { }
  ngAfterViewInit(): void {

   document.addEventListener('scroll', e => {
    const el = document.scrollingElement as HTMLElement;
    if(el.scrollTop > 500)  this.outOfView = true;
    else  this.outOfView = false;

   });
  }

  ngOnInit(): void {

  }
  scrollToProject() {
    document.getElementById('project')?.scrollIntoView(true);
  }
}
