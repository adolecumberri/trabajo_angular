import { Component, OnInit } from '@angular/core';
/* importacion de servicios */
import { UserService } from '../../../service/user.service';
import { User } from '../../../models/user.interface';
@Component({
  selector: 'app-user-main',
  templateUrl: './user_main.component.html',
  styleUrls: ['./user_main.component.scss']
})
export class UserMainComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: User;

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    console.log(this.user);
  }

}
