import { Component, OnDestroy } from '@angular/core';
import { SubscriptionLike } from 'rxjs';

@Component({
  template: ''
})
export abstract class SubscriptionManager implements OnDestroy {
  protected subscriptions: SubscriptionLike[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
  }
}
