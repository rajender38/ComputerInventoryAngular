import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as _ from 'lodash';
import * as Moment from 'moment';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-data-display-table',
  templateUrl: './data-display-table.component.html',
  styleUrls: ['./data-display-table.component.css']
})
export class DataDisplayTableComponent {

  @Input() dataSet: any;
  @Input() displayDetailPane: boolean = false;
  @Input() allowRowSelection: boolean = false;
  @Input() currentObjectForEdit: any;
  @Input() moduleName: string = "";
  @Input() columnDefs = [];
  @Input() enableDataFiltering: any;
  @Input() displayedContextItems: any[] = [];
  @Input() recordIdentifier: string = "";

  @Output() countEvent = new EventEmitter();

  @Output() onRowClicked = new EventEmitter();
  @Output() updateRecord = new EventEmitter();
  @Output() addNewRecord = new EventEmitter();
  @Output() resendRecord = new EventEmitter();
  @Output() resendAll = new EventEmitter();
  @Output() viewMap = new EventEmitter();
  @Output() viewResent = new EventEmitter();
  @Output() checkProgress = new EventEmitter();
  @Output() duplicateRecord = new EventEmitter();
  @Output() cancelProcessingItem = new EventEmitter();
  @Output() cancelAndResendJob = new EventEmitter();
  @Output() deleteRecord = new EventEmitter();
  @Output() pause = new EventEmitter();
  @Output() unpause = new EventEmitter();
  @Output() reloadPage = new EventEmitter();
  @Output() sortData = new EventEmitter();
  @Output() rowSelectedChange = new EventEmitter();
  @Output() recordHasBeenSelectedEvent = new EventEmitter();
  constructor() { }
  formatFieldForDisplay(field, fieldForDisplay): string {
    switch (
    _.find(this.columnDefs, { columnDef: fieldForDisplay }).fieldDisplayType
    ) {
      case 'boolean':
        return field === 1 || field ? 'Yes' : 'No';

      case 'dateTime':
        return Moment(new Date(field)).format('DD-MM-YYYY HH:mm');

      case 'date':
        return Moment(new Date(field)).format('DD-MM-YYYY');

      case 'time':
        return Moment(new Date(field)).format('HH:mm');

      default:
        return field;
    }
  }


  displayContextItem(contextItem: string) {
    return _.includes(this.displayedContextItems, contextItem);
  }

  columnsToDisplay(includeAction: boolean = false): string[] {

    if (includeAction) {
      const temp1 = _.map(this.columnDefs).filter(s => s.display === true);
      const temp= _.map(temp1,'columnDef')
      temp.push('action');

      if (this.allowRowSelection) {
        temp.unshift('rowSelector');
      }
      return temp;
    } else {
      return _.map(this.columnDefs, 'columnDef');
    }
  }


  columnToTitle() {
    const result = [];

    _.forEach(this.columnDefs, function (element: any) {
      var col: string = element.columnDef;
      result[col] = element.headName;
    });

    return result;
  }

  rowSelected($event: MatCheckboxChange, element: any) {
    this.rowSelectedChange.emit(element);
  }

  recordHasBeenSelected(element: any) {
    return true; //this.recordHasBeenSelectedEvent.emit(element)
  }

}
