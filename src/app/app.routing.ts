import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './page/landing/landing.component';
import { PlanosComponent } from './page/planos/planos.component';
import { LoginComponent } from './page/login/login.component';
import { ProfileComponent } from './page/profile/profile.component';
import { NucleoiconsComponent } from './page/nucleoicons/nucleoicons.component';
import { ContatoComponent } from './page/contato/contato.component';
import { PageComponent } from './page/page.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: PageComponent },
    { path: 'index/page/nucleoicons', component: NucleoiconsComponent },
    { path: 'page/landing',     component: LandingComponent },
    { path: 'page/contato',     component: ContatoComponent },
    { path: 'index/page/contato',     component: ContatoComponent },
    { path: 'page/planos',      component: PlanosComponent },
    { path: 'page/login',       component: LoginComponent },
    { path: 'page/profile',     component: ProfileComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
