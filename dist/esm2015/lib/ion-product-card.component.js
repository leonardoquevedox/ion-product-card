/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Product component.
 */
import { Component, ViewEncapsulation } from "@angular/core";
import { Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { NgZone } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";
import { PopoverController } from "ionic-angular";
import { IonProductCardOptionsMenu } from "./options/ion-product-card-options.component";
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
        this.CURRENCY_OPTIONS = { prefix: "R$ ", thousands: ".", decimal: ",", nullable: true };
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
        if (this.product && !(this.product.price > 0))
            delete this.product.price;
    }
    /**
     * @return {?}
     */
    showItemLeft() {
        return ((this.options.showDiscountTag && this.product.discountPrice) ||
            this.options.showPicture);
    }
    /**
     * @param {?} product
     * @return {?}
     */
    getQuantityFor(product) {
        if (!product.quantity)
            return "Adicionar";
        else
            return (product.quantity +
                " " +
                (product.quantity && product.quantity == 1 ? "Un." : "Un."));
    }
    /**
     * @return {?}
     */
    showQuantityButtons() {
        return ((this.options.showDecreaseButton
            ? this.options.showDecreaseButton(this.product)
            : this.decrement.observers.length > 0) ||
            (this.options.showIncreaseButton
                ? this.options.showIncreaseButton(this.product)
                : this.increment.observers.length > 0));
    }
    /**
     * @return {?}
     */
    showInventoryOptions() {
        return (this.remove.observers.length > 0 ||
            this.add.observers.length > 0 ||
            this.save.observers.length > 0);
    }
    /**
     * @return {?}
     */
    showCatalogueOptions() {
        return (this.edit.observers.length > 0 ||
            this.activate.observers.length > 0 ||
            this.deactivate.observers.length > 0);
    }
    /**
     * @return {?}
     */
    isDeleted() {
        return (this.product &&
            this.product.information &&
            this.product.information.deleted);
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
        popover.onDidDismiss((/**
         * @param {?} data
         * @return {?}
         */
        data => { }));
    }
}
IonProductCardComponent.decorators = [
    { type: Component, args: [{
                selector: "ion-product-card",
                template: "<ion-card product *ngIf=\"product && product.information\" [ngClass]=\"{ 'deleted': isDeleted(), 'show-image': options.showPicture, 'discount-product' : product.discountPrice }\">\r\n    <ion-card-header product-header color=\"secondary\" *ngIf=\"options.showPicture\" (click)=\"view.emit(product)\">\r\n        <section product-name>\r\n            <p discount-tag *ngIf=\"options.showDiscountTag && product.discountPrice\">\r\n                <span translate=\"promotion\"></span>\r\n            </p>\r\n            {{ product.information.name }}\r\n            <br/>\r\n            <section *ngIf=\"options.showProductQuantity\">({{product.quantity}}x)</section>\r\n        </section>\r\n        <ion-spinner product-spinner *ngIf=\"product.loading\"></ion-spinner>\r\n    </ion-card-header>\r\n    <ion-card-content no-padding>\r\n        <ion-item text-center no-padding>\r\n            <article item-left product-picture (click)=\"view.emit(product)\">\r\n                <img [src]=\"product.picture\" />\r\n            </article>\r\n            <form>\r\n                <p text-color=\"almost-white\" deleted-tag *ngIf=\"isDeleted()\">\r\n                    Status:\r\n                    <span translate=\"deactivated\"></span>\r\n                </p>\r\n                <p product-info product-price discount *ngIf=\"options.showDiscountPrice && product.discountPrice\">\r\n                    <span prefix translate=\"by\" *ngIf=\"product.discountPrice\"></span>:\r\n                    <span price-value>{{ product.discountPrice | currency : 'BRL' }}</span>\r\n                </p>\r\n                <p product-info product-price *ngIf=\"options.showPrice && product.price\">\r\n                    <span prefix *ngIf=\"product.discountPrice\">\r\n                        <span translate=\"from\"></span>:\r\n                    </span>\r\n                    <span price-value>{{ product.price | currency : 'BRL' }}</span>\r\n                </p>\r\n                <ion-row>\r\n                    <section col [attr.col-6]=\"options.showStockInput\" *ngIf=\"options.showPriceInput\" price-input>\r\n                        <input name=\"price\" autocomplete=\"off\" autocorrect=\"off\" padding-input type=\"tel\" placeholder=\"Pre\u00E7o\" [(ngModel)]=\"product.price\"\r\n                            currencyMask [options]=\"CURRENCY_OPTIONS\">\r\n                    </section>\r\n                    <section col col-6 *ngIf=\"options.showStockInput\" stock-input>\r\n                        <input name=\"stock\" autocomplete=\"off\" autocorrect=\"off\" padding-input type=\"tel\" [placeholder]=\"'Estoque (ex: 100)'\" [(ngModel)]=\"product.stock\">\r\n                        <label text-color=\"almost-white\">\r\n                            <span translate=\"unities\"></span>\r\n                        </label>\r\n                    </section>\r\n                </ion-row>\r\n                <section *ngIf=\"options.showDiscountPriceInput\" price-input discount-price-input>\r\n                    <span prefix>\r\n                        <span translate=\"by\"></span>:\r\n                    </span>\r\n                    <input name=\"discount_price\" type=\"tel\" [placeholder]=\"00.00 | currency : 'BRL'\" [(ngModel)]=\"product.discountPrice\" currencyMask\r\n                        [options]=\"CURRENCY_OPTIONS\">\r\n                </section>\r\n            </form>\r\n            <section item-right *ngIf=\"showQuantityButtons()\">\r\n                <div no-padding cart-options>\r\n                    <button ion-button color=\"danger\" quantity-button *ngIf=\"decrement.observers.length > 0\" (click)=\"decrement.emit(product)\"\r\n                        [disabled]=\"product.loading || !product.quantity || !(product.quantity > 0)\">\r\n                        <ion-icon name=\"la-minus\"></ion-icon>\r\n                    </button>\r\n                    <ion-icon cart-icon name=\"la-shopping-cart\"></ion-icon>\r\n                    <button ion-button color=\"balanced\" quantity-button *ngIf=\"increment.observers.length > 0\" (click)=\"increment.emit(product)\"\r\n                        [disabled]=\"product.loading\">\r\n                        <ion-icon name=\"la-plus\"></ion-icon>\r\n                    </button>\r\n                    <p>{{ getQuantityFor(product) }}</p>\r\n                </div>\r\n            </section>\r\n            <section *ngIf=\"showInventoryOptions()\" inventory-options float-right>\r\n                <button type=\"submit\" ion-button round icon unicode color=\"balanced\" *ngIf=\"save.observers.length > 0\" (click)=\"save.emit(product)\"\r\n                    [disabled]=\"product.loading || !product.price || (product.discountPrice ? product.price < product.discountPrice : false)\">\r\n                    <ion-icon name=\"la-check\"></ion-icon>\r\n                </button>\r\n                <button type=\"submit\" ion-button round icon add-button color=\"balanced\" *ngIf=\"add.observers.length > 0\" (click)=\"add.emit(product)\"\r\n                    [disabled]=\"product.loading || !product.price || (product.discountPrice ? product.price < product.discountPrice : false)\">\r\n                    <ion-icon name=\"la-check\"></ion-icon>\r\n                </button>\r\n                <button type=\"button\" ion-button round icon delete-button remove-button color=\"danger\" *ngIf=\"remove.observers.length > 0\"\r\n                    (click)=\"remove.emit(product)\" [disabled]=\"product.loading\">\r\n                    <ion-icon name=\"la-trash\"></ion-icon>\r\n                </button>\r\n            </section>\r\n            \r\n            <section item-right *ngIf=\"showCatalogueOptions()\">\r\n                <a (click)=\"showOptionsFor($event, product)\" text-color=\"dark\" more-options>\r\n                    <ion-icon name=\"la-ellipsis-v\"></ion-icon>\r\n                </a>\r\n            </section>\r\n            \r\n            <button ion-button clear view-more color=\"positive\" (click)=\"view.emit(product)\" *ngIf=\"view.observers.length > 0\">\r\n                <span translate=\"view_more\"></span>\r\n            </button>\r\n        </ion-item>\r\n    </ion-card-content>\r\n</ion-card>",
                encapsulation: ViewEncapsulation.None,
                styles: ["ion-product-card [product]{background-color:#fff;display:block;margin-bottom:0;min-height:100px;padding:0;height:100%}ion-product-card [product].deleted [deleted-tag],ion-product-card [product].deleted [product-image],ion-product-card [product].deleted [product-name]{opacity:.4}ion-product-card [product] ion-card-header[product-header]{padding-top:1rem;margin-bottom:.5rem}ion-product-card [product] [product-picture] img{margin-left:.5rem;-o-object-fit:contain;object-fit:contain;height:9rem;width:9rem;border-radius:.4rem}ion-product-card [product] ion-label{margin-top:0;margin-bottom:1rem}ion-product-card [product] ion-item.item .item-inner{border-bottom:none}ion-product-card [product] [item-left]{margin-top:0}ion-product-card [product] img[product-image]{height:9rem;width:9rem;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;border-radius:50%;margin-left:1rem;padding:.5rem}ion-product-card [product] [deleted-tag]{font-size:1rem}ion-product-card [product] [product-name]{font-size:1.2rem;white-space:normal;text-align:center;padding:.4rem .4rem 0;display:flex;justify-content:center;align-items:center;font-weight:700;text-transform:uppercase}ion-product-card [product] [product-description],ion-product-card [product] [product-info]{color:#f4f4f4;font-size:1.3rem;margin-top:.5rem;margin-bottom:.5rem}ion-product-card [product] [product-price]{color:#4bc46e;font-size:1.4rem;vertical-align:baseline;text-align:center;margin-bottom:0}ion-product-card [product].discount-product [product-price]{text-decoration:line-through;margin-top:.5rem;font-size:1.2rem}ion-product-card [product].discount-product [product-price][discount]{text-decoration:none;font-size:1.5rem;font-weight:700}ion-product-card [product] [padding-input]{padding-top:1rem;padding-bottom:0}ion-product-card [product] [stock-input] input{width:95%;text-align:center;color:#1e88e5;border-bottom:.2rem solid #efefef;font-size:1rem}ion-product-card [product] [stock-input] label{text-transform:uppercase;display:block;font-size:1rem;opacity:.8;padding-top:.4rem}ion-product-card [product] [price-input]{color:#f4f4f4;text-align:center;display:inline-block}ion-product-card [product] [price-input] input{text-align:center!important;color:#4bc46e;margin:auto -2rem auto auto;max-width:90%;font-size:1.2rem;border-bottom:.2rem solid #ebebeb}ion-product-card [product] [price-input] input:focus{border-bottom-color:#4bc46e}ion-product-card [product] [price-input][discount-price-input]{margin-top:.5rem;margin-bottom:1rem;margin-left:-4.5rem;font-size:1.2rem}ion-product-card [product] [price-input][discount-price-input] [prefix]{color:#888;font-size:1.2rem}ion-product-card [product] [price-input][discount-price-input] input{padding-top:.5rem;color:#f74444;font-size:1.6rem;padding-bottom:.5rem}ion-product-card [product] [price-input][discount-price-input] input:focus{border-bottom-color:#f74444}ion-product-card [product] [inventory-options]{display:inline-block;margin-top:1.5rem}ion-product-card [product] [catalogue-options] button{width:4rem;height:4rem;padding-left:.2rem}ion-product-card [product] [catalogue-options] button ion-icon{font-size:1.6rem}ion-product-card [product] [cart-options] [cart-icon]{color:#bbb;padding-left:0;display:inline-block;vertical-align:middle;margin-top:-1.5rem}ion-product-card [product] [cart-options] [cart-icon]::before{font-size:4.5rem}ion-product-card [product] [cart-options] [quantity-button]{border-radius:50%;width:3rem;height:3rem}ion-product-card [product] [cart-options] [quantity-button] ion-icon{padding-left:0}ion-product-card [product] [cart-options] [quantity-button] ion-icon::before{font-size:1.4rem}ion-product-card [product] [cart-options] p{text-align:center;color:#999;font-size:1.2rem}ion-product-card [product] [more-options]{opacity:1!important}ion-product-card [product] [delete-button]{position:absolute;left:1rem}ion-product-card [product] [view-more]{text-align:center;display:block;margin:auto;padding-top:.8rem;font-size:1.2rem}[product-spinner]{position:absolute;right:2rem;bottom:.5rem;z-index:9999;width:2.2rem}[product-spinner] circle{stroke:#fff!important}@media (min-width:700px){[product]{border-right:1px solid #fafafa}}"]
            }] }
];
IonProductCardComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: PopoverController }
];
IonProductCardComponent.propDecorators = {
    product: [{ type: Input, args: ["product",] }],
    options: [{ type: Input, args: ["options",] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXByb2R1Y3QtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24tcHJvZHVjdC1jYXJkLyIsInNvdXJjZXMiOlsibGliL2lvbi1wcm9kdWN0LWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBUXpGLE1BQU07Ozs7OztJQXdCSixZQUNTLElBQVksRUFDWixjQUFpQyxFQUNqQyxXQUE4QjtRQUY5QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQTFCdkMscUJBQWdCLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFLekUsUUFBRyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3QyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0MsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdDLFdBQU0sR0FBc0IsSUFB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LHNDQUFzRDs7SUFFdEQsdUNBQXVEOztJQUV2RCx1Q0FBdUQ7O0lBRXZELHVDQUF1RDs7SUFFdkQseUNBQXlEOztJQUV6RCw2Q0FBNkQ7O0lBQzdELDJDQUEyRDs7SUFFM0QsNENBQTREOztJQUM1RCw0Q0FBNEQ7O0lBRTVELHVDQUF1RDs7SUFHckQsdUNBQW1COztJQUNuQixpREFBd0M7O0lBQ3hDLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZSBNSVRcclxuICogQHZlcnNpb24gMS4xLjBcclxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXHJcbiAqIEBkZXNjcmlwdGlvbiBQcm9kdWN0IGNvbXBvbmVudC5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSW5wdXQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUG9wb3ZlckNvbnRyb2xsZXIgfSBmcm9tIFwiaW9uaWMtYW5ndWxhclwiO1xyXG5cclxuaW1wb3J0IHsgSW9uUHJvZHVjdENhcmRPcHRpb25zTWVudSB9IGZyb20gXCIuL29wdGlvbnMvaW9uLXByb2R1Y3QtY2FyZC1vcHRpb25zLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiaW9uLXByb2R1Y3QtY2FyZFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcImlvbi1wcm9kdWN0LWNhcmQuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcImlvbi1wcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3NcIl0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW9uUHJvZHVjdENhcmRDb21wb25lbnQge1xyXG4gIENVUlJFTkNZX09QVElPTlMgPSB7IHByZWZpeDogXCJSJCBcIiwgdGhvdXNhbmRzOiBcIi5cIiwgZGVjaW1hbDogXCIsXCIsIG51bGxhYmxlOiB0cnVlIH07XHJcblxyXG4gIEBJbnB1dChcInByb2R1Y3RcIikgcHJvZHVjdDogYW55O1xyXG4gIEBJbnB1dChcIm9wdGlvbnNcIikgb3B0aW9uczogYW55O1xyXG5cclxuICBAT3V0cHV0KCkgYWRkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQE91dHB1dCgpIHNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KCkgdmlldzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBPdXRwdXQoKSBlZGl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBPdXRwdXQoKSBkZWFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KCkgaW5jcmVtZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZGVjcmVtZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB6b25lOiBOZ1pvbmUsXHJcbiAgICBwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHVibGljIHBvcG92ZXJDdHJsOiBQb3BvdmVyQ29udHJvbGxlclxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCB7fTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMudHJhbnNmb3JtKSB7XHJcbiAgICAgIHRoaXMucHJvZHVjdCA9IHRoaXMub3B0aW9ucy50cmFuc2Zvcm0odGhpcy5wcm9kdWN0KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb2R1Y3QgJiYgISh0aGlzLnByb2R1Y3QucHJpY2UgPiAwKSkgZGVsZXRlIHRoaXMucHJvZHVjdC5wcmljZTtcclxuICB9XHJcblxyXG4gIHNob3dJdGVtTGVmdCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICh0aGlzLm9wdGlvbnMuc2hvd0Rpc2NvdW50VGFnICYmIHRoaXMucHJvZHVjdC5kaXNjb3VudFByaWNlKSB8fFxyXG4gICAgICB0aGlzLm9wdGlvbnMuc2hvd1BpY3R1cmVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRRdWFudGl0eUZvcihwcm9kdWN0OiBhbnkpIHtcclxuICAgIGlmICghcHJvZHVjdC5xdWFudGl0eSkgcmV0dXJuIFwiQWRpY2lvbmFyXCI7XHJcbiAgICBlbHNlXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgcHJvZHVjdC5xdWFudGl0eSArXHJcbiAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgIChwcm9kdWN0LnF1YW50aXR5ICYmIHByb2R1Y3QucXVhbnRpdHkgPT0gMSA/IFwiVW4uXCIgOiBcIlVuLlwiKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgc2hvd1F1YW50aXR5QnV0dG9ucygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICh0aGlzLm9wdGlvbnMuc2hvd0RlY3JlYXNlQnV0dG9uXHJcbiAgICAgICAgPyB0aGlzLm9wdGlvbnMuc2hvd0RlY3JlYXNlQnV0dG9uKHRoaXMucHJvZHVjdClcclxuICAgICAgICA6IHRoaXMuZGVjcmVtZW50Lm9ic2VydmVycy5sZW5ndGggPiAwKSB8fFxyXG4gICAgICAodGhpcy5vcHRpb25zLnNob3dJbmNyZWFzZUJ1dHRvblxyXG4gICAgICAgID8gdGhpcy5vcHRpb25zLnNob3dJbmNyZWFzZUJ1dHRvbih0aGlzLnByb2R1Y3QpXHJcbiAgICAgICAgOiB0aGlzLmluY3JlbWVudC5vYnNlcnZlcnMubGVuZ3RoID4gMClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzaG93SW52ZW50b3J5T3B0aW9ucygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMucmVtb3ZlLm9ic2VydmVycy5sZW5ndGggPiAwIHx8XHJcbiAgICAgIHRoaXMuYWRkLm9ic2VydmVycy5sZW5ndGggPiAwIHx8XHJcbiAgICAgIHRoaXMuc2F2ZS5vYnNlcnZlcnMubGVuZ3RoID4gMFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNob3dDYXRhbG9ndWVPcHRpb25zKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5lZGl0Lm9ic2VydmVycy5sZW5ndGggPiAwIHx8XHJcbiAgICAgIHRoaXMuYWN0aXZhdGUub2JzZXJ2ZXJzLmxlbmd0aCA+IDAgfHxcclxuICAgICAgdGhpcy5kZWFjdGl2YXRlLm9ic2VydmVycy5sZW5ndGggPiAwXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaXNEZWxldGVkKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5wcm9kdWN0ICYmXHJcbiAgICAgIHRoaXMucHJvZHVjdC5pbmZvcm1hdGlvbiAmJlxyXG4gICAgICB0aGlzLnByb2R1Y3QuaW5mb3JtYXRpb24uZGVsZXRlZFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNob3dPcHRpb25zRm9yKCRldmVudCwgcHJvZHVjdCkge1xyXG4gICAgbGV0IHBvcG92ZXIgPSB0aGlzLnBvcG92ZXJDdHJsLmNyZWF0ZShJb25Qcm9kdWN0Q2FyZE9wdGlvbnNNZW51LCB7XHJcbiAgICAgIHByb2R1Y3Q6IHByb2R1Y3QsXHJcbiAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcclxuICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgYWRkOiB0aGlzLmFkZCxcclxuICAgICAgICBzYXZlOiB0aGlzLnNhdmUsXHJcbiAgICAgICAgZWRpdDogdGhpcy5lZGl0LFxyXG4gICAgICAgIGRlYWN0aXZhdGU6IHRoaXMuZGVhY3RpdmF0ZSxcclxuICAgICAgICBhY3RpdmF0ZTogdGhpcy5hY3RpdmF0ZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHBvcG92ZXIucHJlc2VudCh7IGV2OiAkZXZlbnQgfSk7XHJcbiAgICBwb3BvdmVyLm9uRGlkRGlzbWlzcyhkYXRhID0+IHt9KTtcclxuICB9XHJcbn1cclxuIl19