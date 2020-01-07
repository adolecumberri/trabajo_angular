import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.interface";

@Injectable({
    providedIn: "root"
})
/*RUTAS DEL SERVER :
get /userId -> get user.
post /userId -> update user.
post / añadir user (done)
*/
export class UserService {
    /*url base */
    apiUrl = 'http://localhost:3000';

    /* constructor en el que instancio el httpClient, que sirve para conectarse a la api externa.*/
    constructor(private httpClient: HttpClient) {
        console.log("Instancia nuestro user service");
    }

    /* EL tipo de header */
    headers: HttpHeaders = new HttpHeaders({
        "Content-Type": "application/json"
    });

    /* añade user */
    addUsers(user: User) : Observable <User>{
        return this.httpClient.post <User>(`${this.apiUrl}`, user);
    }

    /* update user */
    updateUser(user: User, id: string) : Observable<any>{
        return this.httpClient.post(`${this.apiUrl}/${id}`, user);
    }

    /* get user*/
    getUser(id: string) : Observable<any>{
        return this.httpClient.get(`${this.apiUrl}/${id}`);
    }

    
  loginUser(user: User): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }
  
  /* No uso esto pero creo que hace falta que esté aquí */
  logoutUset(): void {
      localStorage.removeItem("currentUser");
  }

  setTokenInLocalStorage(token): void {
    localStorage.setItem("accessToken", token);
  }
  
  getTokenFromLocalStorage() {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(){
    let user_string = localStorage.getItem("currentUser");
    if (user_string != null || user_string!= "undefined") {
      let user: User = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }


}
