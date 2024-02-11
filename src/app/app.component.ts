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
  public units = 'metric';
  private curSort: {field: string, dir: string} = {field: '', dir: ''};

  public ngOnInit(): void {
    this.swords.push(this.swordData[0]);
    this.swords.push(this.swordData[1]);
    this.swords.push(this.swordData[4]);
  }

  public showAll() {
    this.swords = [];
    this.swordData.forEach((sword) => this.swords.push(sword));
  }

  public getLength(valInCm: number): number {
    return this.units === 'metric' ? valInCm : valInCm * 0.393701;
  }

  public getWeight(valInG: number): number {
    return this.units === 'metric' ? valInG : valInG * 0.00220462;
  }

  public sort(sortBy: string) {
    const key = sortBy as keyof Sword;
    const newDir = this.curSort.field === sortBy && this.curSort.dir === 'asc' ? 'desc' : 'asc';
    const sortConst = newDir === 'asc' ? 1 : -1;
    this.swords.sort((a, b) => {
      const aVal = a[key]!;
      const bVal = b[key]!;

      if (aVal === bVal) {
        return 0;
      }

      return aVal > bVal ? 1 * sortConst : -1 * sortConst;
    });

    this.curSort = {field: sortBy, dir: newDir};
  }

  get lengthUnit(): string {
    return this.units === 'metric' ? 'cm' : '"'
  }

  get weightUnit(): string {
    return this.units === 'metric' ? 'g' : 'lbs';
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
