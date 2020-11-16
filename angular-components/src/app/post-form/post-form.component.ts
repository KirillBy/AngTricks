import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new  EventEmitter<Post>()
  @ViewChild('titleInput', {static: false}) inputRef: ElementRef
  title: string = ''
  text: string = ''
  constructor() { }

  ngOnInit(): void {

  }

  addPost() {
    if(this.text.trim() && this.title.trim()){
      const post: Post = {
        id: Math.random(),
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post)
    }
  }
  focusTitile(){
    this.inputRef.nativeElement.focus()
  }

}
