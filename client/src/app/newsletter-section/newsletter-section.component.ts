import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NewsLetterService } from './news-letter.service'

@Component({
  selector: 'app-newsletter-section',
  templateUrl: './newsletter-section.component.html',
  styleUrls: ['./newsletter-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
  'providers': [NewsLetterService]
})
export class NewsletterSectionComponent implements OnInit {

  // init props
  email = new FormControl('', [Validators.required, Validators.email]);
  subscribed: boolean;
  emailExist: boolean;
  constructor(private _newsletter: NewsLetterService) { }

  ngOnInit() {
  }
  emailIsExist() {
    this.emailExist = true;
    this.subscribed = false;
  }
  hepassed() {
    this.emailExist = false;
    this.subscribed = true;
  }

  subscribe(subscriber_email) {
    if (!this.email.invalid) {
      this.email.setValue(subscriber_email);
      const newSubscriber = {
        email: subscriber_email
      }
      this._newsletter.sendSubscriber(newSubscriber).subscribe(
        noError => {
          this.hepassed()
        },
        err => {
          if (err.error.code == 11000) {
            this.emailIsExist()
          } 
          console.log(err)
        })

    };
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : ''
  }
}
