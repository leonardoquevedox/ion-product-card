/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXByb2R1Y3QtY2FyZC1vcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1wcm9kdWN0LWNhcmQvIiwic291cmNlcyI6WyJsaWIvb3B0aW9ucy9pb24tcHJvZHVjdC1jYXJkLW9wdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFnQix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUVuRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFekM7SUFVSSxtQ0FBbUIsUUFBd0IsRUFDaEMsU0FBb0IsRUFDcEIsY0FBaUM7UUFGekIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDaEMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDdkMsQ0FBQzs7OztJQUVELDZDQUFTOzs7SUFBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUE7SUFDdkYsQ0FBQzs7Ozs7SUFFRCx3Q0FBSTs7OztJQUFKLFVBQUssS0FBYTtRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2hELENBQUM7Ozs7O0lBRUQsZ0RBQVk7Ozs7SUFBWixVQUFhLEtBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO0lBQzdELENBQUM7Ozs7O0lBRUQseUNBQUs7Ozs7SUFBTCxVQUFNLElBQVU7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMvQixDQUFDOztnQkFoQ0osU0FBUyxTQUFDO29CQUNQLHduQkFBc0Q7b0JBQ3RELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPO2lCQUNuRDs7O2dCQU5RLGNBQWM7Z0JBQ2QsU0FBUztnQkFIVCxpQkFBaUI7O0lBc0MxQixnQ0FBQztDQUFBLEFBakNELElBaUNDO1NBNUJZLHlCQUF5Qjs7O0lBQ2xDLDRDQUFZOztJQUNaLDRDQUFZOztJQUNaLDJDQUFXOztJQUVDLDZDQUErQjs7SUFDdkMsOENBQTJCOztJQUMzQixtREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBhdXRob3IgTGVvbmFyZG8gUXVldmVkb1xuICogQGRlc2NyaXB0aW9uIFByb2R1Y3Qgb3B0aW9ucyBjb21wb25lbnQuXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IFZpZXdDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcidcbmltcG9ydCB7IE5hdlBhcmFtcyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInXG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAnaW9uLXByb2R1Y3QtY2FyZC1vcHRpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG59KVxuXG5leHBvcnQgY2xhc3MgSW9uUHJvZHVjdENhcmRPcHRpb25zTWVudSB7XG4gICAgcHJvZHVjdDogYW55XG4gICAgb3B0aW9uczogYW55XG4gICAgZXZlbnRzOiBhbnlcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q3RybDogVmlld0NvbnRyb2xsZXIsXG4gICAgICAgIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcyxcbiAgICAgICAgcHVibGljIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICB0aGlzLnByb2R1Y3QgPSBuYXZQYXJhbXMuZGF0YS5wcm9kdWN0XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG5hdlBhcmFtcy5kYXRhLm9wdGlvbnNcbiAgICAgICAgdGhpcy5ldmVudHMgPSBuYXZQYXJhbXMuZGF0YS5ldmVudHNcbiAgICB9XG5cbiAgICBpc0RlbGV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3QgJiYgdGhpcy5wcm9kdWN0LmluZm9ybWF0aW9uICYmIHRoaXMucHJvZHVjdC5pbmZvcm1hdGlvbi5kZWxldGVkXG4gICAgfVxuXG4gICAgZW1pdChldmVudDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50c1tldmVudF0uZW1pdCh0aGlzLnByb2R1Y3QpXG4gICAgfVxuXG4gICAgaGFzTGlzdGVuZXJzKGV2ZW50OiBFdmVudEVtaXR0ZXI8YW55Pikge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudHMgJiYgZXZlbnQgJiYgZXZlbnQub2JzZXJ2ZXJzLmxlbmd0aCA+IDBcbiAgICB9XG5cbiAgICBjbG9zZShkYXRhPzogYW55KSB7XG4gICAgICAgIHRoaXMudmlld0N0cmwuZGlzbWlzcyhkYXRhKVxuICAgIH1cbn0iXX0=