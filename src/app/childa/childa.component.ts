import { NONE_TYPE } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { passwordMatch } from '../validators/passwordMatch';

@Component({
  selector: 'app-childa',
  templateUrl: './childa.component.html',
  styleUrls: ['./childa.component.scss']
})
export class ChildaComponent {
  userForm = new FormGroup({
    emailid :new FormControl('',[Validators.required,Validators.email,Validators.minLength(5)]),
    pwd : new FormControl('',[Validators.required,Validators.minLength(2)]),
    repwd: new FormControl('',[Validators.required,Validators.minLength(2)]),
    username :new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    address : new FormControl('',[Validators.required]),
    },[passwordMatch("pwd","repwd")]);
    submitUser()
{   
    console.warn(this.userForm.value);
}
 get emailid()
 {
     return this.userForm.get('emailid');
 }
 get pwd()
 {
  return this.userForm.get('pwd');
 }
 get repwd()
 {
  return this.userForm.get('repwd');
 }
 get username()
 {
     return this.userForm.get('username');
 }
 get address()
 {
     return this.userForm.get('address');
 }
 get f(){
  return this.userForm.controls;
}
}
