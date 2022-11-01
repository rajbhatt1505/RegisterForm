import { Component, OnInit } from '@angular/core';

import { AbstractControl, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


[x: string]: any;
  submitted = false;
  public showPassword: boolean = false;

  
OnlyNumbersAllowed(event: { which: any; keyCode: any; }):boolean{
  const charcode = (event.which)?event.which:event.keyCode;

  if(charcode > 31 && (charcode < 48 || charcode > 57))
  {
    console.log('charCode restricted is '+ charcode);
    return false;
  }
return true;

}
  
  constructor() { }

  ngOnInit(): void {
    
  }
registerForm = new FormGroup({
  // fistname: new FormControl("",[Validators.required, Validators.minLength(3)]),
  name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
  email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  mobile: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  gender: new FormControl('',[Validators.required]),
  pwd: new FormControl('',[Validators.required,Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]),

  // rpwd: new FormControl(''),
});


public togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}

registerSubmited(): void{
  this.submitted = true;

  if (this.registerForm.invalid || null ){
    return;
  }
  
 

  console.log(JSON.stringify(this.registerForm.value,null,2));
}
  // get firstname (): FormControl {
  //   return this.registerForm.get("firstname") as FormControl;
  // }

 get name(): FormControl{
  return this.registerForm.get("name") as FormControl;
 }
 get email(): FormControl{
  return this.registerForm.get("email") as FormControl;
 }
 get mobile(): FormControl{
  return this.registerForm.get("mobile") as FormControl;
}
 get gender(): FormControl{
  return this.registerForm.get("gender") as FormControl;
 }
 get pwd(): FormControl{
  return this.registerForm.get("pwd") as FormControl;
 }
 get f(): { [key: string]: AbstractControl}{
   return this.registerForm.controls;
 }


}
