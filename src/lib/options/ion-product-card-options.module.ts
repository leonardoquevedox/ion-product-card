/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Component module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from 'ionic-angular'
import { TranslateModule } from '@ngx-translate/core'
import { IonProductCardOptionsMenu } from './ion-product-card-options.component'

@NgModule({
    imports: [CommonModule, IonicModule, TranslateModule],
    entryComponents:[IonProductCardOptionsMenu],
    declarations: [IonProductCardOptionsMenu],
    exports: [IonProductCardOptionsMenu]
})
export class IonProductCardOptionsModule { }