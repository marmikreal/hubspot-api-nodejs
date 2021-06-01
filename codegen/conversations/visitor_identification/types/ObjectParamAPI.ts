import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ErrorDetail } from '../models/ErrorDetail';
import { IdentificationTokenGenerationRequest } from '../models/IdentificationTokenGenerationRequest';
import { IdentificationTokenResponse } from '../models/IdentificationTokenResponse';
import { ModelError } from '../models/ModelError';

import { ObservableGenerateApi } from "./ObservableAPI";
import { GenerateApiRequestFactory, GenerateApiResponseProcessor} from "../apis/GenerateApi";

export interface GenerateApiGenerateTokenRequest {
    /**
     * 
     * @type IdentificationTokenGenerationRequest
     * @memberof GenerateApigenerateToken
     */
    identificationTokenGenerationRequest: IdentificationTokenGenerationRequest
}

export class ObjectGenerateApi {
    private api: ObservableGenerateApi

    public constructor(configuration: Configuration, requestFactory?: GenerateApiRequestFactory, responseProcessor?: GenerateApiResponseProcessor) {
        this.api = new ObservableGenerateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours
     * Generate a token
     * @param param the request object
     */
    public generateToken(param: GenerateApiGenerateTokenRequest, options?: Configuration): Promise<IdentificationTokenResponse> {
        return this.api.generateToken(param.identificationTokenGenerationRequest,  options).toPromise();
    }

}
