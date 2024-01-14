import { ChemicalCompound } from "./chemicalCompound.model";
import { Sample } from "./sample.model";

export class SampleChemicalCompound{
    public sampleChemicalCompoundId:number = 0;
    public sampleId:number = 0;
    public value:number = 0;
    public chemicalCompoundId:number = 0;
    public chemicalCompoundName?:string = "";    
    public ordinalNumber:number = 0;
    public chemicalCompound:ChemicalCompound = new ChemicalCompound();
    public sample:Sample = new Sample();
}