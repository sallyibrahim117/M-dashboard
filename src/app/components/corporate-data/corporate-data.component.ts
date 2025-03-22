import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ChangeProgresbarComponent } from "../../shared/components/change-progresbar/change-progresbar.component";
import { EaringCardComponent } from "../../shared/components/earing-card/earing-card.component";
import { SharedChartComponent } from "../../shared/components/shared-chart/shared-chart.component";
import { TablesComponent } from "../tables/tables.component";
import { ProductComponent } from "../../shared/components/product/product.component";


@Component({
  selector: 'app-corporate-data',
  standalone: true,
  imports: [CommonModule, ChangeProgresbarComponent, EaringCardComponent, SharedChartComponent, TablesComponent, ProductComponent],
  templateUrl: './corporate-data.component.html',
  styleUrl: './corporate-data.component.scss'
})
export class CorporateDataComponent {
 progressBarData=signal<any>({
  count:1.836 ,smallText:"Orders This Month",text:"1,048 to Goal",value:62,backgroundColor:"#17c653"
 })

myearningData:any[]=[{
  headnumber:69.700,smallText:"Expected Earnings",arrofdata: [
    { bgcolor: "#198754", des: "Shoes", value: "$7,660" },
    {
      bgcolor:"#0d6efd",des:"Gaming",value:"$2,820"
    },
    {
      bgcolor:"#f8f9fa",des:"Others",value:"$45,257"
    },
  ]


}]

products: any[] = [
  {
    orderid: '#XGY-356	',
    customer: 'Albert Flores',
    created: '7 min ago',
    profit: 1000,

    status:'confirmed',

  },
  {
    orderid: '#XGY-356',
    customer: 'Jenny Wilson',
    created: '57 min ago',
    profit: 1000,

    status:'pendding',

  },
  {
    orderid: '#PXF-578',
    customer: 'Robert Fox',
    created: '1 hour ago',
    profit: 3300,

    status:'rejected',

  },
  {
    orderid: '#XGY-356	',
    customer: 'Cody Fisher	',
    created: '3 hours ago',
    profit: 89900,

    status:'snipped',

  },
  {
    orderid: '#XGY-356	',
    customer: 'Arlene McCoy',
    created: '17 min ago',
    profit: 1000,

    status:'completed',

  },
  {
    orderid: '#PXF-578',
    customer: 'Eleanor Pena	',
    created: '7 min ago',
    profit: 3300,

    status:'snipped',

  },
];
cols: any[] = [
  { header: 'PRODUCT ID', field: 'orderid' },
  { header: 'CUSTOMER', field: 'customer' ,type:'text'},
  { header: 'CREATED', field: 'created' },

    { header: 'STATUS', field: 'status',type:'status' },
  { header: 'PROFIT', field: 'profit' },

];


productsOftable: any[] = [
  {
    item: 'Macbook Air M1',
    productid: '#XGY-356	',
    DATEADDED: '02 Apr, 2025',
    price: 1000,
    QT: '58 PCS',
    status:'inprogress',
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
    status:'onhold',
    date:new Date()
  },
  {
    item: 'Macbook Air M1',
    productid: '#XGY-356	',
    DATEADDED: '20 Feb, 2025',
    price: 89900,
    QT: '20 PCS',
    status:'inprocess',
    date:new Date()
  },
  {
    item: 'Macbook Air M1',
    productid: '#XGY-356	',
    DATEADDED: '02 Apr, 2025',
    price: 1000,
    QT: '58 PCS',
    status:'completed',
    date:new Date()
  },
  {
    item: 'AudioEngine HD3',
    productid: '#PXF-578',
    DATEADDED: '28 Oct, 2025',
    price: 3300,
    QT: '5 PCS',
    status:'inprocess',
    date:new Date()
  },
];
colsOftable: any[] = [
  { header: 'Item', field: 'item' ,type:'text'},
  { header: 'PRODUCT ID', field: 'productid' },
  { header: 'DATED ADDED', field: 'DATEADDED' },
  { header: 'PRICE', field: 'price' },
  { header: 'QT', field: 'QT' },
  { header: 'Status', field: 'status',type:'status' },
  {header:"Date",field:"date" ,type:"date"}
];

arrOfProducts=signal<any[]>([
  {img:"assets/imgs/t1.png",text:" Elephant 1802",name:"Jason Bourne",status:"delivered"},
  {img:"assets/imgs/t2.png",text:"  RiseUP",name:" Marie Durant",status:"snipping"},
  {img:"assets/imgs/t3.png",text:"  Elephant 1802",name:"Lebron Wayde",status:"delivered"},
  {img:"assets/imgs/t4.png",text:"  RiseUP",name:" Ana Simmons",status:"snipping"},
  {img:"assets/imgs/t5.png",text:"  RiseUP",name:"  Yellow Stone",status:"confirmed"},

])
pro1=this.arrOfProducts()[0]
pro2=this.arrOfProducts()[1]
pro3=this.arrOfProducts()[2]
pro4=this.arrOfProducts()[3]
pro5=this.arrOfProducts()[4]
arrimgs:any[]=[
  {img:"/assets/imgs/blog-img1.jpg"},
  {img:"/assets/imgs/blog-img2.jpg"},
  {img:"/assets/imgs/blog-img3.jpg"}
  ,{img:"/assets/imgs/blog-img4.jpg"},
  {img:"/assets/imgs/blog-img2.jpg"},
  {img:"/assets/imgs/blog-img1.jpg"}
]
}
