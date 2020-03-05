import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { LayoutComponent } from './layout/layout.component';

const appRoutes: Routes = [
    {
        path: '', 
        component: LayoutComponent,
        children: [
          {path: '', component: HomeComponent},
          {path: '**', component: HomeComponent}
        ]
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    preloadingStrategy: PreloadAllModules
});