import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { Register } from 'src/app/core/models/register.model';
import { RegisterService } from 'src/app/core/services/register/register.service';
import * as registerActions from '../actions/register.actions';

@Injectable()
export class RegisterEffects {
  constructor(
    private actions$: Actions,
    private registerService: RegisterService
  ) {}

  createRegister$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerActions.CREATE_REGISTER),
      exhaustMap((action: { register: Register }) =>
        this.registerService.register(action.register).pipe(
          map(() =>
            registerActions.createRegisterSuccess({
              message: 'El registro ha sido exitoso.',
            })
          ),
          catchError(() =>
            of(
              registerActions.createRegisterFailure({
                message: 'Ha ocurrido un error',
              })
            )
          )
        )
      )
    )
  );
}
