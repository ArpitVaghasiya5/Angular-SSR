import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {

  dynamic() {
    this.router.navigateByUrl('/dynamic-rr');
  }
  
  products : Product[] = [];
  
  constructor(
    private _productService : ProductService,
    private router: Router
  ) {}
  
  displayedColumns: string[] = ['id','title', 'price', 'description', 'category', 'rating', 'actions'];
  
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._productService.getAllProducts().subscribe({
      next:(data)=>{
        this.products = data;
      }
    })
  } 
  
  
  
  DeleteProduct(arg0: any) {
    throw new Error('Method not implemented.');
  }

  EditProduct(id: number) {
    this.router.navigate(['/updateproduct/', id]);
  }
  
  createProduct() {
    this.router.navigateByUrl('/create-product');
  }
}
