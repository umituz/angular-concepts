import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  hide = true;

  email = null;

  password = null;

  waitProgress = false;

  constructor() {
  }

  submit(form) {
    this.waitProgress = true;
    setTimeout(() => {
      alert(`Email : ${form.value.email} and password : ${form.value.password}`);
      this.waitProgress = false;
    }, 1000);
  }


  ngOnInit(): void {
  }

}
