import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputBlogAuthor } from '../models/BatchInputBlogAuthor';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseBlogAuthorWithErrors } from '../models/BatchResponseBlogAuthorWithErrors';
import { BlogAuthor } from '../models/BlogAuthor';
import { BlogAuthorCloneRequestVNext } from '../models/BlogAuthorCloneRequestVNext';
import { CollectionResponseWithTotalBlogAuthorForwardPaging } from '../models/CollectionResponseWithTotalBlogAuthorForwardPaging';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { ErrorDetail } from '../models/ErrorDetail';
import { ForwardPaging } from '../models/ForwardPaging';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { StandardError } from '../models/StandardError';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';

import { ObservableBlogAuthorsApi } from "./ObservableAPI";
import { BlogAuthorsApiRequestFactory, BlogAuthorsApiResponseProcessor} from "../apis/BlogAuthorsApi";

export interface BlogAuthorsApiArchiveRequest {
    /**
     * The Blog Author id.
     * @type string
     * @memberof BlogAuthorsApiarchive
     */
    objectId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BlogAuthorsApiarchive
     */
    archived?: boolean
}

export interface BlogAuthorsApiArchiveBatchRequest {
    /**
     * The JSON array of Blog Author ids.
     * @type BatchInputString
     * @memberof BlogAuthorsApiarchiveBatch
     */
    batchInputString: BatchInputString
}

export interface BlogAuthorsApiCreateRequest {
    /**
     * The JSON representation of a new Blog Author.
     * @type BlogAuthor
     * @memberof BlogAuthorsApicreate
     */
    blogAuthor: BlogAuthor
}

export interface BlogAuthorsApiCreateBatchRequest {
    /**
     * The JSON array of new Blog Authors to create.
     * @type BatchInputBlogAuthor
     * @memberof BlogAuthorsApicreateBatch
     */
    batchInputBlogAuthor: BatchInputBlogAuthor
}

export interface BlogAuthorsApiGetByIdRequest {
    /**
     * The Blog Author id.
     * @type string
     * @memberof BlogAuthorsApigetById
     */
    objectId: string
    /**
     * Specifies whether to return archived Blog Authors. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogAuthorsApigetById
     */
    archived?: boolean
}

export interface BlogAuthorsApiGetPageRequest {
    /**
     * Only return Blog Authors created at exactly the specified time.
     * @type Date
     * @memberof BlogAuthorsApigetPage
     */
    createdAt?: Date
    /**
     * Only return Blog Authors created after the specified time.
     * @type Date
     * @memberof BlogAuthorsApigetPage
     */
    createdAfter?: Date
    /**
     * Only return Blog Authors created before the specified time.
     * @type Date
     * @memberof BlogAuthorsApigetPage
     */
    createdBefore?: Date
    /**
     * Only return Blog Authors last updated at exactly the specified time.
     * @type Date
     * @memberof BlogAuthorsApigetPage
     */
    updatedAt?: Date
    /**
     * Only return Blog Authors last updated after the specified time.
     * @type Date
     * @memberof BlogAuthorsApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return Blog Authors last updated before the specified time.
     * @type Date
     * @memberof BlogAuthorsApigetPage
     */
    updatedBefore?: Date
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @type Array&lt;string&gt;
     * @memberof BlogAuthorsApigetPage
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof BlogAuthorsApigetPage
     */
    after?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof BlogAuthorsApigetPage
     */
    limit?: number
    /**
     * Specifies whether to return archived Blog Authors. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogAuthorsApigetPage
     */
    archived?: boolean
}

export interface BlogAuthorsApiPostCmsV3BlogsAuthorsMultiLanguageAttachToLangGroupRequest {
    /**
     * The JSON representation of the AttachToLangPrimaryRequest object.
     * @type AttachToLangPrimaryRequestVNext
     * @memberof BlogAuthorsApipostCmsV3BlogsAuthorsMultiLanguageAttachToLangGroup
     */
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext
}

