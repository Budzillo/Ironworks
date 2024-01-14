import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../../../services/administration.service';
import { MatDialog } from '@angular/material/dialog';
import { Department } from '../../../models/department.model';
import { DialogService } from '../../../services/dialog.service';
import { DepartmentEditAddComponent } from '../department-edit-add/department-edit-add.component';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.scss'
})
export class DepartmentListComponent implements OnInit {
  departments:Department[] = [];
  displayedColumns: string[] = 
    [
      'name',
      'edit',
      'delete',
    ];
  constructor(private administrationService:AdministrationService,private dialogService:DialogService,private editAddDialog:MatDialog){

  }
  ngOnInit(): void {
    this.getDepartments();
  }
  getDepartments() : void{
      this.administrationService.getDepartments().subscribe(result => {this.departments = result});
  }
  insertDepartment() : void{
    const dialogRef = this.editAddDialog.open(DepartmentEditAddComponent,{
      width: '300px',
      height: '180px'
    }).afterClosed().subscribe(result => {
      if(result)
        this.getDepartments();
    });;
  }
  updateDepartment(department:Department) : void{
    const dialogRef = this.editAddDialog.open(DepartmentEditAddComponent,{
      width: '300px',
      height: '180px'        
    });
    let departmentToEdit:Department = JSON.parse(JSON.stringify(department));
    dialogRef.componentInstance.department = departmentToEdit;
    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.getDepartments();
    });;
  }
  deleteDepartment(departmentId:number) : void{
      this.administrationService.deleteDepartment(departmentId).subscribe(result => {
          if(result) this.getDepartments();
          else this.dialogService.openInformationDialog("Błąd","Błąd usunięcia działu","Ok");
      });
  }
}
