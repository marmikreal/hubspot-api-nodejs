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

import { Folder } from './Folder';
import { StandardError } from './StandardError';
import { HttpFile } from '../http/http';

export class FolderActionResponse {
    /**
    * Current status of the task.
    */
    'status': FolderActionResponseStatusEnum;
    'result'?: Folder;
    /**
    * Number of errors resulting from the requested changes.
    */
    'numErrors'?: number;
    /**
    * Detailed errors resulting from the task.
    */
    'errors'?: Array<StandardError>;
    /**
    * Timestamp representing when the task was requested.
    */
    'requestedAt'?: Date;
    /**
    * Timestamp representing when the task was started at.
    */
    'startedAt': Date;
    /**
    * When the requested changes have been completed.
    */
    'completedAt': Date;
    /**
    * Link to check the status of the task.
    */
    'links'?: { [key: string]: string; };
    /**
    * Id of the task.
    */
    'taskId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "FolderActionResponseStatusEnum",
            "format": ""
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "Folder",
            "format": ""
        },
        {
            "name": "numErrors",
            "baseName": "numErrors",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<StandardError>",
            "format": ""
        },
        {
            "name": "requestedAt",
            "baseName": "requestedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "taskId",
            "baseName": "taskId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FolderActionResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type FolderActionResponseStatusEnum = "PENDING" | "PROCESSING" | "CANCELED" | "COMPLETE" ;

