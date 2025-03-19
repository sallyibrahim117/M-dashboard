import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ChartsComponent } from '../../shared/components/charts/charts.component';
import { FormComponent } from "../../shared/form/form.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TablesComponent } from '../tables/tables.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChartsComponent, FormComponent,FormsModule,ReactiveFormsModule,TablesComponent],
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

arrofprogress=signal<any[]>([{
  text:"word press",percentage:80,backgroundcolor:"#198754"
}])
products: any[] = [
  {
    item: 'Macbook Air M1',
    productid: '#XGY-356	',
    DATEADDED: '02 Apr, 2025',
    price: 1000,
    QT: '58 PCS',
    status:'in progress',
    date:new Date()
  },
  {
    item: 'Dell 32 UltraSharp',
    productid: '#XGY-356',
    DATEADDED: '15 Mar, 2025',
    price: 1000,
    QT: '90 PCS',
    status:'pendding',
    date:new Date()
  },
  {
    item: 'AudioEngine HD3',
    productid: '#PXF-578',
    DATEADDED: '28 Oct, 2025',
    price: 3300,
    QT: '5 PCS',
    status:'pendding',
    date:new Date()
  },
  {
    item: 'Macbook Air M1',
    productid: '#XGY-356	',
    DATEADDED: '20 Feb, 2025',
    price: 89900,
    QT: '20 PCS',
    status:'pendding',
    date:new Date()
  },
  {
    item: 'Macbook Air M1',
    productid: '#XGY-356	',
    DATEADDED: '02 Apr, 2025',
    price: 1000,
    QT: '58 PCS',
    status:'pendding',
    date:new Date()
  },
  {
    item: 'AudioEngine HD3',
    productid: '#PXF-578',
    DATEADDED: '28 Oct, 2025',
    price: 3300,
    QT: '5 PCS',
    status:'pendding',
    date:new Date()
  },
];
cols: any[] = [
  { header: 'Item', field: 'item' ,type:'text'},
  { header: 'PRODUCT ID', field: 'productid' },
  { header: 'DATED ADDED', field: 'DATEADDED' },
  { header: 'PRICE', field: 'price' },
  { header: 'QT', field: 'QT' },
  { header: 'Status', field: 'status',type:'status' },
  {header:"Date",field:"date" ,type:"date"}
];
}
