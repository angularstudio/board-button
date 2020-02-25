import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router }                                 from '@angular/router';
import { BoardButton }                            from './board-button';

@Component({

    selector: 'board-button',

    template: `

        <div class="wrapper"
             (click)="onClick()"
             [matTooltip]="item?.tooltip"
             [style.width]="item?.width"
             [style.background-color]="item?.backgroundColor">

            <i [class]="item?.iconClass"
               [style.font-size]="item?.iconFontSize"
               [style.color]="item?.iconColor"></i>

            <div class="label"
                 [style.font-size]="item?.labelFontSize"
                 [style.color]="item?.labelFontColor">{{ item?.label }}</div>

        </div>

    `,

    styleUrls: [ 'board-button.component.scss' ]

})
export class BoardButtonComponent {

    @Input() public item: BoardButton;

    @Output() public eventClick: EventEmitter<BoardButton> = new EventEmitter();

    public constructor(private readonly router: Router) {

    }

    public onClick(): void {

        if (this.item.routerPath) {

            this.router.navigate([ this.item.routerPath ]);

        } else {

            this.eventClick.emit(this.item);

        }

    }

}
