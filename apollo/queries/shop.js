query {
  shop {
    paymentSettings {
      currencyCode
      enabledPresentmentCurrencies
    }
    name
    description
    moneyFormat
    primaryDomain {
      host
      sslEnabled
      url
    }
  }
}
