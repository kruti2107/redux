import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as store from '../reducers/index';
import { AddUser } from '../actions/user.action';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList: Observable<any[]>;
  userForm = new FormGroup({
  userName: new FormControl()
});
  constructor(private form: FormBuilder, private userStore: Store<store.State>) { }

  ngOnInit() {
    this.userForm = this.form.group({
      userName: ''
    });
    this.userList = this.userStore.select('user');
    console.log(this.userList);
  }
  onAdd() {
    this.userStore.dispatch(new AddUser(this.userForm.get('userName').value));
    this.userStore.select('user').subscribe((data) => {
      console.log(data);
    });
    this.userForm.reset();
    // console.log(this.userStore);
  }
}
