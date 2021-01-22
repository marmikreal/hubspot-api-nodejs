/**
 * Custom Workflow Actions
 * Create custom workflow actions
 *
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* Any information to send back to Workflows when completing an action callback.
*/
export class CallbackCompletionRequest {
    /**
    * A map of action output names and values.
    */
    'outputFields': { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "outputFields",
            "baseName": "outputFields",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return CallbackCompletionRequest.attributeTypeMap;
    }
}

