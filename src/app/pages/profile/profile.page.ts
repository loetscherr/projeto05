import { Component, OnInit } from '@angular/core';

// 1. Importa dependências
import { AngularFireAuth } from '@angular/fire/auth';
import { profile } from 'console';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    // 2. Injeta dependências
    public auth: AngularFireAuth,
  ) { }

  ngOnInit() { }
    // vai para perfil do google
    profile() { 
      window.open('https://myaccount.google.com/');
      return false;
    }
 

}
