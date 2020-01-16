import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../_service/authentication.service';

declare var $: any;

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, AfterViewInit {

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    $('.message a').click(function () {
      $('form').animate({height: 'toggle', opacity: 'toggle'}, 'slow');
    });
  }


  register(formData: any) {
  }

  login(formData: any) {
    console.log(formData.value);
    this.authenticationService.login(formData.value.username, formData.value.password).subscribe(succ => console.log(succ));
  }


}
