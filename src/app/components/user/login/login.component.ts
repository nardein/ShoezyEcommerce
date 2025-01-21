import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email='';
  password='';
  user;
  errorMessage;

  private router = inject(Router);
  private authService = inject(AuthService);


  onSubmit(form){
    console.log(form.value)
    if(form.email !== '' && form.password !== ''){
      this.authService.login(form.email,form.password).subscribe({
        next:(res) =>{
          this.user=res;
          if(res){
            this.authService.saveStorage(res);
            this.router.navigateByUrl('/home');
          } else {
            this.errorMessage = 'Username/password errati';
          }
        },
        error:(e) => {console.log(e);
        this.errorMessage = 'Username/password errati';
        }
      })
    }
  }
}
