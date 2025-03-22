import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-shared-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './shared-chart.component.html',
  styleUrl: './shared-chart.component.scss'
})
export class SharedChartComponent {
  data: any;

  options: any;
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
  this.data = {
    labels: ['Apr 04', 'Apr 07', 'MaApr 10', 'Apr 13', 'Apr 16'],
    datasets: [
        {
            label: 'First Dataset',
            data: [10, 13, 17, 20.5, 24],
            fill: false,
            borderColor: "#198754",
            tension: 1.1
        },

    ]
};

this.options = {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
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
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false,

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
}
}
