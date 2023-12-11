import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.ts';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  users: User[] = []

  activeUser: User = {
    Id: 0,
    Name: '',
    Pin: 0,
    Language: '',
    Points: 0
  }
  
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
  
  public userLogin(userDetails: User): boolean {
    for (let i = 0; i < this.users.length; i++) {
      let user = this.users[i]

      if (user.Name == userDetails.Name && user.Pin == userDetails.Pin) {
        this.activeUser = user
        console.log(this.activeUser)
        return true
      }
    }

    return false
  }

  // LOG OUT
  logOut(): void {
    this.activeUser = {
      Id: 0,
      Name: '',
      Pin: 0,
      Language: '',
      Points: 0
    }
    this.router.navigate(['/login'])
  }

}
