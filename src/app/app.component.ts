import { Component, OnInit } from '@angular/core';
import data from '../assets/swords.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'feder-compare';

  public swordData: Array<Sword> = data;
  public swords: Array<Sword> = [];

  public ngOnInit(): void {
    this.swords.push(this.swordData[0]);
    this.swords.push(this.swordData[1]);
    this.swords.push(this.swordData[4]);
  }
}

interface Sword {
  name: string;
  handleLength: number;
  bladeLength: number;
  pob?: number;
  totalWeight: number;
  flex?: number;
  price: number;
  imagePrefix: string;
}
