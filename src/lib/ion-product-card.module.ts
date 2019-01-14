/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Component module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from 'ionic-angular'
import { TranslateModule } from '@ngx-translate/core'
import { CurrencyMaskModule } from "ngx-currency-mask"
import { IonProductCardComponent } from './ion-product-card.component'
import { IonProductCardOptionsModule } from './options/ion-product-card-options.module'

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        TranslateModule,
        CurrencyMaskModule,
        IonProductCardOptionsModule
    ],
    declarations: [IonProductCardComponent],
    exports: [IonProductCardComponent]
})
export class IonProductCardModule { }