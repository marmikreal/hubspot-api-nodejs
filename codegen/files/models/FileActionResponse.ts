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

import { StandardError } from './StandardError';
import { HttpFile } from '../http/http';

export class FileActionResponse {
    /**
    * Current status of the task.
    */
    'status': FileActionResponseStatusEnum;
    'result'?: any;
    /**
    * Number of errors resulting from the task.
    */
    'numErrors'?: number;
    /**
    * Descriptive error messages.
    */
    'errors'?: Array<StandardError>;
    /**
    * Timestamp of when the task was requested.
    */
    'requestedAt'?: Date;
    /**
    * Timestamp of when the task was started.
    */
    'startedAt': Date;
    /**
    * Time of completion of task.
    */
    'completedAt': Date;
    /**
    * Link to check the status of the requested task.
    */
    'links'?: { [key: string]: string; };
    /**
    * If of the requested task.
    */
    'taskId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "FileActionResponseStatusEnum",
            "format": ""
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "any",
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
        return FileActionResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type FileActionResponseStatusEnum = "PENDING" | "PROCESSING" | "CANCELED" | "COMPLETE" ;

