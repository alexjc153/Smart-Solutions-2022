import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss'],
})
export class BenefitsComponent implements OnInit {
  cardsInfo = [
    {
      iconClass: 'certified',
      title: 'Certificado Digital Gratis',
      description:
      'Te ayudamos para realizar el trámite de la solicitud de tu certificado digital emitido por SUNAT',
    },
    {
      iconClass: 'sent',
      title: 'Envío de documento a SUNAT y/o OSE',
      description:
      'Validación de los documentos electrónicos a través del envío automático a la SUNAT y/o OSE',
    },
    {
      iconClass: 'invoice',
      title: 'Genera facturas, boletas, notas de crédito y débito',
      description:
      'Permite generar cualquier documento electrónico válido ante la SUNAT de manera fácil.',
    },
    {
      iconClass: 'consult',
      title: 'Consulta RUC SUNAT y RENIEC integrado',
      description:
      'El sistema está conectado a la base de datos de la SUNAT para poder registrar clientes y/o proveedores haciendo más simple y rápido la emisión de comprobantes electrónicos.',
    },
    {
      iconClass: 'kardex',
      title: 'Control de Kardex e Inventario',
      description:
      'Mantenga su inventario al día. Entradas, salidas, stock, almacenes. Toda la información en un sólo reporte.',
    },
    {
      iconClass: 'email',
      title: 'Envio de facturas por email',
      description:
        'El sistema envía automáticamente los correos a los clientes finales adjuntando el PDF y XML reduciendo un 70% el costo de impresión.',
    },

  ];

  constructor() {}

  ngOnInit(): void {}
}
