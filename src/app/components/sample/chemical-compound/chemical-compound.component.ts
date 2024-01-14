import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChemicalCompoundEditAddComponent } from './chemical-compound-edit-add/chemical-compound-edit-add.component';
import { ChemicalCompound } from '../../../models/chemicalCompound.model';
import { SampleService } from '../../../services/sample.service';

@Component({
  selector: 'app-chemical-compound',
  templateUrl: './chemical-compound.component.html',
  styleUrl: './chemical-compound.component.scss'
})
export class ChemicalCompoundComponent implements OnInit {
  public chemicalCompounds:ChemicalCompound[]=[];
  public displayedColumns: string[] = ['name','edit','delete'];
  public constructor(private sampleService : SampleService,private dialog: MatDialog){

  }  
  ngOnInit(): void {
    this.getChemicalCompounds();
  }
  deleteChemicalCompound(chemicalCompoundId:number) : void{
    this.sampleService
    .deleteChemicalCompound(chemicalCompoundId)
    .subscribe(result=>{
        if(result) this.getChemicalCompounds();        
      });
  }
  insertChemicalCompound() : void{
    const dialogRef = this.dialog.open(ChemicalCompoundEditAddComponent,{
      width: '300px',
      height: '175px'
    }).afterClosed().subscribe(result => {
      if(result)
        this.getChemicalCompounds();
    });;
  }
  updateChemicalCompound(chemicalCompound:ChemicalCompound) : void{ 
    let dialogRef = this.dialog.open(ChemicalCompoundEditAddComponent,{
      width: '300px',
      height: '175px'              
    })
    var chemicalCompoundToEdit = new ChemicalCompound();
    chemicalCompoundToEdit.chemicalCompoundId = chemicalCompound.chemicalCompoundId;
    chemicalCompoundToEdit.name = chemicalCompound.name;
    dialogRef.componentInstance.chemicalCompound = chemicalCompoundToEdit;
    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.getChemicalCompounds();
    });; 
     
  }
  getChemicalCompounds(): void{
    this.sampleService.getChemicalCompounds()
    .subscribe((result: ChemicalCompound[]) => (this.chemicalCompounds = result));

  }
}
