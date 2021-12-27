import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginReqDto } from 'projects/core/src/app/dto/login/login-req-dto';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: LoginReqDto = new LoginReqDto()
  token?: string
  roleCode?: string

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  clickLogin() {
    this.authenticationService.login(this.login).subscribe(result => {
      this.authenticationService.saveUserData(result)
      this.token = this.authenticationService.getToken()
      this.roleCode = this.authenticationService.getRoleCode()
      this.router.navigateByUrl('/dashboard')
      // if (this.roleCode == users.get(1)){
      //   this.router.navigateByUrl('/dashboard')
      // } else if (this.roleCode == users.get(2)){
      //   this.router.navigateByUrl('/dashboard')
      // } else{

      // }
    })
  }

  // clickLogin() {
  //   this.router.navigateByUrl('/dashboard')
  // }


  ngOnInit(): void {
  }
}






 

  // handleClickNonAdmin() {
  //   this.router.navigateByUrl('/dashboard-nonAdmin')
  // }

  // handleClickAdmin() {
  //   this.router.navigateByUrl('/dashboard-admin')
  // }
// }
