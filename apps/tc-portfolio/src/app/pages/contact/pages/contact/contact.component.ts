import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { EmailService } from '../../../../core/services/email.service';

@Component({
  selector: 'portfolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactFormGroup: FormGroup;

  constructor(
    private emailService: EmailService,
    private toasterService: NbToastrService
  ) { }

  ngOnInit(): void {
    this.contactFormGroup = new FormBuilder().group({
      name: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      message: [null, Validators.required],
    })
  }

  submitContact() {
    this.emailService.sendEmail();
    setTimeout(() => {
      this.toasterService.success('Votre message a bien été envoyé !', 'Message envoyé');
    }, 1000);
  }

}
