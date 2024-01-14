import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Permission } from "../models/permission.model";
import { LoggingModel } from "../models/logging.model";
import { environement } from "../environement";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class LoggingService extends BaseService{
    url = "logging";
    public loggingModel:LoggingModel = new LoggingModel();
    public login(login:string,password:string) : Observable<LoggingModel>{
        return this.http.get<LoggingModel>(`${environement.apiUrl}${this.url}/login/${login}&${password}`);
    }
    public checkIfPermissionIsInList(name:string){
        console.log('Name: ',name);
        console.log('Permissions: ',this.loggingModel.permissions);
        return this.loggingModel.permissions != undefined && this.loggingModel.permissions.some(element => element.name === name);
    }
}