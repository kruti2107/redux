import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as store from '../reducers';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
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
