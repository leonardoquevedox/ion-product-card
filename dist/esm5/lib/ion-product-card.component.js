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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXByb2R1Y3QtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24tcHJvZHVjdC1jYXJkLyIsInNvdXJjZXMiOlsibGliL2lvbi1wcm9kdWN0LWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzVELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRWpELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFBO0FBRXhGO0lBc0NJLGlDQUFtQixJQUFZLEVBQ3BCLGNBQWlDLEVBQ2pDLFdBQThCO1FBRnRCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDcEIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQS9CekMscUJBQWdCLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFBO1FBTXhELFFBQUcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUczQyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHNUMsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFBO1FBRzVDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUc1QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHOUMsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFBO1FBQ2xELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUVoRCxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUE7UUFDakQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFBO1FBRWpELFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUlULENBQUM7Ozs7SUFFOUMsMENBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFBO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN2RCxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksS0FBSztRQUNiLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDekIsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7SUFDNUgsQ0FBQzs7OztJQUVELDhDQUFZOzs7SUFBWjtRQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUE7SUFDbkcsQ0FBQzs7Ozs7SUFFRCxnREFBYzs7OztJQUFkLFVBQWUsT0FBWTtRQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFBQyxNQUFNLENBQUMsV0FBVyxDQUFBO1FBQ3pDLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3BHLENBQUM7Ozs7SUFFRCxxREFBbUI7OztJQUFuQjtRQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDalEsQ0FBQzs7OztJQUVELHNEQUFvQjs7O0lBQXBCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO0lBQzlHLENBQUM7Ozs7SUFFRCxzREFBb0I7OztJQUFwQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtJQUN2SCxDQUFDOzs7O0lBRUQsMkNBQVM7OztJQUFUO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFBO0lBQ3ZGLENBQUM7Ozs7OztJQUVELGdEQUFjOzs7OztJQUFkLFVBQWUsTUFBTSxFQUFFLE9BQU87O1lBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRTtZQUM3RCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsTUFBTSxFQUFFO2dCQUNKLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDM0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQzFCO1NBQ0osQ0FBQztRQUNGLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUMvQixPQUFPLENBQUMsWUFBWSxDQUFDLFVBQUMsSUFBSSxJQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7O2dCQTlGSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsa2tNQUE4QztvQkFFOUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN4Qzs7O2dCQVhRLE1BQU07Z0JBQ04saUJBQWlCO2dCQUNqQixpQkFBaUI7OzswQkFlckIsS0FBSyxTQUFDLFNBQVM7MEJBQ2YsS0FBSyxTQUFDLFNBQVM7c0JBR2YsTUFBTTt1QkFHTixNQUFNO3VCQUdOLE1BQU07dUJBR04sTUFBTTt5QkFHTixNQUFNOzZCQUdOLE1BQU07MkJBQ04sTUFBTTs0QkFFTixNQUFNOzRCQUNOLE1BQU07dUJBRU4sTUFBTTs7SUEyRFgsOEJBQUM7Q0FBQSxBQS9GRCxJQStGQztTQXhGWSx1QkFBdUI7OztJQUVoQyxtREFBa0U7O0lBRWxFLDBDQUE4Qjs7SUFDOUIsMENBQThCOztJQUc5QixzQ0FBcUQ7O0lBR3JELHVDQUFzRDs7SUFHdEQsdUNBQXNEOztJQUd0RCx1Q0FBc0Q7O0lBR3RELHlDQUF3RDs7SUFHeEQsNkNBQTREOztJQUM1RCwyQ0FBMEQ7O0lBRTFELDRDQUEyRDs7SUFDM0QsNENBQTJEOztJQUUzRCx1Q0FBc0Q7O0lBRTFDLHVDQUFtQjs7SUFDM0IsaURBQXdDOztJQUN4Qyw4Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEB2ZXJzaW9uIDEuMS4wXHJcbiAqIEBhdXRob3IgTGVvbmFyZG8gUXVldmVkb1xyXG4gKiBAZGVzY3JpcHRpb24gUHJvZHVjdCBjb21wb25lbnQuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IFBvcG92ZXJDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcidcclxuXHJcbmltcG9ydCB7IElvblByb2R1Y3RDYXJkT3B0aW9uc01lbnUgfSBmcm9tICcuL29wdGlvbnMvaW9uLXByb2R1Y3QtY2FyZC1vcHRpb25zLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpb24tcHJvZHVjdC1jYXJkJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnaW9uLXByb2R1Y3QtY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnaW9uLXByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIElvblByb2R1Y3RDYXJkQ29tcG9uZW50IHtcclxuXHJcbiAgICBDVVJSRU5DWV9PUFRJT05TID0geyBwcmVmaXg6ICdSJCAnLCB0aG91c2FuZHM6ICcuJywgZGVjaW1hbDogJywnIH1cclxuXHJcbiAgICBASW5wdXQoJ3Byb2R1Y3QnKSBwcm9kdWN0OiBhbnlcclxuICAgIEBJbnB1dCgnb3B0aW9ucycpIG9wdGlvbnM6IGFueVxyXG5cclxuXHJcbiAgICBAT3V0cHV0KCkgYWRkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuXHJcbiAgICBAT3V0cHV0KCkgc2F2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcblxyXG4gICAgQE91dHB1dCgpIHZpZXc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG5cclxuICAgIEBPdXRwdXQoKSBlZGl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuXHJcbiAgICBAT3V0cHV0KCkgcmVtb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuXHJcbiAgICBAT3V0cHV0KCkgZGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuICAgIEBPdXRwdXQoKSBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgICBAT3V0cHV0KCkgaW5jcmVtZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG4gICAgQE91dHB1dCgpIGRlY3JlbWVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgem9uZTogTmdab25lLFxyXG4gICAgICAgIHB1YmxpYyBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHVibGljIHBvcG92ZXJDdHJsOiBQb3BvdmVyQ29udHJvbGxlcikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKClcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge31cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3QgPSB0aGlzLm9wdGlvbnMudHJhbnNmb3JtKHRoaXMucHJvZHVjdClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0UHJpY2UocHJpY2UpIHtcclxuICAgICAgICBwcmljZSA9IHBhcnNlRmxvYXQocHJpY2UpXHJcbiAgICAgICAgcmV0dXJuIHByaWNlICYmIHByaWNlLnRvRml4ZWQgPyAocHJpY2UudG9GaXhlZCgyKS5zcGxpdCgnLicpWzBdKS5jb25jYXQoJywnKS5jb25jYXQocHJpY2UudG9GaXhlZCgyKS5zcGxpdCgnLicpWzFdKSA6ICcnXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0l0ZW1MZWZ0KCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5vcHRpb25zLnNob3dEaXNjb3VudFRhZyAmJiB0aGlzLnByb2R1Y3QuZGlzY291bnRQcmljZSkgfHwgdGhpcy5vcHRpb25zLnNob3dQaWN0dXJlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UXVhbnRpdHlGb3IocHJvZHVjdDogYW55KSB7XHJcbiAgICAgICAgaWYgKCFwcm9kdWN0LnF1YW50aXR5KSByZXR1cm4gJ0FkaWNpb25hcidcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9kdWN0LnF1YW50aXR5ICsgJyAnICsgKHByb2R1Y3QucXVhbnRpdHkgJiYgcHJvZHVjdC5xdWFudGl0eSA9PSAxID8gJ1VuLicgOiAnVW4uJylcclxuICAgIH1cclxuXHJcbiAgICBzaG93UXVhbnRpdHlCdXR0b25zKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5vcHRpb25zLnNob3dEZWNyZWFzZUJ1dHRvbiA/IHRoaXMub3B0aW9ucy5zaG93RGVjcmVhc2VCdXR0b24odGhpcy5wcm9kdWN0KSA6ICh0aGlzLmRlY3JlbWVudC5vYnNlcnZlcnMubGVuZ3RoID4gMCkpIHx8ICh0aGlzLm9wdGlvbnMuc2hvd0luY3JlYXNlQnV0dG9uID8gdGhpcy5vcHRpb25zLnNob3dJbmNyZWFzZUJ1dHRvbih0aGlzLnByb2R1Y3QpIDogKHRoaXMuaW5jcmVtZW50Lm9ic2VydmVycy5sZW5ndGggPiAwKSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93SW52ZW50b3J5T3B0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUub2JzZXJ2ZXJzLmxlbmd0aCA+IDAgfHwgdGhpcy5hZGQub2JzZXJ2ZXJzLmxlbmd0aCA+IDAgfHwgdGhpcy5zYXZlLm9ic2VydmVycy5sZW5ndGggPiAwXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NhdGFsb2d1ZU9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdC5vYnNlcnZlcnMubGVuZ3RoID4gMCB8fCB0aGlzLmFjdGl2YXRlLm9ic2VydmVycy5sZW5ndGggPiAwIHx8IHRoaXMuZGVhY3RpdmF0ZS5vYnNlcnZlcnMubGVuZ3RoID4gMFxyXG4gICAgfVxyXG5cclxuICAgIGlzRGVsZXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0ICYmIHRoaXMucHJvZHVjdC5pbmZvcm1hdGlvbiAmJiB0aGlzLnByb2R1Y3QuaW5mb3JtYXRpb24uZGVsZXRlZFxyXG4gICAgfVxyXG5cclxuICAgIHNob3dPcHRpb25zRm9yKCRldmVudCwgcHJvZHVjdCkge1xyXG4gICAgICAgIGxldCBwb3BvdmVyID0gdGhpcy5wb3BvdmVyQ3RybC5jcmVhdGUoSW9uUHJvZHVjdENhcmRPcHRpb25zTWVudSwge1xyXG4gICAgICAgICAgICBwcm9kdWN0OiBwcm9kdWN0LFxyXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXHJcbiAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgICAgYWRkOiB0aGlzLmFkZCxcclxuICAgICAgICAgICAgICAgIHNhdmU6IHRoaXMuc2F2ZSxcclxuICAgICAgICAgICAgICAgIGVkaXQ6IHRoaXMuZWRpdCxcclxuICAgICAgICAgICAgICAgIGRlYWN0aXZhdGU6IHRoaXMuZGVhY3RpdmF0ZSxcclxuICAgICAgICAgICAgICAgIGFjdGl2YXRlOiB0aGlzLmFjdGl2YXRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHBvcG92ZXIucHJlc2VudCh7IGV2OiAkZXZlbnQgfSlcclxuICAgICAgICBwb3BvdmVyLm9uRGlkRGlzbWlzcygoZGF0YSkgPT4geyB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==