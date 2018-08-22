import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LeCulCulComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component'

@NgModule({
  declarations: [
    LeCulCulComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [LeCulCulComponent]
})

export class LeCulCulModule { }
