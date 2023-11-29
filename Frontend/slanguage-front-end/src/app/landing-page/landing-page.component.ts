import { Component } from '@angular/core';
import { User } from '../../../interfaces/user.ts';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  user: User = {
    Name: '',
    Pin: 0,
    Language: 'Languages'
  }

  userPin!: number

  exsistingUser: boolean = true


  languages: any[] | undefined;

  selectedLanguage: any | undefined;

  ngOnInit(): void {

    this.languages = [
      { name: 'English', code: 'https://cdn-icons-png.flaticon.com/128/330/330425.png' },
      { name: 'German', code: 'https://cdn-icons-png.flaticon.com/128/330/330523.png' },
      { name: 'Spainish', code: 'https://cdn-icons-png.flaticon.com/128/206/206724.png' },
    ];

    if (JSON.parse(window.localStorage.getItem("slanguage-User") as string) == null) {
      console.log("NEW USER")
      this.exsistingUser = false
    }

    // JSON.parse(window.localStorage.getItem("slanguage-User") as string);
    // window.localStorage.removeItem("slanguage-User");
    // window.localStorage.setItem("slanguage-User", JSON.stringify(arguements))
  }

  createNewUser(): void {
    this.user.Language = this.selectedLanguage.name
    this.user.Pin = this.userPin
    let allUsers: User[] = JSON.parse(window.localStorage.getItem("slanguage-User") as string)

    // NO CURRENT USERS
    if (allUsers == null) {
      window.localStorage.setItem("slanguage-User", JSON.stringify([this.user]))      
    }
    else {
      // USERS ALREADY EXISTS
      window.localStorage.setItem("slanguage-User", JSON.stringify(allUsers.push(this.user)))
    }
  }

  login(): void {
    this.user.Pin = this.userPin
    let users: User[] = JSON.parse(window.localStorage.getItem("slanguage-User") as string)
    for (let i = 0; i < users.length; i++) {
      let savedUser = users[i]

      if (savedUser.Name == this.user.Name && savedUser.Pin == this.user.Pin) {
        console.log("TRUEEE")
      }
      
    }
  }

  checkIfValid(field: string): boolean {    
    let users: User[] = JSON.parse(window.localStorage.getItem("slanguage-User") as string)
    if (!this.exsistingUser) {
      return false
    }

    for (let i = 0; i < users.length; i++) {
      let savedUser = users[i]

      if (field == "name" && savedUser.Name == this.user.Name) {
        return true
      }

      if (field == "pin" && savedUser.Pin == this.userPin) {
        return true
      }
      
    }

    return false
  }
  
}
