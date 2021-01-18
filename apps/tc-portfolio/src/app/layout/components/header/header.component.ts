import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { SubscriptionManager } from '@portfolio/utils-services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends SubscriptionManager implements OnInit {

  needMenu$: Observable<boolean>;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    super();
  }

  ngOnInit() {
    this.needMenu$ = this.breakpointObserver.observe('(max-width: 610px)').pipe(
      map((e) => e.matches)
    )
  }
}
