import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicPageComponent } from './components/public-page/public-page.component';
import { RestrictedPageComponent } from './components/restricted-page/restricted-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { NavbarComponent } from './components/navbar/navbar.component';


export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: "141cdeb6-6e87-40f1-9052-da07858a06e0",
      redirectUri: "http://localhost:4200"
    }
  })
}
@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent,
    RestrictedPageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule,
    NgbModule,
    AuthModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
