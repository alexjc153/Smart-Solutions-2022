import { SendEmailService } from './../../services/send-email.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form!: UntypedFormGroup;
  buttonText = 'Enviar';
  isSending = false;
  statusCreate: 'loading' | 'success' | 'error' | 'init' = 'init';

  constructor(
    private formBuilder: UntypedFormBuilder,
    private sendEmailService: SendEmailService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm() {
    this.form = this.formBuilder.group({
      ruc: [
        '',
        [
          Validators.required,
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      fullname: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$'),
        ],
      ],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  get rucField() {
    return this.form.get('ruc');
  }
  get fullnameField() {
    return this.form.get('fullname');
  }
  get emailField() {
    return this.form.get('email');
  }
  get phoneField() {
    return this.form.get('phone');
  }
  get subjectField() {
    return this.form.get('subject');
  }
  get messageField() {
    return this.form.get('message');
  }

  get isRucValid() {
    return this.rucField!.touched && this.rucField!.valid;
  }

  get isRucInvalid() {
    return this.rucField!.touched && this.rucField!.invalid;
  }

  get isFullNameValid() {
    return this.fullnameField!.touched && this.fullnameField!.valid;
  }

  get isFullNameInvalid() {
    return this.fullnameField!.touched && this.fullnameField!.invalid;
  }

  get isEmailValid() {
    return this.emailField!.touched && this.emailField!.valid;
  }

  get isEmailInvalid() {
    return this.emailField!.touched && this.emailField!.invalid;
  }

  get isPhoneValid() {
    return this.phoneField!.touched && this.phoneField!.valid;
  }

  get isPhoneInvalid() {
    return this.phoneField!.touched && this.phoneField!.invalid;
  }

  get isSubjectValid() {
    return this.subjectField!.touched && this.subjectField!.valid;
  }

  get isSubjectInvalid() {
    return this.subjectField!.touched && this.subjectField!.invalid;
  }

  get isMessageValid() {
    return this.messageField!.touched && this.messageField!.valid;
  }

  get isMessageInvalid() {
    return this.messageField!.touched && this.messageField!.invalid;
  }

  sendMessage() {
    this.isSending = true;
    this.sendEmailService
      .sendFormContact(this.form.value)
      .subscribe((res: any) => {
        Swal.fire({
          icon: res.icon,
          title: res.title,
          html: res.message,
        });
        this.isSending = false;
        this.form.reset();
      });
  }
}
