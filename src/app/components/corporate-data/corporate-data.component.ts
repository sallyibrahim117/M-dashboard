import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ChangeProgresbarComponent } from "../../shared/components/change-progresbar/change-progresbar.component";
import { EaringCardComponent } from "../../shared/components/earing-card/earing-card.component";
import { SharedChartComponent } from "../../shared/components/shared-chart/shared-chart.component";


@Component({
  selector: 'app-corporate-data',
  standalone: true,
  imports: [CommonModule, ChangeProgresbarComponent, EaringCardComponent, SharedChartComponent],
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
arrimgs:any[]=[
  {img:"/assets/imgs/blog-img1.jpg"},
  {img:"/assets/imgs/blog-img2.jpg"},
  {img:"/assets/imgs/blog-img3.jpg"}
  ,{img:"/assets/imgs/blog-img4.jpg"},
  {img:"/assets/imgs/blog-img2.jpg"},
  {img:"/assets/imgs/blog-img1.jpg"}
]
}
