import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleSideMenu=new EventEmitter();
  toggle =signal<boolean>(false);
  toggleMenu(){
this.toggle.update(t=>!t)
this.toggleSideMenu.emit(this.toggle())
  }
}
