import { Component, OnInit } from '@angular/core';
import { BaseComponent } from "../../common/base-component";
import { ComputerTypeService } from "../../services/computerType.service";
import { MatDialogModule } from '@angular/material/dialog';
import { ComputerType } from "../../common/model-definitions";
@Component({
  selector: 'app-computer-type',
  templateUrl: './computer-type.component.html',
  styleUrls: ['../../core-styles/data-display-module.css']
})
export class ComputerTypeComponent extends BaseComponent implements OnInit {

  dataSet: object[] = [];

  displayedContextItems = ['add', 'edit', 'delete'];

  computerType: any[] = [];

  constructor(private computerTypeService: ComputerTypeService,
    public dialog: MatDialogModule) {

    super();

    this.dataService = computerTypeService;
    this.moduleName = 'computerType';


    this.columnDefs = [
      {
        columnDef: 'name',
        headName: 'Computer Type',
        required: true,
        display: true
      },
      {
        columnDef: 'brand',
        headName: 'Brand',
        required: true,
        display: true
      },
      {
        columnDef: 'processor',
        headName: 'Processor',
        required: true,
        display: true
      },
      {
        columnDef: 'usbPorts',
        headName: 'Usb Ports',
        required: true,
        display: true
      },
      {
        columnDef: 'ramSlots',
        headName: 'Ram Slots',
        required: true,
        display: true
      },
      {
        columnDef: 'formFactor',
        headName: 'Form Factor',
        required: true,
        display: true
      },
      {
        columnDef: 'quantity',
        headName: 'Quantity',
        required: true,
        display: true
      },
      {
        columnDef: 'screenSize',
        headName: 'Screen Size',
        required: true,
        display: true
      }
      ,
      {
        columnDef: 'isActive',
        headName: 'Is Active',
        required: true,
        display: true
      }
    ];

    this.generateFilterParameters();
  }
  ngOnInit() {
    this.retrieveData('', '', this.pageSize, 0);
  }

  retrieveData(sortField: string, sortOrder: string, numberPerPage, pageSize: number, returnType: string = '') {

    this.isLoading = true;
    this.computerTypeService.get(sortField,
      sortOrder,
      pageSize,
      numberPerPage,
      JSON.stringify(this.getFilterParams()), returnType)
      .subscribe((results) => {

        this.dataSet = results.records;
        this.totalRecords = results.totalRecords;
        this.isLoading = false;
      });
  };

  provideNewObject() {
    const computerType = new ComputerType(null);
    return computerType;
  };
}
