import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { StatsService } from './stats.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit {
  stats: any;

  @ViewChild('barChart') barChart!: ElementRef;
  @ViewChild('pieChart') pieChart!: ElementRef;
  @ViewChild('lineChart') lineChart!: ElementRef;


  ngOnInit(): void {
    this.statsService.getStats().then(stats => {
      this.stats = stats;
    }).catch(error => {
      console.error('Error fetching stats:', error);
    });
  }

  constructor(private statsService: StatsService) { }

  ngAfterViewInit(): void {
    this.stats = this.statsService.getStats();
    this.setupCharts();
  }

  private async setupCharts(): Promise<void> {
    this.stats = await this.statsService.getStats();
    this.setupBarChart();
    this.setupPieChart();
    this.setupLineChart();
  }


  private setupBarChart(): void {
    const ctx = this.barChart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Sales', 'Views'],
        datasets: [{
          label: 'Stats',
          data: [this.stats.sales, this.stats.views],
          backgroundColor: ['#dddddd', '#000000'] // Light grey and black
        }]
      }
    });
  }

  private setupPieChart(): void {
    if (this.stats && this.stats.totalSales) {
      const totalSales = this.stats.totalSales;
      const ctx = this.pieChart.nativeElement.getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Fournisseurs etrangers', 'marocains', 'Dans les Alentours'],
          datasets: [{
            data: [totalSales.direct || 0, totalSales.channels || 0, totalSales.other || 0],
            backgroundColor: ['#dddddd', '#888888', '#000000']
          }]
        }
      });
    }
  }
  

  private setupLineChart(): void {
    if (this.stats && this.stats.activeUsers) {
      const ctx = this.lineChart.nativeElement.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.stats.activeUsers.map((user: { month: string; }) => user.month),
          datasets: [{
            label: 'Active Users',
            data: this.stats.activeUsers.map((user: { users: any; }) => user.users),
            borderColor: '#000000',
            fill: false
          }]
        }
      });
    }
  }
  
}
