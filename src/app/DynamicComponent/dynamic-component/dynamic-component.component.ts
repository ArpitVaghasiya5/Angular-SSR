import { Component, ViewContainerRef } from '@angular/core';
import { StapiDynamicService } from '../../services/stapi-dynamic.service';
import { YoutubeComponent } from './youtube/youtube.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ImagewithdescriptionComponent } from './imagewithdescription/imagewithdescription.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrl: './dynamic-component.component.css'
})

export class DynamicComponentComponent {
  constructor(private strapiDynamicService : StapiDynamicService,private viewContainerRef: ViewContainerRef){ this.getData()}  

  getData() {
    this.strapiDynamicService.getDynamicComponents().subscribe({
      next: (response: any[]) => {
        const data = response;
        data.forEach(item => {          
          
          if (item.YoutubeComponent && item.YoutubeComponent.code == "VIDEO_SECTION") {
            this.createComponent(YoutubeComponent, item.YoutubeComponent);
          }
          if (item.ImageDComponent && item.ImageDComponent.code == "IMAGE_DESCRIPTION_SECTION") {
            this.createComponent(ImagewithdescriptionComponent, item.ImageDComponent);
          }
          if (item.ImageGComponent && item.ImageGComponent.code == "GALLERY_SECTION") {
            this.createComponent(GallaryComponent, item.ImageGComponent);
          }
        });
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  createComponent(componentType: any, data: any): void {
    const componentRef = this.viewContainerRef.createComponent(componentType);
    (componentRef.instance as YoutubeComponent | GallaryComponent | ImagewithdescriptionComponent).data = data;
  }
}

