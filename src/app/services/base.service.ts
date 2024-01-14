import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';

@Injectable({
    providedIn:'root'
})
export class BaseService{
    locale: string = 'en-US';
    format: string = 'dd-mm-yyyy'
    constructor(public http:HttpClient){

    }
    public httpPostHeaders : HttpHeaders = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    public httpPostOptions = {headers:this.httpPostHeaders}
    public transformDateToString(date:Date) : string{
        return formatDate(date,this.format,this.locale);
    }
}