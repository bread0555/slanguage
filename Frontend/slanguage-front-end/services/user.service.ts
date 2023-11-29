import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.ts';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users: User[] = []
  
  public getUsers(): User[] {
    let currentUsers: User[] = JSON.parse(window.localStorage.getItem("slanguage-User") as string);
    return currentUsers
  }

  public putUsers(newUsers: User[]): void {
    window.localStorage.removeItem("slanguage-User");
    window.localStorage.setItem("slanguage-User", JSON.stringify(newUsers))
  }

  public userLogin(userDetails: User): boolean {
    for (let i = 0; i < this.users.length; i++) {
      let user = this.users[i]

      if (user.Name == userDetails.Name && user.Pin == userDetails.Pin) {
        console.log("Successful login")
        return true
      }
    }

    return false
  }
}
