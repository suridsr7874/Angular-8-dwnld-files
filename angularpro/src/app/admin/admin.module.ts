import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ProductComponent } from './product/product.component';
import { AdmincommonComponent } from './admincommon/admincommon.component';
import { Routes, RouterModule } from '@angular/router';

const obj: Routes = [
{path: "", component: AdmincommonComponent, children: [
  {path: "cat", component: CategoryComponent},
  {path: "subcat", component: SubcategoryComponent},
  {path: "prod", component: ProductComponent},
]}
]

@NgModule({
  declarations: [CategoryComponent, SubcategoryComponent, ProductComponent, AdmincommonComponent],
  imports: [
    CommonModule, RouterModule.forChild(obj)
  ]
})
export class AdminModule { }
