import {
  CallbacksApi,
  Configuration,
  createConfiguration,
  InvoiceApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SettingsApi,
  SyncApi,
  UserAccountsApi,
} from '../../../../../codegen/crm/extensions/accounting/index'
import { Observable } from '../../../../../codegen/crm/extensions/accounting/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'

/**
 * @deprecated
 */
export default class AccountingDiscovery {
  public callbacksApi: CallbacksApi
  public invoiceApi: InvoiceApi
  public settingsApi: SettingsApi
  public syncApi: SyncApi
  public userAccountsApi: UserAccountsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.callbacksApi = ApiDecoratorService.getInstance().apply<CallbacksApi, Configuration>(
      new CallbacksApi(configuration),
      configuration,
    )
    this.invoiceApi = ApiDecoratorService.getInstance().apply<InvoiceApi, Configuration>(
      new InvoiceApi(configuration),
      configuration,
    )
    this.settingsApi = ApiDecoratorService.getInstance().apply<SettingsApi, Configuration>(
      new SettingsApi(configuration),
      configuration,
    )
    this.syncApi = ApiDecoratorService.getInstance().apply<SyncApi, Configuration>(
      new SyncApi(configuration),
      configuration,
    )
    this.userAccountsApi = ApiDecoratorService.getInstance().apply<UserAccountsApi, Configuration>(
      new UserAccountsApi(configuration),
      configuration,
    )
  }
}
