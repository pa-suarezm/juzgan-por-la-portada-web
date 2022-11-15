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
    localStorage.setItem('completed-initial-survey', 'true');
    this.router.navigateByUrl("https://docs.google.com/forms/d/e/1FAIpQLSfhCZ9xGBwaOf1q_NVdd9s03bqdfW-B2HHzedFkzRu4_eF3_g/viewform");
  }

  public onClickNo() {
    this.router.navigate(['home']);
  }

}
