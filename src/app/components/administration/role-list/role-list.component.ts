import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../../../services/administration.service';
import { MatDialog } from '@angular/material/dialog';
import { Role } from '../../../models/role.model';
import { DialogService } from '../../../services/dialog.service';
import { RoleEditAddComponent } from '../role-edit-add/role-edit-add.component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.scss'
})
export class RoleListComponent implements OnInit {
  roles:Role[] = [];
  displayedColumns: string[] = 
  [
    'name',
    'edit',
    'delete',
  ];
  constructor(private administrationService:AdministrationService,private dialogService:DialogService,private dialogEditAdd:MatDialog){

  }
  ngOnInit(): void {
    this.getRoles();
  }
  getRoles() : void{
    this.administrationService.getRoles().subscribe(result=>{this.roles = result});
  }
  insertRole(){
    const dialogRef = this.dialogEditAdd.open(RoleEditAddComponent,{
      width: '500px',
      height: '300px'
    }).afterClosed().subscribe(result => {
      if(result)
        this.getRoles();
    });;
  }
  updateRole(role:Role){
    const dialogRef = this.dialogEditAdd.open(RoleEditAddComponent,{
      width: '500px',
      height: '300px'        
    });
    let roleToEdit:Role = JSON.parse(JSON.stringify(role));
    dialogRef.componentInstance.role = roleToEdit;
    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.getRoles();
    });;
  }
  deleteRole(roleId:number){
    this.administrationService.deleteRole(roleId).subscribe(result => {
      if(result) this.getRoles();
      else this.dialogService.openInformationDialog("Błąd","Błąd usunięcia roli","Ok");
    })
  }
}
