import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.css'
})
export class YoutubeComponent {
  safeURL : any;
  // videoUrl = 'https://www.youtube.com/embed/1ozGKlOzEVc'

  constructor(private _sanitizer: DomSanitizer) {   
  }
  
  @Input() data: any;

  sanitizedUrl: any;

  ngOnInit(): void {
    this.sanitizedUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.data.youtubeUrl);
  }

}
