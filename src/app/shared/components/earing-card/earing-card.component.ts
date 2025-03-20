import { ChangeDetectorRef, Component, effect, inject, Input, PLATFORM_ID } from '@angular/core';
import { Iearn } from '../../../interfaces/iearn';
import { ChartModule } from 'primeng/chart';
import { CommonModule, isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-earing-card',
  standalone: true,
  imports: [ChartModule,CommonModule],
  templateUrl: './earing-card.component.html',
  styleUrl: './earing-card.component.scss'
})
export class EaringCardComponent {
@Input() earning!:Iearn
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
