import { Component, OnInit } from '@angular/core';
import { FurnaceService } from '../../../services/furnace.service';
import { FurnaceKind } from '../../../models/furnaceKind.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FurnaceKindEditAddComponent } from '../furnace-kind-edit-add/furnace-kind-edit-add.component';

@Component({
  selector: 'app-furnace-kind-table',
  templateUrl: './furnace-kind-table.component.html',
  styleUrl: './furnace-kind-table.component.scss'
})
export class FurnaceKindTableComponent implements OnInit {
  public furnaceKinds:FurnaceKind[] = [];
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
    this.getFurnaceKinds();
  }
  getFurnaceKinds() : void{
    this.furnaceService.getFurnaceKinds().subscribe(result =>{
      this.furnaceKinds = result;
    });
  }
  deleteFurnaceKind(furnaceKindId:number) : void{
    this.furnaceService.deleteFurnaceKind(furnaceKindId).subscribe(result => {
      if(result) this.getFurnaceKinds();
      else console.error("Błąd podczas usuwania rodzaju pieca");
    });
  }
  insertFurnaceKind() : void{
    const dialogRef = this.editAdddialog.open(FurnaceKindEditAddComponent,{
      width: '400px',
      height: '250px'
    }).afterClosed().subscribe(result => {
      if(result)
        this.getFurnaceKinds();
    });;
  }
  updateFurnaceKind(furnaceKindPassToEdit:FurnaceKind) : void{
    const dialogRef = this.editAdddialog.open(FurnaceKindEditAddComponent,{
      width: '400px',
      height: '250px'        
    });
    let furnaceKindToEdit:FurnaceKind = JSON.parse(JSON.stringify(furnaceKindPassToEdit));
    dialogRef.componentInstance.furnaceKind = furnaceKindToEdit;
    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.getFurnaceKinds();
    });;
  }
}
