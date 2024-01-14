import { Component, Input, OnInit } from '@angular/core';
import { Role } from '../../../models/role.model';
import { AdministrationService } from '../../../services/administration.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Permission } from '../../../models/permission.model';
import { RolePermission } from '../../../models/rolePermission.model';

@Component({
  selector: 'app-role-edit-add',
  templateUrl: './role-edit-add.component.html',
  styleUrl: './role-edit-add.component.scss'
})
export class RoleEditAddComponent implements OnInit {
  @Input() role:Role = new Role();
  permissions:Permission[] = [];
  rolePermissions:RolePermission[] = [];
  selectedPermission:Permission = new Permission();
  constructor(private administrationService:AdministrationService, private dialogRef:MatDialogRef<RoleEditAddComponent>){

  }
  ngOnInit(): void {
    this.getPermissions();
  }
  insertPermission() : void{
    if(this.selectedPermission != undefined){
      if(this.role.rolePermissions.find((value) => value.permissionId == this.selectedPermission.permissionId) == undefined)
      {
        let rolePermission:RolePermission = new RolePermission();
        rolePermission.permissionId = this.selectedPermission.permissionId;
        rolePermission.permissionName = this.selectedPermission.name;
        rolePermission.permission = this.selectedPermission;
        this.role.rolePermissions.push(rolePermission);
        console.log("Role.RolePemissions: ",this.role.rolePermissions)
      }
    }
  }
  removePermission(rolePermission : RolePermission) : void{
    this.role.rolePermissions.splice(this.role.rolePermissions.indexOf(rolePermission),1);
  }
  getPermissions() : void{
    this.administrationService.getPermissions().subscribe(result => {this.permissions = result})
  }
  saveRole() : void{    
    console.log("Role",this.role)
    this.administrationService.saveRole(this.role).subscribe((result: boolean) => 
      {                 
        if(result)
        {          
          this.dialogRef.close(true);
        } 
        else console.error("Błąd podczas zapisu roli!");
      });
  }
  cancel() : void{
    this.dialogRef.close(false);
  }
}
