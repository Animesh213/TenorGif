import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenorGifComponent } from './tenor-gif/tenor-gif.component';
import {TenorService} from './service/tenor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TenorCombineComponent } from './tenor-combine/tenor-combine.component';

@NgModule({
  declarations: [
    AppComponent,
    TenorGifComponent,
    TenorCombineComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [TenorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
