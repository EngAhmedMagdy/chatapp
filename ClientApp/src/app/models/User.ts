
export class User{
    public id:number;
    public name:any;
    public socket:any;
   constructor(id?:number,name?:string,socket?:string)
   {
       this.id = id,
       this.name = name,
       this.socket = socket
   }

}