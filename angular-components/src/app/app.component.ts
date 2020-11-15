import { Component } from '@angular/core';
export interface Post {
  title: string
  text: string
  id?:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
posts: Post[] = [
  {title: 'Angular Components', text: 'I want to learn Angular Componetns' , id:1},
  {title: 'Angular Directives', text: 'I want to learn Angular Directives' , id:2}
]
updatePost(post: Post) {
 this.posts.unshift(post)
}
}
