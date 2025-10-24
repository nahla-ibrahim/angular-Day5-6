import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  router = inject(Router);
  http = inject(HttpClient);
  //   username:logant and password: logantpass
  usedata = { username: '', password: '' };
  errorMessage = '';
  login(formData: any) {
    if (!formData.username || !formData.password) return;

    this.http.get('https://dummyjson.com/users').subscribe((res: any) => {
      const foundUser = res.users.find(
        (u: any) => u.username === formData.username && u.password === formData.password
      );

      if (foundUser) {
        localStorage.setItem('auth', JSON.stringify({ auth: true }));
        this.router.navigate(['/productlist']);
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    });
  }
}
