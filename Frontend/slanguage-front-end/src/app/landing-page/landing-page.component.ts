import { Component } from '@angular/core';
import { User } from '../../../interfaces/user.ts';
import { UserService } from '../../../services/user.service.js';
import { MessageService } from 'primeng/api/messageservice.js';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  providers: [MessageService]
})
export class LandingPageComponent {
  user: User = {
    Id: 0,
    Name: '',
    Pin: 0,
    Language: 'Languages'
  }

  constructor (private userService: UserService, private messageService: MessageService) {}

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
    this.user.Id = Math.random() * 100
    this.user.Language = this.selectedLanguage.name
    this.user.Pin = this.userPin

    let allUsers: User[] = this.userService.getUsers()

    console.log(allUsers)
    
    // NO CURRENT USERS
    if (allUsers == null) {
      let allUsers = [this.user]
      this.userService.putUsers(allUsers)
    }
    else {
      // USERS ALREADY EXISTS
      allUsers.push(this.user)
      this.userService.putUsers(allUsers)
    }
  }

  login(): void {
    this.user.Pin = this.userPin
    if (this.userService.userLogin(this.user)) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
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
