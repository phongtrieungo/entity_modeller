import { Component, OnInit, HostBinding } from '@angular/core';
import { SidebarService } from '../../core/navigation/navigation/sidebar.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('toggleMenu', [
      state('open', style({ 'margin-left': '0'})),
      state('close', style({'margin-left': '-150px'})),
      transition('open <=> close', animate('250ms ease-out'))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  state = 'open';
  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.getToggleSidebar().subscribe((isOpen: boolean) => {
      if (isOpen) { this.state = 'open'; }
      if (!isOpen) { this.state = 'close'; }
    });
  }

  @HostBinding('@toggleMenu') get toggleState() {
    return this.state;
  }
}
