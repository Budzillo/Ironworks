import { Component, Input } from '@angular/core';
import { FurnaceType } from '../../../models/furnaceType.model';
import { FurnaceService } from '../../../services/furnace.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-furnace-type-edit-add',
  templateUrl: './furnace-type-edit-add.component.html',
  styleUrl: './furnace-type-edit-add.component.scss'
})
export class FurnaceTypeEditAddComponent {
  @Input() furnaceType:FurnaceType = new FurnaceType();
  constructor(private furnaceService:FurnaceService,private dialogRef:MatDialogRef<FurnaceTypeEditAddComponent>){

  }
  saveFurnaceType() : void{    
    this.furnaceService.saveFurnaceType(this.furnaceType).subscribe(result=>{
      if(result) this.dialogRef.close(true);
      else console.error("Błąd podczas zapisu typu pieca");
    })
  }
  cancel() : void{
    this.dialogRef.close(false);
  }
}
