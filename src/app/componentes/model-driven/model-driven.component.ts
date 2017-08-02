import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html'
})
export class ModelDrivenComponent implements OnInit {

  form: FormGroup;

  user: any = {
    fullName: {
      name: "Jose",
      surname: "Lara"
    },
    email: "jose@lara.com",
    hobbies:['run','eat','sleep']
  }

  constructor() {
    this.form = new FormGroup({
      'fullName': new FormGroup({

        'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'surname': new FormControl('', [Validators.required,this.noShitValidation])
      }),

      'email': new FormControl('', [Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'hobbies': new FormArray([
          new FormControl('run', Validators.required)
      ])
    });

    // this.form.setValue(this.user);
  }

  addHobby(){
    (<FormArray> this.form.controls['hobbies']).push(
      new FormControl('', Validators.required)
    )
  }

  //input invalid if the value is shit
  noShitValidation(control: FormControl): {[s:string]: boolean}{
    if(control.value === "shit"){
      return{
        noShitValidation: true
      }
    }
  }

  saveChanges() {
    console.log(this.form.value);
    console.log(this.form);
    this.form.reset({
      fullName: {
        name: "",
        surname: ""
      },
      email: ""
    });
    // this.form.controls['email'].setValue('');
  }

  ngOnInit() {
  }

}
