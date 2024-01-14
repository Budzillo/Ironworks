import { Component, OnInit } from '@angular/core';
import { CarWeightPosition } from '../../../models/carWeightPosition.model';
import { CarWeight } from '../../../models/carWeight.model';
import { CarWeightService } from '../../../services/carWeight.service';

@Component({
  selector: 'app-car-weight-position-list',
  templateUrl: './car-weight-position-list.component.html',
  styleUrl: './car-weight-position-list.component.scss'
})
export class CarWeightPositionListComponent implements OnInit{
  carWeightPositions:CarWeightPosition[] = [];
  carWeights:CarWeight[] = [];
  selectedCarWeightId:number = 0;
  dateStart:Date = new Date(new Date().setDate(new Date().getDate()-7));
  dateEnd:Date = new Date();
  displayedColumns: string[] = 
    [
      'assortmentName',
      'contractorName',
      'carWeightName',
      'customer',
      'number',
      'date',
      'operator',
      'weight1Value',
      'weight2Value',
      'massNetto',
      'massAssortmentNetto',
      'netto',
    ];
  constructor(private carWeightService:CarWeightService){

  }
  ngOnInit(): void {
    this.getCarWeights();
    this.getCarWeightPositions();
  }
  public getCarWeightPositions() : void{
    this.carWeightService.getCarWeightPositions().subscribe(result => {
      this.carWeightPositions = result;
    });
  }
  public getCarWeights() : void{
    this.carWeightService.getCarWeights().subscribe(result =>{
      this.carWeights = result;
    });
  }
  public showRecords() : void{
    this.getCarWeighPositionstsByDate();
  }
  public getCarWeighPositionstsByDate():void{
    if(this.selectedCarWeightId != 0 && this.dateStart != undefined && this.dateEnd != undefined)
    {
      console.log('this.dateStart.toLocaleDateString(): ',this.dateStart.toLocaleDateString());
      console.log('this.dateEnd.toLocaleDateString(): ',this.dateEnd.toLocaleDateString());
      this.carWeightService.getCarWeightPositionsByDate(this.dateStart,this.dateEnd,this.selectedCarWeightId).subscribe(result => {
        this.carWeightPositions = result;
      });
    }
  }
}
