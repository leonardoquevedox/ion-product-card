/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Product component.
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgZone } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { IonProductCardOptionsMenu } from './options/ion-product-card-options.component';
export class IonProductCardComponent {
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
/** @nocollapse */
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
if (false) {
    /** @type {?} */
    IonProductCardComponent.prototype.CURRENCY_OPTIONS;
    /** @type {?} */
    IonProductCardComponent.prototype.product;
    /** @type {?} */
    IonProductCardComponent.prototype.options;
    /** @type {?} */
    IonProductCardComponent.prototype.add;
    /** @type {?} */
    IonProductCardComponent.prototype.save;
    /** @type {?} */
    IonProductCardComponent.prototype.view;
    /** @type {?} */
    IonProductCardComponent.prototype.edit;
    /** @type {?} */
    IonProductCardComponent.prototype.remove;
    /** @type {?} */
    IonProductCardComponent.prototype.deactivate;
    /** @type {?} */
    IonProductCardComponent.prototype.activate;
    /** @type {?} */
    IonProductCardComponent.prototype.increment;
    /** @type {?} */
    IonProductCardComponent.prototype.decrement;
    /** @type {?} */
    IonProductCardComponent.prototype.blur;
    /** @type {?} */
    IonProductCardComponent.prototype.zone;
    /** @type {?} */
    IonProductCardComponent.prototype.changeDetector;
    /** @type {?} */
    IonProductCardComponent.prototype.popoverCtrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXByb2R1Y3QtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24tcHJvZHVjdC1jYXJkLyIsInNvdXJjZXMiOlsibGliL2lvbi1wcm9kdWN0LWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzVELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRWpELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFBO0FBU3hGLE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQStCaEMsWUFBbUIsSUFBWSxFQUNwQixjQUFpQyxFQUNqQyxXQUE4QjtRQUZ0QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ3BCLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUEvQnpDLHFCQUFnQixHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQTtRQU14RCxRQUFHLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHM0MsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFBO1FBRzVDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUc1QyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHNUMsV0FBTSxHQUFzQixJQUFJLFlB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QyxTQUFTO2tCQUdmLE1BQU07bUJBR04sTUFBTTttQkFHTixNQUFNO21CQUdOLE1BQU07cUJBR04sTUFBTTt5QkFHTixNQUFNO3VCQUNOLE1BQU07d0JBRU4sTUFBTTt3QkFDTixNQUFNO21CQUVOLE1BQU07Ozs7SUEzQlAsbURBQWtFOztJQUVsRSwwQ0FBOEI7O0lBQzlCLDBDQUE4Qjs7SUFHOUIsc0NBQXFEOztJQUdyRCx1Q0FBc0Q7O0lBR3RELHVDQUFzRDs7SUFHdEQsdUNBQXNEOztJQUd0RCx5Q0FBd0Q7O0lBR3hELDZDQUE0RDs7SUFDNUQsMkNBQTBEOztJQUUxRCw0Q0FBMkQ7O0lBQzNELDRDQUEyRDs7SUFFM0QsdUNBQXNEOztJQUUxQyx1Q0FBbUI7O0lBQzNCLGlEQUF3Qzs7SUFDeEMsOENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAdmVyc2lvbiAxLjEuMFxyXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cclxuICogQGRlc2NyaXB0aW9uIFByb2R1Y3QgY29tcG9uZW50LlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBQb3BvdmVyQ29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInXHJcblxyXG5pbXBvcnQgeyBJb25Qcm9kdWN0Q2FyZE9wdGlvbnNNZW51IH0gZnJvbSAnLi9vcHRpb25zL2lvbi1wcm9kdWN0LWNhcmQtb3B0aW9ucy5jb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaW9uLXByb2R1Y3QtY2FyZCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2lvbi1wcm9kdWN0LWNhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2lvbi1wcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJb25Qcm9kdWN0Q2FyZENvbXBvbmVudCB7XHJcblxyXG4gICAgQ1VSUkVOQ1lfT1BUSU9OUyA9IHsgcHJlZml4OiAnUiQgJywgdGhvdXNhbmRzOiAnLicsIGRlY2ltYWw6ICcsJyB9XHJcblxyXG4gICAgQElucHV0KCdwcm9kdWN0JykgcHJvZHVjdDogYW55XHJcbiAgICBASW5wdXQoJ29wdGlvbnMnKSBvcHRpb25zOiBhbnlcclxuXHJcblxyXG4gICAgQE91dHB1dCgpIGFkZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcblxyXG4gICAgQE91dHB1dCgpIHNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG5cclxuICAgIEBPdXRwdXQoKSB2aWV3OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuXHJcbiAgICBAT3V0cHV0KCkgZWRpdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcblxyXG4gICAgQE91dHB1dCgpIHJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcblxyXG4gICAgQE91dHB1dCgpIGRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcbiAgICBAT3V0cHV0KCkgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gICAgQE91dHB1dCgpIGluY3JlbWVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuICAgIEBPdXRwdXQoKSBkZWNyZW1lbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gICAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHpvbmU6IE5nWm9uZSxcclxuICAgICAgICBwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHB1YmxpYyBwb3BvdmVyQ3RybDogUG9wb3ZlckNvbnRyb2xsZXIpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0ID0gdGhpcy5vcHRpb25zLnRyYW5zZm9ybSh0aGlzLnByb2R1Y3QpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdFByaWNlKHByaWNlKSB7XHJcbiAgICAgICAgcHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlKVxyXG4gICAgICAgIHJldHVybiBwcmljZSAmJiBwcmljZS50b0ZpeGVkID8gKHByaWNlLnRvRml4ZWQoMikuc3BsaXQoJy4nKVswXSkuY29uY2F0KCcsJykuY29uY2F0KHByaWNlLnRvRml4ZWQoMikuc3BsaXQoJy4nKVsxXSkgOiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dJdGVtTGVmdCgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMub3B0aW9ucy5zaG93RGlzY291bnRUYWcgJiYgdGhpcy5wcm9kdWN0LmRpc2NvdW50UHJpY2UpIHx8IHRoaXMub3B0aW9ucy5zaG93UGljdHVyZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFF1YW50aXR5Rm9yKHByb2R1Y3Q6IGFueSkge1xyXG4gICAgICAgIGlmICghcHJvZHVjdC5xdWFudGl0eSkgcmV0dXJuICdBZGljaW9uYXInXHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvZHVjdC5xdWFudGl0eSArICcgJyArIChwcm9kdWN0LnF1YW50aXR5ICYmIHByb2R1Y3QucXVhbnRpdHkgPT0gMSA/ICdVbi4nIDogJ1VuLicpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1F1YW50aXR5QnV0dG9ucygpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMub3B0aW9ucy5zaG93RGVjcmVhc2VCdXR0b24gPyB0aGlzLm9wdGlvbnMuc2hvd0RlY3JlYXNlQnV0dG9uKHRoaXMucHJvZHVjdCkgOiAodGhpcy5kZWNyZW1lbnQub2JzZXJ2ZXJzLmxlbmd0aCA+IDApKSB8fCAodGhpcy5vcHRpb25zLnNob3dJbmNyZWFzZUJ1dHRvbiA/IHRoaXMub3B0aW9ucy5zaG93SW5jcmVhc2VCdXR0b24odGhpcy5wcm9kdWN0KSA6ICh0aGlzLmluY3JlbWVudC5vYnNlcnZlcnMubGVuZ3RoID4gMCkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0ludmVudG9yeU9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlLm9ic2VydmVycy5sZW5ndGggPiAwIHx8IHRoaXMuYWRkLm9ic2VydmVycy5sZW5ndGggPiAwIHx8IHRoaXMuc2F2ZS5vYnNlcnZlcnMubGVuZ3RoID4gMFxyXG4gICAgfVxyXG5cclxuICAgIHNob3dDYXRhbG9ndWVPcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVkaXQub2JzZXJ2ZXJzLmxlbmd0aCA+IDAgfHwgdGhpcy5hY3RpdmF0ZS5vYnNlcnZlcnMubGVuZ3RoID4gMCB8fCB0aGlzLmRlYWN0aXZhdGUub2JzZXJ2ZXJzLmxlbmd0aCA+IDBcclxuICAgIH1cclxuXHJcbiAgICBpc0RlbGV0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdCAmJiB0aGlzLnByb2R1Y3QuaW5mb3JtYXRpb24gJiYgdGhpcy5wcm9kdWN0LmluZm9ybWF0aW9uLmRlbGV0ZWRcclxuICAgIH1cclxuXHJcbiAgICBzaG93T3B0aW9uc0ZvcigkZXZlbnQsIHByb2R1Y3QpIHtcclxuICAgICAgICBsZXQgcG9wb3ZlciA9IHRoaXMucG9wb3ZlckN0cmwuY3JlYXRlKElvblByb2R1Y3RDYXJkT3B0aW9uc01lbnUsIHtcclxuICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdCxcclxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxyXG4gICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgIGFkZDogdGhpcy5hZGQsXHJcbiAgICAgICAgICAgICAgICBzYXZlOiB0aGlzLnNhdmUsXHJcbiAgICAgICAgICAgICAgICBlZGl0OiB0aGlzLmVkaXQsXHJcbiAgICAgICAgICAgICAgICBkZWFjdGl2YXRlOiB0aGlzLmRlYWN0aXZhdGUsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZTogdGhpcy5hY3RpdmF0ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBwb3BvdmVyLnByZXNlbnQoeyBldjogJGV2ZW50IH0pXHJcbiAgICAgICAgcG9wb3Zlci5vbkRpZERpc21pc3MoKGRhdGEpID0+IHsgfSlcclxuICAgIH1cclxufVxyXG4iXX0=