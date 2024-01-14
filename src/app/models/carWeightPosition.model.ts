import { Assortment } from "./assortment.model";
import { CarWeight } from "./carWeight.model";
import { Contractor } from "./contractor.model";

export class CarWeightPosition{
    carWeightPositionId:number = 0;
    assortmentId:number = 0;
    assortmentName:string = "";
    contractorId:number = 0;
    contractorName:string = "";
    customer:string = "";
    number:string = "";
    date:Date = new Date();
    operator:string = "";
    weight1Value:number = 0;
    weight2Value:number = 0;
    massNetto:number = 0;
    massAssortmentNetto:number = 0;
    netto:number = 0;
    carWeightId:number = 0;
    carWeightName:string = "";
    assortment:Assortment = new Assortment();
    carWeight:CarWeight = new CarWeight();
    contractor:Contractor = new Contractor();
}