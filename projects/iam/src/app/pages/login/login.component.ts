import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginReqDto } from 'projects/core/src/app/dto/login/login-req-dto';
import { RolePermissions } from 'projects/core/src/app/model/role-permissions';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { RolePermissionsService } from 'projects/core/src/app/services/role-permissions/role-permissions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: LoginReqDto = new LoginReqDto()
  token?: string
  roleCode?: string
  listRolePermission: RolePermissions[] = []

  constructor(private authenticationService: AuthenticationService, private router: Router,
    private rolePermissionService: RolePermissionsService, private titLeService: Title) {
    titLeService.setTitle('Login')
  }

  clickLogin() {
    this.authenticationService.login(this.login).subscribe(result => {
      this.authenticationService.saveUserData(result)
      this.token = this.authenticationService.getToken()
      this.rolePermissionService
        .findAllFilterByRoleCode(this.authenticationService.getRoleCode())
        .subscribe(
          {
            next: result => {
              this.listRolePermission = result.data
              this.authenticationService.savePermission(this.listRolePermission)
              this.router.navigateByUrl('/dashboard')
            }
          }
        )
    })
  }
  ngOnInit(): void {
    localStorage.clear();
  }
}

