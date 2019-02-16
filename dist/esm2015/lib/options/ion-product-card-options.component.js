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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXByb2R1Y3QtY2FyZC1vcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1wcm9kdWN0LWNhcmQvIiwic291cmNlcyI6WyJsaWIvb3B0aW9ucy9pb24tcHJvZHVjdC1jYXJkLW9wdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFnQix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUVuRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFPekMsTUFBTTs7Ozs7O0lBS0YsWUFBbUIsUUFBd0IsRUFDaEMsU0FBb0IsRUFDcEIsY0FBaUM7UUFGekIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDaEMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDdkMsQ0FBQzs7OztJQUVELFNBQVM7UUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUE7SUFDdkYsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsS0FBYTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDaEQsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBd0I7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtJQUM3RCxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxJQUFVO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDL0IsQ0FBQzs7O1lBaENKLFNBQVMsU0FBQztnQkFDUCx3bkJBQXNEO2dCQUN0RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsT0FBTzthQUNuRDs7O1lBTlEsY0FBYztZQUNkLFNBQVM7WUFIVCxpQkFBaUI7Ozs7SUFXdEIsNENBQVk7O0lBQ1osNENBQVk7O0lBQ1osMkNBQVc7O0lBRUMsNkNBQStCOztJQUN2Qyw4Q0FBMkI7O0lBQzNCLG1EQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXG4gKiBAZGVzY3JpcHRpb24gUHJvZHVjdCBvcHRpb25zIGNvbXBvbmVudC5cbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgVmlld0NvbnRyb2xsZXIgfSBmcm9tICdpb25pYy1hbmd1bGFyJ1xuaW1wb3J0IHsgTmF2UGFyYW1zIH0gZnJvbSAnaW9uaWMtYW5ndWxhcidcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICdpb24tcHJvZHVjdC1jYXJkLW9wdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBJb25Qcm9kdWN0Q2FyZE9wdGlvbnNNZW51IHtcbiAgICBwcm9kdWN0OiBhbnlcbiAgICBvcHRpb25zOiBhbnlcbiAgICBldmVudHM6IGFueVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIHZpZXdDdHJsOiBWaWV3Q29udHJvbGxlcixcbiAgICAgICAgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLFxuICAgICAgICBwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdCA9IG5hdlBhcmFtcy5kYXRhLnByb2R1Y3RcbiAgICAgICAgdGhpcy5vcHRpb25zID0gbmF2UGFyYW1zLmRhdGEub3B0aW9uc1xuICAgICAgICB0aGlzLmV2ZW50cyA9IG5hdlBhcmFtcy5kYXRhLmV2ZW50c1xuICAgIH1cblxuICAgIGlzRGVsZXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdCAmJiB0aGlzLnByb2R1Y3QuaW5mb3JtYXRpb24gJiYgdGhpcy5wcm9kdWN0LmluZm9ybWF0aW9uLmRlbGV0ZWRcbiAgICB9XG5cbiAgICBlbWl0KGV2ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRzW2V2ZW50XS5lbWl0KHRoaXMucHJvZHVjdClcbiAgICB9XG5cbiAgICBoYXNMaXN0ZW5lcnMoZXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50cyAmJiBldmVudCAmJiBldmVudC5vYnNlcnZlcnMubGVuZ3RoID4gMFxuICAgIH1cblxuICAgIGNsb3NlKGRhdGE/OiBhbnkpIHtcbiAgICAgICAgdGhpcy52aWV3Q3RybC5kaXNtaXNzKGRhdGEpXG4gICAgfVxufSJdfQ==