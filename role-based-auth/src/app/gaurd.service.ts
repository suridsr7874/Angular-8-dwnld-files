import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot } from '@angular/router';

import decode from "jwt-decode"
@Injectable({
  providedIn: 'root'
})
export class GaurdService implements  CanActivate{
 
canActivate(ac:ActivatedRouteSnapshot){
  if(localStorage.getItem("tok"))
  {
    var data=decode(localStorage.getItem("tok"))
    //alert(data.role)
    if(ac.data.rl ==data.role || data.role=="admin")
    return true;
    else
    {
      alert("Invalid Auth...")
    return false;
    }
  }
  else
  return false;
}
  constructor() { }
}
