import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as store from '../reducers';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 // userList: Observable<any[]>;
  user: string;
  constructor(private userStore: Store<store.State>) { }

  ngOnInit() {
     this.userStore.select('user').subscribe((data: any) => {
         this.user = data.userList;
         console.log('##########', this.user);
        // console.log(this.user[userList].length);
     });
 }

}
