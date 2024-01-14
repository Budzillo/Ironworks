import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { environement } from "../environement";
import { Production } from "../models/production.model";
import { ProductionMaterial } from "../models/productionMaterial.model";
@Injectable({
    providedIn:'root'
})
export class ProductionService extends BaseService{
    url = "production";
    public getProductions(dateStart:Date,dateEnd:Date) : Observable<Production[]>{
        return this.http.get<Production[]>(`${environement.apiUrl}${this.url}/getProductions/${dateStart}&${dateEnd}`);
    }
    public saveProduction(production:Production) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/saveProduction`,production,this.httpPostOptions);
    }
    public deleteProduction(productionId:number): Observable<boolean>{
        return this.http.delete<boolean>(`${environement.apiUrl}${this.url}/deleteProduction/${productionId}`,this.httpPostOptions);
    }
    public getProductionMaterials(productionId:number) : Observable<ProductionMaterial[]>{
        return this.http.get<ProductionMaterial[]>(`${environement.apiUrl}${this.url}/getProductionMaterials/${productionId}`,this.httpPostOptions);
    }
}