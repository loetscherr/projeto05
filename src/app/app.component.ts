import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Noticías', url: '/news', icon: 'newspaper' },
    { title: 'Faça Contato', url: '/contacts', icon: 'mail' },
    { title: 'Sobre', url: '/about', icon: 'information-circle' },
  ];

  constructor() {}
}
