import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {
  public sidebarState: 'expanded' | 'collapsed' =  'collapsed';

  constructor(private breakpointObserver: BreakpointObserver) { }

  getBreakpointHeader() {
    return this.breakpointObserver.observe('(max-width: 610px)').pipe(
      map((e) => e.matches)
    )
  }

  toggleSidebar() {
    this.sidebarState === 'expanded' ? this.sidebarState = 'collapsed': this.sidebarState = 'expanded';
  }


}
