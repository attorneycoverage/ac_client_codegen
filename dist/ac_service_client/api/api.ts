export * from './attorneyController.service';
import { AttorneyControllerService } from './attorneyController.service';
export * from './attorneyCoverageController.service';
import { AttorneyCoverageControllerService } from './attorneyCoverageController.service';
export * from './attorneyDocketController.service';
import { AttorneyDocketControllerService } from './attorneyDocketController.service';
export * from './attorneyNetworkController.service';
import { AttorneyNetworkControllerService } from './attorneyNetworkController.service';
export * from './basicErrorController.service';
import { BasicErrorControllerService } from './basicErrorController.service';
export * from './registrationController.service';
import { RegistrationControllerService } from './registrationController.service';
export const APIS = [AttorneyControllerService, AttorneyCoverageControllerService, AttorneyDocketControllerService, AttorneyNetworkControllerService, BasicErrorControllerService, RegistrationControllerService];
