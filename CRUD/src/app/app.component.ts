import { Component } from '@angular/core';
import { S1Service } from './s1.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ord:boolean=false
  data:object;t1:string;t2:string
  constructor(private ser:S1Service){
this.fungetdata()
  }
  tmp=0;tt1;tt2
  fundel(rid){
    this.ser.serDelData({_id:rid}).subscribe((dt:any)=>{
    alert(dt.result)
    this.fungetdata()
    })
  }

//---pagination ----assending order---//
  colname:string="uname"
  funord(cn){
    this.ord=!this.ord
    this.colname=cn
  }

  //---save logic--//
  funsave(){
    var obj={_id:this.tmp,un:this.tt1,ct:this.tt2}
    this.ser.serUpdate(obj).subscribe((dt:any)=>{
      alert(dt.resp)
      this.tmp=0;
      this.fungetdata()
    })
  }
  funedit(robj){
    this.tmp=robj._id
    this.tt1=(robj.uname)
    this.tt2=robj.city
  }
  funinsert(){
    var obj={uname:this.t1,city:this.t2}
    this.ser.serInsdata(obj).subscribe((dt:any)=>{
      alert(dt.result)
      this.t1=this.t2=""
      this.fungetdata()
    })
  }
  fungetdata(){
    this.ser.serGetData().subscribe(dt=>{
this.data=dt
    })
  }
}
