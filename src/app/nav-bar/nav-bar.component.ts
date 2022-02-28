import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  toggleSMR = false;
  toggleDAW = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}


  toggle(curso:string){
    if (curso=='smr'){
      this.toggleSMR = this.toggleSMR?false:true;
      this.toggleDAW = false;
    } else{
      this.toggleDAW = this.toggleDAW?false:true;
      this.toggleSMR = false;
    }

  }
}
