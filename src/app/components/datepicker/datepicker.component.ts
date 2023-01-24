import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss'],

    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent implements OnInit {
    @Input() public custom = false;
    @Input() public placeholder: string = 'Choose date';
    @Input() public value: Date = new Date("Fri Dec 08 2020 07:44:57");
    @Input() public required: boolean = false;
    @Input() public disabled: boolean = false;
    public today = new Date();
    public formattedDate: string | null = '';
    public date = new FormControl(new Date());
    public formats = '';
    public serializedDate = new FormControl(new Date().toISOString());

    constructor(

        private _adapter: DateAdapter<Date>,
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
