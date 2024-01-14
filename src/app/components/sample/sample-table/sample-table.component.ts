import { Component, OnInit } from '@angular/core';
import { SampleService } from '../../../services/sample.service';
import { Sample } from '../../../models/sample.model';
import { SampleHistory } from '../../../models/sampleHistory.model';
import { MatDialog } from '@angular/material/dialog';
import { SampleEditAddComponent } from '../sample-edit-add/sample-edit-add.component';

@Component({
  selector: 'app-sample-table',
  templateUrl: './sample-table.component.html',
  styleUrl: './sample-table.component.scss'
})
export class SampleTableComponent implements OnInit {
  samples:Sample[] = [];
  sampleHistories:SampleHistory[] = [];
  displayedColumns: string[] = [
    'assortmentName',
    'materialName',
    'userFullName',
    'carWeightPositionNumber',
    'isControl',
    'date',
    'dateInsert',
    'dateLastEdit',
    'weight',
    'attentions',
    'change',
    'edit',
    'delete',
  ];
  displayedColumnsHistory: string[] = [
    'sampleId',
    'date',
    'description'
  ];
  constructor(private sampleService:SampleService,private editAdddialog:MatDialog){

  }
  ngOnInit(): void {
    this.getSamples();
    this.getSampleHistories();
  }
  public getSamples() : void{
    this.sampleService.getSamples().subscribe(result=>{this.samples = result});
  }
  public getSampleHistories() : void{
    this.sampleService.getSampleHistories().subscribe(result => {this.sampleHistories = result});
  }
  public updateSample(sample:Sample) : void{
    const dialogRef = this.editAdddialog.open(SampleEditAddComponent,{
      width: '1200px',
      height: '800px'
    })
    let sampleToEdit:Sample = JSON.parse(JSON.stringify(sample));
    dialogRef.componentInstance.sample = sampleToEdit; 
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getSamples();
        this.getSampleHistories();
      }
    });;
  }
  public insertSample() : void{
    const dialogRef = this.editAdddialog.open(SampleEditAddComponent,{
      width: '1200px',
      height: '800px'
    }).afterClosed().subscribe(result => {
      if(result)
      {
        this.getSamples();
        this.getSampleHistories();
      }
    });;
  }
  public deleteSample(sampleId:number) : void{
    this.sampleService.deleteSample(sampleId).subscribe(result => {
      if(result) 
      {
        this.getSamples();
        this.getSampleHistories();
      }
      else console.error("Błąd usunięcia próbki chemicznej");
    })
  }
}
