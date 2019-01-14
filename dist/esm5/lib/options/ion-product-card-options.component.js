/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Product options component.
 */
import { ChangeDetectorRef, Component, ChangeDetectionStrategy } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
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
        { type: Component, args: [{
                    template: "<button ion-item popover-item *ngIf=\"hasListeners(events.edit)\" (click)=\"emit('edit'); close();\" [disabled]=\"product.showSpinner\">\n    <span translate=\"edit\"></span>\n</button>\n<button ion-item popover-item *ngIf=\"!isDeleted() && hasListeners(events.deactivate)\" (click)=\"emit('deactivate'); close();\" [disabled]=\"product.showSpinner\">\n    <span translate=\"deactivate\"></span>\n</button>\n<button ion-item popover-item *ngIf=\"isDeleted() && hasListeners(events.activate)\" (click)=\"emit('activate'); close();\" [disabled]=\"product.showSpinner\">\n    <span translate=\"activate\"></span>\n</button>",
                    changeDetection: ChangeDetectionStrategy.Default
                }] }
    ];
    /** @nocollapse */
    IonProductCardOptionsMenu.ctorParameters = function () { return [
        { type: ViewController },
        { type: NavParams },
        { type: ChangeDetectorRef }
    ]; };
    return IonProductCardOptionsMenu;
}());
export { IonProductCardOptionsMenu };
if (false) {
    /** @type {?} */
    IonProductCardOptionsMenu.prototype.product;
    /** @type {?} */
    IonProductCardOptionsMenu.prototype.options;
    /** @type {?} */
    IonProductCardOptionsMenu.prototype.events;
    /** @type {?} */
    IonProductCardOptionsMenu.prototype.viewCtrl;
    /** @type {?} */
    IonProductCardOptionsMenu.prototype.navParams;
    /** @type {?} */
    IonProductCardOptionsMenu.prototype.changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXByb2R1Y3QtY2FyZC1vcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1wcm9kdWN0LWNhcmQvIiwic291cmNlcyI6WyJsaWIvb3B0aW9ucy9pb24tcHJvZHVjdC1jYXJkLW9wdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFnQix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUVuRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFekM7SUFVSSxtQ0FBbUIsUUFBd0IsRUFDaEMsU0FBb0IsRUFDcEIsY0FBaUM7UUFGekIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDaEMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDdkMsQ0FBQzs7OztJQUVELDZDQUFTOzs7SUFBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUE7SUFDdkYsQ0FBQzs7Ozs7SUFFRCx3Q0FBSTs7OztJQUFKLFVBQUssS0FBYTtRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2hELENBQUM7Ozs7O0lBRUQsZ0RBQVk7Ozs7SUFBWixVQUFhLEtBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO0lBQzdELENBQUM7Ozs7O0lBRUQseUNBQUs7Ozs7SUFBTCxVQUFNLElBQVU7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMvQixDQUFDOztnQkFoQ0osU0FBUyxTQUFDO29CQUNQLHduQkFBc0Q7b0JBQ3RELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPO2lCQUNuRDs7OztnQkFOUSxjQUFjO2dCQUNkLFNBQVM7Z0JBSFQsaUJBQWlCOztJQXNDMUIsZ0NBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTVCWSx5QkFBeUI7OztJQUNsQyw0Q0FBWTs7SUFDWiw0Q0FBWTs7SUFDWiwyQ0FBVzs7SUFFQyw2Q0FBK0I7O0lBQ3ZDLDhDQUEyQjs7SUFDM0IsbURBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBQcm9kdWN0IG9wdGlvbnMgY29tcG9uZW50LlxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBWaWV3Q29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInXG5pbXBvcnQgeyBOYXZQYXJhbXMgfSBmcm9tICdpb25pYy1hbmd1bGFyJ1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJ2lvbi1wcm9kdWN0LWNhcmQtb3B0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxufSlcblxuZXhwb3J0IGNsYXNzIElvblByb2R1Y3RDYXJkT3B0aW9uc01lbnUge1xuICAgIHByb2R1Y3Q6IGFueVxuICAgIG9wdGlvbnM6IGFueVxuICAgIGV2ZW50czogYW55XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlld0N0cmw6IFZpZXdDb250cm9sbGVyLFxuICAgICAgICBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsXG4gICAgICAgIHB1YmxpYyBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0ID0gbmF2UGFyYW1zLmRhdGEucHJvZHVjdFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBuYXZQYXJhbXMuZGF0YS5vcHRpb25zXG4gICAgICAgIHRoaXMuZXZlbnRzID0gbmF2UGFyYW1zLmRhdGEuZXZlbnRzXG4gICAgfVxuXG4gICAgaXNEZWxldGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0ICYmIHRoaXMucHJvZHVjdC5pbmZvcm1hdGlvbiAmJiB0aGlzLnByb2R1Y3QuaW5mb3JtYXRpb24uZGVsZXRlZFxuICAgIH1cblxuICAgIGVtaXQoZXZlbnQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudHNbZXZlbnRdLmVtaXQodGhpcy5wcm9kdWN0KVxuICAgIH1cblxuICAgIGhhc0xpc3RlbmVycyhldmVudDogRXZlbnRFbWl0dGVyPGFueT4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRzICYmIGV2ZW50ICYmIGV2ZW50Lm9ic2VydmVycy5sZW5ndGggPiAwXG4gICAgfVxuXG4gICAgY2xvc2UoZGF0YT86IGFueSkge1xuICAgICAgICB0aGlzLnZpZXdDdHJsLmRpc21pc3MoZGF0YSlcbiAgICB9XG59Il19