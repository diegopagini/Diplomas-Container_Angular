import { Component, Input, OnInit } from '@angular/core';
import { Diploma } from 'src/app/models/diploma.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() diplomas: Diploma[];

  ngOnInit(): void {
    this.diplomas = this.diplomas.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }
}
