import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NameFormComponent } from './name-form/name-form.component';
import { FormService } from './form.service';

@NgModule({
  declarations: [
    AppComponent,
    NameFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
