import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChemicalElement } from '../../../models/chemicalElement.model';
import { SampleService } from '../../../services/sample.service';
import { MatDialog } from '@angular/material/dialog';
import { ChemicalElementEditAddComponent } from './chemical-element-edit-add/chemical-element-edit-add.component';

@Component({
  selector: 'app-chemical-element',
  templateUrl: './chemical-element.component.html',
  styleUrl: './chemical-element.component.scss'
})
export class ChemicalElementComponent implements OnInit {
  public chemicalElements : ChemicalElement[] = [];
  displayedColumns: string[] = ['name','edit','delete'];

  constructor(public sampleService:SampleService,private dialog: MatDialog){

  }
  ngOnInit(): void {
    this.getChemicalElements();
  }
  insertChemicalElement():void{
    const dialogRef = this.dialog.open(ChemicalElementEditAddComponent,{
      width: '300px',
      height: '175px'
    }).afterClosed().subscribe(result => {
      if(result)
        this.getChemicalElements();
    });;
  }
  updateChemicalElement(chemicalElement:ChemicalElement):void{
    let dialogRef = this.dialog.open(ChemicalElementEditAddComponent,{
      width: '300px',
      height: '175px'              
    })
    var chemicalElementToEdit: ChemicalElement = JSON.parse(JSON.stringify(chemicalElement));;
    dialogRef.componentInstance.chemicalElement = chemicalElementToEdit;
    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.getChemicalElements();
    });; 
  }
  deleteChemicalElement(chemicalElementId:number):void{
    this.sampleService
      .deleteChemicalElement(chemicalElementId)
      .subscribe(result=>{
          if(result) this.getChemicalElements();        
        }); 
  }
  getChemicalElements():void{
    this.sampleService
    .getChemicalElements()
    .subscribe((result: ChemicalElement[]) => (this.chemicalElements = result));
  }
  

}
