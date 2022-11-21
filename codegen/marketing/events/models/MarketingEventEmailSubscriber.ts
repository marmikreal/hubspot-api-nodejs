/**
 * Marketing Events Extension
 * These APIs allow you to interact with HubSpot's Marketing Events Extension. It allows you to: * Create, Read or update Marketing Event information in HubSpot * Specify whether a HubSpot contact has registered, attended or cancelled a registration to a Marketing Event. * Specify a URL that can be called to get the details of a Marketing Event. 
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class MarketingEventEmailSubscriber {
    /**
    * The date and time at which the contact subscribed to the event.
    */
    'interactionDateTime': number;
    'properties'?: { [key: string]: string; };
    /**
    * The email address of the contact in HubSpot to associate with the event. Note that the contact must already exist in HubSpot; a contact will not be created.
    */
    'email': string;
    'contactProperties'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "interactionDateTime",
            "baseName": "interactionDateTime",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactProperties",
            "baseName": "contactProperties",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MarketingEventEmailSubscriber.attributeTypeMap;
    }

    public constructor() {
    }
}

