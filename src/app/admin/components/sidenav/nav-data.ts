import { INavbarData } from '../../interfaces/navbar-data';

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'fa-solid fa-house',
    label: 'Dashboard',
  },
  {
    routeLink: 'enterprise',
    icon: 'fa-solid fa-building',
    label: 'Empresa',
    items: [
      {
        routeLink: 'enterprise/config',
        label: 'Configuración',
      },
      {
        routeLink: 'enterprise/info',
        label: 'Información',
      },
    ],
  },
  {
    routeLink: 'products',
    icon: 'fa-solid fa-house',
    label: 'Productos',
  },
  {
    routeLink: 'ventas',
    icon: 'fa-solid fa-house',
    label: 'Ventas',
  },
];
