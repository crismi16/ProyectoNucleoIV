import { Component } from '@angular/core';
import { Product } from '../../types/products';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: Product | undefined;

  constructor(private activatRoute: ActivatedRoute, private productsService: ProductsService) {}

  ngOnInit() {
    this.activatRoute.params.subscribe(params => {
      const id = params['id'];
      this.productsService.getProduct(id).subscribe(product => {
        this.product = product;
      })
    });
  }
}
