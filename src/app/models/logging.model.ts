import { Permission } from "./permission.model";
import { Role } from "./role.model";

export class LoggingModel{
    public loggedUserId?:number;
    public permissions?:Permission[];
    public role?:Role;
    public isLogged:boolean = false;
    public isBlocked:boolean = false;
    public isResetPassword:boolean = false;
    public isLoggingError:boolean = false;
    public login:string = "";
    public userFullName:string = "";
}