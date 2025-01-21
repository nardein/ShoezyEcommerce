import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  apiBaseUrl = "api/users"

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  saveStorage(res){
    const user = {
      id: res._id,
      name: res.name,
      email: res.email,
      password: res.password,
    }
    localStorage.setItem('user',JSON.stringify(user))
  }

  isLogged():boolean{
    return JSON.parse(localStorage.getItem('user')) != null;
  }

  logout(){
    localStorage.removeItem('user');
  }

  login(email:string, password:string){
    const user = { email:email, password:password };
    return this.http.post(`${this.apiBaseUrl}/login`,user);
  }


}
