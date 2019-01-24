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
var IonProductCardComponent = /** @class */ (function () {
    function IonProductCardComponent(zone, changeDetector, popoverCtrl) {
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
    IonProductCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.changeDetector.detectChanges();
        this.options = this.options || {};
        if (this.options.transform) {
            this.product = this.options.transform(this.product);
        }
    };
    /**
     * @param {?} price
     * @return {?}
     */
    IonProductCardComponent.prototype.formatPrice = /**
     * @param {?} price
     * @return {?}
     */
    function (price) {
        price = parseFloat(price);
        return price && price.toFixed ? (price.toFixed(2).split('.')[0]).concat(',').concat(price.toFixed(2).split('.')[1]) : '';
    };
    /**
     * @return {?}
     */
    IonProductCardComponent.prototype.showItemLeft = /**
     * @return {?}
     */
    function () {
        return (this.options.showDiscountTag && this.product.discountPrice) || this.options.showPicture;
    };
    /**
     * @param {?} product
     * @return {?}
     */
    IonProductCardComponent.prototype.getQuantityFor = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        if (!product.quantity)
            return 'Adicionar';
        else
            return product.quantity + ' ' + (product.quantity && product.quantity == 1 ? 'Un.' : 'Un.');
    };
    /**
     * @return {?}
     */
    IonProductCardComponent.prototype.showQuantityButtons = /**
     * @return {?}
     */
    function () {
        return (this.options.showDecreaseButton ? this.options.showDecreaseButton(this.product) : (this.decrement.observers.length > 0)) || (this.options.showIncreaseButton ? this.options.showIncreaseButton(this.product) : (this.increment.observers.length > 0));
    };
    /**
     * @return {?}
     */
    IonProductCardComponent.prototype.showInventoryOptions = /**
     * @return {?}
     */
    function () {
        return this.remove.observers.length > 0 || this.add.observers.length > 0 || this.save.observers.length > 0;
    };
    /**
     * @return {?}
     */
    IonProductCardComponent.prototype.showCatalogueOptions = /**
     * @return {?}
     */
    function () {
        return this.edit.observers.length > 0 || this.activate.observers.length > 0 || this.deactivate.observers.length > 0;
    };
    /**
     * @return {?}
     */
    IonProductCardComponent.prototype.isDeleted = /**
     * @return {?}
     */
    function () {
        return this.product && this.product.information && this.product.information.deleted;
    };
    /**
     * @param {?} $event
     * @param {?} product
     * @return {?}
     */
    IonProductCardComponent.prototype.showOptionsFor = /**
     * @param {?} $event
     * @param {?} product
     * @return {?}
     */
    function ($event, product) {
        /** @type {?} */
        var popover = this.popoverCtrl.create(IonProductCardOptionsMenu, {
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
        popover.onDidDismiss(function (data) { });
    };
    IonProductCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-product-card',
                    template: "<ion-card product *ngIf=\"product && product.information\" [ngClass]=\"{ 'deleted': isDeleted(), 'show-image': options.showPicture, 'discount-product' : product.discountPrice }\">\r\n    <ion-card-header product-header color=\"secondary\" *ngIf=\"options.showPicture\" (click)=\"view.emit(product)\">\r\n        <section product-name>\r\n            <p discount-tag *ngIf=\"options.showDiscountTag && product.discountPrice\">\r\n                <span translate=\"promotion\"></span>\r\n            </p>\r\n            {{ product.information.name }}\r\n            <br/>\r\n            <section *ngIf=\"options.showProductQuantity\">({{product.quantity}}x)</section>\r\n        </section>\r\n        <ion-spinner product-spinner *ngIf=\"product.loading\"></ion-spinner>\r\n    </ion-card-header>\r\n    <ion-card-content no-padding>\r\n        <ion-item text-center no-padding>\r\n            <article item-left product-picture>\r\n                <img [src]=\"product.picture\" />\r\n            </article>\r\n            <form>\r\n                <p text-color=\"almost-white\" deleted-tag *ngIf=\"isDeleted()\">\r\n                    Status:\r\n                    <span translate=\"deactivated\"></span>\r\n                </p>\r\n                <p product-info product-price discount *ngIf=\"options.showDiscountPrice && product.discountPrice\">\r\n                    <span prefix translate=\"by\" *ngIf=\"product.discountPrice\"></span>:\r\n                    <span price-value>{{ product.discountPrice | currency : 'BRL' }}</span>\r\n                </p>\r\n                <p product-info product-price *ngIf=\"options.showPrice && product.price\">\r\n                    <span prefix *ngIf=\"product.discountPrice\">\r\n                        <span translate=\"from\"></span>:\r\n                    </span>\r\n                    <span price-value>{{ product.price | currency : 'BRL' }}</span>\r\n                </p>\r\n                <ion-row>\r\n                    <section col [attr.col-6]=\"options.showStockInput\" *ngIf=\"options.showPriceInput\" price-input>\r\n                        <input name=\"price\" autocomplete=\"off\" autocorrect=\"off\" padding-input type=\"tel\" placeholder=\"Pre\u00E7o\" [(ngModel)]=\"product.price\"\r\n                            currencyMask [options]=\"CURRENCY_OPTIONS\">\r\n                    </section>\r\n                    <section col col-6 *ngIf=\"options.showStockInput\" stock-input>\r\n                        <input name=\"stock\" autocomplete=\"off\" autocorrect=\"off\" padding-input type=\"tel\" [placeholder]=\"'Estoque (ex: 100)'\" [(ngModel)]=\"product.stock\">\r\n                        <label text-color=\"almost-white\">\r\n                            <span translate=\"unities\"></span>\r\n                        </label>\r\n                    </section>\r\n                </ion-row>\r\n                <section *ngIf=\"options.showDiscountPriceInput\" price-input discount-price-input>\r\n                    <span prefix>\r\n                        <span translate=\"by\"></span>:\r\n                    </span>\r\n                    <input name=\"discount_price\" type=\"tel\" [placeholder]=\"00.00 | currency : 'BRL'\" [(ngModel)]=\"product.discountPrice\" currencyMask\r\n                        [options]=\"CURRENCY_OPTIONS\">\r\n                </section>\r\n            </form>\r\n            <section item-right *ngIf=\"showQuantityButtons()\">\r\n                <div no-padding cart-options>\r\n                    <button ion-button color=\"danger\" quantity-button *ngIf=\"decrement.observers.length > 0\" (click)=\"decrement.emit(product)\"\r\n                        [disabled]=\"product.loading || !product.quantity || !(product.quantity > 0)\">\r\n                        <ion-icon name=\"la-minus\"></ion-icon>\r\n                    </button>\r\n                    <ion-icon cart-icon name=\"la-shopping-cart\"></ion-icon>\r\n                    <button ion-button color=\"balanced\" quantity-button *ngIf=\"increment.observers.length > 0\" (click)=\"increment.emit(product)\"\r\n                        [disabled]=\"product.loading\">\r\n                        <ion-icon name=\"la-plus\"></ion-icon>\r\n                    </button>\r\n                    <p>{{ getQuantityFor(product) }}</p>\r\n                </div>\r\n            </section>\r\n            <section *ngIf=\"showInventoryOptions()\" inventory-options float-right>\r\n                <button type=\"submit\" ion-button round icon unicode color=\"balanced\" *ngIf=\"save.observers.length > 0\" (click)=\"save.emit(product)\"\r\n                    [disabled]=\"product.loading || !product.price || (product.discountPrice ? product.price < product.discountPrice : false)\">\r\n                    <ion-icon name=\"la-check\"></ion-icon>\r\n                </button>\r\n                <button type=\"submit\" ion-button round icon add-button color=\"balanced\" *ngIf=\"add.observers.length > 0\" (click)=\"add.emit(product)\"\r\n                    [disabled]=\"product.loading || !product.price || (product.discountPrice ? product.price < product.discountPrice : false)\">\r\n                    <ion-icon name=\"la-check\"></ion-icon>\r\n                </button>\r\n                <button type=\"button\" ion-button round icon delete-button remove-button color=\"danger\" *ngIf=\"remove.observers.length > 0\"\r\n                    (click)=\"remove.emit(product)\" [disabled]=\"product.loading\">\r\n                    <ion-icon name=\"la-trash\"></ion-icon>\r\n                </button>\r\n            </section>\r\n            \r\n            <section item-right *ngIf=\"showCatalogueOptions()\">\r\n                <a (click)=\"showOptionsFor($event, product)\" text-color=\"dark\" more-options>\r\n                    <ion-icon name=\"la-ellipsis-v\"></ion-icon>\r\n                </a>\r\n            </section>\r\n            \r\n            <button ion-button clear view-more color=\"positive\" (click)=\"view.emit(product)\" *ngIf=\"view.observers.length > 0\">\r\n                <span translate=\"view_more\"></span>\r\n            </button>\r\n        </ion-item>\r\n    </ion-card-content>\r\n</ion-card>",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["ion-product-card [product]{background-color:#fff;display:block;margin-bottom:0;min-height:100px;padding:0;height:100%}ion-product-card [product].deleted [deleted-tag],ion-product-card [product].deleted [product-image],ion-product-card [product].deleted [product-name]{opacity:.4}ion-product-card [product] ion-card-header[product-header]{padding-top:10px;margin-bottom:5px}ion-product-card [product] [product-picture] img{margin-left:5px;-o-object-fit:contain;object-fit:contain;height:90px;width:90px;border-radius:4px}ion-product-card [product] ion-label{margin-top:0;margin-bottom:10px}ion-product-card [product] ion-item.item .item-inner{border-bottom:none}ion-product-card [product] [item-left]{margin-top:0}ion-product-card [product] img[product-image]{height:90px;width:90px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;border-radius:50%;margin-left:10px;padding:5px}ion-product-card [product] [deleted-tag]{font-size:10px}ion-product-card [product] [product-name]{font-size:12px;white-space:normal;text-align:center;padding:4px 4px 0;display:flex;justify-content:center;align-items:center;font-weight:700;text-transform:uppercase}ion-product-card [product] [product-description],ion-product-card [product] [product-info]{color:#f4f4f4;font-size:13px;margin-top:5px;margin-bottom:5px}ion-product-card [product] [product-price]{color:#4bc46e;font-size:14px;vertical-align:baseline;text-align:center;margin-bottom:0}ion-product-card [product].discount-product [product-price]{text-decoration:line-through;margin-top:5px;font-size:12px}ion-product-card [product].discount-product [product-price][discount]{text-decoration:none;font-size:15px;font-weight:700}ion-product-card [product] [padding-input]{padding-top:10px;padding-bottom:0}ion-product-card [product] [stock-input] input{width:95%;text-align:center;color:#1e88e5;border-bottom:2px solid #efefef;font-size:10px}ion-product-card [product] [stock-input] label{text-transform:uppercase;display:block;font-size:10px;opacity:.8;padding-top:4px}ion-product-card [product] [price-input]{color:#f4f4f4;text-align:center;display:inline-block}ion-product-card [product] [price-input] input{text-align:center!important;color:#4bc46e;margin:auto -20px auto auto;max-width:90%;font-size:12px;border-bottom:2px solid #ebebeb}ion-product-card [product] [price-input] input:focus{border-bottom-color:#4bc46e}ion-product-card [product] [price-input][discount-price-input]{margin-top:5px;margin-bottom:10px;margin-left:-45px;font-size:12px}ion-product-card [product] [price-input][discount-price-input] [prefix]{color:#888;font-size:12px}ion-product-card [product] [price-input][discount-price-input] input{padding-top:5px;color:#f74444;font-size:16px;padding-bottom:5px}ion-product-card [product] [price-input][discount-price-input] input:focus{border-bottom-color:#f74444}ion-product-card [product] [inventory-options]{display:inline-block;margin-top:15px}ion-product-card [product] [catalogue-options] button{width:40px;height:40px;padding-left:2px}ion-product-card [product] [catalogue-options] button ion-icon{font-size:16px}ion-product-card [product] [cart-options] [cart-icon]{color:#bbb;padding-left:0;display:inline-block;vertical-align:middle;margin-top:-15px}ion-product-card [product] [cart-options] [cart-icon]::before{font-size:45px}ion-product-card [product] [cart-options] [quantity-button]{border-radius:50%;width:25px;height:25px}ion-product-card [product] [cart-options] [quantity-button] ion-icon{padding-left:0}ion-product-card [product] [cart-options] [quantity-button] ion-icon::before{font-size:14px}ion-product-card [product] [cart-options] p{text-align:center;color:#999;font-size:12px}ion-product-card [product] [more-options]{opacity:1!important}ion-product-card [product] [delete-button]{position:absolute;left:10px}ion-product-card [product] [view-more]{text-align:center;display:block;margin:auto;padding-top:8px;font-size:12px}[product-spinner]{position:absolute;right:20px;bottom:5px;z-index:9999;width:22px}[product-spinner] circle{stroke:#fff!important}@media (min-width:700px){[product]{border-right:1px solid #fafafa}}"]
                }] }
    ];
    /** @nocollapse */
    IonProductCardComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: PopoverController }
    ]; };
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
    return IonProductCardComponent;
}());
export { IonProductCardComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXByb2R1Y3QtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24tcHJvZHVjdC1jYXJkLyIsInNvdXJjZXMiOlsibGliL2lvbi1wcm9kdWN0LWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzVELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRWpELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFBO0FBRXhGO0lBc0NJLGlDQUFtQixJQUFZLEVBQ3BCLGNBQWlDLEVBQ2pDLFdBQThCO1FBRnRCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDcEIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQS9CekMscUJBQWdCLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFBO1FBTXhELFFBQUcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUczQyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHNUMsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFBO1FBRzVDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUc1QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHOUMsZUFB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LGlCQUFpQjs7OzBCQWVyQixLQUFLLFNBQUMsU0FBUzswQkFDZixLQUFLLFNBQUMsU0FBUztzQkFHZixNQUFNO3VCQUdOLE1BQU07dUJBR04sTUFBTTt1QkFHTixNQUFNO3lCQUdOLE1BQU07NkJBR04sTUFBTTsyQkFDTixNQUFNOzRCQUVOLE1BQU07NEJBQ04sTUFBTTt1QkFFTixNQUFNOztJQTJEWCw4QkFBQztDQUFBLEFBL0ZELElBK0ZDO1NBeEZZLHVCQUF1Qjs7O0lBRWhDLG1EQUFrRTs7SUFFbEUsMENBQThCOztJQUM5QiwwQ0FBOEI7O0lBRzlCLHNDQUFxRDs7SUFHckQsdUNBQXNEOztJQUd0RCx1Q0FBc0Q7O0lBR3RELHVDQUFzRDs7SUFHdEQseUNBQXdEOztJQUd4RCw2Q0FBNEQ7O0lBQzVELDJDQUEwRDs7SUFFMUQsNENBQTJEOztJQUMzRCw0Q0FBMkQ7O0lBRTNELHVDQUFzRDs7SUFFMUMsdUNBQW1COztJQUMzQixpREFBd0M7O0lBQ3hDLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZSBNSVRcclxuICogQHZlcnNpb24gMS4xLjBcclxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXHJcbiAqIEBkZXNjcmlwdGlvbiBQcm9kdWN0IGNvbXBvbmVudC5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgUG9wb3ZlckNvbnRyb2xsZXIgfSBmcm9tICdpb25pYy1hbmd1bGFyJ1xyXG5cclxuaW1wb3J0IHsgSW9uUHJvZHVjdENhcmRPcHRpb25zTWVudSB9IGZyb20gJy4vb3B0aW9ucy9pb24tcHJvZHVjdC1jYXJkLW9wdGlvbnMuY29tcG9uZW50J1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lvbi1wcm9kdWN0LWNhcmQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdpb24tcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydpb24tcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSW9uUHJvZHVjdENhcmRDb21wb25lbnQge1xyXG5cclxuICAgIENVUlJFTkNZX09QVElPTlMgPSB7IHByZWZpeDogJ1IkICcsIHRob3VzYW5kczogJy4nLCBkZWNpbWFsOiAnLCcgfVxyXG5cclxuICAgIEBJbnB1dCgncHJvZHVjdCcpIHByb2R1Y3Q6IGFueVxyXG4gICAgQElucHV0KCdvcHRpb25zJykgb3B0aW9uczogYW55XHJcblxyXG5cclxuICAgIEBPdXRwdXQoKSBhZGQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG5cclxuICAgIEBPdXRwdXQoKSBzYXZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuXHJcbiAgICBAT3V0cHV0KCkgdmlldzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcblxyXG4gICAgQE91dHB1dCgpIGVkaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG5cclxuICAgIEBPdXRwdXQoKSByZW1vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG5cclxuICAgIEBPdXRwdXQoKSBkZWFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG4gICAgQE91dHB1dCgpIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICAgIEBPdXRwdXQoKSBpbmNyZW1lbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcbiAgICBAT3V0cHV0KCkgZGVjcmVtZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICAgIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB6b25lOiBOZ1pvbmUsXHJcbiAgICAgICAgcHVibGljIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwdWJsaWMgcG9wb3ZlckN0cmw6IFBvcG92ZXJDb250cm9sbGVyKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKVxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCB7fVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdCA9IHRoaXMub3B0aW9ucy50cmFuc2Zvcm0odGhpcy5wcm9kdWN0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXRQcmljZShwcmljZSkge1xyXG4gICAgICAgIHByaWNlID0gcGFyc2VGbG9hdChwcmljZSlcclxuICAgICAgICByZXR1cm4gcHJpY2UgJiYgcHJpY2UudG9GaXhlZCA/IChwcmljZS50b0ZpeGVkKDIpLnNwbGl0KCcuJylbMF0pLmNvbmNhdCgnLCcpLmNvbmNhdChwcmljZS50b0ZpeGVkKDIpLnNwbGl0KCcuJylbMV0pIDogJydcclxuICAgIH1cclxuXHJcbiAgICBzaG93SXRlbUxlZnQoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLm9wdGlvbnMuc2hvd0Rpc2NvdW50VGFnICYmIHRoaXMucHJvZHVjdC5kaXNjb3VudFByaWNlKSB8fCB0aGlzLm9wdGlvbnMuc2hvd1BpY3R1cmVcclxuICAgIH1cclxuXHJcbiAgICBnZXRRdWFudGl0eUZvcihwcm9kdWN0OiBhbnkpIHtcclxuICAgICAgICBpZiAoIXByb2R1Y3QucXVhbnRpdHkpIHJldHVybiAnQWRpY2lvbmFyJ1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb2R1Y3QucXVhbnRpdHkgKyAnICcgKyAocHJvZHVjdC5xdWFudGl0eSAmJiBwcm9kdWN0LnF1YW50aXR5ID09IDEgPyAnVW4uJyA6ICdVbi4nKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dRdWFudGl0eUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLm9wdGlvbnMuc2hvd0RlY3JlYXNlQnV0dG9uID8gdGhpcy5vcHRpb25zLnNob3dEZWNyZWFzZUJ1dHRvbih0aGlzLnByb2R1Y3QpIDogKHRoaXMuZGVjcmVtZW50Lm9ic2VydmVycy5sZW5ndGggPiAwKSkgfHwgKHRoaXMub3B0aW9ucy5zaG93SW5jcmVhc2VCdXR0b24gPyB0aGlzLm9wdGlvbnMuc2hvd0luY3JlYXNlQnV0dG9uKHRoaXMucHJvZHVjdCkgOiAodGhpcy5pbmNyZW1lbnQub2JzZXJ2ZXJzLmxlbmd0aCA+IDApKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dJbnZlbnRvcnlPcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZS5vYnNlcnZlcnMubGVuZ3RoID4gMCB8fCB0aGlzLmFkZC5vYnNlcnZlcnMubGVuZ3RoID4gMCB8fCB0aGlzLnNhdmUub2JzZXJ2ZXJzLmxlbmd0aCA+IDBcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q2F0YWxvZ3VlT3B0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lZGl0Lm9ic2VydmVycy5sZW5ndGggPiAwIHx8IHRoaXMuYWN0aXZhdGUub2JzZXJ2ZXJzLmxlbmd0aCA+IDAgfHwgdGhpcy5kZWFjdGl2YXRlLm9ic2VydmVycy5sZW5ndGggPiAwXHJcbiAgICB9XHJcblxyXG4gICAgaXNEZWxldGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3QgJiYgdGhpcy5wcm9kdWN0LmluZm9ybWF0aW9uICYmIHRoaXMucHJvZHVjdC5pbmZvcm1hdGlvbi5kZWxldGVkXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd09wdGlvbnNGb3IoJGV2ZW50LCBwcm9kdWN0KSB7XHJcbiAgICAgICAgbGV0IHBvcG92ZXIgPSB0aGlzLnBvcG92ZXJDdHJsLmNyZWF0ZShJb25Qcm9kdWN0Q2FyZE9wdGlvbnNNZW51LCB7XHJcbiAgICAgICAgICAgIHByb2R1Y3Q6IHByb2R1Y3QsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcclxuICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBhZGQ6IHRoaXMuYWRkLFxyXG4gICAgICAgICAgICAgICAgc2F2ZTogdGhpcy5zYXZlLFxyXG4gICAgICAgICAgICAgICAgZWRpdDogdGhpcy5lZGl0LFxyXG4gICAgICAgICAgICAgICAgZGVhY3RpdmF0ZTogdGhpcy5kZWFjdGl2YXRlLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZhdGU6IHRoaXMuYWN0aXZhdGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcG9wb3Zlci5wcmVzZW50KHsgZXY6ICRldmVudCB9KVxyXG4gICAgICAgIHBvcG92ZXIub25EaWREaXNtaXNzKChkYXRhKSA9PiB7IH0pXHJcbiAgICB9XHJcbn1cclxuIl19