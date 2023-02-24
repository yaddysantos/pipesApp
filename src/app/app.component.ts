import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(
    private primengConfig: PrimeNGConfig,
    private breakPointObserver: BreakpointObserver) {

     //detect screen size changes
     breakPointObserver.observe(["(max-width: 992px)"])
     .subscribe((result: BreakpointState)=>{
      console.log(result);
       if (result.matches) {//Mobile
         console.log('yes');
       }else{//Desktop
         console.log('no');
       }
     });
     
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
