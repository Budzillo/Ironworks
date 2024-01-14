import { Sample } from "./sample.model";

export  class SampleHistory{
    public sampleHistoryId:number = 0;
    public description:string = "";
    public date:Date = new Date();
    public sampleId:number = 0;
    public sample:Sample = new Sample();
}