import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  listOfBenefits = {
    emision: 'Emisión de comprobantes ilimitados',
    logo: 'Facturas con el logo de tu empresa',
    reporteDetallado: 'Reporte detallado de Ventas',
    moduloCompras: 'Módulo de compras',
    envioCorreo: 'Envío de comprobantes por correo electrónico',
    stock: 'Control de Stock',
  };

  plans = [
    {
      name: 'Standard',
      price: '60',
      benefits: [
        this.listOfBenefits.emision,
        this.listOfBenefits.logo,
        this.listOfBenefits.reporteDetallado,
      ],
      recommended: false,
    },
    {
      name: 'Plus',
      price: '80',
      benefits: [
        this.listOfBenefits.emision,
        this.listOfBenefits.logo,
        this.listOfBenefits.reporteDetallado,
        this.listOfBenefits.moduloCompras,
        this.listOfBenefits.envioCorreo,
      ],
      recommended: true,
    },
    {
      name: 'Full',
      price: '100',
      benefits: [
        this.listOfBenefits.emision,
        this.listOfBenefits.logo,
        this.listOfBenefits.reporteDetallado,
        this.listOfBenefits.moduloCompras,
        this.listOfBenefits.envioCorreo,
        this.listOfBenefits.stock,
      ],
      recommended: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    document.querySelector('#plans-slider')!.scrollLeft = 184;
  }
}
