import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hamClick() {
    const body = document.getElementsByTagName('body')[0];
    if (body.className.match("toggle-sidebar")){
      body.classList.remove("toggle-sidebar")
    } else {
      body.classList.add("toggle-sidebar")
    }
  }

  handleClickLogin() {
    this.router.navigateByUrl('/dashboard')
  }
}
