import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail/restaurant-detail.component';
import{ LoginComponent} from './login/login.component'
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component:HomeComponent },
 { path: 'login', component:LoginComponent},
 { path: 'signup', component: SignupComponent},
 { path: 'restaurants', component:RestaurantComponent },
 { path: 'restaurants/:id',      component: RestaurantDetailComponent },
 { path: '**', component: PageNotFoundComponent},
 {
   path: 'sampleURL',
   component: AppComponent,
   data: { title: 'Sample Title Passed' }
 },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }