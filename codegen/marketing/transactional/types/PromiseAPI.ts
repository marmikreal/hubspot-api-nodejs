import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CollectionResponseSmtpApiTokenView } from '../models/CollectionResponseSmtpApiTokenView';
import { EmailSendStatusView } from '../models/EmailSendStatusView';
import { ErrorDetail } from '../models/ErrorDetail';
import { EventIdView } from '../models/EventIdView';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';
import { PublicSingleSendEmail } from '../models/PublicSingleSendEmail';
import { PublicSingleSendRequestEgg } from '../models/PublicSingleSendRequestEgg';
import { SmtpApiTokenRequestEgg } from '../models/SmtpApiTokenRequestEgg';
import { SmtpApiTokenView } from '../models/SmtpApiTokenView';
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
     * Delete a single token by ID.
     * Delete a single token by ID.
     * @param tokenId Identifier generated when a token is created.
     */
    public archiveToken(tokenId: string, _options?: Configuration): Promise<void> {
        const result = this.api.archiveToken(tokenId, _options);
        return result.toPromise();
    }

    /**
     * Create a SMTP API token.
     * Create a SMTP API token.
     * @param smtpApiTokenRequestEgg A request object that includes the campaign name tied to the token and whether contacts should be created for recipients of emails.
     */
    public createToken(smtpApiTokenRequestEgg?: SmtpApiTokenRequestEgg, _options?: Configuration): Promise<SmtpApiTokenView> {
        const result = this.api.createToken(smtpApiTokenRequestEgg, _options);
        return result.toPromise();
    }

    /**
     * Query a single token by ID.
     * Query a single token by ID.
     * @param tokenId Identifier generated when a token is created.
     */
    public getTokenById(tokenId: string, _options?: Configuration): Promise<SmtpApiTokenView> {
        const result = this.api.getTokenById(tokenId, _options);
        return result.toPromise();
    }

    /**
     * Query multiple SMTP API tokens by campaign name or a single token by emailCampaignId.
     * Query SMTP API tokens by campaign name or an emailCampaignId.
     * @param campaignName A name for the campaign tied to the SMTP API token.
     * @param emailCampaignId Identifier assigned to the campaign provided during the token creation.
     * @param after Starting point to get the next set of results.
     * @param limit Maximum number of tokens to return.
     */
    public getTokensPage(campaignName?: string, emailCampaignId?: string, after?: string, limit?: number, _options?: Configuration): Promise<CollectionResponseSmtpApiTokenView> {
        const result = this.api.getTokensPage(campaignName, emailCampaignId, after, limit, _options);
        return result.toPromise();
    }

    /**
     * Allows the creation of a replacement password for a given token. Once the password is successfully reset, the old password for the token will be invalid.
     * Reset the password of an existing token.
     * @param tokenId Identifier generated when a token is created.
     */
    public resetPassword(tokenId: string, _options?: Configuration): Promise<SmtpApiTokenView> {
        const result = this.api.resetPassword(tokenId, _options);
        return result.toPromise();
    }

    /**
     * Asynchronously send a transactional email. Returns the status of the email send with a statusId that can be used to continuously query for the status using the Email Send Status API.
     * Send a single transactional email asynchronously.
     * @param publicSingleSendRequestEgg A request object describing the email to send.
     */
    public sendEmail(publicSingleSendRequestEgg?: PublicSingleSendRequestEgg, _options?: Configuration): Promise<EmailSendStatusView> {
        const result = this.api.sendEmail(publicSingleSendRequestEgg, _options);
        return result.toPromise();
    }


}



