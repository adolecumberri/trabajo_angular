import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from '../../models/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /* Construnctor que instancia el servicio de conexion a la base de datos. */
  constructor(private userService: UserService, private router: Router) {}

  /* objeto tipo User que instancio vacio */
  private user : User = {
    email: null,
    username: null,
    password: ""
  }

  ngOnInit() {}

  onLogin(){
    return this.userService.addUsers(this.user).
    subscribe(
      data => {
        console.log(data);

        this.userService.loginUser(data);
        this.userService.setTokenInLocalStorage(data.user_id);
        this.router.navigate(['/main', this.user]);

    },
    error => 
      console.log(error)
    );
  }

}
