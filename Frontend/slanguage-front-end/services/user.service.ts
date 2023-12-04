import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.ts';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users: User[] = []
  
  // HANDLE USER DATA
  public getUsers(): User[] {
    let currentUsers: User[] = JSON.parse(window.localStorage.getItem("slanguage-User") as string);
    return currentUsers
  }

  public putUsers(newUsers: User[]): void {
    window.localStorage.removeItem("slanguage-User");
    window.localStorage.setItem("slanguage-User", JSON.stringify(newUsers))
  }

  // LOG IN
  logged_in: boolean = false
  logged_in_user: User = {
    Id: 0,
    Name: '',
    Pin: 0,
    Language: ''
  }
  
  public userLogin(userDetails: User): boolean {
    for (let i = 0; i < this.users.length; i++) {
      let user = this.users[i]

      if (user.Name == userDetails.Name && user.Pin == userDetails.Pin) {
        
        return true
      }
    }

    return false
  }

}
