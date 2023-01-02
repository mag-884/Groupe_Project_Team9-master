import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-register',
  templateUrl: './contact-register.component.html',
  styleUrls: ['./contact-register.component.css']
})
export class ContactRegisterComponent implements OnInit {
  name = new FormControl("");

  formInfo =new FormGroup({
    fname: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    message: new FormControl("", [Validators.required, Validators.maxLength(256)]),
    fcheck:new FormControl("", Validators.required),

  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit (){
    if(this.formInfo.valid){
      let contact : any = this.formInfo.value;
      console.log(contact);
      this.formInfo.reset();
    }
  }
}

