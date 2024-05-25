import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatsService {

  constructor() { }

  getStats() {
    return {
      sales: 1560,
      views: 3230,
      activeUsers: [
        { month: 'January', users: 400 },
        { month: 'February', users: 700 },
        { month: 'March', users: 600 }
      ],
      totalSales: {
        direct: 2300,
        channels: 980,
        other: 1250
      }
    };
  }
}
