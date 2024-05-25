import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from './facture.model'; // Assurez-vous d'importer correctement le modèle de Facture
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private apiUrl = 'http://localhost:8080/factures'; // Assurez-vous d'utiliser l'URL correcte pour les factures

  constructor(private http: HttpClient) {}

  getAllFactures(): Observable<Facture[]> {
    return this.http.get<Facture[]>(`${this.apiUrl}/all`);
  }

  deleteFacture(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  generateHTML(facture: Facture): string {
    const dateFacture = new Date(facture.dateFacture);
    return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Bon d'Achat ${facture.idFacture}</title>
      <link href="https://fonts.googleapis.com/css?family=Nunito:300|Raleway:200,300" rel="stylesheet" type="text/css">
      <style>
      * {
          box-sizing: border-box;
        }
        html {
          height: 100%;
        }
        body {
          min-height: 100%;
          margin: 0;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: stretch;
          font: 12pt/1.5 'Raleway','Cambria', sans-serif;
          font-weight: 300;
          background: #fff;
          color: #666;
        }
        header {
          padding: 16px;
          position: relative;
          color: #888;
        }
        header h1, header h2 {
          font-weight: 200;
          margin: 0;
        }
        header h1 {
          font-size: 27pt;
          letter-spacing: 4px;
        }
        body > * {
          width: 100%;
          max-width: 7in;
          margin: 3px auto;
          background: #F0f0f0;
          text-align: center;
        }
        footer {
          padding: 16px;
        }
        footer p {
          font-size: 9pt;
          margin: 0;
          font-family: 'Nunito';
          color: #777;
        }
        section, table {
          padding: 8px 0;
          position: relative;
        }
        dl {
          margin: 0;
          letter-spacing: -4px;
        }
        dl dt, dl dd {
          letter-spacing: normal;
          display: inline-block;
          margin: 0;
          padding: 0px 6px;
          vertical-align: top;
        }
        dl.bloc > dt,
        dl:not(.bloc) dt:not(:last-of-type),
        dl:not(.bloc) dd:not(:last-of-type) {
          border-bottom: 1px solid #ddd;
        }
        dl:not(.bloc) dt {
          border-right: 1px solid #ddd;
        }
        dt {
          width: 49%;
          text-align: right;
          letter-spacing: 1px !important;
          overflow: hidden;
        }
        dd {
          width: 49%;
          text-align: left;
        }
        dd, tr > td {
          font-family: 'Nunito';
        }
        section.flex {
          display: flex;
          flex-flow: row wrap;
          padding: 8px 16px;
          justify-content: space-around;
        }
        dl.bloc {
          padding: 0;
          flex: 1;
          vertical-align: top;
          min-width: 240px;
          margin: 0 8px 8px;
        }
        dl.bloc > dt {
          text-align: left;
          width: 100%;
          margin-top: 12px;
        }
        dl.bloc > dd {
          text-align: left;
          width: 100%;
          padding: 8px 0 5px 16px;
          line-height: 1.25;
        }
        dl.bloc > dd > dl dt {
          width: 33%;
        }
        dl.bloc > dd > dl dd {
          width: 60%;
        }
        dl.bloc dl {
          margin-top: 12px;
        }
        dl.bloc dd {
          font-size: 11pt;
        }
        table {
          width: 100%;
          padding: 0;
          border-spacing: 0px;
        }
        tr {
          margin: 0;
          padding: 0;
          background: #fdfdfd;
          border-right: 1px solid #ddd;
          width: 100%;
        }
        td, th {
          border: 1px solid #e3e3e3;
          border-top: 1px solid white;
          border-left-color: #fff;
          font-size: 11pt;
          background: #fdfdfd;
        }
        thead th {
          background: #E9E9E9;
          font-weight: 300;
          letter-spacing: 1px;
          padding: 15px 0 5px;
        }
        tbody tr:last-child td {
          border-bottom: 1px solid #ddd;
        }
        td {
          min-width: 75px;
          padding: 3px 6px;
          line-height: 1.25;
        }
        tfoot tr td {
          height: 40px;
          padding: 6px 0 0;
          color: #000;
          text-shadow: 0 0 1px rgba(0,0,0,.25);
          font-family: 'Cambria','Raleway', sans-serif;
          font-weight: 400;
          letter-spacing: 1px;
        }
        tfoot tr td:first-child {
          font-style: italic;
          color: #997B7B;
        }
        a {
          color: #992C2C;
        }
        a:hover {
          color: #BB0000;
        }
        @page {
          margin: .5cm;
        }
        /* Pour écrans */
        html, body {
          background: #333231;
        }
        header:before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          border-top: 12px solid #333;
          border-left: 12px solid #ddd;
          width: 0;
          box-shadow: 1px 1px 2px rgba(0,0,0,.18);
        }
      </style>
    </head>
    <body>
    <div class="container">
      <header>
        <h1>FACTURE</h1>
      </header>
      <section class="flex">
        <dl>
          <dt>Facture #</dt>
          <dd>${facture.idFacture}</dd>
          <dt>Date de facturation</dt>
          <dd>${dateFacture.toLocaleDateString()}</dd>
        </dl>
      </section>
      <section class="flex">
        <dl class="bloc">
          <dt>Facturé à:</dt>
          <dd>
            Company X & Son Inc.<br>
            2789 Some street,<br>
            Big City, Québec, J3X 1J1
            <dl>
              <dt>Attn</dt>
              <dd>Le Big Boss</dd>
              <dt>Téléphone</dt>
              <dd>(450) 555-2663</dd>
              <dt>Courriel</dt>
              <dd>bigbosAAAAAAAAbigcompanylonglongemail.com</dd>
            </dl>
          </dd>
        </dl>
        <dl class="bloc">
          <dt>Description de service:</dt>
          <dd>Développement AIR</dd>
          <dt>Période totale:</dt>
          <dd>24 Mai au 2 Juin 2014</dd>
        </dl>
      </section>
      <table>
        <thead>
          <tr>
            <th>Période</th>
            <th>Description</th>
            <th>Heures</th>
            <th>Taux</th>
            <th>Montant</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>24 Mai au 2 Juin</td>
            <td>Dévelopement du jeu Tomatina</td>
            <td>24 h</td>
            <td>20 $/h</td>
            <td>${facture.montantFacture} $</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">− Faire les chèques payable au nom de moi −</td>
            <td>Total:</td>
            <td>${facture.montantFacture} $</td>
          </tr>
        </tfoot>
      </table>
      <footer>
        <p>Moi – Informatique − Développement WEB | <a href="http://joseroux.com">joseroux.com</a></p>
        <p>1777 some street in the woods, Wentworth-Nord, Qc, J0T 1Y0 | Tél. 450-555-1000 | <a href="mailto:mailme.com">mailme.com</a></p>
      </footer>
       </div>
    </body>
    </html>`;
      }
  
  
  async downloadFacturePDF(facture: Facture) {
    const htmlContent = this.generateHTML(facture);
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.top = '-9999px';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document;
    if (!doc) {
      console.error('Iframe document not found');
      document.body.removeChild(iframe);
      return;
    }

    doc.open();
    doc.write(htmlContent);
    doc.close();

    const canvas = await html2canvas(doc.body);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`Facture_${facture.idFacture}.pdf`);

    document.body.removeChild(iframe);
  }
}
