import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, withInterceptors } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CreateProductComponent } from './Products/create-product/create-product.component';
import { UpdateProductComponent } from './Products/update-product/update-product.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { ProductsComponent } from './strapi-product/products/products.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { DynamicComponentComponent } from './DynamicComponent/dynamic-component/dynamic-component.component';
import { NotFoundComponentComponent } from './RouteResolver/not-found-component/not-found-component.component';
import { DynamicComponent } from './RouteResolver/dynamic/dynamic.component';
import { YoutubeComponent } from './DynamicComponent/dynamic-component/youtube/youtube.component';
import { ImagewithdescriptionComponent } from './DynamicComponent/dynamic-component/imagewithdescription/imagewithdescription.component';
import { GallaryComponent } from './DynamicComponent/dynamic-component/gallary/gallary.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { GoogleMapsModule } from "@angular/google-maps";
import {MatSelectModule} from '@angular/material/select';
import { GoogleMapComponent } from './google-map/google-map.component';
import { TestingComponent } from './TestingPractice/testing/testing.component';
import { DemoPipe } from './TestingPractice/demo.pipe';
import { DirectiveTestComponent } from './TestingPractice/directive-test/directive-test.component';
import { HighlightDirective } from './TestingPractice/highlight.directive';
import { ProductTestComponent } from './TestingPractice/product-test/product-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    UpdateProductComponent,
    ProductsComponent,
    DynamicComponentComponent,
    NotFoundComponentComponent,
    DynamicComponent,
    YoutubeComponent,
    ImagewithdescriptionComponent,
    GallaryComponent,
    MatTableComponent,
    GoogleMapComponent,
    TestingComponent,
    DemoPipe,
    DirectiveTestComponent,
    HighlightDirective,
    ProductTestComponent
  ],
  imports: [
    GoogleMapsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule ,
    MatTooltipModule,
    MatPaginator,
    MatDialogModule,
    MatInputModule ,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    CommonModule,
    MarkdownModule.forRoot(),
    MatSelectModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([AuthInterceptor]), withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
