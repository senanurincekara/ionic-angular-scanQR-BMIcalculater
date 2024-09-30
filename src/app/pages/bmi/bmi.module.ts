import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmiPageRoutingModule } from './bmi-routing.module';

import { BmiPage } from './bmi.page';

import { GraphComponent } from 'src/app/components/graph/graph.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmiPageRoutingModule,
    GraphComponent
  ],
  declarations: [BmiPage]
})
export class BmiPageModule {}
