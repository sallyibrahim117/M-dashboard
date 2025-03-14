import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-chart2',
  standalone: true,
  imports: [ChartModule,CommonModule],
  templateUrl: './chart2.component.html',
  styleUrl: './chart2.component.scss'
})
export class Chart2Component {
  basicData: any;

  basicOptions: any;

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
          const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
          const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

          this.basicData = {
              labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q2', 'Q3', 'Q4'],
              datasets: [

                  {

                      label: 'Sales',
                      data: [50, 35, 70, 20, 35, 70, 20],
                      backgroundColor: [
                          'rgba(249, 115, 22, 0.2)',
                          'rgba(6, 182, 212, 0.2)',
                          'rgb(107, 114, 128, 0.2)',
                          'rgba(139, 92, 246, 0.2)',
                          'rgba(6, 182, 212, 0.2)',
                          'rgb(107, 114, 128, 0.2)',
                          'rgba(139, 92, 246, 0.2)',
                      ],
                      borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],

                  },
              ],
          };

          this.basicOptions = {

              plugins: {
                  legend: {
                      labels: {
                          color: textColor,
                      },
                  },
              },
              scales: {
                  x: {
                      ticks: {
                          color: textColorSecondary,
                      },
                      grid: {
                          color: surfaceBorder,
                      },
                  },
                  y: {
                      beginAtZero: true,
                      ticks: {
                          color: textColorSecondary,
                      },
                      grid: {
                          color: surfaceBorder,
                      },
                  },
              },
              datasets: {
                bar: {
                  barThickness: 30 // Fixed width for columns
                }
              }
          };
          this.cd.markForCheck()
      }
  }
}
