import { ChangeDetectorRef, Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { TablesComponent } from '../tables/tables.component';
import { ChartModule } from 'primeng/chart';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-combolist-data',
  standalone: true,
  imports: [TablesComponent,ChartModule,CommonModule],
  templateUrl: './combolist-data.component.html',
  styleUrl: './combolist-data.component.scss'
})
export class CombolistDataComponent {
  progress=50
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
}




