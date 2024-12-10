
  
import { Alert as AlertType } from './generated/typegraphql-prisma/models/Alert';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Alert model.
   */

  const selectionSet = `
    
  id
  alpacaAccountId
  message
  type
  isRead
  createdAt
  updatedAt

  `;

  export const Alert = {

    /**
     * Create a new Alert record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Alert or null.
     */

    async create(props: AlertType, globalClient?: ApolloClient<any>): Promise<AlertType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_ALERT = gql`
        mutation createOneAlert($data: AlertCreateInput!) {
          createOneAlert(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            message: props.message !== undefined ? props.message : undefined,
  type: props.type !== undefined ? props.type : undefined,
  isRead: props.isRead !== undefined ? props.isRead : undefined,
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
    orders: props.alpacaAccount.orders ? 
      Array.isArray(props.alpacaAccount.orders) && props.alpacaAccount.orders.length > 0 && props.alpacaAccount.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.alpacaAccount.orders.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.alpacaAccount.orders.map((item: any) => ({
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
      stopLoss: item.stopLoss ? 
        typeof item.stopLoss === 'object' && Object.keys(item.stopLoss).length === 1 && Object.keys(item.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.stopLoss.id
          }}
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
          }}
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
          }}
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
            dependsOn: item.action.dependsOn !== undefined ? {
              set: item.action.dependsOn
            } : undefined,
            dependedOnBy: item.action.dependedOnBy !== undefined ? {
              set: item.action.dependedOnBy
            } : undefined,
          },
        }
      } : undefined,
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
      contract: item.contract ? 
        typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
            id: item.contract.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.contract.id !== undefined ? item.contract.id : undefined,
            alpacaId: item.contract.alpacaId !== undefined ? item.contract.alpacaId : undefined,
            symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
            name: item.contract.name !== undefined ? {
                equals: item.contract.name 
               } : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? {
                equals: item.contract.underlyingAssetId 
               } : undefined,
          },
          create: {
            alpacaId: item.contract.alpacaId !== undefined ? item.contract.alpacaId : undefined,
            symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
            name: item.contract.name !== undefined ? item.contract.name : undefined,
            status: item.contract.status !== undefined ? item.contract.status : undefined,
            tradable: item.contract.tradable !== undefined ? item.contract.tradable : undefined,
            expirationDate: item.contract.expirationDate !== undefined ? item.contract.expirationDate : undefined,
            rootSymbol: item.contract.rootSymbol !== undefined ? item.contract.rootSymbol : undefined,
            underlyingSymbol: item.contract.underlyingSymbol !== undefined ? item.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? item.contract.underlyingAssetId : undefined,
            type: item.contract.type !== undefined ? item.contract.type : undefined,
            style: item.contract.style !== undefined ? item.contract.style : undefined,
            strikePrice: item.contract.strikePrice !== undefined ? item.contract.strikePrice : undefined,
            multiplier: item.contract.multiplier !== undefined ? item.contract.multiplier : undefined,
            size: item.contract.size !== undefined ? item.contract.size : undefined,
            openInterest: item.contract.openInterest !== undefined ? item.contract.openInterest : undefined,
            openInterestDate: item.contract.openInterestDate !== undefined ? item.contract.openInterestDate : undefined,
            closePrice: item.contract.closePrice !== undefined ? item.contract.closePrice : undefined,
            closePriceDate: item.contract.closePriceDate !== undefined ? item.contract.closePriceDate : undefined,
            ppind: item.contract.ppind !== undefined ? item.contract.ppind : undefined,
            orderId: item.contract.orderId !== undefined ? item.contract.orderId : undefined,
          },
        }
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
      },
    }
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_ALERT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneAlert) {
        return response.data.createOneAlert;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneAlert:', error);
      throw error;
    }
  },

  /**
   * Create multiple Alert records.
   * @param props - Array of Alert objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: AlertType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_ALERT = gql`
      mutation createManyAlert($data: [AlertCreateManyInput!]!) {
        createManyAlert(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  alpacaAccountId: prop.alpacaAccountId !== undefined ? prop.alpacaAccountId : undefined,
  message: prop.message !== undefined ? prop.message : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  isRead: prop.isRead !== undefined ? prop.isRead : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_ALERT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyAlert) {
        return response.data.createManyAlert;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyAlert:', error);
      throw error;
    }
  },

  /**
   * Update a single Alert record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Alert or null.
   */
  async update(props: AlertType, globalClient?: ApolloClient<any>): Promise<AlertType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_ALERT = gql`
      mutation updateOneAlert($data: AlertUpdateInput!, $where: AlertWhereUniqueInput!) {
        updateOneAlert(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
    set: props.id
  } : undefined,
  message: props.message !== undefined ? {
    set: props.message
  } : undefined,
  type: props.type !== undefined ? {
    set: props.type
  } : undefined,
  isRead: props.isRead !== undefined ? {
    set: props.isRead
  } : undefined,
  createdAt: props.createdAt !== undefined ? {
    set: props.createdAt
  } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
    set: props.updatedAt
  } : undefined,
  alpacaAccount: props.alpacaAccount !== undefined ? {
    set: props.alpacaAccount
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_ALERT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneAlert) {
        return response.data.updateOneAlert;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneAlert:', error);
      throw error;
    }
  },

  /**
   * Upsert a single Alert record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Alert or null.
   */
  async upsert(props: AlertType, globalClient?: ApolloClient<any>): Promise<AlertType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_ALERT = gql`
      mutation upsertOneAlert($where: AlertWhereUniqueInput!, $create: AlertCreateInput!, $update: AlertUpdateInput!) {
        upsertOneAlert(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
      },
      create: {
    message: props.message !== undefined ? props.message : undefined,
  type: props.type !== undefined ? props.type : undefined,
  isRead: props.isRead !== undefined ? props.isRead : undefined,
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
    orders: props.alpacaAccount.orders ? 
      Array.isArray(props.alpacaAccount.orders) && props.alpacaAccount.orders.length > 0 && props.alpacaAccount.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect: props.alpacaAccount.orders.map((item: any) => ({
          id: item.id
        }))
} : { connectOrCreate: props.alpacaAccount.orders.map((item: any) => ({
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
      stopLoss: item.stopLoss ? 
        typeof item.stopLoss === 'object' && Object.keys(item.stopLoss).length === 1 && Object.keys(item.stopLoss)[0] === 'id'
    ? { connect: {
            id: item.stopLoss.id
          }}
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
          }}
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
          }}
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
            dependsOn: item.action.dependsOn !== undefined ? {
              set: item.action.dependsOn
            } : undefined,
            dependedOnBy: item.action.dependedOnBy !== undefined ? {
              set: item.action.dependedOnBy
            } : undefined,
          },
        }
      } : undefined,
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
      contract: item.contract ? 
        typeof item.contract === 'object' && Object.keys(item.contract).length === 1 && Object.keys(item.contract)[0] === 'id'
    ? { connect: {
            id: item.contract.id
          }}
    : { connectOrCreate: {
          where: {
            id: item.contract.id !== undefined ? item.contract.id : undefined,
            alpacaId: item.contract.alpacaId !== undefined ? item.contract.alpacaId : undefined,
            symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
            name: item.contract.name !== undefined ? {
                equals: item.contract.name 
               } : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? {
                equals: item.contract.underlyingAssetId 
               } : undefined,
          },
          create: {
            alpacaId: item.contract.alpacaId !== undefined ? item.contract.alpacaId : undefined,
            symbol: item.contract.symbol !== undefined ? item.contract.symbol : undefined,
            name: item.contract.name !== undefined ? item.contract.name : undefined,
            status: item.contract.status !== undefined ? item.contract.status : undefined,
            tradable: item.contract.tradable !== undefined ? item.contract.tradable : undefined,
            expirationDate: item.contract.expirationDate !== undefined ? item.contract.expirationDate : undefined,
            rootSymbol: item.contract.rootSymbol !== undefined ? item.contract.rootSymbol : undefined,
            underlyingSymbol: item.contract.underlyingSymbol !== undefined ? item.contract.underlyingSymbol : undefined,
            underlyingAssetId: item.contract.underlyingAssetId !== undefined ? item.contract.underlyingAssetId : undefined,
            type: item.contract.type !== undefined ? item.contract.type : undefined,
            style: item.contract.style !== undefined ? item.contract.style : undefined,
            strikePrice: item.contract.strikePrice !== undefined ? item.contract.strikePrice : undefined,
            multiplier: item.contract.multiplier !== undefined ? item.contract.multiplier : undefined,
            size: item.contract.size !== undefined ? item.contract.size : undefined,
            openInterest: item.contract.openInterest !== undefined ? item.contract.openInterest : undefined,
            openInterestDate: item.contract.openInterestDate !== undefined ? item.contract.openInterestDate : undefined,
            closePrice: item.contract.closePrice !== undefined ? item.contract.closePrice : undefined,
            closePriceDate: item.contract.closePriceDate !== undefined ? item.contract.closePriceDate : undefined,
            ppind: item.contract.ppind !== undefined ? item.contract.ppind : undefined,
            orderId: item.contract.orderId !== undefined ? item.contract.orderId : undefined,
          },
        }
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
      },
    }
  } : undefined,
      },
      update: {
  message: props.message !== undefined ? {
    set: props.message
  } : undefined,
  type: props.type !== undefined ? {
    set: props.type
  } : undefined,
  isRead: props.isRead !== undefined ? {
    set: props.isRead
  } : undefined,
  alpacaAccount: props.alpacaAccount !== undefined ? {
    set: props.alpacaAccount
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_ALERT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneAlert) {
        return response.data.upsertOneAlert;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneAlert:', error);
      throw error;
    }
  },

  /**
   * Update multiple Alert records.
   * @param props - Array of Alert objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: AlertType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_ALERT = gql`
      mutation updateManyAlert($data: [AlertCreateManyInput!]!) {
        updateManyAlert(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? {
    equals: prop.alpacaAccountId 
  } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
    set: prop.id
  } : undefined,
  message: prop.message !== undefined ? {
    set: prop.message
  } : undefined,
  type: prop.type !== undefined ? {
    set: prop.type
  } : undefined,
  isRead: prop.isRead !== undefined ? {
    set: prop.isRead
  } : undefined,
  createdAt: prop.createdAt !== undefined ? {
    set: prop.createdAt
  } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
    set: prop.updatedAt
  } : undefined,
  alpacaAccount: prop.alpacaAccount !== undefined ? {
    set: prop.alpacaAccount
  } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_ALERT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyAlert) {
        return response.data.updateManyAlert;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyAlert:', error);
      throw error;
    }
  },

  /**
   * Delete a single Alert record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Alert or null.
   */
  async delete(props: AlertType, globalClient?: ApolloClient<any>): Promise<AlertType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_ALERT = gql`
      mutation deleteOneAlert($where: AlertWhereUniqueInput!) {
        deleteOneAlert(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_ALERT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneAlert) {
        return response.data.deleteOneAlert;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneAlert:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Alert record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved Alert or null.
   */
  async get(props: AlertType, globalClient?: ApolloClient<any>): Promise<AlertType | null> {

    const client = globalClient || importedClient;

    const GET_ALERT = gql`
      query getAlert($where: AlertWhereUniqueInput!) {
        getAlert(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
    equals: props.alpacaAccountId 
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_ALERT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getAlert ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Alert found') {
        return null;
      } else {
        console.error('Error in getAlert:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Alerts records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Alert records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<AlertType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_ALERT = gql`
      query getAllAlert {
        alerts {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_ALERT });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.alerts ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Alert found') {
        return null;
      } else {
        console.error('Error in getAlert:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Alert records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found Alert records or null.
   */
  async findMany(props: AlertType, globalClient?: ApolloClient<any>): Promise<AlertType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_ALERT = gql`
      query findManyAlert($where: AlertWhereInput!) {
        alerts(where: $where) {
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
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_ALERT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Alerts) {
        return response.data.alerts;
      } else {
       return [] as AlertType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Alert found') {
        return null;
      } else {
        console.error('Error in getAlert:', error);
        throw error;
      }
    }
  }
};
