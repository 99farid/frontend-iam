import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { FindAllResEmployeesDto } from 'projects/core/src/app/dto/employees/find-all-res-employees-dto';
import { Employees } from 'projects/core/src/app/model/employees';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
  providers: [ConfirmationService]
})
export class EmployeesListComponent implements OnInit, OnDestroy {

  allDataEmployees?: FindAllResEmployeesDto

  private obs?: Subscription

  listEmployee: Employees[] = []

  constructor(private router: Router, private employeesService: EmployeesService,
    private confirmationService: ConfirmationService, private titLeService: Title) {
    titLeService.setTitle('Employee')
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

  ngOnInit(): void {
    this.initData()
  }

  initData(): void {
    this.allDataEmployees = new FindAllResEmployeesDto()
    this.employeesService.findAllEmployees().subscribe(result => {
      this.allDataEmployees = result
      this.listEmployee = this.allDataEmployees.data
    })
  }

  clickCreate(): void {
    this.router.navigateByUrl('/employees/new')
  }

  clickUpdate(id: string): void {
    this.router.navigateByUrl(`/employees/modify/${id}`)
  }

  confirm(id: string): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to Remove?',
      accept: () => {
        this.employeesService.delete(id).subscribe({
          next: result => {
            this.initData()
          }
        })
      }
    });
  }

  clickBack() {
    this.router.navigateByUrl('/dashboard')
  }

}