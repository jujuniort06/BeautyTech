import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

multi : any = [
    {
      "name": "Alemanha",
      "series": [
        {
          "name": "1990",
          "value": 112000000
        },
        {
          "name": "2000",
          "value": 98000000
        },
        {
          "name": "2005",
          "value": 71000000
        },
        {
          "name": "2010",
          "value": 73000000
        },
        {
          "name": "2011",
          "value": 89400000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "1990",
          "value": 250000000
        },
        {
          "name": "2010",
          "value": 309000000
        },
        {
          "name": "2011",
          "value": 311000000
        }
      ]
    },
  
    {
      "name": "França",
      "series": [
        {
          "name": "1990",
          "value": 58000000
        },
        {
          "name": "2010",
          "value": 50000020
        },
        {
          "name": "2011",
          "value": 58000000
        }
      ]
    },
    {
      "name": "UK",
      "series": [
        {
          "name": "1990",
          "value": 5000000
        },
        {
          "name": "2010",
          "value": 262000000
        }
      ]
    }
  ];

  single = [
    {
      "name": "Alemanha",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "França",
      "value": 7200000
    },
      {
      "name": "UK",
      "value": 6200000
    }
  ];

  view   : any[] = [900, 500];
  viewPie: any[] = [900, 500];
  viewBar: any[] = [900, 500];

  legend        : boolean = true;
  showLabels    : boolean = true;
  showLabels2   : boolean = true;
  animations    : boolean = true;
  xAxis         : boolean = true;
  yAxis         : boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  timeline      : boolean = true;
  showLegend    : boolean = true;
  gradient      : boolean = true;
  isDoughnut    : boolean = false;
  showXAxis     : boolean = true;
  showYAxis     : boolean = true;

  xAxisLabel    : string = 'Year';
  yAxisLabel    : string = 'Population';
  legendPosition: string = 'below';

  chartType = '1';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  colorScheme2 = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { 
    
  }

  ngOnInit() {
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
