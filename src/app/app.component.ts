import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-material-breadcrumb';
  routes = [
    {
      label: "سیستم مدیریت روش تولید",
      logo: "assets/production-version/images/logo/version_control.svg",
      icon_path: "assets/production-version/images/icon",
      moduleName: "production-version",
      items: [
        {
          label: "کارتابل نگارش‌های ساخت",
          icon: "memory",
          routerLink: "production-version/ManufactureRecordingCartable"
        },
        {
          label: "لیست نگارش‌های ساخت",
          icon: "memory",
          routerLink: "production-version/ManufactureRecordingList"
        }
      ]
    }
  ];

  model;
  home;
  constructor(){

    this.model = [
      {label:'سیستم مدیریت روش تولید'},
      {label:'کارتابل نگارش های ساخت',routerLink:'/production-version/cartabel'}
    ];

    this.home = {
      style:"",
      styleClass:"",
      routerLink:'/home',
      icon: 'home'
    }
  }

  ngOnInit(){

  }
}