export interface BlogAuthorsApiPostCmsV3BlogsAuthorsMultiLanguageCreateLanguageVariationRequest {
    /**
     * The JSON representation of the ContentLanguageCloneRequest object.
     * @type BlogAuthorCloneRequestVNext
     * @memberof BlogAuthorsApipostCmsV3BlogsAuthorsMultiLanguageCreateLanguageVariation
     */
    blogAuthorCloneRequestVNext: BlogAuthorCloneRequestVNext
}

export interface BlogAuthorsApiPostCmsV3BlogsAuthorsMultiLanguageDetachFromLangGroupRequest {
    /**
     * The JSON representation of the DetachFromLangGroupRequest object.
     * @type DetachFromLangGroupRequestVNext
     * @memberof BlogAuthorsApipostCmsV3BlogsAuthorsMultiLanguageDetachFromLangGroup
     */
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext
}

export interface BlogAuthorsApiPostCmsV3BlogsAuthorsMultiLanguageUpdateLanguagesRequest {
    /**
     * The JSON representation of the UpdateLanguagesRequest object.
     * @type UpdateLanguagesRequestVNext
     * @memberof BlogAuthorsApipostCmsV3BlogsAuthorsMultiLanguageUpdateLanguages
     */
    updateLanguagesRequestVNext: UpdateLanguagesRequestVNext
}

export interface BlogAuthorsApiPutCmsV3BlogsAuthorsMultiLanguageSetNewLangPrimaryRequest {
    /**
     * The JSON representation of the SetNewLanguagePrimaryRequest object.
     * @type SetNewLanguagePrimaryRequestVNext
     * @memberof BlogAuthorsApiputCmsV3BlogsAuthorsMultiLanguageSetNewLangPrimary
     */
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext
}

export interface BlogAuthorsApiReadBatchRequest {
    /**
     * The JSON array of Blog Author ids.
     * @type BatchInputString
     * @memberof BlogAuthorsApireadBatch
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return archived Blog Authors. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogAuthorsApireadBatch
     */
    archived?: boolean
}

export interface BlogAuthorsApiUpdateRequest {
    /**
     * The Blog Author id.
     * @type string
     * @memberof BlogAuthorsApiupdate
     */
    objectId: string
    /**
     * The JSON representation of the updated Blog Author.
     * @type BlogAuthor
     * @memberof BlogAuthorsApiupdate
     */
    blogAuthor: BlogAuthor
    /**
     * Specifies whether to update archived Blog Authors. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogAuthorsApiupdate
     */
    archived?: boolean
}

export interface BlogAuthorsApiUpdateBatchRequest {
    /**
     * A JSON array of the JSON representations of the updated Blog Authors.
     * @type BatchInputJsonNode
     * @memberof BlogAuthorsApiupdateBatch
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Specifies whether to update archived Blog Authors. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogAuthorsApiupdateBatch
     */
    archived?: boolean
}

export class ObjectBlogAuthorsApi {
    private api: ObservableBlogAuthorsApi

