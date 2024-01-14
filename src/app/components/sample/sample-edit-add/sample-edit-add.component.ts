import { Component, Input, OnInit } from '@angular/core';
import { Sample } from '../../../models/sample.model';
import { Assortment } from '../../../models/assortment.model';
import { Material } from '../../../models/material.model';
import { MaterialGroup } from '../../../models/materialGroup.model';
import { ChemicalCompound } from '../../../models/chemicalCompound.model';
import { ChemicalElement } from '../../../models/chemicalElement.model';
import { SampleService } from '../../../services/sample.service';
import { AdministrationService } from '../../../services/administration.service';
import { User } from '../../../models/user.model';
import { CarWeightPosition } from '../../../models/carWeightPosition.model';
import { CarWeightService } from '../../../services/carWeight.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { SampleChemicalElement } from '../../../models/sampleChemicalElement.model';
import { SampleChemicalCompound } from '../../../models/sampleChemicalCompound.model';
import { SampleHistory } from '../../../models/sampleHistory.model';
import { LoggingService } from '../../../services/logging.service';

@Component({
  selector: 'app-sample-edit-add',
  templateUrl: './sample-edit-add.component.html',
  styleUrl: './sample-edit-add.component.scss'
})
export class SampleEditAddComponent implements OnInit {
  @Input({ required: true }) sample : Sample = new Sample();

