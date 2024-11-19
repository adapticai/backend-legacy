
  
import { User as UserType } from './generated/typegraphql-prisma/models/User';
import { ApolloError, gql } from '@apollo/client';
import { client } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the User model.
   */

  const selectionSet = `
    
  id
  name
  email
  emailVerified
  image
  createdAt
  updatedAt
  role
  bio
  jobTitle
  currentAccount
  customer {
    id
    authUserId
    name
    plan
    stripeCustomerId
    stripeSubscriptionId
    stripePriceId
    stripeCurrentPeriodEnd
    createdAt
    updatedAt
  }
  customerId
  accounts {
    id
    userId
    type
    provider
    providerAccountId
    refresh_token
    access_token
    expires_at
    token_type
    scope
    id_token
    session_state
    createdAt
    updatedAt
  }
  sessions {
    id
    sessionToken
    userId
    expires
    createdAt
    updatedAt
  }
  authenticators {
    id
    userId
    credentialID
    publicKey
    counter
    createdAt
    updatedAt
  }
  plan
  alpacaAccounts {
    id
    type
    APIKey
    APISecret
    configuration
    marketOpen
    minOrderSize
    maxOrderSize
    minPercentageChange
    volumeThreshold
    userId
    createdAt
    updatedAt
    trades {
      id
      alpacaAccountId
      assetId
      qty
      price
      total
      optionType
      signal
      strategy
      analysis
      summary
      confidence
      timestamp
      createdAt
      updatedAt
      status
      asset {
        id
        symbol
        name
        type
        logoUrl
        description
        cik
        exchange
        currency
        country
        sector
        industry
        address
        officialSite
        fiscalYearEnd
        latestQuarter
        marketCapitalization
        ebitda
        peRatio
        pegRatio
        bookValue
        dividendPerShare
        dividendYield
        eps
        revenuePerShareTTM
        profitMargin
        operatingMarginTTM
        returnOnAssetsTTM
        returnOnEquityTTM
        revenueTTM
        grossProfitTTM
        dilutedEPSTTM
        quarterlyEarningsGrowthYOY
        quarterlyRevenueGrowthYOY
        analystTargetPrice
        analystRatingStrongBuy
        analystRatingBuy
        analystRatingHold
        analystRatingSell
        analystRatingStrongSell
        trailingPE
        forwardPE
        priceToSalesRatioTTM
        priceToBookRatio
        evToRevenue
        evToEbitda
        beta
        week52High
        week52Low
        day50MovingAverage
        day200MovingAverage
        sharesOutstanding
        dividendDate
        exDividendDate
        askPrice
        bidPrice
        createdAt
        updatedAt
      }
      actions {
        id
        sequence
        tradeId
        type
        note
        status
        fee
        order {
id
        }
      }
    }
    orders {
      id
      clientOrderId
      alpacaAccountId
      assetId
      qty
      notional
      side
      type
      orderClass
      timeInForce
      limitPrice
      stopPrice
      stopLoss {
        id
        stopPrice
        limitPrice
        createdAt
        updatedAt
        orderId
      }
      takeProfit {
        id
        limitPrice
        stopPrice
        createdAt
        updatedAt
        orderId
      }
      trailPrice
      trailPercent
      extendedHours
      status
      createdAt
      updatedAt
      submittedAt
      filledAt
      filledQty
      filledAvgPrice
      cancelRequestedAt
      canceledAt
      actionId
      action {
        id
        sequence
        tradeId
        type
        note
        status
        fee
      }
      asset {
        id
        symbol
        name
        type
        logoUrl
        description
        cik
        exchange
        currency
        country
        sector
        industry
        address
        officialSite
        fiscalYearEnd
        latestQuarter
        marketCapitalization
        ebitda
        peRatio
        pegRatio
        bookValue
        dividendPerShare
        dividendYield
        eps
        revenuePerShareTTM
        profitMargin
        operatingMarginTTM
        returnOnAssetsTTM
        returnOnEquityTTM
        revenueTTM
        grossProfitTTM
        dilutedEPSTTM
        quarterlyEarningsGrowthYOY
        quarterlyRevenueGrowthYOY
        analystTargetPrice
        analystRatingStrongBuy
        analystRatingBuy
        analystRatingHold
        analystRatingSell
        analystRatingStrongSell
        trailingPE
        forwardPE
        priceToSalesRatioTTM
        priceToBookRatio
        evToRevenue
        evToEbitda
        beta
        week52High
        week52Low
        day50MovingAverage
        day200MovingAverage
        sharesOutstanding
        dividendDate
        exDividendDate
        askPrice
        bidPrice
        createdAt
        updatedAt
      }
      fee
      strikePrice
      expirationDate
      optionType
      stopLossId
      takeProfitId
    }
    positions {
      id
      assetId
      asset {
        id
        symbol
        name
        type
        logoUrl
        description
        cik
        exchange
        currency
        country
        sector
        industry
        address
        officialSite
        fiscalYearEnd
        latestQuarter
        marketCapitalization
        ebitda
        peRatio
        pegRatio
        bookValue
        dividendPerShare
        dividendYield
        eps
        revenuePerShareTTM
        profitMargin
        operatingMarginTTM
        returnOnAssetsTTM
        returnOnEquityTTM
        revenueTTM
        grossProfitTTM
        dilutedEPSTTM
        quarterlyEarningsGrowthYOY
        quarterlyRevenueGrowthYOY
        analystTargetPrice
        analystRatingStrongBuy
        analystRatingBuy
        analystRatingHold
        analystRatingSell
        analystRatingStrongSell
        trailingPE
        forwardPE
        priceToSalesRatioTTM
        priceToBookRatio
        evToRevenue
        evToEbitda
        beta
        week52High
        week52Low
        day50MovingAverage
        day200MovingAverage
        sharesOutstanding
        dividendDate
        exDividendDate
        askPrice
        bidPrice
        createdAt
        updatedAt
      }
      averageEntryPrice
      qty
      qtyAvailable
      marketValue
      costBasis
      unrealizedPL
      unrealizedPLPC
      unrealisedIntradayPL
      unrealisedIntradayPLPC
      currentPrice
      lastTradePrice
      changeToday
      assetMarginable
      alpacaAccountId
      closed
      createdAt
      updatedAt
    }
    alerts {
      id
      alpacaAccountId
      message
      type
      isRead
      createdAt
      updatedAt
    }
  }
  openaiAPIKey
  openaiModel

  `;

  export const User = {

    /**
     * Create a new User record.
     * @param props - Properties for the new record.
     * @returns The created User or null.
     */

    async create(props: UserType): Promise<UserType> {

    const CREATE_ONE_USER = gql`
        mutation createOneUser($data: UserCreateInput!) {
          createOneUser(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            name: props.name !== undefined ? props.name : undefined,
  email: props.email !== undefined ? props.email : undefined,
  emailVerified: props.emailVerified !== undefined ? props.emailVerified : undefined,
  image: props.image !== undefined ? props.image : undefined,
  role: props.role !== undefined ? props.role : undefined,
  bio: props.bio !== undefined ? props.bio : undefined,
  jobTitle: props.jobTitle !== undefined ? props.jobTitle : undefined,
  currentAccount: props.currentAccount !== undefined ? props.currentAccount : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? props.openaiAPIKey : undefined,
  openaiModel: props.openaiModel !== undefined ? props.openaiModel : undefined,
  customer: props.customer ? 
    typeof props.customer === 'object' && Object.keys(props.customer).length === 1 && Object.keys(props.customer)[0] === 'id'
    ? { connect: {
        id: props.customer.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.customer.id !== undefined ? props.customer.id : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        authUserId: props.customer.authUserId !== undefined ? {
            equals: props.customer.authUserId 
           } : undefined,
        name: props.customer.name !== undefined ? {
            equals: props.customer.name 
           } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            equals: props.customer.stripePriceId 
           } : undefined,
      },
      create: {
        authUserId: props.customer.authUserId !== undefined ? props.customer.authUserId : undefined,
        name: props.customer.name !== undefined ? props.customer.name : undefined,
        plan: props.customer.plan !== undefined ? props.customer.plan : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? props.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? props.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: props.accounts ? 
    Array.isArray(props.accounts) && props.accounts.length > 0 &&  props.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.accounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.accounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
        providerAccountId: item.providerAccountId !== undefined ? {
            equals: item.providerAccountId 
           } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        provider: item.provider !== undefined ? item.provider : undefined,
        providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
        refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
        access_token: item.access_token !== undefined ? item.access_token : undefined,
        expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
        token_type: item.token_type !== undefined ? item.token_type : undefined,
        scope: item.scope !== undefined ? item.scope : undefined,
        id_token: item.id_token !== undefined ? item.id_token : undefined,
        session_state: item.session_state !== undefined ? item.session_state : undefined,
      },
    }))
  } : undefined,
  sessions: props.sessions ? 
    Array.isArray(props.sessions) && props.sessions.length > 0 &&  props.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.sessions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.sessions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
        expires: item.expires !== undefined ? item.expires : undefined,
      },
    }))
  } : undefined,
  authenticators: props.authenticators ? 
    Array.isArray(props.authenticators) && props.authenticators.length > 0 &&  props.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.authenticators.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.authenticators.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
        publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
        counter: item.counter !== undefined ? item.counter : undefined,
      },
    }))
  } : undefined,
  alpacaAccounts: props.alpacaAccounts ? 
    Array.isArray(props.alpacaAccounts) && props.alpacaAccounts.length > 0 &&  props.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.alpacaAccounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.alpacaAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
        APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
        configuration: item.configuration !== undefined ? item.configuration : undefined,
        marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        minOrderSize: item.minOrderSize !== undefined ? item.minOrderSize : undefined,
        maxOrderSize: item.maxOrderSize !== undefined ? item.maxOrderSize : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
    trades: item.trades ? 
      Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
        },
        create: {
          qty: item.qty !== undefined ? item.qty : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          optionType: item.optionType !== undefined ? item.optionType : undefined,
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          summary: item.summary !== undefined ? item.summary : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.asset.id !== undefined ? item.asset.id : undefined,
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    orders: item.orders ? 
      Array.isArray(item.orders) && item.orders.length > 0 &&  item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          actionId: item.actionId !== undefined ? item.actionId : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
        },
        create: {
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          qty: item.qty !== undefined ? item.qty : undefined,
          notional: item.notional !== undefined ? item.notional : undefined,
          side: item.side !== undefined ? item.side : undefined,
          type: item.type !== undefined ? item.type : undefined,
          orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
          timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
          limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
          stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
          trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
          trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
          extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
          status: item.status !== undefined ? item.status : undefined,
          submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
          filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
          filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
          cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
          canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
          fee: item.fee !== undefined ? item.fee : undefined,
          strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
          expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
          optionType: item.optionType !== undefined ? item.optionType : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
      stopLoss: item.stopLoss ? 
        typeof item.stopLoss === 'object' && Object.keys(item.stopLoss).length === 1 && Object.keys(item.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.stopLoss.id !== undefined ? item.stopLoss.id : undefined,
            orderId: item.stopLoss.orderId !== undefined ? item.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.stopLoss.stopPrice !== undefined ? item.stopLoss.stopPrice : undefined,
            limitPrice: item.stopLoss.limitPrice !== undefined ? item.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.takeProfit ? 
        typeof item.takeProfit === 'object' && Object.keys(item.takeProfit).length === 1 && Object.keys(item.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.takeProfit.id !== undefined ? item.takeProfit.id : undefined,
            orderId: item.takeProfit.orderId !== undefined ? item.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.takeProfit.limitPrice !== undefined ? item.takeProfit.limitPrice : undefined,
            stopPrice: item.takeProfit.stopPrice !== undefined ? item.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      action: item.action ? 
        typeof item.action === 'object' && Object.keys(item.action).length === 1 && Object.keys(item.action)[0] === 'id'
    ? { connect: {
            id: item.action.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.action.id !== undefined ? item.action.id : undefined,
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.asset.id !== undefined ? item.asset.id : undefined,
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    positions: item.positions ? 
      Array.isArray(item.positions) && item.positions.length > 0 &&  item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
          qty: item.qty !== undefined ? item.qty : undefined,
          qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
          marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
          costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
          unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
          unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
          unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
          unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
          currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
          lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
          changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
          assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          closed: item.closed !== undefined ? item.closed : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.asset.id !== undefined ? item.asset.id : undefined,
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          message: item.message !== undefined ? item.message : undefined,
          type: item.type !== undefined ? item.type : undefined,
          isRead: item.isRead !== undefined ? item.isRead : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneUser) {
        return response.data.createOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneUser:', error);
      throw error;
    }
  },

  /**
   * Create multiple User records.
   * @param props - Array of User objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: UserType[]): Promise<{ count: number } | null> {

      const CREATE_MANY_USER = gql`
      mutation createManyUser($data: [UserCreateManyInput!]!) {
        createManyUser(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  name: prop.name !== undefined ? prop.name : undefined,
  email: prop.email !== undefined ? prop.email : undefined,
  emailVerified: prop.emailVerified !== undefined ? prop.emailVerified : undefined,
  image: prop.image !== undefined ? prop.image : undefined,
  role: prop.role !== undefined ? prop.role : undefined,
  bio: prop.bio !== undefined ? prop.bio : undefined,
  jobTitle: prop.jobTitle !== undefined ? prop.jobTitle : undefined,
  currentAccount: prop.currentAccount !== undefined ? prop.currentAccount : undefined,
  customerId: prop.customerId !== undefined ? prop.customerId : undefined,
  plan: prop.plan !== undefined ? prop.plan : undefined,
  openaiAPIKey: prop.openaiAPIKey !== undefined ? prop.openaiAPIKey : undefined,
  openaiModel: prop.openaiModel !== undefined ? prop.openaiModel : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyUser) {
        return response.data.createManyUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyUser:', error);
      throw error;
    }
  },

  /**
   * Update a single User record.
   * @param props - Properties to update.
   * @returns The updated User or null.
   */
  async update(props: UserType): Promise<UserType> {

      const UPDATE_ONE_USER = gql`
      mutation updateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
        updateOneUser(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  emailVerified: props.emailVerified !== undefined ? props.emailVerified : undefined,
  image: props.image !== undefined ? props.image : undefined,
  createdAt: props.createdAt !== undefined ? props.createdAt : undefined,
  updatedAt: props.updatedAt !== undefined ? props.updatedAt : undefined,
  role: props.role !== undefined ? props.role : undefined,
  bio: props.bio !== undefined ? props.bio : undefined,
  jobTitle: props.jobTitle !== undefined ? props.jobTitle : undefined,
  currentAccount: props.currentAccount !== undefined ? props.currentAccount : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? props.openaiAPIKey : undefined,
  openaiModel: props.openaiModel !== undefined ? props.openaiModel : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  emailVerified: props.emailVerified !== undefined ? {
            set: props.emailVerified 
           } : undefined,
  image: props.image !== undefined ? {
            set: props.image 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  role: props.role !== undefined ? {
            set: props.role 
           } : undefined,
  bio: props.bio !== undefined ? {
            set: props.bio 
           } : undefined,
  jobTitle: props.jobTitle !== undefined ? {
            set: props.jobTitle 
           } : undefined,
  currentAccount: props.currentAccount !== undefined ? {
            set: props.currentAccount 
           } : undefined,
  plan: props.plan !== undefined ? {
            set: props.plan 
           } : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? {
            set: props.openaiAPIKey 
           } : undefined,
  openaiModel: props.openaiModel !== undefined ? {
            set: props.openaiModel 
           } : undefined,
  customer: props.customer ? {
    upsert: {
      where: {
        id: props.customer.id !== undefined ? {
            equals: props.customer.id 
           } : undefined,
        authUserId: props.customer.authUserId !== undefined ? {
            equals: props.customer.authUserId 
           } : undefined,
        name: props.customer.name !== undefined ? {
            equals: props.customer.name 
           } : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? {
            equals: props.customer.stripeCustomerId 
           } : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? {
            equals: props.customer.stripeSubscriptionId 
           } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            equals: props.customer.stripePriceId 
           } : undefined,
      },
      update: {
        authUserId: props.customer.authUserId !== undefined ? {
            set: props.customer.authUserId  
           } : undefined,
        name: props.customer.name !== undefined ? {
            set: props.customer.name  
           } : undefined,
        plan: props.customer.plan !== undefined ? {
            set: props.customer.plan  
           } : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? {
            set: props.customer.stripeCustomerId  
           } : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? {
            set: props.customer.stripeSubscriptionId  
           } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            set: props.customer.stripePriceId  
           } : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? {
            set: props.customer.stripeCurrentPeriodEnd  
           } : undefined,
      },
      create: {
        authUserId: props.customer.authUserId !== undefined ? props.customer.authUserId : undefined,
        name: props.customer.name !== undefined ? props.customer.name : undefined,
        plan: props.customer.plan !== undefined ? props.customer.plan : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? props.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? props.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: props.accounts ? {
    upsert: props.accounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
        providerAccountId: item.providerAccountId !== undefined ? {
            equals: item.providerAccountId 
           } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id  
           } : undefined,
        type: item.type !== undefined ? {
            set: item.type  
           } : undefined,
        provider: item.provider !== undefined ? {
            set: item.provider  
           } : undefined,
        providerAccountId: item.providerAccountId !== undefined ? {
            set: item.providerAccountId  
           } : undefined,
        refresh_token: item.refresh_token !== undefined ? {
            set: item.refresh_token  
           } : undefined,
        access_token: item.access_token !== undefined ? {
            set: item.access_token  
           } : undefined,
        expires_at: item.expires_at !== undefined ? {
            set: item.expires_at  
           } : undefined,
        token_type: item.token_type !== undefined ? {
            set: item.token_type  
           } : undefined,
        scope: item.scope !== undefined ? {
            set: item.scope  
           } : undefined,
        id_token: item.id_token !== undefined ? {
            set: item.id_token  
           } : undefined,
        session_state: item.session_state !== undefined ? {
            set: item.session_state  
           } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        provider: item.provider !== undefined ? item.provider : undefined,
        providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
        refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
        access_token: item.access_token !== undefined ? item.access_token : undefined,
        expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
        token_type: item.token_type !== undefined ? item.token_type : undefined,
        scope: item.scope !== undefined ? item.scope : undefined,
        id_token: item.id_token !== undefined ? item.id_token : undefined,
        session_state: item.session_state !== undefined ? item.session_state : undefined,
      },
    }))
  } : undefined,
  sessions: props.sessions ? {
    upsert: props.sessions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id  
           } : undefined,
        sessionToken: item.sessionToken !== undefined ? {
            set: item.sessionToken  
           } : undefined,
        expires: item.expires !== undefined ? {
            set: item.expires  
           } : undefined,
      },
      create: {
        sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
        expires: item.expires !== undefined ? item.expires : undefined,
      },
    }))
  } : undefined,
  authenticators: props.authenticators ? {
    upsert: props.authenticators.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id  
           } : undefined,
        credentialID: item.credentialID !== undefined ? {
            set: item.credentialID  
           } : undefined,
        publicKey: item.publicKey !== undefined ? {
            set: item.publicKey  
           } : undefined,
        counter: item.counter !== undefined ? {
            set: item.counter  
           } : undefined,
      },
      create: {
        credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
        publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
        counter: item.counter !== undefined ? item.counter : undefined,
      },
    }))
  } : undefined,
  alpacaAccounts: props.alpacaAccounts ? {
    upsert: props.alpacaAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id  
           } : undefined,
        type: item.type !== undefined ? {
            set: item.type  
           } : undefined,
        APIKey: item.APIKey !== undefined ? {
            set: item.APIKey  
           } : undefined,
        APISecret: item.APISecret !== undefined ? {
            set: item.APISecret  
           } : undefined,
        configuration: item.configuration !== undefined ? {
            set: item.configuration  
           } : undefined,
        marketOpen: item.marketOpen !== undefined ? {
            set: item.marketOpen  
           } : undefined,
        minOrderSize: item.minOrderSize !== undefined ? {
            set: item.minOrderSize  
           } : undefined,
        maxOrderSize: item.maxOrderSize !== undefined ? {
            set: item.maxOrderSize  
           } : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? {
            set: item.minPercentageChange  
           } : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? {
            set: item.volumeThreshold  
           } : undefined,
    trades: item.trades ? {
      upsert: item.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          qty: item.qty !== undefined ? {
              set: item.qty  
             } : undefined,
          price: item.price !== undefined ? {
              set: item.price  
             } : undefined,
          total: item.total !== undefined ? {
              set: item.total  
             } : undefined,
          optionType: item.optionType !== undefined ? {
              set: item.optionType  
             } : undefined,
          signal: item.signal !== undefined ? {
              set: item.signal  
             } : undefined,
          strategy: item.strategy !== undefined ? {
              set: item.strategy  
             } : undefined,
          analysis: item.analysis !== undefined ? {
              set: item.analysis  
             } : undefined,
          summary: item.summary !== undefined ? {
              set: item.summary  
             } : undefined,
          confidence: item.confidence !== undefined ? {
              set: item.confidence  
             } : undefined,
          timestamp: item.timestamp !== undefined ? {
              set: item.timestamp  
             } : undefined,
          status: item.status !== undefined ? {
              set: item.status  
             } : undefined,
      asset: item.asset ? {
        upsert: {
          where: {
            id: item.asset.id !== undefined ? {
                equals: item.asset.id 
               } : undefined,
            symbol: item.asset.symbol !== undefined ? {
                equals: item.asset.symbol 
               } : undefined,
            name: item.asset.name !== undefined ? {
                equals: item.asset.name 
               } : undefined,
          },
          update: {
            id: item.asset.id !== undefined ? {
                set: item.asset.id  
               } : undefined,
            symbol: item.asset.symbol !== undefined ? {
                set: item.asset.symbol  
               } : undefined,
            name: item.asset.name !== undefined ? {
                set: item.asset.name  
               } : undefined,
            type: item.asset.type !== undefined ? {
                set: item.asset.type  
               } : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? {
                set: item.asset.logoUrl  
               } : undefined,
            description: item.asset.description !== undefined ? {
                set: item.asset.description  
               } : undefined,
            cik: item.asset.cik !== undefined ? {
                set: item.asset.cik  
               } : undefined,
            exchange: item.asset.exchange !== undefined ? {
                set: item.asset.exchange  
               } : undefined,
            currency: item.asset.currency !== undefined ? {
                set: item.asset.currency  
               } : undefined,
            country: item.asset.country !== undefined ? {
                set: item.asset.country  
               } : undefined,
            sector: item.asset.sector !== undefined ? {
                set: item.asset.sector  
               } : undefined,
            industry: item.asset.industry !== undefined ? {
                set: item.asset.industry  
               } : undefined,
            address: item.asset.address !== undefined ? {
                set: item.asset.address  
               } : undefined,
            officialSite: item.asset.officialSite !== undefined ? {
                set: item.asset.officialSite  
               } : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? {
                set: item.asset.fiscalYearEnd  
               } : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? {
                set: item.asset.latestQuarter  
               } : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? {
                set: item.asset.marketCapitalization  
               } : undefined,
            ebitda: item.asset.ebitda !== undefined ? {
                set: item.asset.ebitda  
               } : undefined,
            peRatio: item.asset.peRatio !== undefined ? {
                set: item.asset.peRatio  
               } : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? {
                set: item.asset.pegRatio  
               } : undefined,
            bookValue: item.asset.bookValue !== undefined ? {
                set: item.asset.bookValue  
               } : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? {
                set: item.asset.dividendPerShare  
               } : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? {
                set: item.asset.dividendYield  
               } : undefined,
            eps: item.asset.eps !== undefined ? {
                set: item.asset.eps  
               } : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? {
                set: item.asset.revenuePerShareTTM  
               } : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? {
                set: item.asset.profitMargin  
               } : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? {
                set: item.asset.operatingMarginTTM  
               } : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? {
                set: item.asset.returnOnAssetsTTM  
               } : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? {
                set: item.asset.returnOnEquityTTM  
               } : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? {
                set: item.asset.revenueTTM  
               } : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? {
                set: item.asset.grossProfitTTM  
               } : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? {
                set: item.asset.dilutedEPSTTM  
               } : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: item.asset.quarterlyEarningsGrowthYOY  
               } : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: item.asset.quarterlyRevenueGrowthYOY  
               } : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? {
                set: item.asset.analystTargetPrice  
               } : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? {
                set: item.asset.analystRatingStrongBuy  
               } : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? {
                set: item.asset.analystRatingBuy  
               } : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? {
                set: item.asset.analystRatingHold  
               } : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? {
                set: item.asset.analystRatingSell  
               } : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? {
                set: item.asset.analystRatingStrongSell  
               } : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? {
                set: item.asset.trailingPE  
               } : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? {
                set: item.asset.forwardPE  
               } : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? {
                set: item.asset.priceToSalesRatioTTM  
               } : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? {
                set: item.asset.priceToBookRatio  
               } : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? {
                set: item.asset.evToRevenue  
               } : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? {
                set: item.asset.evToEbitda  
               } : undefined,
            beta: item.asset.beta !== undefined ? {
                set: item.asset.beta  
               } : undefined,
            week52High: item.asset.week52High !== undefined ? {
                set: item.asset.week52High  
               } : undefined,
            week52Low: item.asset.week52Low !== undefined ? {
                set: item.asset.week52Low  
               } : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? {
                set: item.asset.day50MovingAverage  
               } : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? {
                set: item.asset.day200MovingAverage  
               } : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? {
                set: item.asset.sharesOutstanding  
               } : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? {
                set: item.asset.dividendDate  
               } : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? {
                set: item.asset.exDividendDate  
               } : undefined,
            askPrice: item.asset.askPrice !== undefined ? {
                set: item.asset.askPrice  
               } : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? {
                set: item.asset.bidPrice  
               } : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? {
        upsert: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
               } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            sequence: item.sequence !== undefined ? {
                set: item.sequence  
               } : undefined,
            type: item.type !== undefined ? {
                set: item.type  
               } : undefined,
            note: item.note !== undefined ? {
                set: item.note  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
            fee: item.fee !== undefined ? {
                set: item.fee  
               } : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          qty: item.qty !== undefined ? item.qty : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          optionType: item.optionType !== undefined ? item.optionType : undefined,
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          summary: item.summary !== undefined ? item.summary : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.asset.id !== undefined ? item.asset.id : undefined,
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    orders: item.orders ? {
      upsert: item.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          actionId: item.actionId !== undefined ? item.actionId : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          clientOrderId: item.clientOrderId !== undefined ? {
              set: item.clientOrderId  
             } : undefined,
          qty: item.qty !== undefined ? {
              set: item.qty  
             } : undefined,
          notional: item.notional !== undefined ? {
              set: item.notional  
             } : undefined,
          side: item.side !== undefined ? {
              set: item.side  
             } : undefined,
          type: item.type !== undefined ? {
              set: item.type  
             } : undefined,
          orderClass: item.orderClass !== undefined ? {
              set: item.orderClass  
             } : undefined,
          timeInForce: item.timeInForce !== undefined ? {
              set: item.timeInForce  
             } : undefined,
          limitPrice: item.limitPrice !== undefined ? {
              set: item.limitPrice  
             } : undefined,
          stopPrice: item.stopPrice !== undefined ? {
              set: item.stopPrice  
             } : undefined,
          trailPrice: item.trailPrice !== undefined ? {
              set: item.trailPrice  
             } : undefined,
          trailPercent: item.trailPercent !== undefined ? {
              set: item.trailPercent  
             } : undefined,
          extendedHours: item.extendedHours !== undefined ? {
              set: item.extendedHours  
             } : undefined,
          status: item.status !== undefined ? {
              set: item.status  
             } : undefined,
          submittedAt: item.submittedAt !== undefined ? {
              set: item.submittedAt  
             } : undefined,
          filledAt: item.filledAt !== undefined ? {
              set: item.filledAt  
             } : undefined,
          filledQty: item.filledQty !== undefined ? {
              set: item.filledQty  
             } : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? {
              set: item.filledAvgPrice  
             } : undefined,
          cancelRequestedAt: item.cancelRequestedAt !== undefined ? {
              set: item.cancelRequestedAt  
             } : undefined,
          canceledAt: item.canceledAt !== undefined ? {
              set: item.canceledAt  
             } : undefined,
          fee: item.fee !== undefined ? {
              set: item.fee  
             } : undefined,
          strikePrice: item.strikePrice !== undefined ? {
              set: item.strikePrice  
             } : undefined,
          expirationDate: item.expirationDate !== undefined ? {
              set: item.expirationDate  
             } : undefined,
          optionType: item.optionType !== undefined ? {
              set: item.optionType  
             } : undefined,
          stopLossId: item.stopLossId !== undefined ? {
              set: item.stopLossId  
             } : undefined,
          takeProfitId: item.takeProfitId !== undefined ? {
              set: item.takeProfitId  
             } : undefined,
      stopLoss: item.stopLoss ? {
        upsert: {
          where: {
            id: item.stopLoss.id !== undefined ? {
                equals: item.stopLoss.id 
               } : undefined,
            orderId: item.stopLoss.orderId !== undefined ? {
                equals: item.stopLoss.orderId 
               } : undefined,
          },
          update: {
            id: item.stopLoss.id !== undefined ? {
                set: item.stopLoss.id  
               } : undefined,
            stopPrice: item.stopLoss.stopPrice !== undefined ? {
                set: item.stopLoss.stopPrice  
               } : undefined,
            limitPrice: item.stopLoss.limitPrice !== undefined ? {
                set: item.stopLoss.limitPrice  
               } : undefined,
          },
          create: {
            stopPrice: item.stopLoss.stopPrice !== undefined ? item.stopLoss.stopPrice : undefined,
            limitPrice: item.stopLoss.limitPrice !== undefined ? item.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.takeProfit ? {
        upsert: {
          where: {
            id: item.takeProfit.id !== undefined ? {
                equals: item.takeProfit.id 
               } : undefined,
            orderId: item.takeProfit.orderId !== undefined ? {
                equals: item.takeProfit.orderId 
               } : undefined,
          },
          update: {
            id: item.takeProfit.id !== undefined ? {
                set: item.takeProfit.id  
               } : undefined,
            limitPrice: item.takeProfit.limitPrice !== undefined ? {
                set: item.takeProfit.limitPrice  
               } : undefined,
            stopPrice: item.takeProfit.stopPrice !== undefined ? {
                set: item.takeProfit.stopPrice  
               } : undefined,
          },
          create: {
            limitPrice: item.takeProfit.limitPrice !== undefined ? item.takeProfit.limitPrice : undefined,
            stopPrice: item.takeProfit.stopPrice !== undefined ? item.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      action: item.action ? {
        upsert: {
          where: {
            id: item.action.id !== undefined ? {
                equals: item.action.id 
               } : undefined,
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          update: {
            id: item.action.id !== undefined ? {
                set: item.action.id  
               } : undefined,
            sequence: item.action.sequence !== undefined ? {
                set: item.action.sequence  
               } : undefined,
            type: item.action.type !== undefined ? {
                set: item.action.type  
               } : undefined,
            note: item.action.note !== undefined ? {
                set: item.action.note  
               } : undefined,
            status: item.action.status !== undefined ? {
                set: item.action.status  
               } : undefined,
            fee: item.action.fee !== undefined ? {
                set: item.action.fee  
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      asset: item.asset ? {
        upsert: {
          where: {
            id: item.asset.id !== undefined ? {
                equals: item.asset.id 
               } : undefined,
            symbol: item.asset.symbol !== undefined ? {
                equals: item.asset.symbol 
               } : undefined,
            name: item.asset.name !== undefined ? {
                equals: item.asset.name 
               } : undefined,
          },
          update: {
            id: item.asset.id !== undefined ? {
                set: item.asset.id  
               } : undefined,
            symbol: item.asset.symbol !== undefined ? {
                set: item.asset.symbol  
               } : undefined,
            name: item.asset.name !== undefined ? {
                set: item.asset.name  
               } : undefined,
            type: item.asset.type !== undefined ? {
                set: item.asset.type  
               } : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? {
                set: item.asset.logoUrl  
               } : undefined,
            description: item.asset.description !== undefined ? {
                set: item.asset.description  
               } : undefined,
            cik: item.asset.cik !== undefined ? {
                set: item.asset.cik  
               } : undefined,
            exchange: item.asset.exchange !== undefined ? {
                set: item.asset.exchange  
               } : undefined,
            currency: item.asset.currency !== undefined ? {
                set: item.asset.currency  
               } : undefined,
            country: item.asset.country !== undefined ? {
                set: item.asset.country  
               } : undefined,
            sector: item.asset.sector !== undefined ? {
                set: item.asset.sector  
               } : undefined,
            industry: item.asset.industry !== undefined ? {
                set: item.asset.industry  
               } : undefined,
            address: item.asset.address !== undefined ? {
                set: item.asset.address  
               } : undefined,
            officialSite: item.asset.officialSite !== undefined ? {
                set: item.asset.officialSite  
               } : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? {
                set: item.asset.fiscalYearEnd  
               } : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? {
                set: item.asset.latestQuarter  
               } : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? {
                set: item.asset.marketCapitalization  
               } : undefined,
            ebitda: item.asset.ebitda !== undefined ? {
                set: item.asset.ebitda  
               } : undefined,
            peRatio: item.asset.peRatio !== undefined ? {
                set: item.asset.peRatio  
               } : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? {
                set: item.asset.pegRatio  
               } : undefined,
            bookValue: item.asset.bookValue !== undefined ? {
                set: item.asset.bookValue  
               } : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? {
                set: item.asset.dividendPerShare  
               } : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? {
                set: item.asset.dividendYield  
               } : undefined,
            eps: item.asset.eps !== undefined ? {
                set: item.asset.eps  
               } : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? {
                set: item.asset.revenuePerShareTTM  
               } : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? {
                set: item.asset.profitMargin  
               } : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? {
                set: item.asset.operatingMarginTTM  
               } : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? {
                set: item.asset.returnOnAssetsTTM  
               } : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? {
                set: item.asset.returnOnEquityTTM  
               } : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? {
                set: item.asset.revenueTTM  
               } : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? {
                set: item.asset.grossProfitTTM  
               } : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? {
                set: item.asset.dilutedEPSTTM  
               } : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: item.asset.quarterlyEarningsGrowthYOY  
               } : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: item.asset.quarterlyRevenueGrowthYOY  
               } : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? {
                set: item.asset.analystTargetPrice  
               } : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? {
                set: item.asset.analystRatingStrongBuy  
               } : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? {
                set: item.asset.analystRatingBuy  
               } : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? {
                set: item.asset.analystRatingHold  
               } : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? {
                set: item.asset.analystRatingSell  
               } : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? {
                set: item.asset.analystRatingStrongSell  
               } : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? {
                set: item.asset.trailingPE  
               } : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? {
                set: item.asset.forwardPE  
               } : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? {
                set: item.asset.priceToSalesRatioTTM  
               } : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? {
                set: item.asset.priceToBookRatio  
               } : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? {
                set: item.asset.evToRevenue  
               } : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? {
                set: item.asset.evToEbitda  
               } : undefined,
            beta: item.asset.beta !== undefined ? {
                set: item.asset.beta  
               } : undefined,
            week52High: item.asset.week52High !== undefined ? {
                set: item.asset.week52High  
               } : undefined,
            week52Low: item.asset.week52Low !== undefined ? {
                set: item.asset.week52Low  
               } : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? {
                set: item.asset.day50MovingAverage  
               } : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? {
                set: item.asset.day200MovingAverage  
               } : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? {
                set: item.asset.sharesOutstanding  
               } : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? {
                set: item.asset.dividendDate  
               } : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? {
                set: item.asset.exDividendDate  
               } : undefined,
            askPrice: item.asset.askPrice !== undefined ? {
                set: item.asset.askPrice  
               } : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? {
                set: item.asset.bidPrice  
               } : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
        create: {
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          qty: item.qty !== undefined ? item.qty : undefined,
          notional: item.notional !== undefined ? item.notional : undefined,
          side: item.side !== undefined ? item.side : undefined,
          type: item.type !== undefined ? item.type : undefined,
          orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
          timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
          limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
          stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
          trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
          trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
          extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
          status: item.status !== undefined ? item.status : undefined,
          submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
          filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
          filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
          cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
          canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
          fee: item.fee !== undefined ? item.fee : undefined,
          strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
          expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
          optionType: item.optionType !== undefined ? item.optionType : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
      stopLoss: item.stopLoss ? 
        typeof item.stopLoss === 'object' && Object.keys(item.stopLoss).length === 1 && Object.keys(item.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.stopLoss.id !== undefined ? item.stopLoss.id : undefined,
            orderId: item.stopLoss.orderId !== undefined ? item.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.stopLoss.stopPrice !== undefined ? item.stopLoss.stopPrice : undefined,
            limitPrice: item.stopLoss.limitPrice !== undefined ? item.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.takeProfit ? 
        typeof item.takeProfit === 'object' && Object.keys(item.takeProfit).length === 1 && Object.keys(item.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.takeProfit.id !== undefined ? item.takeProfit.id : undefined,
            orderId: item.takeProfit.orderId !== undefined ? item.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.takeProfit.limitPrice !== undefined ? item.takeProfit.limitPrice : undefined,
            stopPrice: item.takeProfit.stopPrice !== undefined ? item.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      action: item.action ? 
        typeof item.action === 'object' && Object.keys(item.action).length === 1 && Object.keys(item.action)[0] === 'id'
    ? { connect: {
            id: item.action.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.action.id !== undefined ? item.action.id : undefined,
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.asset.id !== undefined ? item.asset.id : undefined,
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    positions: item.positions ? {
      upsert: item.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          averageEntryPrice: item.averageEntryPrice !== undefined ? {
              set: item.averageEntryPrice  
             } : undefined,
          qty: item.qty !== undefined ? {
              set: item.qty  
             } : undefined,
          qtyAvailable: item.qtyAvailable !== undefined ? {
              set: item.qtyAvailable  
             } : undefined,
          marketValue: item.marketValue !== undefined ? {
              set: item.marketValue  
             } : undefined,
          costBasis: item.costBasis !== undefined ? {
              set: item.costBasis  
             } : undefined,
          unrealizedPL: item.unrealizedPL !== undefined ? {
              set: item.unrealizedPL  
             } : undefined,
          unrealizedPLPC: item.unrealizedPLPC !== undefined ? {
              set: item.unrealizedPLPC  
             } : undefined,
          unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? {
              set: item.unrealisedIntradayPL  
             } : undefined,
          unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? {
              set: item.unrealisedIntradayPLPC  
             } : undefined,
          currentPrice: item.currentPrice !== undefined ? {
              set: item.currentPrice  
             } : undefined,
          lastTradePrice: item.lastTradePrice !== undefined ? {
              set: item.lastTradePrice  
             } : undefined,
          changeToday: item.changeToday !== undefined ? {
              set: item.changeToday  
             } : undefined,
          assetMarginable: item.assetMarginable !== undefined ? {
              set: item.assetMarginable  
             } : undefined,
          closed: item.closed !== undefined ? {
              set: item.closed  
             } : undefined,
      asset: item.asset ? {
        upsert: {
          where: {
            id: item.asset.id !== undefined ? {
                equals: item.asset.id 
               } : undefined,
            symbol: item.asset.symbol !== undefined ? {
                equals: item.asset.symbol 
               } : undefined,
            name: item.asset.name !== undefined ? {
                equals: item.asset.name 
               } : undefined,
          },
          update: {
            id: item.asset.id !== undefined ? {
                set: item.asset.id  
               } : undefined,
            symbol: item.asset.symbol !== undefined ? {
                set: item.asset.symbol  
               } : undefined,
            name: item.asset.name !== undefined ? {
                set: item.asset.name  
               } : undefined,
            type: item.asset.type !== undefined ? {
                set: item.asset.type  
               } : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? {
                set: item.asset.logoUrl  
               } : undefined,
            description: item.asset.description !== undefined ? {
                set: item.asset.description  
               } : undefined,
            cik: item.asset.cik !== undefined ? {
                set: item.asset.cik  
               } : undefined,
            exchange: item.asset.exchange !== undefined ? {
                set: item.asset.exchange  
               } : undefined,
            currency: item.asset.currency !== undefined ? {
                set: item.asset.currency  
               } : undefined,
            country: item.asset.country !== undefined ? {
                set: item.asset.country  
               } : undefined,
            sector: item.asset.sector !== undefined ? {
                set: item.asset.sector  
               } : undefined,
            industry: item.asset.industry !== undefined ? {
                set: item.asset.industry  
               } : undefined,
            address: item.asset.address !== undefined ? {
                set: item.asset.address  
               } : undefined,
            officialSite: item.asset.officialSite !== undefined ? {
                set: item.asset.officialSite  
               } : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? {
                set: item.asset.fiscalYearEnd  
               } : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? {
                set: item.asset.latestQuarter  
               } : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? {
                set: item.asset.marketCapitalization  
               } : undefined,
            ebitda: item.asset.ebitda !== undefined ? {
                set: item.asset.ebitda  
               } : undefined,
            peRatio: item.asset.peRatio !== undefined ? {
                set: item.asset.peRatio  
               } : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? {
                set: item.asset.pegRatio  
               } : undefined,
            bookValue: item.asset.bookValue !== undefined ? {
                set: item.asset.bookValue  
               } : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? {
                set: item.asset.dividendPerShare  
               } : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? {
                set: item.asset.dividendYield  
               } : undefined,
            eps: item.asset.eps !== undefined ? {
                set: item.asset.eps  
               } : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? {
                set: item.asset.revenuePerShareTTM  
               } : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? {
                set: item.asset.profitMargin  
               } : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? {
                set: item.asset.operatingMarginTTM  
               } : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? {
                set: item.asset.returnOnAssetsTTM  
               } : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? {
                set: item.asset.returnOnEquityTTM  
               } : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? {
                set: item.asset.revenueTTM  
               } : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? {
                set: item.asset.grossProfitTTM  
               } : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? {
                set: item.asset.dilutedEPSTTM  
               } : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: item.asset.quarterlyEarningsGrowthYOY  
               } : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: item.asset.quarterlyRevenueGrowthYOY  
               } : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? {
                set: item.asset.analystTargetPrice  
               } : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? {
                set: item.asset.analystRatingStrongBuy  
               } : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? {
                set: item.asset.analystRatingBuy  
               } : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? {
                set: item.asset.analystRatingHold  
               } : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? {
                set: item.asset.analystRatingSell  
               } : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? {
                set: item.asset.analystRatingStrongSell  
               } : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? {
                set: item.asset.trailingPE  
               } : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? {
                set: item.asset.forwardPE  
               } : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? {
                set: item.asset.priceToSalesRatioTTM  
               } : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? {
                set: item.asset.priceToBookRatio  
               } : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? {
                set: item.asset.evToRevenue  
               } : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? {
                set: item.asset.evToEbitda  
               } : undefined,
            beta: item.asset.beta !== undefined ? {
                set: item.asset.beta  
               } : undefined,
            week52High: item.asset.week52High !== undefined ? {
                set: item.asset.week52High  
               } : undefined,
            week52Low: item.asset.week52Low !== undefined ? {
                set: item.asset.week52Low  
               } : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? {
                set: item.asset.day50MovingAverage  
               } : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? {
                set: item.asset.day200MovingAverage  
               } : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? {
                set: item.asset.sharesOutstanding  
               } : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? {
                set: item.asset.dividendDate  
               } : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? {
                set: item.asset.exDividendDate  
               } : undefined,
            askPrice: item.asset.askPrice !== undefined ? {
                set: item.asset.askPrice  
               } : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? {
                set: item.asset.bidPrice  
               } : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
        create: {
          averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
          qty: item.qty !== undefined ? item.qty : undefined,
          qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
          marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
          costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
          unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
          unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
          unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
          unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
          currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
          lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
          changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
          assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          closed: item.closed !== undefined ? item.closed : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.asset.id !== undefined ? item.asset.id : undefined,
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    alerts: item.alerts ? {
      upsert: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          message: item.message !== undefined ? {
              set: item.message  
             } : undefined,
          type: item.type !== undefined ? {
              set: item.type  
             } : undefined,
          isRead: item.isRead !== undefined ? {
              set: item.isRead  
             } : undefined,
        },
        create: {
          message: item.message !== undefined ? item.message : undefined,
          type: item.type !== undefined ? item.type : undefined,
          isRead: item.isRead !== undefined ? item.isRead : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
        APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
        configuration: item.configuration !== undefined ? item.configuration : undefined,
        marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        minOrderSize: item.minOrderSize !== undefined ? item.minOrderSize : undefined,
        maxOrderSize: item.maxOrderSize !== undefined ? item.maxOrderSize : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
    trades: item.trades ? 
      Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
        },
        create: {
          qty: item.qty !== undefined ? item.qty : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          optionType: item.optionType !== undefined ? item.optionType : undefined,
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          summary: item.summary !== undefined ? item.summary : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.asset.id !== undefined ? item.asset.id : undefined,
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    orders: item.orders ? 
      Array.isArray(item.orders) && item.orders.length > 0 &&  item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          actionId: item.actionId !== undefined ? item.actionId : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
        },
        create: {
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          qty: item.qty !== undefined ? item.qty : undefined,
          notional: item.notional !== undefined ? item.notional : undefined,
          side: item.side !== undefined ? item.side : undefined,
          type: item.type !== undefined ? item.type : undefined,
          orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
          timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
          limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
          stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
          trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
          trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
          extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
          status: item.status !== undefined ? item.status : undefined,
          submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
          filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
          filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
          cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
          canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
          fee: item.fee !== undefined ? item.fee : undefined,
          strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
          expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
          optionType: item.optionType !== undefined ? item.optionType : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
      stopLoss: item.stopLoss ? 
        typeof item.stopLoss === 'object' && Object.keys(item.stopLoss).length === 1 && Object.keys(item.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.stopLoss.id !== undefined ? item.stopLoss.id : undefined,
            orderId: item.stopLoss.orderId !== undefined ? item.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.stopLoss.stopPrice !== undefined ? item.stopLoss.stopPrice : undefined,
            limitPrice: item.stopLoss.limitPrice !== undefined ? item.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.takeProfit ? 
        typeof item.takeProfit === 'object' && Object.keys(item.takeProfit).length === 1 && Object.keys(item.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.takeProfit.id !== undefined ? item.takeProfit.id : undefined,
            orderId: item.takeProfit.orderId !== undefined ? item.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.takeProfit.limitPrice !== undefined ? item.takeProfit.limitPrice : undefined,
            stopPrice: item.takeProfit.stopPrice !== undefined ? item.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      action: item.action ? 
        typeof item.action === 'object' && Object.keys(item.action).length === 1 && Object.keys(item.action)[0] === 'id'
    ? { connect: {
            id: item.action.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.action.id !== undefined ? item.action.id : undefined,
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.asset.id !== undefined ? item.asset.id : undefined,
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    positions: item.positions ? 
      Array.isArray(item.positions) && item.positions.length > 0 &&  item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
          qty: item.qty !== undefined ? item.qty : undefined,
          qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
          marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
          costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
          unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
          unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
          unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
          unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
          currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
          lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
          changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
          assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          closed: item.closed !== undefined ? item.closed : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.asset.id !== undefined ? item.asset.id : undefined,
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          message: item.message !== undefined ? item.message : undefined,
          type: item.type !== undefined ? item.type : undefined,
          isRead: item.isRead !== undefined ? item.isRead : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneUser) {
        return response.data.updateOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneUser:', error);
      throw error;
    }
  },

  /**
   * Update multiple User records.
   * @param props - Array of User objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: UserType[]): Promise<{ count: number } | null> {

      const UPDATE_MANY_USER = gql`
      mutation updateManyUser($data: [UserCreateManyInput!]!) {
        updateManyUser(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  email: prop.email !== undefined ? prop.email : undefined,
  name: prop.name !== undefined ? {
    equals: prop.name 
  } : undefined,
  emailVerified: prop.emailVerified !== undefined ? prop.emailVerified : undefined,
  image: prop.image !== undefined ? prop.image : undefined,
  createdAt: prop.createdAt !== undefined ? prop.createdAt : undefined,
  updatedAt: prop.updatedAt !== undefined ? prop.updatedAt : undefined,
  role: prop.role !== undefined ? prop.role : undefined,
  bio: prop.bio !== undefined ? prop.bio : undefined,
  jobTitle: prop.jobTitle !== undefined ? prop.jobTitle : undefined,
  currentAccount: prop.currentAccount !== undefined ? prop.currentAccount : undefined,
  plan: prop.plan !== undefined ? prop.plan : undefined,
  openaiAPIKey: prop.openaiAPIKey !== undefined ? prop.openaiAPIKey : undefined,
  openaiModel: prop.openaiModel !== undefined ? prop.openaiModel : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  name: prop.name !== undefined ? {
            set: prop.name 
           } : undefined,
  email: prop.email !== undefined ? {
            set: prop.email 
           } : undefined,
  emailVerified: prop.emailVerified !== undefined ? {
            set: prop.emailVerified 
           } : undefined,
  image: prop.image !== undefined ? {
            set: prop.image 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  role: prop.role !== undefined ? {
            set: prop.role 
           } : undefined,
  bio: prop.bio !== undefined ? {
            set: prop.bio 
           } : undefined,
  jobTitle: prop.jobTitle !== undefined ? {
            set: prop.jobTitle 
           } : undefined,
  currentAccount: prop.currentAccount !== undefined ? {
            set: prop.currentAccount 
           } : undefined,
  plan: prop.plan !== undefined ? {
            set: prop.plan 
           } : undefined,
  openaiAPIKey: prop.openaiAPIKey !== undefined ? {
            set: prop.openaiAPIKey 
           } : undefined,
  openaiModel: prop.openaiModel !== undefined ? {
            set: prop.openaiModel 
           } : undefined,
  customer: prop.customer ? {
    upsert: {
      where: {
        id: prop.customer.id !== undefined ? {
            equals: prop.customer.id 
           } : undefined,
        authUserId: prop.customer.authUserId !== undefined ? {
            equals: prop.customer.authUserId 
           } : undefined,
        name: prop.customer.name !== undefined ? {
            equals: prop.customer.name 
           } : undefined,
        stripeCustomerId: prop.customer.stripeCustomerId !== undefined ? {
            equals: prop.customer.stripeCustomerId 
           } : undefined,
        stripeSubscriptionId: prop.customer.stripeSubscriptionId !== undefined ? {
            equals: prop.customer.stripeSubscriptionId 
           } : undefined,
        stripePriceId: prop.customer.stripePriceId !== undefined ? {
            equals: prop.customer.stripePriceId 
           } : undefined,
      },
      update: {
        authUserId: prop.customer.authUserId !== undefined ? {
            set: prop.customer.authUserId  
           } : undefined,
        name: prop.customer.name !== undefined ? {
            set: prop.customer.name  
           } : undefined,
        plan: prop.customer.plan !== undefined ? {
            set: prop.customer.plan  
           } : undefined,
        stripeCustomerId: prop.customer.stripeCustomerId !== undefined ? {
            set: prop.customer.stripeCustomerId  
           } : undefined,
        stripeSubscriptionId: prop.customer.stripeSubscriptionId !== undefined ? {
            set: prop.customer.stripeSubscriptionId  
           } : undefined,
        stripePriceId: prop.customer.stripePriceId !== undefined ? {
            set: prop.customer.stripePriceId  
           } : undefined,
        stripeCurrentPeriodEnd: prop.customer.stripeCurrentPeriodEnd !== undefined ? {
            set: prop.customer.stripeCurrentPeriodEnd  
           } : undefined,
      },
      create: {
        authUserId: prop.customer.authUserId !== undefined ? prop.customer.authUserId : undefined,
        name: prop.customer.name !== undefined ? prop.customer.name : undefined,
        plan: prop.customer.plan !== undefined ? prop.customer.plan : undefined,
        stripeCustomerId: prop.customer.stripeCustomerId !== undefined ? prop.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: prop.customer.stripeSubscriptionId !== undefined ? prop.customer.stripeSubscriptionId : undefined,
        stripePriceId: prop.customer.stripePriceId !== undefined ? prop.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: prop.customer.stripeCurrentPeriodEnd !== undefined ? prop.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: prop.accounts ? {
    upsert: prop.accounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
        providerAccountId: item.providerAccountId !== undefined ? {
            equals: item.providerAccountId 
           } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id  
           } : undefined,
        type: item.type !== undefined ? {
            set: item.type  
           } : undefined,
        provider: item.provider !== undefined ? {
            set: item.provider  
           } : undefined,
        providerAccountId: item.providerAccountId !== undefined ? {
            set: item.providerAccountId  
           } : undefined,
        refresh_token: item.refresh_token !== undefined ? {
            set: item.refresh_token  
           } : undefined,
        access_token: item.access_token !== undefined ? {
            set: item.access_token  
           } : undefined,
        expires_at: item.expires_at !== undefined ? {
            set: item.expires_at  
           } : undefined,
        token_type: item.token_type !== undefined ? {
            set: item.token_type  
           } : undefined,
        scope: item.scope !== undefined ? {
            set: item.scope  
           } : undefined,
        id_token: item.id_token !== undefined ? {
            set: item.id_token  
           } : undefined,
        session_state: item.session_state !== undefined ? {
            set: item.session_state  
           } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        provider: item.provider !== undefined ? item.provider : undefined,
        providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
        refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
        access_token: item.access_token !== undefined ? item.access_token : undefined,
        expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
        token_type: item.token_type !== undefined ? item.token_type : undefined,
        scope: item.scope !== undefined ? item.scope : undefined,
        id_token: item.id_token !== undefined ? item.id_token : undefined,
        session_state: item.session_state !== undefined ? item.session_state : undefined,
      },
    }))
  } : undefined,
  sessions: prop.sessions ? {
    upsert: prop.sessions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id  
           } : undefined,
        sessionToken: item.sessionToken !== undefined ? {
            set: item.sessionToken  
           } : undefined,
        expires: item.expires !== undefined ? {
            set: item.expires  
           } : undefined,
      },
      create: {
        sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
        expires: item.expires !== undefined ? item.expires : undefined,
      },
    }))
  } : undefined,
  authenticators: prop.authenticators ? {
    upsert: prop.authenticators.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id  
           } : undefined,
        credentialID: item.credentialID !== undefined ? {
            set: item.credentialID  
           } : undefined,
        publicKey: item.publicKey !== undefined ? {
            set: item.publicKey  
           } : undefined,
        counter: item.counter !== undefined ? {
            set: item.counter  
           } : undefined,
      },
      create: {
        credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
        publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
        counter: item.counter !== undefined ? item.counter : undefined,
      },
    }))
  } : undefined,
  alpacaAccounts: prop.alpacaAccounts ? {
    upsert: prop.alpacaAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id  
           } : undefined,
        type: item.type !== undefined ? {
            set: item.type  
           } : undefined,
        APIKey: item.APIKey !== undefined ? {
            set: item.APIKey  
           } : undefined,
        APISecret: item.APISecret !== undefined ? {
            set: item.APISecret  
           } : undefined,
        configuration: item.configuration !== undefined ? {
            set: item.configuration  
           } : undefined,
        marketOpen: item.marketOpen !== undefined ? {
            set: item.marketOpen  
           } : undefined,
        minOrderSize: item.minOrderSize !== undefined ? {
            set: item.minOrderSize  
           } : undefined,
        maxOrderSize: item.maxOrderSize !== undefined ? {
            set: item.maxOrderSize  
           } : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? {
            set: item.minPercentageChange  
           } : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? {
            set: item.volumeThreshold  
           } : undefined,
    trades: item.trades ? {
      upsert: item.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          qty: item.qty !== undefined ? {
              set: item.qty  
             } : undefined,
          price: item.price !== undefined ? {
              set: item.price  
             } : undefined,
          total: item.total !== undefined ? {
              set: item.total  
             } : undefined,
          optionType: item.optionType !== undefined ? {
              set: item.optionType  
             } : undefined,
          signal: item.signal !== undefined ? {
              set: item.signal  
             } : undefined,
          strategy: item.strategy !== undefined ? {
              set: item.strategy  
             } : undefined,
          analysis: item.analysis !== undefined ? {
              set: item.analysis  
             } : undefined,
          summary: item.summary !== undefined ? {
              set: item.summary  
             } : undefined,
          confidence: item.confidence !== undefined ? {
              set: item.confidence  
             } : undefined,
          timestamp: item.timestamp !== undefined ? {
              set: item.timestamp  
             } : undefined,
          status: item.status !== undefined ? {
              set: item.status  
             } : undefined,
      asset: item.asset ? {
        upsert: {
          where: {
            id: item.asset.id !== undefined ? {
                equals: item.asset.id 
               } : undefined,
            symbol: item.asset.symbol !== undefined ? {
                equals: item.asset.symbol 
               } : undefined,
            name: item.asset.name !== undefined ? {
                equals: item.asset.name 
               } : undefined,
          },
          update: {
            id: item.asset.id !== undefined ? {
                set: item.asset.id  
               } : undefined,
            symbol: item.asset.symbol !== undefined ? {
                set: item.asset.symbol  
               } : undefined,
            name: item.asset.name !== undefined ? {
                set: item.asset.name  
               } : undefined,
            type: item.asset.type !== undefined ? {
                set: item.asset.type  
               } : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? {
                set: item.asset.logoUrl  
               } : undefined,
            description: item.asset.description !== undefined ? {
                set: item.asset.description  
               } : undefined,
            cik: item.asset.cik !== undefined ? {
                set: item.asset.cik  
               } : undefined,
            exchange: item.asset.exchange !== undefined ? {
                set: item.asset.exchange  
               } : undefined,
            currency: item.asset.currency !== undefined ? {
                set: item.asset.currency  
               } : undefined,
            country: item.asset.country !== undefined ? {
                set: item.asset.country  
               } : undefined,
            sector: item.asset.sector !== undefined ? {
                set: item.asset.sector  
               } : undefined,
            industry: item.asset.industry !== undefined ? {
                set: item.asset.industry  
               } : undefined,
            address: item.asset.address !== undefined ? {
                set: item.asset.address  
               } : undefined,
            officialSite: item.asset.officialSite !== undefined ? {
                set: item.asset.officialSite  
               } : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? {
                set: item.asset.fiscalYearEnd  
               } : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? {
                set: item.asset.latestQuarter  
               } : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? {
                set: item.asset.marketCapitalization  
               } : undefined,
            ebitda: item.asset.ebitda !== undefined ? {
                set: item.asset.ebitda  
               } : undefined,
            peRatio: item.asset.peRatio !== undefined ? {
                set: item.asset.peRatio  
               } : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? {
                set: item.asset.pegRatio  
               } : undefined,
            bookValue: item.asset.bookValue !== undefined ? {
                set: item.asset.bookValue  
               } : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? {
                set: item.asset.dividendPerShare  
               } : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? {
                set: item.asset.dividendYield  
               } : undefined,
            eps: item.asset.eps !== undefined ? {
                set: item.asset.eps  
               } : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? {
                set: item.asset.revenuePerShareTTM  
               } : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? {
                set: item.asset.profitMargin  
               } : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? {
                set: item.asset.operatingMarginTTM  
               } : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? {
                set: item.asset.returnOnAssetsTTM  
               } : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? {
                set: item.asset.returnOnEquityTTM  
               } : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? {
                set: item.asset.revenueTTM  
               } : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? {
                set: item.asset.grossProfitTTM  
               } : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? {
                set: item.asset.dilutedEPSTTM  
               } : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: item.asset.quarterlyEarningsGrowthYOY  
               } : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: item.asset.quarterlyRevenueGrowthYOY  
               } : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? {
                set: item.asset.analystTargetPrice  
               } : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? {
                set: item.asset.analystRatingStrongBuy  
               } : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? {
                set: item.asset.analystRatingBuy  
               } : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? {
                set: item.asset.analystRatingHold  
               } : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? {
                set: item.asset.analystRatingSell  
               } : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? {
                set: item.asset.analystRatingStrongSell  
               } : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? {
                set: item.asset.trailingPE  
               } : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? {
                set: item.asset.forwardPE  
               } : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? {
                set: item.asset.priceToSalesRatioTTM  
               } : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? {
                set: item.asset.priceToBookRatio  
               } : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? {
                set: item.asset.evToRevenue  
               } : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? {
                set: item.asset.evToEbitda  
               } : undefined,
            beta: item.asset.beta !== undefined ? {
                set: item.asset.beta  
               } : undefined,
            week52High: item.asset.week52High !== undefined ? {
                set: item.asset.week52High  
               } : undefined,
            week52Low: item.asset.week52Low !== undefined ? {
                set: item.asset.week52Low  
               } : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? {
                set: item.asset.day50MovingAverage  
               } : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? {
                set: item.asset.day200MovingAverage  
               } : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? {
                set: item.asset.sharesOutstanding  
               } : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? {
                set: item.asset.dividendDate  
               } : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? {
                set: item.asset.exDividendDate  
               } : undefined,
            askPrice: item.asset.askPrice !== undefined ? {
                set: item.asset.askPrice  
               } : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? {
                set: item.asset.bidPrice  
               } : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? {
        upsert: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
               } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            sequence: item.sequence !== undefined ? {
                set: item.sequence  
               } : undefined,
            type: item.type !== undefined ? {
                set: item.type  
               } : undefined,
            note: item.note !== undefined ? {
                set: item.note  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
            fee: item.fee !== undefined ? {
                set: item.fee  
               } : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          qty: item.qty !== undefined ? item.qty : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          optionType: item.optionType !== undefined ? item.optionType : undefined,
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          summary: item.summary !== undefined ? item.summary : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.asset.id !== undefined ? item.asset.id : undefined,
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    orders: item.orders ? {
      upsert: item.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          actionId: item.actionId !== undefined ? item.actionId : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          clientOrderId: item.clientOrderId !== undefined ? {
              set: item.clientOrderId  
             } : undefined,
          qty: item.qty !== undefined ? {
              set: item.qty  
             } : undefined,
          notional: item.notional !== undefined ? {
              set: item.notional  
             } : undefined,
          side: item.side !== undefined ? {
              set: item.side  
             } : undefined,
          type: item.type !== undefined ? {
              set: item.type  
             } : undefined,
          orderClass: item.orderClass !== undefined ? {
              set: item.orderClass  
             } : undefined,
          timeInForce: item.timeInForce !== undefined ? {
              set: item.timeInForce  
             } : undefined,
          limitPrice: item.limitPrice !== undefined ? {
              set: item.limitPrice  
             } : undefined,
          stopPrice: item.stopPrice !== undefined ? {
              set: item.stopPrice  
             } : undefined,
          trailPrice: item.trailPrice !== undefined ? {
              set: item.trailPrice  
             } : undefined,
          trailPercent: item.trailPercent !== undefined ? {
              set: item.trailPercent  
             } : undefined,
          extendedHours: item.extendedHours !== undefined ? {
              set: item.extendedHours  
             } : undefined,
          status: item.status !== undefined ? {
              set: item.status  
             } : undefined,
          submittedAt: item.submittedAt !== undefined ? {
              set: item.submittedAt  
             } : undefined,
          filledAt: item.filledAt !== undefined ? {
              set: item.filledAt  
             } : undefined,
          filledQty: item.filledQty !== undefined ? {
              set: item.filledQty  
             } : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? {
              set: item.filledAvgPrice  
             } : undefined,
          cancelRequestedAt: item.cancelRequestedAt !== undefined ? {
              set: item.cancelRequestedAt  
             } : undefined,
          canceledAt: item.canceledAt !== undefined ? {
              set: item.canceledAt  
             } : undefined,
          fee: item.fee !== undefined ? {
              set: item.fee  
             } : undefined,
          strikePrice: item.strikePrice !== undefined ? {
              set: item.strikePrice  
             } : undefined,
          expirationDate: item.expirationDate !== undefined ? {
              set: item.expirationDate  
             } : undefined,
          optionType: item.optionType !== undefined ? {
              set: item.optionType  
             } : undefined,
          stopLossId: item.stopLossId !== undefined ? {
              set: item.stopLossId  
             } : undefined,
          takeProfitId: item.takeProfitId !== undefined ? {
              set: item.takeProfitId  
             } : undefined,
      stopLoss: item.stopLoss ? {
        upsert: {
          where: {
            id: item.stopLoss.id !== undefined ? {
                equals: item.stopLoss.id 
               } : undefined,
            orderId: item.stopLoss.orderId !== undefined ? {
                equals: item.stopLoss.orderId 
               } : undefined,
          },
          update: {
            id: item.stopLoss.id !== undefined ? {
                set: item.stopLoss.id  
               } : undefined,
            stopPrice: item.stopLoss.stopPrice !== undefined ? {
                set: item.stopLoss.stopPrice  
               } : undefined,
            limitPrice: item.stopLoss.limitPrice !== undefined ? {
                set: item.stopLoss.limitPrice  
               } : undefined,
          },
          create: {
            stopPrice: item.stopLoss.stopPrice !== undefined ? item.stopLoss.stopPrice : undefined,
            limitPrice: item.stopLoss.limitPrice !== undefined ? item.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.takeProfit ? {
        upsert: {
          where: {
            id: item.takeProfit.id !== undefined ? {
                equals: item.takeProfit.id 
               } : undefined,
            orderId: item.takeProfit.orderId !== undefined ? {
                equals: item.takeProfit.orderId 
               } : undefined,
          },
          update: {
            id: item.takeProfit.id !== undefined ? {
                set: item.takeProfit.id  
               } : undefined,
            limitPrice: item.takeProfit.limitPrice !== undefined ? {
                set: item.takeProfit.limitPrice  
               } : undefined,
            stopPrice: item.takeProfit.stopPrice !== undefined ? {
                set: item.takeProfit.stopPrice  
               } : undefined,
          },
          create: {
            limitPrice: item.takeProfit.limitPrice !== undefined ? item.takeProfit.limitPrice : undefined,
            stopPrice: item.takeProfit.stopPrice !== undefined ? item.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      action: item.action ? {
        upsert: {
          where: {
            id: item.action.id !== undefined ? {
                equals: item.action.id 
               } : undefined,
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          update: {
            id: item.action.id !== undefined ? {
                set: item.action.id  
               } : undefined,
            sequence: item.action.sequence !== undefined ? {
                set: item.action.sequence  
               } : undefined,
            type: item.action.type !== undefined ? {
                set: item.action.type  
               } : undefined,
            note: item.action.note !== undefined ? {
                set: item.action.note  
               } : undefined,
            status: item.action.status !== undefined ? {
                set: item.action.status  
               } : undefined,
            fee: item.action.fee !== undefined ? {
                set: item.action.fee  
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      asset: item.asset ? {
        upsert: {
          where: {
            id: item.asset.id !== undefined ? {
                equals: item.asset.id 
               } : undefined,
            symbol: item.asset.symbol !== undefined ? {
                equals: item.asset.symbol 
               } : undefined,
            name: item.asset.name !== undefined ? {
                equals: item.asset.name 
               } : undefined,
          },
          update: {
            id: item.asset.id !== undefined ? {
                set: item.asset.id  
               } : undefined,
            symbol: item.asset.symbol !== undefined ? {
                set: item.asset.symbol  
               } : undefined,
            name: item.asset.name !== undefined ? {
                set: item.asset.name  
               } : undefined,
            type: item.asset.type !== undefined ? {
                set: item.asset.type  
               } : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? {
                set: item.asset.logoUrl  
               } : undefined,
            description: item.asset.description !== undefined ? {
                set: item.asset.description  
               } : undefined,
            cik: item.asset.cik !== undefined ? {
                set: item.asset.cik  
               } : undefined,
            exchange: item.asset.exchange !== undefined ? {
                set: item.asset.exchange  
               } : undefined,
            currency: item.asset.currency !== undefined ? {
                set: item.asset.currency  
               } : undefined,
            country: item.asset.country !== undefined ? {
                set: item.asset.country  
               } : undefined,
            sector: item.asset.sector !== undefined ? {
                set: item.asset.sector  
               } : undefined,
            industry: item.asset.industry !== undefined ? {
                set: item.asset.industry  
               } : undefined,
            address: item.asset.address !== undefined ? {
                set: item.asset.address  
               } : undefined,
            officialSite: item.asset.officialSite !== undefined ? {
                set: item.asset.officialSite  
               } : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? {
                set: item.asset.fiscalYearEnd  
               } : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? {
                set: item.asset.latestQuarter  
               } : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? {
                set: item.asset.marketCapitalization  
               } : undefined,
            ebitda: item.asset.ebitda !== undefined ? {
                set: item.asset.ebitda  
               } : undefined,
            peRatio: item.asset.peRatio !== undefined ? {
                set: item.asset.peRatio  
               } : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? {
                set: item.asset.pegRatio  
               } : undefined,
            bookValue: item.asset.bookValue !== undefined ? {
                set: item.asset.bookValue  
               } : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? {
                set: item.asset.dividendPerShare  
               } : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? {
                set: item.asset.dividendYield  
               } : undefined,
            eps: item.asset.eps !== undefined ? {
                set: item.asset.eps  
               } : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? {
                set: item.asset.revenuePerShareTTM  
               } : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? {
                set: item.asset.profitMargin  
               } : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? {
                set: item.asset.operatingMarginTTM  
               } : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? {
                set: item.asset.returnOnAssetsTTM  
               } : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? {
                set: item.asset.returnOnEquityTTM  
               } : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? {
                set: item.asset.revenueTTM  
               } : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? {
                set: item.asset.grossProfitTTM  
               } : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? {
                set: item.asset.dilutedEPSTTM  
               } : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: item.asset.quarterlyEarningsGrowthYOY  
               } : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: item.asset.quarterlyRevenueGrowthYOY  
               } : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? {
                set: item.asset.analystTargetPrice  
               } : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? {
                set: item.asset.analystRatingStrongBuy  
               } : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? {
                set: item.asset.analystRatingBuy  
               } : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? {
                set: item.asset.analystRatingHold  
               } : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? {
                set: item.asset.analystRatingSell  
               } : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? {
                set: item.asset.analystRatingStrongSell  
               } : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? {
                set: item.asset.trailingPE  
               } : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? {
                set: item.asset.forwardPE  
               } : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? {
                set: item.asset.priceToSalesRatioTTM  
               } : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? {
                set: item.asset.priceToBookRatio  
               } : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? {
                set: item.asset.evToRevenue  
               } : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? {
                set: item.asset.evToEbitda  
               } : undefined,
            beta: item.asset.beta !== undefined ? {
                set: item.asset.beta  
               } : undefined,
            week52High: item.asset.week52High !== undefined ? {
                set: item.asset.week52High  
               } : undefined,
            week52Low: item.asset.week52Low !== undefined ? {
                set: item.asset.week52Low  
               } : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? {
                set: item.asset.day50MovingAverage  
               } : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? {
                set: item.asset.day200MovingAverage  
               } : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? {
                set: item.asset.sharesOutstanding  
               } : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? {
                set: item.asset.dividendDate  
               } : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? {
                set: item.asset.exDividendDate  
               } : undefined,
            askPrice: item.asset.askPrice !== undefined ? {
                set: item.asset.askPrice  
               } : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? {
                set: item.asset.bidPrice  
               } : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
        create: {
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          qty: item.qty !== undefined ? item.qty : undefined,
          notional: item.notional !== undefined ? item.notional : undefined,
          side: item.side !== undefined ? item.side : undefined,
          type: item.type !== undefined ? item.type : undefined,
          orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
          timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
          limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
          stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
          trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
          trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
          extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
          status: item.status !== undefined ? item.status : undefined,
          submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
          filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
          filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
          cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
          canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
          fee: item.fee !== undefined ? item.fee : undefined,
          strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
          expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
          optionType: item.optionType !== undefined ? item.optionType : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
      stopLoss: item.stopLoss ? 
        typeof item.stopLoss === 'object' && Object.keys(item.stopLoss).length === 1 && Object.keys(item.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.stopLoss.id !== undefined ? item.stopLoss.id : undefined,
            orderId: item.stopLoss.orderId !== undefined ? item.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.stopLoss.stopPrice !== undefined ? item.stopLoss.stopPrice : undefined,
            limitPrice: item.stopLoss.limitPrice !== undefined ? item.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.takeProfit ? 
        typeof item.takeProfit === 'object' && Object.keys(item.takeProfit).length === 1 && Object.keys(item.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.takeProfit.id !== undefined ? item.takeProfit.id : undefined,
            orderId: item.takeProfit.orderId !== undefined ? item.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.takeProfit.limitPrice !== undefined ? item.takeProfit.limitPrice : undefined,
            stopPrice: item.takeProfit.stopPrice !== undefined ? item.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      action: item.action ? 
        typeof item.action === 'object' && Object.keys(item.action).length === 1 && Object.keys(item.action)[0] === 'id'
    ? { connect: {
            id: item.action.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.action.id !== undefined ? item.action.id : undefined,
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.asset.id !== undefined ? item.asset.id : undefined,
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    positions: item.positions ? {
      upsert: item.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          averageEntryPrice: item.averageEntryPrice !== undefined ? {
              set: item.averageEntryPrice  
             } : undefined,
          qty: item.qty !== undefined ? {
              set: item.qty  
             } : undefined,
          qtyAvailable: item.qtyAvailable !== undefined ? {
              set: item.qtyAvailable  
             } : undefined,
          marketValue: item.marketValue !== undefined ? {
              set: item.marketValue  
             } : undefined,
          costBasis: item.costBasis !== undefined ? {
              set: item.costBasis  
             } : undefined,
          unrealizedPL: item.unrealizedPL !== undefined ? {
              set: item.unrealizedPL  
             } : undefined,
          unrealizedPLPC: item.unrealizedPLPC !== undefined ? {
              set: item.unrealizedPLPC  
             } : undefined,
          unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? {
              set: item.unrealisedIntradayPL  
             } : undefined,
          unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? {
              set: item.unrealisedIntradayPLPC  
             } : undefined,
          currentPrice: item.currentPrice !== undefined ? {
              set: item.currentPrice  
             } : undefined,
          lastTradePrice: item.lastTradePrice !== undefined ? {
              set: item.lastTradePrice  
             } : undefined,
          changeToday: item.changeToday !== undefined ? {
              set: item.changeToday  
             } : undefined,
          assetMarginable: item.assetMarginable !== undefined ? {
              set: item.assetMarginable  
             } : undefined,
          closed: item.closed !== undefined ? {
              set: item.closed  
             } : undefined,
      asset: item.asset ? {
        upsert: {
          where: {
            id: item.asset.id !== undefined ? {
                equals: item.asset.id 
               } : undefined,
            symbol: item.asset.symbol !== undefined ? {
                equals: item.asset.symbol 
               } : undefined,
            name: item.asset.name !== undefined ? {
                equals: item.asset.name 
               } : undefined,
          },
          update: {
            id: item.asset.id !== undefined ? {
                set: item.asset.id  
               } : undefined,
            symbol: item.asset.symbol !== undefined ? {
                set: item.asset.symbol  
               } : undefined,
            name: item.asset.name !== undefined ? {
                set: item.asset.name  
               } : undefined,
            type: item.asset.type !== undefined ? {
                set: item.asset.type  
               } : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? {
                set: item.asset.logoUrl  
               } : undefined,
            description: item.asset.description !== undefined ? {
                set: item.asset.description  
               } : undefined,
            cik: item.asset.cik !== undefined ? {
                set: item.asset.cik  
               } : undefined,
            exchange: item.asset.exchange !== undefined ? {
                set: item.asset.exchange  
               } : undefined,
            currency: item.asset.currency !== undefined ? {
                set: item.asset.currency  
               } : undefined,
            country: item.asset.country !== undefined ? {
                set: item.asset.country  
               } : undefined,
            sector: item.asset.sector !== undefined ? {
                set: item.asset.sector  
               } : undefined,
            industry: item.asset.industry !== undefined ? {
                set: item.asset.industry  
               } : undefined,
            address: item.asset.address !== undefined ? {
                set: item.asset.address  
               } : undefined,
            officialSite: item.asset.officialSite !== undefined ? {
                set: item.asset.officialSite  
               } : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? {
                set: item.asset.fiscalYearEnd  
               } : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? {
                set: item.asset.latestQuarter  
               } : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? {
                set: item.asset.marketCapitalization  
               } : undefined,
            ebitda: item.asset.ebitda !== undefined ? {
                set: item.asset.ebitda  
               } : undefined,
            peRatio: item.asset.peRatio !== undefined ? {
                set: item.asset.peRatio  
               } : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? {
                set: item.asset.pegRatio  
               } : undefined,
            bookValue: item.asset.bookValue !== undefined ? {
                set: item.asset.bookValue  
               } : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? {
                set: item.asset.dividendPerShare  
               } : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? {
                set: item.asset.dividendYield  
               } : undefined,
            eps: item.asset.eps !== undefined ? {
                set: item.asset.eps  
               } : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? {
                set: item.asset.revenuePerShareTTM  
               } : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? {
                set: item.asset.profitMargin  
               } : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? {
                set: item.asset.operatingMarginTTM  
               } : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? {
                set: item.asset.returnOnAssetsTTM  
               } : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? {
                set: item.asset.returnOnEquityTTM  
               } : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? {
                set: item.asset.revenueTTM  
               } : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? {
                set: item.asset.grossProfitTTM  
               } : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? {
                set: item.asset.dilutedEPSTTM  
               } : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: item.asset.quarterlyEarningsGrowthYOY  
               } : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: item.asset.quarterlyRevenueGrowthYOY  
               } : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? {
                set: item.asset.analystTargetPrice  
               } : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? {
                set: item.asset.analystRatingStrongBuy  
               } : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? {
                set: item.asset.analystRatingBuy  
               } : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? {
                set: item.asset.analystRatingHold  
               } : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? {
                set: item.asset.analystRatingSell  
               } : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? {
                set: item.asset.analystRatingStrongSell  
               } : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? {
                set: item.asset.trailingPE  
               } : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? {
                set: item.asset.forwardPE  
               } : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? {
                set: item.asset.priceToSalesRatioTTM  
               } : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? {
                set: item.asset.priceToBookRatio  
               } : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? {
                set: item.asset.evToRevenue  
               } : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? {
                set: item.asset.evToEbitda  
               } : undefined,
            beta: item.asset.beta !== undefined ? {
                set: item.asset.beta  
               } : undefined,
            week52High: item.asset.week52High !== undefined ? {
                set: item.asset.week52High  
               } : undefined,
            week52Low: item.asset.week52Low !== undefined ? {
                set: item.asset.week52Low  
               } : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? {
                set: item.asset.day50MovingAverage  
               } : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? {
                set: item.asset.day200MovingAverage  
               } : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? {
                set: item.asset.sharesOutstanding  
               } : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? {
                set: item.asset.dividendDate  
               } : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? {
                set: item.asset.exDividendDate  
               } : undefined,
            askPrice: item.asset.askPrice !== undefined ? {
                set: item.asset.askPrice  
               } : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? {
                set: item.asset.bidPrice  
               } : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
        create: {
          averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
          qty: item.qty !== undefined ? item.qty : undefined,
          qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
          marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
          costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
          unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
          unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
          unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
          unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
          currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
          lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
          changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
          assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          closed: item.closed !== undefined ? item.closed : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.asset.id !== undefined ? item.asset.id : undefined,
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    alerts: item.alerts ? {
      upsert: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          message: item.message !== undefined ? {
              set: item.message  
             } : undefined,
          type: item.type !== undefined ? {
              set: item.type  
             } : undefined,
          isRead: item.isRead !== undefined ? {
              set: item.isRead  
             } : undefined,
        },
        create: {
          message: item.message !== undefined ? item.message : undefined,
          type: item.type !== undefined ? item.type : undefined,
          isRead: item.isRead !== undefined ? item.isRead : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
        APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
        configuration: item.configuration !== undefined ? item.configuration : undefined,
        marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        minOrderSize: item.minOrderSize !== undefined ? item.minOrderSize : undefined,
        maxOrderSize: item.maxOrderSize !== undefined ? item.maxOrderSize : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
    trades: item.trades ? 
      Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
        },
        create: {
          qty: item.qty !== undefined ? item.qty : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          optionType: item.optionType !== undefined ? item.optionType : undefined,
          signal: item.signal !== undefined ? item.signal : undefined,
          strategy: item.strategy !== undefined ? item.strategy : undefined,
          analysis: item.analysis !== undefined ? item.analysis : undefined,
          summary: item.summary !== undefined ? item.summary : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.asset.id !== undefined ? item.asset.id : undefined,
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.actions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.sequence !== undefined ? item.sequence : undefined,
            type: item.type !== undefined ? item.type : undefined,
            note: item.note !== undefined ? item.note : undefined,
            status: item.status !== undefined ? item.status : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    orders: item.orders ? 
      Array.isArray(item.orders) && item.orders.length > 0 &&  item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          actionId: item.actionId !== undefined ? item.actionId : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
        },
        create: {
          clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
          qty: item.qty !== undefined ? item.qty : undefined,
          notional: item.notional !== undefined ? item.notional : undefined,
          side: item.side !== undefined ? item.side : undefined,
          type: item.type !== undefined ? item.type : undefined,
          orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
          timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
          limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
          stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
          trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
          trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
          extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
          status: item.status !== undefined ? item.status : undefined,
          submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
          filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
          filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
          filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
          cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
          canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
          fee: item.fee !== undefined ? item.fee : undefined,
          strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
          expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
          optionType: item.optionType !== undefined ? item.optionType : undefined,
          stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
          takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
      stopLoss: item.stopLoss ? 
        typeof item.stopLoss === 'object' && Object.keys(item.stopLoss).length === 1 && Object.keys(item.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.stopLoss.id !== undefined ? item.stopLoss.id : undefined,
            orderId: item.stopLoss.orderId !== undefined ? item.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.stopLoss.stopPrice !== undefined ? item.stopLoss.stopPrice : undefined,
            limitPrice: item.stopLoss.limitPrice !== undefined ? item.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.takeProfit ? 
        typeof item.takeProfit === 'object' && Object.keys(item.takeProfit).length === 1 && Object.keys(item.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.takeProfit.id !== undefined ? item.takeProfit.id : undefined,
            orderId: item.takeProfit.orderId !== undefined ? item.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.takeProfit.limitPrice !== undefined ? item.takeProfit.limitPrice : undefined,
            stopPrice: item.takeProfit.stopPrice !== undefined ? item.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      action: item.action ? 
        typeof item.action === 'object' && Object.keys(item.action).length === 1 && Object.keys(item.action)[0] === 'id'
    ? { connect: {
            id: item.action.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.action.id !== undefined ? item.action.id : undefined,
            tradeId: item.action.tradeId !== undefined ? {
                equals: item.action.tradeId 
               } : undefined,
          },
          create: {
            sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
            type: item.action.type !== undefined ? item.action.type : undefined,
            note: item.action.note !== undefined ? item.action.note : undefined,
            status: item.action.status !== undefined ? item.action.status : undefined,
            fee: item.action.fee !== undefined ? item.action.fee : undefined,
          },
        }
      } : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.asset.id !== undefined ? item.asset.id : undefined,
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    positions: item.positions ? 
      Array.isArray(item.positions) && item.positions.length > 0 &&  item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
          qty: item.qty !== undefined ? item.qty : undefined,
          qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
          marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
          costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
          unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
          unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
          unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
          unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
          currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
          lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
          changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
          assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          closed: item.closed !== undefined ? item.closed : undefined,
      asset: item.asset ? 
        typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
            id: item.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.asset.id !== undefined ? item.asset.id : undefined,
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
          },
          create: {
            symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
            name: item.asset.name !== undefined ? item.asset.name : undefined,
            type: item.asset.type !== undefined ? item.asset.type : undefined,
            logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
            description: item.asset.description !== undefined ? item.asset.description : undefined,
            cik: item.asset.cik !== undefined ? item.asset.cik : undefined,
            exchange: item.asset.exchange !== undefined ? item.asset.exchange : undefined,
            currency: item.asset.currency !== undefined ? item.asset.currency : undefined,
            country: item.asset.country !== undefined ? item.asset.country : undefined,
            sector: item.asset.sector !== undefined ? item.asset.sector : undefined,
            industry: item.asset.industry !== undefined ? item.asset.industry : undefined,
            address: item.asset.address !== undefined ? item.asset.address : undefined,
            officialSite: item.asset.officialSite !== undefined ? item.asset.officialSite : undefined,
            fiscalYearEnd: item.asset.fiscalYearEnd !== undefined ? item.asset.fiscalYearEnd : undefined,
            latestQuarter: item.asset.latestQuarter !== undefined ? item.asset.latestQuarter : undefined,
            marketCapitalization: item.asset.marketCapitalization !== undefined ? item.asset.marketCapitalization : undefined,
            ebitda: item.asset.ebitda !== undefined ? item.asset.ebitda : undefined,
            peRatio: item.asset.peRatio !== undefined ? item.asset.peRatio : undefined,
            pegRatio: item.asset.pegRatio !== undefined ? item.asset.pegRatio : undefined,
            bookValue: item.asset.bookValue !== undefined ? item.asset.bookValue : undefined,
            dividendPerShare: item.asset.dividendPerShare !== undefined ? item.asset.dividendPerShare : undefined,
            dividendYield: item.asset.dividendYield !== undefined ? item.asset.dividendYield : undefined,
            eps: item.asset.eps !== undefined ? item.asset.eps : undefined,
            revenuePerShareTTM: item.asset.revenuePerShareTTM !== undefined ? item.asset.revenuePerShareTTM : undefined,
            profitMargin: item.asset.profitMargin !== undefined ? item.asset.profitMargin : undefined,
            operatingMarginTTM: item.asset.operatingMarginTTM !== undefined ? item.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.asset.returnOnAssetsTTM !== undefined ? item.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.asset.returnOnEquityTTM !== undefined ? item.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.asset.revenueTTM !== undefined ? item.asset.revenueTTM : undefined,
            grossProfitTTM: item.asset.grossProfitTTM !== undefined ? item.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.asset.dilutedEPSTTM !== undefined ? item.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.asset.quarterlyEarningsGrowthYOY !== undefined ? item.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.asset.quarterlyRevenueGrowthYOY !== undefined ? item.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.asset.analystTargetPrice !== undefined ? item.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.asset.analystRatingStrongBuy !== undefined ? item.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.asset.analystRatingBuy !== undefined ? item.asset.analystRatingBuy : undefined,
            analystRatingHold: item.asset.analystRatingHold !== undefined ? item.asset.analystRatingHold : undefined,
            analystRatingSell: item.asset.analystRatingSell !== undefined ? item.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.asset.analystRatingStrongSell !== undefined ? item.asset.analystRatingStrongSell : undefined,
            trailingPE: item.asset.trailingPE !== undefined ? item.asset.trailingPE : undefined,
            forwardPE: item.asset.forwardPE !== undefined ? item.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.asset.priceToSalesRatioTTM !== undefined ? item.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.asset.priceToBookRatio !== undefined ? item.asset.priceToBookRatio : undefined,
            evToRevenue: item.asset.evToRevenue !== undefined ? item.asset.evToRevenue : undefined,
            evToEbitda: item.asset.evToEbitda !== undefined ? item.asset.evToEbitda : undefined,
            beta: item.asset.beta !== undefined ? item.asset.beta : undefined,
            week52High: item.asset.week52High !== undefined ? item.asset.week52High : undefined,
            week52Low: item.asset.week52Low !== undefined ? item.asset.week52Low : undefined,
            day50MovingAverage: item.asset.day50MovingAverage !== undefined ? item.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.asset.day200MovingAverage !== undefined ? item.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.asset.sharesOutstanding !== undefined ? item.asset.sharesOutstanding : undefined,
            dividendDate: item.asset.dividendDate !== undefined ? item.asset.dividendDate : undefined,
            exDividendDate: item.asset.exDividendDate !== undefined ? item.asset.exDividendDate : undefined,
            askPrice: item.asset.askPrice !== undefined ? item.asset.askPrice : undefined,
            bidPrice: item.asset.bidPrice !== undefined ? item.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          message: item.message !== undefined ? item.message : undefined,
          type: item.type !== undefined ? item.type : undefined,
          isRead: item.isRead !== undefined ? item.isRead : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyUser) {
        return response.data.updateManyUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyUser:', error);
      throw error;
    }
  },

  /**
   * Delete a single User record.
   * @param props - Properties to update.
   * @returns The deleted User or null.
   */
  async delete(props: UserType): Promise<UserType> {

      const DELETE_ONE_USER = gql`
      mutation deleteOneUser($where: UserWhereUniqueInput!) {
        deleteOneUser(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneUser) {
        return response.data.deleteOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneUser:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single User record by ID.
   * @param props - Properties to update.
   * @returns The retrieved User or null.
   */
  async get(props: UserType): Promise<UserType | null> {

      const GET_USER = gql`
      query getUser($where: UserWhereUniqueInput!) {
        getUser(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  emailVerified: props.emailVerified !== undefined ? props.emailVerified : undefined,
  image: props.image !== undefined ? props.image : undefined,
  createdAt: props.createdAt !== undefined ? props.createdAt : undefined,
  updatedAt: props.updatedAt !== undefined ? props.updatedAt : undefined,
  role: props.role !== undefined ? props.role : undefined,
  bio: props.bio !== undefined ? props.bio : undefined,
  jobTitle: props.jobTitle !== undefined ? props.jobTitle : undefined,
  currentAccount: props.currentAccount !== undefined ? props.currentAccount : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? props.openaiAPIKey : undefined,
  openaiModel: props.openaiModel !== undefined ? props.openaiModel : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getUser ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No User found') {
        return null;
      } else {
        console.error('Error in getUser:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Users records.
   * @returns An array of User records or null.
   */
  async getAll(): Promise<UserType[] | null> {

      const GET_ALL_USER = gql`
      query getAllUser {
        users {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_USER });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.users ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No User found') {
        return null;
      } else {
        console.error('Error in getUser:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple User records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found User records or null.
   */
  async findMany(props: UserType): Promise<UserType[] | null> {

      const FIND_MANY_USER = gql`
      query findManyUser($where: UserWhereInput!) {
        users(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  email: props.email !== undefined ? {
    equals: props.email 
  } : undefined,
  emailVerified: props.emailVerified !== undefined ? props.emailVerified : undefined,
  image: props.image !== undefined ? props.image : undefined,
  createdAt: props.createdAt !== undefined ? props.createdAt : undefined,
  updatedAt: props.updatedAt !== undefined ? props.updatedAt : undefined,
  role: props.role !== undefined ? props.role : undefined,
  bio: props.bio !== undefined ? props.bio : undefined,
  jobTitle: props.jobTitle !== undefined ? props.jobTitle : undefined,
  currentAccount: props.currentAccount !== undefined ? props.currentAccount : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? props.openaiAPIKey : undefined,
  openaiModel: props.openaiModel !== undefined ? props.openaiModel : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Users) {
        return response.data.users;
      } else {
       return [] as UserType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No User found') {
        return null;
      } else {
        console.error('Error in getUser:', error);
        throw error;
      }
    }
  }
};
