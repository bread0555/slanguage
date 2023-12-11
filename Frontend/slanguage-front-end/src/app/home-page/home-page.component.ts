import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  
  constructor(public userSerivce: UserService) {}

  percentageCompleted: number = 0

  ngOnInit(): void {
    this.percentageCompleted = (this.userSerivce.activeUser.Points / 27) * 100
    console.log(this.percentageCompleted)
  }
}
