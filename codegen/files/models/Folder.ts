/**
 * Files
 * Upload and manage files.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Folder {
    /**
    * Id of the folder.
    */
    'id': string;
    /**
    * Timestamp of folder creation.
    */
    'createdAt': Date;
    /**
    * Timestamp of folder deletion.
    */
    'archivedAt'?: Date;
    /**
    * Timestamp of the latest update to the folder.
    */
    'updatedAt': Date;
    /**
    * Marks weather the folder is deleted or not.
    */
    'archived': boolean;
    /**
    * Id of the parent folder.
    */
    'parentFolderId'?: string;
    /**
    * Name of the folder.
    */
    'name'?: string;
    /**
    * Path of the folder in the file manager.
    */
    'path'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "archivedAt",
            "baseName": "archivedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "parentFolderId",
            "baseName": "parentFolderId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Folder.attributeTypeMap;
    }

    public constructor() {
    }
}

