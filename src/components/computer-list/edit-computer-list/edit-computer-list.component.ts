import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ContextState } from '../../../common/context-state.enum'
import { ComputerListService } from "../../../services/computerList.service";

@Component({
  selector: 'app-edit-computer-list',
  templateUrl: './edit-computer-list.component.html'
})
export class EditComputerListComponent implements OnInit {
  @Input() formContextState: ContextState | undefined;
  @Input() currentObjectForEdit: any;
  @Input() computerTypes: any;
  @Input() formFactors: any;
  @Input() screenSizes: any;
  @Input() showElements: any;

  @Output() onSelectChange = new EventEmitter()
  public contextState = ContextState;
  public columnsList: any = [];
  constructor(private computerListService: ComputerListService) { }

  ngOnInit(): void {
  }
  onChange($event) {
    debugger;
    this.onSelectChange.emit($event);
  }
}
