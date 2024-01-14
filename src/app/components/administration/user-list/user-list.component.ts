import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { AdministrationService } from '../../../services/administration.service';
import { DialogService } from '../../../services/dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { UserEditAddComponent } from '../user-edit-add/user-edit-add.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
   users : User[] = [];
   displayedColumns: string[] = 
    [
      'fullName',
      'login',
      'email',
      'roleName',
      'departmentName',
      'isBlocked',
      'edit',
      'delete',
      'block',
      'reset_password'
    ];
   constructor(private administrationService:AdministrationService,private dialogService : DialogService,private editAdddialog: MatDialog){

   }
  ngOnInit(): void {    
    this.getUsers();
  }
   getUsers() : void{
        this.administrationService.getUsers().subscribe(result => {this.users = result});
   }
   insertUser() : void{
    const dialogRef = this.editAdddialog.open(UserEditAddComponent,{
      width: '500px',
      height: '600px'
    }).afterClosed().subscribe(result => {
      if(result)
        this.getUsers();
    });;
   }
   updateUser(user:User) : void{
    const dialogRef = this.editAdddialog.open(UserEditAddComponent,{
      width: '500px',
      height: '600px'        
    });
    let userToEdit:User = JSON.parse(JSON.stringify(user));
    dialogRef.componentInstance.user = userToEdit;
    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.getUsers();
    });;
   }
   deleteUser(userId:number) : void{
      this.administrationService.deleteUser(userId).subscribe(result => 
        {
          if(result) this.getUsers();
          else this.dialogService.openInformationDialog("Błąd","Błąd podczas usuwania użytkownika","Ok")
        });
   }
   blockUser(userId:number) : void{
    this.administrationService.blockUser(userId).subscribe(result => 
      {
        if(result) this.getUsers();
        else this.dialogService.openInformationDialog("Błąd","Błąd podczas blokowania/odblokowywania użytkownika","Ok")
      });
   }
   resetUserPassword(userId:number) : void{
    this.administrationService.resetUserPassword(userId).subscribe(result => 
      {
        if(result) this.getUsers();
        else this.dialogService.openInformationDialog("Błąd","Błąd podczas blokowania/odblokowywania użytkownika","Ok")
      });
   }
}
