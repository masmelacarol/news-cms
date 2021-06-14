import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { getPrograms } from '../../../redux/actions/programs.actions';
import { createRegister } from '../../../redux/actions/register.actions';
import * as fromPrograms from '../../../redux/selectors/programs.selector';
import * as fromRegister from '../../../redux/selectors/register.selector';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  declare form: FormGroup;
  programList$ = this.store.pipe(select(fromPrograms.getPrograms));

  constructor(
    private formBuilder: FormBuilder,
    private readonly store: Store,
    private snackBar: MatSnackBar
  ) {
    this.store.dispatch(getPrograms());
    this.buildForm();
    this.store
      .pipe(select(fromRegister.createRegister))
      .subscribe(({ statusMessage, isLoadingSuccess, isLoadingFailure }) => {
        if (isLoadingSuccess || isLoadingFailure) {
          this.snackBar.open(
            `${isLoadingSuccess ? '✔' : '❌'} ${statusMessage} `,
            undefined,
            {
              horizontalPosition: 'center',
              verticalPosition: 'top',
            }
          );
        }
      });
  }

  get nameField() {
    return this.form.get('name');
  }
  get familyNameField() {
    return this.form.get('family_name');
  }

  get emailField() {
    return this.form.get('email');
  }
  get phoneField() {
    return this.form.get('phone');
  }
  get programField() {
    return this.form.get('program');
  }
  get commentField() {
    return this.form.get('comment');
  }

  ngOnInit(): void {}

  register() {
    if (this.form.valid) {
      console.log('this.form.value', this.form.value);
      const program = this.programField?.value;
      this.store.dispatch(
        createRegister({
          register: { ...this.form.value, program: program + '' },
        })
      );
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: [, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      family_name: [, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: [, [Validators.email]],
      phone: [, [Validators.min(1000000), Validators.max(9999999999)]],
      program: [, []],
      comment: [],
    });
  }
}
