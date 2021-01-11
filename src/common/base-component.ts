import * as _ from 'lodash'
import { BaseService } from './base-service';
import * as Moment from 'moment';
import * as Swal from 'sweetalert2';
import { ContextState } from './context-state.enum';
import { NotifierService } from 'angular-notifier';

export class BaseComponent {
  private readonly notifier!: NotifierService;
  public pageSize = 22;
  public isLoading = false;
  public filterParams = [];
  public totalRecords: number = 0;
  public dataService!: BaseService;
  public moduleName: string = "";
  public columnDefs: any = [];
  public currentObjectForEdit: any;
  public Swal = Swal.default;
  public enableDataFiltering = true;
  public allowRowSelection = false;
  formContextState: ContextState = ContextState.VIEW;


  //private readonly notifier: NotifierService;


  public dataSet: any[] = [];


  public currentPage = 0;


  // Ordering Control Variables
  private currentOrderField = '';
  private currentOrderDirection = '';

  // Filter Control Variables
  public isFilterPanelExpanded = false;



  public displayedContextItems: string[] = [
    'add',
    'edit',
    'delete',
    'resend'
  ];
  public contextState = ContextState;


  public editingEnabled = true;
  //public dialog: MatDialog;
  public showSaveAsCSV = true;
  public displayDetailPane = true;


  public showResendPanel = false;
  public selectedRows: any[] = [];

  constructor() {

  }

  retrieveData(
    sortField: string,
    sortOrder: string,
    numberPerPage: number,
    pageSize: number,
    filterParams: string,
    returnType: string = ''
  ) {
    throw new Error('This method must be overridden in child class.');
  }

  getFilterParams() {
    return _.filter(this.filterParams, function (value: any) {
      return value.filterEnabled;
    });
  }

  generateFilterParameters() {
    this.filterParams = Object.assign([], this.columnDefs);
    this.filterParams.forEach(function (filter: any) {
      filter.filterEnabled = false;

      if (filter.fieldDisplayType === 'number') {
        filter.minValue = 0;
        filter.maxValue = 0;
      } else if (filter.fieldDisplayType === 'boolean') {
        filter.filterValue = true;
      } else if (filter.fieldDisplayType === 'date') {
        filter.startDate = Moment()
          .subtract(7, 'd')
          .format('YYYY-MM-DD');
        filter.endDate = Moment().format('YYYY-MM-DD');
      } else if (filter.fieldDisplayType === 'datetime') {
        filter.startDate = Moment()
          .subtract(7, 'd')
          .format('YYYY-MM-DD');
        filter.endDate = Moment().format('YYYY-MM-DD');
      } else {
        filter.filterValue = '';
      }
    });
  }
  public get primaryRecordNameField(): string {
    return "";
  }

  deleteRecord(record) {

    let deletePrompt = 'Are you sure you wish to delete this record?  ';

    if (this.primaryRecordNameField !== null) {
      deletePrompt += `[${record[this.primaryRecordNameField]}]`
    }

    this.Swal.fire
      ({
        title: 'Are you sure?',
        text: deletePrompt,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, proceed!'
      }).then(result => {
        if (result.dismiss !== this.Swal.DismissReason.cancel) {

          this.formContextState = ContextState.DELETE;
          this.currentObjectForEdit = record;

          this.isLoading = true;

          // this.dataService.delete(record).subscribe(results => {
          //   this.applyFilter();
          //   this.isLoading = false;
          //   this.currentObjectForEdit = null;
          //   this.notifier.notify('success', 'Record has been successfully deleted.');
          // });
        }
      });
  }

  applyFilter() {
    this.isFilterPanelExpanded = false;

    this.retrieveData(
      this.currentOrderField,
      this.currentOrderDirection,
      this.pageSize,
      this.currentPage,
      JSON.stringify(this.getFilterParams())
    );
    this.currentPage = 0;
  }

  clearFilter() {
    this.generateFilterParameters();
    this.applyFilter();
  }

  updateRecord(record) {
    debugger;
    this.formContextState = ContextState.EDIT;
    this.currentObjectForEdit = _.clone(record);
  }

