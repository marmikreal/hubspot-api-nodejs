import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { BatchInputBlogAuthor } from '../models/BatchInputBlogAuthor';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseBlogAuthorWithErrors } from '../models/BatchResponseBlogAuthorWithErrors';
import { BlogAuthor } from '../models/BlogAuthor';
import { CollectionResponseWithTotalBlogAuthorForwardPaging } from '../models/CollectionResponseWithTotalBlogAuthorForwardPaging';
import { ErrorDetail } from '../models/ErrorDetail';
import { ForwardPaging } from '../models/ForwardPaging';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { StandardError } from '../models/StandardError';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Blog Author object identified by the id in the path.
     * Delete a Blog Author
     * @param objectId The Blog Author id.
     * @param archived Whether to return only results that have been archived.
     */
    public archive(objectId: string, archived?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.archive(objectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Delete the Blog Author objects identified in the request body. Note: This is not the same as the in-app `archive` function.
     * Archive a batch of Blog Authors
     * @param batchInputString The JSON array of Blog Author ids.
     */
    public archiveBatch(batchInputString: BatchInputString, _options?: Configuration): Promise<void> {
        const result = this.api.archiveBatch(batchInputString, _options);
        return result.toPromise();
    }

    /**
     * Create a new Blog Author.
     * Create a new Blog Author
     * @param blogAuthor The JSON representation of a new Blog Author.
     */
    public create(blogAuthor: BlogAuthor, _options?: Configuration): Promise<BlogAuthor> {
        const result = this.api.create(blogAuthor, _options);
        return result.toPromise();
    }

    /**
     * Create the Blog Author objects detailed in the request body.
     * Create a batch of Blog Authors
     * @param batchInputBlogAuthor The JSON array of new Blog Authors to create.
     */
    public createBatch(batchInputBlogAuthor: BatchInputBlogAuthor, _options?: Configuration): Promise<BatchResponseBlogAuthorWithErrors | any> {
        const result = this.api.createBatch(batchInputBlogAuthor, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Blog Author object identified by the id in the path.
     * Retrieve a Blog Author
     * @param objectId The Blog Author id.
     * @param archived Specifies whether to return archived Blog Authors. Defaults to &#x60;false&#x60;.
     */
    public getById(objectId: string, archived?: boolean, _options?: Configuration): Promise<BlogAuthor> {
        const result = this.api.getById(objectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Get the list of blog authors. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Authors
     * @param createdAt Only return Blog Authors created at exactly the specified time.
     * @param createdAfter Only return Blog Authors created after the specified time.
     * @param createdBefore Only return Blog Authors created before the specified time.
     * @param updatedAt Only return Blog Authors last updated at exactly the specified time.
     * @param updatedAfter Only return Blog Authors last updated after the specified time.
     * @param updatedBefore Only return Blog Authors last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return archived Blog Authors. Defaults to &#x60;false&#x60;.
     */
    public getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<CollectionResponseWithTotalBlogAuthorForwardPaging> {
        const result = this.api.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Blog Author objects identified in the request body.
     * Retrieve a batch of Blog Authors
     * @param batchInputString The JSON array of Blog Author ids.
     * @param archived Specifies whether to return archived Blog Authors. Defaults to &#x60;false&#x60;.
     */
    public readBatch(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Promise<BatchResponseBlogAuthorWithErrors | any> {
        const result = this.api.readBatch(batchInputString, archived, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates a single Blog Author object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Author
     * @param objectId The Blog Author id.
     * @param blogAuthor The JSON representation of the updated Blog Author.
     * @param archived Specifies whether to update archived Blog Authors. Defaults to &#x60;false&#x60;.
     */
    public update(objectId: string, blogAuthor: BlogAuthor, archived?: boolean, _options?: Configuration): Promise<BlogAuthor> {
        const result = this.api.update(objectId, blogAuthor, archived, _options);
        return result.toPromise();
    }

    /**
     * Update the Blog Author objects identified in the request body.
     * Update a batch of Blog Authors
     * @param batchInputJsonNode A JSON array of the JSON representations of the updated Blog Authors.
     * @param archived Specifies whether to update archived Blog Authors. Defaults to &#x60;false&#x60;.
     */
    public updateBatch(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Promise<BatchResponseBlogAuthorWithErrors | any> {
        const result = this.api.updateBatch(batchInputJsonNode, archived, _options);
        return result.toPromise();
    }


}



