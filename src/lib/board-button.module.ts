import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';
import { MatTooltipModule }     from '@angular/material/tooltip';
import { BoardButtonComponent } from './board-button.component';

@NgModule({

    declarations: [

        BoardButtonComponent

    ],

    imports: [

        CommonModule,
        MatTooltipModule

    ],

    exports: [

        BoardButtonComponent

    ]

})
export class BoardButtonModule {
}
