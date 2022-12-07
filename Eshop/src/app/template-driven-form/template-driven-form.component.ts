import { Component, OnInit } from '@angular/core';
import { Driven } from '../model/driven';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  //:TemplateDrivenFormComponent
driven : Driven | undefined;
  constructor() { }

  ngOnInit(): void {
    this.driven= new Driven;
  }

}
