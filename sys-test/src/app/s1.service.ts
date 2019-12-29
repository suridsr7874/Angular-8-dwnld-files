import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class S1Service {
obj: object=[
  {id:1, cat:"electronics", pname:"laptop", image:'laptop1.jpg', pdesc:"dell"},
  {id:2, cat:"cloths", pname:"t-shirt", image:'kal.jpg', pdesc:"cotton"},
  {id:3, cat:"electronics", pname:"car", image:'a1.jpg', pdesc:"dual sim"},
  {id:4, cat:"furniture", pname:"pouches", image:'woodpou.jpg', pdesc:"wooden"},
  {id:5, cat:"electronics", pname:"iphone", image:'mble3.jpg', pdesc:"simple"},
]
  constructor() { }
}
