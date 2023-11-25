import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { PassengerInformationComponent } from './passenger-information/passenger-information.component';

const routes: Routes = [
  {path: '', component: SearchBusComponent},
{path: 'bus-list', component: BusListComponent},
{path: 'seat-selection', component: SeatSelectionComponent},
{path: 'passenger-information', component: PassengerInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
