import { Component, Input } from '@angular/core';
import { AdministrationService } from '../../../services/administration.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Department } from '../../../models/department.model';

@Component({
  selector: 'app-department-edit-add',
  templateUrl: './department-edit-add.component.html',
  styleUrl: './department-edit-add.component.scss'
})
export class DepartmentEditAddComponent {
  @Input() department:Department = new Department();
  constructor(private administrationService:AdministrationService,private dialogRef: MatDialogRef<DepartmentEditAddComponent>){

  }
  saveDepartment() : void{    
    this.administrationService.saveDepartment(this.department).subscribe((result: boolean) => 
      {                 
        if(result)
        {          
          this.dialogRef.close(true);
        } 
        else console.error("Błąd podczas zapisu działu!");
      });
  }
  cancel() : void{
    this.dialogRef.close(false);
  }
}
