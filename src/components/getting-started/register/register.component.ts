import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordConfirmValidator } from '../../../shared/validators';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from '../../../shared/error-message/error-message.component';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ErrorMessageComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password_confirm: ['', [Validators.required, passwordConfirmValidator]],
  });

  get email() {
    return this.registerForm.controls['email'];
  }
  get password() {
    return this.registerForm.controls['password'];
  }
  get password_confirm() {
    return this.registerForm.controls['password_confirm'];
  }

  errorMessage: string | null = null;

  submit() {
    this.registerForm.markAllAsTouched();
    if (this.password.value !== this.password_confirm.value) {
      this.errorMessage = 'كلمة المرور التي أدخلتها غير متطابقة.';
    } else {
      this.authService.register(this.registerForm.value).subscribe({
        next: (res: any) => {
          console.log(res);

          if (typeof window !== 'undefined') {
            localStorage.setItem('tenant_id', res.tenant.id);
            localStorage.setItem('token', res.token);
          }
          this.router.navigateByUrl('/getting-started/profile-information');
        },
        error: (err) => {
          console.log(err);

          this.errorMessage =
            'تعذر الاتصال بقاعدة البيانات في الوقت الحالي، يرجى المحاولة مرة أخرى لاحقاً.';
        },
      });
    }
  }
}
