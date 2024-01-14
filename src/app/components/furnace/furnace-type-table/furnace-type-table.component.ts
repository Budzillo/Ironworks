import { Component } from '@angular/core';
import { FurnaceType } from '../../../models/furnaceType.model';
import { FurnaceService } from '../../../services/furnace.service';
import { MatDialog } from '@angular/material/dialog';
import { FurnaceTypeEditAddComponent } from '../furnace-type-edit-add/furnace-type-edit-add.component';

@Component({
  selector: 'app-furnace-type-table',
  templateUrl: './furnace-type-table.component.html',
  styleUrl: './furnace-type-table.component.scss'
})
export class FurnaceTypeTableComponent {
  public furnaceTypes:FurnaceType[] = [];
  displayedColumns: string[] = 
  [
    'name',
    'description',
    'edit',
    'delete'
  ];
  constructor(private furnaceService:FurnaceService,private editAdddialog: MatDialog){

  }
  ngOnInit(): void {
    this.getFurnaceTypes();
  }
  getFurnaceTypes() : void{
    this.furnaceService.getFurnaceTypes().subscribe(result =>{
      this.furnaceTypes = result;
    });
  }
  deleteFurnaceType(furnaceTypeId:number) : void{
    this.furnaceService.deleteFurnaceType(furnaceTypeId).subscribe(result => {
      if(result) this.getFurnaceTypes();
      else console.error("Błąd podczas usuwania rodzaju pieca");
    });
  }
  insertFurnaceType() : void{
    const dialogRef = this.editAdddialog.open(FurnaceTypeEditAddComponent,{
      width: '400px',
      height: '250px'
    }).afterClosed().subscribe(result => {
      if(result)
        this.getFurnaceTypes();
    });;
  }
  updateFurnaceType(furnaceTypePassToEdit:FurnaceType) : void{
    const dialogRef = this.editAdddialog.open(FurnaceTypeEditAddComponent,{
      width: '400px',
      height: '250px'        
    });
    let furnaceTypeToEdit:FurnaceType = JSON.parse(JSON.stringify(furnaceTypePassToEdit));
    dialogRef.componentInstance.furnaceType = furnaceTypeToEdit;
    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.getFurnaceTypes();
    });;
  }
}
