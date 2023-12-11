import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  
  constructor(public userSerivce: UserService, public router: Router) {}

  percentageCompleted: number = 0

  ngOnInit(): void {
    this.percentageCompleted = Math.round((this.userSerivce.activeUser.Points / 27) * 100)
  }

  logOut(): void {
    this.userSerivce.logOut()
  }
}
