import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DashboardRoutes } from './dashboard.routing';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxEchartsModule } from 'ngx-echarts';
import {SharedMaterialModule} from '../../shared/shared-material.module';
import {SharedPipesModule} from '../../shared/pipes/shared-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    FlexLayoutModule,
    ChartsModule,
    NgxEchartsModule,
    NgxDatatableModule,
    SharedPipesModule,
    PerfectScrollbarModule,
    RouterModule.forChild(DashboardRoutes),
  ],
  declarations: [AnalyticsComponent],
  exports: [],
})
export class DashboardModule {}
