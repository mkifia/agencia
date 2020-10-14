import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public fb: FormBuilder, public jwtService: JwtService, public route: Router) {

    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  loginUser() {
    this.jwtService.login(this.loginForm.value)
  }
}
