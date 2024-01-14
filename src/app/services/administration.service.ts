import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { environement } from "../environement";
import { RolePermission } from "../models/rolePermission.model";
import { Role } from "../models/role.model";
import { Permission } from "../models/permission.model";
import { Department } from "../models/department.model";
@Injectable({
    providedIn:'root'
})
export class AdministrationService extends BaseService{
    url = "user";
    public getUsers() : Observable<User[]>{
        return this.http.get<User[]>(`${environement.apiUrl}${this.url}/getUsers`);
    }
    public getUser(userId:number) : Observable<User>{
        return this.http.get<User>(`${environement.apiUrl}${this.url}/getUser/{userId}`);
    }
    public resetUserPassword(userId:number) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/resetUserPassword/${userId}`,this.httpPostOptions);
    }
    public blockUser(userId:number) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/blockUser/${userId}`,this.httpPostOptions);
    }
    public deleteUser(userId:number): Observable<boolean>{
        return this.http.delete<boolean>(`${environement.apiUrl}${this.url}/deleteUser/${userId}`,this.httpPostOptions);
    }
    public saveUser(user:User) : Observable<boolean>{
        console.log(user);
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/saveUser`,user,this.httpPostOptions);
    }
    public getRolePermissionsByRole(roleId:number) : Observable<RolePermission[]>{
        return this.http.get<RolePermission[]>(`${environement.apiUrl}${this.url}/getRolePermissionsByRole/${roleId}`);
    }
    public getRoles() : Observable<Role[]>{
        return this.http.get<Role[]>(`${environement.apiUrl}${this.url}/getRoles`);
    }
    public deleteRole(roleId:number) : Observable<boolean>{
        return this.http.delete<boolean>(`${environement.apiUrl}${this.url}/deleteRole/${roleId}`,this.httpPostOptions);
    }
    public saveRole(role:Role) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/saveRole`,role,this.httpPostOptions);
    }
    public getPermissions() : Observable<Permission[]>{
        return this.http.get<Permission[]>(`${environement.apiUrl}${this.url}/getPermissions`);
    }
    public deletePermission(permissionId:number) : Observable<boolean>{
        return this.http.delete<boolean>(`${environement.apiUrl}${this.url}/deletePermission/${permissionId}`,this.httpPostOptions);
    }
    public savePermission(permission:Permission) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/savePermission`,permission,this.httpPostOptions);
    }
    public getDepartments() : Observable<Department[]>{
        return this.http.get<Department[]>(`${environement.apiUrl}${this.url}/getDepartments`);
    }
    public deleteDepartment(departmentId:number) : Observable<boolean>{
        return this.http.delete<boolean>(`${environement.apiUrl}${this.url}/deleteDepartment/${departmentId}`,this.httpPostOptions);
    }
    public saveDepartment(department:Department) : Observable<boolean>{
        return this.http.post<boolean>(`${environement.apiUrl}${this.url}/saveDepartment}`,department,this.httpPostOptions);
    }
}