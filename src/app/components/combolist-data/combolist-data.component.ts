import { ChangeDetectorRef, Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { TablesComponent } from '../tables/tables.component';
import { ChartModule } from 'primeng/chart';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-combolist-data',
  standalone: true,
  imports: [TablesComponent,ChartModule,CommonModule,CalendarModule,FormsModule,ViewComponent],
  templateUrl: './combolist-data.component.html',
  styleUrl: './combolist-data.component.scss'
})
export class CombolistDataComponent {
  progress=50;
  date: Date | undefined;
arrofdata:any[]=[{
  bgcolor:"#198754",des:"Leaf CRM",value:"$7,660"
},
{
  bgcolor:"#0d6efd",des:"Mivy App",value:"$2,820"
},
{
  bgcolor:"#f8f9fa",des:"Others",value:"$45,257"
},
]
lists:any[]=[{tex:"Avg. Client Rating",arrow:"pi pi-arrow-up-right",rate:"7.8/10" ,arrowcolor:"#198754"},
  {tex:"Avg. Quotes",arrow:"pi pi-arrow-down-left",rate:"730" ,arrowcolor:"#dc3545"},
  {tex:"Avg. Agent Earnings",arrow:"pi pi-arrow-up-right",rate:"$2,309" ,arrowcolor:"#198754"},
]
  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);


  constructor(private cd: ChangeDetectorRef) {}


  themeEffect = effect(() => {

});
  ngOnInit() {
      this.initChart();
  }

  initChart() {
      if (isPlatformBrowser(this.platformId)) {
          const documentStyle = getComputedStyle(document.documentElement);
          const textColor = documentStyle.getPropertyValue('--p-text-color');

          this.data = {

              datasets: [
                  {
                      data: [200, 150, 100],

                      backgroundColor:["#5A6ACF","#198754","#C7CEFF"],
                      hoverBackgroundColor:["#5A6ACF","#198754","#C7CEFF"],
                    }
              ]
          };

          this.options = {
              cutout: '60%',
              plugins: {
                  legend: {
                      labels: {
                          // color: textColor
                      }
                  }
              }
          };
          this.cd.markForCheck()
      }
  }

  dataofcalender:any[]=[{time:"10:20 - 11:00",para:"9 Degree Project Estimation Meeting",desc:"Lead by",name:"peter marcous",type:"AM",status:"inprogree"},
    {time:"16:30 - 17:00 ",para:"Dashboard UI/UX Design Review",desc:"Lead by",name:"Lead by Bob" ,type:"PM",status:"pending"},
    {time:"12:00 - 13:40",para:"Marketing Campaign Discussion",desc:"Lead by",name:"marcoo morriss" ,type:"AM",status:"success"},

  ]
  mydate=this.dataofcalender[0];
  mydate1=this.dataofcalender[1];
  mydate2=this.dataofcalender[2];
 arrOfProjects:any[]=[{icon:"pi pi-shopping-bag ",text:"projects",countlevel:"up to 500"},
  {icon:"pi pi-database",text:"tasks",countlevel:"unlimited"}
 ]
}




