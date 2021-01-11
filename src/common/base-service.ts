import { HttpWrapper } from '../services/http-wrapper.service';
import { environment } from '../environments/environment';
export class BaseService {
  protected controllerName = '';
  protected http: HttpWrapper;
  protected debugURL: string;
  constructor(controllerName: string, http: HttpWrapper) {
    this.controllerName = controllerName;
    this.http = http;
    this.debugURL = environment.serverPath;
  }
  get(orderBy: string = "", orderDirection: string = "", pageNumber: number = -1,
    sizeOfPage: number = -1, filterParams: string = "", returnType: string = "") {
    return this.http.get(`${this.debugURL}/api/${this.controllerName}`, {
      params: {
        orderBy: orderBy,
        orderDirection: orderDirection,
        pageNumber: pageNumber,
        sizeOfPage: sizeOfPage,
        filterParams: filterParams,
        returnType: returnType
      },
    });
  }
  create(record) {
    return this.http.put(`${this.debugURL}/api/${this.controllerName}`, record);
  }

  delete(record) {
    return this.http.delete(`${this.debugURL}/api/${this.controllerName}`,
      record
    );
  }

  update(record) {
    debugger
    return this.http.patch(`${this.debugURL}/api/${this.controllerName}`, record);
  }



}