import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(private ht:HttpClient) { }
  serGetData(){
  return this.ht.get("http://localhost:1000/getdata")
  }
  serInsdata(ob){
    return this.ht.post("http://localhost:1000/insdata",ob)
  }
  serUpdate(ob)
  {
    return this.ht.post("http://localhost:1000/update",ob)

  }
  serDelData(ob){
    return this.ht.post("http://localhost:1000/deldata",ob)
  }
}
