import { Component, OnInit, Input } from '@angular/core';
import { ContextState } from '../../../common/context-state.enum'
import { ComputerListService } from "../../../services/computerList.service";


@Component({
  selector: 'app-edit-computer-type',
  templateUrl: './edit-computer-type.component.html',
  styleUrls: ['./edit-computer-type.component.css']
})
export class EditComputerTypeComponent implements OnInit {

  @Input() formContextState: ContextState | undefined;
  @Input() currentObjectForEdit: any;

  public contextState = ContextState;
  public columnsList: any = [];
  constructor(private computerListService: ComputerListService) { }

  ngOnInit(): void {

  }
}
