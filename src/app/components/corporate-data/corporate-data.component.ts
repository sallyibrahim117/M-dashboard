import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-corporate-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './corporate-data.component.html',
  styleUrl: './corporate-data.component.scss'
})
export class CorporateDataComponent {

arrimgs:any[]=[
  {img:"/assets/imgs/blog-img1.jpg"},
  {img:"/assets/imgs/blog-img2.jpg"},
  {img:"/assets/imgs/blog-img3.jpg"}
  ,{img:"/assets/imgs/blog-img4.jpg"},
  {img:"/assets/imgs/blog-img2.jpg"},
  {img:"/assets/imgs/blog-img1.jpg"}
]
}
