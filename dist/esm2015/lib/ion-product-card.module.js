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
export class IonProductCardModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXByb2R1Y3QtY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24tcHJvZHVjdC1jYXJkLyIsInNvdXJjZXMiOlsibGliL2lvbi1wcm9kdWN0LWNhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQ3RELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFBO0FBQ3RFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFBO0FBYXZGLE1BQU07OztZQVhMLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixXQUFXO29CQUNYLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQiwyQkFBMkI7aUJBQzlCO2dCQUNELFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBDb21wb25lbnQgbW9kdWxlLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnaW9uaWMtYW5ndWxhcidcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQgeyBDdXJyZW5jeU1hc2tNb2R1bGUgfSBmcm9tIFwibmd4LWN1cnJlbmN5LW1hc2tcIlxuaW1wb3J0IHsgSW9uUHJvZHVjdENhcmRDb21wb25lbnQgfSBmcm9tICcuL2lvbi1wcm9kdWN0LWNhcmQuY29tcG9uZW50J1xuaW1wb3J0IHsgSW9uUHJvZHVjdENhcmRPcHRpb25zTW9kdWxlIH0gZnJvbSAnLi9vcHRpb25zL2lvbi1wcm9kdWN0LWNhcmQtb3B0aW9ucy5tb2R1bGUnXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIElvbmljTW9kdWxlLFxuICAgICAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgICAgIEN1cnJlbmN5TWFza01vZHVsZSxcbiAgICAgICAgSW9uUHJvZHVjdENhcmRPcHRpb25zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtJb25Qcm9kdWN0Q2FyZENvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0lvblByb2R1Y3RDYXJkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBJb25Qcm9kdWN0Q2FyZE1vZHVsZSB7IH0iXX0=