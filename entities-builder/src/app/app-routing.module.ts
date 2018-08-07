import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'entities',
        loadChildren: './features/entities/entities.module#EntitiesModule'
    },
    {
        path: 'rules',
        loadChildren: './features/rules/rules.module#RulesModule'
    },
    {
        path: 'connect',
        loadChildren: './features/connect/connect.module#ConnectModule'
    },
    {
        path: 'workflow',
        loadChildren: './features/workflow/workflow.module#WorkflowModule'
    },
    {
        path: 'interface',
        loadChildren: './features/interface/interface.module#InterfaceModule'
    },
    {
        path: 'deploy',
        loadChildren: './features/deploy/deploy.module#DeployModule'
    },
    {
        path: 'teams',
        loadChildren: './features/teams/teams.module#TeamsModule'
    },
    {
        path: 'help',
        loadChildren: './features/help/help.module#HelpModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
