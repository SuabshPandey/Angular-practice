import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouterAppComponent } from './components/couter-app/couter-app.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { StructuralBindingComponent } from './components/structural-binding/structural-binding.component';
import { ChildParentComponent } from './components/child-parent/child-parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PrimeNgComponent } from './components/prime-ng/prime-ng.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { ServiesExampleComponent } from './components/servies-example/servies-example.component';
import { UserServiceComponent } from './components/user-service/user-service.component';
import { StudentService } from './services/student.service';
import { PanelMenuComponent } from './components/panel-menu/panel-menu.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ApiTestComponent } from './components/api-test/api-test.component';
import { PermissionService } from './services/permission.service';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    CouterAppComponent,
    TwoWayBindingComponent,
    StructuralBindingComponent,
    ChildParentComponent,
    PipesComponent,
    PrimeNgComponent,
    ServiesExampleComponent,
    UserServiceComponent,
    PanelMenuComponent,
    ApiTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    TabViewModule,
    DialogModule,
    PanelMenuModule,
    CheckboxModule,
    DropdownModule,
  ],
  providers: [StudentService, PermissionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
