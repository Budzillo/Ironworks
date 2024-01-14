import { Observable } from "rxjs/internal/Observable";
import { environement } from "../environement";
import { BaseService } from "./base.service";
import { Furnace } from "../models/furnace.model";
import { Injectable } from "@angular/core";
import { FurnaceType } from "../models/furnaceType.model";
import { FurnaceKind } from "../models/furnaceKind.model";
@Injectable({
    providedIn:'root'
})
export class FurnaceService extends BaseService{
    url = "furnace";
    public getFurnaces() : Observable<Furnace[]>{
        return this.http.get<Furnace[]>(`${environement.apiUrl}${this.url}/getFurnaces`);
    }
    public saveFurnace(furnace:Furnace) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/saveFurnace`,furnace,this.httpPostOptions);
    }
    public deleteFurnace(furnaceId:number): Observable<boolean>{
        return this.http.delete<boolean>(`${environement.apiUrl}${this.url}/deleteFurnace/${furnaceId}`,this.httpPostOptions);
    }
    public getFurnaceTypes() : Observable<FurnaceType[]>{
        return this.http.get<FurnaceType[]>(`${environement.apiUrl}${this.url}/getFurnaceTypes`)
    }
    public deleteFurnaceType(furnaceTypeId:number) : Observable<boolean>{
        return this.http.delete<boolean>(`${environement.apiUrl}${this.url}/deleteFurnaceType/${furnaceTypeId}`,this.httpPostOptions);
    }
    public saveFurnaceType(furnaceType:FurnaceType) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/saveFurnaceType`,furnaceType,this.httpPostOptions);
    }
    public getFurnaceKinds() : Observable<FurnaceKind[]>{
        return this.http.get<FurnaceKind[]>(`${environement.apiUrl}${this.url}/getFurnaceKinds`)
    }
    public deleteFurnaceKind(furnaceKindId:number) : Observable<boolean>{
        return this.http.delete<boolean>(`${environement.apiUrl}${this.url}/deleteFurnaceKind/${furnaceKindId}`,this.httpPostOptions);
    }
    public saveFurnaceKind(furnaceKind:FurnaceKind) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/saveFurnaceKind`,furnaceKind,this.httpPostOptions);
    }
}