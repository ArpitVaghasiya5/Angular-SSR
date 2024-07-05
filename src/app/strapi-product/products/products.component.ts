import { Component } from '@angular/core';
import { Productss, Taskcomponent } from '../../Interfaces/interfaces';
import { StrapiProductService } from '../../services/strapi-product.service';
import { environment } from '../../../environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';

interface Routes {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {

  error = '';
  markdown : any;
  products : Productss[] = [];
  routes: Routes[] = [
    {value: 'dynamic', viewValue: 'Dynamic-component'},
    {value: 'products', viewValue: 'Products-component'},
    {value:'googlemap', viewValue: 'Google-component'},
    {value: 'create-product', viewValue: 'CreateProduct-component'},
    {value: 'dynamic-rr', viewValue: 'Dynamic component RR'},
    {value: 'mattable', viewValue: 'Mattable-component'}
  ];    
  
  constructor(
    private _strapiProductService: StrapiProductService,
     private router : Router,
     private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getImageUrl(imagePath: string): string {
    return `${environment.apiurl}${imagePath}`;
  }

  onSelect(routeValue: string): void {
    this.router.navigate([routeValue]);
  }

  onLanguageChange(language: string) {
    this.languageService.setLanguage(language);
    this.getData();
  }

  getData() {
    this._strapiProductService.getData().subscribe({
      next: (data: Productss[]) => {
        this.products = data;
        // console.log(this.products);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }


 
  // displayedColumns: string[] =  ['id','image' ,'name', 'description', 'price','category', 'actions'];

  // ngOnInit(){
  //   this._strapiProductService.getAllProducts().subscribe({
  //     next:(response)=>{
  //       this.products = response.Data.map;
  //     }
  //   })
  // }

  // loadProducts(): void {
  //   this.productService.getProducts().subscribe(
  //     (response) => {
  //       this.products = response.data.map((product: any) => ({
  //         id: product.id,
  //         name: product.attributes.Name,
  //         description: product.attributes.Description,
  //         price: product.attributes.Price,
  //         imageUrl: product.attributes.Image?.data?.attributes.url // Handle null data for products without images
  //       }));
  //     },
  //     (error) => {
  //       console.error('Error fetching products:', error);
  //     }
  //   );
  // }

  DeleteProduct(arg0: any) {
    throw new Error('Method not implemented.');
  }

  EditProduct(arg0: any) {
    throw new Error('Method not implemented.');
  }

}
