import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ConfigurationComponent } from './configuration/configuration.component';

const childRoutes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'configuration',
    component: ConfigurationComponent
  }
]

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        children: childRoutes
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
