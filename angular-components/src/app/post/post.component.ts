import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy {

  @Output() onRemove:EventEmitter<number> = new EventEmitter<number>()
  @Input() post: Post
  @ContentChild('info', {static: true}) infoRef: ElementRef
  constructor() { 
    console.log('Constructor')
  }
  removePost() {
    this.onRemove.emit(this.post.id);
  }

  ngAfterContentInit(): void {
    console.log('afterContentInit')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }
  ngOnDestroy(): void {
    console.log('onDestroy');
  }

}
