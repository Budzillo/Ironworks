import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChemicalCompoundComponent } from './components/sample/chemical-compound/chemical-compound.component';
import { ChemicalElementComponent } from './components/sample/chemical-element/chemical-element.component';
import { MaterialComponent } from './components/sample/material/material.component';
import { MaterialGroupComponent } from './components/sample/material-group/material-group.component';
import { SampleTableComponent } from './components/sample/sample-table/sample-table.component';
import { FurnaceTableComponent } from './components/furnace/furnace-table/furnace-table.component';
import { UserListComponent } from './components/administration/user-list/user-list.component';
import { DepartmentListComponent } from './components/administration/department-list/department-list.component';
import { RoleListComponent } from './components/administration/role-list/role-list.component';
import { FurnaceKindTableComponent } from './components/furnace/furnace-kind-table/furnace-kind-table.component';
import { PermissionListComponent } from './components/administration/permission-list/permission-list.component';
import { CarWeightPositionListComponent } from './components/carWeight/car-weight-position-list/car-weight-position-list.component';
import { CarWeightListComponent } from './components/carWeight/car-weight-list/car-weight-list.component';
import { FurnaceTypeTableComponent } from './components/furnace/furnace-type-table/furnace-type-table.component';
import { LoggingComponent } from './components/home/logging/logging.component';
import { HomeComponent } from './components/home/home/home.component';
const routes: Routes = [
  { path: 'chemical-compound', component: ChemicalCompoundComponent },
  { path: 'chemical-element', component: ChemicalElementComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'material-group', component: MaterialGroupComponent },
  { path: 'sample-table', component: SampleTableComponent },
  { path: 'furnace-table', component: FurnaceTableComponent },  
  { path: 'furnace-kind-table', component: FurnaceKindTableComponent },  
  { path: 'furnace-type-table', component: FurnaceTypeTableComponent },  
  { path: 'user-list',component : UserListComponent },
  { path: 'department-list',component : DepartmentListComponent },
  { path: 'role-list',component : RoleListComponent },
  { path: 'permission-list',component : PermissionListComponent },
  { path: 'car-weight-position-list',component : CarWeightPositionListComponent },
  { path: 'car-weight-list',component : CarWeightListComponent },
  { path: 'logging',component : LoggingComponent },
  { path: 'home',component : HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
