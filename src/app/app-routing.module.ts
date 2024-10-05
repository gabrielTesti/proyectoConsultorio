import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {path: "welcome", component: WelcomePageComponent },
  {path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {path: "main", component: MainPageComponent}
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
