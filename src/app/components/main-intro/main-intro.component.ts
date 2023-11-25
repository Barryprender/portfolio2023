import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-intro',
    templateUrl: './main-intro.component.html',
    styleUrls: ['./main-intro.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainIntroComponent implements OnInit {
   public contentLoaded: boolean = false;
    ngOnInit(): void {
        setTimeout(() => {
            this.contentLoaded = true;
        }, 200);
    }
}