  addNewRecord() {
    debugger
    this.formContextState = ContextState.NEW;
    this.currentObjectForEdit = this.provideNewObject();
  }

  provideNewObject() {

  }

  reloadPage() {
    this.retrieveData(
      '',
      '',
      this.pageSize,
      this.currentPage,
      JSON.stringify(this.getFilterParams())
    );
  }
  onRowClicked(row) {
    if (this.formContextState === ContextState.EDIT || this.formContextState === ContextState.NEW) {
      this.Swal.fire({
        title: 'Are you sure?',
        text: 'Proceeding will discard any changes to record.  Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, continue!'
      }).then(result => {
        if (result.dismiss !== this.Swal.DismissReason.cancel) {
          this.formContextState = ContextState.VIEW;
          this.currentObjectForEdit = row;
        }
      });
    } else {
      this.formContextState = ContextState.VIEW;
      this.currentObjectForEdit = row;
    }
  }

  pageChange(event) {
    this.currentPage = event.pageIndex;

    if (event) {
      this.retrieveData(
        this.currentOrderField,
        this.currentOrderDirection,
        this.pageSize,
        this.currentPage,
        JSON.stringify(this.getFilterParams())
      );
    }
  }

  processCancel(): void {
    this.formContextState = ContextState.VIEW;
    this.currentObjectForEdit = null;
  }

  sortData(event) {
    this.currentOrderDirection = event.direction;
    this.currentOrderField = event.active;
    this.currentPage = 0;
    this.retrieveData(
      this.currentOrderField,
      this.currentOrderDirection,
      this.pageSize,
      this.currentPage,
      JSON.stringify(this.getFilterParams())
    );
  }

  processSave(): void {
    debugger;
    if (this.isInputValid()) {
      if (this.formContextState === ContextState.NEW) {
        this.commitAddNewRecord(this.currentObjectForEdit);
      } else if ((this.formContextState = ContextState.EDIT)) {
        this.commitUpdateRecord(this.currentObjectForEdit);
      }
    }
  }

  commitAddNewRecord(record) {
    this.isLoading = true;
    this.dataService.create(this.formatRecordForServer(record))
      .subscribe(results => {
        this.isLoading = false;
        this.applyFilter();
        this.currentObjectForEdit = null;
        this.formContextState = ContextState.VIEW;
        this.notifier.notify('success', 'A new record has succesfully created.');
      }, results => {
        this.isLoading = false;
      }, () => { this.isLoading = false })
      ;
  }
  public formatRecordForServer(record) {
    return record;
  }

  commitUpdateRecord(record) {
    this.isLoading = true;

    this.dataService.update(this.formatRecordForServer(record))
      .subscribe(results => {
        this.applyFilter();
        this.isLoading = false;
        this.formContextState = ContextState.VIEW;
        this.notifier.notify('success', 'The record has successfully been updated.');
        }, results => {
        this.isLoading = false;
        this.notifier.notify('error', 'An error has occured while updating.');
          }, () => {this.isLoading = false});
  }

  isInputValid(): boolean {
    debugger;
    const invalidFields:any = [];

    this.columnDefs.forEach(columnDef => {
      if (columnDef.required) {
        if (
          _.trim(this.currentObjectForEdit[columnDef.columnDef]).length === 0 ||
          this.currentObjectForEdit[columnDef.columnDef]===0
        ) {
          invalidFields.push(columnDef['headName']);
        }
      }
    });

    if (invalidFields.length > 0) {
      const validationOutputStart = 'The following fields are invalid: \n<ul>';
      let validationOutputMiddle = '';
      invalidFields.forEach(eachInvalidField => {
        validationOutputMiddle += `${validationOutputMiddle}<li>${eachInvalidField}</li>`;
      });
      const validationOutputEnd = '</ul>';

      this.Swal.fire({
        icon: 'error',
        title: 'The following fields are invalid',
        html: `${validationOutputStart}${validationOutputMiddle}${validationOutputEnd}`
      });
      return false;
    } else {
      return true;
    }
  }

}