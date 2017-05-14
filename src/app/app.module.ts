import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UnitComponent } from './unit/unit.component';
import { BoardComponent } from './board/board.component';
import { UnitService } from 'app/unit.service';

@NgModule({
    declarations: [
        AppComponent,
        UnitComponent,
        BoardComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        BrowserAnimationsModule
    ],
    providers: [
        UnitService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
