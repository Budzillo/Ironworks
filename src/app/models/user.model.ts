import { Department } from "./department.model";
import { Role } from "./role.model";

export class User{
    public userId:number = 0;
    public firstName:string = "";
    public lastName?:string;
    public password:string = "";
    public fullName?:string = "";
    public login:string = "";
    public email?:string;
    public roleId?:number = 0;
    public departmentId?:number = 0;
    public departmentName:string = "";
    public roleName:string = "";
    public role?:Role;
    public department?:Department;
    public isBlocked:boolean = false;
    public isBlockedText:string = "";
}