    public constructor(configuration: Configuration, requestFactory?: BlogAuthorsApiRequestFactory, responseProcessor?: BlogAuthorsApiResponseProcessor) {
        this.api = new ObservableBlogAuthorsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Blog Author object identified by the id in the path.
     * Delete a Blog Author
     * @param param the request object
     */
    public archive(param: BlogAuthorsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Blog Author objects identified in the request body. Note: This is not the same as the in-app `archive` function.
     * Archive a batch of Blog Authors
     * @param param the request object
     */
    public archiveBatch(param: BlogAuthorsApiArchiveBatchRequest, options?: Configuration): Promise<void> {
        return this.api.archiveBatch(param.batchInputString,  options).toPromise();
    }

    /**
     * Create a new Blog Author.
     * Create a new Blog Author
     * @param param the request object
     */
    public create(param: BlogAuthorsApiCreateRequest, options?: Configuration): Promise<BlogAuthor> {
        return this.api.create(param.blogAuthor,  options).toPromise();
    }

    /**
     * Create the Blog Author objects detailed in the request body.
     * Create a batch of Blog Authors
     * @param param the request object
     */
    public createBatch(param: BlogAuthorsApiCreateBatchRequest, options?: Configuration): Promise<BatchResponseBlogAuthorWithErrors | any> {
        return this.api.createBatch(param.batchInputBlogAuthor,  options).toPromise();
    }

    /**
     * Retrieve the Blog Author object identified by the id in the path.
     * Retrieve a Blog Author
     * @param param the request object
     */
    public getById(param: BlogAuthorsApiGetByIdRequest, options?: Configuration): Promise<BlogAuthor> {
        return this.api.getById(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Get the list of blog authors. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Authors
     * @param param the request object
     */
    public getPage(param: BlogAuthorsApiGetPageRequest, options?: Configuration): Promise<CollectionResponseWithTotalBlogAuthorForwardPaging> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived,  options).toPromise();
    }

    /**
     * Attach a Blog Author to a multi-language group.
     * Attach a Blog Author to a multi-language group
     * @param param the request object
     */
    public postCmsV3BlogsAuthorsMultiLanguageAttachToLangGroup(param: BlogAuthorsApiPostCmsV3BlogsAuthorsMultiLanguageAttachToLangGroupRequest, options?: Configuration): Promise<void> {
        return this.api.postCmsV3BlogsAuthorsMultiLanguageAttachToLangGroup(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing Blog Author.
     * Create a new language variation
     * @param param the request object
     */
    public postCmsV3BlogsAuthorsMultiLanguageCreateLanguageVariation(param: BlogAuthorsApiPostCmsV3BlogsAuthorsMultiLanguageCreateLanguageVariationRequest, options?: Configuration): Promise<BlogAuthor> {
        return this.api.postCmsV3BlogsAuthorsMultiLanguageCreateLanguageVariation(param.blogAuthorCloneRequestVNext,  options).toPromise();
    }

    /**
     * Detach a Blog Author from a multi-language group.
     * Detach a Blog Author from a multi-language group
     * @param param the request object
     */
    public postCmsV3BlogsAuthorsMultiLanguageDetachFromLangGroup(param: BlogAuthorsApiPostCmsV3BlogsAuthorsMultiLanguageDetachFromLangGroupRequest, options?: Configuration): Promise<void> {
        return this.api.postCmsV3BlogsAuthorsMultiLanguageDetachFromLangGroup(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each Blog Author in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public postCmsV3BlogsAuthorsMultiLanguageUpdateLanguages(param: BlogAuthorsApiPostCmsV3BlogsAuthorsMultiLanguageUpdateLanguagesRequest, options?: Configuration): Promise<void> {
        return this.api.postCmsV3BlogsAuthorsMultiLanguageUpdateLanguages(param.updateLanguagesRequestVNext,  options).toPromise();
    }

    /**
     * Set a Blog Author as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public putCmsV3BlogsAuthorsMultiLanguageSetNewLangPrimary(param: BlogAuthorsApiPutCmsV3BlogsAuthorsMultiLanguageSetNewLangPrimaryRequest, options?: Configuration): Promise<void> {
        return this.api.putCmsV3BlogsAuthorsMultiLanguageSetNewLangPrimary(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Retrieve the Blog Author objects identified in the request body.
     * Retrieve a batch of Blog Authors
     * @param param the request object
     */
    public readBatch(param: BlogAuthorsApiReadBatchRequest, options?: Configuration): Promise<BatchResponseBlogAuthorWithErrors | any> {
        return this.api.readBatch(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates a single Blog Author object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Author
     * @param param the request object
     */
    public update(param: BlogAuthorsApiUpdateRequest, options?: Configuration): Promise<BlogAuthor> {
        return this.api.update(param.objectId, param.blogAuthor, param.archived,  options).toPromise();
    }

    /**
     * Update the Blog Author objects identified in the request body.
     * Update a batch of Blog Authors
     * @param param the request object
     */
    public updateBatch(param: BlogAuthorsApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponseBlogAuthorWithErrors | any> {
        return this.api.updateBatch(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

}