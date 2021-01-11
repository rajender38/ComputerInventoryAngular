import { Component, OnInit } from '@angular/core';
import { BaseComponent } from "../../common/base-component";
import { ComputerListService } from "../../services/computerList.service";
import { MatDialogModule } from '@angular/material/dialog';
import { Computer } from "../../common/model-definitions";
import { ComputerTypeService } from "../../services/computerType.service";
import { FormFactorService } from "../../services/formFactor.service";
import { SecreenSizeService } from "../../services/screenSize.service";

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['../../core-styles/data-display-module.css']
})
export class ComputerListComponent extends BaseComponent implements OnInit {

  dataSet: object[] = [];

  displayedContextItems = ['add', 'edit', 'delete'];
  computer: any[] = [];
  computerTypes: any[] = [];
  formFactors: any[] = []
  screenSizes: any[] = []
  showElements: any[] = [];
  constructor(private computerListService: ComputerListService,
    public dialog: MatDialogModule, private computerTypeService: ComputerTypeService,
    private formFactorService: FormFactorService,
    private secreenSizeService: SecreenSizeService) {

    super();

    this.dataService = computerListService;
    this.moduleName = 'computer';


    this.columnDefs = [
      {
        columnDef: 'computerTypeId',
        headName: 'Computer Type',
        required: true,
        display: false
      },
      {
        columnDef: 'brand',
        headName: 'Brand',
        required: false,
        display: true
      },
      {
        columnDef: 'processor',
        headName: 'Processor',
        required: false,
        display: true
      },
      {
        columnDef: 'usbPorts',
        headName: 'Usb Ports',
        required: false,
        display: true
      },
      {
        columnDef: 'ramSlots',
        headName: 'Ram Slots',
        required: false,
        display: true
      },
      // {
      //   columnDef: 'formFactor',
      //   headName: 'Form Factor',
      //   required: true
      // },
      {
        columnDef: 'quantity',
        headName: 'Quantity',
        required: false,
        display: true
      },
      // {
      //   columnDef: 'screenSize',
      //   headName: 'Screen Size',
      //   required: true
      // }
      // ,
      {
        columnDef: 'isActive',
        headName: 'Is Active',
        required: true,
        display: true
      }
    ];

    this.generateFilterParameters();

    this.computerTypeService.get().subscribe(result => {
      debugger
      this.computerTypes = result.records;
    });
    this.formFactorService.get().subscribe(result => {
      this.formFactors = result.records;
    });
    this.secreenSizeService.get().subscribe(result => {
      this.screenSizes = result.records;
    });
  }

  ngOnInit(): void {
    this.retrieveData('', '', this.pageSize, 0);
  }

  onSelectChange(event) {
    debugger;
    this.displayControls(event.value);

  }

  displayControls(val) {
    this.computerTypeService.getById(val).subscribe((results) => {
      this.showElements = results;
    });
  };

  retrieveData(sortField: string, sortOrder: string, numberPerPage, pageSize: number, returnType: string = '') {

    this.isLoading = true;
    this.computerListService.get(sortField,
      sortOrder,
      pageSize,
      numberPerPage,
      JSON.stringify(this.getFilterParams()), returnType)
      .subscribe((results) => {
        debugger;
        this.dataSet = results.records;
        this.totalRecords = results.totalRecords;
        this.isLoading = false;
      });
  };



  provideNewObject() {
    debugger
    const computer = new Computer(null);
    return computer;
  };

}
