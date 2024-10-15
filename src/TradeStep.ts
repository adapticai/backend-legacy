

import { TradeStep as TradeStepType } from './generated/typegraphql-prisma/models/TradeStep';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the TradeStep model.
 */

export const TradeStep = {

  /**
   * Create a new TradeStep record.
   * @param props - Properties for the new record.
   * @returns The created TradeStep or null.
   */

  async create(props: TradeStepType): Promise<TradeStepType> {

  const client = createApolloClient();

  const CREATE_ONE_TRADESTEP = gql`
      mutation createOneTradeStep($data: TradeStepCreateInput!) {
        createOneTradeStep(data: $data) {
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
            userId
            portfolioId
            assetId
            action
            quantity
            price
            total
            timestamp
            createdAt
            updatedAt
            status
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
              trades {
                id
              }
              orders {
                id
                userId
                portfolioId
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
                portfolio {
                  id
                }
                asset {
                  id
                }
              }
              aiRecommendations {
                id
                userId
                portfolioId
                assetId
                action
                confidence
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
                asset {
                  id
                }
              }
              riskAllocations {
                id
                userId
                portfolioId
                assetType
                allocation
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              alerts {
                id
                userId
                portfolioId
                message
                type
                isRead
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              performanceMetrics {
                id
                userId
                portfolioId
                label
                value
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              tradingAccount {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
              }
              alpacaAccounts {
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
              }
            }
            portfolio {
              id
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
              holdings {
                id
                tradingAccountId
                assetId
                quantity
                averagePrice
                createdAt
                updatedAt
                tradingAccount {
                  id
                }
                asset {
                  id
                }
              }
              trades {
                id
              }
              orders {
                id
              }
              aiRecommendations {
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
            steps {
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
        action: props.trade.action !== undefined ? props.trade.action : undefined,
        quantity: props.trade.quantity !== undefined ? props.trade.quantity : undefined,
        price: props.trade.price !== undefined ? props.trade.price : undefined,
        total: props.trade.total !== undefined ? props.trade.total : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
    user: props.trade.user ? {
      connectOrCreate: {
        where: {
          id: props.trade.user.id !== undefined ? props.trade.user.id : undefined,
          email: props.trade.user.email !== undefined ? props.trade.user.email : undefined,
          name: props.trade.user.name !== undefined ? {
              equals: props.trade.user.name 
             } : undefined,
        },
        create: {
          name: props.trade.user.name !== undefined ? props.trade.user.name : undefined,
          email: props.trade.user.email !== undefined ? props.trade.user.email : undefined,
          emailVerified: props.trade.user.emailVerified !== undefined ? props.trade.user.emailVerified : undefined,
          image: props.trade.user.image !== undefined ? props.trade.user.image : undefined,
          role: props.trade.user.role !== undefined ? props.trade.user.role : undefined,
          bio: props.trade.user.bio !== undefined ? props.trade.user.bio : undefined,
          jobTitle: props.trade.user.jobTitle !== undefined ? props.trade.user.jobTitle : undefined,
          currentAccount: props.trade.user.currentAccount !== undefined ? props.trade.user.currentAccount : undefined,
          plan: props.trade.user.plan !== undefined ? props.trade.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: props.trade.portfolio ? {
      connectOrCreate: {
        where: {
          id: props.trade.portfolio.id !== undefined ? props.trade.portfolio.id : undefined,
          slug: props.trade.portfolio.slug !== undefined ? props.trade.portfolio.slug : undefined,
          name: props.trade.portfolio.name !== undefined ? {
              equals: props.trade.portfolio.name 
             } : undefined,
        },
        create: {
          name: props.trade.portfolio.name !== undefined ? props.trade.portfolio.name : undefined,
          slug: props.trade.portfolio.slug !== undefined ? props.trade.portfolio.slug : undefined,
          type: props.trade.portfolio.type !== undefined ? props.trade.portfolio.type : undefined,
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
      const response = await client.mutate({ mutation: CREATE_ONE_TRADESTEP, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneTradeStep) {
        return response.data.createOneTradeStep;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneTradeStep:', error);
      throw error;
    }
  },

  /**
   * Create multiple TradeStep records.
   * @param props - Array of TradeStep objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: TradeStepType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const CREATE_MANY_TRADESTEP = gql`
      mutation createManyTradeStep($data: [TradeStepCreateManyInput!]!) {
        createManyTradeStep(data: $data) {
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
      const response = await client.mutate({ mutation: CREATE_MANY_TRADESTEP, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyTradeStep) {
        return response.data.createManyTradeStep;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyTradeStep:', error);
      throw error;
    }
  },

  /**
   * Update a single TradeStep record.
   * @param props - Properties to update.
   * @returns The updated TradeStep or null.
   */
  async update(props: TradeStepType): Promise<TradeStepType> {

    const client = createApolloClient();

      const UPDATE_ONE_TRADESTEP = gql`
      mutation updateOneTradeStep($data: TradeStepUpdateInput!, $where: TradeStepWhereUniqueInput!) {
        updateOneTradeStep(data: $data, where: $where) {
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
            userId
            portfolioId
            assetId
            action
            quantity
            price
            total
            timestamp
            createdAt
            updatedAt
            status
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
              trades {
                id
              }
              orders {
                id
                userId
                portfolioId
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
                portfolio {
                  id
                }
                asset {
                  id
                }
              }
              aiRecommendations {
                id
                userId
                portfolioId
                assetId
                action
                confidence
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
                asset {
                  id
                }
              }
              riskAllocations {
                id
                userId
                portfolioId
                assetType
                allocation
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              alerts {
                id
                userId
                portfolioId
                message
                type
                isRead
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              performanceMetrics {
                id
                userId
                portfolioId
                label
                value
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              tradingAccount {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
              }
              alpacaAccounts {
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
              }
            }
            portfolio {
              id
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
              holdings {
                id
                tradingAccountId
                assetId
                quantity
                averagePrice
                createdAt
                updatedAt
                tradingAccount {
                  id
                }
                asset {
                  id
                }
              }
              trades {
                id
              }
              orders {
                id
              }
              aiRecommendations {
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
            steps {
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
        action: props.trade.action !== undefined ? {
            set: props.trade.action  
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
    user: props.trade.user ? {
      upsert: {
        where: {
          id: props.trade.user.id !== undefined ? {
              equals: props.trade.user.id 
             } : undefined,
          name: props.trade.user.name !== undefined ? {
              equals: props.trade.user.name 
             } : undefined,
          email: props.trade.user.email !== undefined ? {
              equals: props.trade.user.email 
             } : undefined,
        },
        update: {
          id: props.trade.user.id !== undefined ? {
              set: props.trade.user.id  
             } : undefined,
          name: props.trade.user.name !== undefined ? {
              set: props.trade.user.name  
             } : undefined,
          email: props.trade.user.email !== undefined ? {
              set: props.trade.user.email  
             } : undefined,
          emailVerified: props.trade.user.emailVerified !== undefined ? {
              set: props.trade.user.emailVerified  
             } : undefined,
          image: props.trade.user.image !== undefined ? {
              set: props.trade.user.image  
             } : undefined,
          role: props.trade.user.role !== undefined ? {
              set: props.trade.user.role  
             } : undefined,
          bio: props.trade.user.bio !== undefined ? {
              set: props.trade.user.bio  
             } : undefined,
          jobTitle: props.trade.user.jobTitle !== undefined ? {
              set: props.trade.user.jobTitle  
             } : undefined,
          currentAccount: props.trade.user.currentAccount !== undefined ? {
              set: props.trade.user.currentAccount  
             } : undefined,
          plan: props.trade.user.plan !== undefined ? {
              set: props.trade.user.plan  
             } : undefined,
        },
        create: {
          name: props.trade.user.name !== undefined ? props.trade.user.name : undefined,
          email: props.trade.user.email !== undefined ? props.trade.user.email : undefined,
          emailVerified: props.trade.user.emailVerified !== undefined ? props.trade.user.emailVerified : undefined,
          image: props.trade.user.image !== undefined ? props.trade.user.image : undefined,
          role: props.trade.user.role !== undefined ? props.trade.user.role : undefined,
          bio: props.trade.user.bio !== undefined ? props.trade.user.bio : undefined,
          jobTitle: props.trade.user.jobTitle !== undefined ? props.trade.user.jobTitle : undefined,
          currentAccount: props.trade.user.currentAccount !== undefined ? props.trade.user.currentAccount : undefined,
          plan: props.trade.user.plan !== undefined ? props.trade.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: props.trade.portfolio ? {
      upsert: {
        where: {
          id: props.trade.portfolio.id !== undefined ? {
              equals: props.trade.portfolio.id 
             } : undefined,
          name: props.trade.portfolio.name !== undefined ? {
              equals: props.trade.portfolio.name 
             } : undefined,
          slug: props.trade.portfolio.slug !== undefined ? {
              equals: props.trade.portfolio.slug 
             } : undefined,
        },
        update: {
          id: props.trade.portfolio.id !== undefined ? {
              set: props.trade.portfolio.id  
             } : undefined,
          name: props.trade.portfolio.name !== undefined ? {
              set: props.trade.portfolio.name  
             } : undefined,
          slug: props.trade.portfolio.slug !== undefined ? {
              set: props.trade.portfolio.slug  
             } : undefined,
          type: props.trade.portfolio.type !== undefined ? {
              set: props.trade.portfolio.type  
             } : undefined,
        },
        create: {
          name: props.trade.portfolio.name !== undefined ? props.trade.portfolio.name : undefined,
          slug: props.trade.portfolio.slug !== undefined ? props.trade.portfolio.slug : undefined,
          type: props.trade.portfolio.type !== undefined ? props.trade.portfolio.type : undefined,
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
        action: props.trade.action !== undefined ? props.trade.action : undefined,
        quantity: props.trade.quantity !== undefined ? props.trade.quantity : undefined,
        price: props.trade.price !== undefined ? props.trade.price : undefined,
        total: props.trade.total !== undefined ? props.trade.total : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
    user: props.trade.user ? {
      connectOrCreate: {
        where: {
          id: props.trade.user.id !== undefined ? props.trade.user.id : undefined,
          email: props.trade.user.email !== undefined ? props.trade.user.email : undefined,
          name: props.trade.user.name !== undefined ? {
              equals: props.trade.user.name 
             } : undefined,
        },
        create: {
          name: props.trade.user.name !== undefined ? props.trade.user.name : undefined,
          email: props.trade.user.email !== undefined ? props.trade.user.email : undefined,
          emailVerified: props.trade.user.emailVerified !== undefined ? props.trade.user.emailVerified : undefined,
          image: props.trade.user.image !== undefined ? props.trade.user.image : undefined,
          role: props.trade.user.role !== undefined ? props.trade.user.role : undefined,
          bio: props.trade.user.bio !== undefined ? props.trade.user.bio : undefined,
          jobTitle: props.trade.user.jobTitle !== undefined ? props.trade.user.jobTitle : undefined,
          currentAccount: props.trade.user.currentAccount !== undefined ? props.trade.user.currentAccount : undefined,
          plan: props.trade.user.plan !== undefined ? props.trade.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: props.trade.portfolio ? {
      connectOrCreate: {
        where: {
          id: props.trade.portfolio.id !== undefined ? props.trade.portfolio.id : undefined,
          slug: props.trade.portfolio.slug !== undefined ? props.trade.portfolio.slug : undefined,
          name: props.trade.portfolio.name !== undefined ? {
              equals: props.trade.portfolio.name 
             } : undefined,
        },
        create: {
          name: props.trade.portfolio.name !== undefined ? props.trade.portfolio.name : undefined,
          slug: props.trade.portfolio.slug !== undefined ? props.trade.portfolio.slug : undefined,
          type: props.trade.portfolio.type !== undefined ? props.trade.portfolio.type : undefined,
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
      const response = await client.mutate({ mutation: UPDATE_ONE_TRADESTEP, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneTradeStep) {
        return response.data.updateOneTradeStep;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneTradeStep:', error);
      throw error;
    }
  },

  /**
   * Update multiple TradeStep records.
   * @param props - Array of TradeStep objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: TradeStepType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const UPDATE_MANY_TRADESTEP = gql`
      mutation updateManyTradeStep($data: [TradeStepCreateManyInput!]!) {
        updateManyTradeStep(data: $data) {
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
        action: prop.trade.action !== undefined ? {
            set: prop.trade.action  
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
    user: prop.trade.user ? {
      upsert: {
        where: {
          id: prop.trade.user.id !== undefined ? {
              equals: prop.trade.user.id 
             } : undefined,
          name: prop.trade.user.name !== undefined ? {
              equals: prop.trade.user.name 
             } : undefined,
          email: prop.trade.user.email !== undefined ? {
              equals: prop.trade.user.email 
             } : undefined,
        },
        update: {
          id: prop.trade.user.id !== undefined ? {
              set: prop.trade.user.id  
             } : undefined,
          name: prop.trade.user.name !== undefined ? {
              set: prop.trade.user.name  
             } : undefined,
          email: prop.trade.user.email !== undefined ? {
              set: prop.trade.user.email  
             } : undefined,
          emailVerified: prop.trade.user.emailVerified !== undefined ? {
              set: prop.trade.user.emailVerified  
             } : undefined,
          image: prop.trade.user.image !== undefined ? {
              set: prop.trade.user.image  
             } : undefined,
          role: prop.trade.user.role !== undefined ? {
              set: prop.trade.user.role  
             } : undefined,
          bio: prop.trade.user.bio !== undefined ? {
              set: prop.trade.user.bio  
             } : undefined,
          jobTitle: prop.trade.user.jobTitle !== undefined ? {
              set: prop.trade.user.jobTitle  
             } : undefined,
          currentAccount: prop.trade.user.currentAccount !== undefined ? {
              set: prop.trade.user.currentAccount  
             } : undefined,
          plan: prop.trade.user.plan !== undefined ? {
              set: prop.trade.user.plan  
             } : undefined,
        },
        create: {
          name: prop.trade.user.name !== undefined ? prop.trade.user.name : undefined,
          email: prop.trade.user.email !== undefined ? prop.trade.user.email : undefined,
          emailVerified: prop.trade.user.emailVerified !== undefined ? prop.trade.user.emailVerified : undefined,
          image: prop.trade.user.image !== undefined ? prop.trade.user.image : undefined,
          role: prop.trade.user.role !== undefined ? prop.trade.user.role : undefined,
          bio: prop.trade.user.bio !== undefined ? prop.trade.user.bio : undefined,
          jobTitle: prop.trade.user.jobTitle !== undefined ? prop.trade.user.jobTitle : undefined,
          currentAccount: prop.trade.user.currentAccount !== undefined ? prop.trade.user.currentAccount : undefined,
          plan: prop.trade.user.plan !== undefined ? prop.trade.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: prop.trade.portfolio ? {
      upsert: {
        where: {
          id: prop.trade.portfolio.id !== undefined ? {
              equals: prop.trade.portfolio.id 
             } : undefined,
          name: prop.trade.portfolio.name !== undefined ? {
              equals: prop.trade.portfolio.name 
             } : undefined,
          slug: prop.trade.portfolio.slug !== undefined ? {
              equals: prop.trade.portfolio.slug 
             } : undefined,
        },
        update: {
          id: prop.trade.portfolio.id !== undefined ? {
              set: prop.trade.portfolio.id  
             } : undefined,
          name: prop.trade.portfolio.name !== undefined ? {
              set: prop.trade.portfolio.name  
             } : undefined,
          slug: prop.trade.portfolio.slug !== undefined ? {
              set: prop.trade.portfolio.slug  
             } : undefined,
          type: prop.trade.portfolio.type !== undefined ? {
              set: prop.trade.portfolio.type  
             } : undefined,
        },
        create: {
          name: prop.trade.portfolio.name !== undefined ? prop.trade.portfolio.name : undefined,
          slug: prop.trade.portfolio.slug !== undefined ? prop.trade.portfolio.slug : undefined,
          type: prop.trade.portfolio.type !== undefined ? prop.trade.portfolio.type : undefined,
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
        action: prop.trade.action !== undefined ? prop.trade.action : undefined,
        quantity: prop.trade.quantity !== undefined ? prop.trade.quantity : undefined,
        price: prop.trade.price !== undefined ? prop.trade.price : undefined,
        total: prop.trade.total !== undefined ? prop.trade.total : undefined,
        timestamp: prop.trade.timestamp !== undefined ? prop.trade.timestamp : undefined,
        status: prop.trade.status !== undefined ? prop.trade.status : undefined,
    user: prop.trade.user ? {
      connectOrCreate: {
        where: {
          id: prop.trade.user.id !== undefined ? prop.trade.user.id : undefined,
          email: prop.trade.user.email !== undefined ? prop.trade.user.email : undefined,
          name: prop.trade.user.name !== undefined ? {
              equals: prop.trade.user.name 
             } : undefined,
        },
        create: {
          name: prop.trade.user.name !== undefined ? prop.trade.user.name : undefined,
          email: prop.trade.user.email !== undefined ? prop.trade.user.email : undefined,
          emailVerified: prop.trade.user.emailVerified !== undefined ? prop.trade.user.emailVerified : undefined,
          image: prop.trade.user.image !== undefined ? prop.trade.user.image : undefined,
          role: prop.trade.user.role !== undefined ? prop.trade.user.role : undefined,
          bio: prop.trade.user.bio !== undefined ? prop.trade.user.bio : undefined,
          jobTitle: prop.trade.user.jobTitle !== undefined ? prop.trade.user.jobTitle : undefined,
          currentAccount: prop.trade.user.currentAccount !== undefined ? prop.trade.user.currentAccount : undefined,
          plan: prop.trade.user.plan !== undefined ? prop.trade.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: prop.trade.portfolio ? {
      connectOrCreate: {
        where: {
          id: prop.trade.portfolio.id !== undefined ? prop.trade.portfolio.id : undefined,
          slug: prop.trade.portfolio.slug !== undefined ? prop.trade.portfolio.slug : undefined,
          name: prop.trade.portfolio.name !== undefined ? {
              equals: prop.trade.portfolio.name 
             } : undefined,
        },
        create: {
          name: prop.trade.portfolio.name !== undefined ? prop.trade.portfolio.name : undefined,
          slug: prop.trade.portfolio.slug !== undefined ? prop.trade.portfolio.slug : undefined,
          type: prop.trade.portfolio.type !== undefined ? prop.trade.portfolio.type : undefined,
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
      const response = await client.mutate({ mutation: UPDATE_MANY_TRADESTEP, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyTradeStep) {
        return response.data.updateManyTradeStep;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyTradeStep:', error);
      throw error;
    }
  },

  /**
   * Delete a single TradeStep record.
   * @param props - Properties to update.
   * @returns The deleted TradeStep or null.
   */
  async delete(props: TradeStepType): Promise<TradeStepType> {

    const client = createApolloClient();

      const DELETE_ONE_TRADESTEP = gql`
      mutation deleteOneTradeStep($where: TradeStepWhereUniqueInput!) {
        deleteOneTradeStep(where: $where) {
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
            userId
            portfolioId
            assetId
            action
            quantity
            price
            total
            timestamp
            createdAt
            updatedAt
            status
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
              trades {
                id
              }
              orders {
                id
                userId
                portfolioId
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
                portfolio {
                  id
                }
                asset {
                  id
                }
              }
              aiRecommendations {
                id
                userId
                portfolioId
                assetId
                action
                confidence
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
                asset {
                  id
                }
              }
              riskAllocations {
                id
                userId
                portfolioId
                assetType
                allocation
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              alerts {
                id
                userId
                portfolioId
                message
                type
                isRead
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              performanceMetrics {
                id
                userId
                portfolioId
                label
                value
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              tradingAccount {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
              }
              alpacaAccounts {
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
              }
            }
            portfolio {
              id
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
              holdings {
                id
                tradingAccountId
                assetId
                quantity
                averagePrice
                createdAt
                updatedAt
                tradingAccount {
                  id
                }
                asset {
                  id
                }
              }
              trades {
                id
              }
              orders {
                id
              }
              aiRecommendations {
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
            steps {
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
      const response = await client.mutate({ mutation: DELETE_ONE_TRADESTEP, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneTradeStep) {
        return response.data.deleteOneTradeStep;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneTradeStep:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single TradeStep record by ID.
   * @param props - Properties to update.
   * @returns The retrieved TradeStep or null.
   */
  async get(props: TradeStepType): Promise<TradeStepType | null> {

    const client = createApolloClient();

      const GET_TRADESTEP = gql`
      query getTradeStep($where: TradeStepWhereUniqueInput!) {
        getTradeStep(where: $where) {
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
            userId
            portfolioId
            assetId
            action
            quantity
            price
            total
            timestamp
            createdAt
            updatedAt
            status
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
              trades {
                id
              }
              orders {
                id
                userId
                portfolioId
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
                portfolio {
                  id
                }
                asset {
                  id
                }
              }
              aiRecommendations {
                id
                userId
                portfolioId
                assetId
                action
                confidence
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
                asset {
                  id
                }
              }
              riskAllocations {
                id
                userId
                portfolioId
                assetType
                allocation
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              alerts {
                id
                userId
                portfolioId
                message
                type
                isRead
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              performanceMetrics {
                id
                userId
                portfolioId
                label
                value
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              tradingAccount {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
              }
              alpacaAccounts {
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
              }
            }
            portfolio {
              id
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
              holdings {
                id
                tradingAccountId
                assetId
                quantity
                averagePrice
                createdAt
                updatedAt
                tradingAccount {
                  id
                }
                asset {
                  id
                }
              }
              trades {
                id
              }
              orders {
                id
              }
              aiRecommendations {
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
            steps {
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
      const response = await client.query({ query: GET_TRADESTEP, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getTradeStep ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No TradeStep found') {
        return null;
      } else {
        console.error('Error in getTradeStep:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all TradeSteps records.
   * @returns An array of TradeStep records or null.
   */
  async getAll(): Promise<TradeStepType[] | null> {

    const client = createApolloClient();

      const GET_ALL_TRADESTEP = gql`
      query getAllTradeStep {
        tradeSteps {
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
            userId
            portfolioId
            assetId
            action
            quantity
            price
            total
            timestamp
            createdAt
            updatedAt
            status
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
              trades {
                id
              }
              orders {
                id
                userId
                portfolioId
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
                portfolio {
                  id
                }
                asset {
                  id
                }
              }
              aiRecommendations {
                id
                userId
                portfolioId
                assetId
                action
                confidence
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
                asset {
                  id
                }
              }
              riskAllocations {
                id
                userId
                portfolioId
                assetType
                allocation
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              alerts {
                id
                userId
                portfolioId
                message
                type
                isRead
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              performanceMetrics {
                id
                userId
                portfolioId
                label
                value
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              tradingAccount {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
              }
              alpacaAccounts {
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
              }
            }
            portfolio {
              id
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
              holdings {
                id
                tradingAccountId
                assetId
                quantity
                averagePrice
                createdAt
                updatedAt
                tradingAccount {
                  id
                }
                asset {
                  id
                }
              }
              trades {
                id
              }
              orders {
                id
              }
              aiRecommendations {
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
            steps {
              id
            }
          }
      }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_TRADESTEP });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.tradeSteps ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No TradeStep found') {
        return null;
      } else {
        console.error('Error in getTradeStep:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple TradeStep records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found TradeStep records or null.
   */
  async findMany(props: TradeStepType): Promise<TradeStepType[] | null> {

    const client = createApolloClient();

      const FIND_MANY_TRADESTEP = gql`
      query findManyTradeStep($where: TradeStepWhereInput!) {
        tradeSteps(where: $where) {
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
            userId
            portfolioId
            assetId
            action
            quantity
            price
            total
            timestamp
            createdAt
            updatedAt
            status
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
              trades {
                id
              }
              orders {
                id
                userId
                portfolioId
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
                portfolio {
                  id
                }
                asset {
                  id
                }
              }
              aiRecommendations {
                id
                userId
                portfolioId
                assetId
                action
                confidence
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
                asset {
                  id
                }
              }
              riskAllocations {
                id
                userId
                portfolioId
                assetType
                allocation
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              alerts {
                id
                userId
                portfolioId
                message
                type
                isRead
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              performanceMetrics {
                id
                userId
                portfolioId
                label
                value
                createdAt
                updatedAt
                user {
                  id
                }
                portfolio {
                  id
                }
              }
              tradingAccount {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
              }
              alpacaAccounts {
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
              }
            }
            portfolio {
              id
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
              holdings {
                id
                tradingAccountId
                assetId
                quantity
                averagePrice
                createdAt
                updatedAt
                tradingAccount {
                  id
                }
                asset {
                  id
                }
              }
              trades {
                id
              }
              orders {
                id
              }
              aiRecommendations {
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
            steps {
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
      const response = await client.query({ query: FIND_MANY_TRADESTEP, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.TradeSteps) {
        return response.data.tradeSteps;
      } else {
       return [] as TradeStepType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No TradeStep found') {
        return null;
      } else {
        console.error('Error in getTradeStep:', error);
        throw error;
      }
    }
  }
};
