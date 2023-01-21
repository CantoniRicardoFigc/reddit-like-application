import { Component, Input } from '@angular/core';
import { Post } from '../models/post.models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {

  @Input() post! : Post;

  addLike() {
    this.post.n_like++;
  }
  commenta(c: HTMLInputElement) {
    this.post.commenti.push(c.value);
  }

}
