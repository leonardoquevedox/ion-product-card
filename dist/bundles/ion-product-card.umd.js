(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ionic-angular'), require('@ngx-translate/core'), require('ngx-currency-mask')) :
    typeof define === 'function' && define.amd ? define('ion-product-card', ['exports', '@angular/core', '@angular/common', 'ionic-angular', '@ngx-translate/core', 'ngx-currency-mask'], factory) :
    (factory((global['ion-product-card'] = {}),global.ng.core,global.ng.common,global.ionicAngular,global.ngxTranslate,global.ngxCurrencyMask));
}(this, (function (exports,core,common,ionicAngular,core$1,ngxCurrencyMask) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonProductCardOptionsMenu = /** @class */ (function () {
        function IonProductCardOptionsMenu(viewCtrl, navParams, changeDetector) {
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
        IonProductCardOptionsMenu.prototype.isDeleted = /**
         * @return {?}
         */
            function () {
                return this.product && this.product.information && this.product.information.deleted;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        IonProductCardOptionsMenu.prototype.emit = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return this.events[event].emit(this.product);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        IonProductCardOptionsMenu.prototype.hasListeners = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return this.events && event && event.observers.length > 0;
            };
        /**
         * @param {?=} data
         * @return {?}
         */
        IonProductCardOptionsMenu.prototype.close = /**
         * @param {?=} data
         * @return {?}
         */
            function (data) {
                this.viewCtrl.dismiss(data);
            };
        IonProductCardOptionsMenu.decorators = [
            { type: core.Component, args: [{
                        template: "<button ion-item popover-item *ngIf=\"hasListeners(events.edit)\" (click)=\"emit('edit'); close();\" [disabled]=\"product.showSpinner\">\n    <span translate=\"edit\"></span>\n</button>\n<button ion-item popover-item *ngIf=\"!isDeleted() && hasListeners(events.deactivate)\" (click)=\"emit('deactivate'); close();\" [disabled]=\"product.showSpinner\">\n    <span translate=\"deactivate\"></span>\n</button>\n<button ion-item popover-item *ngIf=\"isDeleted() && hasListeners(events.activate)\" (click)=\"emit('activate'); close();\" [disabled]=\"product.showSpinner\">\n    <span translate=\"activate\"></span>\n</button>",
                        changeDetection: core.ChangeDetectionStrategy.Default
                    }] }
        ];
        /** @nocollapse */
        IonProductCardOptionsMenu.ctorParameters = function () {
            return [
                { type: ionicAngular.ViewController },
                { type: ionicAngular.NavParams },
                { type: core.ChangeDetectorRef }
            ];
        };
        return IonProductCardOptionsMenu;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonProductCardOptionsModule = /** @class */ (function () {
        function IonProductCardOptionsModule() {
        }
        IonProductCardOptionsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, ionicAngular.IonicModule, core$1.TranslateModule],
                        declarations: [IonProductCardOptionsMenu],
                        exports: [IonProductCardOptionsMenu]
                    },] }
        ];
        return IonProductCardOptionsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonProductCardComponent = /** @class */ (function () {
        function IonProductCardComponent(zone, changeDetector, popoverCtrl) {
            this.zone = zone;
            this.changeDetector = changeDetector;
            this.popoverCtrl = popoverCtrl;
            this.CURRENCY_OPTIONS = { prefix: 'R$ ', thousands: '.', decimal: ',' };
            this.add = new core.EventEmitter();
            this.save = new core.EventEmitter();
            this.view = new core.EventEmitter();
            this.edit = new core.EventEmitter();
            this.remove = new core.EventEmitter();
            this.deactivate = new core.EventEmitter();
            this.activate = new core.EventEmitter();
            this.increment = new core.EventEmitter();
            this.decrement = new core.EventEmitter();
            this.blur = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ion-product-card',
                        template: "<ion-card product *ngIf=\"product && product.information\" [ngClass]=\"{ 'deleted': isDeleted(), 'show-image': options.showPicture, 'discount-product' : product.discountPrice }\">\r\n    <ion-card-header product-header color=\"secondary\" *ngIf=\"options.showPicture\" (click)=\"view.emit(product)\">\r\n        <section product-name>\r\n            <p discount-tag *ngIf=\"options.showDiscountTag && product.discountPrice\">\r\n                <span translate=\"promotion\"></span>\r\n            </p>\r\n            {{ product.information.name }}\r\n            <br/>\r\n            <section *ngIf=\"options.showProductQuantity\">({{product.quantity}}x)</section>\r\n        </section>\r\n        <ion-spinner product-spinner *ngIf=\"product.loading\"></ion-spinner>\r\n    </ion-card-header>\r\n    <ion-card-content no-padding>\r\n        <ion-item text-center no-padding>\r\n            <article item-left product-picture>\r\n                <img [src]=\"product.picture\" />\r\n            </article>\r\n            <form>\r\n                <p text-color=\"almost-white\" deleted-tag *ngIf=\"isDeleted()\">\r\n                    Status:\r\n                    <span translate=\"deactivated\"></span>\r\n                </p>\r\n                <p product-info product-price discount *ngIf=\"options.showDiscountPrice && product.discountPrice\">\r\n                    <span prefix translate=\"by\" *ngIf=\"product.discountPrice\"></span>:\r\n                    <span price-value>{{ product.discountPrice | currency : 'BRL' }}</span>\r\n                </p>\r\n                <p product-info product-price *ngIf=\"options.showPrice && product.price\">\r\n                    <span prefix *ngIf=\"product.discountPrice\">\r\n                        <span translate=\"from\"></span>:\r\n                    </span>\r\n                    <span price-value>{{ product.price | currency : 'BRL' }}</span>\r\n                </p>\r\n                <ion-row>\r\n                    <section col [attr.col-6]=\"options.showStockInput\" *ngIf=\"options.showPriceInput\" price-input>\r\n                        <input name=\"price\" autocomplete=\"off\" autocorrect=\"off\" padding-input type=\"tel\" placeholder=\"Pre\u00E7o\" [(ngModel)]=\"product.price\"\r\n                            currencyMask [options]=\"CURRENCY_OPTIONS\">\r\n                    </section>\r\n                    <section col col-6 *ngIf=\"options.showStockInput\" stock-input>\r\n                        <input name=\"stock\" autocomplete=\"off\" autocorrect=\"off\" padding-input type=\"tel\" [placeholder]=\"'Estoque (ex: 100)'\" [(ngModel)]=\"product.stock\">\r\n                        <label text-color=\"almost-white\">\r\n                            <span translate=\"unities\"></span>\r\n                        </label>\r\n                    </section>\r\n                </ion-row>\r\n                <section *ngIf=\"options.showDiscountPriceInput\" price-input discount-price-input>\r\n                    <span prefix>\r\n                        <span translate=\"by\"></span>:\r\n                    </span>\r\n                    <input name=\"discount_price\" type=\"tel\" [placeholder]=\"00.00 | currency : 'BRL'\" [(ngModel)]=\"product.discountPrice\" currencyMask\r\n                        [options]=\"CURRENCY_OPTIONS\">\r\n                </section>\r\n            </form>\r\n            <section item-right *ngIf=\"showQuantityButtons()\">\r\n                <div no-padding cart-options>\r\n                    <button ion-button color=\"danger\" quantity-button *ngIf=\"decrement.observers.length > 0\" (click)=\"decrement.emit(product)\"\r\n                        [disabled]=\"product.loading || !product.quantity || !(product.quantity > 0)\">\r\n                        <ion-icon name=\"la-minus\"></ion-icon>\r\n                    </button>\r\n                    <ion-icon cart-icon name=\"la-shopping-cart\"></ion-icon>\r\n                    <button ion-button color=\"balanced\" quantity-button *ngIf=\"increment.observers.length > 0\" (click)=\"increment.emit(product)\"\r\n                        [disabled]=\"product.loading\">\r\n                        <ion-icon name=\"la-plus\"></ion-icon>\r\n                    </button>\r\n                    <p>{{ getQuantityFor(product) }}</p>\r\n                </div>\r\n            </section>\r\n            <section *ngIf=\"showInventoryOptions()\" inventory-options float-right>\r\n                <button type=\"submit\" ion-button round icon unicode color=\"balanced\" *ngIf=\"save.observers.length > 0\" (click)=\"save.emit(product)\"\r\n                    [disabled]=\"product.loading || !product.price || (product.discountPrice ? product.price < product.discountPrice : false)\">\r\n                    <ion-icon name=\"la-check\"></ion-icon>\r\n                </button>\r\n                <button type=\"submit\" ion-button round icon add-button color=\"balanced\" *ngIf=\"add.observers.length > 0\" (click)=\"add.emit(product)\"\r\n                    [disabled]=\"product.loading || !product.price || (product.discountPrice ? product.price < product.discountPrice : false)\">\r\n                    <ion-icon name=\"la-check\"></ion-icon>\r\n                </button>\r\n                <button type=\"button\" ion-button round icon delete-button remove-button color=\"danger\" *ngIf=\"remove.observers.length > 0\"\r\n                    (click)=\"remove.emit(product)\" [disabled]=\"product.loading\">\r\n                    <ion-icon name=\"la-trash\"></ion-icon>\r\n                </button>\r\n            </section>\r\n            \r\n            <section item-right *ngIf=\"showCatalogueOptions()\">\r\n                <a (click)=\"showOptionsFor($event, product)\" text-color=\"dark\" more-options>\r\n                    <ion-icon name=\"la-ellipsis-v\"></ion-icon>\r\n                </a>\r\n            </section>\r\n            \r\n            <button ion-button clear view-more color=\"positive\" (click)=\"view.emit(product)\" *ngIf=\"view.observers.length > 0\">\r\n                <span translate=\"view_more\"></span>\r\n            </button>\r\n        </ion-item>\r\n    </ion-card-content>\r\n</ion-card>",
                        styles: ["\n        :host ion-item {\n            border-bottom: 0px\n        }\n    "]
                    }] }
        ];
        /** @nocollapse */
        IonProductCardComponent.ctorParameters = function () {
            return [
                { type: core.NgZone },
                { type: core.ChangeDetectorRef },
                { type: ionicAngular.PopoverController }
            ];
        };
        IonProductCardComponent.propDecorators = {
            product: [{ type: core.Input, args: ['product',] }],
            options: [{ type: core.Input, args: ['options',] }],
            add: [{ type: core.Output }],
            save: [{ type: core.Output }],
            view: [{ type: core.Output }],
            edit: [{ type: core.Output }],
            remove: [{ type: core.Output }],
            deactivate: [{ type: core.Output }],
            activate: [{ type: core.Output }],
            increment: [{ type: core.Output }],
            decrement: [{ type: core.Output }],
            blur: [{ type: core.Output }]
        };
        return IonProductCardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonProductCardModule = /** @class */ (function () {
        function IonProductCardModule() {
        }
        IonProductCardModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            ionicAngular.IonicModule,
                            core$1.TranslateModule,
                            ngxCurrencyMask.CurrencyMaskModule,
                            IonProductCardOptionsModule
                        ],
                        declarations: [IonProductCardComponent],
                        exports: [IonProductCardComponent]
                    },] }
        ];
        return IonProductCardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.IonProductCardOptionsModule = IonProductCardOptionsModule;
    exports.IonProductCardComponent = IonProductCardComponent;
    exports.IonProductCardModule = IonProductCardModule;
    exports.ɵa = IonProductCardOptionsMenu;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ion-product-card.umd.js.map