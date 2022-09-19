import { Component, Input,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    document.getElementsByClassName('project-card')[0].dispatchEvent(event);
  }

  title = 'projects-room';
  scrollToProject() {
    document.getElementById('project')?.scrollIntoView(true);
  }

}
