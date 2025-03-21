import { TablesComponent } from './components/tables/tables.component';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { log } from 'node:console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent,TablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
  toggle =signal<boolean>(false)
  toggleSideMenu(t:boolean){
this.toggle.set(t)
  }
  // ngOnInit(): void {

  //   if (window.innerWidth < 767) { // Check screen width
  //     this.toggle.set(true);
  //     console.log(window.innerWidth)
  //   }
  // }
}
