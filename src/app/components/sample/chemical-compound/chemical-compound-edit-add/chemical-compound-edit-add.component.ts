import { Component, Input, OnInit, Output } from '@angular/core';
import { ChemicalCompound } from '../../../../models/chemicalCompound.model';
import { SampleService } from '../../../../services/sample.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chemical-compound-edit-add',
  templateUrl: './chemical-compound-edit-add.component.html',
  styleUrl: './chemical-compound-edit-add.component.scss'
})
export class ChemicalCompoundEditAddComponent implements OnInit {

  @Input() chemicalCompound : ChemicalCompound = new ChemicalCompound();
 constructor(private sampleService:SampleService,private fb: FormBuilder,
    private dialogRef: MatDialogRef<ChemicalCompoundEditAddComponent>) {}

  ngOnInit(): void {
    
  }
  public cancel() {
    this.dialogRef.close(false);
 }
  saveChemicalCompound() : void{
    if(this.chemicalCompound.chemicalCompoundId == 0)
    {
      this.sampleService.insertChemicalCompound(this.chemicalCompound).subscribe((result: boolean) => 
      {                 
        if(result)
        {          
          this.dialogRef.close(true);
        } 
        else console.error("Błąd podczas dodania!");
      });      
    }
    else{            
      this.sampleService.updateChemicalCompound(this.chemicalCompound).subscribe((result: boolean) => 
      {                 
        if(result)
        {          
          this.dialogRef.close(true);
        } 
        else console.error("Błąd podczas edycji!");
      });
    }     
  }
 

}
