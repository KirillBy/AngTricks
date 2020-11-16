import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PostComponent } from './post/post.component';
export interface Post {
  title: string
  text: string
  id?:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{
ngOnInit(): void {
  setTimeout(() => {
    console.log("timeout")
    this.posts[0] = {title:'changed', text:'changed2', id:23}
  }, 5000);
}
posts: Post[] = [
  {title: 'Angular Components', text: 'I want to learn Angular Componetns' , id:1},
  {title: 'Angular Directives', text: 'I want to learn Angular Directives' , id:2}
]
updatePost(post: Post) {
 this.posts.unshift(post)
}
remove(id:number){
  console.log("Post with id "  + id + " has been deleted");
  this.posts = this.posts.filter(x => x.id !== id);
}
}
