import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  log(test:string){
    console.log(`Log: ${test}`)
  }

  constructor() { }
}
