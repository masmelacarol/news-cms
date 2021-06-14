import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError, concatMap, distinct, reduce } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Program } from '../../models/programs.model';
@Injectable({
  providedIn: 'root',
})
export class ProgramsService {
  constructor(private http: HttpClient) {}

  getAllPrograms() {
    return this.http.get<Program[]>(`${environment.url_api}/programas`).pipe(
      catchError(this.handleError),
      concatMap(from),
      distinct((response: Program) => response.id),
      reduce(
        (programs: Program[], program: Program) => [...programs, program],
        []
      )
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error);
  }
}
