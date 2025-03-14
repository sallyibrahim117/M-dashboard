import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartsComponent } from '../../shared/components/charts/charts.component';
import { FormComponent } from "../../shared/form/form.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChartsComponent, FormComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
Followers:any []=[{numbers:10000,desc:"articles"},
  {numbers:23000,desc:"Followers"},
  {numbers:6000,desc:"Following"}
]
imgs:any[]=[{
  im1:"/assets/imgs/img1.jpg"
},
{
  im1:"/assets/imgs/img2.jpg"
},
{
  im1:"/assets/imgs/img3.jpg"
},
{
  im1:"/assets/imgs/img4.jpg"
}
]

}
