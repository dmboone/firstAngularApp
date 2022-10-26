// Practice with how to create our own components
// Make sure that you go and list your component inside app.module.ts to actually use it!

import { Component } from "@angular/core"; // must import this to use Component decorator

@Component({ // this is a decorator; we will list some configurations for our component in here
    selector: 'app-server', // this refers to the the html tag by which we are able to use this component later
                            // can also change the selector to be based on class '.app-server' or attribute '[app-server]'
    templateUrl: './server.component.html' // this links us to the html file that will be referenced when we create this component
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';
    // can also write it this way
    // serverId: number = 10;
    // serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}