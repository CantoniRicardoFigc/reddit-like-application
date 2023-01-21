import { Component } from '@angular/core';
import { Post } from './models/post.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'angular-like-application';

  lista_post: Post[]=[];

  invia(user: HTMLInputElement, message: HTMLInputElement) {
    this.lista_post.push(new Post(user.value, message.value))
  }

}
