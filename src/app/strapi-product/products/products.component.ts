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


  DeleteProduct(id : number) {
    console.log("product deleting..")
  }

  EditProduct(id : number) {
    console.log("editing product")
  }

}
