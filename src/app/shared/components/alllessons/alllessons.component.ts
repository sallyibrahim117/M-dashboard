import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alllessons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alllessons.component.html',
  styleUrl: './alllessons.component.scss'
})
export class AlllessonsComponent {
mylessons:any[]=[{
  img:"/assets/imgs/laravel-2.svg",title:"Laravel",txt:"PHP Framework",percentage:"65%",num:65,
  progresscolor:"#DFFFEA",percentagecolor:"#17C653",status:"pass"
},
{
  img:"/assets/imgs/vue-9.svg",title:"Vue 3",txt:"JS Framework",percentage:"40%",num:40,
  progresscolor:"#e1dcc9",percentagecolor:"#ffc107",status:"fail"
},
{
  img:"/assets/imgs/bootstrap5.svg",title:"Bootstrap 5",txt:"CSS Framework",percentage:"70%",num:70,
  progresscolor:"#d1e6f",percentagecolor:"#6f42c1",status:"inprogress"
},
{
  img:"/assets/imgs/spring-3.svg",title:"Spring",txt:"Java Framework",percentage:"56%",num:56,
  progresscolor:"#F8285A",percentagecolor:"#dc3545",status:"completed"
},
{
  img:"/assets/imgs/typescript-1.svg",title:"TypeScript",txt:"Better Tooling",percentage:"82%",num:82,
  progresscolor:"#DFFFEA",percentagecolor:"#198754",status:"banned"
},
]
}
