import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Codellege-proyecto-final';
  constructor(private msalService: MsalService) {
    //msalService.instance.getActiveAccount
  }
  ngOnInit(): void {
    this.msalService.instance.handleRedirectPromise().then(
      res => {
        if(res != null && res.account != null) {
          this.msalService.instance.setActiveAccount(res.account)
        }
      }
    )
  }

  login() {
    this.msalService.loginRedirect();
    // this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
    //   this.msalService.instance.setActiveAccount(response.account)
    // });
  }

  isLoggedIn():boolean {
    return this.msalService.instance.getActiveAccount() != null
  }

  logout() {
    this.msalService.logout();
  }
}
