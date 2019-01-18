import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { DisplayErrorsService } from './display-errors.service';

@Injectable()
export class HttpErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: Error) {
    const loggingService = this.injector.get(DisplayErrorsService);
    loggingService.displayErrors(error.status, error.message);
    console.error('Something went wrong:', error.message);
  }
}

interface Error {
  message: string;
  status?: number;
  name?: number;
}
