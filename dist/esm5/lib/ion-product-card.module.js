/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Component module.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyMaskModule } from "ngx-currency-mask";
import { IonProductCardComponent } from './ion-product-card.component';
import { IonProductCardOptionsModule } from './options/ion-product-card-options.module';
var IonProductCardModule = /** @class */ (function () {
    function IonProductCardModule() {
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
    return IonProductCardModule;
}());
export { IonProductCardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXByb2R1Y3QtY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24tcHJvZHVjdC1jYXJkLyIsInNvdXJjZXMiOlsibGliL2lvbi1wcm9kdWN0LWNhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQ3RELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFBO0FBQ3RFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFBO0FBRXZGO0lBQUE7SUFXb0MsQ0FBQzs7Z0JBWHBDLFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQiwyQkFBMkI7cUJBQzlCO29CQUNELFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDckM7O0lBQ21DLDJCQUFDO0NBQUEsQUFYckMsSUFXcUM7U0FBeEIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgTGVvbmFyZG8gUXVldmVkb1xuICogQGRlc2NyaXB0aW9uIENvbXBvbmVudCBtb2R1bGUuXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdpb25pYy1hbmd1bGFyJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IEN1cnJlbmN5TWFza01vZHVsZSB9IGZyb20gXCJuZ3gtY3VycmVuY3ktbWFza1wiXG5pbXBvcnQgeyBJb25Qcm9kdWN0Q2FyZENvbXBvbmVudCB9IGZyb20gJy4vaW9uLXByb2R1Y3QtY2FyZC5jb21wb25lbnQnXG5pbXBvcnQgeyBJb25Qcm9kdWN0Q2FyZE9wdGlvbnNNb2R1bGUgfSBmcm9tICcuL29wdGlvbnMvaW9uLXByb2R1Y3QtY2FyZC1vcHRpb25zLm1vZHVsZSdcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgSW9uaWNNb2R1bGUsXG4gICAgICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICAgICAgQ3VycmVuY3lNYXNrTW9kdWxlLFxuICAgICAgICBJb25Qcm9kdWN0Q2FyZE9wdGlvbnNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW0lvblByb2R1Y3RDYXJkQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbSW9uUHJvZHVjdENhcmRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIElvblByb2R1Y3RDYXJkTW9kdWxlIHsgfSJdfQ==