import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AllcoursesComponent } from "../../shared/components/allcourses/allcourses.component";
import { AlllessonsComponent } from "../../shared/components/alllessons/alllessons.component";
import { CarouselModule } from 'primeng/carousel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'primeng/chart';
import { Chart2Component } from "../../shared/components/chart2/chart2.component";
import { SlidersComponent } from "../../shared/components/sliders/sliders.component";
@Component({
  selector: 'app-online-courses',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule, AllcoursesComponent, AlllessonsComponent, CarouselModule, ChartModule, Chart2Component, SlidersComponent],
  templateUrl: './online-courses.component.html',
  styleUrl: './online-courses.component.scss'
})
export class OnlineCoursesComponent {
cards:any=[{icon:'pi pi-filter',num:37,txt:"courses"},
  {icon:'pi pi-home',num:6,txt:"certificates"},
  {icon:'pi pi-money-bill',num:3.7,txt:"avg. Score"},
  {icon:'pi pi-clock',num:822,txt:"hours Learned"},

]
cars = [
  { brand: 'BMW', model: 'M4', image: '/assets/imgs/img-1.jpg' },
  { brand: 'Audi', model: 'RS5', image: '/assets/imgs/img-1.jpg'  },
  { brand: 'Mercedes', model: 'AMG GT', image: '/assets/imgs/img-1.jpg'  },

];

topics:any[]=[{arrow:"pi pi-angle-right",des:"3 topics"},{arrow:"pi pi-angle-right",des:"1 speakers"},
  {arrow:"pi pi-angle-right",des:"50 min"},
  {arrow:"pi pi-angle-right",des:"72 student"},
]
slideTime = 3000;
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
                      data: [200,  100],

                      backgroundColor:["#5A6ACF","#ffff"],
                      hoverBackgroundColor:["#5A6ACF","#ffff"],
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
arrofdata:any[]=[{title:"Today’s Course",desc:"4 lessons, 3 hours 45 minutes",btn1:"skip this",btn2:"continue",bg:" #0d6efd",colortext:"#fff"},
  {title:"Today’s Events",desc:"24 events on all activities",btn1:"details",btn2:"join event" ,bg:"#198754",colortext:"#fff"},
]
course=this.arrofdata[0]
events=this.arrofdata[1]
}

