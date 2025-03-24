import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  skills=signal<any[]>([])
 constructor(private fb:FormBuilder) { }
    myForm:FormGroup=this.fb.group({})
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.developers.set([{id:1,name:"Front"},{id:1,name:"Front"},
      {id:1,name:"Front"},
    ])
    this.skills.set([{id:1,name:"html"},{id:1,name:"css"},
      {id:1,name:"js"},
    ])
  }
}
