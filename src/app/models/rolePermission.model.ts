import { Permission } from "./permission.model";
import { Role } from "./role.model";

export class RolePermission{
    public roleId:number = 0;
    public permissionId:number = 0;
    public roleName:string = "";
    public permissionName:string = "";
    public permission:Permission = new Permission();
    public role:Role = new Role();
}