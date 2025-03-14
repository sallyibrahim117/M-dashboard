import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-allcourses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allcourses.component.html',
  styleUrl: './allcourses.component.scss'
})
export class AllcoursesComponent {
mycourses:any[]=[{mycolor:"#FF5733" ,name:"m",title:"UI/UX Design",num:"40+ Courses",icon:"pi pi-arrow-right "},
  {mycolor:"#17C653", name:"q",title:"QA Analysis",num:"18+ Courses",icon:"pi pi-arrow-right "},
  {mycolor:"#7239EA",name :"w",title:"Web Development",num:"140+ Courses",icon:"pi pi-arrow-right "},
  {mycolor:"#056EE9",name :"m",title:"Marketing",num:"522+ Courses",icon:"pi pi-arrow-right "},
  {mycolor:"#DEAD00",name :"p",title:"Philosophy",num:"240+ Courses",icon:"pi pi-arrow-right "},
  {mycolor:"#111318",name :"m",title:"Mathematics",num:"40+ Courses",icon:"pi pi-arrow-right "},
]
}
