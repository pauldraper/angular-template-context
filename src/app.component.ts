import { Component } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Data {
  a: string;
  b: string;
}

@Component({
  selector: 'app-root',
  template: `
    Hello World!
    <ng-container *ngIf="data(); let d">
      {{ d.a }}
      {{ d.c }}
    </ng-container>
  `,
})
export class AppComponent {
  data() {
    console.log('data');
    return { a: '1', b: '2' };
  }
}
