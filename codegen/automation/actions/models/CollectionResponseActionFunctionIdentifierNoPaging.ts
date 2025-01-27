/**
 * Custom Workflow Actions
 * Create custom workflow actions
 *
 * OpenAPI spec version: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ActionFunctionIdentifier } from '../models/ActionFunctionIdentifier';

export class CollectionResponseActionFunctionIdentifierNoPaging {
    'results': Array<ActionFunctionIdentifier>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<ActionFunctionIdentifier>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseActionFunctionIdentifierNoPaging.attributeTypeMap;
    }

    public constructor() {
    }
}

