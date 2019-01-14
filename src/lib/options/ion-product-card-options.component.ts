/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Product options component.
 */

import { ChangeDetectorRef, Component, EventEmitter, ChangeDetectionStrategy } from '@angular/core'

import { ViewController } from 'ionic-angular'
import { NavParams } from 'ionic-angular'

@Component({
    templateUrl: 'ion-product-card-options.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
})

export class IonProductCardOptionsMenu {
    product: any
    options: any
    events: any

    constructor(public viewCtrl: ViewController,
        public navParams: NavParams,
        public changeDetector: ChangeDetectorRef) {
        this.product = navParams.data.product
        this.options = navParams.data.options
        this.events = navParams.data.events
    }

    isDeleted() {
        return this.product && this.product.information && this.product.information.deleted
    }

    emit(event: string) {
        return this.events[event].emit(this.product)
    }

    hasListeners(event: EventEmitter<any>) {
        return this.events && event && event.observers.length > 0
    }

    close(data?: any) {
        this.viewCtrl.dismiss(data)
    }
}