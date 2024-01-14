import { Component, OnInit } from '@angular/core';
import { MaterialGroup } from '../../../models/materialGroup.model';
import { SampleService } from '../../../services/sample.service';
import { MaterialGroupEditAddComponent } from './material-group-edit-add/material-group-edit-add.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-material-group',
  templateUrl: './material-group.component.html',
  styleUrl: './material-group.component.scss'
})
export class MaterialGroupComponent implements OnInit {

    materialGroups:MaterialGroup[]=[];
    displayedColumns: string[] = ['name','edit','delete'];
    constructor(private sampleService:SampleService,private dialogService:DialogService,private editAdddialog: MatDialog){

    }
    ngOnInit(): void {
      this.getMaterialGroups();  
    }
    getMaterialGroups() : void{
      this.sampleService.getMaterialGroups().subscribe(result=>{this.materialGroups = result});
    }
    updateMaterialGroup(materialGroup:MaterialGroup) : void{
      const dialogRef = this.editAdddialog.open(MaterialGroupEditAddComponent,{
        width: '350px',
        height: '170px'
      })
      let materialGroupToEdit:MaterialGroup = JSON.parse(JSON.stringify(materialGroup));
      dialogRef.componentInstance.materialGroup = materialGroupToEdit; 
      dialogRef.afterClosed().subscribe(result => {
        if(result)
          this.getMaterialGroups();
      });;
    }
    deleteMaterialGroup(materialGroup:MaterialGroup) : void{
      this.sampleService.checkIfAnyMaterialIsConnectedWithMaterialGroup(materialGroup.materialGroupId).subscribe(result=>{
        if(result){
          this.dialogService.openYesNoDialog("Potwierdź","Ta grupa surowca jest połączona z innymi danymi. \n Czy na pewno chcesz ją usunąć?","Tak","Nie",'350px','250px').subscribe(result=>{
            if(result){
              this.deleteMaterialGroupOperation(materialGroup);
            }
          })
        }
        else{
          this.deleteMaterialGroupOperation(materialGroup);
        }
      })
    }
    deleteMaterialGroupOperation(materialGroup:MaterialGroup){
      this.sampleService.deleteMaterialGroup(materialGroup.materialGroupId).subscribe(result => 
        {
          if(result) this.getMaterialGroups();
          else console.error("Błąd usunięcia grupy surowca");
        });
    }
    insertMaterialGroup() : void{
      const dialogRef = this.editAdddialog.open(MaterialGroupEditAddComponent,{
        width: '350px',
        height: '170px'
      }).afterClosed().subscribe(result => {
        if(result)
          this.getMaterialGroups();
      });;
    }

}
