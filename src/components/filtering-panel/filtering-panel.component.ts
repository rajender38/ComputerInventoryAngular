import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtering-panel',
  templateUrl: './filtering-panel.component.html',
  styleUrls: ['./filtering-panel.component.css']
})
export class FilteringPanelComponent implements OnInit {

  @Input() filterParams: any[]=[];


  @Output() applyFilter = new EventEmitter();
  @Output() clearFilter = new EventEmitter();
  isFilterPanelExpanded = false;
  constructor() { }

  ngOnInit(): void {
  }

}
