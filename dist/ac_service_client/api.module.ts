import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AttorneyControllerService } from './api/attorneyController.service';
import { AttorneyCoverageControllerService } from './api/attorneyCoverageController.service';
import { AttorneyDocketControllerService } from './api/attorneyDocketController.service';
import { AttorneyNetworkControllerService } from './api/attorneyNetworkController.service';
import { BasicErrorControllerService } from './api/basicErrorController.service';
import { RegistrationControllerService } from './api/registrationController.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AttorneyControllerService,
    AttorneyCoverageControllerService,
    AttorneyDocketControllerService,
    AttorneyNetworkControllerService,
    BasicErrorControllerService,
    RegistrationControllerService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
