import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isSelected = false;
  menu: any[] = [
    {
      id: 'home',
      name: 'Inicio',
      href: '#home',
    },
    {
      id: 'about',
      name: 'Nosotros',
      href: '#about',
    },
    {
      id: 'benefits',
      name: 'Beneficios',
      href: '#benefits',
    },
    {
      id: 'plans',
      name: 'Planes',
      href: '#plans',
    },
    {
      id: 'contact',
      name: 'Contacto',
      href: '#contact',
    },
  ];

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {}

  OnScroll($event: any) {
    $event.target.scrollSpy();
  }

  scrollToSection(id: string, $event: any) {
    const navList = document.querySelectorAll('ul.navigation > li > a.active');
    navList.forEach((item) => {
      item.classList.remove('active');
    });
    $event.target.classList.add('active');
    this.scrollService.scrollToElementById(id);
  }
}
