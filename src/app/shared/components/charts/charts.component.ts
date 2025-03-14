import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent {
  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);



  constructor(private cd: ChangeDetectorRef) {}



  ngOnInit() {
      this.initChart();
  }

  initChart() {
      if (isPlatformBrowser(this.platformId)) {
          const documentStyle = getComputedStyle(document.documentElement);
          const textColor = documentStyle.getPropertyValue('--p-text-color');
          const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
          const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

          this.data = {
              labels: ['phones', 'labtops', 'headphones', 'Games', 'monitors', 'speakers', 'computers'],
              datasets: [
                  {
                      label: 'My First dataset',
                      backgroundColor:["#1663d1","#d11671","#d19016","#9016d1","#16d188","#3d403f"],
                      borderColor:["#1663d1","#d11671","#d19016","#9016d1","#16d188","#3d403f"],
                      data: [90, 80, 70, 60, 50, 40, 20]
                  },

              ]
          };

          this.options = {
              indexAxis: 'y',
              maintainAspectRatio: false,
              aspectRatio:1,
              plugins: {
                  legend: {
                      labels: {
                          color: textColor
                      }
                  }
              },
              scales: {
                  x: {
                      ticks: {
                          color: textColorSecondary,
                          font: {
                              weight: 500
                          }
                      },
                      grid: {
                          color: surfaceBorder,
                          drawBorder: false
                      }
                  },
                  y: {
                      ticks: {
                          color: textColorSecondary
                      },
                      grid: {
                          color: surfaceBorder,
                          drawBorder: false
                      }
                  }
              }
          };
          this.cd.markForCheck()
      }
  }
}
