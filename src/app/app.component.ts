import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  display=false;
  change(){
    this.display=!this.display;
  }
   data = [{name:"paramashivam"},{name:"paramasiva"},{name:"parama"}];
   tempcontext = {$implicit:"Implicit name",name:"Custom name"};
}
