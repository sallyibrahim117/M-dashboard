import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, Input, PLATFORM_ID } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { Icourse } from '../../../interfaces/icourse';

@Component({
  selector: 'app-sliders',
  standalone: true,
  imports: [CarouselModule, ChartModule,CommonModule],
  templateUrl: './sliders.component.html',
  styleUrl: './sliders.component.scss'
})
export class SlidersComponent {
  @Input()
  course!: Icourse;
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

}
