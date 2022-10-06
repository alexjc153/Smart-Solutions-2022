import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SendEmailService {
  constructor(private httpClient: HttpClient) {}

  sendFormContact(dataForm: any) {
    return this.httpClient.post(
      'https://enviandomails.herokuapp.com/api/send-email',
      dataForm
    );
  }
}
