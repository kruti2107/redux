import { Action } from '@ngrx/store';
export const ADD_USER = 'ADD_USER';

export class AddUser implements Action {
  debugger;
  readonly type = ADD_USER;
  constructor(public payload: {userName: string}) {
    console.log(this.payload);
  }
}

export type UserActions = | AddUser;
