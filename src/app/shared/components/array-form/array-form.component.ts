import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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

     skills:this.fb.array([])
   })
  }
    skills():FormArray{
      return this.myForm.get("skills") as FormArray
    }
    addSkill(){
const skill =this.fb.group({
  skill:new FormControl(''),
   exp:new FormControl('')

})
this.skills().push(skill)
    }
    deleteSkill(index:number){
      this.skills().removeAt(index)
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
  }
}
