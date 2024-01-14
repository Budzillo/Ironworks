import { Component, OnInit } from '@angular/core';
import { CarWeightService } from '../../../services/carWeight.service';
import { CarWeight } from '../../../models/carWeight.model';

@Component({
  selector: 'app-car-weight-list',
  templateUrl: './car-weight-list.component.html',
  styleUrl: './car-weight-list.component.scss'
})
export class CarWeightListComponent implements OnInit{
  carWeights:CarWeight[] = [];
  displayedColumns: string[] = 
  [
    'name',
    'localization'   
  ];
  constructor(private carWeightService:CarWeightService){   
  }
  ngOnInit(): void {
    this.getCarWeights();
  }
  getCarWeights() : void{
    this.carWeightService.getCarWeights().subscribe(result => {this.carWeights = result;});
  }
}
