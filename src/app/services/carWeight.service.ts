import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { CarWeight } from "../models/carWeight.model";
import { environement } from "../environement";
import { CarWeightPosition } from "../models/carWeightPosition.model";
@Injectable({
    providedIn:'root'
})
export class CarWeightService extends BaseService{
    url = "carWeight";
    public getCarWeights() : Observable<CarWeight[]>{
        return this.http.get<CarWeight[]>(`${environement.apiUrl}${this.url}/getCarWeights`);
    }
    public getCarWeightPositions() : Observable<CarWeightPosition[]>{
        return this.http.get<CarWeightPosition[]>(`${environement.apiUrl}${this.url}/getCarWeightPositions`);
    }
    public getCarWeightPositionsByDate(dateStart:Date,dateEnd:Date,carWeightId:number) : Observable<CarWeightPosition[]>{
        return this.http.get<CarWeightPosition[]>(`${environement.apiUrl}${this.url}/getCarWeightPositions/${dateStart.toJSON()}&${dateEnd.toJSON()}&${carWeightId}`);
    }
}