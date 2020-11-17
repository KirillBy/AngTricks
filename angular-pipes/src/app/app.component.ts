import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  title: string,
  text: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  e: number = Math.E
  str: string = 'hello world'
  date: Date = new Date()
  float: number = 0.42
  obj = {
    a:1,
    b: {
      c:2,
      d: {
        e:3,
        c:4
      }
    }
  }
  search:string = ''
  posts: Post[] = [
    {title:'Beer', text:'Best Beer in the world'},
    {title:'Bread', text:'Best Bread in the world'},
    {title:'Chees', text:'Best Cheese in the world'}
  ]
  searchField:string = 'title'
  addNewPost() {
    this.posts.unshift({
      title: 'Angular 10',
      text: 'Kirill'
    })
  }

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve("Promise resolved")
    }, 4000);
  })

  dateObserv: Observable<Date> = new Observable(obs => {
    setInterval( () => {
      obs.next(new Date())
    }, 1000)
  })


}
