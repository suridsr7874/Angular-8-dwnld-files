import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private ht:HttpClient) { }
  serLogin(ob)
  {
    return this.ht.post("http://localhost:1000/login",ob)
  }
}
