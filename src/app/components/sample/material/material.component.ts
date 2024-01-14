import { Component, OnInit } from '@angular/core';
import { SampleService } from '../../../services/sample.service';
import { Material } from '../../../models/material.model';
import { MaterialGroup } from '../../../models/materialGroup.model';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MaterialAddEditComponent } from './material-add-edit/material-add-edit.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss'
})
export class MaterialComponent implements OnInit {
  materials:Material[] = [];
  materialGroups:MaterialGroup[] = [];
  selectedMaterialGroupIds:number[] = [];
  displayedColumns: string[] = ['name','groupName','edit','delete'];
  constructor(private sampleService:SampleService,private editAdddialog: MatDialog){

  }
  ngOnInit(): void {
    this.getMaterials();
    this.getMaterialGroups(); 
  }
  getMaterials():void{
    this.sampleService.getMaterials().subscribe(result => (this.materials = result));
  }
  getMaterialByGroups():void{
    this.sampleService.getMaterialByGroups(this.selectedMaterialGroupIds).subscribe(result => (this.materials = result));
  }
  getMaterialGroups():void{
    this.sampleService.getMaterialGroups().subscribe(result => (this.materialGroups = result));
  }
  deleteMaterial(materialId:number):void{
    this.sampleService.deleteMaterial(materialId).subscribe(result =>{
      if(result) this.getMaterials();
      else console.error("Błąd usuwania surowca");
    });
  }
  insertMaterial():void{
    const dialogRef = this.editAdddialog.open(MaterialAddEditComponent,{
      width: '350px',
      height: '250px'
    }).afterClosed().subscribe(result => {
      if(result)
        this.getMaterials();
    });;
  }
  updateMaterial(material:Material):void{
    const dialogRef = this.editAdddialog.open(MaterialAddEditComponent,{
      width: '350px',
      height: '250px'
    })
    let materialToEdit:Material = JSON.parse(JSON.stringify(material));
    dialogRef.componentInstance.material = materialToEdit; 
    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.getMaterials();
    });;
  }
  materialGroupSelectionChanged(event:MatChipSelectionChange):void{
    console.log(`materialGroupSelectionChanged: ${event}`);
    console.log(`materialGroupSelectionChanged isSelected: ${event.selected}`);
      if(event.selected){
        this.selectedMaterialGroupIds.push(event.source.value);
      }
      else{
        this.selectedMaterialGroupIds.forEach((value,index)=>{
          if(value==event.source.value) this.selectedMaterialGroupIds.splice(index,1);
      });
      }
      console.log(`selectedMaterialGroupIds: ${this.selectedMaterialGroupIds.join(', ')}`)
      if(this.selectedMaterialGroupIds.length == 0) this.getMaterials();
      else this.getMaterialByGroups();
  }

}
