import { ConfigService } from './../../services/config.service';
import { Component, EventEmitter, Input, OnInit, Output,DoCheck, } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers:[ConfigService]
})
export class ProjectComponent implements OnInit,DoCheck {
  @Input() category:string = '';
  @Input() name:string = '';
  @Input() shortDescription ='';
  @Input() description = '';
  @Input() technologies = '';
  @Input() images:string[] = [];
  @Input() demoLink:string = '';
  @Input() githubLink:string = '';
  private _nameChange:string = '';
  constructor(private _configService:ConfigService,private _activatedRoute:ActivatedRoute) {

   }

  ngDoCheck(): void {
    this.name !== this._nameChange ? this.ngOnInit() : '';
  }
  ngOnInit(): void {
    this._nameChange = this.name;
    this._activatedRoute.paramMap.subscribe(param => this.name = param.get('name') as string);
    this._configService.getConfig(this.name).subscribe(config => {
      this.category = config.category;
      this.name = config.name;
      this.shortDescription = config.shortDescription;
      this.description = config.description;
      this.technologies = config.technologies;
      this.images = config.images;

    });
    this.images = this.images.map( imgFile =>  `assets/img/projects/${this.name}/${imgFile}.png` );
  }


}
