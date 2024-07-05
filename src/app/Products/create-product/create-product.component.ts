import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostProduct } from '../../models/postProduct';
import { ProductService } from '../../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  validateForm!: FormGroup<any>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _productService  :ProductService,
    private _snackBar: MatSnackBar
  ){
    this.validateForm = this.fb.group( {
      title : ['', [Validators.required]],
      price : ['', [Validators.required]],
      description : ['', [Validators.required]],
      category : ['', [Validators.required]],   
      image : ['', [Validators.required]],
    });
  }

  back() {
    this.router.navigate(['productlist']);
  }

  onSubmit() {
    const product : PostProduct = this.validateForm.value;
    // product.image = this.validateForm.get('image')?.value;
    this._productService.addProduct(product).subscribe(
      (result : any) => {
        this._snackBar.open(result, 'Dismiss', {
          duration: 5000
        });
        this.router.navigate(['admin/productlist'])
      } 
    ), (error : any) => {
      this._snackBar.open(error, 'Dismiss', {
        duration: 5000
      });
    }
  }

}
