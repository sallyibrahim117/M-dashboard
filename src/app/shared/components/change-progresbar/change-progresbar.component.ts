import { Component, Input } from '@angular/core';
import { Iprogresscontent } from '../../../interfaces/iprogresscontent';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-progresbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-progresbar.component.html',
  styleUrl: './change-progresbar.component.scss'
})
export class ChangeProgresbarComponent {
@Input() progress!:Iprogresscontent
}
