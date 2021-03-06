import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

import { ICause } from '../shared/interfaces/cause';

@Injectable({
  providedIn: 'root'
})
export class CausesService {
  causes: ICause[];

  readonly selectedCause: ICause;

  constructor(private http: HttpClient) { }

  load(id?: string) {
    return this.http.get<ICause[] | ICause>(`http://localhost:3000/causes${id ? `/${id}` : ''}`).pipe(tap(causes => {
      this.causes = [].concat(causes);
    }));
  }

  donate(amount: number) {
    return this.http.put(
      `http://localhost:3000/causes/${this.selectedCause._id}`,
      { body: {collectedAmount: amount + this.selectedCause.collectedAmount} }
      );
  }

  selectCause(cause: ICause) {
    (this as any).selectedCause = cause;
  }
}
