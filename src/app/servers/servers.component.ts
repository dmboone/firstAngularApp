import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // you can inline your html by using template instead of templateURL!
  // if you decide not to do inline html here, then just make sure you use the templateURL instead and link to separate html file
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() { // method that is executed at the point of time this component is created
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
