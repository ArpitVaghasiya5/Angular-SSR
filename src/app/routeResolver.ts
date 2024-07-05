import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { constants } from '../environments/constants';
import { environment } from '../environments/environment';

export const routeResolver: ResolveFn<any> = (
  route,
  state
) => {
  
  const httpClient = inject(HttpClient);
  const router = inject(Router);

  return httpClient.get(environment.apiurl + constants.getData).pipe(
    catchError((error) => {
      console.error('Error in route resolver:', error);
      router.navigateByUrl('/not-found');
      return EMPTY;
    })
  );
};
