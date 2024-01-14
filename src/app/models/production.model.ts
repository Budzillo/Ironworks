export class Production{
    public productionId:number = 0;
    public furnaceId:number = 0;
    public assortmentId:number = 0;
    public status:number = 0;
    public efficiency:number = 0;
    public brutto:number = 0;
    public netto:number = 0;
    public stopTimeCount:number = 0;
    public furnaceEnergy:number = 0;
    public clot:number = 0;
    public accretion:number = 0;
    public sideTransport:number = 0;
    public wasteCollection:number = 0;
    public date:Date = new Date();
    public userId:number = 0;

    public assortmentName:string = "";
    public furnaceName:string = "";
    public furnaceKindName:string = "";
    public furnaceTypeName:string = "";
    public userFullName:string = "";
}