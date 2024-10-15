

import { Action as ActionType } from './generated/typegraphql-prisma/models/Action';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Action model.
 */

export const Action = {

  /**
   * Create a new Action record.
   * @param props - Properties for the new record.
   * @returns The created Action or null.
   */

  async create(props: ActionType): Promise<ActionType> {

  const client = createApolloClient();

  const CREATE_ONE_ACTION = gql`
      mutation createOneAction($data: ActionCreateInput!) {
        createOneAction(data: $data) {
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
              userId
              createdAt
              updatedAt
              trades {
                id
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
                assetId
                asset {
                  id
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
                assetId
                newsArticleId
                url
                news {
                  id
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            actions {
              id
            }
          }
        }
      }
   `;

    const variables = {
      data: {
          sequence: props.sequence !== undefined ? props.sequence : undefined,
  action: props.action !== undefined ? props.action : undefined,
  hedgeType: props.hedgeType !== undefined ? props.hedgeType : undefined,
  hedgePrice: props.hedgePrice !== undefined ? props.hedgePrice : undefined,
  buyPrice: props.buyPrice !== undefined ? props.buyPrice : undefined,
  sellPrice: props.sellPrice !== undefined ? props.sellPrice : undefined,
  qty: props.qty !== undefined ? props.qty : undefined,
  side: props.side !== undefined ? props.side : undefined,
  type: props.type !== undefined ? props.type : undefined,
  stopLoss: props.stopLoss !== undefined ? props.stopLoss : undefined,
  targetPrice: props.targetPrice !== undefined ? props.targetPrice : undefined,
  note: props.note !== undefined ? props.note : undefined,
  executionTime: props.executionTime !== undefined ? props.executionTime : undefined,
  status: props.status !== undefined ? props.status : undefined,
  fee: props.fee !== undefined ? props.fee : undefined,
  trade: props.trade ? {
    connectOrCreate: {
      where: {
        id: props.trade.id !== undefined ? props.trade.id : undefined,
      },
      create: {
        quantity: props.trade.quantity !== undefined ? props.trade.quantity : undefined,
        price: props.trade.price !== undefined ? props.trade.price : undefined,
        total: props.trade.total !== undefined ? props.trade.total : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
    account: props.trade.account ? {
      connectOrCreate: {
        where: {
          id: props.trade.account.id !== undefined ? props.trade.account.id : undefined,
        },
        create: {
          type: props.trade.account.type !== undefined ? props.trade.account.type : undefined,
          APIKey: props.trade.account.APIKey !== undefined ? props.trade.account.APIKey : undefined,
          APISecret: props.trade.account.APISecret !== undefined ? props.trade.account.APISecret : undefined,
          configuration: props.trade.account.configuration !== undefined ? props.trade.account.configuration : undefined,
          marketOpen: props.trade.account.marketOpen !== undefined ? props.trade.account.marketOpen : undefined,
        },
      }
    } : undefined,
    asset: props.trade.asset ? {
      connectOrCreate: {
        where: {
          id: props.trade.asset.id !== undefined ? props.trade.asset.id : undefined,
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
        },
        create: {
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
          type: props.trade.asset.type !== undefined ? props.trade.asset.type : undefined,
          logoUrl: props.trade.asset.logoUrl !== undefined ? props.trade.asset.logoUrl : undefined,
          description: props.trade.asset.description !== undefined ? props.trade.asset.description : undefined,
          cik: props.trade.asset.cik !== undefined ? props.trade.asset.cik : undefined,
          exchange: props.trade.asset.exchange !== undefined ? props.trade.asset.exchange : undefined,
          currency: props.trade.asset.currency !== undefined ? props.trade.asset.currency : undefined,
          country: props.trade.asset.country !== undefined ? props.trade.asset.country : undefined,
          sector: props.trade.asset.sector !== undefined ? props.trade.asset.sector : undefined,
          industry: props.trade.asset.industry !== undefined ? props.trade.asset.industry : undefined,
          address: props.trade.asset.address !== undefined ? props.trade.asset.address : undefined,
          officialSite: props.trade.asset.officialSite !== undefined ? props.trade.asset.officialSite : undefined,
          fiscalYearEnd: props.trade.asset.fiscalYearEnd !== undefined ? props.trade.asset.fiscalYearEnd : undefined,
          latestQuarter: props.trade.asset.latestQuarter !== undefined ? props.trade.asset.latestQuarter : undefined,
          marketCapitalization: props.trade.asset.marketCapitalization !== undefined ? props.trade.asset.marketCapitalization : undefined,
          ebitda: props.trade.asset.ebitda !== undefined ? props.trade.asset.ebitda : undefined,
          peRatio: props.trade.asset.peRatio !== undefined ? props.trade.asset.peRatio : undefined,
          pegRatio: props.trade.asset.pegRatio !== undefined ? props.trade.asset.pegRatio : undefined,
          bookValue: props.trade.asset.bookValue !== undefined ? props.trade.asset.bookValue : undefined,
          dividendPerShare: props.trade.asset.dividendPerShare !== undefined ? props.trade.asset.dividendPerShare : undefined,
          dividendYield: props.trade.asset.dividendYield !== undefined ? props.trade.asset.dividendYield : undefined,
          eps: props.trade.asset.eps !== undefined ? props.trade.asset.eps : undefined,
          revenuePerShareTTM: props.trade.asset.revenuePerShareTTM !== undefined ? props.trade.asset.revenuePerShareTTM : undefined,
          profitMargin: props.trade.asset.profitMargin !== undefined ? props.trade.asset.profitMargin : undefined,
          operatingMarginTTM: props.trade.asset.operatingMarginTTM !== undefined ? props.trade.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.trade.asset.returnOnAssetsTTM !== undefined ? props.trade.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.trade.asset.returnOnEquityTTM !== undefined ? props.trade.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.trade.asset.revenueTTM !== undefined ? props.trade.asset.revenueTTM : undefined,
          grossProfitTTM: props.trade.asset.grossProfitTTM !== undefined ? props.trade.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.trade.asset.dilutedEPSTTM !== undefined ? props.trade.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? props.trade.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? props.trade.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.trade.asset.analystTargetPrice !== undefined ? props.trade.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.trade.asset.analystRatingStrongBuy !== undefined ? props.trade.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.trade.asset.analystRatingBuy !== undefined ? props.trade.asset.analystRatingBuy : undefined,
          analystRatingHold: props.trade.asset.analystRatingHold !== undefined ? props.trade.asset.analystRatingHold : undefined,
          analystRatingSell: props.trade.asset.analystRatingSell !== undefined ? props.trade.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.trade.asset.analystRatingStrongSell !== undefined ? props.trade.asset.analystRatingStrongSell : undefined,
          trailingPE: props.trade.asset.trailingPE !== undefined ? props.trade.asset.trailingPE : undefined,
          forwardPE: props.trade.asset.forwardPE !== undefined ? props.trade.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.trade.asset.priceToSalesRatioTTM !== undefined ? props.trade.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.trade.asset.priceToBookRatio !== undefined ? props.trade.asset.priceToBookRatio : undefined,
          evToRevenue: props.trade.asset.evToRevenue !== undefined ? props.trade.asset.evToRevenue : undefined,
          evToEbitda: props.trade.asset.evToEbitda !== undefined ? props.trade.asset.evToEbitda : undefined,
          beta: props.trade.asset.beta !== undefined ? props.trade.asset.beta : undefined,
          week52High: props.trade.asset.week52High !== undefined ? props.trade.asset.week52High : undefined,
          week52Low: props.trade.asset.week52Low !== undefined ? props.trade.asset.week52Low : undefined,
          day50MovingAverage: props.trade.asset.day50MovingAverage !== undefined ? props.trade.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.trade.asset.day200MovingAverage !== undefined ? props.trade.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.trade.asset.sharesOutstanding !== undefined ? props.trade.asset.sharesOutstanding : undefined,
          dividendDate: props.trade.asset.dividendDate !== undefined ? props.trade.asset.dividendDate : undefined,
          exDividendDate: props.trade.asset.exDividendDate !== undefined ? props.trade.asset.exDividendDate : undefined,
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
      const response = await client.mutate({ mutation: CREATE_ONE_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneAction) {
        return response.data.createOneAction;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneAction:', error);
      throw error;
    }
  },

  /**
   * Create multiple Action records.
   * @param props - Array of Action objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: ActionType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const CREATE_MANY_ACTION = gql`
      mutation createManyAction($data: [ActionCreateManyInput!]!) {
        createManyAction(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  tradeId: prop.tradeId !== undefined ? prop.tradeId : undefined,
  sequence: prop.sequence !== undefined ? prop.sequence : undefined,
  action: prop.action !== undefined ? prop.action : undefined,
  hedgeType: prop.hedgeType !== undefined ? prop.hedgeType : undefined,
  hedgePrice: prop.hedgePrice !== undefined ? prop.hedgePrice : undefined,
  buyPrice: prop.buyPrice !== undefined ? prop.buyPrice : undefined,
  sellPrice: prop.sellPrice !== undefined ? prop.sellPrice : undefined,
  qty: prop.qty !== undefined ? prop.qty : undefined,
  side: prop.side !== undefined ? prop.side : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  stopLoss: prop.stopLoss !== undefined ? prop.stopLoss : undefined,
  targetPrice: prop.targetPrice !== undefined ? prop.targetPrice : undefined,
  note: prop.note !== undefined ? prop.note : undefined,
  executionTime: prop.executionTime !== undefined ? prop.executionTime : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  fee: prop.fee !== undefined ? prop.fee : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyAction) {
        return response.data.createManyAction;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyAction:', error);
      throw error;
    }
  },

  /**
   * Update a single Action record.
   * @param props - Properties to update.
   * @returns The updated Action or null.
   */
  async update(props: ActionType): Promise<ActionType> {

    const client = createApolloClient();

      const UPDATE_ONE_ACTION = gql`
      mutation updateOneAction($data: ActionUpdateInput!, $where: ActionWhereUniqueInput!) {
        updateOneAction(data: $data, where: $where) {
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
              userId
              createdAt
              updatedAt
              trades {
                id
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
                assetId
                asset {
                  id
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
                assetId
                newsArticleId
                url
                news {
                  id
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            actions {
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
  sequence: props.sequence !== undefined ? {
            set: props.sequence 
           } : undefined,
  action: props.action !== undefined ? {
            set: props.action 
           } : undefined,
  hedgeType: props.hedgeType !== undefined ? {
            set: props.hedgeType 
           } : undefined,
  hedgePrice: props.hedgePrice !== undefined ? {
            set: props.hedgePrice 
           } : undefined,
  buyPrice: props.buyPrice !== undefined ? {
            set: props.buyPrice 
           } : undefined,
  sellPrice: props.sellPrice !== undefined ? {
            set: props.sellPrice 
           } : undefined,
  qty: props.qty !== undefined ? {
            set: props.qty 
           } : undefined,
  side: props.side !== undefined ? {
            set: props.side 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  stopLoss: props.stopLoss !== undefined ? {
            set: props.stopLoss 
           } : undefined,
  targetPrice: props.targetPrice !== undefined ? {
            set: props.targetPrice 
           } : undefined,
  note: props.note !== undefined ? {
            set: props.note 
           } : undefined,
  executionTime: props.executionTime !== undefined ? {
            set: props.executionTime 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  fee: props.fee !== undefined ? {
            set: props.fee 
           } : undefined,
  trade: props.trade ? {
    upsert: {
      where: {
        id: props.trade.id !== undefined ? {
            equals: props.trade.id 
           } : undefined,
      },
      update: {
        id: props.trade.id !== undefined ? {
            set: props.trade.id  
           } : undefined,
        quantity: props.trade.quantity !== undefined ? {
            set: props.trade.quantity  
           } : undefined,
        price: props.trade.price !== undefined ? {
            set: props.trade.price  
           } : undefined,
        total: props.trade.total !== undefined ? {
            set: props.trade.total  
           } : undefined,
        timestamp: props.trade.timestamp !== undefined ? {
            set: props.trade.timestamp  
           } : undefined,
        status: props.trade.status !== undefined ? {
            set: props.trade.status  
           } : undefined,
    account: props.trade.account ? {
      upsert: {
        where: {
          id: props.trade.account.id !== undefined ? {
              equals: props.trade.account.id 
             } : undefined,
        },
        update: {
          id: props.trade.account.id !== undefined ? {
              set: props.trade.account.id  
             } : undefined,
          type: props.trade.account.type !== undefined ? {
              set: props.trade.account.type  
             } : undefined,
          APIKey: props.trade.account.APIKey !== undefined ? {
              set: props.trade.account.APIKey  
             } : undefined,
          APISecret: props.trade.account.APISecret !== undefined ? {
              set: props.trade.account.APISecret  
             } : undefined,
          configuration: props.trade.account.configuration !== undefined ? {
              set: props.trade.account.configuration  
             } : undefined,
          marketOpen: props.trade.account.marketOpen !== undefined ? {
              set: props.trade.account.marketOpen  
             } : undefined,
        },
        create: {
          type: props.trade.account.type !== undefined ? props.trade.account.type : undefined,
          APIKey: props.trade.account.APIKey !== undefined ? props.trade.account.APIKey : undefined,
          APISecret: props.trade.account.APISecret !== undefined ? props.trade.account.APISecret : undefined,
          configuration: props.trade.account.configuration !== undefined ? props.trade.account.configuration : undefined,
          marketOpen: props.trade.account.marketOpen !== undefined ? props.trade.account.marketOpen : undefined,
        },
      }
    } : undefined,
    asset: props.trade.asset ? {
      upsert: {
        where: {
          id: props.trade.asset.id !== undefined ? {
              equals: props.trade.asset.id 
             } : undefined,
          symbol: props.trade.asset.symbol !== undefined ? {
              equals: props.trade.asset.symbol 
             } : undefined,
          name: props.trade.asset.name !== undefined ? {
              equals: props.trade.asset.name 
             } : undefined,
        },
        update: {
          id: props.trade.asset.id !== undefined ? {
              set: props.trade.asset.id  
             } : undefined,
          symbol: props.trade.asset.symbol !== undefined ? {
              set: props.trade.asset.symbol  
             } : undefined,
          name: props.trade.asset.name !== undefined ? {
              set: props.trade.asset.name  
             } : undefined,
          type: props.trade.asset.type !== undefined ? {
              set: props.trade.asset.type  
             } : undefined,
          logoUrl: props.trade.asset.logoUrl !== undefined ? {
              set: props.trade.asset.logoUrl  
             } : undefined,
          description: props.trade.asset.description !== undefined ? {
              set: props.trade.asset.description  
             } : undefined,
          cik: props.trade.asset.cik !== undefined ? {
              set: props.trade.asset.cik  
             } : undefined,
          exchange: props.trade.asset.exchange !== undefined ? {
              set: props.trade.asset.exchange  
             } : undefined,
          currency: props.trade.asset.currency !== undefined ? {
              set: props.trade.asset.currency  
             } : undefined,
          country: props.trade.asset.country !== undefined ? {
              set: props.trade.asset.country  
             } : undefined,
          sector: props.trade.asset.sector !== undefined ? {
              set: props.trade.asset.sector  
             } : undefined,
          industry: props.trade.asset.industry !== undefined ? {
              set: props.trade.asset.industry  
             } : undefined,
          address: props.trade.asset.address !== undefined ? {
              set: props.trade.asset.address  
             } : undefined,
          officialSite: props.trade.asset.officialSite !== undefined ? {
              set: props.trade.asset.officialSite  
             } : undefined,
          fiscalYearEnd: props.trade.asset.fiscalYearEnd !== undefined ? {
              set: props.trade.asset.fiscalYearEnd  
             } : undefined,
          latestQuarter: props.trade.asset.latestQuarter !== undefined ? {
              set: props.trade.asset.latestQuarter  
             } : undefined,
          marketCapitalization: props.trade.asset.marketCapitalization !== undefined ? {
              set: props.trade.asset.marketCapitalization  
             } : undefined,
          ebitda: props.trade.asset.ebitda !== undefined ? {
              set: props.trade.asset.ebitda  
             } : undefined,
          peRatio: props.trade.asset.peRatio !== undefined ? {
              set: props.trade.asset.peRatio  
             } : undefined,
          pegRatio: props.trade.asset.pegRatio !== undefined ? {
              set: props.trade.asset.pegRatio  
             } : undefined,
          bookValue: props.trade.asset.bookValue !== undefined ? {
              set: props.trade.asset.bookValue  
             } : undefined,
          dividendPerShare: props.trade.asset.dividendPerShare !== undefined ? {
              set: props.trade.asset.dividendPerShare  
             } : undefined,
          dividendYield: props.trade.asset.dividendYield !== undefined ? {
              set: props.trade.asset.dividendYield  
             } : undefined,
          eps: props.trade.asset.eps !== undefined ? {
              set: props.trade.asset.eps  
             } : undefined,
          revenuePerShareTTM: props.trade.asset.revenuePerShareTTM !== undefined ? {
              set: props.trade.asset.revenuePerShareTTM  
             } : undefined,
          profitMargin: props.trade.asset.profitMargin !== undefined ? {
              set: props.trade.asset.profitMargin  
             } : undefined,
          operatingMarginTTM: props.trade.asset.operatingMarginTTM !== undefined ? {
              set: props.trade.asset.operatingMarginTTM  
             } : undefined,
          returnOnAssetsTTM: props.trade.asset.returnOnAssetsTTM !== undefined ? {
              set: props.trade.asset.returnOnAssetsTTM  
             } : undefined,
          returnOnEquityTTM: props.trade.asset.returnOnEquityTTM !== undefined ? {
              set: props.trade.asset.returnOnEquityTTM  
             } : undefined,
          revenueTTM: props.trade.asset.revenueTTM !== undefined ? {
              set: props.trade.asset.revenueTTM  
             } : undefined,
          grossProfitTTM: props.trade.asset.grossProfitTTM !== undefined ? {
              set: props.trade.asset.grossProfitTTM  
             } : undefined,
          dilutedEPSTTM: props.trade.asset.dilutedEPSTTM !== undefined ? {
              set: props.trade.asset.dilutedEPSTTM  
             } : undefined,
          quarterlyEarningsGrowthYOY: props.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: props.trade.asset.quarterlyEarningsGrowthYOY  
             } : undefined,
          quarterlyRevenueGrowthYOY: props.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: props.trade.asset.quarterlyRevenueGrowthYOY  
             } : undefined,
          analystTargetPrice: props.trade.asset.analystTargetPrice !== undefined ? {
              set: props.trade.asset.analystTargetPrice  
             } : undefined,
          analystRatingStrongBuy: props.trade.asset.analystRatingStrongBuy !== undefined ? {
              set: props.trade.asset.analystRatingStrongBuy  
             } : undefined,
          analystRatingBuy: props.trade.asset.analystRatingBuy !== undefined ? {
              set: props.trade.asset.analystRatingBuy  
             } : undefined,
          analystRatingHold: props.trade.asset.analystRatingHold !== undefined ? {
              set: props.trade.asset.analystRatingHold  
             } : undefined,
          analystRatingSell: props.trade.asset.analystRatingSell !== undefined ? {
              set: props.trade.asset.analystRatingSell  
             } : undefined,
          analystRatingStrongSell: props.trade.asset.analystRatingStrongSell !== undefined ? {
              set: props.trade.asset.analystRatingStrongSell  
             } : undefined,
          trailingPE: props.trade.asset.trailingPE !== undefined ? {
              set: props.trade.asset.trailingPE  
             } : undefined,
          forwardPE: props.trade.asset.forwardPE !== undefined ? {
              set: props.trade.asset.forwardPE  
             } : undefined,
          priceToSalesRatioTTM: props.trade.asset.priceToSalesRatioTTM !== undefined ? {
              set: props.trade.asset.priceToSalesRatioTTM  
             } : undefined,
          priceToBookRatio: props.trade.asset.priceToBookRatio !== undefined ? {
              set: props.trade.asset.priceToBookRatio  
             } : undefined,
          evToRevenue: props.trade.asset.evToRevenue !== undefined ? {
              set: props.trade.asset.evToRevenue  
             } : undefined,
          evToEbitda: props.trade.asset.evToEbitda !== undefined ? {
              set: props.trade.asset.evToEbitda  
             } : undefined,
          beta: props.trade.asset.beta !== undefined ? {
              set: props.trade.asset.beta  
             } : undefined,
          week52High: props.trade.asset.week52High !== undefined ? {
              set: props.trade.asset.week52High  
             } : undefined,
          week52Low: props.trade.asset.week52Low !== undefined ? {
              set: props.trade.asset.week52Low  
             } : undefined,
          day50MovingAverage: props.trade.asset.day50MovingAverage !== undefined ? {
              set: props.trade.asset.day50MovingAverage  
             } : undefined,
          day200MovingAverage: props.trade.asset.day200MovingAverage !== undefined ? {
              set: props.trade.asset.day200MovingAverage  
             } : undefined,
          sharesOutstanding: props.trade.asset.sharesOutstanding !== undefined ? {
              set: props.trade.asset.sharesOutstanding  
             } : undefined,
          dividendDate: props.trade.asset.dividendDate !== undefined ? {
              set: props.trade.asset.dividendDate  
             } : undefined,
          exDividendDate: props.trade.asset.exDividendDate !== undefined ? {
              set: props.trade.asset.exDividendDate  
             } : undefined,
        },
        create: {
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
          type: props.trade.asset.type !== undefined ? props.trade.asset.type : undefined,
          logoUrl: props.trade.asset.logoUrl !== undefined ? props.trade.asset.logoUrl : undefined,
          description: props.trade.asset.description !== undefined ? props.trade.asset.description : undefined,
          cik: props.trade.asset.cik !== undefined ? props.trade.asset.cik : undefined,
          exchange: props.trade.asset.exchange !== undefined ? props.trade.asset.exchange : undefined,
          currency: props.trade.asset.currency !== undefined ? props.trade.asset.currency : undefined,
          country: props.trade.asset.country !== undefined ? props.trade.asset.country : undefined,
          sector: props.trade.asset.sector !== undefined ? props.trade.asset.sector : undefined,
          industry: props.trade.asset.industry !== undefined ? props.trade.asset.industry : undefined,
          address: props.trade.asset.address !== undefined ? props.trade.asset.address : undefined,
          officialSite: props.trade.asset.officialSite !== undefined ? props.trade.asset.officialSite : undefined,
          fiscalYearEnd: props.trade.asset.fiscalYearEnd !== undefined ? props.trade.asset.fiscalYearEnd : undefined,
          latestQuarter: props.trade.asset.latestQuarter !== undefined ? props.trade.asset.latestQuarter : undefined,
          marketCapitalization: props.trade.asset.marketCapitalization !== undefined ? props.trade.asset.marketCapitalization : undefined,
          ebitda: props.trade.asset.ebitda !== undefined ? props.trade.asset.ebitda : undefined,
          peRatio: props.trade.asset.peRatio !== undefined ? props.trade.asset.peRatio : undefined,
          pegRatio: props.trade.asset.pegRatio !== undefined ? props.trade.asset.pegRatio : undefined,
          bookValue: props.trade.asset.bookValue !== undefined ? props.trade.asset.bookValue : undefined,
          dividendPerShare: props.trade.asset.dividendPerShare !== undefined ? props.trade.asset.dividendPerShare : undefined,
          dividendYield: props.trade.asset.dividendYield !== undefined ? props.trade.asset.dividendYield : undefined,
          eps: props.trade.asset.eps !== undefined ? props.trade.asset.eps : undefined,
          revenuePerShareTTM: props.trade.asset.revenuePerShareTTM !== undefined ? props.trade.asset.revenuePerShareTTM : undefined,
          profitMargin: props.trade.asset.profitMargin !== undefined ? props.trade.asset.profitMargin : undefined,
          operatingMarginTTM: props.trade.asset.operatingMarginTTM !== undefined ? props.trade.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.trade.asset.returnOnAssetsTTM !== undefined ? props.trade.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.trade.asset.returnOnEquityTTM !== undefined ? props.trade.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.trade.asset.revenueTTM !== undefined ? props.trade.asset.revenueTTM : undefined,
          grossProfitTTM: props.trade.asset.grossProfitTTM !== undefined ? props.trade.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.trade.asset.dilutedEPSTTM !== undefined ? props.trade.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? props.trade.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? props.trade.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.trade.asset.analystTargetPrice !== undefined ? props.trade.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.trade.asset.analystRatingStrongBuy !== undefined ? props.trade.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.trade.asset.analystRatingBuy !== undefined ? props.trade.asset.analystRatingBuy : undefined,
          analystRatingHold: props.trade.asset.analystRatingHold !== undefined ? props.trade.asset.analystRatingHold : undefined,
          analystRatingSell: props.trade.asset.analystRatingSell !== undefined ? props.trade.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.trade.asset.analystRatingStrongSell !== undefined ? props.trade.asset.analystRatingStrongSell : undefined,
          trailingPE: props.trade.asset.trailingPE !== undefined ? props.trade.asset.trailingPE : undefined,
          forwardPE: props.trade.asset.forwardPE !== undefined ? props.trade.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.trade.asset.priceToSalesRatioTTM !== undefined ? props.trade.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.trade.asset.priceToBookRatio !== undefined ? props.trade.asset.priceToBookRatio : undefined,
          evToRevenue: props.trade.asset.evToRevenue !== undefined ? props.trade.asset.evToRevenue : undefined,
          evToEbitda: props.trade.asset.evToEbitda !== undefined ? props.trade.asset.evToEbitda : undefined,
          beta: props.trade.asset.beta !== undefined ? props.trade.asset.beta : undefined,
          week52High: props.trade.asset.week52High !== undefined ? props.trade.asset.week52High : undefined,
          week52Low: props.trade.asset.week52Low !== undefined ? props.trade.asset.week52Low : undefined,
          day50MovingAverage: props.trade.asset.day50MovingAverage !== undefined ? props.trade.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.trade.asset.day200MovingAverage !== undefined ? props.trade.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.trade.asset.sharesOutstanding !== undefined ? props.trade.asset.sharesOutstanding : undefined,
          dividendDate: props.trade.asset.dividendDate !== undefined ? props.trade.asset.dividendDate : undefined,
          exDividendDate: props.trade.asset.exDividendDate !== undefined ? props.trade.asset.exDividendDate : undefined,
        },
      }
    } : undefined,
      },
      create: {
        quantity: props.trade.quantity !== undefined ? props.trade.quantity : undefined,
        price: props.trade.price !== undefined ? props.trade.price : undefined,
        total: props.trade.total !== undefined ? props.trade.total : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
    account: props.trade.account ? {
      connectOrCreate: {
        where: {
          id: props.trade.account.id !== undefined ? props.trade.account.id : undefined,
        },
        create: {
          type: props.trade.account.type !== undefined ? props.trade.account.type : undefined,
          APIKey: props.trade.account.APIKey !== undefined ? props.trade.account.APIKey : undefined,
          APISecret: props.trade.account.APISecret !== undefined ? props.trade.account.APISecret : undefined,
          configuration: props.trade.account.configuration !== undefined ? props.trade.account.configuration : undefined,
          marketOpen: props.trade.account.marketOpen !== undefined ? props.trade.account.marketOpen : undefined,
        },
      }
    } : undefined,
    asset: props.trade.asset ? {
      connectOrCreate: {
        where: {
          id: props.trade.asset.id !== undefined ? props.trade.asset.id : undefined,
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
        },
        create: {
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
          type: props.trade.asset.type !== undefined ? props.trade.asset.type : undefined,
          logoUrl: props.trade.asset.logoUrl !== undefined ? props.trade.asset.logoUrl : undefined,
          description: props.trade.asset.description !== undefined ? props.trade.asset.description : undefined,
          cik: props.trade.asset.cik !== undefined ? props.trade.asset.cik : undefined,
          exchange: props.trade.asset.exchange !== undefined ? props.trade.asset.exchange : undefined,
          currency: props.trade.asset.currency !== undefined ? props.trade.asset.currency : undefined,
          country: props.trade.asset.country !== undefined ? props.trade.asset.country : undefined,
          sector: props.trade.asset.sector !== undefined ? props.trade.asset.sector : undefined,
          industry: props.trade.asset.industry !== undefined ? props.trade.asset.industry : undefined,
          address: props.trade.asset.address !== undefined ? props.trade.asset.address : undefined,
          officialSite: props.trade.asset.officialSite !== undefined ? props.trade.asset.officialSite : undefined,
          fiscalYearEnd: props.trade.asset.fiscalYearEnd !== undefined ? props.trade.asset.fiscalYearEnd : undefined,
          latestQuarter: props.trade.asset.latestQuarter !== undefined ? props.trade.asset.latestQuarter : undefined,
          marketCapitalization: props.trade.asset.marketCapitalization !== undefined ? props.trade.asset.marketCapitalization : undefined,
          ebitda: props.trade.asset.ebitda !== undefined ? props.trade.asset.ebitda : undefined,
          peRatio: props.trade.asset.peRatio !== undefined ? props.trade.asset.peRatio : undefined,
          pegRatio: props.trade.asset.pegRatio !== undefined ? props.trade.asset.pegRatio : undefined,
          bookValue: props.trade.asset.bookValue !== undefined ? props.trade.asset.bookValue : undefined,
          dividendPerShare: props.trade.asset.dividendPerShare !== undefined ? props.trade.asset.dividendPerShare : undefined,
          dividendYield: props.trade.asset.dividendYield !== undefined ? props.trade.asset.dividendYield : undefined,
          eps: props.trade.asset.eps !== undefined ? props.trade.asset.eps : undefined,
          revenuePerShareTTM: props.trade.asset.revenuePerShareTTM !== undefined ? props.trade.asset.revenuePerShareTTM : undefined,
          profitMargin: props.trade.asset.profitMargin !== undefined ? props.trade.asset.profitMargin : undefined,
          operatingMarginTTM: props.trade.asset.operatingMarginTTM !== undefined ? props.trade.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.trade.asset.returnOnAssetsTTM !== undefined ? props.trade.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.trade.asset.returnOnEquityTTM !== undefined ? props.trade.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.trade.asset.revenueTTM !== undefined ? props.trade.asset.revenueTTM : undefined,
          grossProfitTTM: props.trade.asset.grossProfitTTM !== undefined ? props.trade.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.trade.asset.dilutedEPSTTM !== undefined ? props.trade.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? props.trade.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? props.trade.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.trade.asset.analystTargetPrice !== undefined ? props.trade.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.trade.asset.analystRatingStrongBuy !== undefined ? props.trade.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.trade.asset.analystRatingBuy !== undefined ? props.trade.asset.analystRatingBuy : undefined,
          analystRatingHold: props.trade.asset.analystRatingHold !== undefined ? props.trade.asset.analystRatingHold : undefined,
          analystRatingSell: props.trade.asset.analystRatingSell !== undefined ? props.trade.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.trade.asset.analystRatingStrongSell !== undefined ? props.trade.asset.analystRatingStrongSell : undefined,
          trailingPE: props.trade.asset.trailingPE !== undefined ? props.trade.asset.trailingPE : undefined,
          forwardPE: props.trade.asset.forwardPE !== undefined ? props.trade.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.trade.asset.priceToSalesRatioTTM !== undefined ? props.trade.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.trade.asset.priceToBookRatio !== undefined ? props.trade.asset.priceToBookRatio : undefined,
          evToRevenue: props.trade.asset.evToRevenue !== undefined ? props.trade.asset.evToRevenue : undefined,
          evToEbitda: props.trade.asset.evToEbitda !== undefined ? props.trade.asset.evToEbitda : undefined,
          beta: props.trade.asset.beta !== undefined ? props.trade.asset.beta : undefined,
          week52High: props.trade.asset.week52High !== undefined ? props.trade.asset.week52High : undefined,
          week52Low: props.trade.asset.week52Low !== undefined ? props.trade.asset.week52Low : undefined,
          day50MovingAverage: props.trade.asset.day50MovingAverage !== undefined ? props.trade.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.trade.asset.day200MovingAverage !== undefined ? props.trade.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.trade.asset.sharesOutstanding !== undefined ? props.trade.asset.sharesOutstanding : undefined,
          dividendDate: props.trade.asset.dividendDate !== undefined ? props.trade.asset.dividendDate : undefined,
          exDividendDate: props.trade.asset.exDividendDate !== undefined ? props.trade.asset.exDividendDate : undefined,
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
      const response = await client.mutate({ mutation: UPDATE_ONE_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneAction) {
        return response.data.updateOneAction;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneAction:', error);
      throw error;
    }
  },

  /**
   * Update multiple Action records.
   * @param props - Array of Action objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: ActionType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const UPDATE_MANY_ACTION = gql`
      mutation updateManyAction($data: [ActionCreateManyInput!]!) {
        updateManyAction(data: $data) {
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
  sequence: prop.sequence !== undefined ? {
            set: prop.sequence 
           } : undefined,
  action: prop.action !== undefined ? {
            set: prop.action 
           } : undefined,
  hedgeType: prop.hedgeType !== undefined ? {
            set: prop.hedgeType 
           } : undefined,
  hedgePrice: prop.hedgePrice !== undefined ? {
            set: prop.hedgePrice 
           } : undefined,
  buyPrice: prop.buyPrice !== undefined ? {
            set: prop.buyPrice 
           } : undefined,
  sellPrice: prop.sellPrice !== undefined ? {
            set: prop.sellPrice 
           } : undefined,
  qty: prop.qty !== undefined ? {
            set: prop.qty 
           } : undefined,
  side: prop.side !== undefined ? {
            set: prop.side 
           } : undefined,
  type: prop.type !== undefined ? {
            set: prop.type 
           } : undefined,
  stopLoss: prop.stopLoss !== undefined ? {
            set: prop.stopLoss 
           } : undefined,
  targetPrice: prop.targetPrice !== undefined ? {
            set: prop.targetPrice 
           } : undefined,
  note: prop.note !== undefined ? {
            set: prop.note 
           } : undefined,
  executionTime: prop.executionTime !== undefined ? {
            set: prop.executionTime 
           } : undefined,
  status: prop.status !== undefined ? {
            set: prop.status 
           } : undefined,
  fee: prop.fee !== undefined ? {
            set: prop.fee 
           } : undefined,
  trade: prop.trade ? {
    upsert: {
      where: {
        id: prop.trade.id !== undefined ? {
            equals: prop.trade.id 
           } : undefined,
      },
      update: {
        id: prop.trade.id !== undefined ? {
            set: prop.trade.id  
           } : undefined,
        quantity: prop.trade.quantity !== undefined ? {
            set: prop.trade.quantity  
           } : undefined,
        price: prop.trade.price !== undefined ? {
            set: prop.trade.price  
           } : undefined,
        total: prop.trade.total !== undefined ? {
            set: prop.trade.total  
           } : undefined,
        timestamp: prop.trade.timestamp !== undefined ? {
            set: prop.trade.timestamp  
           } : undefined,
        status: prop.trade.status !== undefined ? {
            set: prop.trade.status  
           } : undefined,
    account: prop.trade.account ? {
      upsert: {
        where: {
          id: prop.trade.account.id !== undefined ? {
              equals: prop.trade.account.id 
             } : undefined,
        },
        update: {
          id: prop.trade.account.id !== undefined ? {
              set: prop.trade.account.id  
             } : undefined,
          type: prop.trade.account.type !== undefined ? {
              set: prop.trade.account.type  
             } : undefined,
          APIKey: prop.trade.account.APIKey !== undefined ? {
              set: prop.trade.account.APIKey  
             } : undefined,
          APISecret: prop.trade.account.APISecret !== undefined ? {
              set: prop.trade.account.APISecret  
             } : undefined,
          configuration: prop.trade.account.configuration !== undefined ? {
              set: prop.trade.account.configuration  
             } : undefined,
          marketOpen: prop.trade.account.marketOpen !== undefined ? {
              set: prop.trade.account.marketOpen  
             } : undefined,
        },
        create: {
          type: prop.trade.account.type !== undefined ? prop.trade.account.type : undefined,
          APIKey: prop.trade.account.APIKey !== undefined ? prop.trade.account.APIKey : undefined,
          APISecret: prop.trade.account.APISecret !== undefined ? prop.trade.account.APISecret : undefined,
          configuration: prop.trade.account.configuration !== undefined ? prop.trade.account.configuration : undefined,
          marketOpen: prop.trade.account.marketOpen !== undefined ? prop.trade.account.marketOpen : undefined,
        },
      }
    } : undefined,
    asset: prop.trade.asset ? {
      upsert: {
        where: {
          id: prop.trade.asset.id !== undefined ? {
              equals: prop.trade.asset.id 
             } : undefined,
          symbol: prop.trade.asset.symbol !== undefined ? {
              equals: prop.trade.asset.symbol 
             } : undefined,
          name: prop.trade.asset.name !== undefined ? {
              equals: prop.trade.asset.name 
             } : undefined,
        },
        update: {
          id: prop.trade.asset.id !== undefined ? {
              set: prop.trade.asset.id  
             } : undefined,
          symbol: prop.trade.asset.symbol !== undefined ? {
              set: prop.trade.asset.symbol  
             } : undefined,
          name: prop.trade.asset.name !== undefined ? {
              set: prop.trade.asset.name  
             } : undefined,
          type: prop.trade.asset.type !== undefined ? {
              set: prop.trade.asset.type  
             } : undefined,
          logoUrl: prop.trade.asset.logoUrl !== undefined ? {
              set: prop.trade.asset.logoUrl  
             } : undefined,
          description: prop.trade.asset.description !== undefined ? {
              set: prop.trade.asset.description  
             } : undefined,
          cik: prop.trade.asset.cik !== undefined ? {
              set: prop.trade.asset.cik  
             } : undefined,
          exchange: prop.trade.asset.exchange !== undefined ? {
              set: prop.trade.asset.exchange  
             } : undefined,
          currency: prop.trade.asset.currency !== undefined ? {
              set: prop.trade.asset.currency  
             } : undefined,
          country: prop.trade.asset.country !== undefined ? {
              set: prop.trade.asset.country  
             } : undefined,
          sector: prop.trade.asset.sector !== undefined ? {
              set: prop.trade.asset.sector  
             } : undefined,
          industry: prop.trade.asset.industry !== undefined ? {
              set: prop.trade.asset.industry  
             } : undefined,
          address: prop.trade.asset.address !== undefined ? {
              set: prop.trade.asset.address  
             } : undefined,
          officialSite: prop.trade.asset.officialSite !== undefined ? {
              set: prop.trade.asset.officialSite  
             } : undefined,
          fiscalYearEnd: prop.trade.asset.fiscalYearEnd !== undefined ? {
              set: prop.trade.asset.fiscalYearEnd  
             } : undefined,
          latestQuarter: prop.trade.asset.latestQuarter !== undefined ? {
              set: prop.trade.asset.latestQuarter  
             } : undefined,
          marketCapitalization: prop.trade.asset.marketCapitalization !== undefined ? {
              set: prop.trade.asset.marketCapitalization  
             } : undefined,
          ebitda: prop.trade.asset.ebitda !== undefined ? {
              set: prop.trade.asset.ebitda  
             } : undefined,
          peRatio: prop.trade.asset.peRatio !== undefined ? {
              set: prop.trade.asset.peRatio  
             } : undefined,
          pegRatio: prop.trade.asset.pegRatio !== undefined ? {
              set: prop.trade.asset.pegRatio  
             } : undefined,
          bookValue: prop.trade.asset.bookValue !== undefined ? {
              set: prop.trade.asset.bookValue  
             } : undefined,
          dividendPerShare: prop.trade.asset.dividendPerShare !== undefined ? {
              set: prop.trade.asset.dividendPerShare  
             } : undefined,
          dividendYield: prop.trade.asset.dividendYield !== undefined ? {
              set: prop.trade.asset.dividendYield  
             } : undefined,
          eps: prop.trade.asset.eps !== undefined ? {
              set: prop.trade.asset.eps  
             } : undefined,
          revenuePerShareTTM: prop.trade.asset.revenuePerShareTTM !== undefined ? {
              set: prop.trade.asset.revenuePerShareTTM  
             } : undefined,
          profitMargin: prop.trade.asset.profitMargin !== undefined ? {
              set: prop.trade.asset.profitMargin  
             } : undefined,
          operatingMarginTTM: prop.trade.asset.operatingMarginTTM !== undefined ? {
              set: prop.trade.asset.operatingMarginTTM  
             } : undefined,
          returnOnAssetsTTM: prop.trade.asset.returnOnAssetsTTM !== undefined ? {
              set: prop.trade.asset.returnOnAssetsTTM  
             } : undefined,
          returnOnEquityTTM: prop.trade.asset.returnOnEquityTTM !== undefined ? {
              set: prop.trade.asset.returnOnEquityTTM  
             } : undefined,
          revenueTTM: prop.trade.asset.revenueTTM !== undefined ? {
              set: prop.trade.asset.revenueTTM  
             } : undefined,
          grossProfitTTM: prop.trade.asset.grossProfitTTM !== undefined ? {
              set: prop.trade.asset.grossProfitTTM  
             } : undefined,
          dilutedEPSTTM: prop.trade.asset.dilutedEPSTTM !== undefined ? {
              set: prop.trade.asset.dilutedEPSTTM  
             } : undefined,
          quarterlyEarningsGrowthYOY: prop.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: prop.trade.asset.quarterlyEarningsGrowthYOY  
             } : undefined,
          quarterlyRevenueGrowthYOY: prop.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: prop.trade.asset.quarterlyRevenueGrowthYOY  
             } : undefined,
          analystTargetPrice: prop.trade.asset.analystTargetPrice !== undefined ? {
              set: prop.trade.asset.analystTargetPrice  
             } : undefined,
          analystRatingStrongBuy: prop.trade.asset.analystRatingStrongBuy !== undefined ? {
              set: prop.trade.asset.analystRatingStrongBuy  
             } : undefined,
          analystRatingBuy: prop.trade.asset.analystRatingBuy !== undefined ? {
              set: prop.trade.asset.analystRatingBuy  
             } : undefined,
          analystRatingHold: prop.trade.asset.analystRatingHold !== undefined ? {
              set: prop.trade.asset.analystRatingHold  
             } : undefined,
          analystRatingSell: prop.trade.asset.analystRatingSell !== undefined ? {
              set: prop.trade.asset.analystRatingSell  
             } : undefined,
          analystRatingStrongSell: prop.trade.asset.analystRatingStrongSell !== undefined ? {
              set: prop.trade.asset.analystRatingStrongSell  
             } : undefined,
          trailingPE: prop.trade.asset.trailingPE !== undefined ? {
              set: prop.trade.asset.trailingPE  
             } : undefined,
          forwardPE: prop.trade.asset.forwardPE !== undefined ? {
              set: prop.trade.asset.forwardPE  
             } : undefined,
          priceToSalesRatioTTM: prop.trade.asset.priceToSalesRatioTTM !== undefined ? {
              set: prop.trade.asset.priceToSalesRatioTTM  
             } : undefined,
          priceToBookRatio: prop.trade.asset.priceToBookRatio !== undefined ? {
              set: prop.trade.asset.priceToBookRatio  
             } : undefined,
          evToRevenue: prop.trade.asset.evToRevenue !== undefined ? {
              set: prop.trade.asset.evToRevenue  
             } : undefined,
          evToEbitda: prop.trade.asset.evToEbitda !== undefined ? {
              set: prop.trade.asset.evToEbitda  
             } : undefined,
          beta: prop.trade.asset.beta !== undefined ? {
              set: prop.trade.asset.beta  
             } : undefined,
          week52High: prop.trade.asset.week52High !== undefined ? {
              set: prop.trade.asset.week52High  
             } : undefined,
          week52Low: prop.trade.asset.week52Low !== undefined ? {
              set: prop.trade.asset.week52Low  
             } : undefined,
          day50MovingAverage: prop.trade.asset.day50MovingAverage !== undefined ? {
              set: prop.trade.asset.day50MovingAverage  
             } : undefined,
          day200MovingAverage: prop.trade.asset.day200MovingAverage !== undefined ? {
              set: prop.trade.asset.day200MovingAverage  
             } : undefined,
          sharesOutstanding: prop.trade.asset.sharesOutstanding !== undefined ? {
              set: prop.trade.asset.sharesOutstanding  
             } : undefined,
          dividendDate: prop.trade.asset.dividendDate !== undefined ? {
              set: prop.trade.asset.dividendDate  
             } : undefined,
          exDividendDate: prop.trade.asset.exDividendDate !== undefined ? {
              set: prop.trade.asset.exDividendDate  
             } : undefined,
        },
        create: {
          symbol: prop.trade.asset.symbol !== undefined ? prop.trade.asset.symbol : undefined,
          name: prop.trade.asset.name !== undefined ? prop.trade.asset.name : undefined,
          type: prop.trade.asset.type !== undefined ? prop.trade.asset.type : undefined,
          logoUrl: prop.trade.asset.logoUrl !== undefined ? prop.trade.asset.logoUrl : undefined,
          description: prop.trade.asset.description !== undefined ? prop.trade.asset.description : undefined,
          cik: prop.trade.asset.cik !== undefined ? prop.trade.asset.cik : undefined,
          exchange: prop.trade.asset.exchange !== undefined ? prop.trade.asset.exchange : undefined,
          currency: prop.trade.asset.currency !== undefined ? prop.trade.asset.currency : undefined,
          country: prop.trade.asset.country !== undefined ? prop.trade.asset.country : undefined,
          sector: prop.trade.asset.sector !== undefined ? prop.trade.asset.sector : undefined,
          industry: prop.trade.asset.industry !== undefined ? prop.trade.asset.industry : undefined,
          address: prop.trade.asset.address !== undefined ? prop.trade.asset.address : undefined,
          officialSite: prop.trade.asset.officialSite !== undefined ? prop.trade.asset.officialSite : undefined,
          fiscalYearEnd: prop.trade.asset.fiscalYearEnd !== undefined ? prop.trade.asset.fiscalYearEnd : undefined,
          latestQuarter: prop.trade.asset.latestQuarter !== undefined ? prop.trade.asset.latestQuarter : undefined,
          marketCapitalization: prop.trade.asset.marketCapitalization !== undefined ? prop.trade.asset.marketCapitalization : undefined,
          ebitda: prop.trade.asset.ebitda !== undefined ? prop.trade.asset.ebitda : undefined,
          peRatio: prop.trade.asset.peRatio !== undefined ? prop.trade.asset.peRatio : undefined,
          pegRatio: prop.trade.asset.pegRatio !== undefined ? prop.trade.asset.pegRatio : undefined,
          bookValue: prop.trade.asset.bookValue !== undefined ? prop.trade.asset.bookValue : undefined,
          dividendPerShare: prop.trade.asset.dividendPerShare !== undefined ? prop.trade.asset.dividendPerShare : undefined,
          dividendYield: prop.trade.asset.dividendYield !== undefined ? prop.trade.asset.dividendYield : undefined,
          eps: prop.trade.asset.eps !== undefined ? prop.trade.asset.eps : undefined,
          revenuePerShareTTM: prop.trade.asset.revenuePerShareTTM !== undefined ? prop.trade.asset.revenuePerShareTTM : undefined,
          profitMargin: prop.trade.asset.profitMargin !== undefined ? prop.trade.asset.profitMargin : undefined,
          operatingMarginTTM: prop.trade.asset.operatingMarginTTM !== undefined ? prop.trade.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: prop.trade.asset.returnOnAssetsTTM !== undefined ? prop.trade.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: prop.trade.asset.returnOnEquityTTM !== undefined ? prop.trade.asset.returnOnEquityTTM : undefined,
          revenueTTM: prop.trade.asset.revenueTTM !== undefined ? prop.trade.asset.revenueTTM : undefined,
          grossProfitTTM: prop.trade.asset.grossProfitTTM !== undefined ? prop.trade.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: prop.trade.asset.dilutedEPSTTM !== undefined ? prop.trade.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: prop.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.trade.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: prop.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.trade.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: prop.trade.asset.analystTargetPrice !== undefined ? prop.trade.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: prop.trade.asset.analystRatingStrongBuy !== undefined ? prop.trade.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: prop.trade.asset.analystRatingBuy !== undefined ? prop.trade.asset.analystRatingBuy : undefined,
          analystRatingHold: prop.trade.asset.analystRatingHold !== undefined ? prop.trade.asset.analystRatingHold : undefined,
          analystRatingSell: prop.trade.asset.analystRatingSell !== undefined ? prop.trade.asset.analystRatingSell : undefined,
          analystRatingStrongSell: prop.trade.asset.analystRatingStrongSell !== undefined ? prop.trade.asset.analystRatingStrongSell : undefined,
          trailingPE: prop.trade.asset.trailingPE !== undefined ? prop.trade.asset.trailingPE : undefined,
          forwardPE: prop.trade.asset.forwardPE !== undefined ? prop.trade.asset.forwardPE : undefined,
          priceToSalesRatioTTM: prop.trade.asset.priceToSalesRatioTTM !== undefined ? prop.trade.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: prop.trade.asset.priceToBookRatio !== undefined ? prop.trade.asset.priceToBookRatio : undefined,
          evToRevenue: prop.trade.asset.evToRevenue !== undefined ? prop.trade.asset.evToRevenue : undefined,
          evToEbitda: prop.trade.asset.evToEbitda !== undefined ? prop.trade.asset.evToEbitda : undefined,
          beta: prop.trade.asset.beta !== undefined ? prop.trade.asset.beta : undefined,
          week52High: prop.trade.asset.week52High !== undefined ? prop.trade.asset.week52High : undefined,
          week52Low: prop.trade.asset.week52Low !== undefined ? prop.trade.asset.week52Low : undefined,
          day50MovingAverage: prop.trade.asset.day50MovingAverage !== undefined ? prop.trade.asset.day50MovingAverage : undefined,
          day200MovingAverage: prop.trade.asset.day200MovingAverage !== undefined ? prop.trade.asset.day200MovingAverage : undefined,
          sharesOutstanding: prop.trade.asset.sharesOutstanding !== undefined ? prop.trade.asset.sharesOutstanding : undefined,
          dividendDate: prop.trade.asset.dividendDate !== undefined ? prop.trade.asset.dividendDate : undefined,
          exDividendDate: prop.trade.asset.exDividendDate !== undefined ? prop.trade.asset.exDividendDate : undefined,
        },
      }
    } : undefined,
      },
      create: {
        quantity: prop.trade.quantity !== undefined ? prop.trade.quantity : undefined,
        price: prop.trade.price !== undefined ? prop.trade.price : undefined,
        total: prop.trade.total !== undefined ? prop.trade.total : undefined,
        timestamp: prop.trade.timestamp !== undefined ? prop.trade.timestamp : undefined,
        status: prop.trade.status !== undefined ? prop.trade.status : undefined,
    account: prop.trade.account ? {
      connectOrCreate: {
        where: {
          id: prop.trade.account.id !== undefined ? prop.trade.account.id : undefined,
        },
        create: {
          type: prop.trade.account.type !== undefined ? prop.trade.account.type : undefined,
          APIKey: prop.trade.account.APIKey !== undefined ? prop.trade.account.APIKey : undefined,
          APISecret: prop.trade.account.APISecret !== undefined ? prop.trade.account.APISecret : undefined,
          configuration: prop.trade.account.configuration !== undefined ? prop.trade.account.configuration : undefined,
          marketOpen: prop.trade.account.marketOpen !== undefined ? prop.trade.account.marketOpen : undefined,
        },
      }
    } : undefined,
    asset: prop.trade.asset ? {
      connectOrCreate: {
        where: {
          id: prop.trade.asset.id !== undefined ? prop.trade.asset.id : undefined,
          symbol: prop.trade.asset.symbol !== undefined ? prop.trade.asset.symbol : undefined,
          name: prop.trade.asset.name !== undefined ? prop.trade.asset.name : undefined,
        },
        create: {
          symbol: prop.trade.asset.symbol !== undefined ? prop.trade.asset.symbol : undefined,
          name: prop.trade.asset.name !== undefined ? prop.trade.asset.name : undefined,
          type: prop.trade.asset.type !== undefined ? prop.trade.asset.type : undefined,
          logoUrl: prop.trade.asset.logoUrl !== undefined ? prop.trade.asset.logoUrl : undefined,
          description: prop.trade.asset.description !== undefined ? prop.trade.asset.description : undefined,
          cik: prop.trade.asset.cik !== undefined ? prop.trade.asset.cik : undefined,
          exchange: prop.trade.asset.exchange !== undefined ? prop.trade.asset.exchange : undefined,
          currency: prop.trade.asset.currency !== undefined ? prop.trade.asset.currency : undefined,
          country: prop.trade.asset.country !== undefined ? prop.trade.asset.country : undefined,
          sector: prop.trade.asset.sector !== undefined ? prop.trade.asset.sector : undefined,
          industry: prop.trade.asset.industry !== undefined ? prop.trade.asset.industry : undefined,
          address: prop.trade.asset.address !== undefined ? prop.trade.asset.address : undefined,
          officialSite: prop.trade.asset.officialSite !== undefined ? prop.trade.asset.officialSite : undefined,
          fiscalYearEnd: prop.trade.asset.fiscalYearEnd !== undefined ? prop.trade.asset.fiscalYearEnd : undefined,
          latestQuarter: prop.trade.asset.latestQuarter !== undefined ? prop.trade.asset.latestQuarter : undefined,
          marketCapitalization: prop.trade.asset.marketCapitalization !== undefined ? prop.trade.asset.marketCapitalization : undefined,
          ebitda: prop.trade.asset.ebitda !== undefined ? prop.trade.asset.ebitda : undefined,
          peRatio: prop.trade.asset.peRatio !== undefined ? prop.trade.asset.peRatio : undefined,
          pegRatio: prop.trade.asset.pegRatio !== undefined ? prop.trade.asset.pegRatio : undefined,
          bookValue: prop.trade.asset.bookValue !== undefined ? prop.trade.asset.bookValue : undefined,
          dividendPerShare: prop.trade.asset.dividendPerShare !== undefined ? prop.trade.asset.dividendPerShare : undefined,
          dividendYield: prop.trade.asset.dividendYield !== undefined ? prop.trade.asset.dividendYield : undefined,
          eps: prop.trade.asset.eps !== undefined ? prop.trade.asset.eps : undefined,
          revenuePerShareTTM: prop.trade.asset.revenuePerShareTTM !== undefined ? prop.trade.asset.revenuePerShareTTM : undefined,
          profitMargin: prop.trade.asset.profitMargin !== undefined ? prop.trade.asset.profitMargin : undefined,
          operatingMarginTTM: prop.trade.asset.operatingMarginTTM !== undefined ? prop.trade.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: prop.trade.asset.returnOnAssetsTTM !== undefined ? prop.trade.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: prop.trade.asset.returnOnEquityTTM !== undefined ? prop.trade.asset.returnOnEquityTTM : undefined,
          revenueTTM: prop.trade.asset.revenueTTM !== undefined ? prop.trade.asset.revenueTTM : undefined,
          grossProfitTTM: prop.trade.asset.grossProfitTTM !== undefined ? prop.trade.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: prop.trade.asset.dilutedEPSTTM !== undefined ? prop.trade.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: prop.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.trade.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: prop.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.trade.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: prop.trade.asset.analystTargetPrice !== undefined ? prop.trade.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: prop.trade.asset.analystRatingStrongBuy !== undefined ? prop.trade.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: prop.trade.asset.analystRatingBuy !== undefined ? prop.trade.asset.analystRatingBuy : undefined,
          analystRatingHold: prop.trade.asset.analystRatingHold !== undefined ? prop.trade.asset.analystRatingHold : undefined,
          analystRatingSell: prop.trade.asset.analystRatingSell !== undefined ? prop.trade.asset.analystRatingSell : undefined,
          analystRatingStrongSell: prop.trade.asset.analystRatingStrongSell !== undefined ? prop.trade.asset.analystRatingStrongSell : undefined,
          trailingPE: prop.trade.asset.trailingPE !== undefined ? prop.trade.asset.trailingPE : undefined,
          forwardPE: prop.trade.asset.forwardPE !== undefined ? prop.trade.asset.forwardPE : undefined,
          priceToSalesRatioTTM: prop.trade.asset.priceToSalesRatioTTM !== undefined ? prop.trade.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: prop.trade.asset.priceToBookRatio !== undefined ? prop.trade.asset.priceToBookRatio : undefined,
          evToRevenue: prop.trade.asset.evToRevenue !== undefined ? prop.trade.asset.evToRevenue : undefined,
          evToEbitda: prop.trade.asset.evToEbitda !== undefined ? prop.trade.asset.evToEbitda : undefined,
          beta: prop.trade.asset.beta !== undefined ? prop.trade.asset.beta : undefined,
          week52High: prop.trade.asset.week52High !== undefined ? prop.trade.asset.week52High : undefined,
          week52Low: prop.trade.asset.week52Low !== undefined ? prop.trade.asset.week52Low : undefined,
          day50MovingAverage: prop.trade.asset.day50MovingAverage !== undefined ? prop.trade.asset.day50MovingAverage : undefined,
          day200MovingAverage: prop.trade.asset.day200MovingAverage !== undefined ? prop.trade.asset.day200MovingAverage : undefined,
          sharesOutstanding: prop.trade.asset.sharesOutstanding !== undefined ? prop.trade.asset.sharesOutstanding : undefined,
          dividendDate: prop.trade.asset.dividendDate !== undefined ? prop.trade.asset.dividendDate : undefined,
          exDividendDate: prop.trade.asset.exDividendDate !== undefined ? prop.trade.asset.exDividendDate : undefined,
        },
      }
    } : undefined,
      },
    }
  } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyAction) {
        return response.data.updateManyAction;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyAction:', error);
      throw error;
    }
  },

  /**
   * Delete a single Action record.
   * @param props - Properties to update.
   * @returns The deleted Action or null.
   */
  async delete(props: ActionType): Promise<ActionType> {

    const client = createApolloClient();

      const DELETE_ONE_ACTION = gql`
      mutation deleteOneAction($where: ActionWhereUniqueInput!) {
        deleteOneAction(where: $where) {
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
              userId
              createdAt
              updatedAt
              trades {
                id
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
                assetId
                asset {
                  id
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
                assetId
                newsArticleId
                url
                news {
                  id
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            actions {
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
      const response = await client.mutate({ mutation: DELETE_ONE_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneAction) {
        return response.data.deleteOneAction;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneAction:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Action record by ID.
   * @param props - Properties to update.
   * @returns The retrieved Action or null.
   */
  async get(props: ActionType): Promise<ActionType | null> {

    const client = createApolloClient();

      const GET_ACTION = gql`
      query getAction($where: ActionWhereUniqueInput!) {
        getAction(where: $where) {
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
              userId
              createdAt
              updatedAt
              trades {
                id
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
                assetId
                asset {
                  id
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
                assetId
                newsArticleId
                url
                news {
                  id
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            actions {
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
      const response = await client.query({ query: GET_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getAction ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Action found') {
        return null;
      } else {
        console.error('Error in getAction:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Actions records.
   * @returns An array of Action records or null.
   */
  async getAll(): Promise<ActionType[] | null> {

    const client = createApolloClient();

      const GET_ALL_ACTION = gql`
      query getAllAction {
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
              userId
              createdAt
              updatedAt
              trades {
                id
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
                assetId
                asset {
                  id
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
                assetId
                newsArticleId
                url
                news {
                  id
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            actions {
              id
            }
          }
      }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_ACTION });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.actions ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Action found') {
        return null;
      } else {
        console.error('Error in getAction:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Action records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found Action records or null.
   */
  async findMany(props: ActionType): Promise<ActionType[] | null> {

    const client = createApolloClient();

      const FIND_MANY_ACTION = gql`
      query findManyAction($where: ActionWhereInput!) {
        actions(where: $where) {
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
              userId
              createdAt
              updatedAt
              trades {
                id
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
                assetId
                asset {
                  id
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
                assetId
                newsArticleId
                url
                news {
                  id
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            actions {
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
      const response = await client.query({ query: FIND_MANY_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Actions) {
        return response.data.actions;
      } else {
       return [] as ActionType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Action found') {
        return null;
      } else {
        console.error('Error in getAction:', error);
        throw error;
      }
    }
  }
};
