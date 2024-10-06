

import { Holding as HoldingType } from './generated/typegraphql-prisma/models/Holding';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Holding model.
 */

export const Holding = {
  /**
   * Create a new Holding record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created Holding or null.
   */
  async create(props: HoldingType, client: ApolloClient<NormalizedCacheObject>): Promise<HoldingType> {
    const CREATE_ONE_HOLDING = gql`
      mutation createOneHolding($data: HoldingCreateInput!) {
        createOneHolding(data: $data) {
          id
          tradingAccountId
          assetId
          quantity
          averagePrice
          createdAt
          updatedAt
          tradingAccount {
            id
            name
            slug
            type
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
              currentMode
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
                }
                portfolio {
                  id
                }
                asset {
                  id
                }
                steps {
                  id
                }
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
              }
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
              key
              value
              description
              portfolioId
              portfolio {
                id
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
            marketCapitalization {
            }
            ebitda {
              id
            }
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
            revenueTTM {
              id
            }
            grossProfitTTM {
              id
            }
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
            sharesOutstanding {
              id
            }
            dividendDate
            exDividendDate
            createdAt
            updatedAt
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
        }
      }
   `;

    const variables = {
      data: {
          quantity: props.quantity !== undefined ? props.quantity : undefined,
  averagePrice: props.averagePrice !== undefined ? props.averagePrice : undefined,
  tradingAccount: props.tradingAccount ? {
    connectOrCreate: {
      where: {
        id: props.tradingAccount.id !== undefined ? props.tradingAccount.id : undefined,
        slug: props.tradingAccount.slug !== undefined ? props.tradingAccount.slug : undefined,
        name: props.tradingAccount.name !== undefined ? {
            equals: props.tradingAccount.name 
           } : undefined,
      },
      create: {
        name: props.tradingAccount.name !== undefined ? props.tradingAccount.name : undefined,
        slug: props.tradingAccount.slug !== undefined ? props.tradingAccount.slug : undefined,
        type: props.tradingAccount.type !== undefined ? props.tradingAccount.type : undefined,
    user: props.tradingAccount.user ? {
      connectOrCreate: {
        where: {
          id: props.tradingAccount.user.id !== undefined ? props.tradingAccount.user.id : undefined,
          email: props.tradingAccount.user.email !== undefined ? props.tradingAccount.user.email : undefined,
          name: props.tradingAccount.user.name !== undefined ? {
              equals: props.tradingAccount.user.name 
             } : undefined,
        },
        create: {
          name: props.tradingAccount.user.name !== undefined ? props.tradingAccount.user.name : undefined,
          email: props.tradingAccount.user.email !== undefined ? props.tradingAccount.user.email : undefined,
          emailVerified: props.tradingAccount.user.emailVerified !== undefined ? props.tradingAccount.user.emailVerified : undefined,
          image: props.tradingAccount.user.image !== undefined ? props.tradingAccount.user.image : undefined,
          role: props.tradingAccount.user.role !== undefined ? props.tradingAccount.user.role : undefined,
          bio: props.tradingAccount.user.bio !== undefined ? props.tradingAccount.user.bio : undefined,
          jobTitle: props.tradingAccount.user.jobTitle !== undefined ? props.tradingAccount.user.jobTitle : undefined,
          currentMode: props.tradingAccount.user.currentMode !== undefined ? props.tradingAccount.user.currentMode : undefined,
          plan: props.tradingAccount.user.plan !== undefined ? props.tradingAccount.user.plan : undefined,
        },
      }
    } : undefined,
    trades: props.tradingAccount.trades ? {
      connectOrCreate: props.tradingAccount.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    orders: props.tradingAccount.orders ? {
      connectOrCreate: props.tradingAccount.orders.map((item: any) => ({
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
    aiRecommendations: props.tradingAccount.aiRecommendations ? {
      connectOrCreate: props.tradingAccount.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    riskAllocations: props.tradingAccount.riskAllocations ? {
      connectOrCreate: props.tradingAccount.riskAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          assetType: item.assetType !== undefined ? item.assetType : undefined,
          allocation: item.allocation !== undefined ? item.allocation : undefined,
        },
      }))
    } : undefined,
    alerts: props.tradingAccount.alerts ? {
      connectOrCreate: props.tradingAccount.alerts.map((item: any) => ({
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
    performanceMetrics: props.tradingAccount.performanceMetrics ? {
      connectOrCreate: props.tradingAccount.performanceMetrics.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
    environmentVariables: props.tradingAccount.environmentVariables ? {
      connectOrCreate: props.tradingAccount.environmentVariables.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          key: item.key !== undefined ? {
              equals: item.key 
             } : undefined,
        },
        create: {
          key: item.key !== undefined ? item.key : undefined,
          value: item.value !== undefined ? item.value : undefined,
          description: item.description !== undefined ? item.description : undefined,
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
        dividendDate: props.asset.dividendDate !== undefined ? props.asset.dividendDate : undefined,
        exDividendDate: props.asset.exDividendDate !== undefined ? props.asset.exDividendDate : undefined,
    trades: props.asset.trades ? {
      connectOrCreate: props.asset.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
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
    aiRecommendations: props.asset.aiRecommendations ? {
      connectOrCreate: props.asset.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
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

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_ONE_HOLDING, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneHolding) {
        return response.data.createOneHolding;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneHolding:', error);
      throw error;
    }
  },

  /**
   * Create multiple Holding records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: HoldingType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_HOLDING = gql`
      mutation createManyHolding($data: [HoldingCreateManyInput!]!) {
        createManyHolding(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  tradingAccountId: prop.tradingAccountId !== undefined ? prop.tradingAccountId : undefined,
  assetId: prop.assetId !== undefined ? prop.assetId : undefined,
  quantity: prop.quantity !== undefined ? prop.quantity : undefined,
  averagePrice: prop.averagePrice !== undefined ? prop.averagePrice : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_HOLDING, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyHolding) {
        return response.data.createManyHolding;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyHolding:', error);
      throw error;
    }
  },

  /**
   * Update a single Holding record.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated Holding or null.
   */
  async update(props: HoldingType, client: ApolloClient<NormalizedCacheObject>): Promise<HoldingType> {
    const UPDATE_ONE_HOLDING = gql`
      mutation updateOneHolding($data: HoldingUpdateInput!, $where: HoldingWhereUniqueInput!) {
        updateOneHolding(data: $data, where: $where) {
          id
          tradingAccountId
          assetId
          quantity
          averagePrice
          createdAt
          updatedAt
          tradingAccount {
            id
            name
            slug
            type
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
              currentMode
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
                }
                portfolio {
                  id
                }
                asset {
                  id
                }
                steps {
                  id
                }
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
              }
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
              key
              value
              description
              portfolioId
              portfolio {
                id
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
            marketCapitalization {
            }
            ebitda {
              id
            }
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
            revenueTTM {
              id
            }
            grossProfitTTM {
              id
            }
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
            sharesOutstanding {
              id
            }
            dividendDate
            exDividendDate
            createdAt
            updatedAt
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
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
      },
      data: {
  tradingAccount: props.tradingAccount ? {
    upsert: {
      where: {
        id: props.tradingAccount.id !== undefined ? {
            equals: props.tradingAccount.id 
           } : undefined,
        name: props.tradingAccount.name !== undefined ? {
            equals: props.tradingAccount.name 
           } : undefined,
        slug: props.tradingAccount.slug !== undefined ? {
            equals: props.tradingAccount.slug 
           } : undefined,
      },
      update: {
        name: props.tradingAccount.name !== undefined ? {
            set: props.tradingAccount.name  
           } : undefined,
        slug: props.tradingAccount.slug !== undefined ? {
            set: props.tradingAccount.slug  
           } : undefined,
        type: props.tradingAccount.type !== undefined ? {
            set: props.tradingAccount.type  
           } : undefined,
    user: props.tradingAccount.user ? {
      upsert: {
        where: {
          id: props.tradingAccount.user.id !== undefined ? {
              equals: props.tradingAccount.user.id 
             } : undefined,
          name: props.tradingAccount.user.name !== undefined ? {
              equals: props.tradingAccount.user.name 
             } : undefined,
          email: props.tradingAccount.user.email !== undefined ? {
              equals: props.tradingAccount.user.email 
             } : undefined,
        },
        update: {
          name: props.tradingAccount.user.name !== undefined ? {
              set: props.tradingAccount.user.name  
             } : undefined,
          email: props.tradingAccount.user.email !== undefined ? {
              set: props.tradingAccount.user.email  
             } : undefined,
          emailVerified: props.tradingAccount.user.emailVerified !== undefined ? {
              set: props.tradingAccount.user.emailVerified  
             } : undefined,
          image: props.tradingAccount.user.image !== undefined ? {
              set: props.tradingAccount.user.image  
             } : undefined,
          role: props.tradingAccount.user.role !== undefined ? {
              set: props.tradingAccount.user.role  
             } : undefined,
          bio: props.tradingAccount.user.bio !== undefined ? {
              set: props.tradingAccount.user.bio  
             } : undefined,
          jobTitle: props.tradingAccount.user.jobTitle !== undefined ? {
              set: props.tradingAccount.user.jobTitle  
             } : undefined,
          currentMode: props.tradingAccount.user.currentMode !== undefined ? {
              set: props.tradingAccount.user.currentMode  
             } : undefined,
          plan: props.tradingAccount.user.plan !== undefined ? {
              set: props.tradingAccount.user.plan  
             } : undefined,
        },
        create: {
          name: props.tradingAccount.user.name !== undefined ? props.tradingAccount.user.name : undefined,
          email: props.tradingAccount.user.email !== undefined ? props.tradingAccount.user.email : undefined,
          emailVerified: props.tradingAccount.user.emailVerified !== undefined ? props.tradingAccount.user.emailVerified : undefined,
          image: props.tradingAccount.user.image !== undefined ? props.tradingAccount.user.image : undefined,
          role: props.tradingAccount.user.role !== undefined ? props.tradingAccount.user.role : undefined,
          bio: props.tradingAccount.user.bio !== undefined ? props.tradingAccount.user.bio : undefined,
          jobTitle: props.tradingAccount.user.jobTitle !== undefined ? props.tradingAccount.user.jobTitle : undefined,
          currentMode: props.tradingAccount.user.currentMode !== undefined ? props.tradingAccount.user.currentMode : undefined,
          plan: props.tradingAccount.user.plan !== undefined ? props.tradingAccount.user.plan : undefined,
        },
      }
    } : undefined,
    trades: props.tradingAccount.trades ? {
      upsert: props.tradingAccount.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          action: item.action !== undefined ? {
              set: item.action  
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
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    orders: props.tradingAccount.orders ? {
      upsert: props.tradingAccount.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
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
    aiRecommendations: props.tradingAccount.aiRecommendations ? {
      upsert: props.tradingAccount.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          action: item.action !== undefined ? {
              set: item.action  
             } : undefined,
          confidence: item.confidence !== undefined ? {
              set: item.confidence  
             } : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    riskAllocations: props.tradingAccount.riskAllocations ? {
      upsert: props.tradingAccount.riskAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          assetType: item.assetType !== undefined ? {
              set: item.assetType  
             } : undefined,
          allocation: item.allocation !== undefined ? {
              set: item.allocation  
             } : undefined,
        },
        create: {
          assetType: item.assetType !== undefined ? item.assetType : undefined,
          allocation: item.allocation !== undefined ? item.allocation : undefined,
        },
      }))
    } : undefined,
    alerts: props.tradingAccount.alerts ? {
      upsert: props.tradingAccount.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
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
    performanceMetrics: props.tradingAccount.performanceMetrics ? {
      upsert: props.tradingAccount.performanceMetrics.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          label: item.label !== undefined ? {
              set: item.label  
             } : undefined,
          value: item.value !== undefined ? {
              set: item.value  
             } : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
    environmentVariables: props.tradingAccount.environmentVariables ? {
      upsert: props.tradingAccount.environmentVariables.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          key: item.key !== undefined ? {
              equals: item.key 
             } : undefined,
        },
        update: {
          key: item.key !== undefined ? {
              set: item.key  
             } : undefined,
          value: item.value !== undefined ? {
              set: item.value  
             } : undefined,
          description: item.description !== undefined ? {
              set: item.description  
             } : undefined,
        },
        create: {
          key: item.key !== undefined ? item.key : undefined,
          value: item.value !== undefined ? item.value : undefined,
          description: item.description !== undefined ? item.description : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: props.tradingAccount.name !== undefined ? props.tradingAccount.name : undefined,
        slug: props.tradingAccount.slug !== undefined ? props.tradingAccount.slug : undefined,
        type: props.tradingAccount.type !== undefined ? props.tradingAccount.type : undefined,
    user: props.tradingAccount.user ? {
      connectOrCreate: {
        where: {
          id: props.tradingAccount.user.id !== undefined ? props.tradingAccount.user.id : undefined,
          email: props.tradingAccount.user.email !== undefined ? props.tradingAccount.user.email : undefined,
          name: props.tradingAccount.user.name !== undefined ? {
              equals: props.tradingAccount.user.name 
             } : undefined,
        },
        create: {
          name: props.tradingAccount.user.name !== undefined ? props.tradingAccount.user.name : undefined,
          email: props.tradingAccount.user.email !== undefined ? props.tradingAccount.user.email : undefined,
          emailVerified: props.tradingAccount.user.emailVerified !== undefined ? props.tradingAccount.user.emailVerified : undefined,
          image: props.tradingAccount.user.image !== undefined ? props.tradingAccount.user.image : undefined,
          role: props.tradingAccount.user.role !== undefined ? props.tradingAccount.user.role : undefined,
          bio: props.tradingAccount.user.bio !== undefined ? props.tradingAccount.user.bio : undefined,
          jobTitle: props.tradingAccount.user.jobTitle !== undefined ? props.tradingAccount.user.jobTitle : undefined,
          currentMode: props.tradingAccount.user.currentMode !== undefined ? props.tradingAccount.user.currentMode : undefined,
          plan: props.tradingAccount.user.plan !== undefined ? props.tradingAccount.user.plan : undefined,
        },
      }
    } : undefined,
    trades: props.tradingAccount.trades ? {
      connectOrCreate: props.tradingAccount.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    orders: props.tradingAccount.orders ? {
      connectOrCreate: props.tradingAccount.orders.map((item: any) => ({
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
    aiRecommendations: props.tradingAccount.aiRecommendations ? {
      connectOrCreate: props.tradingAccount.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    riskAllocations: props.tradingAccount.riskAllocations ? {
      connectOrCreate: props.tradingAccount.riskAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          assetType: item.assetType !== undefined ? item.assetType : undefined,
          allocation: item.allocation !== undefined ? item.allocation : undefined,
        },
      }))
    } : undefined,
    alerts: props.tradingAccount.alerts ? {
      connectOrCreate: props.tradingAccount.alerts.map((item: any) => ({
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
    performanceMetrics: props.tradingAccount.performanceMetrics ? {
      connectOrCreate: props.tradingAccount.performanceMetrics.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
    environmentVariables: props.tradingAccount.environmentVariables ? {
      connectOrCreate: props.tradingAccount.environmentVariables.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          key: item.key !== undefined ? {
              equals: item.key 
             } : undefined,
        },
        create: {
          key: item.key !== undefined ? item.key : undefined,
          value: item.value !== undefined ? item.value : undefined,
          description: item.description !== undefined ? item.description : undefined,
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
          action: item.action !== undefined ? {
              set: item.action  
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
          action: item.action !== undefined ? item.action : undefined,
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
    aiRecommendations: props.asset.aiRecommendations ? {
      upsert: props.asset.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          action: item.action !== undefined ? {
              set: item.action  
             } : undefined,
          confidence: item.confidence !== undefined ? {
              set: item.confidence  
             } : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
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
        dividendDate: props.asset.dividendDate !== undefined ? props.asset.dividendDate : undefined,
        exDividendDate: props.asset.exDividendDate !== undefined ? props.asset.exDividendDate : undefined,
    trades: props.asset.trades ? {
      connectOrCreate: props.asset.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
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
    aiRecommendations: props.asset.aiRecommendations ? {
      connectOrCreate: props.asset.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
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
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_HOLDING, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneHolding) {
        return response.data.updateOneHolding;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneHolding:', error);
      throw error;
    }
  },

  /**
   * Delete a single Holding record.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The deleted Holding or null.
   */
  async delete(props: HoldingType, client: ApolloClient<NormalizedCacheObject>): Promise<HoldingType> {
    const DELETE_ONE_HOLDING = gql`
      mutation deleteOneHolding($where: HoldingWhereUniqueInput!) {
        deleteOneHolding(where: $where) {
          id
          tradingAccountId
          assetId
          quantity
          averagePrice
          createdAt
          updatedAt
          tradingAccount {
            id
            name
            slug
            type
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
              currentMode
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
                }
                portfolio {
                  id
                }
                asset {
                  id
                }
                steps {
                  id
                }
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
              }
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
              key
              value
              description
              portfolioId
              portfolio {
                id
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
            marketCapitalization {
            }
            ebitda {
              id
            }
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
            revenueTTM {
              id
            }
            grossProfitTTM {
              id
            }
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
            sharesOutstanding {
              id
            }
            dividendDate
            exDividendDate
            createdAt
            updatedAt
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
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_HOLDING, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneHolding) {
        return response.data.deleteOneHolding;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneHolding:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Holding record by ID.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The retrieved Holding or null.
   */
  async get(props: HoldingType, client: ApolloClient<NormalizedCacheObject>): Promise<HoldingType> {
    const GET_HOLDING = gql`
      query getHolding($where: HoldingWhereInput!) {
        getHolding(where: $where) {
          id
          tradingAccountId
          assetId
          quantity
          averagePrice
          createdAt
          updatedAt
          tradingAccount {
            id
            name
            slug
            type
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
              currentMode
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
                }
                portfolio {
                  id
                }
                asset {
                  id
                }
                steps {
                  id
                }
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
              }
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
              key
              value
              description
              portfolioId
              portfolio {
                id
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
            marketCapitalization {
            }
            ebitda {
              id
            }
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
            revenueTTM {
              id
            }
            grossProfitTTM {
              id
            }
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
            sharesOutstanding {
              id
            }
            dividendDate
            exDividendDate
            createdAt
            updatedAt
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
        }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? {
            equals: props.id 
           } : undefined,
      },
};
    try {
      const response = await client.query({ query: GET_HOLDING, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getHolding ?? null;
    } catch (error) {
      console.error('Error in getHolding:', error);
      throw error;
    }
  },

  /**
   * Retrieve all Holdings records.
   * @param client - Apollo Client instance.
   * @returns An array of Holding records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<HoldingType[] | null> {
    const GET_ALL_HOLDING = gql`
      query getAllHolding {
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
            name
            slug
            type
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
              currentMode
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
                }
                portfolio {
                  id
                }
                asset {
                  id
                }
                steps {
                  id
                }
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
              }
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
              key
              value
              description
              portfolioId
              portfolio {
                id
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
            marketCapitalization {
            }
            ebitda {
              id
            }
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
            revenueTTM {
              id
            }
            grossProfitTTM {
              id
            }
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
            sharesOutstanding {
              id
            }
            dividendDate
            exDividendDate
            createdAt
            updatedAt
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
      }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_HOLDING });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.holdings ?? null;
    } catch (error) {
      console.error('Error in getAllHolding:', error);
      throw error;
    }
  },

  /**
   * Find multiple Holding records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found Holding records or null.
   */
  async findMany(props: HoldingType, client: ApolloClient<NormalizedCacheObject>): Promise<HoldingType[]> {
    const FIND_MANY_HOLDING = gql`
      query findManyHolding($where: HoldingWhereInput!) {
        holdings(where: $where) {
          id
          tradingAccountId
          assetId
          quantity
          averagePrice
          createdAt
          updatedAt
          tradingAccount {
            id
            name
            slug
            type
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
              currentMode
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
                }
                portfolio {
                  id
                }
                asset {
                  id
                }
                steps {
                  id
                }
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
              }
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
              key
              value
              description
              portfolioId
              portfolio {
                id
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
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
            marketCapitalization {
            }
            ebitda {
              id
            }
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
            revenueTTM {
              id
            }
            grossProfitTTM {
              id
            }
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
            sharesOutstanding {
              id
            }
            dividendDate
            exDividendDate
            createdAt
            updatedAt
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
      const response = await client.query({ query: FIND_MANY_HOLDING, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Holdings) {
        return response.data.holdings;
      } else {
       return [] as HoldingType[];
      }
    } catch (error) {
      console.error('Error in findManyHolding:', error);
      throw error;
    }
  }
};
