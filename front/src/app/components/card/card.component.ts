import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  movie;

  constructor() {
    console.log("llamada constructor");
   }

  ngOnInit() {
    console.log("llamada ngOnInit", this.movie)
  }

}
