import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // you can inline your html by using template instead of templateURL!
  // if you decide not to do inline html here, then just make sure you use the templateURL instead and link to separate html file
  template: `
  <app-server></app-server>
  <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
