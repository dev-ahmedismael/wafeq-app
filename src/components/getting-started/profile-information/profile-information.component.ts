import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { noWhitespaceValidator } from '../../../shared/validators';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-information',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgOptimizedImage],
  templateUrl: './profile-information.component.html',
  styleUrl: './profile-information.component.scss',
})
export class ProfileInformationComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  profileInformationForm = this.fb.group({
    first_name: [
      '',
      [Validators.required, Validators.minLength(3), noWhitespaceValidator],
    ],
    last_name: [
      '',
      [Validators.required, Validators.minLength(3), noWhitespaceValidator],
    ],
    phone_number: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/
        ),
      ],
    ],
  });

  get first_name() {
    return this.profileInformationForm.controls['first_name'];
  }
  get last_name() {
    return this.profileInformationForm.controls['last_name'];
  }
  get phone_number() {
    return this.profileInformationForm.controls['phone_number'];
  }

  submit() {
    this.profileInformationForm.markAllAsTouched();
    if (typeof window !== 'undefined') {
      let tenantID = localStorage.getItem('tenant_id');
      let data: any = this.profileInformationForm.value;
      data.tenant_id = tenantID;
      this.authService.sendProfileInformation(data).subscribe({
        next: () => {
          this.router.navigateByUrl('/getting-started/company-information');
        },
      });
    }
  }
}
