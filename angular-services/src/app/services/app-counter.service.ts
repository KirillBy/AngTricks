import { Injectable } from '@angular/core'
import { LogService } from './log.service'

@Injectable({
    providedIn: 'root'
})
export class AppCounterService {
    /**
     *
     */
    constructor(public logService: LogService) {

    }
    counter = 0
    increase() {
        this.logService.log('increse counter')
        this.counter++
    }

    decrease() {
        this.logService.log('decrese counter')

        this.counter--
    }
}