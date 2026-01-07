import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser' // Required for Module based Angular Application

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { UserComponent } from './user/user.component'
import { SharedModule } from './shared/shared.module'
import { TasksModule } from './tasks/tasks.module'

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
    ], // Declare all Module(non-standalone) based Components here
    bootstrap: [AppComponent],
    imports: [BrowserModule,SharedModule, TasksModule  ], // Import all Standalone based Components here
})
export class AppModule {}
