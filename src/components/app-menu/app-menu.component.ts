import { Component } from '@angular/core';
import { MenuConfigModel } from './menu-config.model';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent {
  //public serverPath: string="";

  public routerConfigs: MenuConfigModel[] = [];

  constructor() {
    this.routerConfigs = [
      { routerLink: `/computer-list`, displayText: 'Computer List', displayLevel: 1 },
      { routerLink: `/computer-type`, displayText: 'Computer Type', displayLevel: 1 }
    ]
  }

}
