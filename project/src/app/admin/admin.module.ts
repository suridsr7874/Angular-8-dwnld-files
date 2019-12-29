import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ProductsComponent } from './products/products.component';
import { AdmincommonComponent } from './admincommon/admincommon.component';
import { Routes, RouterModule } from '@angular/router';

const obj: Routes = [
{path: "", component: AdmincommonComponent, children:[
  {path: "cat", component: CategoryComponent},
  {path: "subcat", component: SubCategoryComponent},
  {path: "pro", component: ProductsComponent},
 
]}
]

@NgModule({
  declarations: [CategoryComponent, SubCategoryComponent, ProductsComponent, AdmincommonComponent],
  imports: [
    CommonModule, RouterModule.forChild(obj)
  ]
})
export class AdminModule { }
