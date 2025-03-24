import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArrayFormComponent } from "../../shared/components/array-form/array-form.component";

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, ArrayFormComponent],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent {
contacts:any[]=[{
  img:"/assets/imgs/1.jpg",name:"oliver jack",email:"info@oliver.com"
}
,
{
img:"/assets/imgs/2.jpg",name:" jack cooner",email:"info@jack.com"
},{
img:"/assets/imgs/3.jpg",name:"Harry coulm",email:"info@harry.com"
},{
  img:"/assets/imgs/4.jpg",name:"sally ibrahim",email:"info@sally.com"

}]
}
