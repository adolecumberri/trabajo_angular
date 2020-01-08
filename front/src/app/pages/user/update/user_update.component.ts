import { Component, OnInit } from '@angular/core';

/* importacion de servicios */
import { UserService } from '../../../service/user.service';
import { User } from '../../../models/user.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user_update.component.html',
  styleUrls: ['./user_update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: User;
  errorPassword = false;
  
  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    console.log(this.user);
  }
/* jaja*/
  
  onLogin({form : {value}}:NgForm){

    if(value.password !== value.password_verification){
/*poner booleano a true y que pase algo */
console.log(value.password);
console.log(value.password_verification);
      this.errorPassword = true;
    }else{
      console.log("value");
      console.log(value);
      console.log(this.user);
      const userId = this.userService.getTokenFromLocalStorage(); 
      return this.userService.updateUser(this.user, userId)
      .subscribe(
        data => {
          console.log("los datos");
          console.log(this.user);
          console.log(data);
          
        },
        error => {
          console.log("errore");
          console.log(error);
        }
      );
    }

  }

}
