import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles:[`
  .ng-invalid.ng-touched:not(form){
    border: 1px solid red;
  }
  `]
})
export class TemplateDrivenComponent implements OnInit {

  user:Object = {
    name: null,
    surname: null,
    email: null,
    country: "",
    gender: "Male",
    accept: false
  }

  countries=[{"code":"ES","name":"Spain"},{"code":"BR", "name":"Brazil"}];

  genders: String[] = ["Male","Female"];

  constructor() { }

  ngOnInit() {
  }

  save(form: NgForm){
    console.log("ngForm",form);
    console.log("value",form.value);
    console.log("user",this.user);
  }

}
