

import { Position as PositionType } from './generated/typegraphql-prisma/models/Position';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Position model.
 */

export const Position = {

  /**
   * Create a new Position record.
   * @param props - Properties for the new record.
   * @returns The created Position or null.
   */

  async create(props: PositionType): Promise<PositionType> {

  const client = createApolloClient();

  const CREATE_ONE_POSITION = gql`
      mutation createOnePosition($data: PositionCreateInput!) {
        createOnePosition(data: $data) {
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
                orders {
                  id
                }
                alerts {
                  id
                }
                alpacaAccounts {
                  id
                }
              }
              account {
                id
              }
              asset {
                id
              }
            }
            positions {
              id
            }
            newsMentions {
              id
              assetId
              newsArticleId
              url
              news {
                id
                title
                content
                source
                sourceDomain
                url
                sentiment
                authors
                summary
                bannerImage
                timePublished
                category
                topics
                logo
                createdAt
                updatedAt
                assets {
                  id
                }
              }
              asset {
                id
              }
              relevancyScore
              sentimentScore
              sentimentLabel
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
      }
   `;

    const variables = {
      data: {
          averageEntryPrice: props.averageEntryPrice !== undefined ? props.averageEntryPrice : undefined,
  qty: props.qty !== undefined ? props.qty : undefined,
  qtyAvailable: props.qtyAvailable !== undefined ? props.qtyAvailable : undefined,
  marketValue: props.marketValue !== undefined ? props.marketValue : undefined,
  costBasis: props.costBasis !== undefined ? props.costBasis : undefined,
  unrealizedPL: props.unrealizedPL !== undefined ? props.unrealizedPL : undefined,
  unrealizedPLPC: props.unrealizedPLPC !== undefined ? props.unrealizedPLPC : undefined,
  unrealisedIntradayPL: props.unrealisedIntradayPL !== undefined ? props.unrealisedIntradayPL : undefined,
  unrealisedIntradayPLPC: props.unrealisedIntradayPLPC !== undefined ? props.unrealisedIntradayPLPC : undefined,
  currentPrice: props.currentPrice !== undefined ? props.currentPrice : undefined,
  lastTradePrice: props.lastTradePrice !== undefined ? props.lastTradePrice : undefined,
  changeToday: props.changeToday !== undefined ? props.changeToday : undefined,
  assetMarginable: props.assetMarginable !== undefined ? props.assetMarginable : undefined,
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
    trades: props.asset.trades ? {
      connectOrCreate: props.asset.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
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
    trades: props.account.trades ? {
      connectOrCreate: props.account.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
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

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_ONE_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOnePosition) {
        return response.data.createOnePosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOnePosition:', error);
      throw error;
    }
  },

  /**
   * Create multiple Position records.
   * @param props - Array of Position objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: PositionType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const CREATE_MANY_POSITION = gql`
      mutation createManyPosition($data: [PositionCreateManyInput!]!) {
        createManyPosition(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  assetId: prop.assetId !== undefined ? prop.assetId : undefined,
  averageEntryPrice: prop.averageEntryPrice !== undefined ? prop.averageEntryPrice : undefined,
  qty: prop.qty !== undefined ? prop.qty : undefined,
  qtyAvailable: prop.qtyAvailable !== undefined ? prop.qtyAvailable : undefined,
  marketValue: prop.marketValue !== undefined ? prop.marketValue : undefined,
  costBasis: prop.costBasis !== undefined ? prop.costBasis : undefined,
  unrealizedPL: prop.unrealizedPL !== undefined ? prop.unrealizedPL : undefined,
  unrealizedPLPC: prop.unrealizedPLPC !== undefined ? prop.unrealizedPLPC : undefined,
  unrealisedIntradayPL: prop.unrealisedIntradayPL !== undefined ? prop.unrealisedIntradayPL : undefined,
  unrealisedIntradayPLPC: prop.unrealisedIntradayPLPC !== undefined ? prop.unrealisedIntradayPLPC : undefined,
  currentPrice: prop.currentPrice !== undefined ? prop.currentPrice : undefined,
  lastTradePrice: prop.lastTradePrice !== undefined ? prop.lastTradePrice : undefined,
  changeToday: prop.changeToday !== undefined ? prop.changeToday : undefined,
  assetMarginable: prop.assetMarginable !== undefined ? prop.assetMarginable : undefined,
  alpacaAccountId: prop.alpacaAccountId !== undefined ? prop.alpacaAccountId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyPosition) {
        return response.data.createManyPosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyPosition:', error);
      throw error;
    }
  },

  /**
   * Update a single Position record.
   * @param props - Properties to update.
   * @returns The updated Position or null.
   */
  async update(props: PositionType): Promise<PositionType> {

    const client = createApolloClient();

      const UPDATE_ONE_POSITION = gql`
      mutation updateOnePosition($data: PositionUpdateInput!, $where: PositionWhereUniqueInput!) {
        updateOnePosition(data: $data, where: $where) {
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
                orders {
                  id
                }
                alerts {
                  id
                }
                alpacaAccounts {
                  id
                }
              }
              account {
                id
              }
              asset {
                id
              }
            }
            positions {
              id
            }
            newsMentions {
              id
              assetId
              newsArticleId
              url
              news {
                id
                title
                content
                source
                sourceDomain
                url
                sentiment
                authors
                summary
                bannerImage
                timePublished
                category
                topics
                logo
                createdAt
                updatedAt
                assets {
                  id
                }
              }
              asset {
                id
              }
              relevancyScore
              sentimentScore
              sentimentLabel
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
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  averageEntryPrice: props.averageEntryPrice !== undefined ? {
            set: props.averageEntryPrice 
           } : undefined,
  qty: props.qty !== undefined ? {
            set: props.qty 
           } : undefined,
  qtyAvailable: props.qtyAvailable !== undefined ? {
            set: props.qtyAvailable 
           } : undefined,
  marketValue: props.marketValue !== undefined ? {
            set: props.marketValue 
           } : undefined,
  costBasis: props.costBasis !== undefined ? {
            set: props.costBasis 
           } : undefined,
  unrealizedPL: props.unrealizedPL !== undefined ? {
            set: props.unrealizedPL 
           } : undefined,
  unrealizedPLPC: props.unrealizedPLPC !== undefined ? {
            set: props.unrealizedPLPC 
           } : undefined,
  unrealisedIntradayPL: props.unrealisedIntradayPL !== undefined ? {
            set: props.unrealisedIntradayPL 
           } : undefined,
  unrealisedIntradayPLPC: props.unrealisedIntradayPLPC !== undefined ? {
            set: props.unrealisedIntradayPLPC 
           } : undefined,
  currentPrice: props.currentPrice !== undefined ? {
            set: props.currentPrice 
           } : undefined,
  lastTradePrice: props.lastTradePrice !== undefined ? {
            set: props.lastTradePrice 
           } : undefined,
  changeToday: props.changeToday !== undefined ? {
            set: props.changeToday 
           } : undefined,
  assetMarginable: props.assetMarginable !== undefined ? {
            set: props.assetMarginable 
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
    trades: props.asset.trades ? {
      upsert: props.asset.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          quantity: item.quantity !== undefined ? {
              set: item.quantity  
             } : undefined,
          price: item.price !== undefined ? {
              set: item.price  
             } : undefined,
          total: item.total !== undefined ? {
              set: item.total  
             } : undefined,
          timestamp: item.timestamp !== undefined ? {
              set: item.timestamp  
             } : undefined,
          status: item.status !== undefined ? {
              set: item.status  
             } : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
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
    trades: props.asset.trades ? {
      connectOrCreate: props.asset.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
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
    trades: props.account.trades ? {
      upsert: props.account.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          quantity: item.quantity !== undefined ? {
              set: item.quantity  
             } : undefined,
          price: item.price !== undefined ? {
              set: item.price  
             } : undefined,
          total: item.total !== undefined ? {
              set: item.total  
             } : undefined,
          timestamp: item.timestamp !== undefined ? {
              set: item.timestamp  
             } : undefined,
          status: item.status !== undefined ? {
              set: item.status  
             } : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
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
    trades: props.account.trades ? {
      connectOrCreate: props.account.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
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
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOnePosition) {
        return response.data.updateOnePosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOnePosition:', error);
      throw error;
    }
  },

  /**
   * Update multiple Position records.
   * @param props - Array of Position objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: PositionType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const UPDATE_MANY_POSITION = gql`
      mutation updateManyPosition($data: [PositionCreateManyInput!]!) {
        updateManyPosition(data: $data) {
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
  averageEntryPrice: prop.averageEntryPrice !== undefined ? {
            set: prop.averageEntryPrice 
           } : undefined,
  qty: prop.qty !== undefined ? {
            set: prop.qty 
           } : undefined,
  qtyAvailable: prop.qtyAvailable !== undefined ? {
            set: prop.qtyAvailable 
           } : undefined,
  marketValue: prop.marketValue !== undefined ? {
            set: prop.marketValue 
           } : undefined,
  costBasis: prop.costBasis !== undefined ? {
            set: prop.costBasis 
           } : undefined,
  unrealizedPL: prop.unrealizedPL !== undefined ? {
            set: prop.unrealizedPL 
           } : undefined,
  unrealizedPLPC: prop.unrealizedPLPC !== undefined ? {
            set: prop.unrealizedPLPC 
           } : undefined,
  unrealisedIntradayPL: prop.unrealisedIntradayPL !== undefined ? {
            set: prop.unrealisedIntradayPL 
           } : undefined,
  unrealisedIntradayPLPC: prop.unrealisedIntradayPLPC !== undefined ? {
            set: prop.unrealisedIntradayPLPC 
           } : undefined,
  currentPrice: prop.currentPrice !== undefined ? {
            set: prop.currentPrice 
           } : undefined,
  lastTradePrice: prop.lastTradePrice !== undefined ? {
            set: prop.lastTradePrice 
           } : undefined,
  changeToday: prop.changeToday !== undefined ? {
            set: prop.changeToday 
           } : undefined,
  assetMarginable: prop.assetMarginable !== undefined ? {
            set: prop.assetMarginable 
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
    trades: prop.asset.trades ? {
      upsert: prop.asset.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          quantity: item.quantity !== undefined ? {
              set: item.quantity  
             } : undefined,
          price: item.price !== undefined ? {
              set: item.price  
             } : undefined,
          total: item.total !== undefined ? {
              set: item.total  
             } : undefined,
          timestamp: item.timestamp !== undefined ? {
              set: item.timestamp  
             } : undefined,
          status: item.status !== undefined ? {
              set: item.status  
             } : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
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
    trades: prop.asset.trades ? {
      connectOrCreate: prop.asset.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
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
    trades: prop.account.trades ? {
      upsert: prop.account.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          quantity: item.quantity !== undefined ? {
              set: item.quantity  
             } : undefined,
          price: item.price !== undefined ? {
              set: item.price  
             } : undefined,
          total: item.total !== undefined ? {
              set: item.total  
             } : undefined,
          timestamp: item.timestamp !== undefined ? {
              set: item.timestamp  
             } : undefined,
          status: item.status !== undefined ? {
              set: item.status  
             } : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
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
    trades: prop.account.trades ? {
      connectOrCreate: prop.account.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
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

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyPosition) {
        return response.data.updateManyPosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyPosition:', error);
      throw error;
    }
  },

  /**
   * Delete a single Position record.
   * @param props - Properties to update.
   * @returns The deleted Position or null.
   */
  async delete(props: PositionType): Promise<PositionType> {

    const client = createApolloClient();

      const DELETE_ONE_POSITION = gql`
      mutation deleteOnePosition($where: PositionWhereUniqueInput!) {
        deleteOnePosition(where: $where) {
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
                orders {
                  id
                }
                alerts {
                  id
                }
                alpacaAccounts {
                  id
                }
              }
              account {
                id
              }
              asset {
                id
              }
            }
            positions {
              id
            }
            newsMentions {
              id
              assetId
              newsArticleId
              url
              news {
                id
                title
                content
                source
                sourceDomain
                url
                sentiment
                authors
                summary
                bannerImage
                timePublished
                category
                topics
                logo
                createdAt
                updatedAt
                assets {
                  id
                }
              }
              asset {
                id
              }
              relevancyScore
              sentimentScore
              sentimentLabel
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
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOnePosition) {
        return response.data.deleteOnePosition;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOnePosition:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Position record by ID.
   * @param props - Properties to update.
   * @returns The retrieved Position or null.
   */
  async get(props: PositionType): Promise<PositionType | null> {

    const client = createApolloClient();

      const GET_POSITION = gql`
      query getPosition($where: PositionWhereUniqueInput!) {
        getPosition(where: $where) {
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
                orders {
                  id
                }
                alerts {
                  id
                }
                alpacaAccounts {
                  id
                }
              }
              account {
                id
              }
              asset {
                id
              }
            }
            positions {
              id
            }
            newsMentions {
              id
              assetId
              newsArticleId
              url
              news {
                id
                title
                content
                source
                sourceDomain
                url
                sentiment
                authors
                summary
                bannerImage
                timePublished
                category
                topics
                logo
                createdAt
                updatedAt
                assets {
                  id
                }
              }
              asset {
                id
              }
              relevancyScore
              sentimentScore
              sentimentLabel
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
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getPosition ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Position found') {
        return null;
      } else {
        console.error('Error in getPosition:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Positions records.
   * @returns An array of Position records or null.
   */
  async getAll(): Promise<PositionType[] | null> {

    const client = createApolloClient();

      const GET_ALL_POSITION = gql`
      query getAllPosition {
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
                orders {
                  id
                }
                alerts {
                  id
                }
                alpacaAccounts {
                  id
                }
              }
              account {
                id
              }
              asset {
                id
              }
            }
            positions {
              id
            }
            newsMentions {
              id
              assetId
              newsArticleId
              url
              news {
                id
                title
                content
                source
                sourceDomain
                url
                sentiment
                authors
                summary
                bannerImage
                timePublished
                category
                topics
                logo
                createdAt
                updatedAt
                assets {
                  id
                }
              }
              asset {
                id
              }
              relevancyScore
              sentimentScore
              sentimentLabel
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
      }`;

    try {
      const response = await client.query({ query: GET_ALL_POSITION });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.positions ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Position found') {
        return null;
      } else {
        console.error('Error in getPosition:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Position records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found Position records or null.
   */
  async findMany(props: PositionType): Promise<PositionType[] | null> {

    const client = createApolloClient();

      const FIND_MANY_POSITION = gql`
      query findManyPosition($where: PositionWhereInput!) {
        positions(where: $where) {
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
                orders {
                  id
                }
                alerts {
                  id
                }
                alpacaAccounts {
                  id
                }
              }
              account {
                id
              }
              asset {
                id
              }
            }
            positions {
              id
            }
            newsMentions {
              id
              assetId
              newsArticleId
              url
              news {
                id
                title
                content
                source
                sourceDomain
                url
                sentiment
                authors
                summary
                bannerImage
                timePublished
                category
                topics
                logo
                createdAt
                updatedAt
                assets {
                  id
                }
              }
              asset {
                id
              }
              relevancyScore
              sentimentScore
              sentimentLabel
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
      const response = await client.query({ query: FIND_MANY_POSITION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Positions) {
        return response.data.positions;
      } else {
       return [] as PositionType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Position found') {
        return null;
      } else {
        console.error('Error in getPosition:', error);
        throw error;
      }
    }
  }
};
