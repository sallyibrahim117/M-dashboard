import { Component, Input, input } from '@angular/core';
import { Idate } from '../../interfaces/idate';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {
@Input() calen !:Idate
}
