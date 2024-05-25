import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private baseUrl = 'http://localhost:8080/factures';
  private baseUrll = 'http://localhost:8080/fournisseurs';

  async fetchSalesFromAPI() {
    try {
      const response = await axios.get(`${this.baseUrl}/sum`);
      return response.data;
    } catch (error) {
      console.error('Error fetching sales data:', error);
      throw error;
    }
  }

  async fetchFournFromAPI() {
    try {
      const response = await axios.get(`${this.baseUrll}/countby`);
      return response.data;
    } catch (error) {
      console.error('Error fetching fournisseurs data:', error);
      throw error;
    }
  }

  async getStats() {
    try {
      const sales = await this.fetchSalesFromAPI();
      const fournisseurs = await this.fetchFournFromAPI();

      const totalSales = {
        direct: fournisseurs[0],
        channels: fournisseurs[1],
        other: fournisseurs[2]
      };

      return {
        sales,
        fournisseurs,
        views: 3230,
        activeUsers: [
          { month: 'January', users: 400 },
          { month: 'February', users: 700 },
          { month: 'March', users: 600 }
        ],
        totalSales,
        totalAmount: 51337523,
        quantity: 71056,
        grow: 47,
        downloads: 35345
      };
    } catch (error) {
      console.error('Error fetching stats data:', error);
      throw error;
    }
  }
}
