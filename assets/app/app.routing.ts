import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);