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
export class IonProductCardOptionsMenu {
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
/** @nocollapse */
IonProductCardOptionsMenu.ctorParameters = () => [
    { type: ViewController },
    { type: NavParams },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXByb2R1Y3QtY2FyZC1vcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1wcm9kdWN0LWNhcmQvIiwic291cmNlcyI6WyJsaWIvb3B0aW9ucy9pb24tcHJvZHVjdC1jYXJkLW9wdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFnQix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUVuRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFPekMsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7O0lBS2xDLFlBQW1CLFFBQXdCLEVBQ2hDLFNBQW9CLEVBQ3BCLGNBQWlDO1FBRnpCLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3ZDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQTtJQUN2RixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxLQUFhO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDaEQsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsSUFBVTtRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQy9CLENBQUM7OztZQWhDSixTQUFTLFNBQUM7Z0JBQ1Asd25CQUFzRDtnQkFDdEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE9BQU87YUFDbkQ7Ozs7WUFOUSxjQUFjO1lBQ2QsU0FBUztZQUhULGlCQUFpQjs7OztJQVd0Qiw0Q0FBWTs7SUFDWiw0Q0FBWTs7SUFDWiwyQ0FBVzs7SUFFQyw2Q0FBK0I7O0lBQ3ZDLDhDQUEyQjs7SUFDM0IsbURBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBQcm9kdWN0IG9wdGlvbnMgY29tcG9uZW50LlxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBWaWV3Q29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInXG5pbXBvcnQgeyBOYXZQYXJhbXMgfSBmcm9tICdpb25pYy1hbmd1bGFyJ1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJ2lvbi1wcm9kdWN0LWNhcmQtb3B0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxufSlcblxuZXhwb3J0IGNsYXNzIElvblByb2R1Y3RDYXJkT3B0aW9uc01lbnUge1xuICAgIHByb2R1Y3Q6IGFueVxuICAgIG9wdGlvbnM6IGFueVxuICAgIGV2ZW50czogYW55XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlld0N0cmw6IFZpZXdDb250cm9sbGVyLFxuICAgICAgICBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsXG4gICAgICAgIHB1YmxpYyBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0ID0gbmF2UGFyYW1zLmRhdGEucHJvZHVjdFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBuYXZQYXJhbXMuZGF0YS5vcHRpb25zXG4gICAgICAgIHRoaXMuZXZlbnRzID0gbmF2UGFyYW1zLmRhdGEuZXZlbnRzXG4gICAgfVxuXG4gICAgaXNEZWxldGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0ICYmIHRoaXMucHJvZHVjdC5pbmZvcm1hdGlvbiAmJiB0aGlzLnByb2R1Y3QuaW5mb3JtYXRpb24uZGVsZXRlZFxuICAgIH1cblxuICAgIGVtaXQoZXZlbnQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudHNbZXZlbnRdLmVtaXQodGhpcy5wcm9kdWN0KVxuICAgIH1cblxuICAgIGhhc0xpc3RlbmVycyhldmVudDogRXZlbnRFbWl0dGVyPGFueT4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRzICYmIGV2ZW50ICYmIGV2ZW50Lm9ic2VydmVycy5sZW5ndGggPiAwXG4gICAgfVxuXG4gICAgY2xvc2UoZGF0YT86IGFueSkge1xuICAgICAgICB0aGlzLnZpZXdDdHJsLmRpc21pc3MoZGF0YSlcbiAgICB9XG59Il19