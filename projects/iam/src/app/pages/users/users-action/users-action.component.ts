import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FindByResNipDto } from 'projects/core/src/app/dto/employees/find-by-res-nip-dto';
import { FindAllResRolesDto } from 'projects/core/src/app/dto/roles/find-all-res-roles-dto';
import { FindAllResFilterByIdEmployeeDto } from 'projects/core/src/app/dto/transactions-out/find-all-res-filter-by-id-employee-dto';
import { FindByIdResUsersDto } from 'projects/core/src/app/dto/users/find-by-id-res-users-dto';
import { Employees } from 'projects/core/src/app/model/employees';
import { Roles } from 'projects/core/src/app/model/roles';
import { Users } from 'projects/core/src/app/model/users';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { RolesService } from 'projects/core/src/app/services/roles/roles.service';
import { UsersService } from 'projects/core/src/app/services/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-action',
  templateUrl: './users-action.component.html',
  styleUrls: ['./users-action.component.css']
})
export class UsersActionComponent implements OnInit {

  dataInsert: Users = new Users()

  dataUpdate: Users = new Users()

  listRole?: FindAllResRolesDto

  employee : Employees = new Employees()

  roleSelected: Roles = new Roles()

  nip : string =""

  role: Roles = new Roles()

  isDisabled: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private usersService: UsersService, private rolesService: RolesService,
    private employeesService: EmployeesService, private titLeService: Title) {
      titLeService.setTitle('User Form') 
     }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.usersService.findByIdUsers(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
        result => {
          const usersResult: FindByIdResUsersDto = result
          this.dataUpdate = usersResult.data
          this.isDisabled = true

          this.dataInsert.id = this.dataUpdate.id
          this.dataInsert.version = this.dataUpdate.version
          this.dataInsert.createdBy = this.dataUpdate.createdBy
          this.dataInsert.createdDate = this.dataUpdate.createdDate

          this.employee.email = this.dataUpdate.email
          this.dataInsert.email = this.dataUpdate.email
          this.dataInsert.pass = this.dataUpdate.pass
        })
    }
    this.rolesService.findAllRoles()?.subscribe(result => {
      this.listRole = result
    })
    this.dataInsert.role = this.role
  }

  clickSubmit() {
    if (this.dataInsert.id) {
      this.usersService.update(this.dataInsert).subscribe({
        next: result => {
          this.router.navigateByUrl('/users')
        }
      })
    } else {
      this.usersService.insert(this.dataInsert).subscribe({
        next: result => {
          this.router.navigateByUrl('/users')
        }
      })
    }
  }

  changeRole(): void {
    
  }

  clickFind(): void {
    this.employeesService.findByNip(this.nip).subscribe(
      {
        next : result => {
          const findNip: FindByResNipDto = result
          this.employee = result.data 
          this.dataInsert.email = this.employee.email
          
        },
        error : err=>{
          this.employee.email = "-"
        }
      })
  }

  clickBack() {
    this.router.navigateByUrl('/users')
  }
}