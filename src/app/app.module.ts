import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatSelectModule, MatInputModule, MatToolbarModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { VideoComponent } from '../components/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {}
    ),
    BrowserModule,
    MatButtonModule, MatSelectModule, MatInputModule, MatToolbarModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
