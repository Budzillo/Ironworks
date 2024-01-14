import { Component, Input } from '@angular/core';
import { ChemicalElement } from '../../../../models/chemicalElement.model';
import { SampleService } from '../../../../services/sample.service';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chemical-element-edit-add',
  templateUrl: './chemical-element-edit-add.component.html',
  styleUrl: './chemical-element-edit-add.component.scss'
})
export class ChemicalElementEditAddComponent {
  @Input() chemicalElement:ChemicalElement = new ChemicalElement();

  constructor(private sampleService:SampleService,private fb: FormBuilder,
    private dialogRef: MatDialogRef<ChemicalElementEditAddComponent>) {}

  ngOnInit(): void {
    
  }
  public cancel() {
    this.dialogRef.close(false);
 }
  saveChemicalElement() : void{
    if(this.chemicalElement.chemicalElementId == 0)
    {
      this.sampleService.insertChemicalElement(this.chemicalElement).subscribe((result: boolean) => 
      {                 
        if(result)
        {          
          this.dialogRef.close(true);
        } 
        else console.error("Błąd podczas dodania!");
      });      
    }
    else{            
      this.sampleService.updateChemicalElement(this.chemicalElement).subscribe((result: boolean) => 
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
