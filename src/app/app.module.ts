import { RouterModule } from '@angular/router';
import { AppEffects } from './state/state.effects';
import { APP_REDUCERS } from './state/state.reducers';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AnimalsService } from './core/services/animals.service';
import { AppComponent } from './app.component';
import { AnimalsListComponent } from './pages/animals/containers/list/list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, AnimalsListComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    StoreModule.forRoot(APP_REDUCERS),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [AnimalsService, AppEffects],
  bootstrap: [AppComponent],
})
export class AppModule {}
