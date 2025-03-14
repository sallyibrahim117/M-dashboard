import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,FloatLabelModule,ButtonModule,InputTextModule,CommonModule,CheckboxModule,DropdownModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  value3: string | undefined;
  constructor(private fb:FormBuilder) { }
    myForm:FormGroup=this.fb.group({
      name:['',[Validators.required ,
        Validators.pattern( /^[A-Za-z]+$/),Validators.minLength(3),Validators.maxLength(20)]],
        email:['',[Validators.required,Validators.email]],
        phone:['',[Validators.required, Validators.pattern(/^\d{11}$/),Validators.maxLength(11)]]
      ,
      country:['',[Validators.required]],
      communication:['',[Validators.required]],
    })
    get formControlls():any{
      return this.myForm.controls;
    }
    cities=signal<any[]>([])
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.cities.set([{id:1,name:"egypt"},{id:2,name:"USA"},{id:3,name:"Saudia"},{id:4,name:"Greek"}])
    }
    submit(){
      if (this.myForm.valid){

        // this.toastr.success('well!,form submitted', 'hi');
        // alert("well")
        console.log(this.myForm);
        console.log(this.myForm.value);

      }
      else {
  this.myForm.markAllAsTouched();
      }


    }

}
