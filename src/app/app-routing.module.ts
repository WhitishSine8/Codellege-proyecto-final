import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaslGuard } from './masl.guard';
import { PublicPageComponent } from './components/public-page/public-page.component';
import { RestrictedPageComponent } from './components/restricted-page/restricted-page.component';

const routes: Routes = [
  { path: "publicPage", component: PublicPageComponent }, 
  { path: "restrictedPage", component: RestrictedPageComponent, canActivate: [MaslGuard] }, 
  // { path: "**", component: PublicPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
