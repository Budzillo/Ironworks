import { ChemicalElement } from "./chemicalElement.model";
import { Sample } from "./sample.model";

export class SampleChemicalElement{
    public sampleChemicalElementId:number = 0;
    public sampleId:number = 0;
    public value:number = 0;
    public chemicalElementId:number = 0;
    public chemicalElementName?:string = "";
    public ordinalNumber:number = 0;
    public chemicalElement:ChemicalElement = new ChemicalElement();
    public sample:Sample = new Sample();
}