import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SorterService } from "src/app/core/sorter.service";

@Component ({
   selector: 'app-filter-textbox',
   // ngModel: simulates a two way data binding, the square brackets automatically updates the value of the input while the parenthesis will raise an event that will update the filter
   // similar to state onChange=event.target.value in react
   template: ` Filter: <input type="text" [(ngModel)]="filter" /> `
})



export class FilterTextboxComponent implements OnInit {

    private _filter: string | "" = ""

    // the "get" allows data in, and updates the variable _filter
    @Input () get filter(){
        return this._filter
    }

    set filter(val: string){
        this._filter = val
        this.changed.emit(this.filter)
    }

    // Output will send the data back to the parent
    // EventEmitter is the way to send back data to the parent - in this case a string
    @Output() changed: EventEmitter<string> = new EventEmitter<string>()

    constructor (private sorterService: SorterService) {
    }

    ngOnInit(): void {

    }

}