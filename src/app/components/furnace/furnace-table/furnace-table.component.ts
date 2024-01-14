import { Component, OnInit } from '@angular/core';
import { Furnace } from '../../../models/furnace.model';
import { FurnaceService } from '../../../services/furnace.service';
import { MatDialog } from '@angular/material/dialog';
import { EditAddFurnaceComponent } from '../edit-add-furnace/edit-add-furnace.component';

@Component({
  selector: 'app-furnace-table',
  templateUrl: './furnace-table.component.html',
  styleUrl: './furnace-table.component.scss'
})
export class FurnaceTableComponent implements OnInit{
    furnaces:Furnace[] = [];
    displayedColumns: string[] = 
    [
      'name',
      'longName',
      'furnaceKindName',
      'furnaceTypeName',
      'description',
      'electrodeCount',
      'edit',
      'delete'
    ];
    constructor(private furnaceService:FurnaceService,private editAdddialog: MatDialog){

    }
    ngOnInit(): void {
      this.getFurnaces();
    }
    getFurnaces() : void{
      this.furnaceService.getFurnaces().subscribe(result => {
        this.furnaces = result;
      });
    }
    deleteFurnace(furnaceId:number) : void{
      this.furnaceService.deleteFurnace(furnaceId).subscribe(result => {
        if(result) this.getFurnaces();
        else console.error("Błąd podczas usuwania pieca");
      });
    }
    insertFurnace() : void{
      const dialogRef = this.editAdddialog.open(EditAddFurnaceComponent,{
        width: '600px',
        height: '400px'
      }).afterClosed().subscribe(result => {
        if(result)
          this.getFurnaces();
      });;
    }
    updateFurnace(furnacePassToEdit:Furnace) : void{
      const dialogRef = this.editAdddialog.open(EditAddFurnaceComponent,{
        width: '600px',
        height: '400px'        
      });
      let furnaceToEdit:Furnace = JSON.parse(JSON.stringify(furnacePassToEdit));
      dialogRef.componentInstance.furnace = furnaceToEdit;
      dialogRef.afterClosed().subscribe(result => {
        if(result)
          this.getFurnaces();
      });;
    }
}
