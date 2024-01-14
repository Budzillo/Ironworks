import { Component } from '@angular/core';
import { Assortment } from '../../../models/assortment.model';
import { SampleService } from '../../../services/sample.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-assortment-table',
  templateUrl: './assortment-table.component.html',
  styleUrl: './assortment-table.component.scss'
})
export class AssortmentTableComponent {
  public assortments:Assortment[] = [];
  displayedColumns: string[] = 
  [
    'name',    
    'edit',
    'delete'
  ];
  constructor(private sampleService:SampleService,private editAdddialog: MatDialog){

  }
  ngOnInit(): void {
    this.getAssortments();
  }
  getAssortments() : void{
    this.sampleService.getAssortments().subscribe(result =>{
      this.assortments = result;
    });
  }  
}
