import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'umituz';

  message(value) {
    console.log(value);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.message(this.title);
  }

}
