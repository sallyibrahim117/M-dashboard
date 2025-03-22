import { Component, Input } from '@angular/core';
import { Iproduct } from '../../../interfaces/iproduct';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
@Input() product!:Iproduct
}
