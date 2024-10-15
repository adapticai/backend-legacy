

import { Trade as TradeType } from './generated/typegraphql-prisma/models/Trade';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Trade model.
 */

export const Trade = {

  /**
   * Create a new Trade record.
   * @param props - Properties for the new record.
   * @returns The created Trade or null.
   */

  async create(props: TradeType): Promise<TradeType> {

  const client = createApolloClient();

  const CREATE_ONE_TRADE = gql`
      mutation createOneTrade($data: TradeCreateInput!) {
        createOneTrade(data: $data) {
          id
          alpacaAccountId
          assetId
          quantity
          price
          total
          timestamp
          createdAt
          updatedAt
          status
          account {
            id
            type
            APIKey
            APISecret
            configuration
            marketOpen
            user {
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
                users {
                  id
                }
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
                user {
                  id
                }
              }
              sessions {
                id
                sessionToken
                userId
                expires
                user {
                  id
                }
                createdAt
                updatedAt
              }
              authenticators {
                id
                userId
                credentialID
                publicKey
                counter
                user {
                  id
                }
                createdAt
                updatedAt
              }
              plan
              orders {
                id
                userId
                alpacaAccountId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                user {
                  id
                }
                account {
                  id
                }
                asset {
                  id
                }
              }
              alerts {
                id
                userId
                alpacaAccountId
                message
                type
                isRead
                createdAt
                updatedAt
                user {
                  id
                }
                account {
                  id
                }
              }
              alpacaAccounts {
                id
              }
            }
            userId
            createdAt
            updatedAt
            trades {
              id
            }
            orders {
              id
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
                createdAt
                updatedAt
                trades {
                  id
                }
                orders {
                  id
                }
                positions {
                  id
                }
                newsMentions {
                  id
                }
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
              account {
                id
              }
              alpacaAccountId
            }
            Alert {
              id
            }
          }
          asset {
            id
          }
          actions {
            id
            tradeId
            sequence
            action
            hedgeType
            hedgePrice
            buyPrice
            sellPrice
            qty
            side
            type
            stopLoss
            targetPrice
            note
            executionTime
            status
            fee
            trade {
              id
            }
          }
        }
      }
   `;

    const variables = {
      data: {
          quantity: props.quantity !== undefined ? props.quantity : undefined,
  price: props.price !== undefined ? props.price : undefined,
  total: props.total !== undefined ? props.total : undefined,
  timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  status: props.status !== undefined ? props.status : undefined,
  account: props.account ? {
    connectOrCreate: {
      where: {
        id: props.account.id !== undefined ? props.account.id : undefined,
      },
      create: {
        type: props.account.type !== undefined ? props.account.type : undefined,
        APIKey: props.account.APIKey !== undefined ? props.account.APIKey : undefined,
        APISecret: props.account.APISecret !== undefined ? props.account.APISecret : undefined,
        configuration: props.account.configuration !== undefined ? props.account.configuration : undefined,
        marketOpen: props.account.marketOpen !== undefined ? props.account.marketOpen : undefined,
    user: props.account.user ? {
      connectOrCreate: {
        where: {
          id: props.account.user.id !== undefined ? props.account.user.id : undefined,
          email: props.account.user.email !== undefined ? props.account.user.email : undefined,
          name: props.account.user.name !== undefined ? {
              equals: props.account.user.name 
             } : undefined,
        },
        create: {
          name: props.account.user.name !== undefined ? props.account.user.name : undefined,
          email: props.account.user.email !== undefined ? props.account.user.email : undefined,
          emailVerified: props.account.user.emailVerified !== undefined ? props.account.user.emailVerified : undefined,
          image: props.account.user.image !== undefined ? props.account.user.image : undefined,
          role: props.account.user.role !== undefined ? props.account.user.role : undefined,
          bio: props.account.user.bio !== undefined ? props.account.user.bio : undefined,
          jobTitle: props.account.user.jobTitle !== undefined ? props.account.user.jobTitle : undefined,
          currentAccount: props.account.user.currentAccount !== undefined ? props.account.user.currentAccount : undefined,
          plan: props.account.user.plan !== undefined ? props.account.user.plan : undefined,
        },
      }
    } : undefined,
    orders: props.account.orders ? {
      connectOrCreate: props.account.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    positions: props.account.positions ? {
      connectOrCreate: props.account.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        },
      }))
    } : undefined,
    Alert: props.account.Alert ? {
      connectOrCreate: props.account.Alert.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
    connectOrCreate: {
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
    orders: props.asset.orders ? {
      connectOrCreate: props.asset.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    positions: props.asset.positions ? {
      connectOrCreate: props.asset.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        },
      }))
    } : undefined,
    newsMentions: props.asset.newsMentions ? {
      connectOrCreate: props.asset.newsMentions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          url: item.url !== undefined ? item.url : undefined,
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
  actions: props.actions ? {
    connectOrCreate: props.actions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        sequence: item.sequence !== undefined ? item.sequence : undefined,
        action: item.action !== undefined ? item.action : undefined,
        hedgeType: item.hedgeType !== undefined ? item.hedgeType : undefined,
        hedgePrice: item.hedgePrice !== undefined ? item.hedgePrice : undefined,
        buyPrice: item.buyPrice !== undefined ? item.buyPrice : undefined,
        sellPrice: item.sellPrice !== undefined ? item.sellPrice : undefined,
        qty: item.qty !== undefined ? item.qty : undefined,
        side: item.side !== undefined ? item.side : undefined,
        type: item.type !== undefined ? item.type : undefined,
        stopLoss: item.stopLoss !== undefined ? item.stopLoss : undefined,
        targetPrice: item.targetPrice !== undefined ? item.targetPrice : undefined,
        note: item.note !== undefined ? item.note : undefined,
        executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
        status: item.status !== undefined ? item.status : undefined,
        fee: item.fee !== undefined ? item.fee : undefined,
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

    const client = createApolloClient();

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
  quantity: prop.quantity !== undefined ? prop.quantity : undefined,
  price: prop.price !== undefined ? prop.price : undefined,
  total: prop.total !== undefined ? prop.total : undefined,
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

    const client = createApolloClient();

      const UPDATE_ONE_TRADE = gql`
      mutation updateOneTrade($data: TradeUpdateInput!, $where: TradeWhereUniqueInput!) {
        updateOneTrade(data: $data, where: $where) {
          id
          alpacaAccountId
          assetId
          quantity
          price
          total
          timestamp
          createdAt
          updatedAt
          status
          account {
            id
            type
            APIKey
            APISecret
            configuration
            marketOpen
            user {
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
                users {
                  id
                }
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
                user {
                  id
                }
              }
              sessions {
                id
                sessionToken
                userId
                expires
                user {
                  id
                }
                createdAt
                updatedAt
              }
              authenticators {
                id
                userId
                credentialID
                publicKey
                counter
                user {
                  id
                }
                createdAt
                updatedAt
              }
              plan
              orders {
                id
                userId
                alpacaAccountId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                user {
                  id
                }
                account {
                  id
                }
                asset {
                  id
                }
              }
              alerts {
                id
                userId
                alpacaAccountId
                message
                type
                isRead
                createdAt
                updatedAt
                user {
                  id
                }
                account {
                  id
                }
              }
              alpacaAccounts {
                id
              }
            }
            userId
            createdAt
            updatedAt
            trades {
              id
            }
            orders {
              id
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
                createdAt
                updatedAt
                trades {
                  id
                }
                orders {
                  id
                }
                positions {
                  id
                }
                newsMentions {
                  id
                }
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
              account {
                id
              }
              alpacaAccountId
            }
            Alert {
              id
            }
          }
          asset {
            id
          }
          actions {
            id
            tradeId
            sequence
            action
            hedgeType
            hedgePrice
            buyPrice
            sellPrice
            qty
            side
            type
            stopLoss
            targetPrice
            note
            executionTime
            status
            fee
            trade {
              id
            }
          }
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  quantity: props.quantity !== undefined ? {
            set: props.quantity 
           } : undefined,
  price: props.price !== undefined ? {
            set: props.price 
           } : undefined,
  total: props.total !== undefined ? {
            set: props.total 
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
  account: props.account ? {
    upsert: {
      where: {
        id: props.account.id !== undefined ? {
            equals: props.account.id 
           } : undefined,
      },
      update: {
        id: props.account.id !== undefined ? {
            set: props.account.id  
           } : undefined,
        type: props.account.type !== undefined ? {
            set: props.account.type  
           } : undefined,
        APIKey: props.account.APIKey !== undefined ? {
            set: props.account.APIKey  
           } : undefined,
        APISecret: props.account.APISecret !== undefined ? {
            set: props.account.APISecret  
           } : undefined,
        configuration: props.account.configuration !== undefined ? {
            set: props.account.configuration  
           } : undefined,
        marketOpen: props.account.marketOpen !== undefined ? {
            set: props.account.marketOpen  
           } : undefined,
    user: props.account.user ? {
      upsert: {
        where: {
          id: props.account.user.id !== undefined ? {
              equals: props.account.user.id 
             } : undefined,
          name: props.account.user.name !== undefined ? {
              equals: props.account.user.name 
             } : undefined,
          email: props.account.user.email !== undefined ? {
              equals: props.account.user.email 
             } : undefined,
        },
        update: {
          id: props.account.user.id !== undefined ? {
              set: props.account.user.id  
             } : undefined,
          name: props.account.user.name !== undefined ? {
              set: props.account.user.name  
             } : undefined,
          email: props.account.user.email !== undefined ? {
              set: props.account.user.email  
             } : undefined,
          emailVerified: props.account.user.emailVerified !== undefined ? {
              set: props.account.user.emailVerified  
             } : undefined,
          image: props.account.user.image !== undefined ? {
              set: props.account.user.image  
             } : undefined,
          role: props.account.user.role !== undefined ? {
              set: props.account.user.role  
             } : undefined,
          bio: props.account.user.bio !== undefined ? {
              set: props.account.user.bio  
             } : undefined,
          jobTitle: props.account.user.jobTitle !== undefined ? {
              set: props.account.user.jobTitle  
             } : undefined,
          currentAccount: props.account.user.currentAccount !== undefined ? {
              set: props.account.user.currentAccount  
             } : undefined,
          plan: props.account.user.plan !== undefined ? {
              set: props.account.user.plan  
             } : undefined,
        },
        create: {
          name: props.account.user.name !== undefined ? props.account.user.name : undefined,
          email: props.account.user.email !== undefined ? props.account.user.email : undefined,
          emailVerified: props.account.user.emailVerified !== undefined ? props.account.user.emailVerified : undefined,
          image: props.account.user.image !== undefined ? props.account.user.image : undefined,
          role: props.account.user.role !== undefined ? props.account.user.role : undefined,
          bio: props.account.user.bio !== undefined ? props.account.user.bio : undefined,
          jobTitle: props.account.user.jobTitle !== undefined ? props.account.user.jobTitle : undefined,
          currentAccount: props.account.user.currentAccount !== undefined ? props.account.user.currentAccount : undefined,
          plan: props.account.user.plan !== undefined ? props.account.user.plan : undefined,
        },
      }
    } : undefined,
    orders: props.account.orders ? {
      upsert: props.account.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          type: item.type !== undefined ? {
              set: item.type  
             } : undefined,
          action: item.action !== undefined ? {
              set: item.action  
             } : undefined,
          quantity: item.quantity !== undefined ? {
              set: item.quantity  
             } : undefined,
          price: item.price !== undefined ? {
              set: item.price  
             } : undefined,
          status: item.status !== undefined ? {
              set: item.status  
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    positions: props.account.positions ? {
      upsert: props.account.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        },
      }))
    } : undefined,
    Alert: props.account.Alert ? {
      upsert: props.account.Alert.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        type: props.account.type !== undefined ? props.account.type : undefined,
        APIKey: props.account.APIKey !== undefined ? props.account.APIKey : undefined,
        APISecret: props.account.APISecret !== undefined ? props.account.APISecret : undefined,
        configuration: props.account.configuration !== undefined ? props.account.configuration : undefined,
        marketOpen: props.account.marketOpen !== undefined ? props.account.marketOpen : undefined,
    user: props.account.user ? {
      connectOrCreate: {
        where: {
          id: props.account.user.id !== undefined ? props.account.user.id : undefined,
          email: props.account.user.email !== undefined ? props.account.user.email : undefined,
          name: props.account.user.name !== undefined ? {
              equals: props.account.user.name 
             } : undefined,
        },
        create: {
          name: props.account.user.name !== undefined ? props.account.user.name : undefined,
          email: props.account.user.email !== undefined ? props.account.user.email : undefined,
          emailVerified: props.account.user.emailVerified !== undefined ? props.account.user.emailVerified : undefined,
          image: props.account.user.image !== undefined ? props.account.user.image : undefined,
          role: props.account.user.role !== undefined ? props.account.user.role : undefined,
          bio: props.account.user.bio !== undefined ? props.account.user.bio : undefined,
          jobTitle: props.account.user.jobTitle !== undefined ? props.account.user.jobTitle : undefined,
          currentAccount: props.account.user.currentAccount !== undefined ? props.account.user.currentAccount : undefined,
          plan: props.account.user.plan !== undefined ? props.account.user.plan : undefined,
        },
      }
    } : undefined,
    orders: props.account.orders ? {
      connectOrCreate: props.account.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    positions: props.account.positions ? {
      connectOrCreate: props.account.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        },
      }))
    } : undefined,
    Alert: props.account.Alert ? {
      connectOrCreate: props.account.Alert.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
    orders: props.asset.orders ? {
      upsert: props.asset.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          type: item.type !== undefined ? {
              set: item.type  
             } : undefined,
          action: item.action !== undefined ? {
              set: item.action  
             } : undefined,
          quantity: item.quantity !== undefined ? {
              set: item.quantity  
             } : undefined,
          price: item.price !== undefined ? {
              set: item.price  
             } : undefined,
          status: item.status !== undefined ? {
              set: item.status  
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    positions: props.asset.positions ? {
      upsert: props.asset.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        },
      }))
    } : undefined,
    newsMentions: props.asset.newsMentions ? {
      upsert: props.asset.newsMentions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          url: item.url !== undefined ? item.url : undefined,
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
    orders: props.asset.orders ? {
      connectOrCreate: props.asset.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    positions: props.asset.positions ? {
      connectOrCreate: props.asset.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        },
      }))
    } : undefined,
    newsMentions: props.asset.newsMentions ? {
      connectOrCreate: props.asset.newsMentions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          url: item.url !== undefined ? item.url : undefined,
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
  actions: props.actions ? {
    upsert: props.actions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id  
           } : undefined,
        sequence: item.sequence !== undefined ? {
            set: item.sequence  
           } : undefined,
        action: item.action !== undefined ? {
            set: item.action  
           } : undefined,
        hedgeType: item.hedgeType !== undefined ? {
            set: item.hedgeType  
           } : undefined,
        hedgePrice: item.hedgePrice !== undefined ? {
            set: item.hedgePrice  
           } : undefined,
        buyPrice: item.buyPrice !== undefined ? {
            set: item.buyPrice  
           } : undefined,
        sellPrice: item.sellPrice !== undefined ? {
            set: item.sellPrice  
           } : undefined,
        qty: item.qty !== undefined ? {
            set: item.qty  
           } : undefined,
        side: item.side !== undefined ? {
            set: item.side  
           } : undefined,
        type: item.type !== undefined ? {
            set: item.type  
           } : undefined,
        stopLoss: item.stopLoss !== undefined ? {
            set: item.stopLoss  
           } : undefined,
        targetPrice: item.targetPrice !== undefined ? {
            set: item.targetPrice  
           } : undefined,
        note: item.note !== undefined ? {
            set: item.note  
           } : undefined,
        executionTime: item.executionTime !== undefined ? {
            set: item.executionTime  
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
        action: item.action !== undefined ? item.action : undefined,
        hedgeType: item.hedgeType !== undefined ? item.hedgeType : undefined,
        hedgePrice: item.hedgePrice !== undefined ? item.hedgePrice : undefined,
        buyPrice: item.buyPrice !== undefined ? item.buyPrice : undefined,
        sellPrice: item.sellPrice !== undefined ? item.sellPrice : undefined,
        qty: item.qty !== undefined ? item.qty : undefined,
        side: item.side !== undefined ? item.side : undefined,
        type: item.type !== undefined ? item.type : undefined,
        stopLoss: item.stopLoss !== undefined ? item.stopLoss : undefined,
        targetPrice: item.targetPrice !== undefined ? item.targetPrice : undefined,
        note: item.note !== undefined ? item.note : undefined,
        executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
        status: item.status !== undefined ? item.status : undefined,
        fee: item.fee !== undefined ? item.fee : undefined,
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

    const client = createApolloClient();

      const UPDATE_MANY_TRADE = gql`
      mutation updateManyTrade($data: [TradeCreateManyInput!]!) {
        updateManyTrade(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
                id: prop.id !== undefined ? prop.id : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  quantity: prop.quantity !== undefined ? {
            set: prop.quantity 
           } : undefined,
  price: prop.price !== undefined ? {
            set: prop.price 
           } : undefined,
  total: prop.total !== undefined ? {
            set: prop.total 
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
  account: prop.account ? {
    upsert: {
      where: {
        id: prop.account.id !== undefined ? {
            equals: prop.account.id 
           } : undefined,
      },
      update: {
        id: prop.account.id !== undefined ? {
            set: prop.account.id  
           } : undefined,
        type: prop.account.type !== undefined ? {
            set: prop.account.type  
           } : undefined,
        APIKey: prop.account.APIKey !== undefined ? {
            set: prop.account.APIKey  
           } : undefined,
        APISecret: prop.account.APISecret !== undefined ? {
            set: prop.account.APISecret  
           } : undefined,
        configuration: prop.account.configuration !== undefined ? {
            set: prop.account.configuration  
           } : undefined,
        marketOpen: prop.account.marketOpen !== undefined ? {
            set: prop.account.marketOpen  
           } : undefined,
    user: prop.account.user ? {
      upsert: {
        where: {
          id: prop.account.user.id !== undefined ? {
              equals: prop.account.user.id 
             } : undefined,
          name: prop.account.user.name !== undefined ? {
              equals: prop.account.user.name 
             } : undefined,
          email: prop.account.user.email !== undefined ? {
              equals: prop.account.user.email 
             } : undefined,
        },
        update: {
          id: prop.account.user.id !== undefined ? {
              set: prop.account.user.id  
             } : undefined,
          name: prop.account.user.name !== undefined ? {
              set: prop.account.user.name  
             } : undefined,
          email: prop.account.user.email !== undefined ? {
              set: prop.account.user.email  
             } : undefined,
          emailVerified: prop.account.user.emailVerified !== undefined ? {
              set: prop.account.user.emailVerified  
             } : undefined,
          image: prop.account.user.image !== undefined ? {
              set: prop.account.user.image  
             } : undefined,
          role: prop.account.user.role !== undefined ? {
              set: prop.account.user.role  
             } : undefined,
          bio: prop.account.user.bio !== undefined ? {
              set: prop.account.user.bio  
             } : undefined,
          jobTitle: prop.account.user.jobTitle !== undefined ? {
              set: prop.account.user.jobTitle  
             } : undefined,
          currentAccount: prop.account.user.currentAccount !== undefined ? {
              set: prop.account.user.currentAccount  
             } : undefined,
          plan: prop.account.user.plan !== undefined ? {
              set: prop.account.user.plan  
             } : undefined,
        },
        create: {
          name: prop.account.user.name !== undefined ? prop.account.user.name : undefined,
          email: prop.account.user.email !== undefined ? prop.account.user.email : undefined,
          emailVerified: prop.account.user.emailVerified !== undefined ? prop.account.user.emailVerified : undefined,
          image: prop.account.user.image !== undefined ? prop.account.user.image : undefined,
          role: prop.account.user.role !== undefined ? prop.account.user.role : undefined,
          bio: prop.account.user.bio !== undefined ? prop.account.user.bio : undefined,
          jobTitle: prop.account.user.jobTitle !== undefined ? prop.account.user.jobTitle : undefined,
          currentAccount: prop.account.user.currentAccount !== undefined ? prop.account.user.currentAccount : undefined,
          plan: prop.account.user.plan !== undefined ? prop.account.user.plan : undefined,
        },
      }
    } : undefined,
    orders: prop.account.orders ? {
      upsert: prop.account.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          type: item.type !== undefined ? {
              set: item.type  
             } : undefined,
          action: item.action !== undefined ? {
              set: item.action  
             } : undefined,
          quantity: item.quantity !== undefined ? {
              set: item.quantity  
             } : undefined,
          price: item.price !== undefined ? {
              set: item.price  
             } : undefined,
          status: item.status !== undefined ? {
              set: item.status  
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    positions: prop.account.positions ? {
      upsert: prop.account.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        },
      }))
    } : undefined,
    Alert: prop.account.Alert ? {
      upsert: prop.account.Alert.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        type: prop.account.type !== undefined ? prop.account.type : undefined,
        APIKey: prop.account.APIKey !== undefined ? prop.account.APIKey : undefined,
        APISecret: prop.account.APISecret !== undefined ? prop.account.APISecret : undefined,
        configuration: prop.account.configuration !== undefined ? prop.account.configuration : undefined,
        marketOpen: prop.account.marketOpen !== undefined ? prop.account.marketOpen : undefined,
    user: prop.account.user ? {
      connectOrCreate: {
        where: {
          id: prop.account.user.id !== undefined ? prop.account.user.id : undefined,
          email: prop.account.user.email !== undefined ? prop.account.user.email : undefined,
          name: prop.account.user.name !== undefined ? {
              equals: prop.account.user.name 
             } : undefined,
        },
        create: {
          name: prop.account.user.name !== undefined ? prop.account.user.name : undefined,
          email: prop.account.user.email !== undefined ? prop.account.user.email : undefined,
          emailVerified: prop.account.user.emailVerified !== undefined ? prop.account.user.emailVerified : undefined,
          image: prop.account.user.image !== undefined ? prop.account.user.image : undefined,
          role: prop.account.user.role !== undefined ? prop.account.user.role : undefined,
          bio: prop.account.user.bio !== undefined ? prop.account.user.bio : undefined,
          jobTitle: prop.account.user.jobTitle !== undefined ? prop.account.user.jobTitle : undefined,
          currentAccount: prop.account.user.currentAccount !== undefined ? prop.account.user.currentAccount : undefined,
          plan: prop.account.user.plan !== undefined ? prop.account.user.plan : undefined,
        },
      }
    } : undefined,
    orders: prop.account.orders ? {
      connectOrCreate: prop.account.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    positions: prop.account.positions ? {
      connectOrCreate: prop.account.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        },
      }))
    } : undefined,
    Alert: prop.account.Alert ? {
      connectOrCreate: prop.account.Alert.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
    orders: prop.asset.orders ? {
      upsert: prop.asset.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          type: item.type !== undefined ? {
              set: item.type  
             } : undefined,
          action: item.action !== undefined ? {
              set: item.action  
             } : undefined,
          quantity: item.quantity !== undefined ? {
              set: item.quantity  
             } : undefined,
          price: item.price !== undefined ? {
              set: item.price  
             } : undefined,
          status: item.status !== undefined ? {
              set: item.status  
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    positions: prop.asset.positions ? {
      upsert: prop.asset.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        },
      }))
    } : undefined,
    newsMentions: prop.asset.newsMentions ? {
      upsert: prop.asset.newsMentions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          url: item.url !== undefined ? item.url : undefined,
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
    orders: prop.asset.orders ? {
      connectOrCreate: prop.asset.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    positions: prop.asset.positions ? {
      connectOrCreate: prop.asset.positions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
        },
      }))
    } : undefined,
    newsMentions: prop.asset.newsMentions ? {
      connectOrCreate: prop.asset.newsMentions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          url: item.url !== undefined ? item.url : undefined,
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
  actions: prop.actions ? {
    upsert: prop.actions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id  
           } : undefined,
        sequence: item.sequence !== undefined ? {
            set: item.sequence  
           } : undefined,
        action: item.action !== undefined ? {
            set: item.action  
           } : undefined,
        hedgeType: item.hedgeType !== undefined ? {
            set: item.hedgeType  
           } : undefined,
        hedgePrice: item.hedgePrice !== undefined ? {
            set: item.hedgePrice  
           } : undefined,
        buyPrice: item.buyPrice !== undefined ? {
            set: item.buyPrice  
           } : undefined,
        sellPrice: item.sellPrice !== undefined ? {
            set: item.sellPrice  
           } : undefined,
        qty: item.qty !== undefined ? {
            set: item.qty  
           } : undefined,
        side: item.side !== undefined ? {
            set: item.side  
           } : undefined,
        type: item.type !== undefined ? {
            set: item.type  
           } : undefined,
        stopLoss: item.stopLoss !== undefined ? {
            set: item.stopLoss  
           } : undefined,
        targetPrice: item.targetPrice !== undefined ? {
            set: item.targetPrice  
           } : undefined,
        note: item.note !== undefined ? {
            set: item.note  
           } : undefined,
        executionTime: item.executionTime !== undefined ? {
            set: item.executionTime  
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
        action: item.action !== undefined ? item.action : undefined,
        hedgeType: item.hedgeType !== undefined ? item.hedgeType : undefined,
        hedgePrice: item.hedgePrice !== undefined ? item.hedgePrice : undefined,
        buyPrice: item.buyPrice !== undefined ? item.buyPrice : undefined,
        sellPrice: item.sellPrice !== undefined ? item.sellPrice : undefined,
        qty: item.qty !== undefined ? item.qty : undefined,
        side: item.side !== undefined ? item.side : undefined,
        type: item.type !== undefined ? item.type : undefined,
        stopLoss: item.stopLoss !== undefined ? item.stopLoss : undefined,
        targetPrice: item.targetPrice !== undefined ? item.targetPrice : undefined,
        note: item.note !== undefined ? item.note : undefined,
        executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
        status: item.status !== undefined ? item.status : undefined,
        fee: item.fee !== undefined ? item.fee : undefined,
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

    const client = createApolloClient();

      const DELETE_ONE_TRADE = gql`
      mutation deleteOneTrade($where: TradeWhereUniqueInput!) {
        deleteOneTrade(where: $where) {
          id
          alpacaAccountId
          assetId
          quantity
          price
          total
          timestamp
          createdAt
          updatedAt
          status
          account {
            id
            type
            APIKey
            APISecret
            configuration
            marketOpen
            user {
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
                users {
                  id
                }
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
                user {
                  id
                }
              }
              sessions {
                id
                sessionToken
                userId
                expires
                user {
                  id
                }
                createdAt
                updatedAt
              }
              authenticators {
                id
                userId
                credentialID
                publicKey
                counter
                user {
                  id
                }
                createdAt
                updatedAt
              }
              plan
              orders {
                id
                userId
                alpacaAccountId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                user {
                  id
                }
                account {
                  id
                }
                asset {
                  id
                }
              }
              alerts {
                id
                userId
                alpacaAccountId
                message
                type
                isRead
                createdAt
                updatedAt
                user {
                  id
                }
                account {
                  id
                }
              }
              alpacaAccounts {
                id
              }
            }
            userId
            createdAt
            updatedAt
            trades {
              id
            }
            orders {
              id
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
                createdAt
                updatedAt
                trades {
                  id
                }
                orders {
                  id
                }
                positions {
                  id
                }
                newsMentions {
                  id
                }
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
              account {
                id
              }
              alpacaAccountId
            }
            Alert {
              id
            }
          }
          asset {
            id
          }
          actions {
            id
            tradeId
            sequence
            action
            hedgeType
            hedgePrice
            buyPrice
            sellPrice
            qty
            side
            type
            stopLoss
            targetPrice
            note
            executionTime
            status
            fee
            trade {
              id
            }
          }
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

    const client = createApolloClient();

      const GET_TRADE = gql`
      query getTrade($where: TradeWhereUniqueInput!) {
        getTrade(where: $where) {
          id
          alpacaAccountId
          assetId
          quantity
          price
          total
          timestamp
          createdAt
          updatedAt
          status
          account {
            id
            type
            APIKey
            APISecret
            configuration
            marketOpen
            user {
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
                users {
                  id
                }
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
                user {
                  id
                }
              }
              sessions {
                id
                sessionToken
                userId
                expires
                user {
                  id
                }
                createdAt
                updatedAt
              }
              authenticators {
                id
                userId
                credentialID
                publicKey
                counter
                user {
                  id
                }
                createdAt
                updatedAt
              }
              plan
              orders {
                id
                userId
                alpacaAccountId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                user {
                  id
                }
                account {
                  id
                }
                asset {
                  id
                }
              }
              alerts {
                id
                userId
                alpacaAccountId
                message
                type
                isRead
                createdAt
                updatedAt
                user {
                  id
                }
                account {
                  id
                }
              }
              alpacaAccounts {
                id
              }
            }
            userId
            createdAt
            updatedAt
            trades {
              id
            }
            orders {
              id
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
                createdAt
                updatedAt
                trades {
                  id
                }
                orders {
                  id
                }
                positions {
                  id
                }
                newsMentions {
                  id
                }
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
              account {
                id
              }
              alpacaAccountId
            }
            Alert {
              id
            }
          }
          asset {
            id
          }
          actions {
            id
            tradeId
            sequence
            action
            hedgeType
            hedgePrice
            buyPrice
            sellPrice
            qty
            side
            type
            stopLoss
            targetPrice
            note
            executionTime
            status
            fee
            trade {
              id
            }
          }
        }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
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

    const client = createApolloClient();

      const GET_ALL_TRADE = gql`
      query getAllTrade {
        trades {
          id
          alpacaAccountId
          assetId
          quantity
          price
          total
          timestamp
          createdAt
          updatedAt
          status
          account {
            id
            type
            APIKey
            APISecret
            configuration
            marketOpen
            user {
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
                users {
                  id
                }
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
                user {
                  id
                }
              }
              sessions {
                id
                sessionToken
                userId
                expires
                user {
                  id
                }
                createdAt
                updatedAt
              }
              authenticators {
                id
                userId
                credentialID
                publicKey
                counter
                user {
                  id
                }
                createdAt
                updatedAt
              }
              plan
              orders {
                id
                userId
                alpacaAccountId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                user {
                  id
                }
                account {
                  id
                }
                asset {
                  id
                }
              }
              alerts {
                id
                userId
                alpacaAccountId
                message
                type
                isRead
                createdAt
                updatedAt
                user {
                  id
                }
                account {
                  id
                }
              }
              alpacaAccounts {
                id
              }
            }
            userId
            createdAt
            updatedAt
            trades {
              id
            }
            orders {
              id
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
                createdAt
                updatedAt
                trades {
                  id
                }
                orders {
                  id
                }
                positions {
                  id
                }
                newsMentions {
                  id
                }
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
              account {
                id
              }
              alpacaAccountId
            }
            Alert {
              id
            }
          }
          asset {
            id
          }
          actions {
            id
            tradeId
            sequence
            action
            hedgeType
            hedgePrice
            buyPrice
            sellPrice
            qty
            side
            type
            stopLoss
            targetPrice
            note
            executionTime
            status
            fee
            trade {
              id
            }
          }
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

    const client = createApolloClient();

      const FIND_MANY_TRADE = gql`
      query findManyTrade($where: TradeWhereInput!) {
        trades(where: $where) {
          id
          alpacaAccountId
          assetId
          quantity
          price
          total
          timestamp
          createdAt
          updatedAt
          status
          account {
            id
            type
            APIKey
            APISecret
            configuration
            marketOpen
            user {
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
                users {
                  id
                }
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
                user {
                  id
                }
              }
              sessions {
                id
                sessionToken
                userId
                expires
                user {
                  id
                }
                createdAt
                updatedAt
              }
              authenticators {
                id
                userId
                credentialID
                publicKey
                counter
                user {
                  id
                }
                createdAt
                updatedAt
              }
              plan
              orders {
                id
                userId
                alpacaAccountId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                user {
                  id
                }
                account {
                  id
                }
                asset {
                  id
                }
              }
              alerts {
                id
                userId
                alpacaAccountId
                message
                type
                isRead
                createdAt
                updatedAt
                user {
                  id
                }
                account {
                  id
                }
              }
              alpacaAccounts {
                id
              }
            }
            userId
            createdAt
            updatedAt
            trades {
              id
            }
            orders {
              id
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
                createdAt
                updatedAt
                trades {
                  id
                }
                orders {
                  id
                }
                positions {
                  id
                }
                newsMentions {
                  id
                }
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
              account {
                id
              }
              alpacaAccountId
            }
            Alert {
              id
            }
          }
          asset {
            id
          }
          actions {
            id
            tradeId
            sequence
            action
            hedgeType
            hedgePrice
            buyPrice
            sellPrice
            qty
            side
            type
            stopLoss
            targetPrice
            note
            executionTime
            status
            fee
            trade {
              id
            }
          }
      }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
            equals: props.id 
           } : undefined,
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
