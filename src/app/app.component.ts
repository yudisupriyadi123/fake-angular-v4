import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

    test_method() {
        console.log('Here semicolon is missing')

        // with 140+ characters
        console.log('a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a aaaaaaa a a a a a a a a a a a a a a a a a a a a a a a a a a aaaaaa');

        if (4 > 8)
            console.log('curly ?');
            console.log('curly ?');
    }
}

