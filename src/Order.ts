
  
import { Order as OrderType } from './generated/typegraphql-prisma/models/Order';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
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
    dependsOn
    dependedOnBy
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
  contractId

  `;

  export const Order = {

    /**
     * Create a new Order record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Order or null.
     */

    async create(props: OrderType, globalClient?: ApolloClient<any>): Promise<OrderType> {

    const client = globalClient || importedClient;

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
      }}
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
      }}
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
      }}
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
        configuration: props.alpacaAccount.configuration !== undefined ? {
          set: props.alpacaAccount.configuration
        } : undefined,
        marketOpen: props.alpacaAccount.marketOpen !== undefined ? props.alpacaAccount.marketOpen : undefined,
        realTime: props.alpacaAccount.realTime !== undefined ? props.alpacaAccount.realTime : undefined,
        minOrderSize: props.alpacaAccount.minOrderSize !== undefined ? props.alpacaAccount.minOrderSize : undefined,
        maxOrderSize: props.alpacaAccount.maxOrderSize !== undefined ? props.alpacaAccount.maxOrderSize : undefined,
        minPercentageChange: props.alpacaAccount.minPercentageChange !== undefined ? props.alpacaAccount.minPercentageChange : undefined,
        volumeThreshold: props.alpacaAccount.volumeThreshold !== undefined ? props.alpacaAccount.volumeThreshold : undefined,
    user: props.alpacaAccount.user ? 
      typeof props.alpacaAccount.user === 'object' && Object.keys(props.alpacaAccount.user).length === 1 && Object.keys(props.alpacaAccount.user)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.user.id
        }}
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
          }}
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
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 && props.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.alpacaAccount.user.accounts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.alpacaAccount.user.accounts.map((item: any) => ({
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
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 && props.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.alpacaAccount.user.sessions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.alpacaAccount.user.sessions.map((item: any) => ({
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
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 && props.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.alpacaAccount.user.authenticators.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item: any) => ({
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
      Array.isArray(props.alpacaAccount.trades) && props.alpacaAccount.trades.length > 0 && props.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.alpacaAccount.trades.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.alpacaAccount.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
          }}
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
        Array.isArray(item.actions) && item.actions.length > 0 && item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.actions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.actions.map((item: any) => ({
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
            dependsOn: item.dependsOn !== undefined ? {
              set: item.dependsOn
            } : undefined,
            dependedOnBy: item.dependedOnBy !== undefined ? {
              set: item.dependedOnBy
            } : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    positions: props.alpacaAccount.positions ? 
      Array.isArray(props.alpacaAccount.positions) && props.alpacaAccount.positions.length > 0 && props.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.alpacaAccount.positions.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.alpacaAccount.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
          }}
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
      Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 && props.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.alpacaAccount.alerts.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.alpacaAccount.alerts.map((item: any) => ({
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
      }}
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
        dependsOn: props.action.dependsOn !== undefined ? {
          set: props.action.dependsOn
        } : undefined,
        dependedOnBy: props.action.dependedOnBy !== undefined ? {
          set: props.action.dependedOnBy
        } : undefined,
    trade: props.action.trade ? 
      typeof props.action.trade === 'object' && Object.keys(props.action.trade).length === 1 && Object.keys(props.action.trade)[0] === 'id'
    ? { connect: {
          id: props.action.trade.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.action.trade.id !== undefined ? props.action.trade.id : undefined,
          alpacaAccountId: props.action.trade.alpacaAccountId !== undefined ? {
              equals: props.action.trade.alpacaAccountId 
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
          }}
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
            configuration: props.action.trade.alpacaAccount.configuration !== undefined ? {
              set: props.action.trade.alpacaAccount.configuration
            } : undefined,
            marketOpen: props.action.trade.alpacaAccount.marketOpen !== undefined ? props.action.trade.alpacaAccount.marketOpen : undefined,
            realTime: props.action.trade.alpacaAccount.realTime !== undefined ? props.action.trade.alpacaAccount.realTime : undefined,
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
          }}
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
      }}
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
      Array.isArray(props.asset.trades) && props.asset.trades.length > 0 && props.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.trades.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
          }}
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
            configuration: item.alpacaAccount.configuration !== undefined ? {
              set: item.alpacaAccount.configuration
            } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 && item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.actions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.actions.map((item: any) => ({
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
            dependsOn: item.dependsOn !== undefined ? {
              set: item.dependsOn
            } : undefined,
            dependedOnBy: item.dependedOnBy !== undefined ? {
              set: item.dependedOnBy
            } : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    positions: props.asset.positions ? 
      Array.isArray(props.asset.positions) && props.asset.positions.length > 0 && props.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.positions.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
          }}
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
            configuration: item.alpacaAccount.configuration !== undefined ? {
              set: item.alpacaAccount.configuration
            } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
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
      Array.isArray(props.asset.newsMentions) && props.asset.newsMentions.length > 0 && props.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.newsMentions.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.newsMentions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          url: item.url !== undefined ? item.url : undefined,
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
          }}
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
            authors: item.news.authors !== undefined ? {
              set: item.news.authors
            } : undefined,
            summary: item.news.summary !== undefined ? item.news.summary : undefined,
            bannerImage: item.news.bannerImage !== undefined ? item.news.bannerImage : undefined,
            timePublished: item.news.timePublished !== undefined ? item.news.timePublished : undefined,
            category: item.news.category !== undefined ? item.news.category : undefined,
            topics: item.news.topics !== undefined ? {
              set: item.news.topics
            } : undefined,
            logo: item.news.logo !== undefined ? item.news.logo : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    contracts: props.asset.contracts ? 
      Array.isArray(props.asset.contracts) && props.asset.contracts.length > 0 && props.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.contracts.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.contracts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaId: item.alpacaId !== undefined ? item.alpacaId : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          name: item.name !== undefined ? {
              equals: item.name 
             } : undefined,
          underlyingAssetId: item.underlyingAssetId !== undefined ? {
              equals: item.underlyingAssetId 
             } : undefined,
        },
        create: {
          alpacaId: item.alpacaId !== undefined ? item.alpacaId : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          name: item.name !== undefined ? item.name : undefined,
          status: item.status !== undefined ? item.status : undefined,
          tradable: item.tradable !== undefined ? item.tradable : undefined,
          expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
          rootSymbol: item.rootSymbol !== undefined ? item.rootSymbol : undefined,
          underlyingSymbol: item.underlyingSymbol !== undefined ? item.underlyingSymbol : undefined,
          underlyingAssetId: item.underlyingAssetId !== undefined ? item.underlyingAssetId : undefined,
          type: item.type !== undefined ? item.type : undefined,
          style: item.style !== undefined ? item.style : undefined,
          strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
          multiplier: item.multiplier !== undefined ? item.multiplier : undefined,
          size: item.size !== undefined ? item.size : undefined,
          openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
          openInterestDate: item.openInterestDate !== undefined ? item.openInterestDate : undefined,
          closePrice: item.closePrice !== undefined ? item.closePrice : undefined,
          closePriceDate: item.closePriceDate !== undefined ? item.closePriceDate : undefined,
          ppind: item.ppind !== undefined ? item.ppind : undefined,
          orderId: item.orderId !== undefined ? item.orderId : undefined,
      deliverables: item.deliverables ? 
        Array.isArray(item.deliverables) && item.deliverables.length > 0 && item.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.deliverables.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.deliverables.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            assetId: item.assetId !== undefined ? item.assetId : undefined,
            amount: item.amount !== undefined ? item.amount : undefined,
            allocationPercentage: item.allocationPercentage !== undefined ? item.allocationPercentage : undefined,
            settlementType: item.settlementType !== undefined ? item.settlementType : undefined,
            settlementMethod: item.settlementMethod !== undefined ? item.settlementMethod : undefined,
            delayedSettlement: item.delayedSettlement !== undefined ? item.delayedSettlement : undefined,
          },
        }))
      } : undefined,
      order: item.order ? 
        typeof item.order === 'object' && Object.keys(item.order).length === 1 && Object.keys(item.order)[0] === 'id'
    ? { connect: {
            id: item.order.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.order.id !== undefined ? item.order.id : undefined,
            clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
            actionId: item.order.actionId !== undefined ? item.order.actionId : undefined,
            stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
            contractId: item.order.contractId !== undefined ? item.order.contractId : undefined,
            alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
                equals: item.order.alpacaAccountId 
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
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  contract: props.contract ? 
    typeof props.contract === 'object' && Object.keys(props.contract).length === 1 && Object.keys(props.contract)[0] === 'id'
    ? { connect: {
        id: props.contract.id
      }}
    : { connectOrCreate: {
      where: {
        id: props.contract.id !== undefined ? props.contract.id : undefined,
        alpacaId: props.contract.alpacaId !== undefined ? props.contract.alpacaId : undefined,
        symbol: props.contract.symbol !== undefined ? props.contract.symbol : undefined,
        name: props.contract.name !== undefined ? {
            equals: props.contract.name 
           } : undefined,
        underlyingAssetId: props.contract.underlyingAssetId !== undefined ? {
            equals: props.contract.underlyingAssetId 
           } : undefined,
      },
      create: {
        alpacaId: props.contract.alpacaId !== undefined ? props.contract.alpacaId : undefined,
        symbol: props.contract.symbol !== undefined ? props.contract.symbol : undefined,
        name: props.contract.name !== undefined ? props.contract.name : undefined,
        status: props.contract.status !== undefined ? props.contract.status : undefined,
        tradable: props.contract.tradable !== undefined ? props.contract.tradable : undefined,
        expirationDate: props.contract.expirationDate !== undefined ? props.contract.expirationDate : undefined,
        rootSymbol: props.contract.rootSymbol !== undefined ? props.contract.rootSymbol : undefined,
        underlyingSymbol: props.contract.underlyingSymbol !== undefined ? props.contract.underlyingSymbol : undefined,
        underlyingAssetId: props.contract.underlyingAssetId !== undefined ? props.contract.underlyingAssetId : undefined,
        type: props.contract.type !== undefined ? props.contract.type : undefined,
        style: props.contract.style !== undefined ? props.contract.style : undefined,
        strikePrice: props.contract.strikePrice !== undefined ? props.contract.strikePrice : undefined,
        multiplier: props.contract.multiplier !== undefined ? props.contract.multiplier : undefined,
        size: props.contract.size !== undefined ? props.contract.size : undefined,
        openInterest: props.contract.openInterest !== undefined ? props.contract.openInterest : undefined,
        openInterestDate: props.contract.openInterestDate !== undefined ? props.contract.openInterestDate : undefined,
        closePrice: props.contract.closePrice !== undefined ? props.contract.closePrice : undefined,
        closePriceDate: props.contract.closePriceDate !== undefined ? props.contract.closePriceDate : undefined,
        ppind: props.contract.ppind !== undefined ? props.contract.ppind : undefined,
        orderId: props.contract.orderId !== undefined ? props.contract.orderId : undefined,
    deliverables: props.contract.deliverables ? 
      Array.isArray(props.contract.deliverables) && props.contract.deliverables.length > 0 && props.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.contract.deliverables.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.contract.deliverables.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol 
             } : undefined,
          contractId: item.contractId !== undefined ? {
              equals: item.contractId 
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          assetId: item.assetId !== undefined ? item.assetId : undefined,
          amount: item.amount !== undefined ? item.amount : undefined,
          allocationPercentage: item.allocationPercentage !== undefined ? item.allocationPercentage : undefined,
          settlementType: item.settlementType !== undefined ? item.settlementType : undefined,
          settlementMethod: item.settlementMethod !== undefined ? item.settlementMethod : undefined,
          delayedSettlement: item.delayedSettlement !== undefined ? item.delayedSettlement : undefined,
        },
      }))
    } : undefined,
    asset: props.contract.asset ? 
      typeof props.contract.asset === 'object' && Object.keys(props.contract.asset).length === 1 && Object.keys(props.contract.asset)[0] === 'id'
    ? { connect: {
          id: props.contract.asset.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.contract.asset.id !== undefined ? props.contract.asset.id : undefined,
          symbol: props.contract.asset.symbol !== undefined ? props.contract.asset.symbol : undefined,
          name: props.contract.asset.name !== undefined ? props.contract.asset.name : undefined,
        },
        create: {
          symbol: props.contract.asset.symbol !== undefined ? props.contract.asset.symbol : undefined,
          name: props.contract.asset.name !== undefined ? props.contract.asset.name : undefined,
          type: props.contract.asset.type !== undefined ? props.contract.asset.type : undefined,
          logoUrl: props.contract.asset.logoUrl !== undefined ? props.contract.asset.logoUrl : undefined,
          description: props.contract.asset.description !== undefined ? props.contract.asset.description : undefined,
          cik: props.contract.asset.cik !== undefined ? props.contract.asset.cik : undefined,
          exchange: props.contract.asset.exchange !== undefined ? props.contract.asset.exchange : undefined,
          currency: props.contract.asset.currency !== undefined ? props.contract.asset.currency : undefined,
          country: props.contract.asset.country !== undefined ? props.contract.asset.country : undefined,
          sector: props.contract.asset.sector !== undefined ? props.contract.asset.sector : undefined,
          industry: props.contract.asset.industry !== undefined ? props.contract.asset.industry : undefined,
          address: props.contract.asset.address !== undefined ? props.contract.asset.address : undefined,
          officialSite: props.contract.asset.officialSite !== undefined ? props.contract.asset.officialSite : undefined,
          fiscalYearEnd: props.contract.asset.fiscalYearEnd !== undefined ? props.contract.asset.fiscalYearEnd : undefined,
          latestQuarter: props.contract.asset.latestQuarter !== undefined ? props.contract.asset.latestQuarter : undefined,
          marketCapitalization: props.contract.asset.marketCapitalization !== undefined ? props.contract.asset.marketCapitalization : undefined,
          ebitda: props.contract.asset.ebitda !== undefined ? props.contract.asset.ebitda : undefined,
          peRatio: props.contract.asset.peRatio !== undefined ? props.contract.asset.peRatio : undefined,
          pegRatio: props.contract.asset.pegRatio !== undefined ? props.contract.asset.pegRatio : undefined,
          bookValue: props.contract.asset.bookValue !== undefined ? props.contract.asset.bookValue : undefined,
          dividendPerShare: props.contract.asset.dividendPerShare !== undefined ? props.contract.asset.dividendPerShare : undefined,
          dividendYield: props.contract.asset.dividendYield !== undefined ? props.contract.asset.dividendYield : undefined,
          eps: props.contract.asset.eps !== undefined ? props.contract.asset.eps : undefined,
          revenuePerShareTTM: props.contract.asset.revenuePerShareTTM !== undefined ? props.contract.asset.revenuePerShareTTM : undefined,
          profitMargin: props.contract.asset.profitMargin !== undefined ? props.contract.asset.profitMargin : undefined,
          operatingMarginTTM: props.contract.asset.operatingMarginTTM !== undefined ? props.contract.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.contract.asset.returnOnAssetsTTM !== undefined ? props.contract.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.contract.asset.returnOnEquityTTM !== undefined ? props.contract.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.contract.asset.revenueTTM !== undefined ? props.contract.asset.revenueTTM : undefined,
          grossProfitTTM: props.contract.asset.grossProfitTTM !== undefined ? props.contract.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.contract.asset.dilutedEPSTTM !== undefined ? props.contract.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? props.contract.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? props.contract.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.contract.asset.analystTargetPrice !== undefined ? props.contract.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.contract.asset.analystRatingStrongBuy !== undefined ? props.contract.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.contract.asset.analystRatingBuy !== undefined ? props.contract.asset.analystRatingBuy : undefined,
          analystRatingHold: props.contract.asset.analystRatingHold !== undefined ? props.contract.asset.analystRatingHold : undefined,
          analystRatingSell: props.contract.asset.analystRatingSell !== undefined ? props.contract.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.contract.asset.analystRatingStrongSell !== undefined ? props.contract.asset.analystRatingStrongSell : undefined,
          trailingPE: props.contract.asset.trailingPE !== undefined ? props.contract.asset.trailingPE : undefined,
          forwardPE: props.contract.asset.forwardPE !== undefined ? props.contract.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.contract.asset.priceToSalesRatioTTM !== undefined ? props.contract.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.contract.asset.priceToBookRatio !== undefined ? props.contract.asset.priceToBookRatio : undefined,
          evToRevenue: props.contract.asset.evToRevenue !== undefined ? props.contract.asset.evToRevenue : undefined,
          evToEbitda: props.contract.asset.evToEbitda !== undefined ? props.contract.asset.evToEbitda : undefined,
          beta: props.contract.asset.beta !== undefined ? props.contract.asset.beta : undefined,
          week52High: props.contract.asset.week52High !== undefined ? props.contract.asset.week52High : undefined,
          week52Low: props.contract.asset.week52Low !== undefined ? props.contract.asset.week52Low : undefined,
          day50MovingAverage: props.contract.asset.day50MovingAverage !== undefined ? props.contract.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.contract.asset.day200MovingAverage !== undefined ? props.contract.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.contract.asset.sharesOutstanding !== undefined ? props.contract.asset.sharesOutstanding : undefined,
          dividendDate: props.contract.asset.dividendDate !== undefined ? props.contract.asset.dividendDate : undefined,
          exDividendDate: props.contract.asset.exDividendDate !== undefined ? props.contract.asset.exDividendDate : undefined,
          askPrice: props.contract.asset.askPrice !== undefined ? props.contract.asset.askPrice : undefined,
          bidPrice: props.contract.asset.bidPrice !== undefined ? props.contract.asset.bidPrice : undefined,
      trades: props.contract.asset.trades ? 
        Array.isArray(props.contract.asset.trades) && props.contract.asset.trades.length > 0 && props.contract.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.contract.asset.trades.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.contract.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
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
          },
        }))
      } : undefined,
      orders: props.contract.asset.orders ? 
        Array.isArray(props.contract.asset.orders) && props.contract.asset.orders.length > 0 && props.contract.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.contract.asset.orders.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.contract.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            actionId: item.actionId !== undefined ? item.actionId : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            contractId: item.contractId !== undefined ? item.contractId : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
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
          },
        }))
      } : undefined,
      positions: props.contract.asset.positions ? 
        Array.isArray(props.contract.asset.positions) && props.contract.asset.positions.length > 0 && props.contract.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.contract.asset.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.contract.asset.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
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
          },
        }))
      } : undefined,
      newsMentions: props.contract.asset.newsMentions ? 
        Array.isArray(props.contract.asset.newsMentions) && props.contract.asset.newsMentions.length > 0 && props.contract.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.contract.asset.newsMentions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.contract.asset.newsMentions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            url: item.url !== undefined ? item.url : undefined,
            newsArticleId: item.newsArticleId !== undefined ? {
                equals: item.newsArticleId 
               } : undefined,
          },
          create: {
            url: item.url !== undefined ? item.url : undefined,
            relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
            sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
            sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
          },
        }))
      } : undefined,
        },
      }
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
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: OrderType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

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
  contractId: prop.contractId !== undefined ? prop.contractId : undefined,
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
   * @param globalClient - Apollo Client instance.
   * @returns The updated Order or null.
   */
  async update(props: OrderType, globalClient?: ApolloClient<any>): Promise<OrderType> {

    const client = globalClient || importedClient;

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
  contractId: props.contractId !== undefined ? props.contractId : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
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
  stopLoss: props.stopLoss !== undefined ? {
    set: props.stopLoss
  } : undefined,
  takeProfit: props.takeProfit !== undefined ? {
    set: props.takeProfit
  } : undefined,
  alpacaAccount: props.alpacaAccount !== undefined ? {
    set: props.alpacaAccount
  } : undefined,
  action: props.action !== undefined ? {
    set: props.action
  } : undefined,
  asset: props.asset !== undefined ? {
    set: props.asset
  } : undefined,
  contract: props.contract !== undefined ? {
    set: props.contract
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
   * Upsert a single Order record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Order or null.
   */
  async upsert(props: OrderType, globalClient?: ApolloClient<any>): Promise<OrderType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_ORDER = gql`
      mutation upsertOneOrder($where: OrderWhereUniqueInput!, $create: OrderCreateInput!, $update: OrderUpdateInput!) {
        upsertOneOrder(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  clientOrderId: props.clientOrderId !== undefined ? props.clientOrderId : undefined,
  actionId: props.actionId !== undefined ? props.actionId : undefined,
  stopLossId: props.stopLossId !== undefined ? props.stopLossId : undefined,
  contractId: props.contractId !== undefined ? props.contractId : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
      },
      create: {
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
      }}
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
      }}
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
      }}
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
        configuration: props.alpacaAccount.configuration !== undefined ? {
          set: props.alpacaAccount.configuration
        } : undefined,
        marketOpen: props.alpacaAccount.marketOpen !== undefined ? props.alpacaAccount.marketOpen : undefined,
        realTime: props.alpacaAccount.realTime !== undefined ? props.alpacaAccount.realTime : undefined,
        minOrderSize: props.alpacaAccount.minOrderSize !== undefined ? props.alpacaAccount.minOrderSize : undefined,
        maxOrderSize: props.alpacaAccount.maxOrderSize !== undefined ? props.alpacaAccount.maxOrderSize : undefined,
        minPercentageChange: props.alpacaAccount.minPercentageChange !== undefined ? props.alpacaAccount.minPercentageChange : undefined,
        volumeThreshold: props.alpacaAccount.volumeThreshold !== undefined ? props.alpacaAccount.volumeThreshold : undefined,
    user: props.alpacaAccount.user ? 
      typeof props.alpacaAccount.user === 'object' && Object.keys(props.alpacaAccount.user).length === 1 && Object.keys(props.alpacaAccount.user)[0] === 'id'
    ? { connect: {
          id: props.alpacaAccount.user.id
        }}
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
          }}
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
        Array.isArray(props.alpacaAccount.user.accounts) && props.alpacaAccount.user.accounts.length > 0 && props.alpacaAccount.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.alpacaAccount.user.accounts.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.alpacaAccount.user.accounts.map((item: any) => ({
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
        Array.isArray(props.alpacaAccount.user.sessions) && props.alpacaAccount.user.sessions.length > 0 && props.alpacaAccount.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.alpacaAccount.user.sessions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.alpacaAccount.user.sessions.map((item: any) => ({
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
        Array.isArray(props.alpacaAccount.user.authenticators) && props.alpacaAccount.user.authenticators.length > 0 && props.alpacaAccount.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.alpacaAccount.user.authenticators.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.alpacaAccount.user.authenticators.map((item: any) => ({
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
      Array.isArray(props.alpacaAccount.trades) && props.alpacaAccount.trades.length > 0 && props.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.alpacaAccount.trades.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.alpacaAccount.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
          }}
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
        Array.isArray(item.actions) && item.actions.length > 0 && item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.actions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.actions.map((item: any) => ({
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
            dependsOn: item.dependsOn !== undefined ? {
              set: item.dependsOn
            } : undefined,
            dependedOnBy: item.dependedOnBy !== undefined ? {
              set: item.dependedOnBy
            } : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    positions: props.alpacaAccount.positions ? 
      Array.isArray(props.alpacaAccount.positions) && props.alpacaAccount.positions.length > 0 && props.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.alpacaAccount.positions.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.alpacaAccount.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
          }}
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
      Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0 && props.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.alpacaAccount.alerts.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.alpacaAccount.alerts.map((item: any) => ({
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
      }}
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
        dependsOn: props.action.dependsOn !== undefined ? {
          set: props.action.dependsOn
        } : undefined,
        dependedOnBy: props.action.dependedOnBy !== undefined ? {
          set: props.action.dependedOnBy
        } : undefined,
    trade: props.action.trade ? 
      typeof props.action.trade === 'object' && Object.keys(props.action.trade).length === 1 && Object.keys(props.action.trade)[0] === 'id'
    ? { connect: {
          id: props.action.trade.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.action.trade.id !== undefined ? props.action.trade.id : undefined,
          alpacaAccountId: props.action.trade.alpacaAccountId !== undefined ? {
              equals: props.action.trade.alpacaAccountId 
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
          }}
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
            configuration: props.action.trade.alpacaAccount.configuration !== undefined ? {
              set: props.action.trade.alpacaAccount.configuration
            } : undefined,
            marketOpen: props.action.trade.alpacaAccount.marketOpen !== undefined ? props.action.trade.alpacaAccount.marketOpen : undefined,
            realTime: props.action.trade.alpacaAccount.realTime !== undefined ? props.action.trade.alpacaAccount.realTime : undefined,
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
          }}
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
      }}
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
      Array.isArray(props.asset.trades) && props.asset.trades.length > 0 && props.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.trades.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
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
          }}
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
            configuration: item.alpacaAccount.configuration !== undefined ? {
              set: item.alpacaAccount.configuration
            } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
            minOrderSize: item.alpacaAccount.minOrderSize !== undefined ? item.alpacaAccount.minOrderSize : undefined,
            maxOrderSize: item.alpacaAccount.maxOrderSize !== undefined ? item.alpacaAccount.maxOrderSize : undefined,
            minPercentageChange: item.alpacaAccount.minPercentageChange !== undefined ? item.alpacaAccount.minPercentageChange : undefined,
            volumeThreshold: item.alpacaAccount.volumeThreshold !== undefined ? item.alpacaAccount.volumeThreshold : undefined,
          },
        }
      } : undefined,
      actions: item.actions ? 
        Array.isArray(item.actions) && item.actions.length > 0 && item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.actions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.actions.map((item: any) => ({
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
            dependsOn: item.dependsOn !== undefined ? {
              set: item.dependsOn
            } : undefined,
            dependedOnBy: item.dependedOnBy !== undefined ? {
              set: item.dependedOnBy
            } : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    positions: props.asset.positions ? 
      Array.isArray(props.asset.positions) && props.asset.positions.length > 0 && props.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.positions.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
          }}
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
            configuration: item.alpacaAccount.configuration !== undefined ? {
              set: item.alpacaAccount.configuration
            } : undefined,
            marketOpen: item.alpacaAccount.marketOpen !== undefined ? item.alpacaAccount.marketOpen : undefined,
            realTime: item.alpacaAccount.realTime !== undefined ? item.alpacaAccount.realTime : undefined,
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
      Array.isArray(props.asset.newsMentions) && props.asset.newsMentions.length > 0 && props.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.newsMentions.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.newsMentions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          url: item.url !== undefined ? item.url : undefined,
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
          }}
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
            authors: item.news.authors !== undefined ? {
              set: item.news.authors
            } : undefined,
            summary: item.news.summary !== undefined ? item.news.summary : undefined,
            bannerImage: item.news.bannerImage !== undefined ? item.news.bannerImage : undefined,
            timePublished: item.news.timePublished !== undefined ? item.news.timePublished : undefined,
            category: item.news.category !== undefined ? item.news.category : undefined,
            topics: item.news.topics !== undefined ? {
              set: item.news.topics
            } : undefined,
            logo: item.news.logo !== undefined ? item.news.logo : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    contracts: props.asset.contracts ? 
      Array.isArray(props.asset.contracts) && props.asset.contracts.length > 0 && props.asset.contracts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.asset.contracts.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.asset.contracts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaId: item.alpacaId !== undefined ? item.alpacaId : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          name: item.name !== undefined ? {
              equals: item.name 
             } : undefined,
          underlyingAssetId: item.underlyingAssetId !== undefined ? {
              equals: item.underlyingAssetId 
             } : undefined,
        },
        create: {
          alpacaId: item.alpacaId !== undefined ? item.alpacaId : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          name: item.name !== undefined ? item.name : undefined,
          status: item.status !== undefined ? item.status : undefined,
          tradable: item.tradable !== undefined ? item.tradable : undefined,
          expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
          rootSymbol: item.rootSymbol !== undefined ? item.rootSymbol : undefined,
          underlyingSymbol: item.underlyingSymbol !== undefined ? item.underlyingSymbol : undefined,
          underlyingAssetId: item.underlyingAssetId !== undefined ? item.underlyingAssetId : undefined,
          type: item.type !== undefined ? item.type : undefined,
          style: item.style !== undefined ? item.style : undefined,
          strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
          multiplier: item.multiplier !== undefined ? item.multiplier : undefined,
          size: item.size !== undefined ? item.size : undefined,
          openInterest: item.openInterest !== undefined ? item.openInterest : undefined,
          openInterestDate: item.openInterestDate !== undefined ? item.openInterestDate : undefined,
          closePrice: item.closePrice !== undefined ? item.closePrice : undefined,
          closePriceDate: item.closePriceDate !== undefined ? item.closePriceDate : undefined,
          ppind: item.ppind !== undefined ? item.ppind : undefined,
          orderId: item.orderId !== undefined ? item.orderId : undefined,
      deliverables: item.deliverables ? 
        Array.isArray(item.deliverables) && item.deliverables.length > 0 && item.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: item.deliverables.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: item.deliverables.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            type: item.type !== undefined ? item.type : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            assetId: item.assetId !== undefined ? item.assetId : undefined,
            amount: item.amount !== undefined ? item.amount : undefined,
            allocationPercentage: item.allocationPercentage !== undefined ? item.allocationPercentage : undefined,
            settlementType: item.settlementType !== undefined ? item.settlementType : undefined,
            settlementMethod: item.settlementMethod !== undefined ? item.settlementMethod : undefined,
            delayedSettlement: item.delayedSettlement !== undefined ? item.delayedSettlement : undefined,
          },
        }))
      } : undefined,
      order: item.order ? 
        typeof item.order === 'object' && Object.keys(item.order).length === 1 && Object.keys(item.order)[0] === 'id'
    ? { connect: {
            id: item.order.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.order.id !== undefined ? item.order.id : undefined,
            clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
            actionId: item.order.actionId !== undefined ? item.order.actionId : undefined,
            stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
            contractId: item.order.contractId !== undefined ? item.order.contractId : undefined,
            alpacaAccountId: item.order.alpacaAccountId !== undefined ? {
                equals: item.order.alpacaAccountId 
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
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  contract: props.contract ? 
    typeof props.contract === 'object' && Object.keys(props.contract).length === 1 && Object.keys(props.contract)[0] === 'id'
    ? { connect: {
        id: props.contract.id
      }}
    : { connectOrCreate: {
      where: {
        id: props.contract.id !== undefined ? props.contract.id : undefined,
        alpacaId: props.contract.alpacaId !== undefined ? props.contract.alpacaId : undefined,
        symbol: props.contract.symbol !== undefined ? props.contract.symbol : undefined,
        name: props.contract.name !== undefined ? {
            equals: props.contract.name 
           } : undefined,
        underlyingAssetId: props.contract.underlyingAssetId !== undefined ? {
            equals: props.contract.underlyingAssetId 
           } : undefined,
      },
      create: {
        alpacaId: props.contract.alpacaId !== undefined ? props.contract.alpacaId : undefined,
        symbol: props.contract.symbol !== undefined ? props.contract.symbol : undefined,
        name: props.contract.name !== undefined ? props.contract.name : undefined,
        status: props.contract.status !== undefined ? props.contract.status : undefined,
        tradable: props.contract.tradable !== undefined ? props.contract.tradable : undefined,
        expirationDate: props.contract.expirationDate !== undefined ? props.contract.expirationDate : undefined,
        rootSymbol: props.contract.rootSymbol !== undefined ? props.contract.rootSymbol : undefined,
        underlyingSymbol: props.contract.underlyingSymbol !== undefined ? props.contract.underlyingSymbol : undefined,
        underlyingAssetId: props.contract.underlyingAssetId !== undefined ? props.contract.underlyingAssetId : undefined,
        type: props.contract.type !== undefined ? props.contract.type : undefined,
        style: props.contract.style !== undefined ? props.contract.style : undefined,
        strikePrice: props.contract.strikePrice !== undefined ? props.contract.strikePrice : undefined,
        multiplier: props.contract.multiplier !== undefined ? props.contract.multiplier : undefined,
        size: props.contract.size !== undefined ? props.contract.size : undefined,
        openInterest: props.contract.openInterest !== undefined ? props.contract.openInterest : undefined,
        openInterestDate: props.contract.openInterestDate !== undefined ? props.contract.openInterestDate : undefined,
        closePrice: props.contract.closePrice !== undefined ? props.contract.closePrice : undefined,
        closePriceDate: props.contract.closePriceDate !== undefined ? props.contract.closePriceDate : undefined,
        ppind: props.contract.ppind !== undefined ? props.contract.ppind : undefined,
        orderId: props.contract.orderId !== undefined ? props.contract.orderId : undefined,
    deliverables: props.contract.deliverables ? 
      Array.isArray(props.contract.deliverables) && props.contract.deliverables.length > 0 && props.contract.deliverables.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.contract.deliverables.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.contract.deliverables.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          symbol: item.symbol !== undefined ? {
              equals: item.symbol 
             } : undefined,
          contractId: item.contractId !== undefined ? {
              equals: item.contractId 
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          symbol: item.symbol !== undefined ? item.symbol : undefined,
          assetId: item.assetId !== undefined ? item.assetId : undefined,
          amount: item.amount !== undefined ? item.amount : undefined,
          allocationPercentage: item.allocationPercentage !== undefined ? item.allocationPercentage : undefined,
          settlementType: item.settlementType !== undefined ? item.settlementType : undefined,
          settlementMethod: item.settlementMethod !== undefined ? item.settlementMethod : undefined,
          delayedSettlement: item.delayedSettlement !== undefined ? item.delayedSettlement : undefined,
        },
      }))
    } : undefined,
    asset: props.contract.asset ? 
      typeof props.contract.asset === 'object' && Object.keys(props.contract.asset).length === 1 && Object.keys(props.contract.asset)[0] === 'id'
    ? { connect: {
          id: props.contract.asset.id
        }}
    : { connectOrCreate: {
        where: {
          id: props.contract.asset.id !== undefined ? props.contract.asset.id : undefined,
          symbol: props.contract.asset.symbol !== undefined ? props.contract.asset.symbol : undefined,
          name: props.contract.asset.name !== undefined ? props.contract.asset.name : undefined,
        },
        create: {
          symbol: props.contract.asset.symbol !== undefined ? props.contract.asset.symbol : undefined,
          name: props.contract.asset.name !== undefined ? props.contract.asset.name : undefined,
          type: props.contract.asset.type !== undefined ? props.contract.asset.type : undefined,
          logoUrl: props.contract.asset.logoUrl !== undefined ? props.contract.asset.logoUrl : undefined,
          description: props.contract.asset.description !== undefined ? props.contract.asset.description : undefined,
          cik: props.contract.asset.cik !== undefined ? props.contract.asset.cik : undefined,
          exchange: props.contract.asset.exchange !== undefined ? props.contract.asset.exchange : undefined,
          currency: props.contract.asset.currency !== undefined ? props.contract.asset.currency : undefined,
          country: props.contract.asset.country !== undefined ? props.contract.asset.country : undefined,
          sector: props.contract.asset.sector !== undefined ? props.contract.asset.sector : undefined,
          industry: props.contract.asset.industry !== undefined ? props.contract.asset.industry : undefined,
          address: props.contract.asset.address !== undefined ? props.contract.asset.address : undefined,
          officialSite: props.contract.asset.officialSite !== undefined ? props.contract.asset.officialSite : undefined,
          fiscalYearEnd: props.contract.asset.fiscalYearEnd !== undefined ? props.contract.asset.fiscalYearEnd : undefined,
          latestQuarter: props.contract.asset.latestQuarter !== undefined ? props.contract.asset.latestQuarter : undefined,
          marketCapitalization: props.contract.asset.marketCapitalization !== undefined ? props.contract.asset.marketCapitalization : undefined,
          ebitda: props.contract.asset.ebitda !== undefined ? props.contract.asset.ebitda : undefined,
          peRatio: props.contract.asset.peRatio !== undefined ? props.contract.asset.peRatio : undefined,
          pegRatio: props.contract.asset.pegRatio !== undefined ? props.contract.asset.pegRatio : undefined,
          bookValue: props.contract.asset.bookValue !== undefined ? props.contract.asset.bookValue : undefined,
          dividendPerShare: props.contract.asset.dividendPerShare !== undefined ? props.contract.asset.dividendPerShare : undefined,
          dividendYield: props.contract.asset.dividendYield !== undefined ? props.contract.asset.dividendYield : undefined,
          eps: props.contract.asset.eps !== undefined ? props.contract.asset.eps : undefined,
          revenuePerShareTTM: props.contract.asset.revenuePerShareTTM !== undefined ? props.contract.asset.revenuePerShareTTM : undefined,
          profitMargin: props.contract.asset.profitMargin !== undefined ? props.contract.asset.profitMargin : undefined,
          operatingMarginTTM: props.contract.asset.operatingMarginTTM !== undefined ? props.contract.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.contract.asset.returnOnAssetsTTM !== undefined ? props.contract.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.contract.asset.returnOnEquityTTM !== undefined ? props.contract.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.contract.asset.revenueTTM !== undefined ? props.contract.asset.revenueTTM : undefined,
          grossProfitTTM: props.contract.asset.grossProfitTTM !== undefined ? props.contract.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.contract.asset.dilutedEPSTTM !== undefined ? props.contract.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.contract.asset.quarterlyEarningsGrowthYOY !== undefined ? props.contract.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.contract.asset.quarterlyRevenueGrowthYOY !== undefined ? props.contract.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.contract.asset.analystTargetPrice !== undefined ? props.contract.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.contract.asset.analystRatingStrongBuy !== undefined ? props.contract.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.contract.asset.analystRatingBuy !== undefined ? props.contract.asset.analystRatingBuy : undefined,
          analystRatingHold: props.contract.asset.analystRatingHold !== undefined ? props.contract.asset.analystRatingHold : undefined,
          analystRatingSell: props.contract.asset.analystRatingSell !== undefined ? props.contract.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.contract.asset.analystRatingStrongSell !== undefined ? props.contract.asset.analystRatingStrongSell : undefined,
          trailingPE: props.contract.asset.trailingPE !== undefined ? props.contract.asset.trailingPE : undefined,
          forwardPE: props.contract.asset.forwardPE !== undefined ? props.contract.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.contract.asset.priceToSalesRatioTTM !== undefined ? props.contract.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.contract.asset.priceToBookRatio !== undefined ? props.contract.asset.priceToBookRatio : undefined,
          evToRevenue: props.contract.asset.evToRevenue !== undefined ? props.contract.asset.evToRevenue : undefined,
          evToEbitda: props.contract.asset.evToEbitda !== undefined ? props.contract.asset.evToEbitda : undefined,
          beta: props.contract.asset.beta !== undefined ? props.contract.asset.beta : undefined,
          week52High: props.contract.asset.week52High !== undefined ? props.contract.asset.week52High : undefined,
          week52Low: props.contract.asset.week52Low !== undefined ? props.contract.asset.week52Low : undefined,
          day50MovingAverage: props.contract.asset.day50MovingAverage !== undefined ? props.contract.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.contract.asset.day200MovingAverage !== undefined ? props.contract.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.contract.asset.sharesOutstanding !== undefined ? props.contract.asset.sharesOutstanding : undefined,
          dividendDate: props.contract.asset.dividendDate !== undefined ? props.contract.asset.dividendDate : undefined,
          exDividendDate: props.contract.asset.exDividendDate !== undefined ? props.contract.asset.exDividendDate : undefined,
          askPrice: props.contract.asset.askPrice !== undefined ? props.contract.asset.askPrice : undefined,
          bidPrice: props.contract.asset.bidPrice !== undefined ? props.contract.asset.bidPrice : undefined,
      trades: props.contract.asset.trades ? 
        Array.isArray(props.contract.asset.trades) && props.contract.asset.trades.length > 0 && props.contract.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.contract.asset.trades.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.contract.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
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
          },
        }))
      } : undefined,
      orders: props.contract.asset.orders ? 
        Array.isArray(props.contract.asset.orders) && props.contract.asset.orders.length > 0 && props.contract.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.contract.asset.orders.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.contract.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            actionId: item.actionId !== undefined ? item.actionId : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            contractId: item.contractId !== undefined ? item.contractId : undefined,
            alpacaAccountId: item.alpacaAccountId !== undefined ? {
                equals: item.alpacaAccountId 
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
          },
        }))
      } : undefined,
      positions: props.contract.asset.positions ? 
        Array.isArray(props.contract.asset.positions) && props.contract.asset.positions.length > 0 && props.contract.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.contract.asset.positions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.contract.asset.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
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
          },
        }))
      } : undefined,
      newsMentions: props.contract.asset.newsMentions ? 
        Array.isArray(props.contract.asset.newsMentions) && props.contract.asset.newsMentions.length > 0 && props.contract.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect: props.contract.asset.newsMentions.map((item: any) => ({
            id: item.id
          }))
} : { connectOrCreate: props.contract.asset.newsMentions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            url: item.url !== undefined ? item.url : undefined,
            newsArticleId: item.newsArticleId !== undefined ? {
                equals: item.newsArticleId 
               } : undefined,
          },
          create: {
            url: item.url !== undefined ? item.url : undefined,
            relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
            sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
            sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }
  } : undefined,
      },
      update: {
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
  stopLoss: props.stopLoss !== undefined ? {
    set: props.stopLoss
  } : undefined,
  takeProfit: props.takeProfit !== undefined ? {
    set: props.takeProfit
  } : undefined,
  alpacaAccount: props.alpacaAccount !== undefined ? {
    set: props.alpacaAccount
  } : undefined,
  action: props.action !== undefined ? {
    set: props.action
  } : undefined,
  asset: props.asset !== undefined ? {
    set: props.asset
  } : undefined,
  contract: props.contract !== undefined ? {
    set: props.contract
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_ORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneOrder) {
        return response.data.upsertOneOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneOrder:', error);
      throw error;
    }
  },

  /**
   * Update multiple Order records.
   * @param props - Array of Order objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: OrderType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

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
  contractId: prop.contractId !== undefined ? prop.contractId : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? {
    equals: prop.alpacaAccountId 
  } : undefined,

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
  stopLoss: prop.stopLoss !== undefined ? {
    set: prop.stopLoss
  } : undefined,
  takeProfit: prop.takeProfit !== undefined ? {
    set: prop.takeProfit
  } : undefined,
  alpacaAccount: prop.alpacaAccount !== undefined ? {
    set: prop.alpacaAccount
  } : undefined,
  action: prop.action !== undefined ? {
    set: prop.action
  } : undefined,
  asset: prop.asset !== undefined ? {
    set: prop.asset
  } : undefined,
  contract: prop.contract !== undefined ? {
    set: prop.contract
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
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Order or null.
   */
  async delete(props: OrderType, globalClient?: ApolloClient<any>): Promise<OrderType> {

    const client = globalClient || importedClient;

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
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved Order or null.
   */
  async get(props: OrderType, globalClient?: ApolloClient<any>): Promise<OrderType | null> {

    const client = globalClient || importedClient;

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
  contractId: props.contractId !== undefined ? props.contractId : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
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
   * @param globalClient - Apollo Client instance.
   * @returns An array of Order records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<OrderType[] | null> {

    const client = globalClient || importedClient;

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
   * @param globalClient - Apollo Client instance.
   * @returns An array of found Order records or null.
   */
  async findMany(props: OrderType, globalClient?: ApolloClient<any>): Promise<OrderType[] | null> {

    const client = globalClient || importedClient;

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
