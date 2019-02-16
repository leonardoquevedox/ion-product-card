import { ChangeDetectorRef, Component, ChangeDetectionStrategy, NgModule, ViewEncapsulation, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewController, NavParams, IonicModule, PopoverController } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyMaskModule } from 'ngx-currency-mask';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonProductCardOptionsMenu {
    /**
     * @param {?} viewCtrl
     * @param {?} navParams
     * @param {?} changeDetector
     */
    constructor(viewCtrl, navParams, changeDetector) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.changeDetector = changeDetector;
        this.product = navParams.data.product;
        this.options = navParams.data.options;
        this.events = navParams.data.events;
    }
    /**
     * @return {?}
     */
    isDeleted() {
        return this.product && this.product.information && this.product.information.deleted;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emit(event) {
        return this.events[event].emit(this.product);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    hasListeners(event) {
        return this.events && event && event.observers.length > 0;
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    close(data) {
        this.viewCtrl.dismiss(data);
    }
}
IonProductCardOptionsMenu.decorators = [
    { type: Component, args: [{
                template: "<button ion-item popover-item *ngIf=\"hasListeners(events.edit)\" (click)=\"emit('edit'); close();\" [disabled]=\"product.showSpinner\">\n    <span translate=\"edit\"></span>\n</button>\n<button ion-item popover-item *ngIf=\"!isDeleted() && hasListeners(events.deactivate)\" (click)=\"emit('deactivate'); close();\" [disabled]=\"product.showSpinner\">\n    <span translate=\"deactivate\"></span>\n</button>\n<button ion-item popover-item *ngIf=\"isDeleted() && hasListeners(events.activate)\" (click)=\"emit('activate'); close();\" [disabled]=\"product.showSpinner\">\n    <span translate=\"activate\"></span>\n</button>",
                changeDetection: ChangeDetectionStrategy.Default
            }] }
];
IonProductCardOptionsMenu.ctorParameters = () => [
    { type: ViewController },
    { type: NavParams },
    { type: ChangeDetectorRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonProductCardOptionsModule {
}
IonProductCardOptionsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, IonicModule, TranslateModule],
                entryComponents: [IonProductCardOptionsMenu],
                declarations: [IonProductCardOptionsMenu],
                exports: [IonProductCardOptionsMenu]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonProductCardComponent {
    /**
     * @param {?} zone
     * @param {?} changeDetector
     * @param {?} popoverCtrl
     */
    constructor(zone, changeDetector, popoverCtrl) {
        this.zone = zone;
        this.changeDetector = changeDetector;
        this.popoverCtrl = popoverCtrl;
        this.CURRENCY_OPTIONS = { prefix: 'R$ ', thousands: '.', decimal: ',' };
        this.add = new EventEmitter();
        this.save = new EventEmitter();
        this.view = new EventEmitter();
        this.edit = new EventEmitter();
        this.remove = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.activate = new EventEmitter();
        this.increment = new EventEmitter();
        this.decrement = new EventEmitter();
        this.blur = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.changeDetector.detectChanges();
        this.options = this.options || {};
        if (this.options.transform) {
            this.product = this.options.transform(this.product);
        }
    }
    /**
     * @param {?} price
     * @return {?}
     */
    formatPrice(price) {
        price = parseFloat(price);
        return price && price.toFixed ? (price.toFixed(2).split('.')[0]).concat(',').concat(price.toFixed(2).split('.')[1]) : '';
    }
    /**
     * @return {?}
     */
    showItemLeft() {
        return (this.options.showDiscountTag && this.product.discountPrice) || this.options.showPicture;
    }
    /**
     * @param {?} product
     * @return {?}
     */
    getQuantityFor(product) {
        if (!product.quantity)
            return 'Adicionar';
        else
            return product.quantity + ' ' + (product.quantity && product.quantity == 1 ? 'Un.' : 'Un.');
    }
    /**
     * @return {?}
     */
    showQuantityButtons() {
        return (this.options.showDecreaseButton ? this.options.showDecreaseButton(this.product) : (this.decrement.observers.length > 0)) || (this.options.showIncreaseButton ? this.options.showIncreaseButton(this.product) : (this.increment.observers.length > 0));
    }
    /**
     * @return {?}
     */
    showInventoryOptions() {
        return this.remove.observers.length > 0 || this.add.observers.length > 0 || this.save.observers.length > 0;
    }
    /**
     * @return {?}
     */
    showCatalogueOptions() {
        return this.edit.observers.length > 0 || this.activate.observers.length > 0 || this.deactivate.observers.length > 0;
    }
    /**
     * @return {?}
     */
    isDeleted() {
        return this.product && this.product.information && this.product.information.deleted;
    }
    /**
     * @param {?} $event
     * @param {?} product
     * @return {?}
     */
    showOptionsFor($event, product) {
        /** @type {?} */
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
        });
        popover.present({ ev: $event });
        popover.onDidDismiss((data) => { });
    }
}
IonProductCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-product-card',
                template: "<ion-card product *ngIf=\"product && product.information\" [ngClass]=\"{ 'deleted': isDeleted(), 'show-image': options.showPicture, 'discount-product' : product.discountPrice }\">\r\n    <ion-card-header product-header color=\"secondary\" *ngIf=\"options.showPicture\" (click)=\"view.emit(product)\">\r\n        <section product-name>\r\n            <p discount-tag *ngIf=\"options.showDiscountTag && product.discountPrice\">\r\n                <span translate=\"promotion\"></span>\r\n            </p>\r\n            {{ product.information.name }}\r\n            <br/>\r\n            <section *ngIf=\"options.showProductQuantity\">({{product.quantity}}x)</section>\r\n        </section>\r\n        <ion-spinner product-spinner *ngIf=\"product.loading\"></ion-spinner>\r\n    </ion-card-header>\r\n    <ion-card-content no-padding>\r\n        <ion-item text-center no-padding>\r\n            <article item-left product-picture>\r\n                <img [src]=\"product.picture\" />\r\n            </article>\r\n            <form>\r\n                <p text-color=\"almost-white\" deleted-tag *ngIf=\"isDeleted()\">\r\n                    Status:\r\n                    <span translate=\"deactivated\"></span>\r\n                </p>\r\n                <p product-info product-price discount *ngIf=\"options.showDiscountPrice && product.discountPrice\">\r\n                    <span prefix translate=\"by\" *ngIf=\"product.discountPrice\"></span>:\r\n                    <span price-value>{{ product.discountPrice | currency : 'BRL' }}</span>\r\n                </p>\r\n                <p product-info product-price *ngIf=\"options.showPrice && product.price\">\r\n                    <span prefix *ngIf=\"product.discountPrice\">\r\n                        <span translate=\"from\"></span>:\r\n                    </span>\r\n                    <span price-value>{{ product.price | currency : 'BRL' }}</span>\r\n                </p>\r\n                <ion-row>\r\n                    <section col [attr.col-6]=\"options.showStockInput\" *ngIf=\"options.showPriceInput\" price-input>\r\n                        <input name=\"price\" autocomplete=\"off\" autocorrect=\"off\" padding-input type=\"tel\" placeholder=\"Pre\u00E7o\" [(ngModel)]=\"product.price\"\r\n                            currencyMask [options]=\"CURRENCY_OPTIONS\">\r\n                    </section>\r\n                    <section col col-6 *ngIf=\"options.showStockInput\" stock-input>\r\n                        <input name=\"stock\" autocomplete=\"off\" autocorrect=\"off\" padding-input type=\"tel\" [placeholder]=\"'Estoque (ex: 100)'\" [(ngModel)]=\"product.stock\">\r\n                        <label text-color=\"almost-white\">\r\n                            <span translate=\"unities\"></span>\r\n                        </label>\r\n                    </section>\r\n                </ion-row>\r\n                <section *ngIf=\"options.showDiscountPriceInput\" price-input discount-price-input>\r\n                    <span prefix>\r\n                        <span translate=\"by\"></span>:\r\n                    </span>\r\n                    <input name=\"discount_price\" type=\"tel\" [placeholder]=\"00.00 | currency : 'BRL'\" [(ngModel)]=\"product.discountPrice\" currencyMask\r\n                        [options]=\"CURRENCY_OPTIONS\">\r\n                </section>\r\n            </form>\r\n            <section item-right *ngIf=\"showQuantityButtons()\">\r\n                <div no-padding cart-options>\r\n                    <button ion-button color=\"danger\" quantity-button *ngIf=\"decrement.observers.length > 0\" (click)=\"decrement.emit(product)\"\r\n                        [disabled]=\"product.loading || !product.quantity || !(product.quantity > 0)\">\r\n                        <ion-icon name=\"la-minus\"></ion-icon>\r\n                    </button>\r\n                    <ion-icon cart-icon name=\"la-shopping-cart\"></ion-icon>\r\n                    <button ion-button color=\"balanced\" quantity-button *ngIf=\"increment.observers.length > 0\" (click)=\"increment.emit(product)\"\r\n                        [disabled]=\"product.loading\">\r\n                        <ion-icon name=\"la-plus\"></ion-icon>\r\n                    </button>\r\n                    <p>{{ getQuantityFor(product) }}</p>\r\n                </div>\r\n            </section>\r\n            <section *ngIf=\"showInventoryOptions()\" inventory-options float-right>\r\n                <button type=\"submit\" ion-button round icon unicode color=\"balanced\" *ngIf=\"save.observers.length > 0\" (click)=\"save.emit(product)\"\r\n                    [disabled]=\"product.loading || !product.price || (product.discountPrice ? product.price < product.discountPrice : false)\">\r\n                    <ion-icon name=\"la-check\"></ion-icon>\r\n                </button>\r\n                <button type=\"submit\" ion-button round icon add-button color=\"balanced\" *ngIf=\"add.observers.length > 0\" (click)=\"add.emit(product)\"\r\n                    [disabled]=\"product.loading || !product.price || (product.discountPrice ? product.price < product.discountPrice : false)\">\r\n                    <ion-icon name=\"la-check\"></ion-icon>\r\n                </button>\r\n                <button type=\"button\" ion-button round icon delete-button remove-button color=\"danger\" *ngIf=\"remove.observers.length > 0\"\r\n                    (click)=\"remove.emit(product)\" [disabled]=\"product.loading\">\r\n                    <ion-icon name=\"la-trash\"></ion-icon>\r\n                </button>\r\n            </section>\r\n            \r\n            <section item-right *ngIf=\"showCatalogueOptions()\">\r\n                <a (click)=\"showOptionsFor($event, product)\" text-color=\"dark\" more-options>\r\n                    <ion-icon name=\"la-ellipsis-v\"></ion-icon>\r\n                </a>\r\n            </section>\r\n            \r\n            <button ion-button clear view-more color=\"positive\" (click)=\"view.emit(product)\" *ngIf=\"view.observers.length > 0\">\r\n                <span translate=\"view_more\"></span>\r\n            </button>\r\n        </ion-item>\r\n    </ion-card-content>\r\n</ion-card>",
                encapsulation: ViewEncapsulation.None,
                styles: ["ion-product-card [product]{background-color:#fff;display:block;margin-bottom:0;min-height:100px;padding:0;height:100%}ion-product-card [product].deleted [deleted-tag],ion-product-card [product].deleted [product-image],ion-product-card [product].deleted [product-name]{opacity:.4}ion-product-card [product] ion-card-header[product-header]{padding-top:10px;margin-bottom:5px}ion-product-card [product] [product-picture] img{margin-left:5px;-o-object-fit:contain;object-fit:contain;height:90px;width:90px;border-radius:4px}ion-product-card [product] ion-label{margin-top:0;margin-bottom:10px}ion-product-card [product] ion-item.item .item-inner{border-bottom:none}ion-product-card [product] [item-left]{margin-top:0}ion-product-card [product] img[product-image]{height:90px;width:90px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;border-radius:50%;margin-left:10px;padding:5px}ion-product-card [product] [deleted-tag]{font-size:10px}ion-product-card [product] [product-name]{font-size:12px;white-space:normal;text-align:center;padding:4px 4px 0;display:flex;justify-content:center;align-items:center;font-weight:700;text-transform:uppercase}ion-product-card [product] [product-description],ion-product-card [product] [product-info]{color:#f4f4f4;font-size:13px;margin-top:5px;margin-bottom:5px}ion-product-card [product] [product-price]{color:#4bc46e;font-size:14px;vertical-align:baseline;text-align:center;margin-bottom:0}ion-product-card [product].discount-product [product-price]{text-decoration:line-through;margin-top:5px;font-size:12px}ion-product-card [product].discount-product [product-price][discount]{text-decoration:none;font-size:15px;font-weight:700}ion-product-card [product] [padding-input]{padding-top:10px;padding-bottom:0}ion-product-card [product] [stock-input] input{width:95%;text-align:center;color:#1e88e5;border-bottom:2px solid #efefef;font-size:10px}ion-product-card [product] [stock-input] label{text-transform:uppercase;display:block;font-size:10px;opacity:.8;padding-top:4px}ion-product-card [product] [price-input]{color:#f4f4f4;text-align:center;display:inline-block}ion-product-card [product] [price-input] input{text-align:center!important;color:#4bc46e;margin:auto -20px auto auto;max-width:90%;font-size:12px;border-bottom:2px solid #ebebeb}ion-product-card [product] [price-input] input:focus{border-bottom-color:#4bc46e}ion-product-card [product] [price-input][discount-price-input]{margin-top:5px;margin-bottom:10px;margin-left:-45px;font-size:12px}ion-product-card [product] [price-input][discount-price-input] [prefix]{color:#888;font-size:12px}ion-product-card [product] [price-input][discount-price-input] input{padding-top:5px;color:#f74444;font-size:16px;padding-bottom:5px}ion-product-card [product] [price-input][discount-price-input] input:focus{border-bottom-color:#f74444}ion-product-card [product] [inventory-options]{display:inline-block;margin-top:15px}ion-product-card [product] [catalogue-options] button{width:40px;height:40px;padding-left:2px}ion-product-card [product] [catalogue-options] button ion-icon{font-size:16px}ion-product-card [product] [cart-options] [cart-icon]{color:#bbb;padding-left:0;display:inline-block;vertical-align:middle;margin-top:-15px}ion-product-card [product] [cart-options] [cart-icon]::before{font-size:45px}ion-product-card [product] [cart-options] [quantity-button]{border-radius:50%;width:25px;height:25px}ion-product-card [product] [cart-options] [quantity-button] ion-icon{padding-left:0}ion-product-card [product] [cart-options] [quantity-button] ion-icon::before{font-size:14px}ion-product-card [product] [cart-options] p{text-align:center;color:#999;font-size:12px}ion-product-card [product] [more-options]{opacity:1!important}ion-product-card [product] [delete-button]{position:absolute;left:10px}ion-product-card [product] [view-more]{text-align:center;display:block;margin:auto;padding-top:8px;font-size:12px}[product-spinner]{position:absolute;right:20px;bottom:5px;z-index:9999;width:22px}[product-spinner] circle{stroke:#fff!important}@media (min-width:700px){[product]{border-right:1px solid #fafafa}}"]
            }] }
];
IonProductCardComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: PopoverController }
];
IonProductCardComponent.propDecorators = {
    product: [{ type: Input, args: ['product',] }],
    options: [{ type: Input, args: ['options',] }],
    add: [{ type: Output }],
    save: [{ type: Output }],
    view: [{ type: Output }],
    edit: [{ type: Output }],
    remove: [{ type: Output }],
    deactivate: [{ type: Output }],
    activate: [{ type: Output }],
    increment: [{ type: Output }],
    decrement: [{ type: Output }],
    blur: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonProductCardModule {
}
IonProductCardModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    IonicModule,
                    TranslateModule,
                    CurrencyMaskModule,
                    IonProductCardOptionsModule
                ],
                declarations: [IonProductCardComponent],
                exports: [IonProductCardComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { IonProductCardOptionsModule, IonProductCardComponent, IonProductCardModule, IonProductCardOptionsMenu as ɵa };

//# sourceMappingURL=ion-product-card.js.map