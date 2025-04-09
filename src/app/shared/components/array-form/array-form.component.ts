import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';
import { sign } from 'crypto';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-array-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,DropdownModule],
  templateUrl: './array-form.component.html',
  styleUrl: './array-form.component.scss'
})
export class ArrayFormComponent {
  developers=signal<any[]>([])
  skillsList=signal<any[]>([])
  myForm:FormGroup

 constructor(private fb:FormBuilder) {

   this.myForm=this.fb.group({
    name:this.fb.control('',[Validators.required]),
    email:this.fb.control('',[Validators.required]),
    skills:this.fb.array([])
   })
  }
    skillsArray():FormArray{
      return this.myForm.get("skills") as FormArray
    }

    addSkill(){
      const skill =this.fb.group({
        skill:this.fb.control('',[Validators.required]),
        exp:new FormControl('',[Validators.required])

      })
      this.skillsArray().push(skill)
    }

    deleteSkill(index:number){
      this.skillsArray().removeAt(index)
    }

    save(){
     console.log(this.myForm.value);
    }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.developers.set([{id:1,name:"Front"},{id:1,name:"back"},
      {id:1,name:"fullStack"},
    ])
    this.skillsList.set([{id:1,name:"html"},{id:1,name:"css"},
      {id:1,name:"js"},
    ])

    this.addSkill();

    this.myForm.valueChanges.subscribe((res:any)=>
    {
      console.log(res);
    })
  }
}
