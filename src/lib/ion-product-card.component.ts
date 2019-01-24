/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Product component.
 */

import { Component, ViewEncapsulation } from '@angular/core'
import { Input, Output } from '@angular/core'
import { EventEmitter } from '@angular/core'
import { NgZone } from '@angular/core'
import { ChangeDetectorRef } from '@angular/core'
import { PopoverController } from 'ionic-angular'

import { IonProductCardOptionsMenu } from './options/ion-product-card-options.component'

@Component({
    selector: 'ion-product-card',
    templateUrl: 'ion-product-card.component.html',
    styleUrls: ['ion-product-card.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class IonProductCardComponent {

    CURRENCY_OPTIONS = { prefix: 'R$ ', thousands: '.', decimal: ',' }

    @Input('product') product: any
    @Input('options') options: any


    @Output() add: EventEmitter<any> = new EventEmitter()


    @Output() save: EventEmitter<any> = new EventEmitter()


    @Output() view: EventEmitter<any> = new EventEmitter()


    @Output() edit: EventEmitter<any> = new EventEmitter()


    @Output() remove: EventEmitter<any> = new EventEmitter()


    @Output() deactivate: EventEmitter<any> = new EventEmitter()
    @Output() activate: EventEmitter<any> = new EventEmitter()

    @Output() increment: EventEmitter<any> = new EventEmitter()
    @Output() decrement: EventEmitter<any> = new EventEmitter()

    @Output() blur: EventEmitter<any> = new EventEmitter()

    constructor(public zone: NgZone,
        public changeDetector: ChangeDetectorRef,
        public popoverCtrl: PopoverController) { }

    ngOnInit() {
        this.changeDetector.detectChanges()
        this.options = this.options || {}
        if (this.options.transform) {
            this.product = this.options.transform(this.product)
        }
    }

    formatPrice(price) {
        price = parseFloat(price)
        return price && price.toFixed ? (price.toFixed(2).split('.')[0]).concat(',').concat(price.toFixed(2).split('.')[1]) : ''
    }

    showItemLeft() {
        return (this.options.showDiscountTag && this.product.discountPrice) || this.options.showPicture
    }

    getQuantityFor(product: any) {
        if (!product.quantity) return 'Adicionar'
        else return product.quantity + ' ' + (product.quantity && product.quantity == 1 ? 'Un.' : 'Un.')
    }

    showQuantityButtons() {
        return (this.options.showDecreaseButton ? this.options.showDecreaseButton(this.product) : (this.decrement.observers.length > 0)) || (this.options.showIncreaseButton ? this.options.showIncreaseButton(this.product) : (this.increment.observers.length > 0))
    }

    showInventoryOptions() {
        return this.remove.observers.length > 0 || this.add.observers.length > 0 || this.save.observers.length > 0
    }

    showCatalogueOptions() {
        return this.edit.observers.length > 0 || this.activate.observers.length > 0 || this.deactivate.observers.length > 0
    }

    isDeleted() {
        return this.product && this.product.information && this.product.information.deleted
    }

    showOptionsFor($event, product) {
        let popover = this.popoverCtrl.create(IonProductCardOptionsMenu, {
            product: product,
            options: this.options,
            events: {
                add: this.add,
                save: this.save,
                edit: this.edit,
                deactivate: this.deactivate,
                activate: this.activate
            }
        })
        popover.present({ ev: $event })
        popover.onDidDismiss((data) => { })
    }
}
