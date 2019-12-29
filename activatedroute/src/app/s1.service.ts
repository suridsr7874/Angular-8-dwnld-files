import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class S1Service {
obj:object=[
  {id:1,cat:"Electronics",pname:"Samsung1122",price:10000,image:'img1.jpg',descp:"Dual sim"},
  {id:2,cat:"Furniture",pname:"woodenchairs",price:3000,image:'img2.jpg',descp:"Rosewood chairs"},
  {id:3,cat:"Electronics",pname:"Nokis",price:7000,image:'img2.jpg',descp:"Black Color"},
  {id:4,cat:"Electronics",pname:"LG Washimg Machine",price:10000,image:'img4.jpg',descp:"Front Load with echo buble"},
  {id:5,cat:"Furniture",pname:"Wooden Dyning",price:20000,image:'img5.jpg',descp:"With Glass  and 4 chairs"},
  {id:6,cat:"Electronics",pname:"BBerry",price:13000,image:'img6.jpg',descp:"Slim With 30MPx cam"},
  
]
  constructor() { }
}
