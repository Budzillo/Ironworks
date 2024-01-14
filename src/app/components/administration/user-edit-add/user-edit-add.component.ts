import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { Role } from '../../../models/role.model';
import { Permission } from '../../../models/permission.model';
import { AdministrationService } from '../../../services/administration.service';
import { Department } from '../../../models/department.model';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-edit-add',
  templateUrl: './user-edit-add.component.html',
  styleUrl: './user-edit-add.component.scss'
})
export class UserEditAddComponent implements OnInit {
  @Input() user:User = new User();
  roles : Role[] = [];
  permissions : Permission[] = [];
  departments : Department[] = [];
  constructor(private administrationService:AdministrationService,private fb: FormBuilder,private dialogRef: MatDialogRef<UserEditAddComponent>){

  }
  ngOnInit(): void {
    this.getRoles();
    this.getDepartments();
    this.getPermissions();
  }
  getRoles() : void{
    this.administrationService.getRoles().subscribe(result => {this.roles = result});
  }
  getPermissions() : void{
    this.administrationService.getPermissions().subscribe(result => {this.permissions = result});
  }
  getDepartments() : void{
    this.administrationService.getDepartments().subscribe(result => {this.departments = result});
  }
  saveUser() : void{
    if(this.user.password == null)
      this.user.password = "";
    this.administrationService.saveUser(this.user).subscribe((result: boolean) => 
      {                 
        if(result)
        {          
          this.dialogRef.close(true);
        } 
        else console.error("Błąd podczas zapisu użytkownika!");
      });
  }
  cancel() : void{
    this.dialogRef.close(false);
  }

}
