import { Component, OnInit } from '@angular/core';

/* importacion de servicios */
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user_update.component.html',
  styleUrls: ['./user_update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
