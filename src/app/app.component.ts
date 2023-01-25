import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  showFirst:boolean= true;
  display:string="initial";
  emaill="pv@gmail.com";
  password="priyasathu15";
  re_password="priyasathu15";
  username="pv";
  address="bangalore";

  toggle()
{
  this.showFirst=!this.showFirst;
}
 
}
