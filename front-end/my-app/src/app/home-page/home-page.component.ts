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

  constructor(private statsService: StatsService) { }

  ngAfterViewInit(): void {
    this.stats = this.statsService.getStats();
    this.setupCharts();
  }

  private setupCharts(): void {
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
    const ctx = this.pieChart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Direct', 'Channel', 'Other'],
        datasets: [{
          data: [this.stats.totalSales.direct, this.stats.totalSales.channels, this.stats.totalSales.other],
          backgroundColor: ['#dddddd', '#888888', '#000000'] // Light grey, dark grey and black
        }]
      }
    });
  }

  private setupLineChart(): void {
    const ctx = this.lineChart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.stats.activeUsers.map((user: { month: string; }) => user.month),
        datasets: [{
          label: 'Active Users',
          data: this.stats.activeUsers.map((user: { users: any; }) => user.users),
          borderColor: '#000000', // Black
          fill: false
        }]
      }
    });
  }
}
