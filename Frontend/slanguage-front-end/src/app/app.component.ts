import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title = 'slanguage-front-end';

  constructor (private userService: UserService, public router: Router) {}

  ngOnInit(): void {
    this.userService.users = this.userService.getUsers()
  }
}
