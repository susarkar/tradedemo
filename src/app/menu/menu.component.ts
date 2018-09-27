import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { BreakpointObserver, Breakpoints } from '../../../node_modules/@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
  }

}
