import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  hide = true;

  email = null;

  password = null;;

  constructor() { }

  submit(){
    console.log('clicked');
  }


  ngOnInit(): void {
  }

}
