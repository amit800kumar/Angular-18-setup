import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/feature1', pathMatch: 'full' },
    {
        path: 'feature1', loadComponent: () => import('./features/feature1/feature1.component').then(m => m.Feature1Component), canActivate: [], children: [
            { path: 'child', loadComponent: () => import('./features/feature1-child/feature1-child.component').then(m => m.Feature1ChildComponent) }
        ]
    },
    { path: 'feature2', loadComponent: () => import('./features/feature2/feature2.component').then(m => m.Feature2Component) }
];
