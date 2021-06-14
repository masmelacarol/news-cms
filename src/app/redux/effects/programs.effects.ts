import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { Program } from 'src/app/core/models/programs.model';
import { ProgramsService } from 'src/app/core/services/programs/programs.service';
import * as programsActions from '../actions/programs.actions';

@Injectable()
export class ProgramsEffects {
  constructor(
    private actions$: Actions,
    private programService: ProgramsService
  ) {}

  getPrograms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(programsActions.GET_PROGRAMS),
      exhaustMap((action) =>
        this.programService
          .getAllPrograms()
          .pipe(
            map((response: Program[]) =>
              programsActions.getProgramsSuccess({ programs: response })
            )
          )
      )
    )
  );
}
