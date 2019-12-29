import { Injectable } from '@angular/core';
import { Iface } from './iface';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor() { }
  fundata():Iface[]{
    return [{pid:1001,pname:'Samsung',pdesc:"New mobile"},
    {pid:1002,pname:'Nokia',pdesc:"Nokia 1122"},
    {pid:1003,pname:'mi',pdesc:"mi note pro"}]
  }
}
