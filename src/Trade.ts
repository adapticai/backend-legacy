
  
import { Trade as TradeType } from './generated/typegraphql-prisma/models/Trade';
import { ApolloError, gql } from '@apollo/client';
import { client } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Trade model.
   */

  const selectionSet = `
    
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
  alpacaAccount {
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
  }

  `;

  export const Trade = {

    /**
     * Create a new Trade record.
     * @param props - Properties for the new record.
     * @returns The created Trade or null.
     */

    async create(props: TradeType): Promise<TradeType> {

    const CREATE_ONE_TRADE = gql`
        mutation createOneTrade($data: TradeCreateInput!) {
          createOneTrade(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            qty: props.qty !== undefined ? props.qty : undefined,
  price: props.price !== undefined ? props.price : undefined,
  total: props.total !== undefined ? props.total : undefined,
  optionType: props.optionType !== undefined ? props.optionType : undefined,
  signal: props.signal !== undefined ? props.signal : undefined,
  strategy: props.strategy !== undefined ? props.strategy : undefined,
  analysis: props.analysis !== undefined ? props.analysis : undefined,
  summary: props.summary !== undefined ? props.summary : undefined,
  confidence: props.confidence !== undefined ? props.confidence : undefined,
  timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  status: props.status !== undefined ? props.status : undefined,
  alpacaAccount: props.alpacaAccount ? 
    typeof props.alpacaAccount === 'object' && Object.keys(props.alpacaAccount).length === 1 && Object.keys(props.alpacaAccount)[0] === 'id'
    ? { connect: {
        id: props.alpacaAccount.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.alpacaAccount.id !== undefined ? props.alpacaAccount.id : undefined,
        userId: props.alpacaAccount.userId !== undefined ? {
            equals: props.alpacaAccount.userId 
           } : undefined,
      },
      create: {
        type: props.alpacaAccount.type !== undefined ? props.alpacaAccount.type : undefined,
        APIKey: props.alpacaAccount.APIKey !== undefined ? props.alpacaAccount.APIKey : undefined,
        APISecret: props.alpacaAccount.APISecret !== undefined ? props.alpacaAccount.APISecret : undefined,
        configuration: props.alpacaAccount.configuration !== undefined ? props.alpacaAccount.configuration : undefined,
        marketOpen: props.alpacaAccount.marketOpen !== undefined ? props.alpacaAccount.marketOpen : undefined,
        minOrderSize: props.alpacaAccount.minOrderSize !== undefined ? props.alpacaAccount.minOrderSize : undefined,
        maxOrderSize: props.alpacaAccount.maxOrderSize !== undefined ? props.alpacaAccount.maxOrderSize : undefined,
        minPercentageChange: props.alpacaAccount.minPercentageChange !== undefined ? props.alpacaAccount.minPercentageChange : undefined,
        volumeThreshold: props.alpacaAccount.volumeThreshold !== undefined ? props.alpacaAccount.volumeThreshold : undefined,
    user: props.alpacaAccount.user ? 
      typeof props.alpacaAccount.user === 'object' && Object.keys(props.alpacaAccount.user).length === 1 && Object.keys(props.alpacaAccount.user)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.user.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.user.id !== undefined ? props.alpacaAccount.user.id : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          name: props.alpacaAccount.user.name !== undefined ? {
              equals: props.alpacaAccount.user.name 
             } : undefined,
        },
        create: {
          name: props.alpacaAccount.user.name !== undefined ? props.alpacaAccount.user.name : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          emailVerified: props.alpacaAccount.user.emailVerified !== undefined ? props.alpacaAccount.user.emailVerified : undefined,
          image: props.alpacaAccount.user.image !== undefined ? props.alpacaAccount.user.image : undefined,
          role: props.alpacaAccount.user.role !== undefined ? props.alpacaAccount.user.role : undefined,
          bio: props.alpacaAccount.user.bio !== undefined ? props.alpacaAccount.user.bio : undefined,
          jobTitle: props.alpacaAccount.user.jobTitle !== undefined ? props.alpacaAccount.user.jobTitle : undefined,
          currentAccount: props.alpacaAccount.user.currentAccount !== undefined ? props.alpacaAccount.user.currentAccount : undefined,
          plan: props.alpacaAccount.user.plan !== undefined ? props.alpacaAccount.user.plan : undefined,
          openaiAPIKey: props.alpacaAccount.user.openaiAPIKey !== undefined ? props.alpacaAccount.user.openaiAPIKey : undefined,
          openaiModel: props.alpacaAccount.user.openaiModel !== undefined ? props.alpacaAccount.user.openaiModel : undefined,
      customer: props.alpacaAccount.user.customer ? 
        typeof props.alpacaAccount.user.customer === 'object' && Object.keys(props.alpacaAccount.user.customer).length === 1 && Object.keys(props.alpacaAccount.user.customer)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.customer.id !== undefined ? props.alpacaAccount.user.customer.id : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: props.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                equals: props.alpacaAccount.user.customer.name 
               } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? props.alpacaAccount.user.customer.authUserId : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? props.alpacaAccount.user.customer.name : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? props.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? props.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? props.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 &&  props.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: props.alpacaAccount.user.sessions ? 
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 &&  props.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: props.alpacaAccount.user.authenticators ? 
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 &&  props.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item: any) => ({
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
        },
      }
    } : undefined,
    orders: props.alpacaAccount.orders ? 
      Array.isArray(props.alpacaAccount.orders) && props.alpacaAccount.orders.length > 0 &&  props.alpacaAccount.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.orders.map((item: any) => ({
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
    positions: props.alpacaAccount.positions ? 
      Array.isArray(props.alpacaAccount.positions) && props.alpacaAccount.positions.length > 0 &&  props.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.positions.map((item: any) => ({
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
    alerts: props.alpacaAccount.alerts ? 
      Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 &&  props.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.alerts.map((item: any) => ({
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
    }
  } : undefined,
  asset: props.asset ? 
    typeof props.asset === 'object' && Object.keys(props.asset).length === 1 && Object.keys(props.asset)[0] === 'id'
    ? { connect: {
        id: props.asset.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.asset.id !== undefined ? props.asset.id : undefined,
        symbol: props.asset.symbol !== undefined ? props.asset.symbol : undefined,
        name: props.asset.name !== undefined ? props.asset.name : undefined,
      },
      create: {
        symbol: props.asset.symbol !== undefined ? props.asset.symbol : undefined,
        name: props.asset.name !== undefined ? props.asset.name : undefined,
        type: props.asset.type !== undefined ? props.asset.type : undefined,
        logoUrl: props.asset.logoUrl !== undefined ? props.asset.logoUrl : undefined,
        description: props.asset.description !== undefined ? props.asset.description : undefined,
        cik: props.asset.cik !== undefined ? props.asset.cik : undefined,
        exchange: props.asset.exchange !== undefined ? props.asset.exchange : undefined,
        currency: props.asset.currency !== undefined ? props.asset.currency : undefined,
        country: props.asset.country !== undefined ? props.asset.country : undefined,
        sector: props.asset.sector !== undefined ? props.asset.sector : undefined,
        industry: props.asset.industry !== undefined ? props.asset.industry : undefined,
        address: props.asset.address !== undefined ? props.asset.address : undefined,
        officialSite: props.asset.officialSite !== undefined ? props.asset.officialSite : undefined,
        fiscalYearEnd: props.asset.fiscalYearEnd !== undefined ? props.asset.fiscalYearEnd : undefined,
        latestQuarter: props.asset.latestQuarter !== undefined ? props.asset.latestQuarter : undefined,
        marketCapitalization: props.asset.marketCapitalization !== undefined ? props.asset.marketCapitalization : undefined,
        ebitda: props.asset.ebitda !== undefined ? props.asset.ebitda : undefined,
        peRatio: props.asset.peRatio !== undefined ? props.asset.peRatio : undefined,
        pegRatio: props.asset.pegRatio !== undefined ? props.asset.pegRatio : undefined,
        bookValue: props.asset.bookValue !== undefined ? props.asset.bookValue : undefined,
        dividendPerShare: props.asset.dividendPerShare !== undefined ? props.asset.dividendPerShare : undefined,
        dividendYield: props.asset.dividendYield !== undefined ? props.asset.dividendYield : undefined,
        eps: props.asset.eps !== undefined ? props.asset.eps : undefined,
        revenuePerShareTTM: props.asset.revenuePerShareTTM !== undefined ? props.asset.revenuePerShareTTM : undefined,
        profitMargin: props.asset.profitMargin !== undefined ? props.asset.profitMargin : undefined,
        operatingMarginTTM: props.asset.operatingMarginTTM !== undefined ? props.asset.operatingMarginTTM : undefined,
        returnOnAssetsTTM: props.asset.returnOnAssetsTTM !== undefined ? props.asset.returnOnAssetsTTM : undefined,
        returnOnEquityTTM: props.asset.returnOnEquityTTM !== undefined ? props.asset.returnOnEquityTTM : undefined,
        revenueTTM: props.asset.revenueTTM !== undefined ? props.asset.revenueTTM : undefined,
        grossProfitTTM: props.asset.grossProfitTTM !== undefined ? props.asset.grossProfitTTM : undefined,
        dilutedEPSTTM: props.asset.dilutedEPSTTM !== undefined ? props.asset.dilutedEPSTTM : undefined,
        quarterlyEarningsGrowthYOY: props.asset.quarterlyEarningsGrowthYOY !== undefined ? props.asset.quarterlyEarningsGrowthYOY : undefined,
        quarterlyRevenueGrowthYOY: props.asset.quarterlyRevenueGrowthYOY !== undefined ? props.asset.quarterlyRevenueGrowthYOY : undefined,
        analystTargetPrice: props.asset.analystTargetPrice !== undefined ? props.asset.analystTargetPrice : undefined,
        analystRatingStrongBuy: props.asset.analystRatingStrongBuy !== undefined ? props.asset.analystRatingStrongBuy : undefined,
        analystRatingBuy: props.asset.analystRatingBuy !== undefined ? props.asset.analystRatingBuy : undefined,
        analystRatingHold: props.asset.analystRatingHold !== undefined ? props.asset.analystRatingHold : undefined,
        analystRatingSell: props.asset.analystRatingSell !== undefined ? props.asset.analystRatingSell : undefined,
        analystRatingStrongSell: props.asset.analystRatingStrongSell !== undefined ? props.asset.analystRatingStrongSell : undefined,
        trailingPE: props.asset.trailingPE !== undefined ? props.asset.trailingPE : undefined,
        forwardPE: props.asset.forwardPE !== undefined ? props.asset.forwardPE : undefined,
        priceToSalesRatioTTM: props.asset.priceToSalesRatioTTM !== undefined ? props.asset.priceToSalesRatioTTM : undefined,
        priceToBookRatio: props.asset.priceToBookRatio !== undefined ? props.asset.priceToBookRatio : undefined,
        evToRevenue: props.asset.evToRevenue !== undefined ? props.asset.evToRevenue : undefined,
        evToEbitda: props.asset.evToEbitda !== undefined ? props.asset.evToEbitda : undefined,
        beta: props.asset.beta !== undefined ? props.asset.beta : undefined,
        week52High: props.asset.week52High !== undefined ? props.asset.week52High : undefined,
        week52Low: props.asset.week52Low !== undefined ? props.asset.week52Low : undefined,
        day50MovingAverage: props.asset.day50MovingAverage !== undefined ? props.asset.day50MovingAverage : undefined,
        day200MovingAverage: props.asset.day200MovingAverage !== undefined ? props.asset.day200MovingAverage : undefined,
        sharesOutstanding: props.asset.sharesOutstanding !== undefined ? props.asset.sharesOutstanding : undefined,
        dividendDate: props.asset.dividendDate !== undefined ? props.asset.dividendDate : undefined,
        exDividendDate: props.asset.exDividendDate !== undefined ? props.asset.exDividendDate : undefined,
        askPrice: props.asset.askPrice !== undefined ? props.asset.askPrice : undefined,
        bidPrice: props.asset.bidPrice !== undefined ? props.asset.bidPrice : undefined,
    orders: props.asset.orders ? 
      Array.isArray(props.asset.orders) && props.asset.orders.length > 0 &&  props.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.orders.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
        },
      }))
    } : undefined,
    positions: props.asset.positions ? 
      Array.isArray(props.asset.positions) && props.asset.positions.length > 0 &&  props.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.positions.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    newsMentions: props.asset.newsMentions ? 
      Array.isArray(props.asset.newsMentions) && props.asset.newsMentions.length > 0 &&  props.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.newsMentions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.newsMentions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          url: item.url !== undefined ? item.url : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
          newsArticleId: item.newsArticleId !== undefined ? {
              equals: item.newsArticleId 
             } : undefined,
        },
        create: {
          url: item.url !== undefined ? item.url : undefined,
          relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
          sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
          sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
      news: item.news ? 
        typeof item.news === 'object' && Object.keys(item.news).length === 1 && Object.keys(item.news)[0] === 'id'
    ? { connect: {
            id: item.news.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.news.id !== undefined ? item.news.id : undefined,
            url: item.news.url !== undefined ? item.news.url : undefined,
            title: item.news.title !== undefined ? {
                equals: item.news.title 
               } : undefined,
          },
          create: {
            title: item.news.title !== undefined ? item.news.title : undefined,
            content: item.news.content !== undefined ? item.news.content : undefined,
            source: item.news.source !== undefined ? item.news.source : undefined,
            sourceDomain: item.news.sourceDomain !== undefined ? item.news.sourceDomain : undefined,
            url: item.news.url !== undefined ? item.news.url : undefined,
            sentiment: item.news.sentiment !== undefined ? item.news.sentiment : undefined,
            authors: item.news.authors !== undefined ? item.news.authors : undefined,
            summary: item.news.summary !== undefined ? item.news.summary : undefined,
            bannerImage: item.news.bannerImage !== undefined ? item.news.bannerImage : undefined,
            timePublished: item.news.timePublished !== undefined ? item.news.timePublished : undefined,
            category: item.news.category !== undefined ? item.news.category : undefined,
            topics: item.news.topics !== undefined ? item.news.topics : undefined,
            logo: item.news.logo !== undefined ? item.news.logo : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  actions: props.actions ? 
    Array.isArray(props.actions) && props.actions.length > 0 &&  props.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.actions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.actions.map((item: any) => ({
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
    order: item.order ? 
      typeof item.order === 'object' && Object.keys(item.order).length === 1 && Object.keys(item.order)[0] === 'id'
    ? { connect: {
          id: item.order.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.order.id !== undefined ? item.order.id : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          actionId: item.order.actionId !== undefined ? item.order.actionId : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
              equals: item.order.alpacaAccountId 
             } : undefined,
          assetId: item.order.assetId !== undefined ? {
              equals: item.order.assetId 
             } : undefined,
        },
        create: {
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          qty: item.order.qty !== undefined ? item.order.qty : undefined,
          notional: item.order.notional !== undefined ? item.order.notional : undefined,
          side: item.order.side !== undefined ? item.order.side : undefined,
          type: item.order.type !== undefined ? item.order.type : undefined,
          orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
          timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
          limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
          stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
          trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
          trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
          extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
          status: item.order.status !== undefined ? item.order.status : undefined,
          submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
          filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
          filledQty: item.order.filledQty !== undefined ? item.order.filledQty : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? item.order.cancelRequestedAt : undefined,
          canceledAt: item.order.canceledAt !== undefined ? item.order.canceledAt : undefined,
          fee: item.order.fee !== undefined ? item.order.fee : undefined,
          strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
          expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
          optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
      stopLoss: item.order.stopLoss ? 
        typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && Object.keys(item.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.order.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.stopLoss.id !== undefined ? item.order.stopLoss.id : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? item.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
        typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && Object.keys(item.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.order.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.takeProfit.id !== undefined ? item.order.takeProfit.id : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? item.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
        typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && Object.keys(item.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.order.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? item.order.alpacaAccount.id : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.order.alpacaAccount.minOrderSize !== undefined ? item.order.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.order.alpacaAccount.maxOrderSize !== undefined ? item.order.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
        typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && Object.keys(item.order.asset)[0] === 'id'
    ? { connect: {
            id: item.order.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.asset.id !== undefined ? item.order.asset.id : undefined,
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_TRADE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneTrade) {
        return response.data.createOneTrade;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneTrade:', error);
      throw error;
    }
  },

  /**
   * Create multiple Trade records.
   * @param props - Array of Trade objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: TradeType[]): Promise<{ count: number } | null> {

      const CREATE_MANY_TRADE = gql`
      mutation createManyTrade($data: [TradeCreateManyInput!]!) {
        createManyTrade(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  alpacaAccountId: prop.alpacaAccountId !== undefined ? prop.alpacaAccountId : undefined,
  assetId: prop.assetId !== undefined ? prop.assetId : undefined,
  qty: prop.qty !== undefined ? prop.qty : undefined,
  price: prop.price !== undefined ? prop.price : undefined,
  total: prop.total !== undefined ? prop.total : undefined,
  optionType: prop.optionType !== undefined ? prop.optionType : undefined,
  signal: prop.signal !== undefined ? prop.signal : undefined,
  strategy: prop.strategy !== undefined ? prop.strategy : undefined,
  analysis: prop.analysis !== undefined ? prop.analysis : undefined,
  summary: prop.summary !== undefined ? prop.summary : undefined,
  confidence: prop.confidence !== undefined ? prop.confidence : undefined,
  timestamp: prop.timestamp !== undefined ? prop.timestamp : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_TRADE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyTrade) {
        return response.data.createManyTrade;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyTrade:', error);
      throw error;
    }
  },

  /**
   * Update a single Trade record.
   * @param props - Properties to update.
   * @returns The updated Trade or null.
   */
  async update(props: TradeType): Promise<TradeType> {

      const UPDATE_ONE_TRADE = gql`
      mutation updateOneTrade($data: TradeUpdateInput!, $where: TradeWhereUniqueInput!) {
        updateOneTrade(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
  assetId: props.assetId !== undefined ? {
    equals: props.assetId 
  } : undefined,
  qty: props.qty !== undefined ? props.qty : undefined,
  price: props.price !== undefined ? props.price : undefined,
  total: props.total !== undefined ? props.total : undefined,
  optionType: props.optionType !== undefined ? props.optionType : undefined,
  signal: props.signal !== undefined ? props.signal : undefined,
  strategy: props.strategy !== undefined ? props.strategy : undefined,
  analysis: props.analysis !== undefined ? props.analysis : undefined,
  summary: props.summary !== undefined ? props.summary : undefined,
  confidence: props.confidence !== undefined ? props.confidence : undefined,
  timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  createdAt: props.createdAt !== undefined ? props.createdAt : undefined,
  updatedAt: props.updatedAt !== undefined ? props.updatedAt : undefined,
  status: props.status !== undefined ? props.status : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  qty: props.qty !== undefined ? {
            set: props.qty 
           } : undefined,
  price: props.price !== undefined ? {
            set: props.price 
           } : undefined,
  total: props.total !== undefined ? {
            set: props.total 
           } : undefined,
  optionType: props.optionType !== undefined ? {
            set: props.optionType 
           } : undefined,
  signal: props.signal !== undefined ? {
            set: props.signal 
           } : undefined,
  strategy: props.strategy !== undefined ? {
            set: props.strategy 
           } : undefined,
  analysis: props.analysis !== undefined ? {
            set: props.analysis 
           } : undefined,
  summary: props.summary !== undefined ? {
            set: props.summary 
           } : undefined,
  confidence: props.confidence !== undefined ? {
            set: props.confidence 
           } : undefined,
  timestamp: props.timestamp !== undefined ? {
            set: props.timestamp 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  alpacaAccount: props.alpacaAccount ? {
    upsert: {
      where: {
        id: props.alpacaAccount.id !== undefined ? {
            equals: props.alpacaAccount.id 
           } : undefined,
        userId: props.alpacaAccount.userId !== undefined ? {
            equals: props.alpacaAccount.userId 
           } : undefined,
      },
      update: {
        id: props.alpacaAccount.id !== undefined ? {
            set: props.alpacaAccount.id  
           } : undefined,
        type: props.alpacaAccount.type !== undefined ? {
            set: props.alpacaAccount.type  
           } : undefined,
        APIKey: props.alpacaAccount.APIKey !== undefined ? {
            set: props.alpacaAccount.APIKey  
           } : undefined,
        APISecret: props.alpacaAccount.APISecret !== undefined ? {
            set: props.alpacaAccount.APISecret  
           } : undefined,
        configuration: props.alpacaAccount.configuration !== undefined ? {
            set: props.alpacaAccount.configuration  
           } : undefined,
        marketOpen: props.alpacaAccount.marketOpen !== undefined ? {
            set: props.alpacaAccount.marketOpen  
           } : undefined,
        minOrderSize: props.alpacaAccount.minOrderSize !== undefined ? {
            set: props.alpacaAccount.minOrderSize  
           } : undefined,
        maxOrderSize: props.alpacaAccount.maxOrderSize !== undefined ? {
            set: props.alpacaAccount.maxOrderSize  
           } : undefined,
        minPercentageChange: props.alpacaAccount.minPercentageChange !== undefined ? {
            set: props.alpacaAccount.minPercentageChange  
           } : undefined,
        volumeThreshold: props.alpacaAccount.volumeThreshold !== undefined ? {
            set: props.alpacaAccount.volumeThreshold  
           } : undefined,
    user: props.alpacaAccount.user ? {
      upsert: {
        where: {
          id: props.alpacaAccount.user.id !== undefined ? {
              equals: props.alpacaAccount.user.id 
             } : undefined,
          name: props.alpacaAccount.user.name !== undefined ? {
              equals: props.alpacaAccount.user.name 
             } : undefined,
          email: props.alpacaAccount.user.email !== undefined ? {
              equals: props.alpacaAccount.user.email 
             } : undefined,
        },
        update: {
          id: props.alpacaAccount.user.id !== undefined ? {
              set: props.alpacaAccount.user.id  
             } : undefined,
          name: props.alpacaAccount.user.name !== undefined ? {
              set: props.alpacaAccount.user.name  
             } : undefined,
          email: props.alpacaAccount.user.email !== undefined ? {
              set: props.alpacaAccount.user.email  
             } : undefined,
          emailVerified: props.alpacaAccount.user.emailVerified !== undefined ? {
              set: props.alpacaAccount.user.emailVerified  
             } : undefined,
          image: props.alpacaAccount.user.image !== undefined ? {
              set: props.alpacaAccount.user.image  
             } : undefined,
          role: props.alpacaAccount.user.role !== undefined ? {
              set: props.alpacaAccount.user.role  
             } : undefined,
          bio: props.alpacaAccount.user.bio !== undefined ? {
              set: props.alpacaAccount.user.bio  
             } : undefined,
          jobTitle: props.alpacaAccount.user.jobTitle !== undefined ? {
              set: props.alpacaAccount.user.jobTitle  
             } : undefined,
          currentAccount: props.alpacaAccount.user.currentAccount !== undefined ? {
              set: props.alpacaAccount.user.currentAccount  
             } : undefined,
          plan: props.alpacaAccount.user.plan !== undefined ? {
              set: props.alpacaAccount.user.plan  
             } : undefined,
          openaiAPIKey: props.alpacaAccount.user.openaiAPIKey !== undefined ? {
              set: props.alpacaAccount.user.openaiAPIKey  
             } : undefined,
          openaiModel: props.alpacaAccount.user.openaiModel !== undefined ? {
              set: props.alpacaAccount.user.openaiModel  
             } : undefined,
      customer: props.alpacaAccount.user.customer ? {
        upsert: {
          where: {
            id: props.alpacaAccount.user.customer.id !== undefined ? {
                equals: props.alpacaAccount.user.customer.id 
               } : undefined,
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: props.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                equals: props.alpacaAccount.user.customer.name 
               } : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripeCustomerId 
               } : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripeSubscriptionId 
               } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          update: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                set: props.alpacaAccount.user.customer.authUserId  
               } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                set: props.alpacaAccount.user.customer.name  
               } : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? {
                set: props.alpacaAccount.user.customer.plan  
               } : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? {
                set: props.alpacaAccount.user.customer.stripeCustomerId  
               } : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? {
                set: props.alpacaAccount.user.customer.stripeSubscriptionId  
               } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                set: props.alpacaAccount.user.customer.stripePriceId  
               } : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd  
               } : undefined,
          },
          create: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? props.alpacaAccount.user.customer.authUserId : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? props.alpacaAccount.user.customer.name : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? props.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? props.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? props.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? {
        upsert: props.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: props.alpacaAccount.user.sessions ? {
        upsert: props.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: props.alpacaAccount.user.authenticators ? {
        upsert: props.alpacaAccount.user.authenticators.map((item: any) => ({
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
        },
        create: {
          name: props.alpacaAccount.user.name !== undefined ? props.alpacaAccount.user.name : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          emailVerified: props.alpacaAccount.user.emailVerified !== undefined ? props.alpacaAccount.user.emailVerified : undefined,
          image: props.alpacaAccount.user.image !== undefined ? props.alpacaAccount.user.image : undefined,
          role: props.alpacaAccount.user.role !== undefined ? props.alpacaAccount.user.role : undefined,
          bio: props.alpacaAccount.user.bio !== undefined ? props.alpacaAccount.user.bio : undefined,
          jobTitle: props.alpacaAccount.user.jobTitle !== undefined ? props.alpacaAccount.user.jobTitle : undefined,
          currentAccount: props.alpacaAccount.user.currentAccount !== undefined ? props.alpacaAccount.user.currentAccount : undefined,
          plan: props.alpacaAccount.user.plan !== undefined ? props.alpacaAccount.user.plan : undefined,
          openaiAPIKey: props.alpacaAccount.user.openaiAPIKey !== undefined ? props.alpacaAccount.user.openaiAPIKey : undefined,
          openaiModel: props.alpacaAccount.user.openaiModel !== undefined ? props.alpacaAccount.user.openaiModel : undefined,
      customer: props.alpacaAccount.user.customer ? 
        typeof props.alpacaAccount.user.customer === 'object' && Object.keys(props.alpacaAccount.user.customer).length === 1 && Object.keys(props.alpacaAccount.user.customer)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.customer.id !== undefined ? props.alpacaAccount.user.customer.id : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: props.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                equals: props.alpacaAccount.user.customer.name 
               } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? props.alpacaAccount.user.customer.authUserId : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? props.alpacaAccount.user.customer.name : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? props.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? props.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? props.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 &&  props.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: props.alpacaAccount.user.sessions ? 
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 &&  props.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: props.alpacaAccount.user.authenticators ? 
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 &&  props.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item: any) => ({
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
        },
      }
    } : undefined,
    orders: props.alpacaAccount.orders ? {
      upsert: props.alpacaAccount.orders.map((item: any) => ({
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
    positions: props.alpacaAccount.positions ? {
      upsert: props.alpacaAccount.positions.map((item: any) => ({
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
    alerts: props.alpacaAccount.alerts ? {
      upsert: props.alpacaAccount.alerts.map((item: any) => ({
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
        type: props.alpacaAccount.type !== undefined ? props.alpacaAccount.type : undefined,
        APIKey: props.alpacaAccount.APIKey !== undefined ? props.alpacaAccount.APIKey : undefined,
        APISecret: props.alpacaAccount.APISecret !== undefined ? props.alpacaAccount.APISecret : undefined,
        configuration: props.alpacaAccount.configuration !== undefined ? props.alpacaAccount.configuration : undefined,
        marketOpen: props.alpacaAccount.marketOpen !== undefined ? props.alpacaAccount.marketOpen : undefined,
        minOrderSize: props.alpacaAccount.minOrderSize !== undefined ? props.alpacaAccount.minOrderSize : undefined,
        maxOrderSize: props.alpacaAccount.maxOrderSize !== undefined ? props.alpacaAccount.maxOrderSize : undefined,
        minPercentageChange: props.alpacaAccount.minPercentageChange !== undefined ? props.alpacaAccount.minPercentageChange : undefined,
        volumeThreshold: props.alpacaAccount.volumeThreshold !== undefined ? props.alpacaAccount.volumeThreshold : undefined,
    user: props.alpacaAccount.user ? 
      typeof props.alpacaAccount.user === 'object' && Object.keys(props.alpacaAccount.user).length === 1 && Object.keys(props.alpacaAccount.user)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.user.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.alpacaAccount.user.id !== undefined ? props.alpacaAccount.user.id : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          name: props.alpacaAccount.user.name !== undefined ? {
              equals: props.alpacaAccount.user.name 
             } : undefined,
        },
        create: {
          name: props.alpacaAccount.user.name !== undefined ? props.alpacaAccount.user.name : undefined,
          email: props.alpacaAccount.user.email !== undefined ? props.alpacaAccount.user.email : undefined,
          emailVerified: props.alpacaAccount.user.emailVerified !== undefined ? props.alpacaAccount.user.emailVerified : undefined,
          image: props.alpacaAccount.user.image !== undefined ? props.alpacaAccount.user.image : undefined,
          role: props.alpacaAccount.user.role !== undefined ? props.alpacaAccount.user.role : undefined,
          bio: props.alpacaAccount.user.bio !== undefined ? props.alpacaAccount.user.bio : undefined,
          jobTitle: props.alpacaAccount.user.jobTitle !== undefined ? props.alpacaAccount.user.jobTitle : undefined,
          currentAccount: props.alpacaAccount.user.currentAccount !== undefined ? props.alpacaAccount.user.currentAccount : undefined,
          plan: props.alpacaAccount.user.plan !== undefined ? props.alpacaAccount.user.plan : undefined,
          openaiAPIKey: props.alpacaAccount.user.openaiAPIKey !== undefined ? props.alpacaAccount.user.openaiAPIKey : undefined,
          openaiModel: props.alpacaAccount.user.openaiModel !== undefined ? props.alpacaAccount.user.openaiModel : undefined,
      customer: props.alpacaAccount.user.customer ? 
        typeof props.alpacaAccount.user.customer === 'object' && Object.keys(props.alpacaAccount.user.customer).length === 1 && Object.keys(props.alpacaAccount.user.customer)[0] === 'id'
    ? { connect: {
            id: props.alpacaAccount.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.alpacaAccount.user.customer.id !== undefined ? props.alpacaAccount.user.customer.id : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: props.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? {
                equals: props.alpacaAccount.user.customer.name 
               } : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: props.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: props.alpacaAccount.user.customer.authUserId !== undefined ? props.alpacaAccount.user.customer.authUserId : undefined,
            name: props.alpacaAccount.user.customer.name !== undefined ? props.alpacaAccount.user.customer.name : undefined,
            plan: props.alpacaAccount.user.customer.plan !== undefined ? props.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: props.alpacaAccount.user.customer.stripeCustomerId !== undefined ? props.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: props.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? props.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: props.alpacaAccount.user.customer.stripePriceId !== undefined ? props.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: props.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? props.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: props.alpacaAccount.user.accounts ? 
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 &&  props.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: props.alpacaAccount.user.sessions ? 
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 &&  props.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: props.alpacaAccount.user.authenticators ? 
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 &&  props.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.alpacaAccount.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item: any) => ({
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
        },
      }
    } : undefined,
    orders: props.alpacaAccount.orders ? 
      Array.isArray(props.alpacaAccount.orders) && props.alpacaAccount.orders.length > 0 &&  props.alpacaAccount.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.orders.map((item: any) => ({
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
    positions: props.alpacaAccount.positions ? 
      Array.isArray(props.alpacaAccount.positions) && props.alpacaAccount.positions.length > 0 &&  props.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.positions.map((item: any) => ({
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
    alerts: props.alpacaAccount.alerts ? 
      Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 &&  props.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.alerts.map((item: any) => ({
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
    }
  } : undefined,
  asset: props.asset ? {
    upsert: {
      where: {
        id: props.asset.id !== undefined ? {
            equals: props.asset.id 
           } : undefined,
        symbol: props.asset.symbol !== undefined ? {
            equals: props.asset.symbol 
           } : undefined,
        name: props.asset.name !== undefined ? {
            equals: props.asset.name 
           } : undefined,
      },
      update: {
        id: props.asset.id !== undefined ? {
            set: props.asset.id  
           } : undefined,
        symbol: props.asset.symbol !== undefined ? {
            set: props.asset.symbol  
           } : undefined,
        name: props.asset.name !== undefined ? {
            set: props.asset.name  
           } : undefined,
        type: props.asset.type !== undefined ? {
            set: props.asset.type  
           } : undefined,
        logoUrl: props.asset.logoUrl !== undefined ? {
            set: props.asset.logoUrl  
           } : undefined,
        description: props.asset.description !== undefined ? {
            set: props.asset.description  
           } : undefined,
        cik: props.asset.cik !== undefined ? {
            set: props.asset.cik  
           } : undefined,
        exchange: props.asset.exchange !== undefined ? {
            set: props.asset.exchange  
           } : undefined,
        currency: props.asset.currency !== undefined ? {
            set: props.asset.currency  
           } : undefined,
        country: props.asset.country !== undefined ? {
            set: props.asset.country  
           } : undefined,
        sector: props.asset.sector !== undefined ? {
            set: props.asset.sector  
           } : undefined,
        industry: props.asset.industry !== undefined ? {
            set: props.asset.industry  
           } : undefined,
        address: props.asset.address !== undefined ? {
            set: props.asset.address  
           } : undefined,
        officialSite: props.asset.officialSite !== undefined ? {
            set: props.asset.officialSite  
           } : undefined,
        fiscalYearEnd: props.asset.fiscalYearEnd !== undefined ? {
            set: props.asset.fiscalYearEnd  
           } : undefined,
        latestQuarter: props.asset.latestQuarter !== undefined ? {
            set: props.asset.latestQuarter  
           } : undefined,
        marketCapitalization: props.asset.marketCapitalization !== undefined ? {
            set: props.asset.marketCapitalization  
           } : undefined,
        ebitda: props.asset.ebitda !== undefined ? {
            set: props.asset.ebitda  
           } : undefined,
        peRatio: props.asset.peRatio !== undefined ? {
            set: props.asset.peRatio  
           } : undefined,
        pegRatio: props.asset.pegRatio !== undefined ? {
            set: props.asset.pegRatio  
           } : undefined,
        bookValue: props.asset.bookValue !== undefined ? {
            set: props.asset.bookValue  
           } : undefined,
        dividendPerShare: props.asset.dividendPerShare !== undefined ? {
            set: props.asset.dividendPerShare  
           } : undefined,
        dividendYield: props.asset.dividendYield !== undefined ? {
            set: props.asset.dividendYield  
           } : undefined,
        eps: props.asset.eps !== undefined ? {
            set: props.asset.eps  
           } : undefined,
        revenuePerShareTTM: props.asset.revenuePerShareTTM !== undefined ? {
            set: props.asset.revenuePerShareTTM  
           } : undefined,
        profitMargin: props.asset.profitMargin !== undefined ? {
            set: props.asset.profitMargin  
           } : undefined,
        operatingMarginTTM: props.asset.operatingMarginTTM !== undefined ? {
            set: props.asset.operatingMarginTTM  
           } : undefined,
        returnOnAssetsTTM: props.asset.returnOnAssetsTTM !== undefined ? {
            set: props.asset.returnOnAssetsTTM  
           } : undefined,
        returnOnEquityTTM: props.asset.returnOnEquityTTM !== undefined ? {
            set: props.asset.returnOnEquityTTM  
           } : undefined,
        revenueTTM: props.asset.revenueTTM !== undefined ? {
            set: props.asset.revenueTTM  
           } : undefined,
        grossProfitTTM: props.asset.grossProfitTTM !== undefined ? {
            set: props.asset.grossProfitTTM  
           } : undefined,
        dilutedEPSTTM: props.asset.dilutedEPSTTM !== undefined ? {
            set: props.asset.dilutedEPSTTM  
           } : undefined,
        quarterlyEarningsGrowthYOY: props.asset.quarterlyEarningsGrowthYOY !== undefined ? {
            set: props.asset.quarterlyEarningsGrowthYOY  
           } : undefined,
        quarterlyRevenueGrowthYOY: props.asset.quarterlyRevenueGrowthYOY !== undefined ? {
            set: props.asset.quarterlyRevenueGrowthYOY  
           } : undefined,
        analystTargetPrice: props.asset.analystTargetPrice !== undefined ? {
            set: props.asset.analystTargetPrice  
           } : undefined,
        analystRatingStrongBuy: props.asset.analystRatingStrongBuy !== undefined ? {
            set: props.asset.analystRatingStrongBuy  
           } : undefined,
        analystRatingBuy: props.asset.analystRatingBuy !== undefined ? {
            set: props.asset.analystRatingBuy  
           } : undefined,
        analystRatingHold: props.asset.analystRatingHold !== undefined ? {
            set: props.asset.analystRatingHold  
           } : undefined,
        analystRatingSell: props.asset.analystRatingSell !== undefined ? {
            set: props.asset.analystRatingSell  
           } : undefined,
        analystRatingStrongSell: props.asset.analystRatingStrongSell !== undefined ? {
            set: props.asset.analystRatingStrongSell  
           } : undefined,
        trailingPE: props.asset.trailingPE !== undefined ? {
            set: props.asset.trailingPE  
           } : undefined,
        forwardPE: props.asset.forwardPE !== undefined ? {
            set: props.asset.forwardPE  
           } : undefined,
        priceToSalesRatioTTM: props.asset.priceToSalesRatioTTM !== undefined ? {
            set: props.asset.priceToSalesRatioTTM  
           } : undefined,
        priceToBookRatio: props.asset.priceToBookRatio !== undefined ? {
            set: props.asset.priceToBookRatio  
           } : undefined,
        evToRevenue: props.asset.evToRevenue !== undefined ? {
            set: props.asset.evToRevenue  
           } : undefined,
        evToEbitda: props.asset.evToEbitda !== undefined ? {
            set: props.asset.evToEbitda  
           } : undefined,
        beta: props.asset.beta !== undefined ? {
            set: props.asset.beta  
           } : undefined,
        week52High: props.asset.week52High !== undefined ? {
            set: props.asset.week52High  
           } : undefined,
        week52Low: props.asset.week52Low !== undefined ? {
            set: props.asset.week52Low  
           } : undefined,
        day50MovingAverage: props.asset.day50MovingAverage !== undefined ? {
            set: props.asset.day50MovingAverage  
           } : undefined,
        day200MovingAverage: props.asset.day200MovingAverage !== undefined ? {
            set: props.asset.day200MovingAverage  
           } : undefined,
        sharesOutstanding: props.asset.sharesOutstanding !== undefined ? {
            set: props.asset.sharesOutstanding  
           } : undefined,
        dividendDate: props.asset.dividendDate !== undefined ? {
            set: props.asset.dividendDate  
           } : undefined,
        exDividendDate: props.asset.exDividendDate !== undefined ? {
            set: props.asset.exDividendDate  
           } : undefined,
        askPrice: props.asset.askPrice !== undefined ? {
            set: props.asset.askPrice  
           } : undefined,
        bidPrice: props.asset.bidPrice !== undefined ? {
            set: props.asset.bidPrice  
           } : undefined,
    orders: props.asset.orders ? {
      upsert: props.asset.orders.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? {
        upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id 
               } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          update: {
            id: item.alpacaAccount.id !== undefined ? {
                set: item.alpacaAccount.id  
               } : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                set: item.alpacaAccount.type  
               } : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? {
                set: item.alpacaAccount.APIKey  
               } : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? {
                set: item.alpacaAccount.APISecret  
               } : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? {
                set: item.alpacaAccount.configuration  
               } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? {
                set: item.alpacaAccount.marketOpen  
               } : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
                set: item.alpacaAccount.minOrderSize  
               } : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
                set: item.alpacaAccount.maxOrderSize  
               } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange  
               } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold  
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
        },
      }))
    } : undefined,
    positions: props.asset.positions ? {
      upsert: props.asset.positions.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? {
        upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id 
               } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          update: {
            id: item.alpacaAccount.id !== undefined ? {
                set: item.alpacaAccount.id  
               } : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                set: item.alpacaAccount.type  
               } : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? {
                set: item.alpacaAccount.APIKey  
               } : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? {
                set: item.alpacaAccount.APISecret  
               } : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? {
                set: item.alpacaAccount.configuration  
               } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? {
                set: item.alpacaAccount.marketOpen  
               } : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
                set: item.alpacaAccount.minOrderSize  
               } : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
                set: item.alpacaAccount.maxOrderSize  
               } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange  
               } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold  
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    newsMentions: props.asset.newsMentions ? {
      upsert: props.asset.newsMentions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          url: item.url !== undefined ? item.url : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
          newsArticleId: item.newsArticleId !== undefined ? {
              equals: item.newsArticleId 
             } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          url: item.url !== undefined ? {
              set: item.url  
             } : undefined,
          relevancyScore: item.relevancyScore !== undefined ? {
              set: item.relevancyScore  
             } : undefined,
          sentimentScore: item.sentimentScore !== undefined ? {
              set: item.sentimentScore  
             } : undefined,
          sentimentLabel: item.sentimentLabel !== undefined ? {
              set: item.sentimentLabel  
             } : undefined,
      news: item.news ? {
        upsert: {
          where: {
            id: item.news.id !== undefined ? {
                equals: item.news.id 
               } : undefined,
            title: item.news.title !== undefined ? {
                equals: item.news.title 
               } : undefined,
            url: item.news.url !== undefined ? {
                equals: item.news.url 
               } : undefined,
          },
          update: {
            id: item.news.id !== undefined ? {
                set: item.news.id  
               } : undefined,
            title: item.news.title !== undefined ? {
                set: item.news.title  
               } : undefined,
            content: item.news.content !== undefined ? {
                set: item.news.content  
               } : undefined,
            source: item.news.source !== undefined ? {
                set: item.news.source  
               } : undefined,
            sourceDomain: item.news.sourceDomain !== undefined ? {
                set: item.news.sourceDomain  
               } : undefined,
            url: item.news.url !== undefined ? {
                set: item.news.url  
               } : undefined,
            sentiment: item.news.sentiment !== undefined ? {
                set: item.news.sentiment  
               } : undefined,
            authors: item.news.authors !== undefined ? {
                set: item.news.authors  
               } : undefined,
            summary: item.news.summary !== undefined ? {
                set: item.news.summary  
               } : undefined,
            bannerImage: item.news.bannerImage !== undefined ? {
                set: item.news.bannerImage  
               } : undefined,
            timePublished: item.news.timePublished !== undefined ? {
                set: item.news.timePublished  
               } : undefined,
            category: item.news.category !== undefined ? {
                set: item.news.category  
               } : undefined,
            topics: item.news.topics !== undefined ? {
                set: item.news.topics  
               } : undefined,
            logo: item.news.logo !== undefined ? {
                set: item.news.logo  
               } : undefined,
          },
          create: {
            title: item.news.title !== undefined ? item.news.title : undefined,
            content: item.news.content !== undefined ? item.news.content : undefined,
            source: item.news.source !== undefined ? item.news.source : undefined,
            sourceDomain: item.news.sourceDomain !== undefined ? item.news.sourceDomain : undefined,
            url: item.news.url !== undefined ? item.news.url : undefined,
            sentiment: item.news.sentiment !== undefined ? item.news.sentiment : undefined,
            authors: item.news.authors !== undefined ? item.news.authors : undefined,
            summary: item.news.summary !== undefined ? item.news.summary : undefined,
            bannerImage: item.news.bannerImage !== undefined ? item.news.bannerImage : undefined,
            timePublished: item.news.timePublished !== undefined ? item.news.timePublished : undefined,
            category: item.news.category !== undefined ? item.news.category : undefined,
            topics: item.news.topics !== undefined ? item.news.topics : undefined,
            logo: item.news.logo !== undefined ? item.news.logo : undefined,
          },
        }
      } : undefined,
        },
        create: {
          url: item.url !== undefined ? item.url : undefined,
          relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
          sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
          sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
      news: item.news ? 
        typeof item.news === 'object' && Object.keys(item.news).length === 1 && Object.keys(item.news)[0] === 'id'
    ? { connect: {
            id: item.news.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.news.id !== undefined ? item.news.id : undefined,
            url: item.news.url !== undefined ? item.news.url : undefined,
            title: item.news.title !== undefined ? {
                equals: item.news.title 
               } : undefined,
          },
          create: {
            title: item.news.title !== undefined ? item.news.title : undefined,
            content: item.news.content !== undefined ? item.news.content : undefined,
            source: item.news.source !== undefined ? item.news.source : undefined,
            sourceDomain: item.news.sourceDomain !== undefined ? item.news.sourceDomain : undefined,
            url: item.news.url !== undefined ? item.news.url : undefined,
            sentiment: item.news.sentiment !== undefined ? item.news.sentiment : undefined,
            authors: item.news.authors !== undefined ? item.news.authors : undefined,
            summary: item.news.summary !== undefined ? item.news.summary : undefined,
            bannerImage: item.news.bannerImage !== undefined ? item.news.bannerImage : undefined,
            timePublished: item.news.timePublished !== undefined ? item.news.timePublished : undefined,
            category: item.news.category !== undefined ? item.news.category : undefined,
            topics: item.news.topics !== undefined ? item.news.topics : undefined,
            logo: item.news.logo !== undefined ? item.news.logo : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        symbol: props.asset.symbol !== undefined ? props.asset.symbol : undefined,
        name: props.asset.name !== undefined ? props.asset.name : undefined,
        type: props.asset.type !== undefined ? props.asset.type : undefined,
        logoUrl: props.asset.logoUrl !== undefined ? props.asset.logoUrl : undefined,
        description: props.asset.description !== undefined ? props.asset.description : undefined,
        cik: props.asset.cik !== undefined ? props.asset.cik : undefined,
        exchange: props.asset.exchange !== undefined ? props.asset.exchange : undefined,
        currency: props.asset.currency !== undefined ? props.asset.currency : undefined,
        country: props.asset.country !== undefined ? props.asset.country : undefined,
        sector: props.asset.sector !== undefined ? props.asset.sector : undefined,
        industry: props.asset.industry !== undefined ? props.asset.industry : undefined,
        address: props.asset.address !== undefined ? props.asset.address : undefined,
        officialSite: props.asset.officialSite !== undefined ? props.asset.officialSite : undefined,
        fiscalYearEnd: props.asset.fiscalYearEnd !== undefined ? props.asset.fiscalYearEnd : undefined,
        latestQuarter: props.asset.latestQuarter !== undefined ? props.asset.latestQuarter : undefined,
        marketCapitalization: props.asset.marketCapitalization !== undefined ? props.asset.marketCapitalization : undefined,
        ebitda: props.asset.ebitda !== undefined ? props.asset.ebitda : undefined,
        peRatio: props.asset.peRatio !== undefined ? props.asset.peRatio : undefined,
        pegRatio: props.asset.pegRatio !== undefined ? props.asset.pegRatio : undefined,
        bookValue: props.asset.bookValue !== undefined ? props.asset.bookValue : undefined,
        dividendPerShare: props.asset.dividendPerShare !== undefined ? props.asset.dividendPerShare : undefined,
        dividendYield: props.asset.dividendYield !== undefined ? props.asset.dividendYield : undefined,
        eps: props.asset.eps !== undefined ? props.asset.eps : undefined,
        revenuePerShareTTM: props.asset.revenuePerShareTTM !== undefined ? props.asset.revenuePerShareTTM : undefined,
        profitMargin: props.asset.profitMargin !== undefined ? props.asset.profitMargin : undefined,
        operatingMarginTTM: props.asset.operatingMarginTTM !== undefined ? props.asset.operatingMarginTTM : undefined,
        returnOnAssetsTTM: props.asset.returnOnAssetsTTM !== undefined ? props.asset.returnOnAssetsTTM : undefined,
        returnOnEquityTTM: props.asset.returnOnEquityTTM !== undefined ? props.asset.returnOnEquityTTM : undefined,
        revenueTTM: props.asset.revenueTTM !== undefined ? props.asset.revenueTTM : undefined,
        grossProfitTTM: props.asset.grossProfitTTM !== undefined ? props.asset.grossProfitTTM : undefined,
        dilutedEPSTTM: props.asset.dilutedEPSTTM !== undefined ? props.asset.dilutedEPSTTM : undefined,
        quarterlyEarningsGrowthYOY: props.asset.quarterlyEarningsGrowthYOY !== undefined ? props.asset.quarterlyEarningsGrowthYOY : undefined,
        quarterlyRevenueGrowthYOY: props.asset.quarterlyRevenueGrowthYOY !== undefined ? props.asset.quarterlyRevenueGrowthYOY : undefined,
        analystTargetPrice: props.asset.analystTargetPrice !== undefined ? props.asset.analystTargetPrice : undefined,
        analystRatingStrongBuy: props.asset.analystRatingStrongBuy !== undefined ? props.asset.analystRatingStrongBuy : undefined,
        analystRatingBuy: props.asset.analystRatingBuy !== undefined ? props.asset.analystRatingBuy : undefined,
        analystRatingHold: props.asset.analystRatingHold !== undefined ? props.asset.analystRatingHold : undefined,
        analystRatingSell: props.asset.analystRatingSell !== undefined ? props.asset.analystRatingSell : undefined,
        analystRatingStrongSell: props.asset.analystRatingStrongSell !== undefined ? props.asset.analystRatingStrongSell : undefined,
        trailingPE: props.asset.trailingPE !== undefined ? props.asset.trailingPE : undefined,
        forwardPE: props.asset.forwardPE !== undefined ? props.asset.forwardPE : undefined,
        priceToSalesRatioTTM: props.asset.priceToSalesRatioTTM !== undefined ? props.asset.priceToSalesRatioTTM : undefined,
        priceToBookRatio: props.asset.priceToBookRatio !== undefined ? props.asset.priceToBookRatio : undefined,
        evToRevenue: props.asset.evToRevenue !== undefined ? props.asset.evToRevenue : undefined,
        evToEbitda: props.asset.evToEbitda !== undefined ? props.asset.evToEbitda : undefined,
        beta: props.asset.beta !== undefined ? props.asset.beta : undefined,
        week52High: props.asset.week52High !== undefined ? props.asset.week52High : undefined,
        week52Low: props.asset.week52Low !== undefined ? props.asset.week52Low : undefined,
        day50MovingAverage: props.asset.day50MovingAverage !== undefined ? props.asset.day50MovingAverage : undefined,
        day200MovingAverage: props.asset.day200MovingAverage !== undefined ? props.asset.day200MovingAverage : undefined,
        sharesOutstanding: props.asset.sharesOutstanding !== undefined ? props.asset.sharesOutstanding : undefined,
        dividendDate: props.asset.dividendDate !== undefined ? props.asset.dividendDate : undefined,
        exDividendDate: props.asset.exDividendDate !== undefined ? props.asset.exDividendDate : undefined,
        askPrice: props.asset.askPrice !== undefined ? props.asset.askPrice : undefined,
        bidPrice: props.asset.bidPrice !== undefined ? props.asset.bidPrice : undefined,
    orders: props.asset.orders ? 
      Array.isArray(props.asset.orders) && props.asset.orders.length > 0 &&  props.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.orders.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
        },
      }))
    } : undefined,
    positions: props.asset.positions ? 
      Array.isArray(props.asset.positions) && props.asset.positions.length > 0 &&  props.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.positions.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    newsMentions: props.asset.newsMentions ? 
      Array.isArray(props.asset.newsMentions) && props.asset.newsMentions.length > 0 &&  props.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.newsMentions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.newsMentions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          url: item.url !== undefined ? item.url : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
          newsArticleId: item.newsArticleId !== undefined ? {
              equals: item.newsArticleId 
             } : undefined,
        },
        create: {
          url: item.url !== undefined ? item.url : undefined,
          relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
          sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
          sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
      news: item.news ? 
        typeof item.news === 'object' && Object.keys(item.news).length === 1 && Object.keys(item.news)[0] === 'id'
    ? { connect: {
            id: item.news.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.news.id !== undefined ? item.news.id : undefined,
            url: item.news.url !== undefined ? item.news.url : undefined,
            title: item.news.title !== undefined ? {
                equals: item.news.title 
               } : undefined,
          },
          create: {
            title: item.news.title !== undefined ? item.news.title : undefined,
            content: item.news.content !== undefined ? item.news.content : undefined,
            source: item.news.source !== undefined ? item.news.source : undefined,
            sourceDomain: item.news.sourceDomain !== undefined ? item.news.sourceDomain : undefined,
            url: item.news.url !== undefined ? item.news.url : undefined,
            sentiment: item.news.sentiment !== undefined ? item.news.sentiment : undefined,
            authors: item.news.authors !== undefined ? item.news.authors : undefined,
            summary: item.news.summary !== undefined ? item.news.summary : undefined,
            bannerImage: item.news.bannerImage !== undefined ? item.news.bannerImage : undefined,
            timePublished: item.news.timePublished !== undefined ? item.news.timePublished : undefined,
            category: item.news.category !== undefined ? item.news.category : undefined,
            topics: item.news.topics !== undefined ? item.news.topics : undefined,
            logo: item.news.logo !== undefined ? item.news.logo : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  actions: props.actions ? {
    upsert: props.actions.map((item: any) => ({
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
    order: item.order ? {
      upsert: {
        where: {
          id: item.order.id !== undefined ? {
              equals: item.order.id 
             } : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? {
              equals: item.order.clientOrderId 
             } : undefined,
          alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
              equals: item.order.alpacaAccountId 
             } : undefined,
          assetId: item.order.assetId !== undefined ? {
              equals: item.order.assetId 
             } : undefined,
        },
        update: {
          id: item.order.id !== undefined ? {
              set: item.order.id  
             } : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? {
              set: item.order.clientOrderId  
             } : undefined,
          qty: item.order.qty !== undefined ? {
              set: item.order.qty  
             } : undefined,
          notional: item.order.notional !== undefined ? {
              set: item.order.notional  
             } : undefined,
          side: item.order.side !== undefined ? {
              set: item.order.side  
             } : undefined,
          type: item.order.type !== undefined ? {
              set: item.order.type  
             } : undefined,
          orderClass: item.order.orderClass !== undefined ? {
              set: item.order.orderClass  
             } : undefined,
          timeInForce: item.order.timeInForce !== undefined ? {
              set: item.order.timeInForce  
             } : undefined,
          limitPrice: item.order.limitPrice !== undefined ? {
              set: item.order.limitPrice  
             } : undefined,
          stopPrice: item.order.stopPrice !== undefined ? {
              set: item.order.stopPrice  
             } : undefined,
          trailPrice: item.order.trailPrice !== undefined ? {
              set: item.order.trailPrice  
             } : undefined,
          trailPercent: item.order.trailPercent !== undefined ? {
              set: item.order.trailPercent  
             } : undefined,
          extendedHours: item.order.extendedHours !== undefined ? {
              set: item.order.extendedHours  
             } : undefined,
          status: item.order.status !== undefined ? {
              set: item.order.status  
             } : undefined,
          submittedAt: item.order.submittedAt !== undefined ? {
              set: item.order.submittedAt  
             } : undefined,
          filledAt: item.order.filledAt !== undefined ? {
              set: item.order.filledAt  
             } : undefined,
          filledQty: item.order.filledQty !== undefined ? {
              set: item.order.filledQty  
             } : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? {
              set: item.order.filledAvgPrice  
             } : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? {
              set: item.order.cancelRequestedAt  
             } : undefined,
          canceledAt: item.order.canceledAt !== undefined ? {
              set: item.order.canceledAt  
             } : undefined,
          fee: item.order.fee !== undefined ? {
              set: item.order.fee  
             } : undefined,
          strikePrice: item.order.strikePrice !== undefined ? {
              set: item.order.strikePrice  
             } : undefined,
          expirationDate: item.order.expirationDate !== undefined ? {
              set: item.order.expirationDate  
             } : undefined,
          optionType: item.order.optionType !== undefined ? {
              set: item.order.optionType  
             } : undefined,
          stopLossId: item.order.stopLossId !== undefined ? {
              set: item.order.stopLossId  
             } : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? {
              set: item.order.takeProfitId  
             } : undefined,
      stopLoss: item.order.stopLoss ? {
        upsert: {
          where: {
            id: item.order.stopLoss.id !== undefined ? {
                equals: item.order.stopLoss.id 
               } : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? {
                equals: item.order.stopLoss.orderId 
               } : undefined,
          },
          update: {
            id: item.order.stopLoss.id !== undefined ? {
                set: item.order.stopLoss.id  
               } : undefined,
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? {
                set: item.order.stopLoss.stopPrice  
               } : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? {
                set: item.order.stopLoss.limitPrice  
               } : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? {
        upsert: {
          where: {
            id: item.order.takeProfit.id !== undefined ? {
                equals: item.order.takeProfit.id 
               } : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? {
                equals: item.order.takeProfit.orderId 
               } : undefined,
          },
          update: {
            id: item.order.takeProfit.id !== undefined ? {
                set: item.order.takeProfit.id  
               } : undefined,
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? {
                set: item.order.takeProfit.limitPrice  
               } : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? {
                set: item.order.takeProfit.stopPrice  
               } : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? {
        upsert: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? {
                equals: item.order.alpacaAccount.id 
               } : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          update: {
            id: item.order.alpacaAccount.id !== undefined ? {
                set: item.order.alpacaAccount.id  
               } : undefined,
            type: item.order.alpacaAccount.type !== undefined ? {
                set: item.order.alpacaAccount.type  
               } : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? {
                set: item.order.alpacaAccount.APIKey  
               } : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? {
                set: item.order.alpacaAccount.APISecret  
               } : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? {
                set: item.order.alpacaAccount.configuration  
               } : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? {
                set: item.order.alpacaAccount.marketOpen  
               } : undefined,
            minOrderSize: item.order.alpacaAccount.minOrderSize !== undefined ? {
                set: item.order.alpacaAccount.minOrderSize  
               } : undefined,
            maxOrderSize: item.order.alpacaAccount.maxOrderSize !== undefined ? {
                set: item.order.alpacaAccount.maxOrderSize  
               } : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.order.alpacaAccount.minPercentageChange  
               } : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.order.alpacaAccount.volumeThreshold  
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.order.alpacaAccount.minOrderSize !== undefined ? item.order.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.order.alpacaAccount.maxOrderSize !== undefined ? item.order.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? {
        upsert: {
          where: {
            id: item.order.asset.id !== undefined ? {
                equals: item.order.asset.id 
               } : undefined,
            symbol: item.order.asset.symbol !== undefined ? {
                equals: item.order.asset.symbol 
               } : undefined,
            name: item.order.asset.name !== undefined ? {
                equals: item.order.asset.name 
               } : undefined,
          },
          update: {
            id: item.order.asset.id !== undefined ? {
                set: item.order.asset.id  
               } : undefined,
            symbol: item.order.asset.symbol !== undefined ? {
                set: item.order.asset.symbol  
               } : undefined,
            name: item.order.asset.name !== undefined ? {
                set: item.order.asset.name  
               } : undefined,
            type: item.order.asset.type !== undefined ? {
                set: item.order.asset.type  
               } : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? {
                set: item.order.asset.logoUrl  
               } : undefined,
            description: item.order.asset.description !== undefined ? {
                set: item.order.asset.description  
               } : undefined,
            cik: item.order.asset.cik !== undefined ? {
                set: item.order.asset.cik  
               } : undefined,
            exchange: item.order.asset.exchange !== undefined ? {
                set: item.order.asset.exchange  
               } : undefined,
            currency: item.order.asset.currency !== undefined ? {
                set: item.order.asset.currency  
               } : undefined,
            country: item.order.asset.country !== undefined ? {
                set: item.order.asset.country  
               } : undefined,
            sector: item.order.asset.sector !== undefined ? {
                set: item.order.asset.sector  
               } : undefined,
            industry: item.order.asset.industry !== undefined ? {
                set: item.order.asset.industry  
               } : undefined,
            address: item.order.asset.address !== undefined ? {
                set: item.order.asset.address  
               } : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? {
                set: item.order.asset.officialSite  
               } : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? {
                set: item.order.asset.fiscalYearEnd  
               } : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? {
                set: item.order.asset.latestQuarter  
               } : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? {
                set: item.order.asset.marketCapitalization  
               } : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? {
                set: item.order.asset.ebitda  
               } : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? {
                set: item.order.asset.peRatio  
               } : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? {
                set: item.order.asset.pegRatio  
               } : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? {
                set: item.order.asset.bookValue  
               } : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? {
                set: item.order.asset.dividendPerShare  
               } : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? {
                set: item.order.asset.dividendYield  
               } : undefined,
            eps: item.order.asset.eps !== undefined ? {
                set: item.order.asset.eps  
               } : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? {
                set: item.order.asset.revenuePerShareTTM  
               } : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? {
                set: item.order.asset.profitMargin  
               } : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? {
                set: item.order.asset.operatingMarginTTM  
               } : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? {
                set: item.order.asset.returnOnAssetsTTM  
               } : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? {
                set: item.order.asset.returnOnEquityTTM  
               } : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? {
                set: item.order.asset.revenueTTM  
               } : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? {
                set: item.order.asset.grossProfitTTM  
               } : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? {
                set: item.order.asset.dilutedEPSTTM  
               } : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: item.order.asset.quarterlyEarningsGrowthYOY  
               } : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: item.order.asset.quarterlyRevenueGrowthYOY  
               } : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? {
                set: item.order.asset.analystTargetPrice  
               } : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? {
                set: item.order.asset.analystRatingStrongBuy  
               } : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? {
                set: item.order.asset.analystRatingBuy  
               } : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? {
                set: item.order.asset.analystRatingHold  
               } : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? {
                set: item.order.asset.analystRatingSell  
               } : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? {
                set: item.order.asset.analystRatingStrongSell  
               } : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? {
                set: item.order.asset.trailingPE  
               } : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? {
                set: item.order.asset.forwardPE  
               } : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? {
                set: item.order.asset.priceToSalesRatioTTM  
               } : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? {
                set: item.order.asset.priceToBookRatio  
               } : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? {
                set: item.order.asset.evToRevenue  
               } : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? {
                set: item.order.asset.evToEbitda  
               } : undefined,
            beta: item.order.asset.beta !== undefined ? {
                set: item.order.asset.beta  
               } : undefined,
            week52High: item.order.asset.week52High !== undefined ? {
                set: item.order.asset.week52High  
               } : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? {
                set: item.order.asset.week52Low  
               } : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? {
                set: item.order.asset.day50MovingAverage  
               } : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? {
                set: item.order.asset.day200MovingAverage  
               } : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? {
                set: item.order.asset.sharesOutstanding  
               } : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? {
                set: item.order.asset.dividendDate  
               } : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? {
                set: item.order.asset.exDividendDate  
               } : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? {
                set: item.order.asset.askPrice  
               } : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? {
                set: item.order.asset.bidPrice  
               } : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
        create: {
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          qty: item.order.qty !== undefined ? item.order.qty : undefined,
          notional: item.order.notional !== undefined ? item.order.notional : undefined,
          side: item.order.side !== undefined ? item.order.side : undefined,
          type: item.order.type !== undefined ? item.order.type : undefined,
          orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
          timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
          limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
          stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
          trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
          trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
          extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
          status: item.order.status !== undefined ? item.order.status : undefined,
          submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
          filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
          filledQty: item.order.filledQty !== undefined ? item.order.filledQty : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? item.order.cancelRequestedAt : undefined,
          canceledAt: item.order.canceledAt !== undefined ? item.order.canceledAt : undefined,
          fee: item.order.fee !== undefined ? item.order.fee : undefined,
          strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
          expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
          optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
      stopLoss: item.order.stopLoss ? 
        typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && Object.keys(item.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.order.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.stopLoss.id !== undefined ? item.order.stopLoss.id : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? item.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
        typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && Object.keys(item.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.order.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.takeProfit.id !== undefined ? item.order.takeProfit.id : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? item.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
        typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && Object.keys(item.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.order.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? item.order.alpacaAccount.id : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.order.alpacaAccount.minOrderSize !== undefined ? item.order.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.order.alpacaAccount.maxOrderSize !== undefined ? item.order.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
        typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && Object.keys(item.order.asset)[0] === 'id'
    ? { connect: {
            id: item.order.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.asset.id !== undefined ? item.order.asset.id : undefined,
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        sequence: item.sequence !== undefined ? item.sequence : undefined,
        type: item.type !== undefined ? item.type : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        fee: item.fee !== undefined ? item.fee : undefined,
    order: item.order ? 
      typeof item.order === 'object' && Object.keys(item.order).length === 1 && Object.keys(item.order)[0] === 'id'
    ? { connect: {
          id: item.order.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.order.id !== undefined ? item.order.id : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          actionId: item.order.actionId !== undefined ? item.order.actionId : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
              equals: item.order.alpacaAccountId 
             } : undefined,
          assetId: item.order.assetId !== undefined ? {
              equals: item.order.assetId 
             } : undefined,
        },
        create: {
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          qty: item.order.qty !== undefined ? item.order.qty : undefined,
          notional: item.order.notional !== undefined ? item.order.notional : undefined,
          side: item.order.side !== undefined ? item.order.side : undefined,
          type: item.order.type !== undefined ? item.order.type : undefined,
          orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
          timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
          limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
          stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
          trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
          trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
          extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
          status: item.order.status !== undefined ? item.order.status : undefined,
          submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
          filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
          filledQty: item.order.filledQty !== undefined ? item.order.filledQty : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? item.order.cancelRequestedAt : undefined,
          canceledAt: item.order.canceledAt !== undefined ? item.order.canceledAt : undefined,
          fee: item.order.fee !== undefined ? item.order.fee : undefined,
          strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
          expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
          optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
      stopLoss: item.order.stopLoss ? 
        typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && Object.keys(item.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.order.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.stopLoss.id !== undefined ? item.order.stopLoss.id : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? item.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
        typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && Object.keys(item.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.order.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.takeProfit.id !== undefined ? item.order.takeProfit.id : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? item.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
        typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && Object.keys(item.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.order.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? item.order.alpacaAccount.id : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.order.alpacaAccount.minOrderSize !== undefined ? item.order.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.order.alpacaAccount.maxOrderSize !== undefined ? item.order.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
        typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && Object.keys(item.order.asset)[0] === 'id'
    ? { connect: {
            id: item.order.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.asset.id !== undefined ? item.order.asset.id : undefined,
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_TRADE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneTrade) {
        return response.data.updateOneTrade;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneTrade:', error);
      throw error;
    }
  },

  /**
   * Update multiple Trade records.
   * @param props - Array of Trade objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: TradeType[]): Promise<{ count: number } | null> {

      const UPDATE_MANY_TRADE = gql`
      mutation updateManyTrade($data: [TradeCreateManyInput!]!) {
        updateManyTrade(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? {
    equals: prop.alpacaAccountId 
  } : undefined,
  assetId: prop.assetId !== undefined ? {
    equals: prop.assetId 
  } : undefined,
  qty: prop.qty !== undefined ? prop.qty : undefined,
  price: prop.price !== undefined ? prop.price : undefined,
  total: prop.total !== undefined ? prop.total : undefined,
  optionType: prop.optionType !== undefined ? prop.optionType : undefined,
  signal: prop.signal !== undefined ? prop.signal : undefined,
  strategy: prop.strategy !== undefined ? prop.strategy : undefined,
  analysis: prop.analysis !== undefined ? prop.analysis : undefined,
  summary: prop.summary !== undefined ? prop.summary : undefined,
  confidence: prop.confidence !== undefined ? prop.confidence : undefined,
  timestamp: prop.timestamp !== undefined ? prop.timestamp : undefined,
  createdAt: prop.createdAt !== undefined ? prop.createdAt : undefined,
  updatedAt: prop.updatedAt !== undefined ? prop.updatedAt : undefined,
  status: prop.status !== undefined ? prop.status : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  qty: prop.qty !== undefined ? {
            set: prop.qty 
           } : undefined,
  price: prop.price !== undefined ? {
            set: prop.price 
           } : undefined,
  total: prop.total !== undefined ? {
            set: prop.total 
           } : undefined,
  optionType: prop.optionType !== undefined ? {
            set: prop.optionType 
           } : undefined,
  signal: prop.signal !== undefined ? {
            set: prop.signal 
           } : undefined,
  strategy: prop.strategy !== undefined ? {
            set: prop.strategy 
           } : undefined,
  analysis: prop.analysis !== undefined ? {
            set: prop.analysis 
           } : undefined,
  summary: prop.summary !== undefined ? {
            set: prop.summary 
           } : undefined,
  confidence: prop.confidence !== undefined ? {
            set: prop.confidence 
           } : undefined,
  timestamp: prop.timestamp !== undefined ? {
            set: prop.timestamp 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  status: prop.status !== undefined ? {
            set: prop.status 
           } : undefined,
  alpacaAccount: prop.alpacaAccount ? {
    upsert: {
      where: {
        id: prop.alpacaAccount.id !== undefined ? {
            equals: prop.alpacaAccount.id 
           } : undefined,
        userId: prop.alpacaAccount.userId !== undefined ? {
            equals: prop.alpacaAccount.userId 
           } : undefined,
      },
      update: {
        id: prop.alpacaAccount.id !== undefined ? {
            set: prop.alpacaAccount.id  
           } : undefined,
        type: prop.alpacaAccount.type !== undefined ? {
            set: prop.alpacaAccount.type  
           } : undefined,
        APIKey: prop.alpacaAccount.APIKey !== undefined ? {
            set: prop.alpacaAccount.APIKey  
           } : undefined,
        APISecret: prop.alpacaAccount.APISecret !== undefined ? {
            set: prop.alpacaAccount.APISecret  
           } : undefined,
        configuration: prop.alpacaAccount.configuration !== undefined ? {
            set: prop.alpacaAccount.configuration  
           } : undefined,
        marketOpen: prop.alpacaAccount.marketOpen !== undefined ? {
            set: prop.alpacaAccount.marketOpen  
           } : undefined,
        minOrderSize: prop.alpacaAccount.minOrderSize !== undefined ? {
            set: prop.alpacaAccount.minOrderSize  
           } : undefined,
        maxOrderSize: prop.alpacaAccount.maxOrderSize !== undefined ? {
            set: prop.alpacaAccount.maxOrderSize  
           } : undefined,
        minPercentageChange: prop.alpacaAccount.minPercentageChange !== undefined ? {
            set: prop.alpacaAccount.minPercentageChange  
           } : undefined,
        volumeThreshold: prop.alpacaAccount.volumeThreshold !== undefined ? {
            set: prop.alpacaAccount.volumeThreshold  
           } : undefined,
    user: prop.alpacaAccount.user ? {
      upsert: {
        where: {
          id: prop.alpacaAccount.user.id !== undefined ? {
              equals: prop.alpacaAccount.user.id 
             } : undefined,
          name: prop.alpacaAccount.user.name !== undefined ? {
              equals: prop.alpacaAccount.user.name 
             } : undefined,
          email: prop.alpacaAccount.user.email !== undefined ? {
              equals: prop.alpacaAccount.user.email 
             } : undefined,
        },
        update: {
          id: prop.alpacaAccount.user.id !== undefined ? {
              set: prop.alpacaAccount.user.id  
             } : undefined,
          name: prop.alpacaAccount.user.name !== undefined ? {
              set: prop.alpacaAccount.user.name  
             } : undefined,
          email: prop.alpacaAccount.user.email !== undefined ? {
              set: prop.alpacaAccount.user.email  
             } : undefined,
          emailVerified: prop.alpacaAccount.user.emailVerified !== undefined ? {
              set: prop.alpacaAccount.user.emailVerified  
             } : undefined,
          image: prop.alpacaAccount.user.image !== undefined ? {
              set: prop.alpacaAccount.user.image  
             } : undefined,
          role: prop.alpacaAccount.user.role !== undefined ? {
              set: prop.alpacaAccount.user.role  
             } : undefined,
          bio: prop.alpacaAccount.user.bio !== undefined ? {
              set: prop.alpacaAccount.user.bio  
             } : undefined,
          jobTitle: prop.alpacaAccount.user.jobTitle !== undefined ? {
              set: prop.alpacaAccount.user.jobTitle  
             } : undefined,
          currentAccount: prop.alpacaAccount.user.currentAccount !== undefined ? {
              set: prop.alpacaAccount.user.currentAccount  
             } : undefined,
          plan: prop.alpacaAccount.user.plan !== undefined ? {
              set: prop.alpacaAccount.user.plan  
             } : undefined,
          openaiAPIKey: prop.alpacaAccount.user.openaiAPIKey !== undefined ? {
              set: prop.alpacaAccount.user.openaiAPIKey  
             } : undefined,
          openaiModel: prop.alpacaAccount.user.openaiModel !== undefined ? {
              set: prop.alpacaAccount.user.openaiModel  
             } : undefined,
      customer: prop.alpacaAccount.user.customer ? {
        upsert: {
          where: {
            id: prop.alpacaAccount.user.customer.id !== undefined ? {
                equals: prop.alpacaAccount.user.customer.id 
               } : undefined,
            authUserId: prop.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: prop.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: prop.alpacaAccount.user.customer.name !== undefined ? {
                equals: prop.alpacaAccount.user.customer.name 
               } : undefined,
            stripeCustomerId: prop.alpacaAccount.user.customer.stripeCustomerId !== undefined ? {
                equals: prop.alpacaAccount.user.customer.stripeCustomerId 
               } : undefined,
            stripeSubscriptionId: prop.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? {
                equals: prop.alpacaAccount.user.customer.stripeSubscriptionId 
               } : undefined,
            stripePriceId: prop.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: prop.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          update: {
            authUserId: prop.alpacaAccount.user.customer.authUserId !== undefined ? {
                set: prop.alpacaAccount.user.customer.authUserId  
               } : undefined,
            name: prop.alpacaAccount.user.customer.name !== undefined ? {
                set: prop.alpacaAccount.user.customer.name  
               } : undefined,
            plan: prop.alpacaAccount.user.customer.plan !== undefined ? {
                set: prop.alpacaAccount.user.customer.plan  
               } : undefined,
            stripeCustomerId: prop.alpacaAccount.user.customer.stripeCustomerId !== undefined ? {
                set: prop.alpacaAccount.user.customer.stripeCustomerId  
               } : undefined,
            stripeSubscriptionId: prop.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? {
                set: prop.alpacaAccount.user.customer.stripeSubscriptionId  
               } : undefined,
            stripePriceId: prop.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                set: prop.alpacaAccount.user.customer.stripePriceId  
               } : undefined,
            stripeCurrentPeriodEnd: prop.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: prop.alpacaAccount.user.customer.stripeCurrentPeriodEnd  
               } : undefined,
          },
          create: {
            authUserId: prop.alpacaAccount.user.customer.authUserId !== undefined ? prop.alpacaAccount.user.customer.authUserId : undefined,
            name: prop.alpacaAccount.user.customer.name !== undefined ? prop.alpacaAccount.user.customer.name : undefined,
            plan: prop.alpacaAccount.user.customer.plan !== undefined ? prop.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: prop.alpacaAccount.user.customer.stripeCustomerId !== undefined ? prop.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? prop.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: prop.alpacaAccount.user.customer.stripePriceId !== undefined ? prop.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: prop.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: prop.alpacaAccount.user.accounts ? {
        upsert: prop.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: prop.alpacaAccount.user.sessions ? {
        upsert: prop.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: prop.alpacaAccount.user.authenticators ? {
        upsert: prop.alpacaAccount.user.authenticators.map((item: any) => ({
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
        },
        create: {
          name: prop.alpacaAccount.user.name !== undefined ? prop.alpacaAccount.user.name : undefined,
          email: prop.alpacaAccount.user.email !== undefined ? prop.alpacaAccount.user.email : undefined,
          emailVerified: prop.alpacaAccount.user.emailVerified !== undefined ? prop.alpacaAccount.user.emailVerified : undefined,
          image: prop.alpacaAccount.user.image !== undefined ? prop.alpacaAccount.user.image : undefined,
          role: prop.alpacaAccount.user.role !== undefined ? prop.alpacaAccount.user.role : undefined,
          bio: prop.alpacaAccount.user.bio !== undefined ? prop.alpacaAccount.user.bio : undefined,
          jobTitle: prop.alpacaAccount.user.jobTitle !== undefined ? prop.alpacaAccount.user.jobTitle : undefined,
          currentAccount: prop.alpacaAccount.user.currentAccount !== undefined ? prop.alpacaAccount.user.currentAccount : undefined,
          plan: prop.alpacaAccount.user.plan !== undefined ? prop.alpacaAccount.user.plan : undefined,
          openaiAPIKey: prop.alpacaAccount.user.openaiAPIKey !== undefined ? prop.alpacaAccount.user.openaiAPIKey : undefined,
          openaiModel: prop.alpacaAccount.user.openaiModel !== undefined ? prop.alpacaAccount.user.openaiModel : undefined,
      customer: prop.alpacaAccount.user.customer ? 
        typeof prop.alpacaAccount.user.customer === 'object' && Object.keys(prop.alpacaAccount.user.customer).length === 1 && Object.keys(prop.alpacaAccount.user.customer)[0] === 'id'
    ? { connect: {
            id: prop.alpacaAccount.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.alpacaAccount.user.customer.id !== undefined ? prop.alpacaAccount.user.customer.id : undefined,
            stripeCustomerId: prop.alpacaAccount.user.customer.stripeCustomerId !== undefined ? prop.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? prop.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            authUserId: prop.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: prop.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: prop.alpacaAccount.user.customer.name !== undefined ? {
                equals: prop.alpacaAccount.user.customer.name 
               } : undefined,
            stripePriceId: prop.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: prop.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: prop.alpacaAccount.user.customer.authUserId !== undefined ? prop.alpacaAccount.user.customer.authUserId : undefined,
            name: prop.alpacaAccount.user.customer.name !== undefined ? prop.alpacaAccount.user.customer.name : undefined,
            plan: prop.alpacaAccount.user.customer.plan !== undefined ? prop.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: prop.alpacaAccount.user.customer.stripeCustomerId !== undefined ? prop.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? prop.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: prop.alpacaAccount.user.customer.stripePriceId !== undefined ? prop.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: prop.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: prop.alpacaAccount.user.accounts ? 
        Array.isArray(prop.alpacaAccount.user.accounts) && prop.alpacaAccount.user.accounts.length > 0 &&  prop.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: prop.alpacaAccount.user.sessions ? 
        Array.isArray(prop.alpacaAccount.user.sessions) && prop.alpacaAccount.user.sessions.length > 0 &&  prop.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: prop.alpacaAccount.user.authenticators ? 
        Array.isArray(prop.alpacaAccount.user.authenticators) && prop.alpacaAccount.user.authenticators.length > 0 &&  prop.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.authenticators.map((item: any) => ({
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
        },
      }
    } : undefined,
    orders: prop.alpacaAccount.orders ? {
      upsert: prop.alpacaAccount.orders.map((item: any) => ({
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
    positions: prop.alpacaAccount.positions ? {
      upsert: prop.alpacaAccount.positions.map((item: any) => ({
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
    alerts: prop.alpacaAccount.alerts ? {
      upsert: prop.alpacaAccount.alerts.map((item: any) => ({
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
        type: prop.alpacaAccount.type !== undefined ? prop.alpacaAccount.type : undefined,
        APIKey: prop.alpacaAccount.APIKey !== undefined ? prop.alpacaAccount.APIKey : undefined,
        APISecret: prop.alpacaAccount.APISecret !== undefined ? prop.alpacaAccount.APISecret : undefined,
        configuration: prop.alpacaAccount.configuration !== undefined ? prop.alpacaAccount.configuration : undefined,
        marketOpen: prop.alpacaAccount.marketOpen !== undefined ? prop.alpacaAccount.marketOpen : undefined,
        minOrderSize: prop.alpacaAccount.minOrderSize !== undefined ? prop.alpacaAccount.minOrderSize : undefined,
        maxOrderSize: prop.alpacaAccount.maxOrderSize !== undefined ? prop.alpacaAccount.maxOrderSize : undefined,
        minPercentageChange: prop.alpacaAccount.minPercentageChange !== undefined ? prop.alpacaAccount.minPercentageChange : undefined,
        volumeThreshold: prop.alpacaAccount.volumeThreshold !== undefined ? prop.alpacaAccount.volumeThreshold : undefined,
    user: prop.alpacaAccount.user ? 
      typeof prop.alpacaAccount.user === 'object' && Object.keys(prop.alpacaAccount.user).length === 1 && Object.keys(prop.alpacaAccount.user)[0] === 'id'
    ? { connect: {
          id: prop.alpacaAccount.user.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.alpacaAccount.user.id !== undefined ? prop.alpacaAccount.user.id : undefined,
          email: prop.alpacaAccount.user.email !== undefined ? prop.alpacaAccount.user.email : undefined,
          name: prop.alpacaAccount.user.name !== undefined ? {
              equals: prop.alpacaAccount.user.name 
             } : undefined,
        },
        create: {
          name: prop.alpacaAccount.user.name !== undefined ? prop.alpacaAccount.user.name : undefined,
          email: prop.alpacaAccount.user.email !== undefined ? prop.alpacaAccount.user.email : undefined,
          emailVerified: prop.alpacaAccount.user.emailVerified !== undefined ? prop.alpacaAccount.user.emailVerified : undefined,
          image: prop.alpacaAccount.user.image !== undefined ? prop.alpacaAccount.user.image : undefined,
          role: prop.alpacaAccount.user.role !== undefined ? prop.alpacaAccount.user.role : undefined,
          bio: prop.alpacaAccount.user.bio !== undefined ? prop.alpacaAccount.user.bio : undefined,
          jobTitle: prop.alpacaAccount.user.jobTitle !== undefined ? prop.alpacaAccount.user.jobTitle : undefined,
          currentAccount: prop.alpacaAccount.user.currentAccount !== undefined ? prop.alpacaAccount.user.currentAccount : undefined,
          plan: prop.alpacaAccount.user.plan !== undefined ? prop.alpacaAccount.user.plan : undefined,
          openaiAPIKey: prop.alpacaAccount.user.openaiAPIKey !== undefined ? prop.alpacaAccount.user.openaiAPIKey : undefined,
          openaiModel: prop.alpacaAccount.user.openaiModel !== undefined ? prop.alpacaAccount.user.openaiModel : undefined,
      customer: prop.alpacaAccount.user.customer ? 
        typeof prop.alpacaAccount.user.customer === 'object' && Object.keys(prop.alpacaAccount.user.customer).length === 1 && Object.keys(prop.alpacaAccount.user.customer)[0] === 'id'
    ? { connect: {
            id: prop.alpacaAccount.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.alpacaAccount.user.customer.id !== undefined ? prop.alpacaAccount.user.customer.id : undefined,
            stripeCustomerId: prop.alpacaAccount.user.customer.stripeCustomerId !== undefined ? prop.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? prop.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            authUserId: prop.alpacaAccount.user.customer.authUserId !== undefined ? {
                equals: prop.alpacaAccount.user.customer.authUserId 
               } : undefined,
            name: prop.alpacaAccount.user.customer.name !== undefined ? {
                equals: prop.alpacaAccount.user.customer.name 
               } : undefined,
            stripePriceId: prop.alpacaAccount.user.customer.stripePriceId !== undefined ? {
                equals: prop.alpacaAccount.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: prop.alpacaAccount.user.customer.authUserId !== undefined ? prop.alpacaAccount.user.customer.authUserId : undefined,
            name: prop.alpacaAccount.user.customer.name !== undefined ? prop.alpacaAccount.user.customer.name : undefined,
            plan: prop.alpacaAccount.user.customer.plan !== undefined ? prop.alpacaAccount.user.customer.plan : undefined,
            stripeCustomerId: prop.alpacaAccount.user.customer.stripeCustomerId !== undefined ? prop.alpacaAccount.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: prop.alpacaAccount.user.customer.stripeSubscriptionId !== undefined ? prop.alpacaAccount.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: prop.alpacaAccount.user.customer.stripePriceId !== undefined ? prop.alpacaAccount.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: prop.alpacaAccount.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.alpacaAccount.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: prop.alpacaAccount.user.accounts ? 
        Array.isArray(prop.alpacaAccount.user.accounts) && prop.alpacaAccount.user.accounts.length > 0 &&  prop.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.accounts.map((item: any) => ({
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
      sessions: prop.alpacaAccount.user.sessions ? 
        Array.isArray(prop.alpacaAccount.user.sessions) && prop.alpacaAccount.user.sessions.length > 0 &&  prop.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.sessions.map((item: any) => ({
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
      authenticators: prop.alpacaAccount.user.authenticators ? 
        Array.isArray(prop.alpacaAccount.user.authenticators) && prop.alpacaAccount.user.authenticators.length > 0 &&  prop.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.alpacaAccount.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.alpacaAccount.user.authenticators.map((item: any) => ({
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
        },
      }
    } : undefined,
    orders: prop.alpacaAccount.orders ? 
      Array.isArray(prop.alpacaAccount.orders) && prop.alpacaAccount.orders.length > 0 &&  prop.alpacaAccount.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.alpacaAccount.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.alpacaAccount.orders.map((item: any) => ({
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
    positions: prop.alpacaAccount.positions ? 
      Array.isArray(prop.alpacaAccount.positions) && prop.alpacaAccount.positions.length > 0 &&  prop.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.alpacaAccount.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.alpacaAccount.positions.map((item: any) => ({
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
    alerts: prop.alpacaAccount.alerts ? 
      Array.isArray(prop.alpacaAccount.alerts) && prop.alpacaAccount.alerts.length > 0 &&  prop.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.alpacaAccount.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.alpacaAccount.alerts.map((item: any) => ({
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
    }
  } : undefined,
  asset: prop.asset ? {
    upsert: {
      where: {
        id: prop.asset.id !== undefined ? {
            equals: prop.asset.id 
           } : undefined,
        symbol: prop.asset.symbol !== undefined ? {
            equals: prop.asset.symbol 
           } : undefined,
        name: prop.asset.name !== undefined ? {
            equals: prop.asset.name 
           } : undefined,
      },
      update: {
        id: prop.asset.id !== undefined ? {
            set: prop.asset.id  
           } : undefined,
        symbol: prop.asset.symbol !== undefined ? {
            set: prop.asset.symbol  
           } : undefined,
        name: prop.asset.name !== undefined ? {
            set: prop.asset.name  
           } : undefined,
        type: prop.asset.type !== undefined ? {
            set: prop.asset.type  
           } : undefined,
        logoUrl: prop.asset.logoUrl !== undefined ? {
            set: prop.asset.logoUrl  
           } : undefined,
        description: prop.asset.description !== undefined ? {
            set: prop.asset.description  
           } : undefined,
        cik: prop.asset.cik !== undefined ? {
            set: prop.asset.cik  
           } : undefined,
        exchange: prop.asset.exchange !== undefined ? {
            set: prop.asset.exchange  
           } : undefined,
        currency: prop.asset.currency !== undefined ? {
            set: prop.asset.currency  
           } : undefined,
        country: prop.asset.country !== undefined ? {
            set: prop.asset.country  
           } : undefined,
        sector: prop.asset.sector !== undefined ? {
            set: prop.asset.sector  
           } : undefined,
        industry: prop.asset.industry !== undefined ? {
            set: prop.asset.industry  
           } : undefined,
        address: prop.asset.address !== undefined ? {
            set: prop.asset.address  
           } : undefined,
        officialSite: prop.asset.officialSite !== undefined ? {
            set: prop.asset.officialSite  
           } : undefined,
        fiscalYearEnd: prop.asset.fiscalYearEnd !== undefined ? {
            set: prop.asset.fiscalYearEnd  
           } : undefined,
        latestQuarter: prop.asset.latestQuarter !== undefined ? {
            set: prop.asset.latestQuarter  
           } : undefined,
        marketCapitalization: prop.asset.marketCapitalization !== undefined ? {
            set: prop.asset.marketCapitalization  
           } : undefined,
        ebitda: prop.asset.ebitda !== undefined ? {
            set: prop.asset.ebitda  
           } : undefined,
        peRatio: prop.asset.peRatio !== undefined ? {
            set: prop.asset.peRatio  
           } : undefined,
        pegRatio: prop.asset.pegRatio !== undefined ? {
            set: prop.asset.pegRatio  
           } : undefined,
        bookValue: prop.asset.bookValue !== undefined ? {
            set: prop.asset.bookValue  
           } : undefined,
        dividendPerShare: prop.asset.dividendPerShare !== undefined ? {
            set: prop.asset.dividendPerShare  
           } : undefined,
        dividendYield: prop.asset.dividendYield !== undefined ? {
            set: prop.asset.dividendYield  
           } : undefined,
        eps: prop.asset.eps !== undefined ? {
            set: prop.asset.eps  
           } : undefined,
        revenuePerShareTTM: prop.asset.revenuePerShareTTM !== undefined ? {
            set: prop.asset.revenuePerShareTTM  
           } : undefined,
        profitMargin: prop.asset.profitMargin !== undefined ? {
            set: prop.asset.profitMargin  
           } : undefined,
        operatingMarginTTM: prop.asset.operatingMarginTTM !== undefined ? {
            set: prop.asset.operatingMarginTTM  
           } : undefined,
        returnOnAssetsTTM: prop.asset.returnOnAssetsTTM !== undefined ? {
            set: prop.asset.returnOnAssetsTTM  
           } : undefined,
        returnOnEquityTTM: prop.asset.returnOnEquityTTM !== undefined ? {
            set: prop.asset.returnOnEquityTTM  
           } : undefined,
        revenueTTM: prop.asset.revenueTTM !== undefined ? {
            set: prop.asset.revenueTTM  
           } : undefined,
        grossProfitTTM: prop.asset.grossProfitTTM !== undefined ? {
            set: prop.asset.grossProfitTTM  
           } : undefined,
        dilutedEPSTTM: prop.asset.dilutedEPSTTM !== undefined ? {
            set: prop.asset.dilutedEPSTTM  
           } : undefined,
        quarterlyEarningsGrowthYOY: prop.asset.quarterlyEarningsGrowthYOY !== undefined ? {
            set: prop.asset.quarterlyEarningsGrowthYOY  
           } : undefined,
        quarterlyRevenueGrowthYOY: prop.asset.quarterlyRevenueGrowthYOY !== undefined ? {
            set: prop.asset.quarterlyRevenueGrowthYOY  
           } : undefined,
        analystTargetPrice: prop.asset.analystTargetPrice !== undefined ? {
            set: prop.asset.analystTargetPrice  
           } : undefined,
        analystRatingStrongBuy: prop.asset.analystRatingStrongBuy !== undefined ? {
            set: prop.asset.analystRatingStrongBuy  
           } : undefined,
        analystRatingBuy: prop.asset.analystRatingBuy !== undefined ? {
            set: prop.asset.analystRatingBuy  
           } : undefined,
        analystRatingHold: prop.asset.analystRatingHold !== undefined ? {
            set: prop.asset.analystRatingHold  
           } : undefined,
        analystRatingSell: prop.asset.analystRatingSell !== undefined ? {
            set: prop.asset.analystRatingSell  
           } : undefined,
        analystRatingStrongSell: prop.asset.analystRatingStrongSell !== undefined ? {
            set: prop.asset.analystRatingStrongSell  
           } : undefined,
        trailingPE: prop.asset.trailingPE !== undefined ? {
            set: prop.asset.trailingPE  
           } : undefined,
        forwardPE: prop.asset.forwardPE !== undefined ? {
            set: prop.asset.forwardPE  
           } : undefined,
        priceToSalesRatioTTM: prop.asset.priceToSalesRatioTTM !== undefined ? {
            set: prop.asset.priceToSalesRatioTTM  
           } : undefined,
        priceToBookRatio: prop.asset.priceToBookRatio !== undefined ? {
            set: prop.asset.priceToBookRatio  
           } : undefined,
        evToRevenue: prop.asset.evToRevenue !== undefined ? {
            set: prop.asset.evToRevenue  
           } : undefined,
        evToEbitda: prop.asset.evToEbitda !== undefined ? {
            set: prop.asset.evToEbitda  
           } : undefined,
        beta: prop.asset.beta !== undefined ? {
            set: prop.asset.beta  
           } : undefined,
        week52High: prop.asset.week52High !== undefined ? {
            set: prop.asset.week52High  
           } : undefined,
        week52Low: prop.asset.week52Low !== undefined ? {
            set: prop.asset.week52Low  
           } : undefined,
        day50MovingAverage: prop.asset.day50MovingAverage !== undefined ? {
            set: prop.asset.day50MovingAverage  
           } : undefined,
        day200MovingAverage: prop.asset.day200MovingAverage !== undefined ? {
            set: prop.asset.day200MovingAverage  
           } : undefined,
        sharesOutstanding: prop.asset.sharesOutstanding !== undefined ? {
            set: prop.asset.sharesOutstanding  
           } : undefined,
        dividendDate: prop.asset.dividendDate !== undefined ? {
            set: prop.asset.dividendDate  
           } : undefined,
        exDividendDate: prop.asset.exDividendDate !== undefined ? {
            set: prop.asset.exDividendDate  
           } : undefined,
        askPrice: prop.asset.askPrice !== undefined ? {
            set: prop.asset.askPrice  
           } : undefined,
        bidPrice: prop.asset.bidPrice !== undefined ? {
            set: prop.asset.bidPrice  
           } : undefined,
    orders: prop.asset.orders ? {
      upsert: prop.asset.orders.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? {
        upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id 
               } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          update: {
            id: item.alpacaAccount.id !== undefined ? {
                set: item.alpacaAccount.id  
               } : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                set: item.alpacaAccount.type  
               } : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? {
                set: item.alpacaAccount.APIKey  
               } : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? {
                set: item.alpacaAccount.APISecret  
               } : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? {
                set: item.alpacaAccount.configuration  
               } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? {
                set: item.alpacaAccount.marketOpen  
               } : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
                set: item.alpacaAccount.minOrderSize  
               } : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
                set: item.alpacaAccount.maxOrderSize  
               } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange  
               } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold  
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
        },
      }))
    } : undefined,
    positions: prop.asset.positions ? {
      upsert: prop.asset.positions.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? {
        upsert: {
          where: {
            id: item.alpacaAccount.id !== undefined ? {
                equals: item.alpacaAccount.id 
               } : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          update: {
            id: item.alpacaAccount.id !== undefined ? {
                set: item.alpacaAccount.id  
               } : undefined,
            type: item.alpacaAccount.type !== undefined ? {
                set: item.alpacaAccount.type  
               } : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? {
                set: item.alpacaAccount.APIKey  
               } : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? {
                set: item.alpacaAccount.APISecret  
               } : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? {
                set: item.alpacaAccount.configuration  
               } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? {
                set: item.alpacaAccount.marketOpen  
               } : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? {
                set: item.alpacaAccount.minOrderSize  
               } : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? {
                set: item.alpacaAccount.maxOrderSize  
               } : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.alpacaAccount.minPercentageChange  
               } : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.alpacaAccount.volumeThreshold  
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    newsMentions: prop.asset.newsMentions ? {
      upsert: prop.asset.newsMentions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          url: item.url !== undefined ? item.url : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
          newsArticleId: item.newsArticleId !== undefined ? {
              equals: item.newsArticleId 
             } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          url: item.url !== undefined ? {
              set: item.url  
             } : undefined,
          relevancyScore: item.relevancyScore !== undefined ? {
              set: item.relevancyScore  
             } : undefined,
          sentimentScore: item.sentimentScore !== undefined ? {
              set: item.sentimentScore  
             } : undefined,
          sentimentLabel: item.sentimentLabel !== undefined ? {
              set: item.sentimentLabel  
             } : undefined,
      news: item.news ? {
        upsert: {
          where: {
            id: item.news.id !== undefined ? {
                equals: item.news.id 
               } : undefined,
            title: item.news.title !== undefined ? {
                equals: item.news.title 
               } : undefined,
            url: item.news.url !== undefined ? {
                equals: item.news.url 
               } : undefined,
          },
          update: {
            id: item.news.id !== undefined ? {
                set: item.news.id  
               } : undefined,
            title: item.news.title !== undefined ? {
                set: item.news.title  
               } : undefined,
            content: item.news.content !== undefined ? {
                set: item.news.content  
               } : undefined,
            source: item.news.source !== undefined ? {
                set: item.news.source  
               } : undefined,
            sourceDomain: item.news.sourceDomain !== undefined ? {
                set: item.news.sourceDomain  
               } : undefined,
            url: item.news.url !== undefined ? {
                set: item.news.url  
               } : undefined,
            sentiment: item.news.sentiment !== undefined ? {
                set: item.news.sentiment  
               } : undefined,
            authors: item.news.authors !== undefined ? {
                set: item.news.authors  
               } : undefined,
            summary: item.news.summary !== undefined ? {
                set: item.news.summary  
               } : undefined,
            bannerImage: item.news.bannerImage !== undefined ? {
                set: item.news.bannerImage  
               } : undefined,
            timePublished: item.news.timePublished !== undefined ? {
                set: item.news.timePublished  
               } : undefined,
            category: item.news.category !== undefined ? {
                set: item.news.category  
               } : undefined,
            topics: item.news.topics !== undefined ? {
                set: item.news.topics  
               } : undefined,
            logo: item.news.logo !== undefined ? {
                set: item.news.logo  
               } : undefined,
          },
          create: {
            title: item.news.title !== undefined ? item.news.title : undefined,
            content: item.news.content !== undefined ? item.news.content : undefined,
            source: item.news.source !== undefined ? item.news.source : undefined,
            sourceDomain: item.news.sourceDomain !== undefined ? item.news.sourceDomain : undefined,
            url: item.news.url !== undefined ? item.news.url : undefined,
            sentiment: item.news.sentiment !== undefined ? item.news.sentiment : undefined,
            authors: item.news.authors !== undefined ? item.news.authors : undefined,
            summary: item.news.summary !== undefined ? item.news.summary : undefined,
            bannerImage: item.news.bannerImage !== undefined ? item.news.bannerImage : undefined,
            timePublished: item.news.timePublished !== undefined ? item.news.timePublished : undefined,
            category: item.news.category !== undefined ? item.news.category : undefined,
            topics: item.news.topics !== undefined ? item.news.topics : undefined,
            logo: item.news.logo !== undefined ? item.news.logo : undefined,
          },
        }
      } : undefined,
        },
        create: {
          url: item.url !== undefined ? item.url : undefined,
          relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
          sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
          sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
      news: item.news ? 
        typeof item.news === 'object' && Object.keys(item.news).length === 1 && Object.keys(item.news)[0] === 'id'
    ? { connect: {
            id: item.news.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.news.id !== undefined ? item.news.id : undefined,
            url: item.news.url !== undefined ? item.news.url : undefined,
            title: item.news.title !== undefined ? {
                equals: item.news.title 
               } : undefined,
          },
          create: {
            title: item.news.title !== undefined ? item.news.title : undefined,
            content: item.news.content !== undefined ? item.news.content : undefined,
            source: item.news.source !== undefined ? item.news.source : undefined,
            sourceDomain: item.news.sourceDomain !== undefined ? item.news.sourceDomain : undefined,
            url: item.news.url !== undefined ? item.news.url : undefined,
            sentiment: item.news.sentiment !== undefined ? item.news.sentiment : undefined,
            authors: item.news.authors !== undefined ? item.news.authors : undefined,
            summary: item.news.summary !== undefined ? item.news.summary : undefined,
            bannerImage: item.news.bannerImage !== undefined ? item.news.bannerImage : undefined,
            timePublished: item.news.timePublished !== undefined ? item.news.timePublished : undefined,
            category: item.news.category !== undefined ? item.news.category : undefined,
            topics: item.news.topics !== undefined ? item.news.topics : undefined,
            logo: item.news.logo !== undefined ? item.news.logo : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        symbol: prop.asset.symbol !== undefined ? prop.asset.symbol : undefined,
        name: prop.asset.name !== undefined ? prop.asset.name : undefined,
        type: prop.asset.type !== undefined ? prop.asset.type : undefined,
        logoUrl: prop.asset.logoUrl !== undefined ? prop.asset.logoUrl : undefined,
        description: prop.asset.description !== undefined ? prop.asset.description : undefined,
        cik: prop.asset.cik !== undefined ? prop.asset.cik : undefined,
        exchange: prop.asset.exchange !== undefined ? prop.asset.exchange : undefined,
        currency: prop.asset.currency !== undefined ? prop.asset.currency : undefined,
        country: prop.asset.country !== undefined ? prop.asset.country : undefined,
        sector: prop.asset.sector !== undefined ? prop.asset.sector : undefined,
        industry: prop.asset.industry !== undefined ? prop.asset.industry : undefined,
        address: prop.asset.address !== undefined ? prop.asset.address : undefined,
        officialSite: prop.asset.officialSite !== undefined ? prop.asset.officialSite : undefined,
        fiscalYearEnd: prop.asset.fiscalYearEnd !== undefined ? prop.asset.fiscalYearEnd : undefined,
        latestQuarter: prop.asset.latestQuarter !== undefined ? prop.asset.latestQuarter : undefined,
        marketCapitalization: prop.asset.marketCapitalization !== undefined ? prop.asset.marketCapitalization : undefined,
        ebitda: prop.asset.ebitda !== undefined ? prop.asset.ebitda : undefined,
        peRatio: prop.asset.peRatio !== undefined ? prop.asset.peRatio : undefined,
        pegRatio: prop.asset.pegRatio !== undefined ? prop.asset.pegRatio : undefined,
        bookValue: prop.asset.bookValue !== undefined ? prop.asset.bookValue : undefined,
        dividendPerShare: prop.asset.dividendPerShare !== undefined ? prop.asset.dividendPerShare : undefined,
        dividendYield: prop.asset.dividendYield !== undefined ? prop.asset.dividendYield : undefined,
        eps: prop.asset.eps !== undefined ? prop.asset.eps : undefined,
        revenuePerShareTTM: prop.asset.revenuePerShareTTM !== undefined ? prop.asset.revenuePerShareTTM : undefined,
        profitMargin: prop.asset.profitMargin !== undefined ? prop.asset.profitMargin : undefined,
        operatingMarginTTM: prop.asset.operatingMarginTTM !== undefined ? prop.asset.operatingMarginTTM : undefined,
        returnOnAssetsTTM: prop.asset.returnOnAssetsTTM !== undefined ? prop.asset.returnOnAssetsTTM : undefined,
        returnOnEquityTTM: prop.asset.returnOnEquityTTM !== undefined ? prop.asset.returnOnEquityTTM : undefined,
        revenueTTM: prop.asset.revenueTTM !== undefined ? prop.asset.revenueTTM : undefined,
        grossProfitTTM: prop.asset.grossProfitTTM !== undefined ? prop.asset.grossProfitTTM : undefined,
        dilutedEPSTTM: prop.asset.dilutedEPSTTM !== undefined ? prop.asset.dilutedEPSTTM : undefined,
        quarterlyEarningsGrowthYOY: prop.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.asset.quarterlyEarningsGrowthYOY : undefined,
        quarterlyRevenueGrowthYOY: prop.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.asset.quarterlyRevenueGrowthYOY : undefined,
        analystTargetPrice: prop.asset.analystTargetPrice !== undefined ? prop.asset.analystTargetPrice : undefined,
        analystRatingStrongBuy: prop.asset.analystRatingStrongBuy !== undefined ? prop.asset.analystRatingStrongBuy : undefined,
        analystRatingBuy: prop.asset.analystRatingBuy !== undefined ? prop.asset.analystRatingBuy : undefined,
        analystRatingHold: prop.asset.analystRatingHold !== undefined ? prop.asset.analystRatingHold : undefined,
        analystRatingSell: prop.asset.analystRatingSell !== undefined ? prop.asset.analystRatingSell : undefined,
        analystRatingStrongSell: prop.asset.analystRatingStrongSell !== undefined ? prop.asset.analystRatingStrongSell : undefined,
        trailingPE: prop.asset.trailingPE !== undefined ? prop.asset.trailingPE : undefined,
        forwardPE: prop.asset.forwardPE !== undefined ? prop.asset.forwardPE : undefined,
        priceToSalesRatioTTM: prop.asset.priceToSalesRatioTTM !== undefined ? prop.asset.priceToSalesRatioTTM : undefined,
        priceToBookRatio: prop.asset.priceToBookRatio !== undefined ? prop.asset.priceToBookRatio : undefined,
        evToRevenue: prop.asset.evToRevenue !== undefined ? prop.asset.evToRevenue : undefined,
        evToEbitda: prop.asset.evToEbitda !== undefined ? prop.asset.evToEbitda : undefined,
        beta: prop.asset.beta !== undefined ? prop.asset.beta : undefined,
        week52High: prop.asset.week52High !== undefined ? prop.asset.week52High : undefined,
        week52Low: prop.asset.week52Low !== undefined ? prop.asset.week52Low : undefined,
        day50MovingAverage: prop.asset.day50MovingAverage !== undefined ? prop.asset.day50MovingAverage : undefined,
        day200MovingAverage: prop.asset.day200MovingAverage !== undefined ? prop.asset.day200MovingAverage : undefined,
        sharesOutstanding: prop.asset.sharesOutstanding !== undefined ? prop.asset.sharesOutstanding : undefined,
        dividendDate: prop.asset.dividendDate !== undefined ? prop.asset.dividendDate : undefined,
        exDividendDate: prop.asset.exDividendDate !== undefined ? prop.asset.exDividendDate : undefined,
        askPrice: prop.asset.askPrice !== undefined ? prop.asset.askPrice : undefined,
        bidPrice: prop.asset.bidPrice !== undefined ? prop.asset.bidPrice : undefined,
    orders: prop.asset.orders ? 
      Array.isArray(prop.asset.orders) && prop.asset.orders.length > 0 &&  prop.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.asset.orders.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.asset.orders.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
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
        },
      }))
    } : undefined,
    positions: prop.asset.positions ? 
      Array.isArray(prop.asset.positions) && prop.asset.positions.length > 0 &&  prop.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.asset.positions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.asset.positions.map((item: any) => ({
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
      alpacaAccount: item.alpacaAccount ? 
        typeof item.alpacaAccount === 'object' && Object.keys(item.alpacaAccount).length === 1 && Object.keys(item.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.alpacaAccount.id !== undefined ? item.alpacaAccount.id : undefined,
            userId: item.alpacaAccount.userId !== undefined ? {
                equals: item.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.alpacaAccount.type !== undefined ? item.alpacaAccount.type : undefined,
            APIKey: item.alpacaAccount.APIKey !== undefined ? item.alpacaAccount.APIKey : undefined,
            APISecret: item.alpacaAccount.APISecret !== undefined ? item.alpacaAccount.APISecret : undefined,
            configuration: item.alpacaAccount.configuration !== undefined ? item.alpacaAccount.configuration : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    newsMentions: prop.asset.newsMentions ? 
      Array.isArray(prop.asset.newsMentions) && prop.asset.newsMentions.length > 0 &&  prop.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.asset.newsMentions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.asset.newsMentions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          url: item.url !== undefined ? item.url : undefined,
          assetId: item.assetId !== undefined ? {
              equals: item.assetId 
             } : undefined,
          newsArticleId: item.newsArticleId !== undefined ? {
              equals: item.newsArticleId 
             } : undefined,
        },
        create: {
          url: item.url !== undefined ? item.url : undefined,
          relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
          sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
          sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
      news: item.news ? 
        typeof item.news === 'object' && Object.keys(item.news).length === 1 && Object.keys(item.news)[0] === 'id'
    ? { connect: {
            id: item.news.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.news.id !== undefined ? item.news.id : undefined,
            url: item.news.url !== undefined ? item.news.url : undefined,
            title: item.news.title !== undefined ? {
                equals: item.news.title 
               } : undefined,
          },
          create: {
            title: item.news.title !== undefined ? item.news.title : undefined,
            content: item.news.content !== undefined ? item.news.content : undefined,
            source: item.news.source !== undefined ? item.news.source : undefined,
            sourceDomain: item.news.sourceDomain !== undefined ? item.news.sourceDomain : undefined,
            url: item.news.url !== undefined ? item.news.url : undefined,
            sentiment: item.news.sentiment !== undefined ? item.news.sentiment : undefined,
            authors: item.news.authors !== undefined ? item.news.authors : undefined,
            summary: item.news.summary !== undefined ? item.news.summary : undefined,
            bannerImage: item.news.bannerImage !== undefined ? item.news.bannerImage : undefined,
            timePublished: item.news.timePublished !== undefined ? item.news.timePublished : undefined,
            category: item.news.category !== undefined ? item.news.category : undefined,
            topics: item.news.topics !== undefined ? item.news.topics : undefined,
            logo: item.news.logo !== undefined ? item.news.logo : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  actions: prop.actions ? {
    upsert: prop.actions.map((item: any) => ({
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
    order: item.order ? {
      upsert: {
        where: {
          id: item.order.id !== undefined ? {
              equals: item.order.id 
             } : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? {
              equals: item.order.clientOrderId 
             } : undefined,
          alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
              equals: item.order.alpacaAccountId 
             } : undefined,
          assetId: item.order.assetId !== undefined ? {
              equals: item.order.assetId 
             } : undefined,
        },
        update: {
          id: item.order.id !== undefined ? {
              set: item.order.id  
             } : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? {
              set: item.order.clientOrderId  
             } : undefined,
          qty: item.order.qty !== undefined ? {
              set: item.order.qty  
             } : undefined,
          notional: item.order.notional !== undefined ? {
              set: item.order.notional  
             } : undefined,
          side: item.order.side !== undefined ? {
              set: item.order.side  
             } : undefined,
          type: item.order.type !== undefined ? {
              set: item.order.type  
             } : undefined,
          orderClass: item.order.orderClass !== undefined ? {
              set: item.order.orderClass  
             } : undefined,
          timeInForce: item.order.timeInForce !== undefined ? {
              set: item.order.timeInForce  
             } : undefined,
          limitPrice: item.order.limitPrice !== undefined ? {
              set: item.order.limitPrice  
             } : undefined,
          stopPrice: item.order.stopPrice !== undefined ? {
              set: item.order.stopPrice  
             } : undefined,
          trailPrice: item.order.trailPrice !== undefined ? {
              set: item.order.trailPrice  
             } : undefined,
          trailPercent: item.order.trailPercent !== undefined ? {
              set: item.order.trailPercent  
             } : undefined,
          extendedHours: item.order.extendedHours !== undefined ? {
              set: item.order.extendedHours  
             } : undefined,
          status: item.order.status !== undefined ? {
              set: item.order.status  
             } : undefined,
          submittedAt: item.order.submittedAt !== undefined ? {
              set: item.order.submittedAt  
             } : undefined,
          filledAt: item.order.filledAt !== undefined ? {
              set: item.order.filledAt  
             } : undefined,
          filledQty: item.order.filledQty !== undefined ? {
              set: item.order.filledQty  
             } : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? {
              set: item.order.filledAvgPrice  
             } : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? {
              set: item.order.cancelRequestedAt  
             } : undefined,
          canceledAt: item.order.canceledAt !== undefined ? {
              set: item.order.canceledAt  
             } : undefined,
          fee: item.order.fee !== undefined ? {
              set: item.order.fee  
             } : undefined,
          strikePrice: item.order.strikePrice !== undefined ? {
              set: item.order.strikePrice  
             } : undefined,
          expirationDate: item.order.expirationDate !== undefined ? {
              set: item.order.expirationDate  
             } : undefined,
          optionType: item.order.optionType !== undefined ? {
              set: item.order.optionType  
             } : undefined,
          stopLossId: item.order.stopLossId !== undefined ? {
              set: item.order.stopLossId  
             } : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? {
              set: item.order.takeProfitId  
             } : undefined,
      stopLoss: item.order.stopLoss ? {
        upsert: {
          where: {
            id: item.order.stopLoss.id !== undefined ? {
                equals: item.order.stopLoss.id 
               } : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? {
                equals: item.order.stopLoss.orderId 
               } : undefined,
          },
          update: {
            id: item.order.stopLoss.id !== undefined ? {
                set: item.order.stopLoss.id  
               } : undefined,
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? {
                set: item.order.stopLoss.stopPrice  
               } : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? {
                set: item.order.stopLoss.limitPrice  
               } : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? {
        upsert: {
          where: {
            id: item.order.takeProfit.id !== undefined ? {
                equals: item.order.takeProfit.id 
               } : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? {
                equals: item.order.takeProfit.orderId 
               } : undefined,
          },
          update: {
            id: item.order.takeProfit.id !== undefined ? {
                set: item.order.takeProfit.id  
               } : undefined,
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? {
                set: item.order.takeProfit.limitPrice  
               } : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? {
                set: item.order.takeProfit.stopPrice  
               } : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? {
        upsert: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? {
                equals: item.order.alpacaAccount.id 
               } : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          update: {
            id: item.order.alpacaAccount.id !== undefined ? {
                set: item.order.alpacaAccount.id  
               } : undefined,
            type: item.order.alpacaAccount.type !== undefined ? {
                set: item.order.alpacaAccount.type  
               } : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? {
                set: item.order.alpacaAccount.APIKey  
               } : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? {
                set: item.order.alpacaAccount.APISecret  
               } : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? {
                set: item.order.alpacaAccount.configuration  
               } : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? {
                set: item.order.alpacaAccount.marketOpen  
               } : undefined,
            minOrderSize: item.order.alpacaAccount.minOrderSize !== undefined ? {
                set: item.order.alpacaAccount.minOrderSize  
               } : undefined,
            maxOrderSize: item.order.alpacaAccount.maxOrderSize !== undefined ? {
                set: item.order.alpacaAccount.maxOrderSize  
               } : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? {
                set: item.order.alpacaAccount.minPercentageChange  
               } : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? {
                set: item.order.alpacaAccount.volumeThreshold  
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.order.alpacaAccount.minOrderSize !== undefined ? item.order.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.order.alpacaAccount.maxOrderSize !== undefined ? item.order.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? {
        upsert: {
          where: {
            id: item.order.asset.id !== undefined ? {
                equals: item.order.asset.id 
               } : undefined,
            symbol: item.order.asset.symbol !== undefined ? {
                equals: item.order.asset.symbol 
               } : undefined,
            name: item.order.asset.name !== undefined ? {
                equals: item.order.asset.name 
               } : undefined,
          },
          update: {
            id: item.order.asset.id !== undefined ? {
                set: item.order.asset.id  
               } : undefined,
            symbol: item.order.asset.symbol !== undefined ? {
                set: item.order.asset.symbol  
               } : undefined,
            name: item.order.asset.name !== undefined ? {
                set: item.order.asset.name  
               } : undefined,
            type: item.order.asset.type !== undefined ? {
                set: item.order.asset.type  
               } : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? {
                set: item.order.asset.logoUrl  
               } : undefined,
            description: item.order.asset.description !== undefined ? {
                set: item.order.asset.description  
               } : undefined,
            cik: item.order.asset.cik !== undefined ? {
                set: item.order.asset.cik  
               } : undefined,
            exchange: item.order.asset.exchange !== undefined ? {
                set: item.order.asset.exchange  
               } : undefined,
            currency: item.order.asset.currency !== undefined ? {
                set: item.order.asset.currency  
               } : undefined,
            country: item.order.asset.country !== undefined ? {
                set: item.order.asset.country  
               } : undefined,
            sector: item.order.asset.sector !== undefined ? {
                set: item.order.asset.sector  
               } : undefined,
            industry: item.order.asset.industry !== undefined ? {
                set: item.order.asset.industry  
               } : undefined,
            address: item.order.asset.address !== undefined ? {
                set: item.order.asset.address  
               } : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? {
                set: item.order.asset.officialSite  
               } : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? {
                set: item.order.asset.fiscalYearEnd  
               } : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? {
                set: item.order.asset.latestQuarter  
               } : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? {
                set: item.order.asset.marketCapitalization  
               } : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? {
                set: item.order.asset.ebitda  
               } : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? {
                set: item.order.asset.peRatio  
               } : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? {
                set: item.order.asset.pegRatio  
               } : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? {
                set: item.order.asset.bookValue  
               } : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? {
                set: item.order.asset.dividendPerShare  
               } : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? {
                set: item.order.asset.dividendYield  
               } : undefined,
            eps: item.order.asset.eps !== undefined ? {
                set: item.order.asset.eps  
               } : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? {
                set: item.order.asset.revenuePerShareTTM  
               } : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? {
                set: item.order.asset.profitMargin  
               } : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? {
                set: item.order.asset.operatingMarginTTM  
               } : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? {
                set: item.order.asset.returnOnAssetsTTM  
               } : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? {
                set: item.order.asset.returnOnEquityTTM  
               } : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? {
                set: item.order.asset.revenueTTM  
               } : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? {
                set: item.order.asset.grossProfitTTM  
               } : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? {
                set: item.order.asset.dilutedEPSTTM  
               } : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: item.order.asset.quarterlyEarningsGrowthYOY  
               } : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: item.order.asset.quarterlyRevenueGrowthYOY  
               } : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? {
                set: item.order.asset.analystTargetPrice  
               } : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? {
                set: item.order.asset.analystRatingStrongBuy  
               } : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? {
                set: item.order.asset.analystRatingBuy  
               } : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? {
                set: item.order.asset.analystRatingHold  
               } : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? {
                set: item.order.asset.analystRatingSell  
               } : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? {
                set: item.order.asset.analystRatingStrongSell  
               } : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? {
                set: item.order.asset.trailingPE  
               } : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? {
                set: item.order.asset.forwardPE  
               } : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? {
                set: item.order.asset.priceToSalesRatioTTM  
               } : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? {
                set: item.order.asset.priceToBookRatio  
               } : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? {
                set: item.order.asset.evToRevenue  
               } : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? {
                set: item.order.asset.evToEbitda  
               } : undefined,
            beta: item.order.asset.beta !== undefined ? {
                set: item.order.asset.beta  
               } : undefined,
            week52High: item.order.asset.week52High !== undefined ? {
                set: item.order.asset.week52High  
               } : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? {
                set: item.order.asset.week52Low  
               } : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? {
                set: item.order.asset.day50MovingAverage  
               } : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? {
                set: item.order.asset.day200MovingAverage  
               } : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? {
                set: item.order.asset.sharesOutstanding  
               } : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? {
                set: item.order.asset.dividendDate  
               } : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? {
                set: item.order.asset.exDividendDate  
               } : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? {
                set: item.order.asset.askPrice  
               } : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? {
                set: item.order.asset.bidPrice  
               } : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
        create: {
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          qty: item.order.qty !== undefined ? item.order.qty : undefined,
          notional: item.order.notional !== undefined ? item.order.notional : undefined,
          side: item.order.side !== undefined ? item.order.side : undefined,
          type: item.order.type !== undefined ? item.order.type : undefined,
          orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
          timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
          limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
          stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
          trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
          trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
          extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
          status: item.order.status !== undefined ? item.order.status : undefined,
          submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
          filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
          filledQty: item.order.filledQty !== undefined ? item.order.filledQty : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? item.order.cancelRequestedAt : undefined,
          canceledAt: item.order.canceledAt !== undefined ? item.order.canceledAt : undefined,
          fee: item.order.fee !== undefined ? item.order.fee : undefined,
          strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
          expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
          optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
      stopLoss: item.order.stopLoss ? 
        typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && Object.keys(item.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.order.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.stopLoss.id !== undefined ? item.order.stopLoss.id : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? item.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
        typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && Object.keys(item.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.order.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.takeProfit.id !== undefined ? item.order.takeProfit.id : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? item.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
        typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && Object.keys(item.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.order.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? item.order.alpacaAccount.id : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.order.alpacaAccount.minOrderSize !== undefined ? item.order.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.order.alpacaAccount.maxOrderSize !== undefined ? item.order.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
        typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && Object.keys(item.order.asset)[0] === 'id'
    ? { connect: {
            id: item.order.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.asset.id !== undefined ? item.order.asset.id : undefined,
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        sequence: item.sequence !== undefined ? item.sequence : undefined,
        type: item.type !== undefined ? item.type : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        fee: item.fee !== undefined ? item.fee : undefined,
    order: item.order ? 
      typeof item.order === 'object' && Object.keys(item.order).length === 1 && Object.keys(item.order)[0] === 'id'
    ? { connect: {
          id: item.order.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.order.id !== undefined ? item.order.id : undefined,
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          actionId: item.order.actionId !== undefined ? item.order.actionId : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
              equals: item.order.alpacaAccountId 
             } : undefined,
          assetId: item.order.assetId !== undefined ? {
              equals: item.order.assetId 
             } : undefined,
        },
        create: {
          clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
          qty: item.order.qty !== undefined ? item.order.qty : undefined,
          notional: item.order.notional !== undefined ? item.order.notional : undefined,
          side: item.order.side !== undefined ? item.order.side : undefined,
          type: item.order.type !== undefined ? item.order.type : undefined,
          orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
          timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
          limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
          stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
          trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
          trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
          extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
          status: item.order.status !== undefined ? item.order.status : undefined,
          submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
          filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
          filledQty: item.order.filledQty !== undefined ? item.order.filledQty : undefined,
          filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
          cancelRequestedAt: item.order.cancelRequestedAt !== undefined ? item.order.cancelRequestedAt : undefined,
          canceledAt: item.order.canceledAt !== undefined ? item.order.canceledAt : undefined,
          fee: item.order.fee !== undefined ? item.order.fee : undefined,
          strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
          expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
          optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
          stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
          takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
      stopLoss: item.order.stopLoss ? 
        typeof item.order.stopLoss === 'object' && Object.keys(item.order.stopLoss).length === 1 && Object.keys(item.order.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.order.stopLoss.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.stopLoss.id !== undefined ? item.order.stopLoss.id : undefined,
            orderId: item.order.stopLoss.orderId !== undefined ? item.order.stopLoss.orderId : undefined,
          },
          create: {
            stopPrice: item.order.stopLoss.stopPrice !== undefined ? item.order.stopLoss.stopPrice : undefined,
            limitPrice: item.order.stopLoss.limitPrice !== undefined ? item.order.stopLoss.limitPrice : undefined,
          },
        }
      } : undefined,
      takeProfit: item.order.takeProfit ? 
        typeof item.order.takeProfit === 'object' && Object.keys(item.order.takeProfit).length === 1 && Object.keys(item.order.takeProfit)[0] === 'id'
    ? { connect: {
            id: item.order.takeProfit.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.takeProfit.id !== undefined ? item.order.takeProfit.id : undefined,
            orderId: item.order.takeProfit.orderId !== undefined ? item.order.takeProfit.orderId : undefined,
          },
          create: {
            limitPrice: item.order.takeProfit.limitPrice !== undefined ? item.order.takeProfit.limitPrice : undefined,
            stopPrice: item.order.takeProfit.stopPrice !== undefined ? item.order.takeProfit.stopPrice : undefined,
          },
        }
      } : undefined,
      alpacaAccount: item.order.alpacaAccount ? 
        typeof item.order.alpacaAccount === 'object' && Object.keys(item.order.alpacaAccount).length === 1 && Object.keys(item.order.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: item.order.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.alpacaAccount.id !== undefined ? item.order.alpacaAccount.id : undefined,
            userId: item.order.alpacaAccount.userId !== undefined ? {
                equals: item.order.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: item.order.alpacaAccount.type !== undefined ? item.order.alpacaAccount.type : undefined,
            APIKey: item.order.alpacaAccount.APIKey !== undefined ? item.order.alpacaAccount.APIKey : undefined,
            APISecret: item.order.alpacaAccount.APISecret !== undefined ? item.order.alpacaAccount.APISecret : undefined,
            configuration: item.order.alpacaAccount.configuration !== undefined ? item.order.alpacaAccount.configuration : undefined,
            marketOpen: item.order.alpacaAccount.marketOpen !== undefined ? item.order.alpacaAccount.marketOpen : undefined,
            minOrderSize: item.order.alpacaAccount.minOrderSize !== undefined ? item.order.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.order.alpacaAccount.maxOrderSize !== undefined ? item.order.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.order.alpacaAccount.minPercentageChange !== undefined ? item.order.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.order.alpacaAccount.volumeThreshold !== undefined ? item.order.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      asset: item.order.asset ? 
        typeof item.order.asset === 'object' && Object.keys(item.order.asset).length === 1 && Object.keys(item.order.asset)[0] === 'id'
    ? { connect: {
            id: item.order.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.asset.id !== undefined ? item.order.asset.id : undefined,
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
          },
          create: {
            symbol: item.order.asset.symbol !== undefined ? item.order.asset.symbol : undefined,
            name: item.order.asset.name !== undefined ? item.order.asset.name : undefined,
            type: item.order.asset.type !== undefined ? item.order.asset.type : undefined,
            logoUrl: item.order.asset.logoUrl !== undefined ? item.order.asset.logoUrl : undefined,
            description: item.order.asset.description !== undefined ? item.order.asset.description : undefined,
            cik: item.order.asset.cik !== undefined ? item.order.asset.cik : undefined,
            exchange: item.order.asset.exchange !== undefined ? item.order.asset.exchange : undefined,
            currency: item.order.asset.currency !== undefined ? item.order.asset.currency : undefined,
            country: item.order.asset.country !== undefined ? item.order.asset.country : undefined,
            sector: item.order.asset.sector !== undefined ? item.order.asset.sector : undefined,
            industry: item.order.asset.industry !== undefined ? item.order.asset.industry : undefined,
            address: item.order.asset.address !== undefined ? item.order.asset.address : undefined,
            officialSite: item.order.asset.officialSite !== undefined ? item.order.asset.officialSite : undefined,
            fiscalYearEnd: item.order.asset.fiscalYearEnd !== undefined ? item.order.asset.fiscalYearEnd : undefined,
            latestQuarter: item.order.asset.latestQuarter !== undefined ? item.order.asset.latestQuarter : undefined,
            marketCapitalization: item.order.asset.marketCapitalization !== undefined ? item.order.asset.marketCapitalization : undefined,
            ebitda: item.order.asset.ebitda !== undefined ? item.order.asset.ebitda : undefined,
            peRatio: item.order.asset.peRatio !== undefined ? item.order.asset.peRatio : undefined,
            pegRatio: item.order.asset.pegRatio !== undefined ? item.order.asset.pegRatio : undefined,
            bookValue: item.order.asset.bookValue !== undefined ? item.order.asset.bookValue : undefined,
            dividendPerShare: item.order.asset.dividendPerShare !== undefined ? item.order.asset.dividendPerShare : undefined,
            dividendYield: item.order.asset.dividendYield !== undefined ? item.order.asset.dividendYield : undefined,
            eps: item.order.asset.eps !== undefined ? item.order.asset.eps : undefined,
            revenuePerShareTTM: item.order.asset.revenuePerShareTTM !== undefined ? item.order.asset.revenuePerShareTTM : undefined,
            profitMargin: item.order.asset.profitMargin !== undefined ? item.order.asset.profitMargin : undefined,
            operatingMarginTTM: item.order.asset.operatingMarginTTM !== undefined ? item.order.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: item.order.asset.returnOnAssetsTTM !== undefined ? item.order.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: item.order.asset.returnOnEquityTTM !== undefined ? item.order.asset.returnOnEquityTTM : undefined,
            revenueTTM: item.order.asset.revenueTTM !== undefined ? item.order.asset.revenueTTM : undefined,
            grossProfitTTM: item.order.asset.grossProfitTTM !== undefined ? item.order.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: item.order.asset.dilutedEPSTTM !== undefined ? item.order.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: item.order.asset.quarterlyEarningsGrowthYOY !== undefined ? item.order.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: item.order.asset.quarterlyRevenueGrowthYOY !== undefined ? item.order.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: item.order.asset.analystTargetPrice !== undefined ? item.order.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: item.order.asset.analystRatingStrongBuy !== undefined ? item.order.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: item.order.asset.analystRatingBuy !== undefined ? item.order.asset.analystRatingBuy : undefined,
            analystRatingHold: item.order.asset.analystRatingHold !== undefined ? item.order.asset.analystRatingHold : undefined,
            analystRatingSell: item.order.asset.analystRatingSell !== undefined ? item.order.asset.analystRatingSell : undefined,
            analystRatingStrongSell: item.order.asset.analystRatingStrongSell !== undefined ? item.order.asset.analystRatingStrongSell : undefined,
            trailingPE: item.order.asset.trailingPE !== undefined ? item.order.asset.trailingPE : undefined,
            forwardPE: item.order.asset.forwardPE !== undefined ? item.order.asset.forwardPE : undefined,
            priceToSalesRatioTTM: item.order.asset.priceToSalesRatioTTM !== undefined ? item.order.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: item.order.asset.priceToBookRatio !== undefined ? item.order.asset.priceToBookRatio : undefined,
            evToRevenue: item.order.asset.evToRevenue !== undefined ? item.order.asset.evToRevenue : undefined,
            evToEbitda: item.order.asset.evToEbitda !== undefined ? item.order.asset.evToEbitda : undefined,
            beta: item.order.asset.beta !== undefined ? item.order.asset.beta : undefined,
            week52High: item.order.asset.week52High !== undefined ? item.order.asset.week52High : undefined,
            week52Low: item.order.asset.week52Low !== undefined ? item.order.asset.week52Low : undefined,
            day50MovingAverage: item.order.asset.day50MovingAverage !== undefined ? item.order.asset.day50MovingAverage : undefined,
            day200MovingAverage: item.order.asset.day200MovingAverage !== undefined ? item.order.asset.day200MovingAverage : undefined,
            sharesOutstanding: item.order.asset.sharesOutstanding !== undefined ? item.order.asset.sharesOutstanding : undefined,
            dividendDate: item.order.asset.dividendDate !== undefined ? item.order.asset.dividendDate : undefined,
            exDividendDate: item.order.asset.exDividendDate !== undefined ? item.order.asset.exDividendDate : undefined,
            askPrice: item.order.asset.askPrice !== undefined ? item.order.asset.askPrice : undefined,
            bidPrice: item.order.asset.bidPrice !== undefined ? item.order.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_TRADE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyTrade) {
        return response.data.updateManyTrade;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyTrade:', error);
      throw error;
    }
  },

  /**
   * Delete a single Trade record.
   * @param props - Properties to update.
   * @returns The deleted Trade or null.
   */
  async delete(props: TradeType): Promise<TradeType> {

      const DELETE_ONE_TRADE = gql`
      mutation deleteOneTrade($where: TradeWhereUniqueInput!) {
        deleteOneTrade(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_TRADE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneTrade) {
        return response.data.deleteOneTrade;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneTrade:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Trade record by ID.
   * @param props - Properties to update.
   * @returns The retrieved Trade or null.
   */
  async get(props: TradeType): Promise<TradeType | null> {

      const GET_TRADE = gql`
      query getTrade($where: TradeWhereUniqueInput!) {
        getTrade(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
  assetId: props.assetId !== undefined ? {
    equals: props.assetId 
  } : undefined,
  qty: props.qty !== undefined ? props.qty : undefined,
  price: props.price !== undefined ? props.price : undefined,
  total: props.total !== undefined ? props.total : undefined,
  optionType: props.optionType !== undefined ? props.optionType : undefined,
  signal: props.signal !== undefined ? props.signal : undefined,
  strategy: props.strategy !== undefined ? props.strategy : undefined,
  analysis: props.analysis !== undefined ? props.analysis : undefined,
  summary: props.summary !== undefined ? props.summary : undefined,
  confidence: props.confidence !== undefined ? props.confidence : undefined,
  timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  createdAt: props.createdAt !== undefined ? props.createdAt : undefined,
  updatedAt: props.updatedAt !== undefined ? props.updatedAt : undefined,
  status: props.status !== undefined ? props.status : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_TRADE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getTrade ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Trade found') {
        return null;
      } else {
        console.error('Error in getTrade:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Trades records.
   * @returns An array of Trade records or null.
   */
  async getAll(): Promise<TradeType[] | null> {

      const GET_ALL_TRADE = gql`
      query getAllTrade {
        trades {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_TRADE });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.trades ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Trade found') {
        return null;
      } else {
        console.error('Error in getTrade:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Trade records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found Trade records or null.
   */
  async findMany(props: TradeType): Promise<TradeType[] | null> {

      const FIND_MANY_TRADE = gql`
      query findManyTrade($where: TradeWhereInput!) {
        trades(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
  assetId: props.assetId !== undefined ? {
    equals: props.assetId 
  } : undefined,
  qty: props.qty !== undefined ? props.qty : undefined,
  price: props.price !== undefined ? props.price : undefined,
  total: props.total !== undefined ? props.total : undefined,
  optionType: props.optionType !== undefined ? props.optionType : undefined,
  signal: props.signal !== undefined ? props.signal : undefined,
  strategy: props.strategy !== undefined ? props.strategy : undefined,
  analysis: props.analysis !== undefined ? props.analysis : undefined,
  summary: props.summary !== undefined ? props.summary : undefined,
  confidence: props.confidence !== undefined ? props.confidence : undefined,
  timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  createdAt: props.createdAt !== undefined ? props.createdAt : undefined,
  updatedAt: props.updatedAt !== undefined ? props.updatedAt : undefined,
  status: props.status !== undefined ? props.status : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_TRADE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Trades) {
        return response.data.trades;
      } else {
       return [] as TradeType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Trade found') {
        return null;
      } else {
        console.error('Error in getTrade:', error);
        throw error;
      }
    }
  }
};
