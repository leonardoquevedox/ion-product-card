/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Product options component.
 */
import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
export declare class IonProductCardOptionsMenu {
    viewCtrl: ViewController;
    navParams: NavParams;
    changeDetector: ChangeDetectorRef;
    product: any;
    options: any;
    events: any;
    constructor(viewCtrl: ViewController, navParams: NavParams, changeDetector: ChangeDetectorRef);
    isDeleted(): any;
    emit(event: string): any;
    hasListeners(event: EventEmitter<any>): boolean;
    close(data?: any): void;
}
