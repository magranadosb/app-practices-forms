import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { DinamicosComponent } from './pages/dinamicos/dinamicos.component';
import { SwitchesComponent } from './pages/switches/switches.component';



@NgModule({
  declarations: [
    DinamicosComponent,
    BasicosComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModule { }
