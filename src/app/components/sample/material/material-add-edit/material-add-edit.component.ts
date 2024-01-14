import { Component, Input, OnInit } from '@angular/core';
import { Material } from '../../../../models/material.model';
import { SampleService } from '../../../../services/sample.service';
import { MaterialGroup } from '../../../../models/materialGroup.model';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-material-add-edit',
  templateUrl: './material-add-edit.component.html',
  styleUrl: './material-add-edit.component.scss'
})
export class MaterialAddEditComponent implements OnInit{
  @Input() material:Material = new Material();
  public materialGroups:MaterialGroup[] = [];
  constructor(private sampleService:SampleService,private fb: FormBuilder,
    private dialogRef: MatDialogRef<MaterialAddEditComponent>){

  }
  ngOnInit(): void {
    this.getMaterialGroups();
  }
  getMaterialGroups(){
    this.sampleService.getMaterialGroups().subscribe(result=>(this.materialGroups = result)) ;
  }
  saveMaterial():void{
    this.sampleService.saveMaterial(this.material).subscribe(result => {
      if(result)
        {          
          this.dialogRef.close(true);
        } 
        else console.error("Błąd podczas zapisu surowca!");
    });
  }
  cancel():void{
    this.dialogRef.close(false);
  }
}
