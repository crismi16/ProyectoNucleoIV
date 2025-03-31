import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../types/products';
import { ProductsService } from '../../services/products/products.service';
import { CartService } from '../../services/cart/cart.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Product[] = [];

  constructor(
    private router: Router, 
    private productsService: ProductsService,
    private cartService: CartService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.getProducts();
    // this.productsService.loadProductstoFirebase();
  }

  goToProduct(id: number) {
    this.router.navigate(['/products', id]);
  }

  getProducts() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addToCart(event : Event, product: Product) {
    event.stopPropagation();
    this.cartService.addProduct(product);
  }

  deleteProduct(event: Event, id: number) {
    event.stopPropagation();
    this.productsService.deleteProduct(id)
      .then(() => console.log("Producto eliminado con exito"))
      .catch(err => console.log(err));
  }

  getRole() {
    this.usersService.getCurrentUser()!
      .then(user => {
        console.log(user);
        // this.role = user?.["role"]
      });
  }
  
}
