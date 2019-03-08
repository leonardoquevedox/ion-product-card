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
import { NgxCurrencyModule } from "ngx-currency";
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
                        NgxCurrencyModule,
                        IonProductCardOptionsModule
                    ],
                    declarations: [IonProductCardComponent],
                    exports: [IonProductCardComponent]
                },] }
    ];
    return IonProductCardModule;
}());
export { IonProductCardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXByb2R1Y3QtY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24tcHJvZHVjdC1jYXJkLyIsInNvdXJjZXMiOlsibGliL2lvbi1wcm9kdWN0LWNhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQUNoRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQTtBQUN0RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQTtBQUV2RjtJQUFBO0lBV29DLENBQUM7O2dCQVhwQyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsMkJBQTJCO3FCQUM5QjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ3JDOztJQUNtQywyQkFBQztDQUFBLEFBWHJDLElBV3FDO1NBQXhCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBDb21wb25lbnQgbW9kdWxlLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnaW9uaWMtYW5ndWxhcidcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQgeyBOZ3hDdXJyZW5jeU1vZHVsZSB9IGZyb20gXCJuZ3gtY3VycmVuY3lcIlxuaW1wb3J0IHsgSW9uUHJvZHVjdENhcmRDb21wb25lbnQgfSBmcm9tICcuL2lvbi1wcm9kdWN0LWNhcmQuY29tcG9uZW50J1xuaW1wb3J0IHsgSW9uUHJvZHVjdENhcmRPcHRpb25zTW9kdWxlIH0gZnJvbSAnLi9vcHRpb25zL2lvbi1wcm9kdWN0LWNhcmQtb3B0aW9ucy5tb2R1bGUnXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIElvbmljTW9kdWxlLFxuICAgICAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgICAgIE5neEN1cnJlbmN5TW9kdWxlLFxuICAgICAgICBJb25Qcm9kdWN0Q2FyZE9wdGlvbnNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW0lvblByb2R1Y3RDYXJkQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbSW9uUHJvZHVjdENhcmRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIElvblByb2R1Y3RDYXJkTW9kdWxlIHsgfSJdfQ==