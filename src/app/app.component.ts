import { Component, HostBinding, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @HostBinding('class.my-app') hostClass = true;
  name = 'Angular ' + VERSION.major;
}
