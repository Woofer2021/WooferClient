import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

/**
 * component for createing a post
 */
@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css'],
})
export class PosterComponent implements OnInit {
  /**
   * body of the post
   */
  body: string;
  /**
   * weither their is a user
   * this is paired with a directive that decides wither the component is even shown
   */
  userExists: boolean;

  /**
   * @param thingThatPosts injected post service
   */
  constructor(private thingThatPosts: PostService) {}

  /**
   * determins weither a user exists
   */
  ngOnInit(): void {
    this.userExists = !!localStorage.getItem('username');
  }

  /**
   * posts the post
   */
  submit(): void {
    this.thingThatPosts.post(this.body).subscribe();
    this.body = '';
  }
}
