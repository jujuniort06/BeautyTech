import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name    : string;  
  symbol  : string;

  weight  : number;  
  position: number;
}

const TABLE_DATA: PeriodicElement[] = [
  {position: 1,  name: 'Hydrogen',  weight: 58, symbol: 'aqsw'},
  {position: 2,  name: 'Helium',    weight: 60, symbol: 'aqsw'},
  {position: 3,  name: 'Lithium',   weight: 45, symbol: 'asse'},
  {position: 4,  name: 'Beryllium', weight: 50, symbol: 'aqss'},
  {position: 5,  name: 'Boron',     weight: 95, symbol: 'aqss'},
  {position: 6,  name: 'Carbon',    weight: 88, symbol: 'aqsw'},
  {position: 7,  name: 'Nitrogen',  weight: 80, symbol: 'aqsw'},
  {position: 8,  name: 'Oxygen',    weight: 82, symbol: 'aqdd'},
  {position: 9,  name: 'Fluorine',  weight: 84, symbol: 'asdd'},
  {position: 10, name: 'Neon',      weight: 79, symbol: 'asdd'},
];

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = TABLE_DATA;
  
  constructor() { }

  ngOnInit() {
  }

}
