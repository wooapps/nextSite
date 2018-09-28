import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { LandingComponent } from './landing/landing.component';
import { PlanosComponent } from './planos/planos.component'
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PageComponent } from './page.component';
import { ContatoComponent } from './contato/contato.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationComponent } from './notification/notification.component';
import { TypographyComponent } from './typography/typography.component';
import { NgbdModalBasic } from './modal/modal.component';
import { RouterModule } from '@angular/router';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JWBootstrapSwitchModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ],
    declarations: [
        LandingComponent,
        LoginComponent,
        PlanosComponent,
        PageComponent,
        ProfileComponent,
        ContatoComponent,
        //
        NucleoiconsComponent,
        BasicelementsComponent,
        NavigationComponent,
        NotificationComponent,
        TypographyComponent,
        NgbdModalBasic

    ]
})
export class PageModule { }

