import { Component, Input, OnInit } from '@angular/core';
import { SampleService } from '../../../../services/sample.service';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialGroup } from '../../../../models/materialGroup.model';

@Component({
  selector: 'app-material-group-edit-add',
  templateUrl: './material-group-edit-add.component.html',
  styleUrl: './material-group-edit-add.component.scss'
})
export class MaterialGroupEditAddComponent implements OnInit{
  @Input() materialGroup : MaterialGroup = new MaterialGroup();
  constructor(private sampleService:SampleService,private fb: FormBuilder,
    private dialogRef: MatDialogRef<MaterialGroupEditAddComponent>){

  }
  ngOnInit(): void {
    
  }
  saveMaterialGroup():void{
    this.sampleService.saveMaterialGroup(this.materialGroup).subscribe(result => {
      if(result)
        {          
          this.dialogRef.close(true);
        } 
        else console.error("Błąd podczas zapisu grupy surowca!");
    });
  }
  cancel():void{
    this.dialogRef.close(false);
  }
}
