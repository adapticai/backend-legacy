

import { Asset as AssetType } from './generated/typegraphql-prisma/models/Asset';
import { ApolloError, gql } from '@apollo/client';
import { getApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Asset model.
 */

  const client = getApolloClient();

export const Asset = {

  /**
   * Create a new Asset record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created Asset or null.
   */

  async create(props: AssetType): Promise<AssetType> {

  const CREATE_ONE_ASSET = gql`
      mutation createOneAsset($data: AssetCreateInput!) {
        createOneAsset(data: $data) {
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
                tradingAccount {
                  id
                }
                alpacaAccounts {
                  id
                }
              }
              userId
              holdings {
                id
              }
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
   `;

    const variables = {
      data: {
          symbol: props.symbol !== undefined ? props.symbol : undefined,
  name: props.name !== undefined ? props.name : undefined,
  type: props.type !== undefined ? props.type : undefined,
  logoUrl: props.logoUrl !== undefined ? props.logoUrl : undefined,
  description: props.description !== undefined ? props.description : undefined,
  cik: props.cik !== undefined ? props.cik : undefined,
  exchange: props.exchange !== undefined ? props.exchange : undefined,
  currency: props.currency !== undefined ? props.currency : undefined,
  country: props.country !== undefined ? props.country : undefined,
  sector: props.sector !== undefined ? props.sector : undefined,
  industry: props.industry !== undefined ? props.industry : undefined,
  address: props.address !== undefined ? props.address : undefined,
  officialSite: props.officialSite !== undefined ? props.officialSite : undefined,
  fiscalYearEnd: props.fiscalYearEnd !== undefined ? props.fiscalYearEnd : undefined,
  latestQuarter: props.latestQuarter !== undefined ? props.latestQuarter : undefined,
  marketCapitalization: props.marketCapitalization !== undefined ? props.marketCapitalization : undefined,
  ebitda: props.ebitda !== undefined ? props.ebitda : undefined,
  peRatio: props.peRatio !== undefined ? props.peRatio : undefined,
  pegRatio: props.pegRatio !== undefined ? props.pegRatio : undefined,
  bookValue: props.bookValue !== undefined ? props.bookValue : undefined,
  dividendPerShare: props.dividendPerShare !== undefined ? props.dividendPerShare : undefined,
  dividendYield: props.dividendYield !== undefined ? props.dividendYield : undefined,
  eps: props.eps !== undefined ? props.eps : undefined,
  revenuePerShareTTM: props.revenuePerShareTTM !== undefined ? props.revenuePerShareTTM : undefined,
  profitMargin: props.profitMargin !== undefined ? props.profitMargin : undefined,
  operatingMarginTTM: props.operatingMarginTTM !== undefined ? props.operatingMarginTTM : undefined,
  returnOnAssetsTTM: props.returnOnAssetsTTM !== undefined ? props.returnOnAssetsTTM : undefined,
  returnOnEquityTTM: props.returnOnEquityTTM !== undefined ? props.returnOnEquityTTM : undefined,
  revenueTTM: props.revenueTTM !== undefined ? props.revenueTTM : undefined,
  grossProfitTTM: props.grossProfitTTM !== undefined ? props.grossProfitTTM : undefined,
  dilutedEPSTTM: props.dilutedEPSTTM !== undefined ? props.dilutedEPSTTM : undefined,
  quarterlyEarningsGrowthYOY: props.quarterlyEarningsGrowthYOY !== undefined ? props.quarterlyEarningsGrowthYOY : undefined,
  quarterlyRevenueGrowthYOY: props.quarterlyRevenueGrowthYOY !== undefined ? props.quarterlyRevenueGrowthYOY : undefined,
  analystTargetPrice: props.analystTargetPrice !== undefined ? props.analystTargetPrice : undefined,
  analystRatingStrongBuy: props.analystRatingStrongBuy !== undefined ? props.analystRatingStrongBuy : undefined,
  analystRatingBuy: props.analystRatingBuy !== undefined ? props.analystRatingBuy : undefined,
  analystRatingHold: props.analystRatingHold !== undefined ? props.analystRatingHold : undefined,
  analystRatingSell: props.analystRatingSell !== undefined ? props.analystRatingSell : undefined,
  analystRatingStrongSell: props.analystRatingStrongSell !== undefined ? props.analystRatingStrongSell : undefined,
  trailingPE: props.trailingPE !== undefined ? props.trailingPE : undefined,
  forwardPE: props.forwardPE !== undefined ? props.forwardPE : undefined,
  priceToSalesRatioTTM: props.priceToSalesRatioTTM !== undefined ? props.priceToSalesRatioTTM : undefined,
  priceToBookRatio: props.priceToBookRatio !== undefined ? props.priceToBookRatio : undefined,
  evToRevenue: props.evToRevenue !== undefined ? props.evToRevenue : undefined,
  evToEbitda: props.evToEbitda !== undefined ? props.evToEbitda : undefined,
  beta: props.beta !== undefined ? props.beta : undefined,
  week52High: props.week52High !== undefined ? props.week52High : undefined,
  week52Low: props.week52Low !== undefined ? props.week52Low : undefined,
  day50MovingAverage: props.day50MovingAverage !== undefined ? props.day50MovingAverage : undefined,
  day200MovingAverage: props.day200MovingAverage !== undefined ? props.day200MovingAverage : undefined,
  sharesOutstanding: props.sharesOutstanding !== undefined ? props.sharesOutstanding : undefined,
  dividendDate: props.dividendDate !== undefined ? props.dividendDate : undefined,
  exDividendDate: props.exDividendDate !== undefined ? props.exDividendDate : undefined,
  holdings: props.holdings ? {
    connectOrCreate: props.holdings.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
    tradingAccount: item.tradingAccount ? {
      connectOrCreate: {
        where: {
          id: item.tradingAccount.id !== undefined ? item.tradingAccount.id : undefined,
          slug: item.tradingAccount.slug !== undefined ? item.tradingAccount.slug : undefined,
          name: item.tradingAccount.name !== undefined ? {
              equals: item.tradingAccount.name 
             } : undefined,
        },
        create: {
          name: item.tradingAccount.name !== undefined ? item.tradingAccount.name : undefined,
          slug: item.tradingAccount.slug !== undefined ? item.tradingAccount.slug : undefined,
          type: item.tradingAccount.type !== undefined ? item.tradingAccount.type : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  trades: props.trades ? {
    connectOrCreate: props.trades.map((item: any) => ({
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
    user: item.user ? {
      connectOrCreate: {
        where: {
          id: item.user.id !== undefined ? item.user.id : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentMode: item.user.currentMode !== undefined ? item.user.currentMode : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      connectOrCreate: {
        where: {
          id: item.portfolio.id !== undefined ? item.portfolio.id : undefined,
          slug: item.portfolio.slug !== undefined ? item.portfolio.slug : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          slug: item.portfolio.slug !== undefined ? item.portfolio.slug : undefined,
          type: item.portfolio.type !== undefined ? item.portfolio.type : undefined,
        },
      }
    } : undefined,
    steps: item.steps ? {
      connectOrCreate: item.steps.map((item: any) => ({
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
    }))
  } : undefined,
  orders: props.orders ? {
    connectOrCreate: props.orders.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        action: item.action !== undefined ? item.action : undefined,
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        price: item.price !== undefined ? item.price : undefined,
        status: item.status !== undefined ? item.status : undefined,
    user: item.user ? {
      connectOrCreate: {
        where: {
          id: item.user.id !== undefined ? item.user.id : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentMode: item.user.currentMode !== undefined ? item.user.currentMode : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      connectOrCreate: {
        where: {
          id: item.portfolio.id !== undefined ? item.portfolio.id : undefined,
          slug: item.portfolio.slug !== undefined ? item.portfolio.slug : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          slug: item.portfolio.slug !== undefined ? item.portfolio.slug : undefined,
          type: item.portfolio.type !== undefined ? item.portfolio.type : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  aiRecommendations: props.aiRecommendations ? {
    connectOrCreate: props.aiRecommendations.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        action: item.action !== undefined ? item.action : undefined,
        confidence: item.confidence !== undefined ? item.confidence : undefined,
    user: item.user ? {
      connectOrCreate: {
        where: {
          id: item.user.id !== undefined ? item.user.id : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentMode: item.user.currentMode !== undefined ? item.user.currentMode : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      connectOrCreate: {
        where: {
          id: item.portfolio.id !== undefined ? item.portfolio.id : undefined,
          slug: item.portfolio.slug !== undefined ? item.portfolio.slug : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          slug: item.portfolio.slug !== undefined ? item.portfolio.slug : undefined,
          type: item.portfolio.type !== undefined ? item.portfolio.type : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  newsMentions: props.newsMentions ? {
    connectOrCreate: props.newsMentions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        url: item.url !== undefined ? item.url : undefined,
      },
      create: {
        url: item.url !== undefined ? item.url : undefined,
        relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
        sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
        sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
    news: item.news ? {
      connectOrCreate: {
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
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_ONE_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneAsset) {
        return response.data.createOneAsset;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneAsset:', error);
      throw error;
    }
  },

  /**
   * Create multiple Asset records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: AssetType[]): Promise<{ count: number } | null> {

      const CREATE_MANY_ASSET = gql`
      mutation createManyAsset($data: [AssetCreateManyInput!]!) {
        createManyAsset(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  symbol: prop.symbol !== undefined ? prop.symbol : undefined,
  name: prop.name !== undefined ? prop.name : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  logoUrl: prop.logoUrl !== undefined ? prop.logoUrl : undefined,
  description: prop.description !== undefined ? prop.description : undefined,
  cik: prop.cik !== undefined ? prop.cik : undefined,
  exchange: prop.exchange !== undefined ? prop.exchange : undefined,
  currency: prop.currency !== undefined ? prop.currency : undefined,
  country: prop.country !== undefined ? prop.country : undefined,
  sector: prop.sector !== undefined ? prop.sector : undefined,
  industry: prop.industry !== undefined ? prop.industry : undefined,
  address: prop.address !== undefined ? prop.address : undefined,
  officialSite: prop.officialSite !== undefined ? prop.officialSite : undefined,
  fiscalYearEnd: prop.fiscalYearEnd !== undefined ? prop.fiscalYearEnd : undefined,
  latestQuarter: prop.latestQuarter !== undefined ? prop.latestQuarter : undefined,
  marketCapitalization: prop.marketCapitalization !== undefined ? prop.marketCapitalization : undefined,
  ebitda: prop.ebitda !== undefined ? prop.ebitda : undefined,
  peRatio: prop.peRatio !== undefined ? prop.peRatio : undefined,
  pegRatio: prop.pegRatio !== undefined ? prop.pegRatio : undefined,
  bookValue: prop.bookValue !== undefined ? prop.bookValue : undefined,
  dividendPerShare: prop.dividendPerShare !== undefined ? prop.dividendPerShare : undefined,
  dividendYield: prop.dividendYield !== undefined ? prop.dividendYield : undefined,
  eps: prop.eps !== undefined ? prop.eps : undefined,
  revenuePerShareTTM: prop.revenuePerShareTTM !== undefined ? prop.revenuePerShareTTM : undefined,
  profitMargin: prop.profitMargin !== undefined ? prop.profitMargin : undefined,
  operatingMarginTTM: prop.operatingMarginTTM !== undefined ? prop.operatingMarginTTM : undefined,
  returnOnAssetsTTM: prop.returnOnAssetsTTM !== undefined ? prop.returnOnAssetsTTM : undefined,
  returnOnEquityTTM: prop.returnOnEquityTTM !== undefined ? prop.returnOnEquityTTM : undefined,
  revenueTTM: prop.revenueTTM !== undefined ? prop.revenueTTM : undefined,
  grossProfitTTM: prop.grossProfitTTM !== undefined ? prop.grossProfitTTM : undefined,
  dilutedEPSTTM: prop.dilutedEPSTTM !== undefined ? prop.dilutedEPSTTM : undefined,
  quarterlyEarningsGrowthYOY: prop.quarterlyEarningsGrowthYOY !== undefined ? prop.quarterlyEarningsGrowthYOY : undefined,
  quarterlyRevenueGrowthYOY: prop.quarterlyRevenueGrowthYOY !== undefined ? prop.quarterlyRevenueGrowthYOY : undefined,
  analystTargetPrice: prop.analystTargetPrice !== undefined ? prop.analystTargetPrice : undefined,
  analystRatingStrongBuy: prop.analystRatingStrongBuy !== undefined ? prop.analystRatingStrongBuy : undefined,
  analystRatingBuy: prop.analystRatingBuy !== undefined ? prop.analystRatingBuy : undefined,
  analystRatingHold: prop.analystRatingHold !== undefined ? prop.analystRatingHold : undefined,
  analystRatingSell: prop.analystRatingSell !== undefined ? prop.analystRatingSell : undefined,
  analystRatingStrongSell: prop.analystRatingStrongSell !== undefined ? prop.analystRatingStrongSell : undefined,
  trailingPE: prop.trailingPE !== undefined ? prop.trailingPE : undefined,
  forwardPE: prop.forwardPE !== undefined ? prop.forwardPE : undefined,
  priceToSalesRatioTTM: prop.priceToSalesRatioTTM !== undefined ? prop.priceToSalesRatioTTM : undefined,
  priceToBookRatio: prop.priceToBookRatio !== undefined ? prop.priceToBookRatio : undefined,
  evToRevenue: prop.evToRevenue !== undefined ? prop.evToRevenue : undefined,
  evToEbitda: prop.evToEbitda !== undefined ? prop.evToEbitda : undefined,
  beta: prop.beta !== undefined ? prop.beta : undefined,
  week52High: prop.week52High !== undefined ? prop.week52High : undefined,
  week52Low: prop.week52Low !== undefined ? prop.week52Low : undefined,
  day50MovingAverage: prop.day50MovingAverage !== undefined ? prop.day50MovingAverage : undefined,
  day200MovingAverage: prop.day200MovingAverage !== undefined ? prop.day200MovingAverage : undefined,
  sharesOutstanding: prop.sharesOutstanding !== undefined ? prop.sharesOutstanding : undefined,
  dividendDate: prop.dividendDate !== undefined ? prop.dividendDate : undefined,
  exDividendDate: prop.exDividendDate !== undefined ? prop.exDividendDate : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyAsset) {
        return response.data.createManyAsset;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyAsset:', error);
      throw error;
    }
  },

  /**
   * Update a single Asset record.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated Asset or null.
   */
  async update(props: AssetType): Promise<AssetType> {

      const UPDATE_ONE_ASSET = gql`
      mutation updateOneAsset($data: AssetUpdateInput!, $where: AssetWhereUniqueInput!) {
        updateOneAsset(data: $data, where: $where) {
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
                tradingAccount {
                  id
                }
                alpacaAccounts {
                  id
                }
              }
              userId
              holdings {
                id
              }
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
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        symbol: props.symbol !== undefined ? props.symbol : undefined,
        name: props.name !== undefined ? props.name : undefined,
      },
      data: {
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  logoUrl: props.logoUrl !== undefined ? {
            set: props.logoUrl 
           } : undefined,
  description: props.description !== undefined ? {
            set: props.description 
           } : undefined,
  cik: props.cik !== undefined ? {
            set: props.cik 
           } : undefined,
  exchange: props.exchange !== undefined ? {
            set: props.exchange 
           } : undefined,
  currency: props.currency !== undefined ? {
            set: props.currency 
           } : undefined,
  country: props.country !== undefined ? {
            set: props.country 
           } : undefined,
  sector: props.sector !== undefined ? {
            set: props.sector 
           } : undefined,
  industry: props.industry !== undefined ? {
            set: props.industry 
           } : undefined,
  address: props.address !== undefined ? {
            set: props.address 
           } : undefined,
  officialSite: props.officialSite !== undefined ? {
            set: props.officialSite 
           } : undefined,
  fiscalYearEnd: props.fiscalYearEnd !== undefined ? {
            set: props.fiscalYearEnd 
           } : undefined,
  latestQuarter: props.latestQuarter !== undefined ? {
            set: props.latestQuarter 
           } : undefined,
  marketCapitalization: props.marketCapitalization !== undefined ? {
            set: props.marketCapitalization 
           } : undefined,
  ebitda: props.ebitda !== undefined ? {
            set: props.ebitda 
           } : undefined,
  peRatio: props.peRatio !== undefined ? {
            set: props.peRatio 
           } : undefined,
  pegRatio: props.pegRatio !== undefined ? {
            set: props.pegRatio 
           } : undefined,
  bookValue: props.bookValue !== undefined ? {
            set: props.bookValue 
           } : undefined,
  dividendPerShare: props.dividendPerShare !== undefined ? {
            set: props.dividendPerShare 
           } : undefined,
  dividendYield: props.dividendYield !== undefined ? {
            set: props.dividendYield 
           } : undefined,
  eps: props.eps !== undefined ? {
            set: props.eps 
           } : undefined,
  revenuePerShareTTM: props.revenuePerShareTTM !== undefined ? {
            set: props.revenuePerShareTTM 
           } : undefined,
  profitMargin: props.profitMargin !== undefined ? {
            set: props.profitMargin 
           } : undefined,
  operatingMarginTTM: props.operatingMarginTTM !== undefined ? {
            set: props.operatingMarginTTM 
           } : undefined,
  returnOnAssetsTTM: props.returnOnAssetsTTM !== undefined ? {
            set: props.returnOnAssetsTTM 
           } : undefined,
  returnOnEquityTTM: props.returnOnEquityTTM !== undefined ? {
            set: props.returnOnEquityTTM 
           } : undefined,
  revenueTTM: props.revenueTTM !== undefined ? {
            set: props.revenueTTM 
           } : undefined,
  grossProfitTTM: props.grossProfitTTM !== undefined ? {
            set: props.grossProfitTTM 
           } : undefined,
  dilutedEPSTTM: props.dilutedEPSTTM !== undefined ? {
            set: props.dilutedEPSTTM 
           } : undefined,
  quarterlyEarningsGrowthYOY: props.quarterlyEarningsGrowthYOY !== undefined ? {
            set: props.quarterlyEarningsGrowthYOY 
           } : undefined,
  quarterlyRevenueGrowthYOY: props.quarterlyRevenueGrowthYOY !== undefined ? {
            set: props.quarterlyRevenueGrowthYOY 
           } : undefined,
  analystTargetPrice: props.analystTargetPrice !== undefined ? {
            set: props.analystTargetPrice 
           } : undefined,
  analystRatingStrongBuy: props.analystRatingStrongBuy !== undefined ? {
            set: props.analystRatingStrongBuy 
           } : undefined,
  analystRatingBuy: props.analystRatingBuy !== undefined ? {
            set: props.analystRatingBuy 
           } : undefined,
  analystRatingHold: props.analystRatingHold !== undefined ? {
            set: props.analystRatingHold 
           } : undefined,
  analystRatingSell: props.analystRatingSell !== undefined ? {
            set: props.analystRatingSell 
           } : undefined,
  analystRatingStrongSell: props.analystRatingStrongSell !== undefined ? {
            set: props.analystRatingStrongSell 
           } : undefined,
  trailingPE: props.trailingPE !== undefined ? {
            set: props.trailingPE 
           } : undefined,
  forwardPE: props.forwardPE !== undefined ? {
            set: props.forwardPE 
           } : undefined,
  priceToSalesRatioTTM: props.priceToSalesRatioTTM !== undefined ? {
            set: props.priceToSalesRatioTTM 
           } : undefined,
  priceToBookRatio: props.priceToBookRatio !== undefined ? {
            set: props.priceToBookRatio 
           } : undefined,
  evToRevenue: props.evToRevenue !== undefined ? {
            set: props.evToRevenue 
           } : undefined,
  evToEbitda: props.evToEbitda !== undefined ? {
            set: props.evToEbitda 
           } : undefined,
  beta: props.beta !== undefined ? {
            set: props.beta 
           } : undefined,
  week52High: props.week52High !== undefined ? {
            set: props.week52High 
           } : undefined,
  week52Low: props.week52Low !== undefined ? {
            set: props.week52Low 
           } : undefined,
  day50MovingAverage: props.day50MovingAverage !== undefined ? {
            set: props.day50MovingAverage 
           } : undefined,
  day200MovingAverage: props.day200MovingAverage !== undefined ? {
            set: props.day200MovingAverage 
           } : undefined,
  sharesOutstanding: props.sharesOutstanding !== undefined ? {
            set: props.sharesOutstanding 
           } : undefined,
  dividendDate: props.dividendDate !== undefined ? {
            set: props.dividendDate 
           } : undefined,
  exDividendDate: props.exDividendDate !== undefined ? {
            set: props.exDividendDate 
           } : undefined,
  holdings: props.holdings ? {
    upsert: props.holdings.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
        quantity: item.quantity !== undefined ? {
            set: item.quantity  
           } : undefined,
        averagePrice: item.averagePrice !== undefined ? {
            set: item.averagePrice  
           } : undefined,
    tradingAccount: item.tradingAccount ? {
      upsert: {
        where: {
          id: item.tradingAccount.id !== undefined ? {
              equals: item.tradingAccount.id 
             } : undefined,
          name: item.tradingAccount.name !== undefined ? {
              equals: item.tradingAccount.name 
             } : undefined,
          slug: item.tradingAccount.slug !== undefined ? {
              equals: item.tradingAccount.slug 
             } : undefined,
        },
        update: {
          name: item.tradingAccount.name !== undefined ? {
              set: item.tradingAccount.name  
             } : undefined,
          slug: item.tradingAccount.slug !== undefined ? {
              set: item.tradingAccount.slug  
             } : undefined,
          type: item.tradingAccount.type !== undefined ? {
              set: item.tradingAccount.type  
             } : undefined,
        },
        create: {
          name: item.tradingAccount.name !== undefined ? item.tradingAccount.name : undefined,
          slug: item.tradingAccount.slug !== undefined ? item.tradingAccount.slug : undefined,
          type: item.tradingAccount.type !== undefined ? item.tradingAccount.type : undefined,
        },
      }
    } : undefined,
      },
      create: {
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
    tradingAccount: item.tradingAccount ? {
      connectOrCreate: {
        where: {
          id: item.tradingAccount.id !== undefined ? item.tradingAccount.id : undefined,
          slug: item.tradingAccount.slug !== undefined ? item.tradingAccount.slug : undefined,
          name: item.tradingAccount.name !== undefined ? {
              equals: item.tradingAccount.name 
             } : undefined,
        },
        create: {
          name: item.tradingAccount.name !== undefined ? item.tradingAccount.name : undefined,
          slug: item.tradingAccount.slug !== undefined ? item.tradingAccount.slug : undefined,
          type: item.tradingAccount.type !== undefined ? item.tradingAccount.type : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  trades: props.trades ? {
    upsert: props.trades.map((item: any) => ({
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
    user: item.user ? {
      upsert: {
        where: {
          id: item.user.id !== undefined ? {
              equals: item.user.id 
             } : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
          email: item.user.email !== undefined ? {
              equals: item.user.email 
             } : undefined,
        },
        update: {
          name: item.user.name !== undefined ? {
              set: item.user.name  
             } : undefined,
          email: item.user.email !== undefined ? {
              set: item.user.email  
             } : undefined,
          emailVerified: item.user.emailVerified !== undefined ? {
              set: item.user.emailVerified  
             } : undefined,
          image: item.user.image !== undefined ? {
              set: item.user.image  
             } : undefined,
          role: item.user.role !== undefined ? {
              set: item.user.role  
             } : undefined,
          bio: item.user.bio !== undefined ? {
              set: item.user.bio  
             } : undefined,
          jobTitle: item.user.jobTitle !== undefined ? {
              set: item.user.jobTitle  
             } : undefined,
          currentMode: item.user.currentMode !== undefined ? {
              set: item.user.currentMode  
             } : undefined,
          plan: item.user.plan !== undefined ? {
              set: item.user.plan  
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentMode: item.user.currentMode !== undefined ? item.user.currentMode : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      upsert: {
        where: {
          id: item.portfolio.id !== undefined ? {
              equals: item.portfolio.id 
             } : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
          slug: item.portfolio.slug !== undefined ? {
              equals: item.portfolio.slug 
             } : undefined,
        },
        update: {
          name: item.portfolio.name !== undefined ? {
              set: item.portfolio.name  
             } : undefined,
          slug: item.portfolio.slug !== undefined ? {
              set: item.portfolio.slug  
             } : undefined,
          type: item.portfolio.type !== undefined ? {
              set: item.portfolio.type  
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          slug: item.portfolio.slug !== undefined ? item.portfolio.slug : undefined,
          type: item.portfolio.type !== undefined ? item.portfolio.type : undefined,
        },
      }
    } : undefined,
    steps: item.steps ? {
      upsert: item.steps.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
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
      create: {
        action: item.action !== undefined ? item.action : undefined,
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        price: item.price !== undefined ? item.price : undefined,
        total: item.total !== undefined ? item.total : undefined,
        timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        status: item.status !== undefined ? item.status : undefined,
    user: item.user ? {
      connectOrCreate: {
        where: {
          id: item.user.id !== undefined ? item.user.id : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentMode: item.user.currentMode !== undefined ? item.user.currentMode : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      connectOrCreate: {
        where: {
          id: item.portfolio.id !== undefined ? item.portfolio.id : undefined,
          slug: item.portfolio.slug !== undefined ? item.portfolio.slug : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          slug: item.portfolio.slug !== undefined ? item.portfolio.slug : undefined,
          type: item.portfolio.type !== undefined ? item.portfolio.type : undefined,
        },
      }
    } : undefined,
    steps: item.steps ? {
      connectOrCreate: item.steps.map((item: any) => ({
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
    }))
  } : undefined,
  orders: props.orders ? {
    upsert: props.orders.map((item: any) => ({
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
    user: item.user ? {
      upsert: {
        where: {
          id: item.user.id !== undefined ? {
              equals: item.user.id 
             } : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
          email: item.user.email !== undefined ? {
              equals: item.user.email 
             } : undefined,
        },
        update: {
          name: item.user.name !== undefined ? {
              set: item.user.name  
             } : undefined,
          email: item.user.email !== undefined ? {
              set: item.user.email  
             } : undefined,
          emailVerified: item.user.emailVerified !== undefined ? {
              set: item.user.emailVerified  
             } : undefined,
          image: item.user.image !== undefined ? {
              set: item.user.image  
             } : undefined,
          role: item.user.role !== undefined ? {
              set: item.user.role  
             } : undefined,
          bio: item.user.bio !== undefined ? {
              set: item.user.bio  
             } : undefined,
          jobTitle: item.user.jobTitle !== undefined ? {
              set: item.user.jobTitle  
             } : undefined,
          currentMode: item.user.currentMode !== undefined ? {
              set: item.user.currentMode  
             } : undefined,
          plan: item.user.plan !== undefined ? {
              set: item.user.plan  
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentMode: item.user.currentMode !== undefined ? item.user.currentMode : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      upsert: {
        where: {
          id: item.portfolio.id !== undefined ? {
              equals: item.portfolio.id 
             } : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
          slug: item.portfolio.slug !== undefined ? {
              equals: item.portfolio.slug 
             } : undefined,
        },
        update: {
          name: item.portfolio.name !== undefined ? {
              set: item.portfolio.name  
             } : undefined,
          slug: item.portfolio.slug !== undefined ? {
              set: item.portfolio.slug  
             } : undefined,
          type: item.portfolio.type !== undefined ? {
              set: item.portfolio.type  
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          slug: item.portfolio.slug !== undefined ? item.portfolio.slug : undefined,
          type: item.portfolio.type !== undefined ? item.portfolio.type : undefined,
        },
      }
    } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        action: item.action !== undefined ? item.action : undefined,
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        price: item.price !== undefined ? item.price : undefined,
        status: item.status !== undefined ? item.status : undefined,
    user: item.user ? {
      connectOrCreate: {
        where: {
          id: item.user.id !== undefined ? item.user.id : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentMode: item.user.currentMode !== undefined ? item.user.currentMode : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      connectOrCreate: {
        where: {
          id: item.portfolio.id !== undefined ? item.portfolio.id : undefined,
          slug: item.portfolio.slug !== undefined ? item.portfolio.slug : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          slug: item.portfolio.slug !== undefined ? item.portfolio.slug : undefined,
          type: item.portfolio.type !== undefined ? item.portfolio.type : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  aiRecommendations: props.aiRecommendations ? {
    upsert: props.aiRecommendations.map((item: any) => ({
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
    user: item.user ? {
      upsert: {
        where: {
          id: item.user.id !== undefined ? {
              equals: item.user.id 
             } : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
          email: item.user.email !== undefined ? {
              equals: item.user.email 
             } : undefined,
        },
        update: {
          name: item.user.name !== undefined ? {
              set: item.user.name  
             } : undefined,
          email: item.user.email !== undefined ? {
              set: item.user.email  
             } : undefined,
          emailVerified: item.user.emailVerified !== undefined ? {
              set: item.user.emailVerified  
             } : undefined,
          image: item.user.image !== undefined ? {
              set: item.user.image  
             } : undefined,
          role: item.user.role !== undefined ? {
              set: item.user.role  
             } : undefined,
          bio: item.user.bio !== undefined ? {
              set: item.user.bio  
             } : undefined,
          jobTitle: item.user.jobTitle !== undefined ? {
              set: item.user.jobTitle  
             } : undefined,
          currentMode: item.user.currentMode !== undefined ? {
              set: item.user.currentMode  
             } : undefined,
          plan: item.user.plan !== undefined ? {
              set: item.user.plan  
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentMode: item.user.currentMode !== undefined ? item.user.currentMode : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      upsert: {
        where: {
          id: item.portfolio.id !== undefined ? {
              equals: item.portfolio.id 
             } : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
          slug: item.portfolio.slug !== undefined ? {
              equals: item.portfolio.slug 
             } : undefined,
        },
        update: {
          name: item.portfolio.name !== undefined ? {
              set: item.portfolio.name  
             } : undefined,
          slug: item.portfolio.slug !== undefined ? {
              set: item.portfolio.slug  
             } : undefined,
          type: item.portfolio.type !== undefined ? {
              set: item.portfolio.type  
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          slug: item.portfolio.slug !== undefined ? item.portfolio.slug : undefined,
          type: item.portfolio.type !== undefined ? item.portfolio.type : undefined,
        },
      }
    } : undefined,
      },
      create: {
        action: item.action !== undefined ? item.action : undefined,
        confidence: item.confidence !== undefined ? item.confidence : undefined,
    user: item.user ? {
      connectOrCreate: {
        where: {
          id: item.user.id !== undefined ? item.user.id : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentMode: item.user.currentMode !== undefined ? item.user.currentMode : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
    portfolio: item.portfolio ? {
      connectOrCreate: {
        where: {
          id: item.portfolio.id !== undefined ? item.portfolio.id : undefined,
          slug: item.portfolio.slug !== undefined ? item.portfolio.slug : undefined,
          name: item.portfolio.name !== undefined ? {
              equals: item.portfolio.name 
             } : undefined,
        },
        create: {
          name: item.portfolio.name !== undefined ? item.portfolio.name : undefined,
          slug: item.portfolio.slug !== undefined ? item.portfolio.slug : undefined,
          type: item.portfolio.type !== undefined ? item.portfolio.type : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  newsMentions: props.newsMentions ? {
    upsert: props.newsMentions.map((item: any) => ({
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
    news: item.news ? {
      connectOrCreate: {
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
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneAsset) {
        return response.data.updateOneAsset;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneAsset:', error);
      throw error;
    }
  },

  /**
   * Delete a single Asset record.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The deleted Asset or null.
   */
  async delete(props: AssetType): Promise<AssetType> {

      const DELETE_ONE_ASSET = gql`
      mutation deleteOneAsset($where: AssetWhereUniqueInput!) {
        deleteOneAsset(where: $where) {
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
                tradingAccount {
                  id
                }
                alpacaAccounts {
                  id
                }
              }
              userId
              holdings {
                id
              }
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
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneAsset) {
        return response.data.deleteOneAsset;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneAsset:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Asset record by ID.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The retrieved Asset or null.
   */
  async get(props: AssetType): Promise<AssetType | null> {

      const GET_ASSET = gql`
      query getAsset($where: AssetWhereUniqueInput!) {
        getAsset(where: $where) {
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
                tradingAccount {
                  id
                }
                alpacaAccounts {
                  id
                }
              }
              userId
              holdings {
                id
              }
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
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        symbol: props.symbol !== undefined ? props.symbol : undefined,
        name: props.name !== undefined ? props.name : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getAsset ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Asset found') {
        return null;
      } else {
        console.error('Error in getAsset:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Assets records.
   * @param client - Apollo Client instance.
   * @returns An array of Asset records or null.
   */
  async getAll(): Promise<AssetType[] | null> {

      const GET_ALL_ASSET = gql`
      query getAllAsset {
        assets {
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
                tradingAccount {
                  id
                }
                alpacaAccounts {
                  id
                }
              }
              userId
              holdings {
                id
              }
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
      }`;

    try {
      const response = await client.query({ query: GET_ALL_ASSET });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.assets ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Asset found') {
        return null;
      } else {
        console.error('Error in getAsset:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Asset records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found Asset records or null.
   */
  async findMany(props: AssetType): Promise<AssetType[] | null> {

      const FIND_MANY_ASSET = gql`
      query findManyAsset($where: AssetWhereInput!) {
        assets(where: $where) {
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
                tradingAccount {
                  id
                }
                alpacaAccounts {
                  id
                }
              }
              userId
              holdings {
                id
              }
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
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
            equals: props.id 
           } : undefined,
        symbol: props.symbol !== undefined ? {
            equals: props.symbol 
           } : undefined,
        name: props.name !== undefined ? {
            equals: props.name 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_ASSET, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Assets) {
        return response.data.assets;
      } else {
       return [] as AssetType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Asset found') {
        return null;
      } else {
        console.error('Error in getAsset:', error);
        throw error;
      }
    }
  }
};