  public assortments:Assortment[] = [];
  public materialGroups:MaterialGroup[] = [];
  public materials:Material[] = [];
  public chemicalCompounds:ChemicalCompound[] = [];
  public chemicalElements:ChemicalElement[] = [];
  public users:User[] = [];
  public carWeightPositions:CarWeightPosition[] = [];
  public selectedChemicalCompound?:ChemicalCompound;
  public selectedChemicalElement?:ChemicalElement;
  sampleChemicalElementsDisplayedColumns: string[] = [
    'ordinalNumber',
    'name',
    'value',
    'delete',
  ];
  sampleChemicalCompoundsDisplayedColumns: string[] = [
    'ordinalNumber',
    'name',
    'value',
    'delete',
  ];
  public constructor(private sampleService:SampleService,
    private administrationService:AdministrationService,
    private carWeightService:CarWeightService,
    private logginService:LoggingService,
    private dialogRef: MatDialogRef<SampleEditAddComponent>,
    private fb: FormBuilder){

  }  
  ngOnInit(): void {
    this.getAssortments();
    this.getMaterialGroups();
    this.getMaterials();
    this.getChemicalCompounds();
    this.getChemicalElements();
    this.getUsers();
    this.getCarWeightPositions();
  }
  public getAssortments() : void{
    this.sampleService.getAssortments().subscribe(result => {this.assortments = result});
  }
  public getMaterialGroups(): void{
    this.sampleService.getMaterialGroups().subscribe(result => {this.materialGroups = result});
  }
  public getMaterials(): void{
    this.sampleService.getMaterials().subscribe(result => {this.materials = result});
  }
  public getChemicalCompounds(): void{
    this.sampleService.getChemicalCompounds().subscribe(result => {this.chemicalCompounds = result});
  }
  public getChemicalElements(): void{
    this.sampleService.getChemicalElements().subscribe(result => {this.chemicalElements = result});
  }
  public getUsers(): void{
    this.administrationService.getUsers().subscribe(result => {this.users = result});
  }
  public getCarWeightPositions(): void{
    this.carWeightService.getCarWeightPositions().subscribe(result => {this.carWeightPositions = result});
  }
  public changeAssortment(event:any) : void{
    this.insertHistory(`Zmiana asortymentu na ${this.getEventValue(event)}`);
  }
  public changeMaterial(event:any) : void{
    this.insertHistory(`Zmiana surowca na ${this.getEventValue(event)}`);
  }
  public changeCarWeightPosition(event:any){
    this.insertHistory(`Zmiana rekordu wagi samochodowej na ${this.getEventValue(event)}`);
  }
  public changeUser(event:any){
    this.insertHistory(`Zmiana użytkownika na ${this.getEventValue(event)}`);
  }
  public changeChange(event:any){
    this.insertHistory(`Zmiana zmiany na ${this.getEventValue(event)}`);
  }
  public changeIsControl(event:any){
    this.insertHistory(`Zmiana czy jest kontrolna na ${this.getEventValue(event)}`);
  }
  public changeWeight(value:any){
    this.insertHistory(`Zmiana zmiany na ${value}`);
  }
  public getEventValue(event:any) : string{
    let target = event.source.selected._element.nativeElement;
    return target.innerText;
  }
  private insertHistory(description:string){
    let sampleHistory:SampleHistory = new SampleHistory();
    sampleHistory.date = new Date();
    sampleHistory.description = description;
    sampleHistory.sampleId = this.sample.sampleId;
    //sampleHistory.sample = this.sample;
    this.sample.sampleHistories.push(sampleHistory);
  }
  public removeSampleChemicalElement(sampleChemicalElement:SampleChemicalElement):void{
    let index = this.sample.sampleChemicalElements.findIndex(q=>q.chemicalElementId == sampleChemicalElement.chemicalElementId);
    this.sample.sampleChemicalElements.splice(index,1);
    this.insertHistory(`Usunięcie pierwiastka chemicznego ${sampleChemicalElement.chemicalElementName}`);
  }
  public addSampleChemicalElement(): void{
    if(this.selectedChemicalElement != undefined){
      if(this.sample.sampleChemicalElements.find((value) => value.chemicalElementId == this.selectedChemicalElement?.chemicalElementId) == undefined)
      {
        let sampleChemicalElement:SampleChemicalElement = new SampleChemicalElement();
        sampleChemicalElement.chemicalElementId = this.selectedChemicalElement?.chemicalElementId;
        sampleChemicalElement.chemicalElement = this.selectedChemicalElement;
        sampleChemicalElement.value = 0;
        sampleChemicalElement.chemicalElementName = this.selectedChemicalElement.name;
        sampleChemicalElement.ordinalNumber = this.sample.sampleChemicalElements.length+1;        
        console.log('SampleChemicelElements',this.sample.sampleChemicalElements)
        this.sample.sampleChemicalElements.push(sampleChemicalElement);
        this.sample.sampleChemicalElements = this.sample.sampleChemicalElements;
        this.insertHistory(`Dodanie pierwiastka chemicznego: ${this.selectedChemicalElement.name}`);
      }
    }
  }
  public removeSampleChemicalCompound(sampleChemicalCompound:SampleChemicalCompound):void{
    let index = this.sample.sampleChemicalCompounds.findIndex(q=>q.chemicalCompoundId == sampleChemicalCompound.chemicalCompoundId);
    this.sample.sampleChemicalCompounds.splice(index,1);
    this.insertHistory(`Usunięcie pierwiastka chemicznego ${sampleChemicalCompound.chemicalCompoundName}`);
  }
  public addSampleChemicalCompound(): void{
    if(this.selectedChemicalCompound != undefined){
      if(this.sample.sampleChemicalCompounds.find((value) => value.chemicalCompoundId == this.selectedChemicalCompound?.chemicalCompoundId) == undefined)
      {
        let sampleChemicalCompound:SampleChemicalCompound = new SampleChemicalCompound();
        sampleChemicalCompound.chemicalCompoundId = this.selectedChemicalCompound?.chemicalCompoundId;
        sampleChemicalCompound.chemicalCompound = this.selectedChemicalCompound;
        sampleChemicalCompound.value = 0;
        sampleChemicalCompound.ordinalNumber = this.sample.sampleChemicalElements.length+1;
        sampleChemicalCompound.chemicalCompoundName = this.selectedChemicalCompound.name;
        this.sample.sampleChemicalCompounds.push(sampleChemicalCompound);
        this.sample.sampleChemicalCompounds = this.sample.sampleChemicalCompounds;
        this.insertHistory(`Dodanie związku chemicznego: ${this.selectedChemicalCompound.name}`);
      }
    }
  }
  public saveSample() : void{
    this.sample.assortment = new Assortment();
    this.sample.material = new Material();
    this.sample.carWeightPosition = new CarWeightPosition();
    this.sample.user = new User();
    this.sample.sampleChemicalCompounds.forEach(element => {
      //element.chemicalCompound = new ChemicalCompound();
      element.sample = new Sample();
    });
    this.sample.sampleChemicalElements.forEach(element => {
      //element.chemicalElement = new ChemicalElement();
      element.sample = new Sample();
    });
    this.sample.sampleHistories.forEach(element => {
      element.sample = new Sample();
    })
    this.sampleService.saveSample(this.sample).subscribe(result => {
      if(result){
        this.dialogRef.close(true);
      }
      else{
        console.error("Błąd przy zapisie próbki chemicznej!!!");
      }
    });
  }
  public cancel() : void{
    this.dialogRef.close(false);
  }
}
