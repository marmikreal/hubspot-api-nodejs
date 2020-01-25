/**
 * LinkedSalesObjectsPublicService
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CardObjectTypeBody } from './cardObjectTypeBody';

export class CardFetchBodyPatch {
    'targetUrl'?: string;
    'objectTypes': Array<CardObjectTypeBody>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "targetUrl",
            "baseName": "targetUrl",
            "type": "string"
        },
        {
            "name": "objectTypes",
            "baseName": "objectTypes",
            "type": "Array<CardObjectTypeBody>"
        }    ];

    static getAttributeTypeMap() {
        return CardFetchBodyPatch.attributeTypeMap;
    }
}
