import { atMostTwoDecimals, convertMetalAccount, GRAMS_IN_OZ } from '../../../converters'

describe('convertMetalAccount', () => {
  it('converts metal accounts', () => {
    const apiAccounts = [
      {
        __type: 'ru.vtb24.mobilebanking.protocol.product.MetalAccountMto',
        number: '20309A00000000000003',
        id: 'A29003298F6C435CB71C359E14B1BB80',
        name: 'Обезличенный металлический счет',
        displayName: 'Обезличенный металлический счет',
        showOnMainPage: false,
        archived: false,
        status:
          {
            __type: 'ru.vtb24.mobilebanking.protocol.product.AccountStatusMto',
            id: 'OPEN'
          },
        openDate: new Date('Thu Mar 29 2012 00:00:00 GMT+0300 (MSK)'),
        lastOperationDate: null,
        closeDate: null,
        amount:
          {
            __type: 'ru.vtb24.mobilebanking.protocol.AmountMto',
            sum: 0,
            currency:
              {
                __type: 'ru.vtb24.mobilebanking.protocol.CurrencyMto',
                currencyCode: 'PLT',
                name: 'Платина',
                displaySymbol: 'PLT'
              }
          },
        details: null
      },
      {
        __type: 'ru.vtb24.mobilebanking.protocol.product.MetalAccountMto',
        number: '20309A00000000000009',
        id: '868F3B610B04454D81B53F1E3038156E',
        name: 'Обезличенный металлический счет',
        displayName: 'Обезличенный металлический счет',
        showOnMainPage: true,
        archived: false,
        status:
          {
            __type: 'ru.vtb24.mobilebanking.protocol.product.AccountStatusMto',
            id: 'OPEN'
          },
        openDate: new Date('Fri Oct 20 2017 00:00:00 GMT+0300 (MSK)'),
        lastOperationDate: null,
        closeDate: null,
        amount:
          {
            __type: 'ru.vtb24.mobilebanking.protocol.AmountMto',
            sum: 45.4,
            currency:
              {
                __type: 'ru.vtb24.mobilebanking.protocol.CurrencyMto',
                currencyCode: 'PLD',
                name: 'Палладий',
                displaySymbol: 'PLD'
              }
          },
        details: null
      }
    ]

    const expectedAccounts = [
      {
        mainProduct: {
          id: 'A29003298F6C435CB71C359E14B1BB80',
          type: 'ru.vtb24.mobilebanking.protocol.product.MetalAccountMto'
        },
        products: [],
        zenAccount: {
          id: 'A29003298F6C435CB71C359E14B1BB80',
          type: 'checking',
          title: 'Обезличенный металлический счет',
          instrument: 'XPT',
          syncID: ['20309A00000000000003'],
          balance: atMostTwoDecimals(0 / GRAMS_IN_OZ)
        }
      },
      {
        mainProduct: {
          id: '868F3B610B04454D81B53F1E3038156E',
          type: 'ru.vtb24.mobilebanking.protocol.product.MetalAccountMto'
        },
        products: [],
        zenAccount: {
          id: '868F3B610B04454D81B53F1E3038156E',
          type: 'checking',
          title: 'Обезличенный металлический счет',
          instrument: 'XPD',
          syncID: ['20309A00000000000009'],
          balance: atMostTwoDecimals(45.4 / GRAMS_IN_OZ)
        }
      }
    ]

    expect(apiAccounts.map(convertMetalAccount)).toEqual(expectedAccounts)
  })
})
