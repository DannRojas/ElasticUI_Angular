import { PageHeaderModule } from './../../core/page-header/page-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollbarModule } from 'src/app/core/scrollbar/scrollbar.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BreadcrumbsModule } from 'src/app/core/breadcrumbs/breadcrumbs.module';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
import { RouterModule, Routes } from '@angular/router';

//Components
import { PruebaComponent } from './prueba.component';

const routes: Routes = [
  {path: '', component: PruebaComponent}
];


@NgModule({
  declarations: [PruebaComponent],
  imports: [
    CommonModule,
    ScrollbarModule,
    ScrollingModule,
    PageHeaderModule,
    BreadcrumbsModule,
    SharedMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class PruebaModule { }
