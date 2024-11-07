import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Importando o arquivo app.routes.ts

@NgModule({
  declarations: [
    AppComponent,
    // Outros componentes
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configuração das rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
