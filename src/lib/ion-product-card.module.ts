/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Component module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from 'ionic-angular'
import { TranslateModule } from '@ngx-translate/core'
import { NgxCurrencyModule } from "ngx-currency"
import { IonProductCardComponent } from './ion-product-card.component'
import { IonProductCardOptionsModule } from './options/ion-product-card-options.module'

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        TranslateModule,
        NgxCurrencyModule,
        IonProductCardOptionsModule
    ],
    declarations: [IonProductCardComponent],
    exports: [IonProductCardComponent]
})
export class IonProductCardModule { }