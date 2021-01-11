import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppMenuComponent } from '../components/app-menu/app-menu.component';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { ComputerListComponent } from '../components/computer-list/computer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ComputerTypeComponent } from '../components/computer-type/computer-type.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { EditComputerTypeComponent } from '../components/computer-type/edit-computer-type/edit-computer-type.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { FilteringPanelComponent } from '../components/filtering-panel/filtering-panel.component';
import { DataDisplayTableComponent } from '../components/data-display-table/data-display-table.component'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';


import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatRadioModule } from '@angular/material/radio';

import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';

import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { ComputerTypeService } from "../services/computerType.service";
import { HttpWrapper } from "../services/http-wrapper.service";
import { ComputerListService } from "../services/computerList.service";
import { EditComputerListComponent } from '../components/computer-list/edit-computer-list/edit-computer-list.component';
import { FormFactorService } from "../services/formFactor.service";
import { SecreenSizeService } from "../services/screenSize.service";



@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    ComputerListComponent,
    ComputerTypeComponent,
    EditComputerTypeComponent,
    FilteringPanelComponent,
    DataDisplayTableComponent,
    EditComputerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [
    ComputerTypeService,
    HttpWrapper,
    ComputerListService,
    FormFactorService,
    SecreenSizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
