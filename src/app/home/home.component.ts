import { Component, OnInit } from '@angular/core';
import { menJeans } from 'src/Data/Men/men_jeans';
import { menKurta } from 'src/Data/Men/men_kurta';
import { womenLengha } from 'src/Data/Women/LenghaCholi';
import { womenJeans } from 'src/Data/Women/women_jeans';
import { mensShoesPage1 } from 'src/Data/shoes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  menJeans: any;
  womenJeans: any;
  lenghaCholi: any;
  mensKurta: any;
  shoes: any;
  ngOnInit(): void {
    this.menJeans = menJeans.slice(0, 5);
    this.womenJeans = womenJeans.slice(0, 5);
    this.lenghaCholi = womenLengha.slice(0, 5);
    this.mensKurta = menKurta.slice(0, 5);
    this.shoes = mensShoesPage1.slice(0, 5);
  }
}
