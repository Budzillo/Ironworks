import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog'
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips'
import {MatCardModule} from '@angular/material/card'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';  
import { FormsModule } from '@angular/forms';
import { ChemicalElementComponent } from './components/sample/chemical-element/chemical-element.component';
import { ChemicalCompoundComponent } from './components/sample/chemical-compound/chemical-compound.component';
import { MaterialComponent } from './components/sample/material/material.component';
import { SampleTableComponent } from './components/sample/sample-table/sample-table.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SampleEditAddComponent } from './components/sample/sample-edit-add/sample-edit-add.component';
import { ChemicalCompoundEditAddComponent } from './components/sample/chemical-compound/chemical-compound-edit-add/chemical-compound-edit-add.component';
import { ChemicalElementEditAddComponent } from './components/sample/chemical-element/chemical-element-edit-add/chemical-element-edit-add.component';
import { FurnaceTableComponent } from './components/furnace/furnace-table/furnace-table.component';
import { EditAddFurnaceComponent } from './components/furnace/edit-add-furnace/edit-add-furnace.component';
import { FurnaceKindTableComponent } from './components/furnace/furnace-kind-table/furnace-kind-table.component';
import { MaterialAddEditComponent } from './components/sample/material/material-add-edit/material-add-edit.component';
import { MaterialGroupEditAddComponent } from './components/sample/material-group/material-group-edit-add/material-group-edit-add.component';
import { DialogYesNoComponent } from './components/dialog/dialog-yes-no/dialog-yes-no.component';
import { MaterialGroupComponent} from './components/sample/material-group/material-group.component';
import { UserListComponent } from './components/administration/user-list/user-list.component';
import { DialogInformationComponent } from './components/dialog/dialog-information/dialog-information.component';
import { UserEditAddComponent } from './components/administration/user-edit-add/user-edit-add.component';
import { DepartmentListComponent } from './components/administration/department-list/department-list.component';
import { DepartmentEditAddComponent } from './components/administration/department-edit-add/department-edit-add.component';
import { RoleListComponent } from './components/administration/role-list/role-list.component';
import { RoleEditAddComponent } from './components/administration/role-edit-add/role-edit-add.component';
import { FurnaceKindEditAddComponent } from './components/furnace/furnace-kind-edit-add/furnace-kind-edit-add.component';
import { PermissionListComponent } from './components/administration/permission-list/permission-list.component';
import { PermissionEditAddComponent } from './components/administration/permission-edit-add/permission-edit-add.component';
import { CarWeightPositionListComponent } from './components/carWeight/car-weight-position-list/car-weight-position-list.component';
import { CarWeightListComponent } from './components/carWeight/car-weight-list/car-weight-list.component';
import { FurnaceTypeTableComponent } from './components/furnace/furnace-type-table/furnace-type-table.component';
import { FurnaceTypeEditAddComponent } from './components/furnace/furnace-type-edit-add/furnace-type-edit-add.component';
import { AssortmentTableComponent } from './components/sample/assortment-table/assortment-table.component';
import { LoggingComponent } from './components/home/logging/logging.component';
import { HomeComponent } from './components/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChemicalElementComponent,
    ChemicalCompoundComponent,
    MaterialComponent,
    SampleTableComponent,
    SampleEditAddComponent,
    ChemicalCompoundEditAddComponent,
    ChemicalElementEditAddComponent,
    FurnaceTableComponent,
    EditAddFurnaceComponent,
    FurnaceKindTableComponent,
    MaterialAddEditComponent,
    MaterialGroupEditAddComponent,
    DialogYesNoComponent,
    MaterialGroupComponent,
    UserListComponent,
    DialogInformationComponent,
    UserEditAddComponent,
    DepartmentListComponent,
    DepartmentEditAddComponent,
    RoleListComponent,
    RoleEditAddComponent,
    FurnaceKindEditAddComponent,
    PermissionListComponent,
    PermissionEditAddComponent,
    CarWeightPositionListComponent,
    CarWeightListComponent,
    FurnaceTypeTableComponent,
    FurnaceTypeEditAddComponent,
    AssortmentTableComponent,
    LoggingComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatChipsModule,
    MatCardModule,   
    MatDatepickerModule,
    MatNativeDateModule,
    
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
