import { Component } from '@angular/core';
import { JwtService } from './services/jwt.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Agencia';
  constructor(public jwtService :JwtService) {}

  logout() {
    this.jwtService.doLogout()
  }
}
