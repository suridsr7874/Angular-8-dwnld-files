import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-abcd',
  templateUrl: './abcd.component.html',
  styleUrls: ['./abcd.component.css']
})
export class AbcdComponent implements OnInit {
serno: number;
  constructor(@Inject (ActivatedRoute) private rt) {
    alert(this.serno);
    this.rt.params.subscribe((data) => {
      alert(this.serno);
      this.serno = data. sno;
    } );
  }
  ngOnInit() {
  }

}
