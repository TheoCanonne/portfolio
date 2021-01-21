import { Component, OnInit } from '@angular/core';
import { SubscriptionManager } from '@portfolio/utils-services';
import { Observable } from 'rxjs';
import { BreakpointsService } from '../../../core/services/breakpoints.service';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends SubscriptionManager implements OnInit {

  needMenu$: Observable<boolean>;

  constructor(
    public breakpointsService: BreakpointsService,
  ) {
    super();
  }

  ngOnInit() {
    this.needMenu$ = this.breakpointsService.getBreakpointHeader();
  }
}
