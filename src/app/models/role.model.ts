import { RolePermission } from "./rolePermission.model";
import { User } from "./user.model";

export class Role{
    public roleId:number = 0;
    public name:string = "";
    public rolePermissions:RolePermission[]=[];
    public users:User[]=[];
}