import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {
  @Input() data: any;

  getImageUrl(imagePath: string): string {
    return `${environment.apiurl}${imagePath}`;
  }

  ngOnInit(){
      //console.log(this.data);
  }
}
