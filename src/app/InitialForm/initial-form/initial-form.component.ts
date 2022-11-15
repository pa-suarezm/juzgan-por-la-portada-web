import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-form',
  templateUrl: './initial-form.component.html',
  styleUrls: ['./initial-form.component.css']
})
export class InitialFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('completed-initial-survey') == 'true') {
      this.router.navigate(['home']);
    }
  }

  public onClickYes() {
  }

  public onClickNo() {
    localStorage.setItem('completed-initial-survey', 'true');
    this.router.navigate(['home']);
  }

}
