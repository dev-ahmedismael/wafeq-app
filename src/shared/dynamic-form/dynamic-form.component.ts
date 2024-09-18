import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormConfig, FormOptions } from '../../interfaces/form-config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class DynamicFormComponent implements OnInit {
  @Input() config!: FormConfig; // The config passed from parent component
  @Input() formOptions!: FormOptions;
  @Output() formDataEmitter = new EventEmitter<FormData>(); // Emit FormData to parent

  form!: FormGroup;
  fileData: { [key: string]: File[] } = {}; // For single/multiple file inputs

  constructor(private fb: FormBuilder) {}

  get gridClass() {
    return `grid grid-cols-${this.formOptions.cols} gap-5`; // Dynamically set the grid columns
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    const group: any = {};
    this.config.forEach((field: any) => {
      const validationsArray = this.getValidators(field);
      if (field.type === 'file' || field.type === 'files') {
        group[field.name] = ['']; // Files will be handled separately
      } else {
        group[field.name] = [field.value || '', validationsArray];
      }
    });
    this.form = this.fb.group(group);
  }

  getValidators(field: any) {
    const validationArray = [];
    if (field.validations?.required) {
      validationArray.push(Validators.required);
    }
    if (field.validations?.minLength) {
      validationArray.push(Validators.minLength(field.validations.minLength));
    }
    if (field.validations?.email) {
      validationArray.push(Validators.email);
    }
    return validationArray;
  }

  isInvalid(controlName: string) {
    const control = this.form.get(controlName);
    return control && control.invalid && (control.dirty || control.touched);
  }

  getErrorMessage(controlName: string) {
    const control = this.form.get(controlName);
    const field = this.config.find((f: any) => f.name === controlName);

    if (control?.errors) {
      if (control.errors['required']) {
        return field?.errorMessages['required'];
      }
      if (control.errors['minlength']) {
        return field?.errorMessages['minLength'];
      }
      if (control.errors['email']) {
        return field?.errorMessages['email'];
      }
    }
    return null;
  }

  onFileChange(event: any, controlName: string, multiple: boolean = false) {
    const files = multiple
      ? Array.from(event.target.files)
      : [event.target.files[0]];
    this.fileData[controlName] = files;
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = new FormData();

      // Append form fields except files
      Object.keys(this.form.value).forEach((key) => {
        if (
          this.config.find(
            (f: any) =>
              f.type !== 'file' && f.type !== 'files' && f.name === key
          )
        ) {
          formData.append(key, this.form.value[key]);
        }
      });

      // Append files separately
      Object.keys(this.fileData).forEach((key) => {
        this.fileData[key].forEach((file) => {
          formData.append(key, file);
        });
      });

      this.formDataEmitter.emit(formData);
    }
  }
}
