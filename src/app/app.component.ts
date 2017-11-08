import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'Chris Kayode Alayode Samuel Jr.';
  public socialFlare = ' Follow me on';
  public socialNetwork1 = 'Twitter';
  public socialNetwork2 = 'LinkedIn';
  public socialNetwork3 = ' Github';
  public emailAddress = 'email';
  public AltSocialBlurb = 'or send me an';

  ngOnInit() {}

}
