import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private route : Router){

  }
  
  public exit(){
    console.log('Saindo');
  }

  public homePage() {
    this.route.navigateByUrl('');
  } 
  
  public schedulePage() {
    this.route.navigateByUrl('schedule');
    
  }
  
  public registerPage() {    
    this.route.navigateByUrl('register');
    
  }

  public configurationPage() {
    this.route.navigateByUrl('configuration');
  }

}
