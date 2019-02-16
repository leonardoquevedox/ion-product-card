import { EventEmitter } from '@angular/core';
import { NgZone } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { PopoverController } from 'ionic-angular';
export declare class IonProductCardComponent {
    zone: NgZone;
    changeDetector: ChangeDetectorRef;
    popoverCtrl: PopoverController;
    CURRENCY_OPTIONS: {
        prefix: string;
        thousands: string;
        decimal: string;
    };
    product: any;
    options: any;
    add: EventEmitter<any>;
    save: EventEmitter<any>;
    view: EventEmitter<any>;
    edit: EventEmitter<any>;
    remove: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    activate: EventEmitter<any>;
    increment: EventEmitter<any>;
    decrement: EventEmitter<any>;
    blur: EventEmitter<any>;
    constructor(zone: NgZone, changeDetector: ChangeDetectorRef, popoverCtrl: PopoverController);
    ngOnInit(): void;
    formatPrice(price: any): any;
    showItemLeft(): any;
    getQuantityFor(product: any): string;
    showQuantityButtons(): any;
    showInventoryOptions(): boolean;
    showCatalogueOptions(): boolean;
    isDeleted(): any;
    showOptionsFor($event: any, product: any): void;
}
