import { Component, Input } from '@angular/core';
import { FurnaceKind } from '../../../models/furnaceKind.model';
import { FurnaceService } from '../../../services/furnace.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-furnace-kind-edit-add',
  templateUrl: './furnace-kind-edit-add.component.html',
  styleUrl: './furnace-kind-edit-add.component.scss'
})
export class FurnaceKindEditAddComponent {
  @Input() furnaceKind:FurnaceKind = new FurnaceKind();
  constructor(private furnaceService:FurnaceService,private dialogRef:MatDialogRef<FurnaceKindEditAddComponent>){

  }
  saveFurnaceKind() : void{    
    this.furnaceService.saveFurnaceKind(this.furnaceKind).subscribe(result=>{
      if(result) this.dialogRef.close(true);
      else console.error("Błąd podczas zapisu rodzaju pieca");
    })
  }
  cancel() : void{
    this.dialogRef.close(false);
  }

}
