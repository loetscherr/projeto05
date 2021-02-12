import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  public item: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
// obtem o id da rota
this.route.params.subscribe(data => {
 if (data.id) {
   this.item = this.afs.doc<any>(`articles/${data.id}`).valueChanges()
 }
})
  }

}
