/**
 * CRM Imports
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ImportRowCore } from './ImportRowCore';
import { HttpFile } from '../http/http';

export class PublicImportError {
    'errorType': PublicImportErrorErrorTypeEnum;
    'objectType'?: PublicImportErrorObjectTypeEnum;
    'invalidValue'?: string;
    'extraContext'?: string;
    'objectTypeId'?: string;
    'knownColumnNumber': number;
    'sourceData': ImportRowCore;
    'createdAt': number;
    'id': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errorType",
            "baseName": "errorType",
            "type": "PublicImportErrorErrorTypeEnum",
            "format": ""
        },
        {
            "name": "objectType",
            "baseName": "objectType",
            "type": "PublicImportErrorObjectTypeEnum",
            "format": ""
        },
        {
            "name": "invalidValue",
            "baseName": "invalidValue",
            "type": "string",
            "format": ""
        },
        {
            "name": "extraContext",
            "baseName": "extraContext",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectTypeId",
            "baseName": "objectTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "knownColumnNumber",
            "baseName": "knownColumnNumber",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "sourceData",
            "baseName": "sourceData",
            "type": "ImportRowCore",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicImportError.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type PublicImportErrorErrorTypeEnum = "INCORRECT_NUMBER_OF_COLUMNS" | "INVALID_OBJECT_ID" | "INVALID_ASSOCIATION_IDENTIFIER" | "NO_OBJECT_ID_FROM_ASSOCIATION_IDENTIFIER" | "MULTIPLE_COMPANIES_WITH_THIS_DOMAIN" | "PROPERTY_DEFINITION_NOT_FOUND" | "PROPERTY_VALUE_NOT_FOUND" | "COULD_NOT_FIND_OWNER" | "MULTIPLE_OWNERS_FOUND" | "COULD_NOT_PARSE_NUMBER" | "COULD_NOT_PARSE_DATE" | "COULD_NOT_PARSE_TERM" | "OUTSIDE_VALID_TIME_RANGE" | "OUTSIDE_VALID_TERM_RANGE" | "COULD_NOT_PARSE_ROW" | "INVALID_ENUMERATION_OPTION" | "AMBIGUOUS_ENUMERATION_OPTION" | "FAILED_VALIDATION" | "FAILED_TO_CREATE_ASSOCIATION" | "FILE_NOT_FOUND" | "INVALID_FILE_TYPE" | "INVALID_SPREADSHEET" | "INVALID_SHEET_COUNT" | "FAILED_TO_PROCESS_OBJECT_WITH_EMPTY_PROPERTY_VALUES" | "UNKNOWN_BAD_REQUEST" | "GDPR_BLACKLISTED_EMAIL" | "DUPLICATE_ASSOCIATION_ID" | "LIMIT_EXCEEDED" | "INVALID_ALTERNATE_ID" | "DUPLICATE_ROW_CONTENT" | "INVALID_NUMBER_SIZE" | "UNKNOWN_ERROR" | "FAILED_TO_OPT_OUT_CONTACT" | "INVALID_REQUIRED_PROPERTY" | "DUPLICATE_ALTERNATE_ID" | "DUPLICATE_OBJECT_ID" | "DUPLICATE_UNIQUE_PROPERTY_VALUE" ;
export type PublicImportErrorObjectTypeEnum = "CONTACT" | "COMPANY" | "DEAL" | "ENGAGEMENT" | "TICKET" | "OWNER" | "PRODUCT" | "LINE_ITEM" | "BET_DELIVERABLE_SERVICE" | "CONTENT" | "CONVERSATION" | "BET_ALERT" | "PORTAL" | "QUOTE" | "FORM_SUBMISSION_INBOUNDDB" | "QUOTA" | "UNSUBSCRIBE" | "COMMUNICATION" | "FEEDBACK_SUBMISSION" | "ATTRIBUTION" | "SALESFORCE_SYNC_ERROR" | "RESTORABLE_CRM_OBJECT" | "HUB" | "LANDING_PAGE" | "PRODUCT_OR_FOLDER" | "TASK" | "FORM" | "MARKETING_EMAIL" | "AD_ACCOUNT" | "AD_CAMPAIGN" | "AD_GROUP" | "AD" | "KEYWORD" | "CAMPAIGN" | "SOCIAL_CHANNEL" | "SOCIAL_POST" | "SITE_PAGE" | "BLOG_POST" | "IMPORT" | "EXPORT" | "CTA" | "TASK_TEMPLATE" | "AUTOMATION_PLATFORM_FLOW" | "OBJECT_LIST" | "NOTE" | "MEETING_EVENT" | "CALL" | "EMAIL" | "PUBLISHING_TASK" | "CONVERSATION_SESSION" | "CONTACT_CREATE_ATTRIBUTION" | "INVOICE" | "MARKETING_EVENT" | "CONVERSATION_INBOX" | "CHATFLOW" | "MEDIA_BRIDGE" | "SEQUENCE" | "SEQUENCE_STEP" | "FORECAST" | "SNIPPET" | "TEMPLATE" | "DEAL_CREATE_ATTRIBUTION" | "QUOTE_TEMPLATE" | "QUOTE_MODULE" | "QUOTE_MODULE_FIELD" | "QUOTE_FIELD" | "SEQUENCE_ENROLLMENT" | "SUBSCRIPTION" | "ACCEPTANCE_TEST" | "SOCIAL_BROADCAST" | "DEAL_SPLIT" | "DEAL_REGISTRATION" | "UNKNOWN" ;

