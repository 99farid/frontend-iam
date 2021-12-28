import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindAllResEmployeesDto } from 'projects/core/src/app/dto/employees/find-all-res-employees-dto';
import { Employees } from 'projects/core/src/app/model/employees';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit, OnDestroy {

  allDataEmployees?: FindAllResEmployeesDto

  private obs?: Subscription

  listEmployee: Employees[] = []

  constructor(private router: Router, private employeesService: EmployeesService,
    private authService: AuthenticationService) { }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

  ngOnInit(): void {
    this.allDataEmployees = new FindAllResEmployeesDto()
    this.employeesService.findAllEmployees().subscribe(result => {
      this.allDataEmployees = result
      this.listEmployee = this.allDataEmployees.data
    })
  }

  clickCreate(): void {
    this.router.navigateByUrl('/employees-action/new')
  }

  clickUpdate(id: string): void {
    this.router.navigateByUrl(`/employees-action/${id}`)
  }

  clickDelete(id: string): void {
    this.employeesService.delete(id).subscribe({
      next: result => {
        window.location.reload()
      }
    })
  }

  clickBack() {
    this.router.navigateByUrl('/dashboard')
  }

}

// class Employees {
//   number?: number
//   company?: string
//   nip?: string
//   fullName?: string
//   email?: string
//   phoneNo?: string
//   department?: string
//   isActive?: boolean
// }

