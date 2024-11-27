
  
import { Order as OrderType } from './generated/typegraphql-prisma/models/Order';
import { ApolloError, gql } from '@apollo/client';
import { client } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Order model.
   */

  const selectionSet = `
    
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

  `;

  export const Order = {

    /**
     * Create a new Order record.
     * @param props - Properties for the new record.
     * @returns The created Order or null.
     */

    async create(props: OrderType): Promise<OrderType> {

    const CREATE_ONE_ORDER = gql`
        mutation createOneOrder($data: OrderCreateInput!) {
          createOneOrder(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            clientOrderId: props.clientOrderId !== undefined ? props.clientOrderId : undefined,
  qty: props.qty !== undefined ? props.qty : undefined,
  notional: props.notional !== undefined ? props.notional : undefined,
  side: props.side !== undefined ? props.side : undefined,
  type: props.type !== undefined ? props.type : undefined,
  orderClass: props.orderClass !== undefined ? props.orderClass : undefined,
  timeInForce: props.timeInForce !== undefined ? props.timeInForce : undefined,
  limitPrice: props.limitPrice !== undefined ? props.limitPrice : undefined,
  stopPrice: props.stopPrice !== undefined ? props.stopPrice : undefined,
  trailPrice: props.trailPrice !== undefined ? props.trailPrice : undefined,
  trailPercent: props.trailPercent !== undefined ? props.trailPercent : undefined,
  extendedHours: props.extendedHours !== undefined ? props.extendedHours : undefined,
  status: props.status !== undefined ? props.status : undefined,
  submittedAt: props.submittedAt !== undefined ? props.submittedAt : undefined,
  filledAt: props.filledAt !== undefined ? props.filledAt : undefined,
  filledQty: props.filledQty !== undefined ? props.filledQty : undefined,
  filledAvgPrice: props.filledAvgPrice !== undefined ? props.filledAvgPrice : undefined,
  cancelRequestedAt: props.cancelRequestedAt !== undefined ? props.cancelRequestedAt : undefined,
  canceledAt: props.canceledAt !== undefined ? props.canceledAt : undefined,
  fee: props.fee !== undefined ? props.fee : undefined,
  strikePrice: props.strikePrice !== undefined ? props.strikePrice : undefined,
  expirationDate: props.expirationDate !== undefined ? props.expirationDate : undefined,
  optionType: props.optionType !== undefined ? props.optionType : undefined,
  stopLossId: props.stopLossId !== undefined ? props.stopLossId : undefined,
  takeProfitId: props.takeProfitId !== undefined ? props.takeProfitId : undefined,
  stopLoss: props.stopLoss ? 
    typeof props.stopLoss === 'object' && Object.keys(props.stopLoss).length === 1 && Object.keys(props.stopLoss)[0] === 'id'
    ? { connect: {
        id: props.stopLoss.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.stopLoss.id !== undefined ? props.stopLoss.id : undefined,
        orderId: props.stopLoss.orderId !== undefined ? props.stopLoss.orderId : undefined,
      },
      create: {
        stopPrice: props.stopLoss.stopPrice !== undefined ? props.stopLoss.stopPrice : undefined,
        limitPrice: props.stopLoss.limitPrice !== undefined ? props.stopLoss.limitPrice : undefined,
      },
    }
  } : undefined,
  takeProfit: props.takeProfit ? 
    typeof props.takeProfit === 'object' && Object.keys(props.takeProfit).length === 1 && Object.keys(props.takeProfit)[0] === 'id'
    ? { connect: {
        id: props.takeProfit.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.takeProfit.id !== undefined ? props.takeProfit.id : undefined,
        orderId: props.takeProfit.orderId !== undefined ? props.takeProfit.orderId : undefined,
      },
      create: {
        limitPrice: props.takeProfit.limitPrice !== undefined ? props.takeProfit.limitPrice : undefined,
        stopPrice: props.takeProfit.stopPrice !== undefined ? props.takeProfit.stopPrice : undefined,
      },
    }
  } : undefined,
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
    trades: props.alpacaAccount.trades ? 
      Array.isArray(props.alpacaAccount.trades) && props.alpacaAccount.trades.length > 0 &&  props.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.trades.map((item: any) => ({
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
  action: props.action ? 
    typeof props.action === 'object' && Object.keys(props.action).length === 1 && Object.keys(props.action)[0] === 'id'
    ? { connect: {
        id: props.action.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.action.id !== undefined ? props.action.id : undefined,
        tradeId: props.action.tradeId !== undefined ? {
            equals: props.action.tradeId 
           } : undefined,
      },
      create: {
        sequence: props.action.sequence !== undefined ? props.action.sequence : undefined,
        type: props.action.type !== undefined ? props.action.type : undefined,
        note: props.action.note !== undefined ? props.action.note : undefined,
        status: props.action.status !== undefined ? props.action.status : undefined,
        fee: props.action.fee !== undefined ? props.action.fee : undefined,
    trade: props.action.trade ? 
      typeof props.action.trade === 'object' && Object.keys(props.action.trade).length === 1 && Object.keys(props.action.trade)[0] === 'id'
    ? { connect: {
          id: props.action.trade.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.action.trade.id !== undefined ? props.action.trade.id : undefined,
          alpacaAccountId: props.action.trade.alpacaAccountId !== undefined ? {
              equals: props.action.trade.alpacaAccountId 
             } : undefined,
          assetId: props.action.trade.assetId !== undefined ? {
              equals: props.action.trade.assetId 
             } : undefined,
        },
        create: {
          qty: props.action.trade.qty !== undefined ? props.action.trade.qty : undefined,
          price: props.action.trade.price !== undefined ? props.action.trade.price : undefined,
          total: props.action.trade.total !== undefined ? props.action.trade.total : undefined,
          optionType: props.action.trade.optionType !== undefined ? props.action.trade.optionType : undefined,
          signal: props.action.trade.signal !== undefined ? props.action.trade.signal : undefined,
          strategy: props.action.trade.strategy !== undefined ? props.action.trade.strategy : undefined,
          analysis: props.action.trade.analysis !== undefined ? props.action.trade.analysis : undefined,
          summary: props.action.trade.summary !== undefined ? props.action.trade.summary : undefined,
          confidence: props.action.trade.confidence !== undefined ? props.action.trade.confidence : undefined,
          timestamp: props.action.trade.timestamp !== undefined ? props.action.trade.timestamp : undefined,
          status: props.action.trade.status !== undefined ? props.action.trade.status : undefined,
      alpacaAccount: props.action.trade.alpacaAccount ? 
        typeof props.action.trade.alpacaAccount === 'object' && Object.keys(props.action.trade.alpacaAccount).length === 1 && Object.keys(props.action.trade.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: props.action.trade.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.action.trade.alpacaAccount.id !== undefined ? props.action.trade.alpacaAccount.id : undefined,
            userId: props.action.trade.alpacaAccount.userId !== undefined ? {
                equals: props.action.trade.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: props.action.trade.alpacaAccount.type !== undefined ? props.action.trade.alpacaAccount.type : undefined,
            APIKey: props.action.trade.alpacaAccount.APIKey !== undefined ? props.action.trade.alpacaAccount.APIKey : undefined,
            APISecret: props.action.trade.alpacaAccount.APISecret !== undefined ? props.action.trade.alpacaAccount.APISecret : undefined,
            configuration: props.action.trade.alpacaAccount.configuration !== undefined ? props.action.trade.alpacaAccount.configuration : undefined,
            marketOpen: props.action.trade.alpacaAccount.marketOpen !== undefined ? props.action.trade.alpacaAccount.marketOpen : undefined,
            minOrderSize: props.action.trade.alpacaAccount.minOrderSize !== undefined ? props.action.trade.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: props.action.trade.alpacaAccount.maxOrderSize !== undefined ? props.action.trade.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: props.action.trade.alpacaAccount.minPercentageChange !== undefined ? props.action.trade.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: props.action.trade.alpacaAccount.volumeThreshold !== undefined ? props.action.trade.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      asset: props.action.trade.asset ? 
        typeof props.action.trade.asset === 'object' && Object.keys(props.action.trade.asset).length === 1 && Object.keys(props.action.trade.asset)[0] === 'id'
    ? { connect: {
            id: props.action.trade.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.action.trade.asset.id !== undefined ? props.action.trade.asset.id : undefined,
            symbol: props.action.trade.asset.symbol !== undefined ? props.action.trade.asset.symbol : undefined,
            name: props.action.trade.asset.name !== undefined ? props.action.trade.asset.name : undefined,
          },
          create: {
            symbol: props.action.trade.asset.symbol !== undefined ? props.action.trade.asset.symbol : undefined,
            name: props.action.trade.asset.name !== undefined ? props.action.trade.asset.name : undefined,
            type: props.action.trade.asset.type !== undefined ? props.action.trade.asset.type : undefined,
            logoUrl: props.action.trade.asset.logoUrl !== undefined ? props.action.trade.asset.logoUrl : undefined,
            description: props.action.trade.asset.description !== undefined ? props.action.trade.asset.description : undefined,
            cik: props.action.trade.asset.cik !== undefined ? props.action.trade.asset.cik : undefined,
            exchange: props.action.trade.asset.exchange !== undefined ? props.action.trade.asset.exchange : undefined,
            currency: props.action.trade.asset.currency !== undefined ? props.action.trade.asset.currency : undefined,
            country: props.action.trade.asset.country !== undefined ? props.action.trade.asset.country : undefined,
            sector: props.action.trade.asset.sector !== undefined ? props.action.trade.asset.sector : undefined,
            industry: props.action.trade.asset.industry !== undefined ? props.action.trade.asset.industry : undefined,
            address: props.action.trade.asset.address !== undefined ? props.action.trade.asset.address : undefined,
            officialSite: props.action.trade.asset.officialSite !== undefined ? props.action.trade.asset.officialSite : undefined,
            fiscalYearEnd: props.action.trade.asset.fiscalYearEnd !== undefined ? props.action.trade.asset.fiscalYearEnd : undefined,
            latestQuarter: props.action.trade.asset.latestQuarter !== undefined ? props.action.trade.asset.latestQuarter : undefined,
            marketCapitalization: props.action.trade.asset.marketCapitalization !== undefined ? props.action.trade.asset.marketCapitalization : undefined,
            ebitda: props.action.trade.asset.ebitda !== undefined ? props.action.trade.asset.ebitda : undefined,
            peRatio: props.action.trade.asset.peRatio !== undefined ? props.action.trade.asset.peRatio : undefined,
            pegRatio: props.action.trade.asset.pegRatio !== undefined ? props.action.trade.asset.pegRatio : undefined,
            bookValue: props.action.trade.asset.bookValue !== undefined ? props.action.trade.asset.bookValue : undefined,
            dividendPerShare: props.action.trade.asset.dividendPerShare !== undefined ? props.action.trade.asset.dividendPerShare : undefined,
            dividendYield: props.action.trade.asset.dividendYield !== undefined ? props.action.trade.asset.dividendYield : undefined,
            eps: props.action.trade.asset.eps !== undefined ? props.action.trade.asset.eps : undefined,
            revenuePerShareTTM: props.action.trade.asset.revenuePerShareTTM !== undefined ? props.action.trade.asset.revenuePerShareTTM : undefined,
            profitMargin: props.action.trade.asset.profitMargin !== undefined ? props.action.trade.asset.profitMargin : undefined,
            operatingMarginTTM: props.action.trade.asset.operatingMarginTTM !== undefined ? props.action.trade.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: props.action.trade.asset.returnOnAssetsTTM !== undefined ? props.action.trade.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: props.action.trade.asset.returnOnEquityTTM !== undefined ? props.action.trade.asset.returnOnEquityTTM : undefined,
            revenueTTM: props.action.trade.asset.revenueTTM !== undefined ? props.action.trade.asset.revenueTTM : undefined,
            grossProfitTTM: props.action.trade.asset.grossProfitTTM !== undefined ? props.action.trade.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: props.action.trade.asset.dilutedEPSTTM !== undefined ? props.action.trade.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: props.action.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? props.action.trade.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: props.action.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? props.action.trade.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: props.action.trade.asset.analystTargetPrice !== undefined ? props.action.trade.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: props.action.trade.asset.analystRatingStrongBuy !== undefined ? props.action.trade.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: props.action.trade.asset.analystRatingBuy !== undefined ? props.action.trade.asset.analystRatingBuy : undefined,
            analystRatingHold: props.action.trade.asset.analystRatingHold !== undefined ? props.action.trade.asset.analystRatingHold : undefined,
            analystRatingSell: props.action.trade.asset.analystRatingSell !== undefined ? props.action.trade.asset.analystRatingSell : undefined,
            analystRatingStrongSell: props.action.trade.asset.analystRatingStrongSell !== undefined ? props.action.trade.asset.analystRatingStrongSell : undefined,
            trailingPE: props.action.trade.asset.trailingPE !== undefined ? props.action.trade.asset.trailingPE : undefined,
            forwardPE: props.action.trade.asset.forwardPE !== undefined ? props.action.trade.asset.forwardPE : undefined,
            priceToSalesRatioTTM: props.action.trade.asset.priceToSalesRatioTTM !== undefined ? props.action.trade.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: props.action.trade.asset.priceToBookRatio !== undefined ? props.action.trade.asset.priceToBookRatio : undefined,
            evToRevenue: props.action.trade.asset.evToRevenue !== undefined ? props.action.trade.asset.evToRevenue : undefined,
            evToEbitda: props.action.trade.asset.evToEbitda !== undefined ? props.action.trade.asset.evToEbitda : undefined,
            beta: props.action.trade.asset.beta !== undefined ? props.action.trade.asset.beta : undefined,
            week52High: props.action.trade.asset.week52High !== undefined ? props.action.trade.asset.week52High : undefined,
            week52Low: props.action.trade.asset.week52Low !== undefined ? props.action.trade.asset.week52Low : undefined,
            day50MovingAverage: props.action.trade.asset.day50MovingAverage !== undefined ? props.action.trade.asset.day50MovingAverage : undefined,
            day200MovingAverage: props.action.trade.asset.day200MovingAverage !== undefined ? props.action.trade.asset.day200MovingAverage : undefined,
            sharesOutstanding: props.action.trade.asset.sharesOutstanding !== undefined ? props.action.trade.asset.sharesOutstanding : undefined,
            dividendDate: props.action.trade.asset.dividendDate !== undefined ? props.action.trade.asset.dividendDate : undefined,
            exDividendDate: props.action.trade.asset.exDividendDate !== undefined ? props.action.trade.asset.exDividendDate : undefined,
            askPrice: props.action.trade.asset.askPrice !== undefined ? props.action.trade.asset.askPrice : undefined,
            bidPrice: props.action.trade.asset.bidPrice !== undefined ? props.action.trade.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
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
    trades: props.asset.trades ? 
      Array.isArray(props.asset.trades) && props.asset.trades.length > 0 &&  props.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.trades.map((item: any) => ({
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

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_ORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneOrder) {
        return response.data.createOneOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneOrder:', error);
      throw error;
    }
  },

  /**
   * Create multiple Order records.
   * @param props - Array of Order objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: OrderType[]): Promise<{ count: number } | null> {

      const CREATE_MANY_ORDER = gql`
      mutation createManyOrder($data: [OrderCreateManyInput!]!) {
        createManyOrder(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  clientOrderId: prop.clientOrderId !== undefined ? prop.clientOrderId : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? prop.alpacaAccountId : undefined,
  assetId: prop.assetId !== undefined ? prop.assetId : undefined,
  qty: prop.qty !== undefined ? prop.qty : undefined,
  notional: prop.notional !== undefined ? prop.notional : undefined,
  side: prop.side !== undefined ? prop.side : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  orderClass: prop.orderClass !== undefined ? prop.orderClass : undefined,
  timeInForce: prop.timeInForce !== undefined ? prop.timeInForce : undefined,
  limitPrice: prop.limitPrice !== undefined ? prop.limitPrice : undefined,
  stopPrice: prop.stopPrice !== undefined ? prop.stopPrice : undefined,
  trailPrice: prop.trailPrice !== undefined ? prop.trailPrice : undefined,
  trailPercent: prop.trailPercent !== undefined ? prop.trailPercent : undefined,
  extendedHours: prop.extendedHours !== undefined ? prop.extendedHours : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  submittedAt: prop.submittedAt !== undefined ? prop.submittedAt : undefined,
  filledAt: prop.filledAt !== undefined ? prop.filledAt : undefined,
  filledQty: prop.filledQty !== undefined ? prop.filledQty : undefined,
  filledAvgPrice: prop.filledAvgPrice !== undefined ? prop.filledAvgPrice : undefined,
  cancelRequestedAt: prop.cancelRequestedAt !== undefined ? prop.cancelRequestedAt : undefined,
  canceledAt: prop.canceledAt !== undefined ? prop.canceledAt : undefined,
  actionId: prop.actionId !== undefined ? prop.actionId : undefined,
  fee: prop.fee !== undefined ? prop.fee : undefined,
  strikePrice: prop.strikePrice !== undefined ? prop.strikePrice : undefined,
  expirationDate: prop.expirationDate !== undefined ? prop.expirationDate : undefined,
  optionType: prop.optionType !== undefined ? prop.optionType : undefined,
  stopLossId: prop.stopLossId !== undefined ? prop.stopLossId : undefined,
  takeProfitId: prop.takeProfitId !== undefined ? prop.takeProfitId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_ORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyOrder) {
        return response.data.createManyOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyOrder:', error);
      throw error;
    }
  },

  /**
   * Update a single Order record.
   * @param props - Properties to update.
   * @returns The updated Order or null.
   */
  async update(props: OrderType): Promise<OrderType> {

      const UPDATE_ONE_ORDER = gql`
      mutation updateOneOrder($data: OrderUpdateInput!, $where: OrderWhereUniqueInput!) {
        updateOneOrder(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  clientOrderId: props.clientOrderId !== undefined ? props.clientOrderId : undefined,
  actionId: props.actionId !== undefined ? props.actionId : undefined,
  stopLossId: props.stopLossId !== undefined ? props.stopLossId : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
  assetId: props.assetId !== undefined ? {
    equals: props.assetId 
  } : undefined,
  side: props.side !== undefined ? props.side : undefined,
  type: props.type !== undefined ? props.type : undefined,
  orderClass: props.orderClass !== undefined ? props.orderClass : undefined,
  timeInForce: props.timeInForce !== undefined ? props.timeInForce : undefined,
  status: props.status !== undefined ? props.status : undefined,
  createdAt: props.createdAt !== undefined ? props.createdAt : undefined,
  updatedAt: props.updatedAt !== undefined ? props.updatedAt : undefined,
  submittedAt: props.submittedAt !== undefined ? props.submittedAt : undefined,
  filledAt: props.filledAt !== undefined ? props.filledAt : undefined,
  cancelRequestedAt: props.cancelRequestedAt !== undefined ? props.cancelRequestedAt : undefined,
  canceledAt: props.canceledAt !== undefined ? props.canceledAt : undefined,
  expirationDate: props.expirationDate !== undefined ? props.expirationDate : undefined,
  optionType: props.optionType !== undefined ? props.optionType : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  clientOrderId: props.clientOrderId !== undefined ? {
            set: props.clientOrderId 
           } : undefined,
  qty: props.qty !== undefined ? {
            set: props.qty 
           } : undefined,
  notional: props.notional !== undefined ? {
            set: props.notional 
           } : undefined,
  side: props.side !== undefined ? {
            set: props.side 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  orderClass: props.orderClass !== undefined ? {
            set: props.orderClass 
           } : undefined,
  timeInForce: props.timeInForce !== undefined ? {
            set: props.timeInForce 
           } : undefined,
  limitPrice: props.limitPrice !== undefined ? {
            set: props.limitPrice 
           } : undefined,
  stopPrice: props.stopPrice !== undefined ? {
            set: props.stopPrice 
           } : undefined,
  trailPrice: props.trailPrice !== undefined ? {
            set: props.trailPrice 
           } : undefined,
  trailPercent: props.trailPercent !== undefined ? {
            set: props.trailPercent 
           } : undefined,
  extendedHours: props.extendedHours !== undefined ? {
            set: props.extendedHours 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  submittedAt: props.submittedAt !== undefined ? {
            set: props.submittedAt 
           } : undefined,
  filledAt: props.filledAt !== undefined ? {
            set: props.filledAt 
           } : undefined,
  filledQty: props.filledQty !== undefined ? {
            set: props.filledQty 
           } : undefined,
  filledAvgPrice: props.filledAvgPrice !== undefined ? {
            set: props.filledAvgPrice 
           } : undefined,
  cancelRequestedAt: props.cancelRequestedAt !== undefined ? {
            set: props.cancelRequestedAt 
           } : undefined,
  canceledAt: props.canceledAt !== undefined ? {
            set: props.canceledAt 
           } : undefined,
  fee: props.fee !== undefined ? {
            set: props.fee 
           } : undefined,
  strikePrice: props.strikePrice !== undefined ? {
            set: props.strikePrice 
           } : undefined,
  expirationDate: props.expirationDate !== undefined ? {
            set: props.expirationDate 
           } : undefined,
  optionType: props.optionType !== undefined ? {
            set: props.optionType 
           } : undefined,
  stopLossId: props.stopLossId !== undefined ? {
            set: props.stopLossId 
           } : undefined,
  takeProfitId: props.takeProfitId !== undefined ? {
            set: props.takeProfitId 
           } : undefined,
  stopLoss: props.stopLoss ? {
    upsert: {
      where: {
        id: props.stopLoss.id !== undefined ? {
            equals: props.stopLoss.id 
           } : undefined,
        orderId: props.stopLoss.orderId !== undefined ? {
            equals: props.stopLoss.orderId 
           } : undefined,
      },
      update: {
        id: props.stopLoss.id !== undefined ? {
            set: props.stopLoss.id  
           } : undefined,
        stopPrice: props.stopLoss.stopPrice !== undefined ? {
            set: props.stopLoss.stopPrice  
           } : undefined,
        limitPrice: props.stopLoss.limitPrice !== undefined ? {
            set: props.stopLoss.limitPrice  
           } : undefined,
      },
      create: {
        stopPrice: props.stopLoss.stopPrice !== undefined ? props.stopLoss.stopPrice : undefined,
        limitPrice: props.stopLoss.limitPrice !== undefined ? props.stopLoss.limitPrice : undefined,
      },
    }
  } : undefined,
  takeProfit: props.takeProfit ? {
    upsert: {
      where: {
        id: props.takeProfit.id !== undefined ? {
            equals: props.takeProfit.id 
           } : undefined,
        orderId: props.takeProfit.orderId !== undefined ? {
            equals: props.takeProfit.orderId 
           } : undefined,
      },
      update: {
        id: props.takeProfit.id !== undefined ? {
            set: props.takeProfit.id  
           } : undefined,
        limitPrice: props.takeProfit.limitPrice !== undefined ? {
            set: props.takeProfit.limitPrice  
           } : undefined,
        stopPrice: props.takeProfit.stopPrice !== undefined ? {
            set: props.takeProfit.stopPrice  
           } : undefined,
      },
      create: {
        limitPrice: props.takeProfit.limitPrice !== undefined ? props.takeProfit.limitPrice : undefined,
        stopPrice: props.takeProfit.stopPrice !== undefined ? props.takeProfit.stopPrice : undefined,
      },
    }
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
          customerId: props.alpacaAccount.user.customerId !== undefined ? {
              equals: props.alpacaAccount.user.customerId 
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
    trades: props.alpacaAccount.trades ? {
      upsert: props.alpacaAccount.trades.map((item: any) => ({
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
    trades: props.alpacaAccount.trades ? 
      Array.isArray(props.alpacaAccount.trades) && props.alpacaAccount.trades.length > 0 &&  props.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.alpacaAccount.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.alpacaAccount.trades.map((item: any) => ({
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
  action: props.action ? {
    upsert: {
      where: {
        id: props.action.id !== undefined ? {
            equals: props.action.id 
           } : undefined,
        tradeId: props.action.tradeId !== undefined ? {
            equals: props.action.tradeId 
           } : undefined,
      },
      update: {
        id: props.action.id !== undefined ? {
            set: props.action.id  
           } : undefined,
        sequence: props.action.sequence !== undefined ? {
            set: props.action.sequence  
           } : undefined,
        type: props.action.type !== undefined ? {
            set: props.action.type  
           } : undefined,
        note: props.action.note !== undefined ? {
            set: props.action.note  
           } : undefined,
        status: props.action.status !== undefined ? {
            set: props.action.status  
           } : undefined,
        fee: props.action.fee !== undefined ? {
            set: props.action.fee  
           } : undefined,
    trade: props.action.trade ? {
      upsert: {
        where: {
          id: props.action.trade.id !== undefined ? {
              equals: props.action.trade.id 
             } : undefined,
          alpacaAccountId: props.action.trade.alpacaAccountId !== undefined ? {
              equals: props.action.trade.alpacaAccountId 
             } : undefined,
          assetId: props.action.trade.assetId !== undefined ? {
              equals: props.action.trade.assetId 
             } : undefined,
        },
        update: {
          id: props.action.trade.id !== undefined ? {
              set: props.action.trade.id  
             } : undefined,
          qty: props.action.trade.qty !== undefined ? {
              set: props.action.trade.qty  
             } : undefined,
          price: props.action.trade.price !== undefined ? {
              set: props.action.trade.price  
             } : undefined,
          total: props.action.trade.total !== undefined ? {
              set: props.action.trade.total  
             } : undefined,
          optionType: props.action.trade.optionType !== undefined ? {
              set: props.action.trade.optionType  
             } : undefined,
          signal: props.action.trade.signal !== undefined ? {
              set: props.action.trade.signal  
             } : undefined,
          strategy: props.action.trade.strategy !== undefined ? {
              set: props.action.trade.strategy  
             } : undefined,
          analysis: props.action.trade.analysis !== undefined ? {
              set: props.action.trade.analysis  
             } : undefined,
          summary: props.action.trade.summary !== undefined ? {
              set: props.action.trade.summary  
             } : undefined,
          confidence: props.action.trade.confidence !== undefined ? {
              set: props.action.trade.confidence  
             } : undefined,
          timestamp: props.action.trade.timestamp !== undefined ? {
              set: props.action.trade.timestamp  
             } : undefined,
          status: props.action.trade.status !== undefined ? {
              set: props.action.trade.status  
             } : undefined,
      alpacaAccount: props.action.trade.alpacaAccount ? {
        upsert: {
          where: {
            id: props.action.trade.alpacaAccount.id !== undefined ? {
                equals: props.action.trade.alpacaAccount.id 
               } : undefined,
            userId: props.action.trade.alpacaAccount.userId !== undefined ? {
                equals: props.action.trade.alpacaAccount.userId 
               } : undefined,
          },
          update: {
            id: props.action.trade.alpacaAccount.id !== undefined ? {
                set: props.action.trade.alpacaAccount.id  
               } : undefined,
            type: props.action.trade.alpacaAccount.type !== undefined ? {
                set: props.action.trade.alpacaAccount.type  
               } : undefined,
            APIKey: props.action.trade.alpacaAccount.APIKey !== undefined ? {
                set: props.action.trade.alpacaAccount.APIKey  
               } : undefined,
            APISecret: props.action.trade.alpacaAccount.APISecret !== undefined ? {
                set: props.action.trade.alpacaAccount.APISecret  
               } : undefined,
            configuration: props.action.trade.alpacaAccount.configuration !== undefined ? {
                set: props.action.trade.alpacaAccount.configuration  
               } : undefined,
            marketOpen: props.action.trade.alpacaAccount.marketOpen !== undefined ? {
                set: props.action.trade.alpacaAccount.marketOpen  
               } : undefined,
            minOrderSize: props.action.trade.alpacaAccount.minOrderSize !== undefined ? {
                set: props.action.trade.alpacaAccount.minOrderSize  
               } : undefined,
            maxOrderSize: props.action.trade.alpacaAccount.maxOrderSize !== undefined ? {
                set: props.action.trade.alpacaAccount.maxOrderSize  
               } : undefined,
            minPercentageChange: props.action.trade.alpacaAccount.minPercentageChange !== undefined ? {
                set: props.action.trade.alpacaAccount.minPercentageChange  
               } : undefined,
            volumeThreshold: props.action.trade.alpacaAccount.volumeThreshold !== undefined ? {
                set: props.action.trade.alpacaAccount.volumeThreshold  
               } : undefined,
          },
          create: {
            type: props.action.trade.alpacaAccount.type !== undefined ? props.action.trade.alpacaAccount.type : undefined,
            APIKey: props.action.trade.alpacaAccount.APIKey !== undefined ? props.action.trade.alpacaAccount.APIKey : undefined,
            APISecret: props.action.trade.alpacaAccount.APISecret !== undefined ? props.action.trade.alpacaAccount.APISecret : undefined,
            configuration: props.action.trade.alpacaAccount.configuration !== undefined ? props.action.trade.alpacaAccount.configuration : undefined,
            marketOpen: props.action.trade.alpacaAccount.marketOpen !== undefined ? props.action.trade.alpacaAccount.marketOpen : undefined,
            minOrderSize: props.action.trade.alpacaAccount.minOrderSize !== undefined ? props.action.trade.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: props.action.trade.alpacaAccount.maxOrderSize !== undefined ? props.action.trade.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: props.action.trade.alpacaAccount.minPercentageChange !== undefined ? props.action.trade.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: props.action.trade.alpacaAccount.volumeThreshold !== undefined ? props.action.trade.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      asset: props.action.trade.asset ? {
        upsert: {
          where: {
            id: props.action.trade.asset.id !== undefined ? {
                equals: props.action.trade.asset.id 
               } : undefined,
            symbol: props.action.trade.asset.symbol !== undefined ? {
                equals: props.action.trade.asset.symbol 
               } : undefined,
            name: props.action.trade.asset.name !== undefined ? {
                equals: props.action.trade.asset.name 
               } : undefined,
          },
          update: {
            id: props.action.trade.asset.id !== undefined ? {
                set: props.action.trade.asset.id  
               } : undefined,
            symbol: props.action.trade.asset.symbol !== undefined ? {
                set: props.action.trade.asset.symbol  
               } : undefined,
            name: props.action.trade.asset.name !== undefined ? {
                set: props.action.trade.asset.name  
               } : undefined,
            type: props.action.trade.asset.type !== undefined ? {
                set: props.action.trade.asset.type  
               } : undefined,
            logoUrl: props.action.trade.asset.logoUrl !== undefined ? {
                set: props.action.trade.asset.logoUrl  
               } : undefined,
            description: props.action.trade.asset.description !== undefined ? {
                set: props.action.trade.asset.description  
               } : undefined,
            cik: props.action.trade.asset.cik !== undefined ? {
                set: props.action.trade.asset.cik  
               } : undefined,
            exchange: props.action.trade.asset.exchange !== undefined ? {
                set: props.action.trade.asset.exchange  
               } : undefined,
            currency: props.action.trade.asset.currency !== undefined ? {
                set: props.action.trade.asset.currency  
               } : undefined,
            country: props.action.trade.asset.country !== undefined ? {
                set: props.action.trade.asset.country  
               } : undefined,
            sector: props.action.trade.asset.sector !== undefined ? {
                set: props.action.trade.asset.sector  
               } : undefined,
            industry: props.action.trade.asset.industry !== undefined ? {
                set: props.action.trade.asset.industry  
               } : undefined,
            address: props.action.trade.asset.address !== undefined ? {
                set: props.action.trade.asset.address  
               } : undefined,
            officialSite: props.action.trade.asset.officialSite !== undefined ? {
                set: props.action.trade.asset.officialSite  
               } : undefined,
            fiscalYearEnd: props.action.trade.asset.fiscalYearEnd !== undefined ? {
                set: props.action.trade.asset.fiscalYearEnd  
               } : undefined,
            latestQuarter: props.action.trade.asset.latestQuarter !== undefined ? {
                set: props.action.trade.asset.latestQuarter  
               } : undefined,
            marketCapitalization: props.action.trade.asset.marketCapitalization !== undefined ? {
                set: props.action.trade.asset.marketCapitalization  
               } : undefined,
            ebitda: props.action.trade.asset.ebitda !== undefined ? {
                set: props.action.trade.asset.ebitda  
               } : undefined,
            peRatio: props.action.trade.asset.peRatio !== undefined ? {
                set: props.action.trade.asset.peRatio  
               } : undefined,
            pegRatio: props.action.trade.asset.pegRatio !== undefined ? {
                set: props.action.trade.asset.pegRatio  
               } : undefined,
            bookValue: props.action.trade.asset.bookValue !== undefined ? {
                set: props.action.trade.asset.bookValue  
               } : undefined,
            dividendPerShare: props.action.trade.asset.dividendPerShare !== undefined ? {
                set: props.action.trade.asset.dividendPerShare  
               } : undefined,
            dividendYield: props.action.trade.asset.dividendYield !== undefined ? {
                set: props.action.trade.asset.dividendYield  
               } : undefined,
            eps: props.action.trade.asset.eps !== undefined ? {
                set: props.action.trade.asset.eps  
               } : undefined,
            revenuePerShareTTM: props.action.trade.asset.revenuePerShareTTM !== undefined ? {
                set: props.action.trade.asset.revenuePerShareTTM  
               } : undefined,
            profitMargin: props.action.trade.asset.profitMargin !== undefined ? {
                set: props.action.trade.asset.profitMargin  
               } : undefined,
            operatingMarginTTM: props.action.trade.asset.operatingMarginTTM !== undefined ? {
                set: props.action.trade.asset.operatingMarginTTM  
               } : undefined,
            returnOnAssetsTTM: props.action.trade.asset.returnOnAssetsTTM !== undefined ? {
                set: props.action.trade.asset.returnOnAssetsTTM  
               } : undefined,
            returnOnEquityTTM: props.action.trade.asset.returnOnEquityTTM !== undefined ? {
                set: props.action.trade.asset.returnOnEquityTTM  
               } : undefined,
            revenueTTM: props.action.trade.asset.revenueTTM !== undefined ? {
                set: props.action.trade.asset.revenueTTM  
               } : undefined,
            grossProfitTTM: props.action.trade.asset.grossProfitTTM !== undefined ? {
                set: props.action.trade.asset.grossProfitTTM  
               } : undefined,
            dilutedEPSTTM: props.action.trade.asset.dilutedEPSTTM !== undefined ? {
                set: props.action.trade.asset.dilutedEPSTTM  
               } : undefined,
            quarterlyEarningsGrowthYOY: props.action.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: props.action.trade.asset.quarterlyEarningsGrowthYOY  
               } : undefined,
            quarterlyRevenueGrowthYOY: props.action.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: props.action.trade.asset.quarterlyRevenueGrowthYOY  
               } : undefined,
            analystTargetPrice: props.action.trade.asset.analystTargetPrice !== undefined ? {
                set: props.action.trade.asset.analystTargetPrice  
               } : undefined,
            analystRatingStrongBuy: props.action.trade.asset.analystRatingStrongBuy !== undefined ? {
                set: props.action.trade.asset.analystRatingStrongBuy  
               } : undefined,
            analystRatingBuy: props.action.trade.asset.analystRatingBuy !== undefined ? {
                set: props.action.trade.asset.analystRatingBuy  
               } : undefined,
            analystRatingHold: props.action.trade.asset.analystRatingHold !== undefined ? {
                set: props.action.trade.asset.analystRatingHold  
               } : undefined,
            analystRatingSell: props.action.trade.asset.analystRatingSell !== undefined ? {
                set: props.action.trade.asset.analystRatingSell  
               } : undefined,
            analystRatingStrongSell: props.action.trade.asset.analystRatingStrongSell !== undefined ? {
                set: props.action.trade.asset.analystRatingStrongSell  
               } : undefined,
            trailingPE: props.action.trade.asset.trailingPE !== undefined ? {
                set: props.action.trade.asset.trailingPE  
               } : undefined,
            forwardPE: props.action.trade.asset.forwardPE !== undefined ? {
                set: props.action.trade.asset.forwardPE  
               } : undefined,
            priceToSalesRatioTTM: props.action.trade.asset.priceToSalesRatioTTM !== undefined ? {
                set: props.action.trade.asset.priceToSalesRatioTTM  
               } : undefined,
            priceToBookRatio: props.action.trade.asset.priceToBookRatio !== undefined ? {
                set: props.action.trade.asset.priceToBookRatio  
               } : undefined,
            evToRevenue: props.action.trade.asset.evToRevenue !== undefined ? {
                set: props.action.trade.asset.evToRevenue  
               } : undefined,
            evToEbitda: props.action.trade.asset.evToEbitda !== undefined ? {
                set: props.action.trade.asset.evToEbitda  
               } : undefined,
            beta: props.action.trade.asset.beta !== undefined ? {
                set: props.action.trade.asset.beta  
               } : undefined,
            week52High: props.action.trade.asset.week52High !== undefined ? {
                set: props.action.trade.asset.week52High  
               } : undefined,
            week52Low: props.action.trade.asset.week52Low !== undefined ? {
                set: props.action.trade.asset.week52Low  
               } : undefined,
            day50MovingAverage: props.action.trade.asset.day50MovingAverage !== undefined ? {
                set: props.action.trade.asset.day50MovingAverage  
               } : undefined,
            day200MovingAverage: props.action.trade.asset.day200MovingAverage !== undefined ? {
                set: props.action.trade.asset.day200MovingAverage  
               } : undefined,
            sharesOutstanding: props.action.trade.asset.sharesOutstanding !== undefined ? {
                set: props.action.trade.asset.sharesOutstanding  
               } : undefined,
            dividendDate: props.action.trade.asset.dividendDate !== undefined ? {
                set: props.action.trade.asset.dividendDate  
               } : undefined,
            exDividendDate: props.action.trade.asset.exDividendDate !== undefined ? {
                set: props.action.trade.asset.exDividendDate  
               } : undefined,
            askPrice: props.action.trade.asset.askPrice !== undefined ? {
                set: props.action.trade.asset.askPrice  
               } : undefined,
            bidPrice: props.action.trade.asset.bidPrice !== undefined ? {
                set: props.action.trade.asset.bidPrice  
               } : undefined,
          },
          create: {
            symbol: props.action.trade.asset.symbol !== undefined ? props.action.trade.asset.symbol : undefined,
            name: props.action.trade.asset.name !== undefined ? props.action.trade.asset.name : undefined,
            type: props.action.trade.asset.type !== undefined ? props.action.trade.asset.type : undefined,
            logoUrl: props.action.trade.asset.logoUrl !== undefined ? props.action.trade.asset.logoUrl : undefined,
            description: props.action.trade.asset.description !== undefined ? props.action.trade.asset.description : undefined,
            cik: props.action.trade.asset.cik !== undefined ? props.action.trade.asset.cik : undefined,
            exchange: props.action.trade.asset.exchange !== undefined ? props.action.trade.asset.exchange : undefined,
            currency: props.action.trade.asset.currency !== undefined ? props.action.trade.asset.currency : undefined,
            country: props.action.trade.asset.country !== undefined ? props.action.trade.asset.country : undefined,
            sector: props.action.trade.asset.sector !== undefined ? props.action.trade.asset.sector : undefined,
            industry: props.action.trade.asset.industry !== undefined ? props.action.trade.asset.industry : undefined,
            address: props.action.trade.asset.address !== undefined ? props.action.trade.asset.address : undefined,
            officialSite: props.action.trade.asset.officialSite !== undefined ? props.action.trade.asset.officialSite : undefined,
            fiscalYearEnd: props.action.trade.asset.fiscalYearEnd !== undefined ? props.action.trade.asset.fiscalYearEnd : undefined,
            latestQuarter: props.action.trade.asset.latestQuarter !== undefined ? props.action.trade.asset.latestQuarter : undefined,
            marketCapitalization: props.action.trade.asset.marketCapitalization !== undefined ? props.action.trade.asset.marketCapitalization : undefined,
            ebitda: props.action.trade.asset.ebitda !== undefined ? props.action.trade.asset.ebitda : undefined,
            peRatio: props.action.trade.asset.peRatio !== undefined ? props.action.trade.asset.peRatio : undefined,
            pegRatio: props.action.trade.asset.pegRatio !== undefined ? props.action.trade.asset.pegRatio : undefined,
            bookValue: props.action.trade.asset.bookValue !== undefined ? props.action.trade.asset.bookValue : undefined,
            dividendPerShare: props.action.trade.asset.dividendPerShare !== undefined ? props.action.trade.asset.dividendPerShare : undefined,
            dividendYield: props.action.trade.asset.dividendYield !== undefined ? props.action.trade.asset.dividendYield : undefined,
            eps: props.action.trade.asset.eps !== undefined ? props.action.trade.asset.eps : undefined,
            revenuePerShareTTM: props.action.trade.asset.revenuePerShareTTM !== undefined ? props.action.trade.asset.revenuePerShareTTM : undefined,
            profitMargin: props.action.trade.asset.profitMargin !== undefined ? props.action.trade.asset.profitMargin : undefined,
            operatingMarginTTM: props.action.trade.asset.operatingMarginTTM !== undefined ? props.action.trade.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: props.action.trade.asset.returnOnAssetsTTM !== undefined ? props.action.trade.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: props.action.trade.asset.returnOnEquityTTM !== undefined ? props.action.trade.asset.returnOnEquityTTM : undefined,
            revenueTTM: props.action.trade.asset.revenueTTM !== undefined ? props.action.trade.asset.revenueTTM : undefined,
            grossProfitTTM: props.action.trade.asset.grossProfitTTM !== undefined ? props.action.trade.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: props.action.trade.asset.dilutedEPSTTM !== undefined ? props.action.trade.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: props.action.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? props.action.trade.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: props.action.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? props.action.trade.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: props.action.trade.asset.analystTargetPrice !== undefined ? props.action.trade.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: props.action.trade.asset.analystRatingStrongBuy !== undefined ? props.action.trade.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: props.action.trade.asset.analystRatingBuy !== undefined ? props.action.trade.asset.analystRatingBuy : undefined,
            analystRatingHold: props.action.trade.asset.analystRatingHold !== undefined ? props.action.trade.asset.analystRatingHold : undefined,
            analystRatingSell: props.action.trade.asset.analystRatingSell !== undefined ? props.action.trade.asset.analystRatingSell : undefined,
            analystRatingStrongSell: props.action.trade.asset.analystRatingStrongSell !== undefined ? props.action.trade.asset.analystRatingStrongSell : undefined,
            trailingPE: props.action.trade.asset.trailingPE !== undefined ? props.action.trade.asset.trailingPE : undefined,
            forwardPE: props.action.trade.asset.forwardPE !== undefined ? props.action.trade.asset.forwardPE : undefined,
            priceToSalesRatioTTM: props.action.trade.asset.priceToSalesRatioTTM !== undefined ? props.action.trade.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: props.action.trade.asset.priceToBookRatio !== undefined ? props.action.trade.asset.priceToBookRatio : undefined,
            evToRevenue: props.action.trade.asset.evToRevenue !== undefined ? props.action.trade.asset.evToRevenue : undefined,
            evToEbitda: props.action.trade.asset.evToEbitda !== undefined ? props.action.trade.asset.evToEbitda : undefined,
            beta: props.action.trade.asset.beta !== undefined ? props.action.trade.asset.beta : undefined,
            week52High: props.action.trade.asset.week52High !== undefined ? props.action.trade.asset.week52High : undefined,
            week52Low: props.action.trade.asset.week52Low !== undefined ? props.action.trade.asset.week52Low : undefined,
            day50MovingAverage: props.action.trade.asset.day50MovingAverage !== undefined ? props.action.trade.asset.day50MovingAverage : undefined,
            day200MovingAverage: props.action.trade.asset.day200MovingAverage !== undefined ? props.action.trade.asset.day200MovingAverage : undefined,
            sharesOutstanding: props.action.trade.asset.sharesOutstanding !== undefined ? props.action.trade.asset.sharesOutstanding : undefined,
            dividendDate: props.action.trade.asset.dividendDate !== undefined ? props.action.trade.asset.dividendDate : undefined,
            exDividendDate: props.action.trade.asset.exDividendDate !== undefined ? props.action.trade.asset.exDividendDate : undefined,
            askPrice: props.action.trade.asset.askPrice !== undefined ? props.action.trade.asset.askPrice : undefined,
            bidPrice: props.action.trade.asset.bidPrice !== undefined ? props.action.trade.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
        create: {
          qty: props.action.trade.qty !== undefined ? props.action.trade.qty : undefined,
          price: props.action.trade.price !== undefined ? props.action.trade.price : undefined,
          total: props.action.trade.total !== undefined ? props.action.trade.total : undefined,
          optionType: props.action.trade.optionType !== undefined ? props.action.trade.optionType : undefined,
          signal: props.action.trade.signal !== undefined ? props.action.trade.signal : undefined,
          strategy: props.action.trade.strategy !== undefined ? props.action.trade.strategy : undefined,
          analysis: props.action.trade.analysis !== undefined ? props.action.trade.analysis : undefined,
          summary: props.action.trade.summary !== undefined ? props.action.trade.summary : undefined,
          confidence: props.action.trade.confidence !== undefined ? props.action.trade.confidence : undefined,
          timestamp: props.action.trade.timestamp !== undefined ? props.action.trade.timestamp : undefined,
          status: props.action.trade.status !== undefined ? props.action.trade.status : undefined,
      alpacaAccount: props.action.trade.alpacaAccount ? 
        typeof props.action.trade.alpacaAccount === 'object' && Object.keys(props.action.trade.alpacaAccount).length === 1 && Object.keys(props.action.trade.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: props.action.trade.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.action.trade.alpacaAccount.id !== undefined ? props.action.trade.alpacaAccount.id : undefined,
            userId: props.action.trade.alpacaAccount.userId !== undefined ? {
                equals: props.action.trade.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: props.action.trade.alpacaAccount.type !== undefined ? props.action.trade.alpacaAccount.type : undefined,
            APIKey: props.action.trade.alpacaAccount.APIKey !== undefined ? props.action.trade.alpacaAccount.APIKey : undefined,
            APISecret: props.action.trade.alpacaAccount.APISecret !== undefined ? props.action.trade.alpacaAccount.APISecret : undefined,
            configuration: props.action.trade.alpacaAccount.configuration !== undefined ? props.action.trade.alpacaAccount.configuration : undefined,
            marketOpen: props.action.trade.alpacaAccount.marketOpen !== undefined ? props.action.trade.alpacaAccount.marketOpen : undefined,
            minOrderSize: props.action.trade.alpacaAccount.minOrderSize !== undefined ? props.action.trade.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: props.action.trade.alpacaAccount.maxOrderSize !== undefined ? props.action.trade.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: props.action.trade.alpacaAccount.minPercentageChange !== undefined ? props.action.trade.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: props.action.trade.alpacaAccount.volumeThreshold !== undefined ? props.action.trade.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      asset: props.action.trade.asset ? 
        typeof props.action.trade.asset === 'object' && Object.keys(props.action.trade.asset).length === 1 && Object.keys(props.action.trade.asset)[0] === 'id'
    ? { connect: {
            id: props.action.trade.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.action.trade.asset.id !== undefined ? props.action.trade.asset.id : undefined,
            symbol: props.action.trade.asset.symbol !== undefined ? props.action.trade.asset.symbol : undefined,
            name: props.action.trade.asset.name !== undefined ? props.action.trade.asset.name : undefined,
          },
          create: {
            symbol: props.action.trade.asset.symbol !== undefined ? props.action.trade.asset.symbol : undefined,
            name: props.action.trade.asset.name !== undefined ? props.action.trade.asset.name : undefined,
            type: props.action.trade.asset.type !== undefined ? props.action.trade.asset.type : undefined,
            logoUrl: props.action.trade.asset.logoUrl !== undefined ? props.action.trade.asset.logoUrl : undefined,
            description: props.action.trade.asset.description !== undefined ? props.action.trade.asset.description : undefined,
            cik: props.action.trade.asset.cik !== undefined ? props.action.trade.asset.cik : undefined,
            exchange: props.action.trade.asset.exchange !== undefined ? props.action.trade.asset.exchange : undefined,
            currency: props.action.trade.asset.currency !== undefined ? props.action.trade.asset.currency : undefined,
            country: props.action.trade.asset.country !== undefined ? props.action.trade.asset.country : undefined,
            sector: props.action.trade.asset.sector !== undefined ? props.action.trade.asset.sector : undefined,
            industry: props.action.trade.asset.industry !== undefined ? props.action.trade.asset.industry : undefined,
            address: props.action.trade.asset.address !== undefined ? props.action.trade.asset.address : undefined,
            officialSite: props.action.trade.asset.officialSite !== undefined ? props.action.trade.asset.officialSite : undefined,
            fiscalYearEnd: props.action.trade.asset.fiscalYearEnd !== undefined ? props.action.trade.asset.fiscalYearEnd : undefined,
            latestQuarter: props.action.trade.asset.latestQuarter !== undefined ? props.action.trade.asset.latestQuarter : undefined,
            marketCapitalization: props.action.trade.asset.marketCapitalization !== undefined ? props.action.trade.asset.marketCapitalization : undefined,
            ebitda: props.action.trade.asset.ebitda !== undefined ? props.action.trade.asset.ebitda : undefined,
            peRatio: props.action.trade.asset.peRatio !== undefined ? props.action.trade.asset.peRatio : undefined,
            pegRatio: props.action.trade.asset.pegRatio !== undefined ? props.action.trade.asset.pegRatio : undefined,
            bookValue: props.action.trade.asset.bookValue !== undefined ? props.action.trade.asset.bookValue : undefined,
            dividendPerShare: props.action.trade.asset.dividendPerShare !== undefined ? props.action.trade.asset.dividendPerShare : undefined,
            dividendYield: props.action.trade.asset.dividendYield !== undefined ? props.action.trade.asset.dividendYield : undefined,
            eps: props.action.trade.asset.eps !== undefined ? props.action.trade.asset.eps : undefined,
            revenuePerShareTTM: props.action.trade.asset.revenuePerShareTTM !== undefined ? props.action.trade.asset.revenuePerShareTTM : undefined,
            profitMargin: props.action.trade.asset.profitMargin !== undefined ? props.action.trade.asset.profitMargin : undefined,
            operatingMarginTTM: props.action.trade.asset.operatingMarginTTM !== undefined ? props.action.trade.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: props.action.trade.asset.returnOnAssetsTTM !== undefined ? props.action.trade.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: props.action.trade.asset.returnOnEquityTTM !== undefined ? props.action.trade.asset.returnOnEquityTTM : undefined,
            revenueTTM: props.action.trade.asset.revenueTTM !== undefined ? props.action.trade.asset.revenueTTM : undefined,
            grossProfitTTM: props.action.trade.asset.grossProfitTTM !== undefined ? props.action.trade.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: props.action.trade.asset.dilutedEPSTTM !== undefined ? props.action.trade.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: props.action.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? props.action.trade.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: props.action.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? props.action.trade.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: props.action.trade.asset.analystTargetPrice !== undefined ? props.action.trade.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: props.action.trade.asset.analystRatingStrongBuy !== undefined ? props.action.trade.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: props.action.trade.asset.analystRatingBuy !== undefined ? props.action.trade.asset.analystRatingBuy : undefined,
            analystRatingHold: props.action.trade.asset.analystRatingHold !== undefined ? props.action.trade.asset.analystRatingHold : undefined,
            analystRatingSell: props.action.trade.asset.analystRatingSell !== undefined ? props.action.trade.asset.analystRatingSell : undefined,
            analystRatingStrongSell: props.action.trade.asset.analystRatingStrongSell !== undefined ? props.action.trade.asset.analystRatingStrongSell : undefined,
            trailingPE: props.action.trade.asset.trailingPE !== undefined ? props.action.trade.asset.trailingPE : undefined,
            forwardPE: props.action.trade.asset.forwardPE !== undefined ? props.action.trade.asset.forwardPE : undefined,
            priceToSalesRatioTTM: props.action.trade.asset.priceToSalesRatioTTM !== undefined ? props.action.trade.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: props.action.trade.asset.priceToBookRatio !== undefined ? props.action.trade.asset.priceToBookRatio : undefined,
            evToRevenue: props.action.trade.asset.evToRevenue !== undefined ? props.action.trade.asset.evToRevenue : undefined,
            evToEbitda: props.action.trade.asset.evToEbitda !== undefined ? props.action.trade.asset.evToEbitda : undefined,
            beta: props.action.trade.asset.beta !== undefined ? props.action.trade.asset.beta : undefined,
            week52High: props.action.trade.asset.week52High !== undefined ? props.action.trade.asset.week52High : undefined,
            week52Low: props.action.trade.asset.week52Low !== undefined ? props.action.trade.asset.week52Low : undefined,
            day50MovingAverage: props.action.trade.asset.day50MovingAverage !== undefined ? props.action.trade.asset.day50MovingAverage : undefined,
            day200MovingAverage: props.action.trade.asset.day200MovingAverage !== undefined ? props.action.trade.asset.day200MovingAverage : undefined,
            sharesOutstanding: props.action.trade.asset.sharesOutstanding !== undefined ? props.action.trade.asset.sharesOutstanding : undefined,
            dividendDate: props.action.trade.asset.dividendDate !== undefined ? props.action.trade.asset.dividendDate : undefined,
            exDividendDate: props.action.trade.asset.exDividendDate !== undefined ? props.action.trade.asset.exDividendDate : undefined,
            askPrice: props.action.trade.asset.askPrice !== undefined ? props.action.trade.asset.askPrice : undefined,
            bidPrice: props.action.trade.asset.bidPrice !== undefined ? props.action.trade.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        sequence: props.action.sequence !== undefined ? props.action.sequence : undefined,
        type: props.action.type !== undefined ? props.action.type : undefined,
        note: props.action.note !== undefined ? props.action.note : undefined,
        status: props.action.status !== undefined ? props.action.status : undefined,
        fee: props.action.fee !== undefined ? props.action.fee : undefined,
    trade: props.action.trade ? 
      typeof props.action.trade === 'object' && Object.keys(props.action.trade).length === 1 && Object.keys(props.action.trade)[0] === 'id'
    ? { connect: {
          id: props.action.trade.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.action.trade.id !== undefined ? props.action.trade.id : undefined,
          alpacaAccountId: props.action.trade.alpacaAccountId !== undefined ? {
              equals: props.action.trade.alpacaAccountId 
             } : undefined,
          assetId: props.action.trade.assetId !== undefined ? {
              equals: props.action.trade.assetId 
             } : undefined,
        },
        create: {
          qty: props.action.trade.qty !== undefined ? props.action.trade.qty : undefined,
          price: props.action.trade.price !== undefined ? props.action.trade.price : undefined,
          total: props.action.trade.total !== undefined ? props.action.trade.total : undefined,
          optionType: props.action.trade.optionType !== undefined ? props.action.trade.optionType : undefined,
          signal: props.action.trade.signal !== undefined ? props.action.trade.signal : undefined,
          strategy: props.action.trade.strategy !== undefined ? props.action.trade.strategy : undefined,
          analysis: props.action.trade.analysis !== undefined ? props.action.trade.analysis : undefined,
          summary: props.action.trade.summary !== undefined ? props.action.trade.summary : undefined,
          confidence: props.action.trade.confidence !== undefined ? props.action.trade.confidence : undefined,
          timestamp: props.action.trade.timestamp !== undefined ? props.action.trade.timestamp : undefined,
          status: props.action.trade.status !== undefined ? props.action.trade.status : undefined,
      alpacaAccount: props.action.trade.alpacaAccount ? 
        typeof props.action.trade.alpacaAccount === 'object' && Object.keys(props.action.trade.alpacaAccount).length === 1 && Object.keys(props.action.trade.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: props.action.trade.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.action.trade.alpacaAccount.id !== undefined ? props.action.trade.alpacaAccount.id : undefined,
            userId: props.action.trade.alpacaAccount.userId !== undefined ? {
                equals: props.action.trade.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: props.action.trade.alpacaAccount.type !== undefined ? props.action.trade.alpacaAccount.type : undefined,
            APIKey: props.action.trade.alpacaAccount.APIKey !== undefined ? props.action.trade.alpacaAccount.APIKey : undefined,
            APISecret: props.action.trade.alpacaAccount.APISecret !== undefined ? props.action.trade.alpacaAccount.APISecret : undefined,
            configuration: props.action.trade.alpacaAccount.configuration !== undefined ? props.action.trade.alpacaAccount.configuration : undefined,
            marketOpen: props.action.trade.alpacaAccount.marketOpen !== undefined ? props.action.trade.alpacaAccount.marketOpen : undefined,
            minOrderSize: props.action.trade.alpacaAccount.minOrderSize !== undefined ? props.action.trade.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: props.action.trade.alpacaAccount.maxOrderSize !== undefined ? props.action.trade.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: props.action.trade.alpacaAccount.minPercentageChange !== undefined ? props.action.trade.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: props.action.trade.alpacaAccount.volumeThreshold !== undefined ? props.action.trade.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      asset: props.action.trade.asset ? 
        typeof props.action.trade.asset === 'object' && Object.keys(props.action.trade.asset).length === 1 && Object.keys(props.action.trade.asset)[0] === 'id'
    ? { connect: {
            id: props.action.trade.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.action.trade.asset.id !== undefined ? props.action.trade.asset.id : undefined,
            symbol: props.action.trade.asset.symbol !== undefined ? props.action.trade.asset.symbol : undefined,
            name: props.action.trade.asset.name !== undefined ? props.action.trade.asset.name : undefined,
          },
          create: {
            symbol: props.action.trade.asset.symbol !== undefined ? props.action.trade.asset.symbol : undefined,
            name: props.action.trade.asset.name !== undefined ? props.action.trade.asset.name : undefined,
            type: props.action.trade.asset.type !== undefined ? props.action.trade.asset.type : undefined,
            logoUrl: props.action.trade.asset.logoUrl !== undefined ? props.action.trade.asset.logoUrl : undefined,
            description: props.action.trade.asset.description !== undefined ? props.action.trade.asset.description : undefined,
            cik: props.action.trade.asset.cik !== undefined ? props.action.trade.asset.cik : undefined,
            exchange: props.action.trade.asset.exchange !== undefined ? props.action.trade.asset.exchange : undefined,
            currency: props.action.trade.asset.currency !== undefined ? props.action.trade.asset.currency : undefined,
            country: props.action.trade.asset.country !== undefined ? props.action.trade.asset.country : undefined,
            sector: props.action.trade.asset.sector !== undefined ? props.action.trade.asset.sector : undefined,
            industry: props.action.trade.asset.industry !== undefined ? props.action.trade.asset.industry : undefined,
            address: props.action.trade.asset.address !== undefined ? props.action.trade.asset.address : undefined,
            officialSite: props.action.trade.asset.officialSite !== undefined ? props.action.trade.asset.officialSite : undefined,
            fiscalYearEnd: props.action.trade.asset.fiscalYearEnd !== undefined ? props.action.trade.asset.fiscalYearEnd : undefined,
            latestQuarter: props.action.trade.asset.latestQuarter !== undefined ? props.action.trade.asset.latestQuarter : undefined,
            marketCapitalization: props.action.trade.asset.marketCapitalization !== undefined ? props.action.trade.asset.marketCapitalization : undefined,
            ebitda: props.action.trade.asset.ebitda !== undefined ? props.action.trade.asset.ebitda : undefined,
            peRatio: props.action.trade.asset.peRatio !== undefined ? props.action.trade.asset.peRatio : undefined,
            pegRatio: props.action.trade.asset.pegRatio !== undefined ? props.action.trade.asset.pegRatio : undefined,
            bookValue: props.action.trade.asset.bookValue !== undefined ? props.action.trade.asset.bookValue : undefined,
            dividendPerShare: props.action.trade.asset.dividendPerShare !== undefined ? props.action.trade.asset.dividendPerShare : undefined,
            dividendYield: props.action.trade.asset.dividendYield !== undefined ? props.action.trade.asset.dividendYield : undefined,
            eps: props.action.trade.asset.eps !== undefined ? props.action.trade.asset.eps : undefined,
            revenuePerShareTTM: props.action.trade.asset.revenuePerShareTTM !== undefined ? props.action.trade.asset.revenuePerShareTTM : undefined,
            profitMargin: props.action.trade.asset.profitMargin !== undefined ? props.action.trade.asset.profitMargin : undefined,
            operatingMarginTTM: props.action.trade.asset.operatingMarginTTM !== undefined ? props.action.trade.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: props.action.trade.asset.returnOnAssetsTTM !== undefined ? props.action.trade.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: props.action.trade.asset.returnOnEquityTTM !== undefined ? props.action.trade.asset.returnOnEquityTTM : undefined,
            revenueTTM: props.action.trade.asset.revenueTTM !== undefined ? props.action.trade.asset.revenueTTM : undefined,
            grossProfitTTM: props.action.trade.asset.grossProfitTTM !== undefined ? props.action.trade.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: props.action.trade.asset.dilutedEPSTTM !== undefined ? props.action.trade.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: props.action.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? props.action.trade.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: props.action.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? props.action.trade.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: props.action.trade.asset.analystTargetPrice !== undefined ? props.action.trade.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: props.action.trade.asset.analystRatingStrongBuy !== undefined ? props.action.trade.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: props.action.trade.asset.analystRatingBuy !== undefined ? props.action.trade.asset.analystRatingBuy : undefined,
            analystRatingHold: props.action.trade.asset.analystRatingHold !== undefined ? props.action.trade.asset.analystRatingHold : undefined,
            analystRatingSell: props.action.trade.asset.analystRatingSell !== undefined ? props.action.trade.asset.analystRatingSell : undefined,
            analystRatingStrongSell: props.action.trade.asset.analystRatingStrongSell !== undefined ? props.action.trade.asset.analystRatingStrongSell : undefined,
            trailingPE: props.action.trade.asset.trailingPE !== undefined ? props.action.trade.asset.trailingPE : undefined,
            forwardPE: props.action.trade.asset.forwardPE !== undefined ? props.action.trade.asset.forwardPE : undefined,
            priceToSalesRatioTTM: props.action.trade.asset.priceToSalesRatioTTM !== undefined ? props.action.trade.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: props.action.trade.asset.priceToBookRatio !== undefined ? props.action.trade.asset.priceToBookRatio : undefined,
            evToRevenue: props.action.trade.asset.evToRevenue !== undefined ? props.action.trade.asset.evToRevenue : undefined,
            evToEbitda: props.action.trade.asset.evToEbitda !== undefined ? props.action.trade.asset.evToEbitda : undefined,
            beta: props.action.trade.asset.beta !== undefined ? props.action.trade.asset.beta : undefined,
            week52High: props.action.trade.asset.week52High !== undefined ? props.action.trade.asset.week52High : undefined,
            week52Low: props.action.trade.asset.week52Low !== undefined ? props.action.trade.asset.week52Low : undefined,
            day50MovingAverage: props.action.trade.asset.day50MovingAverage !== undefined ? props.action.trade.asset.day50MovingAverage : undefined,
            day200MovingAverage: props.action.trade.asset.day200MovingAverage !== undefined ? props.action.trade.asset.day200MovingAverage : undefined,
            sharesOutstanding: props.action.trade.asset.sharesOutstanding !== undefined ? props.action.trade.asset.sharesOutstanding : undefined,
            dividendDate: props.action.trade.asset.dividendDate !== undefined ? props.action.trade.asset.dividendDate : undefined,
            exDividendDate: props.action.trade.asset.exDividendDate !== undefined ? props.action.trade.asset.exDividendDate : undefined,
            askPrice: props.action.trade.asset.askPrice !== undefined ? props.action.trade.asset.askPrice : undefined,
            bidPrice: props.action.trade.asset.bidPrice !== undefined ? props.action.trade.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
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
    trades: props.asset.trades ? {
      upsert: props.asset.trades.map((item: any) => ({
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
    trades: props.asset.trades ? 
      Array.isArray(props.asset.trades) && props.asset.trades.length > 0 &&  props.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.asset.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.asset.trades.map((item: any) => ({
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
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_ORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneOrder) {
        return response.data.updateOneOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneOrder:', error);
      throw error;
    }
  },

  /**
   * Update multiple Order records.
   * @param props - Array of Order objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: OrderType[]): Promise<{ count: number } | null> {

      const UPDATE_MANY_ORDER = gql`
      mutation updateManyOrder($data: [OrderCreateManyInput!]!) {
        updateManyOrder(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  clientOrderId: prop.clientOrderId !== undefined ? prop.clientOrderId : undefined,
  actionId: prop.actionId !== undefined ? prop.actionId : undefined,
  stopLossId: prop.stopLossId !== undefined ? prop.stopLossId : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? {
    equals: prop.alpacaAccountId 
  } : undefined,
  assetId: prop.assetId !== undefined ? {
    equals: prop.assetId 
  } : undefined,
  side: prop.side !== undefined ? prop.side : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  orderClass: prop.orderClass !== undefined ? prop.orderClass : undefined,
  timeInForce: prop.timeInForce !== undefined ? prop.timeInForce : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  createdAt: prop.createdAt !== undefined ? prop.createdAt : undefined,
  updatedAt: prop.updatedAt !== undefined ? prop.updatedAt : undefined,
  submittedAt: prop.submittedAt !== undefined ? prop.submittedAt : undefined,
  filledAt: prop.filledAt !== undefined ? prop.filledAt : undefined,
  cancelRequestedAt: prop.cancelRequestedAt !== undefined ? prop.cancelRequestedAt : undefined,
  canceledAt: prop.canceledAt !== undefined ? prop.canceledAt : undefined,
  expirationDate: prop.expirationDate !== undefined ? prop.expirationDate : undefined,
  optionType: prop.optionType !== undefined ? prop.optionType : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  clientOrderId: prop.clientOrderId !== undefined ? {
            set: prop.clientOrderId 
           } : undefined,
  qty: prop.qty !== undefined ? {
            set: prop.qty 
           } : undefined,
  notional: prop.notional !== undefined ? {
            set: prop.notional 
           } : undefined,
  side: prop.side !== undefined ? {
            set: prop.side 
           } : undefined,
  type: prop.type !== undefined ? {
            set: prop.type 
           } : undefined,
  orderClass: prop.orderClass !== undefined ? {
            set: prop.orderClass 
           } : undefined,
  timeInForce: prop.timeInForce !== undefined ? {
            set: prop.timeInForce 
           } : undefined,
  limitPrice: prop.limitPrice !== undefined ? {
            set: prop.limitPrice 
           } : undefined,
  stopPrice: prop.stopPrice !== undefined ? {
            set: prop.stopPrice 
           } : undefined,
  trailPrice: prop.trailPrice !== undefined ? {
            set: prop.trailPrice 
           } : undefined,
  trailPercent: prop.trailPercent !== undefined ? {
            set: prop.trailPercent 
           } : undefined,
  extendedHours: prop.extendedHours !== undefined ? {
            set: prop.extendedHours 
           } : undefined,
  status: prop.status !== undefined ? {
            set: prop.status 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  submittedAt: prop.submittedAt !== undefined ? {
            set: prop.submittedAt 
           } : undefined,
  filledAt: prop.filledAt !== undefined ? {
            set: prop.filledAt 
           } : undefined,
  filledQty: prop.filledQty !== undefined ? {
            set: prop.filledQty 
           } : undefined,
  filledAvgPrice: prop.filledAvgPrice !== undefined ? {
            set: prop.filledAvgPrice 
           } : undefined,
  cancelRequestedAt: prop.cancelRequestedAt !== undefined ? {
            set: prop.cancelRequestedAt 
           } : undefined,
  canceledAt: prop.canceledAt !== undefined ? {
            set: prop.canceledAt 
           } : undefined,
  fee: prop.fee !== undefined ? {
            set: prop.fee 
           } : undefined,
  strikePrice: prop.strikePrice !== undefined ? {
            set: prop.strikePrice 
           } : undefined,
  expirationDate: prop.expirationDate !== undefined ? {
            set: prop.expirationDate 
           } : undefined,
  optionType: prop.optionType !== undefined ? {
            set: prop.optionType 
           } : undefined,
  stopLossId: prop.stopLossId !== undefined ? {
            set: prop.stopLossId 
           } : undefined,
  takeProfitId: prop.takeProfitId !== undefined ? {
            set: prop.takeProfitId 
           } : undefined,
  stopLoss: prop.stopLoss ? {
    upsert: {
      where: {
        id: prop.stopLoss.id !== undefined ? {
            equals: prop.stopLoss.id 
           } : undefined,
        orderId: prop.stopLoss.orderId !== undefined ? {
            equals: prop.stopLoss.orderId 
           } : undefined,
      },
      update: {
        id: prop.stopLoss.id !== undefined ? {
            set: prop.stopLoss.id  
           } : undefined,
        stopPrice: prop.stopLoss.stopPrice !== undefined ? {
            set: prop.stopLoss.stopPrice  
           } : undefined,
        limitPrice: prop.stopLoss.limitPrice !== undefined ? {
            set: prop.stopLoss.limitPrice  
           } : undefined,
      },
      create: {
        stopPrice: prop.stopLoss.stopPrice !== undefined ? prop.stopLoss.stopPrice : undefined,
        limitPrice: prop.stopLoss.limitPrice !== undefined ? prop.stopLoss.limitPrice : undefined,
      },
    }
  } : undefined,
  takeProfit: prop.takeProfit ? {
    upsert: {
      where: {
        id: prop.takeProfit.id !== undefined ? {
            equals: prop.takeProfit.id 
           } : undefined,
        orderId: prop.takeProfit.orderId !== undefined ? {
            equals: prop.takeProfit.orderId 
           } : undefined,
      },
      update: {
        id: prop.takeProfit.id !== undefined ? {
            set: prop.takeProfit.id  
           } : undefined,
        limitPrice: prop.takeProfit.limitPrice !== undefined ? {
            set: prop.takeProfit.limitPrice  
           } : undefined,
        stopPrice: prop.takeProfit.stopPrice !== undefined ? {
            set: prop.takeProfit.stopPrice  
           } : undefined,
      },
      create: {
        limitPrice: prop.takeProfit.limitPrice !== undefined ? prop.takeProfit.limitPrice : undefined,
        stopPrice: prop.takeProfit.stopPrice !== undefined ? prop.takeProfit.stopPrice : undefined,
      },
    }
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
          customerId: prop.alpacaAccount.user.customerId !== undefined ? {
              equals: prop.alpacaAccount.user.customerId 
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
    trades: prop.alpacaAccount.trades ? {
      upsert: prop.alpacaAccount.trades.map((item: any) => ({
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
    trades: prop.alpacaAccount.trades ? 
      Array.isArray(prop.alpacaAccount.trades) && prop.alpacaAccount.trades.length > 0 &&  prop.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.alpacaAccount.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.alpacaAccount.trades.map((item: any) => ({
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
  action: prop.action ? {
    upsert: {
      where: {
        id: prop.action.id !== undefined ? {
            equals: prop.action.id 
           } : undefined,
        tradeId: prop.action.tradeId !== undefined ? {
            equals: prop.action.tradeId 
           } : undefined,
      },
      update: {
        id: prop.action.id !== undefined ? {
            set: prop.action.id  
           } : undefined,
        sequence: prop.action.sequence !== undefined ? {
            set: prop.action.sequence  
           } : undefined,
        type: prop.action.type !== undefined ? {
            set: prop.action.type  
           } : undefined,
        note: prop.action.note !== undefined ? {
            set: prop.action.note  
           } : undefined,
        status: prop.action.status !== undefined ? {
            set: prop.action.status  
           } : undefined,
        fee: prop.action.fee !== undefined ? {
            set: prop.action.fee  
           } : undefined,
    trade: prop.action.trade ? {
      upsert: {
        where: {
          id: prop.action.trade.id !== undefined ? {
              equals: prop.action.trade.id 
             } : undefined,
          alpacaAccountId: prop.action.trade.alpacaAccountId !== undefined ? {
              equals: prop.action.trade.alpacaAccountId 
             } : undefined,
          assetId: prop.action.trade.assetId !== undefined ? {
              equals: prop.action.trade.assetId 
             } : undefined,
        },
        update: {
          id: prop.action.trade.id !== undefined ? {
              set: prop.action.trade.id  
             } : undefined,
          qty: prop.action.trade.qty !== undefined ? {
              set: prop.action.trade.qty  
             } : undefined,
          price: prop.action.trade.price !== undefined ? {
              set: prop.action.trade.price  
             } : undefined,
          total: prop.action.trade.total !== undefined ? {
              set: prop.action.trade.total  
             } : undefined,
          optionType: prop.action.trade.optionType !== undefined ? {
              set: prop.action.trade.optionType  
             } : undefined,
          signal: prop.action.trade.signal !== undefined ? {
              set: prop.action.trade.signal  
             } : undefined,
          strategy: prop.action.trade.strategy !== undefined ? {
              set: prop.action.trade.strategy  
             } : undefined,
          analysis: prop.action.trade.analysis !== undefined ? {
              set: prop.action.trade.analysis  
             } : undefined,
          summary: prop.action.trade.summary !== undefined ? {
              set: prop.action.trade.summary  
             } : undefined,
          confidence: prop.action.trade.confidence !== undefined ? {
              set: prop.action.trade.confidence  
             } : undefined,
          timestamp: prop.action.trade.timestamp !== undefined ? {
              set: prop.action.trade.timestamp  
             } : undefined,
          status: prop.action.trade.status !== undefined ? {
              set: prop.action.trade.status  
             } : undefined,
      alpacaAccount: prop.action.trade.alpacaAccount ? {
        upsert: {
          where: {
            id: prop.action.trade.alpacaAccount.id !== undefined ? {
                equals: prop.action.trade.alpacaAccount.id 
               } : undefined,
            userId: prop.action.trade.alpacaAccount.userId !== undefined ? {
                equals: prop.action.trade.alpacaAccount.userId 
               } : undefined,
          },
          update: {
            id: prop.action.trade.alpacaAccount.id !== undefined ? {
                set: prop.action.trade.alpacaAccount.id  
               } : undefined,
            type: prop.action.trade.alpacaAccount.type !== undefined ? {
                set: prop.action.trade.alpacaAccount.type  
               } : undefined,
            APIKey: prop.action.trade.alpacaAccount.APIKey !== undefined ? {
                set: prop.action.trade.alpacaAccount.APIKey  
               } : undefined,
            APISecret: prop.action.trade.alpacaAccount.APISecret !== undefined ? {
                set: prop.action.trade.alpacaAccount.APISecret  
               } : undefined,
            configuration: prop.action.trade.alpacaAccount.configuration !== undefined ? {
                set: prop.action.trade.alpacaAccount.configuration  
               } : undefined,
            marketOpen: prop.action.trade.alpacaAccount.marketOpen !== undefined ? {
                set: prop.action.trade.alpacaAccount.marketOpen  
               } : undefined,
            minOrderSize: prop.action.trade.alpacaAccount.minOrderSize !== undefined ? {
                set: prop.action.trade.alpacaAccount.minOrderSize  
               } : undefined,
            maxOrderSize: prop.action.trade.alpacaAccount.maxOrderSize !== undefined ? {
                set: prop.action.trade.alpacaAccount.maxOrderSize  
               } : undefined,
            minPercentageChange: prop.action.trade.alpacaAccount.minPercentageChange !== undefined ? {
                set: prop.action.trade.alpacaAccount.minPercentageChange  
               } : undefined,
            volumeThreshold: prop.action.trade.alpacaAccount.volumeThreshold !== undefined ? {
                set: prop.action.trade.alpacaAccount.volumeThreshold  
               } : undefined,
          },
          create: {
            type: prop.action.trade.alpacaAccount.type !== undefined ? prop.action.trade.alpacaAccount.type : undefined,
            APIKey: prop.action.trade.alpacaAccount.APIKey !== undefined ? prop.action.trade.alpacaAccount.APIKey : undefined,
            APISecret: prop.action.trade.alpacaAccount.APISecret !== undefined ? prop.action.trade.alpacaAccount.APISecret : undefined,
            configuration: prop.action.trade.alpacaAccount.configuration !== undefined ? prop.action.trade.alpacaAccount.configuration : undefined,
            marketOpen: prop.action.trade.alpacaAccount.marketOpen !== undefined ? prop.action.trade.alpacaAccount.marketOpen : undefined,
            minOrderSize: prop.action.trade.alpacaAccount.minOrderSize !== undefined ? prop.action.trade.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: prop.action.trade.alpacaAccount.maxOrderSize !== undefined ? prop.action.trade.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: prop.action.trade.alpacaAccount.minPercentageChange !== undefined ? prop.action.trade.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: prop.action.trade.alpacaAccount.volumeThreshold !== undefined ? prop.action.trade.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      asset: prop.action.trade.asset ? {
        upsert: {
          where: {
            id: prop.action.trade.asset.id !== undefined ? {
                equals: prop.action.trade.asset.id 
               } : undefined,
            symbol: prop.action.trade.asset.symbol !== undefined ? {
                equals: prop.action.trade.asset.symbol 
               } : undefined,
            name: prop.action.trade.asset.name !== undefined ? {
                equals: prop.action.trade.asset.name 
               } : undefined,
          },
          update: {
            id: prop.action.trade.asset.id !== undefined ? {
                set: prop.action.trade.asset.id  
               } : undefined,
            symbol: prop.action.trade.asset.symbol !== undefined ? {
                set: prop.action.trade.asset.symbol  
               } : undefined,
            name: prop.action.trade.asset.name !== undefined ? {
                set: prop.action.trade.asset.name  
               } : undefined,
            type: prop.action.trade.asset.type !== undefined ? {
                set: prop.action.trade.asset.type  
               } : undefined,
            logoUrl: prop.action.trade.asset.logoUrl !== undefined ? {
                set: prop.action.trade.asset.logoUrl  
               } : undefined,
            description: prop.action.trade.asset.description !== undefined ? {
                set: prop.action.trade.asset.description  
               } : undefined,
            cik: prop.action.trade.asset.cik !== undefined ? {
                set: prop.action.trade.asset.cik  
               } : undefined,
            exchange: prop.action.trade.asset.exchange !== undefined ? {
                set: prop.action.trade.asset.exchange  
               } : undefined,
            currency: prop.action.trade.asset.currency !== undefined ? {
                set: prop.action.trade.asset.currency  
               } : undefined,
            country: prop.action.trade.asset.country !== undefined ? {
                set: prop.action.trade.asset.country  
               } : undefined,
            sector: prop.action.trade.asset.sector !== undefined ? {
                set: prop.action.trade.asset.sector  
               } : undefined,
            industry: prop.action.trade.asset.industry !== undefined ? {
                set: prop.action.trade.asset.industry  
               } : undefined,
            address: prop.action.trade.asset.address !== undefined ? {
                set: prop.action.trade.asset.address  
               } : undefined,
            officialSite: prop.action.trade.asset.officialSite !== undefined ? {
                set: prop.action.trade.asset.officialSite  
               } : undefined,
            fiscalYearEnd: prop.action.trade.asset.fiscalYearEnd !== undefined ? {
                set: prop.action.trade.asset.fiscalYearEnd  
               } : undefined,
            latestQuarter: prop.action.trade.asset.latestQuarter !== undefined ? {
                set: prop.action.trade.asset.latestQuarter  
               } : undefined,
            marketCapitalization: prop.action.trade.asset.marketCapitalization !== undefined ? {
                set: prop.action.trade.asset.marketCapitalization  
               } : undefined,
            ebitda: prop.action.trade.asset.ebitda !== undefined ? {
                set: prop.action.trade.asset.ebitda  
               } : undefined,
            peRatio: prop.action.trade.asset.peRatio !== undefined ? {
                set: prop.action.trade.asset.peRatio  
               } : undefined,
            pegRatio: prop.action.trade.asset.pegRatio !== undefined ? {
                set: prop.action.trade.asset.pegRatio  
               } : undefined,
            bookValue: prop.action.trade.asset.bookValue !== undefined ? {
                set: prop.action.trade.asset.bookValue  
               } : undefined,
            dividendPerShare: prop.action.trade.asset.dividendPerShare !== undefined ? {
                set: prop.action.trade.asset.dividendPerShare  
               } : undefined,
            dividendYield: prop.action.trade.asset.dividendYield !== undefined ? {
                set: prop.action.trade.asset.dividendYield  
               } : undefined,
            eps: prop.action.trade.asset.eps !== undefined ? {
                set: prop.action.trade.asset.eps  
               } : undefined,
            revenuePerShareTTM: prop.action.trade.asset.revenuePerShareTTM !== undefined ? {
                set: prop.action.trade.asset.revenuePerShareTTM  
               } : undefined,
            profitMargin: prop.action.trade.asset.profitMargin !== undefined ? {
                set: prop.action.trade.asset.profitMargin  
               } : undefined,
            operatingMarginTTM: prop.action.trade.asset.operatingMarginTTM !== undefined ? {
                set: prop.action.trade.asset.operatingMarginTTM  
               } : undefined,
            returnOnAssetsTTM: prop.action.trade.asset.returnOnAssetsTTM !== undefined ? {
                set: prop.action.trade.asset.returnOnAssetsTTM  
               } : undefined,
            returnOnEquityTTM: prop.action.trade.asset.returnOnEquityTTM !== undefined ? {
                set: prop.action.trade.asset.returnOnEquityTTM  
               } : undefined,
            revenueTTM: prop.action.trade.asset.revenueTTM !== undefined ? {
                set: prop.action.trade.asset.revenueTTM  
               } : undefined,
            grossProfitTTM: prop.action.trade.asset.grossProfitTTM !== undefined ? {
                set: prop.action.trade.asset.grossProfitTTM  
               } : undefined,
            dilutedEPSTTM: prop.action.trade.asset.dilutedEPSTTM !== undefined ? {
                set: prop.action.trade.asset.dilutedEPSTTM  
               } : undefined,
            quarterlyEarningsGrowthYOY: prop.action.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? {
                set: prop.action.trade.asset.quarterlyEarningsGrowthYOY  
               } : undefined,
            quarterlyRevenueGrowthYOY: prop.action.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? {
                set: prop.action.trade.asset.quarterlyRevenueGrowthYOY  
               } : undefined,
            analystTargetPrice: prop.action.trade.asset.analystTargetPrice !== undefined ? {
                set: prop.action.trade.asset.analystTargetPrice  
               } : undefined,
            analystRatingStrongBuy: prop.action.trade.asset.analystRatingStrongBuy !== undefined ? {
                set: prop.action.trade.asset.analystRatingStrongBuy  
               } : undefined,
            analystRatingBuy: prop.action.trade.asset.analystRatingBuy !== undefined ? {
                set: prop.action.trade.asset.analystRatingBuy  
               } : undefined,
            analystRatingHold: prop.action.trade.asset.analystRatingHold !== undefined ? {
                set: prop.action.trade.asset.analystRatingHold  
               } : undefined,
            analystRatingSell: prop.action.trade.asset.analystRatingSell !== undefined ? {
                set: prop.action.trade.asset.analystRatingSell  
               } : undefined,
            analystRatingStrongSell: prop.action.trade.asset.analystRatingStrongSell !== undefined ? {
                set: prop.action.trade.asset.analystRatingStrongSell  
               } : undefined,
            trailingPE: prop.action.trade.asset.trailingPE !== undefined ? {
                set: prop.action.trade.asset.trailingPE  
               } : undefined,
            forwardPE: prop.action.trade.asset.forwardPE !== undefined ? {
                set: prop.action.trade.asset.forwardPE  
               } : undefined,
            priceToSalesRatioTTM: prop.action.trade.asset.priceToSalesRatioTTM !== undefined ? {
                set: prop.action.trade.asset.priceToSalesRatioTTM  
               } : undefined,
            priceToBookRatio: prop.action.trade.asset.priceToBookRatio !== undefined ? {
                set: prop.action.trade.asset.priceToBookRatio  
               } : undefined,
            evToRevenue: prop.action.trade.asset.evToRevenue !== undefined ? {
                set: prop.action.trade.asset.evToRevenue  
               } : undefined,
            evToEbitda: prop.action.trade.asset.evToEbitda !== undefined ? {
                set: prop.action.trade.asset.evToEbitda  
               } : undefined,
            beta: prop.action.trade.asset.beta !== undefined ? {
                set: prop.action.trade.asset.beta  
               } : undefined,
            week52High: prop.action.trade.asset.week52High !== undefined ? {
                set: prop.action.trade.asset.week52High  
               } : undefined,
            week52Low: prop.action.trade.asset.week52Low !== undefined ? {
                set: prop.action.trade.asset.week52Low  
               } : undefined,
            day50MovingAverage: prop.action.trade.asset.day50MovingAverage !== undefined ? {
                set: prop.action.trade.asset.day50MovingAverage  
               } : undefined,
            day200MovingAverage: prop.action.trade.asset.day200MovingAverage !== undefined ? {
                set: prop.action.trade.asset.day200MovingAverage  
               } : undefined,
            sharesOutstanding: prop.action.trade.asset.sharesOutstanding !== undefined ? {
                set: prop.action.trade.asset.sharesOutstanding  
               } : undefined,
            dividendDate: prop.action.trade.asset.dividendDate !== undefined ? {
                set: prop.action.trade.asset.dividendDate  
               } : undefined,
            exDividendDate: prop.action.trade.asset.exDividendDate !== undefined ? {
                set: prop.action.trade.asset.exDividendDate  
               } : undefined,
            askPrice: prop.action.trade.asset.askPrice !== undefined ? {
                set: prop.action.trade.asset.askPrice  
               } : undefined,
            bidPrice: prop.action.trade.asset.bidPrice !== undefined ? {
                set: prop.action.trade.asset.bidPrice  
               } : undefined,
          },
          create: {
            symbol: prop.action.trade.asset.symbol !== undefined ? prop.action.trade.asset.symbol : undefined,
            name: prop.action.trade.asset.name !== undefined ? prop.action.trade.asset.name : undefined,
            type: prop.action.trade.asset.type !== undefined ? prop.action.trade.asset.type : undefined,
            logoUrl: prop.action.trade.asset.logoUrl !== undefined ? prop.action.trade.asset.logoUrl : undefined,
            description: prop.action.trade.asset.description !== undefined ? prop.action.trade.asset.description : undefined,
            cik: prop.action.trade.asset.cik !== undefined ? prop.action.trade.asset.cik : undefined,
            exchange: prop.action.trade.asset.exchange !== undefined ? prop.action.trade.asset.exchange : undefined,
            currency: prop.action.trade.asset.currency !== undefined ? prop.action.trade.asset.currency : undefined,
            country: prop.action.trade.asset.country !== undefined ? prop.action.trade.asset.country : undefined,
            sector: prop.action.trade.asset.sector !== undefined ? prop.action.trade.asset.sector : undefined,
            industry: prop.action.trade.asset.industry !== undefined ? prop.action.trade.asset.industry : undefined,
            address: prop.action.trade.asset.address !== undefined ? prop.action.trade.asset.address : undefined,
            officialSite: prop.action.trade.asset.officialSite !== undefined ? prop.action.trade.asset.officialSite : undefined,
            fiscalYearEnd: prop.action.trade.asset.fiscalYearEnd !== undefined ? prop.action.trade.asset.fiscalYearEnd : undefined,
            latestQuarter: prop.action.trade.asset.latestQuarter !== undefined ? prop.action.trade.asset.latestQuarter : undefined,
            marketCapitalization: prop.action.trade.asset.marketCapitalization !== undefined ? prop.action.trade.asset.marketCapitalization : undefined,
            ebitda: prop.action.trade.asset.ebitda !== undefined ? prop.action.trade.asset.ebitda : undefined,
            peRatio: prop.action.trade.asset.peRatio !== undefined ? prop.action.trade.asset.peRatio : undefined,
            pegRatio: prop.action.trade.asset.pegRatio !== undefined ? prop.action.trade.asset.pegRatio : undefined,
            bookValue: prop.action.trade.asset.bookValue !== undefined ? prop.action.trade.asset.bookValue : undefined,
            dividendPerShare: prop.action.trade.asset.dividendPerShare !== undefined ? prop.action.trade.asset.dividendPerShare : undefined,
            dividendYield: prop.action.trade.asset.dividendYield !== undefined ? prop.action.trade.asset.dividendYield : undefined,
            eps: prop.action.trade.asset.eps !== undefined ? prop.action.trade.asset.eps : undefined,
            revenuePerShareTTM: prop.action.trade.asset.revenuePerShareTTM !== undefined ? prop.action.trade.asset.revenuePerShareTTM : undefined,
            profitMargin: prop.action.trade.asset.profitMargin !== undefined ? prop.action.trade.asset.profitMargin : undefined,
            operatingMarginTTM: prop.action.trade.asset.operatingMarginTTM !== undefined ? prop.action.trade.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: prop.action.trade.asset.returnOnAssetsTTM !== undefined ? prop.action.trade.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: prop.action.trade.asset.returnOnEquityTTM !== undefined ? prop.action.trade.asset.returnOnEquityTTM : undefined,
            revenueTTM: prop.action.trade.asset.revenueTTM !== undefined ? prop.action.trade.asset.revenueTTM : undefined,
            grossProfitTTM: prop.action.trade.asset.grossProfitTTM !== undefined ? prop.action.trade.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: prop.action.trade.asset.dilutedEPSTTM !== undefined ? prop.action.trade.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: prop.action.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.action.trade.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: prop.action.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.action.trade.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: prop.action.trade.asset.analystTargetPrice !== undefined ? prop.action.trade.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: prop.action.trade.asset.analystRatingStrongBuy !== undefined ? prop.action.trade.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: prop.action.trade.asset.analystRatingBuy !== undefined ? prop.action.trade.asset.analystRatingBuy : undefined,
            analystRatingHold: prop.action.trade.asset.analystRatingHold !== undefined ? prop.action.trade.asset.analystRatingHold : undefined,
            analystRatingSell: prop.action.trade.asset.analystRatingSell !== undefined ? prop.action.trade.asset.analystRatingSell : undefined,
            analystRatingStrongSell: prop.action.trade.asset.analystRatingStrongSell !== undefined ? prop.action.trade.asset.analystRatingStrongSell : undefined,
            trailingPE: prop.action.trade.asset.trailingPE !== undefined ? prop.action.trade.asset.trailingPE : undefined,
            forwardPE: prop.action.trade.asset.forwardPE !== undefined ? prop.action.trade.asset.forwardPE : undefined,
            priceToSalesRatioTTM: prop.action.trade.asset.priceToSalesRatioTTM !== undefined ? prop.action.trade.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: prop.action.trade.asset.priceToBookRatio !== undefined ? prop.action.trade.asset.priceToBookRatio : undefined,
            evToRevenue: prop.action.trade.asset.evToRevenue !== undefined ? prop.action.trade.asset.evToRevenue : undefined,
            evToEbitda: prop.action.trade.asset.evToEbitda !== undefined ? prop.action.trade.asset.evToEbitda : undefined,
            beta: prop.action.trade.asset.beta !== undefined ? prop.action.trade.asset.beta : undefined,
            week52High: prop.action.trade.asset.week52High !== undefined ? prop.action.trade.asset.week52High : undefined,
            week52Low: prop.action.trade.asset.week52Low !== undefined ? prop.action.trade.asset.week52Low : undefined,
            day50MovingAverage: prop.action.trade.asset.day50MovingAverage !== undefined ? prop.action.trade.asset.day50MovingAverage : undefined,
            day200MovingAverage: prop.action.trade.asset.day200MovingAverage !== undefined ? prop.action.trade.asset.day200MovingAverage : undefined,
            sharesOutstanding: prop.action.trade.asset.sharesOutstanding !== undefined ? prop.action.trade.asset.sharesOutstanding : undefined,
            dividendDate: prop.action.trade.asset.dividendDate !== undefined ? prop.action.trade.asset.dividendDate : undefined,
            exDividendDate: prop.action.trade.asset.exDividendDate !== undefined ? prop.action.trade.asset.exDividendDate : undefined,
            askPrice: prop.action.trade.asset.askPrice !== undefined ? prop.action.trade.asset.askPrice : undefined,
            bidPrice: prop.action.trade.asset.bidPrice !== undefined ? prop.action.trade.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
        create: {
          qty: prop.action.trade.qty !== undefined ? prop.action.trade.qty : undefined,
          price: prop.action.trade.price !== undefined ? prop.action.trade.price : undefined,
          total: prop.action.trade.total !== undefined ? prop.action.trade.total : undefined,
          optionType: prop.action.trade.optionType !== undefined ? prop.action.trade.optionType : undefined,
          signal: prop.action.trade.signal !== undefined ? prop.action.trade.signal : undefined,
          strategy: prop.action.trade.strategy !== undefined ? prop.action.trade.strategy : undefined,
          analysis: prop.action.trade.analysis !== undefined ? prop.action.trade.analysis : undefined,
          summary: prop.action.trade.summary !== undefined ? prop.action.trade.summary : undefined,
          confidence: prop.action.trade.confidence !== undefined ? prop.action.trade.confidence : undefined,
          timestamp: prop.action.trade.timestamp !== undefined ? prop.action.trade.timestamp : undefined,
          status: prop.action.trade.status !== undefined ? prop.action.trade.status : undefined,
      alpacaAccount: prop.action.trade.alpacaAccount ? 
        typeof prop.action.trade.alpacaAccount === 'object' && Object.keys(prop.action.trade.alpacaAccount).length === 1 && Object.keys(prop.action.trade.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: prop.action.trade.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.action.trade.alpacaAccount.id !== undefined ? prop.action.trade.alpacaAccount.id : undefined,
            userId: prop.action.trade.alpacaAccount.userId !== undefined ? {
                equals: prop.action.trade.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: prop.action.trade.alpacaAccount.type !== undefined ? prop.action.trade.alpacaAccount.type : undefined,
            APIKey: prop.action.trade.alpacaAccount.APIKey !== undefined ? prop.action.trade.alpacaAccount.APIKey : undefined,
            APISecret: prop.action.trade.alpacaAccount.APISecret !== undefined ? prop.action.trade.alpacaAccount.APISecret : undefined,
            configuration: prop.action.trade.alpacaAccount.configuration !== undefined ? prop.action.trade.alpacaAccount.configuration : undefined,
            marketOpen: prop.action.trade.alpacaAccount.marketOpen !== undefined ? prop.action.trade.alpacaAccount.marketOpen : undefined,
            minOrderSize: prop.action.trade.alpacaAccount.minOrderSize !== undefined ? prop.action.trade.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: prop.action.trade.alpacaAccount.maxOrderSize !== undefined ? prop.action.trade.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: prop.action.trade.alpacaAccount.minPercentageChange !== undefined ? prop.action.trade.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: prop.action.trade.alpacaAccount.volumeThreshold !== undefined ? prop.action.trade.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      asset: prop.action.trade.asset ? 
        typeof prop.action.trade.asset === 'object' && Object.keys(prop.action.trade.asset).length === 1 && Object.keys(prop.action.trade.asset)[0] === 'id'
    ? { connect: {
            id: prop.action.trade.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.action.trade.asset.id !== undefined ? prop.action.trade.asset.id : undefined,
            symbol: prop.action.trade.asset.symbol !== undefined ? prop.action.trade.asset.symbol : undefined,
            name: prop.action.trade.asset.name !== undefined ? prop.action.trade.asset.name : undefined,
          },
          create: {
            symbol: prop.action.trade.asset.symbol !== undefined ? prop.action.trade.asset.symbol : undefined,
            name: prop.action.trade.asset.name !== undefined ? prop.action.trade.asset.name : undefined,
            type: prop.action.trade.asset.type !== undefined ? prop.action.trade.asset.type : undefined,
            logoUrl: prop.action.trade.asset.logoUrl !== undefined ? prop.action.trade.asset.logoUrl : undefined,
            description: prop.action.trade.asset.description !== undefined ? prop.action.trade.asset.description : undefined,
            cik: prop.action.trade.asset.cik !== undefined ? prop.action.trade.asset.cik : undefined,
            exchange: prop.action.trade.asset.exchange !== undefined ? prop.action.trade.asset.exchange : undefined,
            currency: prop.action.trade.asset.currency !== undefined ? prop.action.trade.asset.currency : undefined,
            country: prop.action.trade.asset.country !== undefined ? prop.action.trade.asset.country : undefined,
            sector: prop.action.trade.asset.sector !== undefined ? prop.action.trade.asset.sector : undefined,
            industry: prop.action.trade.asset.industry !== undefined ? prop.action.trade.asset.industry : undefined,
            address: prop.action.trade.asset.address !== undefined ? prop.action.trade.asset.address : undefined,
            officialSite: prop.action.trade.asset.officialSite !== undefined ? prop.action.trade.asset.officialSite : undefined,
            fiscalYearEnd: prop.action.trade.asset.fiscalYearEnd !== undefined ? prop.action.trade.asset.fiscalYearEnd : undefined,
            latestQuarter: prop.action.trade.asset.latestQuarter !== undefined ? prop.action.trade.asset.latestQuarter : undefined,
            marketCapitalization: prop.action.trade.asset.marketCapitalization !== undefined ? prop.action.trade.asset.marketCapitalization : undefined,
            ebitda: prop.action.trade.asset.ebitda !== undefined ? prop.action.trade.asset.ebitda : undefined,
            peRatio: prop.action.trade.asset.peRatio !== undefined ? prop.action.trade.asset.peRatio : undefined,
            pegRatio: prop.action.trade.asset.pegRatio !== undefined ? prop.action.trade.asset.pegRatio : undefined,
            bookValue: prop.action.trade.asset.bookValue !== undefined ? prop.action.trade.asset.bookValue : undefined,
            dividendPerShare: prop.action.trade.asset.dividendPerShare !== undefined ? prop.action.trade.asset.dividendPerShare : undefined,
            dividendYield: prop.action.trade.asset.dividendYield !== undefined ? prop.action.trade.asset.dividendYield : undefined,
            eps: prop.action.trade.asset.eps !== undefined ? prop.action.trade.asset.eps : undefined,
            revenuePerShareTTM: prop.action.trade.asset.revenuePerShareTTM !== undefined ? prop.action.trade.asset.revenuePerShareTTM : undefined,
            profitMargin: prop.action.trade.asset.profitMargin !== undefined ? prop.action.trade.asset.profitMargin : undefined,
            operatingMarginTTM: prop.action.trade.asset.operatingMarginTTM !== undefined ? prop.action.trade.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: prop.action.trade.asset.returnOnAssetsTTM !== undefined ? prop.action.trade.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: prop.action.trade.asset.returnOnEquityTTM !== undefined ? prop.action.trade.asset.returnOnEquityTTM : undefined,
            revenueTTM: prop.action.trade.asset.revenueTTM !== undefined ? prop.action.trade.asset.revenueTTM : undefined,
            grossProfitTTM: prop.action.trade.asset.grossProfitTTM !== undefined ? prop.action.trade.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: prop.action.trade.asset.dilutedEPSTTM !== undefined ? prop.action.trade.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: prop.action.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.action.trade.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: prop.action.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.action.trade.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: prop.action.trade.asset.analystTargetPrice !== undefined ? prop.action.trade.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: prop.action.trade.asset.analystRatingStrongBuy !== undefined ? prop.action.trade.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: prop.action.trade.asset.analystRatingBuy !== undefined ? prop.action.trade.asset.analystRatingBuy : undefined,
            analystRatingHold: prop.action.trade.asset.analystRatingHold !== undefined ? prop.action.trade.asset.analystRatingHold : undefined,
            analystRatingSell: prop.action.trade.asset.analystRatingSell !== undefined ? prop.action.trade.asset.analystRatingSell : undefined,
            analystRatingStrongSell: prop.action.trade.asset.analystRatingStrongSell !== undefined ? prop.action.trade.asset.analystRatingStrongSell : undefined,
            trailingPE: prop.action.trade.asset.trailingPE !== undefined ? prop.action.trade.asset.trailingPE : undefined,
            forwardPE: prop.action.trade.asset.forwardPE !== undefined ? prop.action.trade.asset.forwardPE : undefined,
            priceToSalesRatioTTM: prop.action.trade.asset.priceToSalesRatioTTM !== undefined ? prop.action.trade.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: prop.action.trade.asset.priceToBookRatio !== undefined ? prop.action.trade.asset.priceToBookRatio : undefined,
            evToRevenue: prop.action.trade.asset.evToRevenue !== undefined ? prop.action.trade.asset.evToRevenue : undefined,
            evToEbitda: prop.action.trade.asset.evToEbitda !== undefined ? prop.action.trade.asset.evToEbitda : undefined,
            beta: prop.action.trade.asset.beta !== undefined ? prop.action.trade.asset.beta : undefined,
            week52High: prop.action.trade.asset.week52High !== undefined ? prop.action.trade.asset.week52High : undefined,
            week52Low: prop.action.trade.asset.week52Low !== undefined ? prop.action.trade.asset.week52Low : undefined,
            day50MovingAverage: prop.action.trade.asset.day50MovingAverage !== undefined ? prop.action.trade.asset.day50MovingAverage : undefined,
            day200MovingAverage: prop.action.trade.asset.day200MovingAverage !== undefined ? prop.action.trade.asset.day200MovingAverage : undefined,
            sharesOutstanding: prop.action.trade.asset.sharesOutstanding !== undefined ? prop.action.trade.asset.sharesOutstanding : undefined,
            dividendDate: prop.action.trade.asset.dividendDate !== undefined ? prop.action.trade.asset.dividendDate : undefined,
            exDividendDate: prop.action.trade.asset.exDividendDate !== undefined ? prop.action.trade.asset.exDividendDate : undefined,
            askPrice: prop.action.trade.asset.askPrice !== undefined ? prop.action.trade.asset.askPrice : undefined,
            bidPrice: prop.action.trade.asset.bidPrice !== undefined ? prop.action.trade.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        sequence: prop.action.sequence !== undefined ? prop.action.sequence : undefined,
        type: prop.action.type !== undefined ? prop.action.type : undefined,
        note: prop.action.note !== undefined ? prop.action.note : undefined,
        status: prop.action.status !== undefined ? prop.action.status : undefined,
        fee: prop.action.fee !== undefined ? prop.action.fee : undefined,
    trade: prop.action.trade ? 
      typeof prop.action.trade === 'object' && Object.keys(prop.action.trade).length === 1 && Object.keys(prop.action.trade)[0] === 'id'
    ? { connect: {
          id: prop.action.trade.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.action.trade.id !== undefined ? prop.action.trade.id : undefined,
          alpacaAccountId: prop.action.trade.alpacaAccountId !== undefined ? {
              equals: prop.action.trade.alpacaAccountId 
             } : undefined,
          assetId: prop.action.trade.assetId !== undefined ? {
              equals: prop.action.trade.assetId 
             } : undefined,
        },
        create: {
          qty: prop.action.trade.qty !== undefined ? prop.action.trade.qty : undefined,
          price: prop.action.trade.price !== undefined ? prop.action.trade.price : undefined,
          total: prop.action.trade.total !== undefined ? prop.action.trade.total : undefined,
          optionType: prop.action.trade.optionType !== undefined ? prop.action.trade.optionType : undefined,
          signal: prop.action.trade.signal !== undefined ? prop.action.trade.signal : undefined,
          strategy: prop.action.trade.strategy !== undefined ? prop.action.trade.strategy : undefined,
          analysis: prop.action.trade.analysis !== undefined ? prop.action.trade.analysis : undefined,
          summary: prop.action.trade.summary !== undefined ? prop.action.trade.summary : undefined,
          confidence: prop.action.trade.confidence !== undefined ? prop.action.trade.confidence : undefined,
          timestamp: prop.action.trade.timestamp !== undefined ? prop.action.trade.timestamp : undefined,
          status: prop.action.trade.status !== undefined ? prop.action.trade.status : undefined,
      alpacaAccount: prop.action.trade.alpacaAccount ? 
        typeof prop.action.trade.alpacaAccount === 'object' && Object.keys(prop.action.trade.alpacaAccount).length === 1 && Object.keys(prop.action.trade.alpacaAccount)[0] === 'id'
    ? { connect: {
            id: prop.action.trade.alpacaAccount.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.action.trade.alpacaAccount.id !== undefined ? prop.action.trade.alpacaAccount.id : undefined,
            userId: prop.action.trade.alpacaAccount.userId !== undefined ? {
                equals: prop.action.trade.alpacaAccount.userId 
               } : undefined,
          },
          create: {
            type: prop.action.trade.alpacaAccount.type !== undefined ? prop.action.trade.alpacaAccount.type : undefined,
            APIKey: prop.action.trade.alpacaAccount.APIKey !== undefined ? prop.action.trade.alpacaAccount.APIKey : undefined,
            APISecret: prop.action.trade.alpacaAccount.APISecret !== undefined ? prop.action.trade.alpacaAccount.APISecret : undefined,
            configuration: prop.action.trade.alpacaAccount.configuration !== undefined ? prop.action.trade.alpacaAccount.configuration : undefined,
            marketOpen: prop.action.trade.alpacaAccount.marketOpen !== undefined ? prop.action.trade.alpacaAccount.marketOpen : undefined,
            minOrderSize: prop.action.trade.alpacaAccount.minOrderSize !== undefined ? prop.action.trade.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: prop.action.trade.alpacaAccount.maxOrderSize !== undefined ? prop.action.trade.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: prop.action.trade.alpacaAccount.minPercentageChange !== undefined ? prop.action.trade.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: prop.action.trade.alpacaAccount.volumeThreshold !== undefined ? prop.action.trade.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      asset: prop.action.trade.asset ? 
        typeof prop.action.trade.asset === 'object' && Object.keys(prop.action.trade.asset).length === 1 && Object.keys(prop.action.trade.asset)[0] === 'id'
    ? { connect: {
            id: prop.action.trade.asset.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.action.trade.asset.id !== undefined ? prop.action.trade.asset.id : undefined,
            symbol: prop.action.trade.asset.symbol !== undefined ? prop.action.trade.asset.symbol : undefined,
            name: prop.action.trade.asset.name !== undefined ? prop.action.trade.asset.name : undefined,
          },
          create: {
            symbol: prop.action.trade.asset.symbol !== undefined ? prop.action.trade.asset.symbol : undefined,
            name: prop.action.trade.asset.name !== undefined ? prop.action.trade.asset.name : undefined,
            type: prop.action.trade.asset.type !== undefined ? prop.action.trade.asset.type : undefined,
            logoUrl: prop.action.trade.asset.logoUrl !== undefined ? prop.action.trade.asset.logoUrl : undefined,
            description: prop.action.trade.asset.description !== undefined ? prop.action.trade.asset.description : undefined,
            cik: prop.action.trade.asset.cik !== undefined ? prop.action.trade.asset.cik : undefined,
            exchange: prop.action.trade.asset.exchange !== undefined ? prop.action.trade.asset.exchange : undefined,
            currency: prop.action.trade.asset.currency !== undefined ? prop.action.trade.asset.currency : undefined,
            country: prop.action.trade.asset.country !== undefined ? prop.action.trade.asset.country : undefined,
            sector: prop.action.trade.asset.sector !== undefined ? prop.action.trade.asset.sector : undefined,
            industry: prop.action.trade.asset.industry !== undefined ? prop.action.trade.asset.industry : undefined,
            address: prop.action.trade.asset.address !== undefined ? prop.action.trade.asset.address : undefined,
            officialSite: prop.action.trade.asset.officialSite !== undefined ? prop.action.trade.asset.officialSite : undefined,
            fiscalYearEnd: prop.action.trade.asset.fiscalYearEnd !== undefined ? prop.action.trade.asset.fiscalYearEnd : undefined,
            latestQuarter: prop.action.trade.asset.latestQuarter !== undefined ? prop.action.trade.asset.latestQuarter : undefined,
            marketCapitalization: prop.action.trade.asset.marketCapitalization !== undefined ? prop.action.trade.asset.marketCapitalization : undefined,
            ebitda: prop.action.trade.asset.ebitda !== undefined ? prop.action.trade.asset.ebitda : undefined,
            peRatio: prop.action.trade.asset.peRatio !== undefined ? prop.action.trade.asset.peRatio : undefined,
            pegRatio: prop.action.trade.asset.pegRatio !== undefined ? prop.action.trade.asset.pegRatio : undefined,
            bookValue: prop.action.trade.asset.bookValue !== undefined ? prop.action.trade.asset.bookValue : undefined,
            dividendPerShare: prop.action.trade.asset.dividendPerShare !== undefined ? prop.action.trade.asset.dividendPerShare : undefined,
            dividendYield: prop.action.trade.asset.dividendYield !== undefined ? prop.action.trade.asset.dividendYield : undefined,
            eps: prop.action.trade.asset.eps !== undefined ? prop.action.trade.asset.eps : undefined,
            revenuePerShareTTM: prop.action.trade.asset.revenuePerShareTTM !== undefined ? prop.action.trade.asset.revenuePerShareTTM : undefined,
            profitMargin: prop.action.trade.asset.profitMargin !== undefined ? prop.action.trade.asset.profitMargin : undefined,
            operatingMarginTTM: prop.action.trade.asset.operatingMarginTTM !== undefined ? prop.action.trade.asset.operatingMarginTTM : undefined,
            returnOnAssetsTTM: prop.action.trade.asset.returnOnAssetsTTM !== undefined ? prop.action.trade.asset.returnOnAssetsTTM : undefined,
            returnOnEquityTTM: prop.action.trade.asset.returnOnEquityTTM !== undefined ? prop.action.trade.asset.returnOnEquityTTM : undefined,
            revenueTTM: prop.action.trade.asset.revenueTTM !== undefined ? prop.action.trade.asset.revenueTTM : undefined,
            grossProfitTTM: prop.action.trade.asset.grossProfitTTM !== undefined ? prop.action.trade.asset.grossProfitTTM : undefined,
            dilutedEPSTTM: prop.action.trade.asset.dilutedEPSTTM !== undefined ? prop.action.trade.asset.dilutedEPSTTM : undefined,
            quarterlyEarningsGrowthYOY: prop.action.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.action.trade.asset.quarterlyEarningsGrowthYOY : undefined,
            quarterlyRevenueGrowthYOY: prop.action.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.action.trade.asset.quarterlyRevenueGrowthYOY : undefined,
            analystTargetPrice: prop.action.trade.asset.analystTargetPrice !== undefined ? prop.action.trade.asset.analystTargetPrice : undefined,
            analystRatingStrongBuy: prop.action.trade.asset.analystRatingStrongBuy !== undefined ? prop.action.trade.asset.analystRatingStrongBuy : undefined,
            analystRatingBuy: prop.action.trade.asset.analystRatingBuy !== undefined ? prop.action.trade.asset.analystRatingBuy : undefined,
            analystRatingHold: prop.action.trade.asset.analystRatingHold !== undefined ? prop.action.trade.asset.analystRatingHold : undefined,
            analystRatingSell: prop.action.trade.asset.analystRatingSell !== undefined ? prop.action.trade.asset.analystRatingSell : undefined,
            analystRatingStrongSell: prop.action.trade.asset.analystRatingStrongSell !== undefined ? prop.action.trade.asset.analystRatingStrongSell : undefined,
            trailingPE: prop.action.trade.asset.trailingPE !== undefined ? prop.action.trade.asset.trailingPE : undefined,
            forwardPE: prop.action.trade.asset.forwardPE !== undefined ? prop.action.trade.asset.forwardPE : undefined,
            priceToSalesRatioTTM: prop.action.trade.asset.priceToSalesRatioTTM !== undefined ? prop.action.trade.asset.priceToSalesRatioTTM : undefined,
            priceToBookRatio: prop.action.trade.asset.priceToBookRatio !== undefined ? prop.action.trade.asset.priceToBookRatio : undefined,
            evToRevenue: prop.action.trade.asset.evToRevenue !== undefined ? prop.action.trade.asset.evToRevenue : undefined,
            evToEbitda: prop.action.trade.asset.evToEbitda !== undefined ? prop.action.trade.asset.evToEbitda : undefined,
            beta: prop.action.trade.asset.beta !== undefined ? prop.action.trade.asset.beta : undefined,
            week52High: prop.action.trade.asset.week52High !== undefined ? prop.action.trade.asset.week52High : undefined,
            week52Low: prop.action.trade.asset.week52Low !== undefined ? prop.action.trade.asset.week52Low : undefined,
            day50MovingAverage: prop.action.trade.asset.day50MovingAverage !== undefined ? prop.action.trade.asset.day50MovingAverage : undefined,
            day200MovingAverage: prop.action.trade.asset.day200MovingAverage !== undefined ? prop.action.trade.asset.day200MovingAverage : undefined,
            sharesOutstanding: prop.action.trade.asset.sharesOutstanding !== undefined ? prop.action.trade.asset.sharesOutstanding : undefined,
            dividendDate: prop.action.trade.asset.dividendDate !== undefined ? prop.action.trade.asset.dividendDate : undefined,
            exDividendDate: prop.action.trade.asset.exDividendDate !== undefined ? prop.action.trade.asset.exDividendDate : undefined,
            askPrice: prop.action.trade.asset.askPrice !== undefined ? prop.action.trade.asset.askPrice : undefined,
            bidPrice: prop.action.trade.asset.bidPrice !== undefined ? prop.action.trade.asset.bidPrice : undefined,
          },
        }
      } : undefined,
        },
      }
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
    trades: prop.asset.trades ? {
      upsert: prop.asset.trades.map((item: any) => ({
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
    trades: prop.asset.trades ? 
      Array.isArray(prop.asset.trades) && prop.asset.trades.length > 0 &&  prop.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.asset.trades.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.asset.trades.map((item: any) => ({
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

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_ORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyOrder) {
        return response.data.updateManyOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyOrder:', error);
      throw error;
    }
  },

  /**
   * Delete a single Order record.
   * @param props - Properties to update.
   * @returns The deleted Order or null.
   */
  async delete(props: OrderType): Promise<OrderType> {

      const DELETE_ONE_ORDER = gql`
      mutation deleteOneOrder($where: OrderWhereUniqueInput!) {
        deleteOneOrder(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_ORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneOrder) {
        return response.data.deleteOneOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneOrder:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Order record by ID.
   * @param props - Properties to update.
   * @returns The retrieved Order or null.
   */
  async get(props: OrderType): Promise<OrderType | null> {

      const GET_ORDER = gql`
      query getOrder($where: OrderWhereUniqueInput!) {
        getOrder(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  clientOrderId: props.clientOrderId !== undefined ? props.clientOrderId : undefined,
  actionId: props.actionId !== undefined ? props.actionId : undefined,
  stopLossId: props.stopLossId !== undefined ? props.stopLossId : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
  assetId: props.assetId !== undefined ? {
    equals: props.assetId 
  } : undefined,
  side: props.side !== undefined ? props.side : undefined,
  type: props.type !== undefined ? props.type : undefined,
  orderClass: props.orderClass !== undefined ? props.orderClass : undefined,
  timeInForce: props.timeInForce !== undefined ? props.timeInForce : undefined,
  status: props.status !== undefined ? props.status : undefined,
  createdAt: props.createdAt !== undefined ? props.createdAt : undefined,
  updatedAt: props.updatedAt !== undefined ? props.updatedAt : undefined,
  submittedAt: props.submittedAt !== undefined ? props.submittedAt : undefined,
  filledAt: props.filledAt !== undefined ? props.filledAt : undefined,
  cancelRequestedAt: props.cancelRequestedAt !== undefined ? props.cancelRequestedAt : undefined,
  canceledAt: props.canceledAt !== undefined ? props.canceledAt : undefined,
  expirationDate: props.expirationDate !== undefined ? props.expirationDate : undefined,
  optionType: props.optionType !== undefined ? props.optionType : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_ORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getOrder ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Order found') {
        return null;
      } else {
        console.error('Error in getOrder:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Orders records.
   * @returns An array of Order records or null.
   */
  async getAll(): Promise<OrderType[] | null> {

      const GET_ALL_ORDER = gql`
      query getAllOrder {
        orders {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_ORDER });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.orders ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Order found') {
        return null;
      } else {
        console.error('Error in getOrder:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Order records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found Order records or null.
   */
  async findMany(props: OrderType): Promise<OrderType[] | null> {

      const FIND_MANY_ORDER = gql`
      query findManyOrder($where: OrderWhereInput!) {
        orders(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  clientOrderId: props.clientOrderId !== undefined ? {
    equals: props.clientOrderId 
  } : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
  assetId: props.assetId !== undefined ? {
    equals: props.assetId 
  } : undefined,
  side: props.side !== undefined ? props.side : undefined,
  type: props.type !== undefined ? props.type : undefined,
  orderClass: props.orderClass !== undefined ? props.orderClass : undefined,
  timeInForce: props.timeInForce !== undefined ? props.timeInForce : undefined,
  status: props.status !== undefined ? props.status : undefined,
  createdAt: props.createdAt !== undefined ? props.createdAt : undefined,
  updatedAt: props.updatedAt !== undefined ? props.updatedAt : undefined,
  submittedAt: props.submittedAt !== undefined ? props.submittedAt : undefined,
  filledAt: props.filledAt !== undefined ? props.filledAt : undefined,
  cancelRequestedAt: props.cancelRequestedAt !== undefined ? props.cancelRequestedAt : undefined,
  canceledAt: props.canceledAt !== undefined ? props.canceledAt : undefined,
  expirationDate: props.expirationDate !== undefined ? props.expirationDate : undefined,
  optionType: props.optionType !== undefined ? props.optionType : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_ORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Orders) {
        return response.data.orders;
      } else {
       return [] as OrderType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Order found') {
        return null;
      } else {
        console.error('Error in getOrder:', error);
        throw error;
      }
    }
  }
};
