import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'material-breadcrumb',
  templateUrl: './material-breadcrumb.component.html',
  styleUrls: ['./material-breadcrumb.component.css']
})
export class MaterialBreadcrumbComponent implements OnInit {

  @Input() model:{label:string , routerLink?:string}[];
  @Input() home;
  constructor() { }

  ngOnInit(): void {
  }

  itemClick(e , home){
    e.preventDefault();
  }

}
