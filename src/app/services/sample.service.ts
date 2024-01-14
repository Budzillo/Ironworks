import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, catchError } from "rxjs";
import { ChemicalElement } from "../models/chemicalElement.model";
import { Injectable } from "@angular/core";
import { environement } from "../environement";
import { ChemicalCompound } from "../models/chemicalCompound.model";
import { Assortment } from "../models/assortment.model";
import { MaterialGroup } from "../models/materialGroup.model";
import { Material } from "../models/material.model";
import { ViewSample } from "../models/viewSample.model";
import { BaseService } from "./base.service";
import { Sample } from "../models/sample.model";
import { SampleHistory } from "../models/sampleHistory.model";
@Injectable({
    providedIn:'root'
})
export class SampleService extends BaseService{
    url = "sample";
    
    public getChemicalElements() : Observable<ChemicalElement[]>{
        return this.http.get<ChemicalElement[]>(`${environement.apiUrl}${this.url}/getChemicalElements`);
    }
    public insertChemicalElement(chemicalElement:ChemicalElement) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/insertChemicalElement`,chemicalElement,this.httpPostOptions);
    }
    public updateChemicalElement(chemicalElement:ChemicalElement) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/updateChemicalElement`,chemicalElement,this.httpPostOptions);
    }
    public deleteChemicalElement(chemicalElementId:number): Observable<boolean>{
        return this.http.delete<boolean>(`${environement.apiUrl}${this.url}/deleteChemicalElement/${chemicalElementId}`,this.httpPostOptions);
    }
    public getChemicalCompounds() : Observable<ChemicalCompound[]>{        
        return this.http.get<ChemicalCompound[]>(`${environement.apiUrl}${this.url}/getChemicalCompounds`);
    }    
    public insertChemicalCompound(chemicalCompound:ChemicalCompound) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/insertChemicalCompound`,chemicalCompound,this.httpPostOptions);
    }
    public updateChemicalCompound(chemicalCompound:ChemicalCompound) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/updateChemicalCompound`,chemicalCompound,this.httpPostOptions);
    }
    public deleteChemicalCompound(chemicalCompoundId:number): Observable<boolean>{
        return this.http.delete<boolean>(`${environement.apiUrl}${this.url}/deleteChemicalCompound/${chemicalCompoundId}`,this.httpPostOptions);
    }
    public getAssortments() : Observable<Assortment[]>{
        return this.http.get<Assortment[]>(`${environement.apiUrl}${this.url}/getAssortments`);
    }
    public deleteAssortment(assortmentId:number) : Observable<boolean>{
        return this.http.delete<boolean>(`${environement.apiUrl}${this.url}/deleteAssortment/${assortmentId}`,this.httpPostOptions);
    }
    public saveAssortment(assortment:Assortment) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/saveAssortment`,assortment,this.httpPostOptions);
    }
    public getMaterialGroups() : Observable<MaterialGroup[]>{
        return this.http.get<MaterialGroup[]>(`${environement.apiUrl}${this.url}/getMaterialGroups`);
    }
    public checkIfAnyMaterialIsConnectedWithMaterialGroup(materialGroupId:number) : Observable<boolean>{
        return this.http.get<boolean>(`${environement.apiUrl}${this.url}/isAnyMaterialConnectedWithMaterialGroup/${materialGroupId}`);
    }
    public saveMaterialGroup(materialGroup:MaterialGroup) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/saveMaterialGroup`,materialGroup,this.httpPostOptions);
    }
    public deleteMaterialGroup(materialGroupId:number) : Observable<boolean>{
        return this.http.delete<boolean>(`${environement.apiUrl}${this.url}/deleteMaterialGroup/${materialGroupId}`,this.httpPostOptions);
    }
    public getMaterials() : Observable<Material[]>{
        return this.http.get<Material[]>(`${environement.apiUrl}${this.url}/getMaterials`);
    }
    public getMaterialByGroups(materialGroupsIds:number[]) : Observable<Material[]>{
        return this.http.get<Material[]>(`${environement.apiUrl}${this.url}/getMaterialByGroups`);
    }
    public saveMaterial(material:Material) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/saveMaterial`,material,this.httpPostOptions);
    }
    public deleteMaterial(materialId:number) : Observable<boolean>{
        return this.http.delete<boolean>(`${environement.apiUrl}${this.url}/deleteMaterial/${materialId}`,this.httpPostOptions);
    }
    public getViewSamples() : Observable<ViewSample[]>{
        return this.http.get<ViewSample[]>(`${environement.apiUrl}${this.url}/getViewSamples`);
    }
    public getSamples() : Observable<Sample[]>{
        return this.http.get<Sample[]>(`${environement.apiUrl}${this.url}/getSamples`);
    }
    public getSampleHistories() : Observable<SampleHistory[]>{
        return this.http.get<SampleHistory[]>(`${environement.apiUrl}${this.url}/getSampleHistories`);
    }
    public saveSample(sample:Sample) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/saveSample`,sample,this.httpPostOptions);
    }
    public deleteSample(sampleId:number) : Observable<boolean>{
        return this.http.delete<boolean>(`${environement.apiUrl}${this.url}/deleteSample/${sampleId}`,this.httpPostOptions);
    }
}