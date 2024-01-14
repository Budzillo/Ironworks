import { Component, Input, OnInit } from '@angular/core';
import { FurnaceService } from '../../../services/furnace.service';
import { Furnace } from '../../../models/furnace.model';
import { FurnaceKind } from '../../../models/furnaceKind.model';
import { FurnaceType } from '../../../models/furnaceType.model';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-add-furnace',
  templateUrl: './edit-add-furnace.component.html',
  styleUrl: './edit-add-furnace.component.scss'
})
export class EditAddFurnaceComponent implements OnInit {
  @Input() furnace:Furnace = new Furnace();
  furnaceKinds:FurnaceKind[] = [];
  furnaceTypes:FurnaceType[] = [];
  electrodeCounts:number[] = [1,2,3,4,5,6];
  isFurnaceElectrode:boolean = false;

  constructor(private furnaceService:FurnaceService,private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditAddFurnaceComponent>){

  }
  ngOnInit(): void {
    this.getFurnaceKinds();  
    this.getFurnaceTypes();  
  }
  getFurnaceKinds(): void{
    this.furnaceService.getFurnaceKinds().subscribe(result=>{
      this.furnaceKinds = result;
    });    
  }
  changeFurnaceKindEvent(event : MatOptionSelectionChange) : void{
      if(event.source.value == 3){
        console.log('Electrode Furnace');
        this.isFurnaceElectrode= true;
      }    
      else{
        this.isFurnaceElectrode = false;
        this.furnace.electrodeCount = undefined;
      }
  }
  getFurnaceTypes(): void{
    this.furnaceService.getFurnaceTypes().subscribe(result=>{
      this.furnaceTypes = result;
    });
  }
  saveFurnace(){
    console.log(this.furnace.name,this.furnace.description,this.furnace.electrodeCount);
      this.furnaceService.saveFurnace(this.furnace).subscribe((result: boolean) => 
      {                 
        if(result)
        {          
          this.dialogRef.close(true);
        } 
        else console.error("Błąd podczas zapisu pieca!");
      });
  }
  public cancel() {
    this.dialogRef.close(false);
 }
}
