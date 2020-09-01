import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private renderer: Renderer2) {
                this.renderer.removeClass(document.body, 'grey-background-color');
                this.renderer.addClass(document.body, 'black-background-color');
              }

  ngOnInit(): void {
  }

}
