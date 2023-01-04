import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouterAppComponent } from './components/couter-app/couter-app.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { StructuralBindingComponent } from './components/structural-binding/structural-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    CouterAppComponent,
    TwoWayBindingComponent,
    StructuralBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
