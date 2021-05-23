import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { FaqComponent } from './faq/faq.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchingProfilesComponent } from './searching-profiles/searching-profiles.component';
import { SearchingComponent } from './searching/searching.component';


const routes: Routes = [
  {path: 'gestisci-profilo', component: ProfileComponent},
  {path: 'accedi', component: SignInComponent},
  {path: 'registrazione', component: SignUpComponent},
  {path: 'cerca-lavoro', component: SearchingComponent},
  {path: 'cerca-candidato', component: SearchingProfilesComponent},
  {path: 'faq', component: FaqComponent},
  {path: '', redirectTo: '/cerca-lavoro', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
