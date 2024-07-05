import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { CreateProductComponent } from './Products/create-product/create-product.component';
import { UpdateProductComponent } from './Products/update-product/update-product.component';
import { ProductsComponent } from './strapi-product/products/products.component';
import { DynamicComponentComponent } from './DynamicComponent/dynamic-component/dynamic-component.component';
import { NotFoundComponentComponent } from './RouteResolver/not-found-component/not-found-component.component';
import { DynamicComponent } from './RouteResolver/dynamic/dynamic.component';
import { routeResolver } from './routeResolver';
import { YoutubeComponent } from './DynamicComponent/dynamic-component/youtube/youtube.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { TestingComponent } from './TestingPractice/testing/testing.component';
import { DirectiveTestComponent } from './TestingPractice/directive-test/directive-test.component';

const routes: Routes = [
  { path: '', 
    pathMatch: 'full', 
    redirectTo: '/product-list' 
  },
  { path : 'products', 
    component : ProductsComponent
  },
  { path : 'product-list', 
    component : ProductListComponent
  },
  { path : 'create-product', 
    component : CreateProductComponent
  },
  { path : 'updateproduct/:id', 
    component: UpdateProductComponent
  },
  { path : 'dynamic', 
    component: DynamicComponentComponent
  },
  { path: 'dynamic-rr', 
    component: DynamicComponent,
    resolve: { data: routeResolver },
  },
  {
    path: 'not-found',
    component: NotFoundComponentComponent,
  },
  {
    path : 'mattable',
    component : MatTableComponent
  },
  {
    path : 'googlemap',
    component : GoogleMapComponent
  },
  {
    path : 'testing',
    component : TestingComponent
  },
  {
    path : 'directive-test',
    component : DirectiveTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
