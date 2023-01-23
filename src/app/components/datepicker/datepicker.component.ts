import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss'],

    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent implements OnInit {

    public today = new Date();
    public formattedDate: string | null = '';
    public date = new FormControl(new Date());
    public formats = '';
    public serializedDate = new FormControl(new Date().toISOString());

    constructor(
        private _adapter: DateAdapter<any>,
        @Inject(MAT_DATE_LOCALE) private _locale: string,
        private datePipe: DatePipe
    ){
        this.formattedDate = this.formattedDate ? this.formattedDate : '';
        this._adapter.setLocale(this._locale)

    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.formattedDate = this.datePipe.transform(new Date(), 'fullDate');
        this._adapter.setLocale(this._locale);
    }

}
