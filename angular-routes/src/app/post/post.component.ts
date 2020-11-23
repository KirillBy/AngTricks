import { Post, PostsService } from './../posts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  post: Post;
  constructor(private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.post = data.post;
    });
    // this.route.params.subscribe( (params: Params) => {
    //   console.log(params);
    //   this.post = this.postService.getById(+params.id);
    // });
  }
  loadPost(): void {
    this.router.navigate(['/posts', 44]);
  }
}
