import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-imagewithdescription',
  templateUrl: './imagewithdescription.component.html',
  styleUrl: './imagewithdescription.component.css'
})
export class ImagewithdescriptionComponent {
   @Input() data: any;
    constructor(){      
    }

    ngOnInit(){
      // console.log(this.data)
    }

    getImageUrl(imagePath: string): string {
      return `${environment.apiurl}${imagePath}`;
    }
}
