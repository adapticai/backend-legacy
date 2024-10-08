

import { TradingAccount as TradingAccountType } from './generated/typegraphql-prisma/models/TradingAccount';
import { ApolloClient, ApolloError, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the TradingAccount model.
 */

export const TradingAccount = {
  /**
   * Create a new TradingAccount record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created TradingAccount or null.
   */
  async create(props: TradingAccountType, client: ApolloClient<NormalizedCacheObject>): Promise<TradingAccountType> {
    const CREATE_ONE_TRADINGACCOUNT = gql`
      mutation createOneTradingAccount($data: TradingAccountCreateInput!) {
        createOneTradingAccount(data: $data) {
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
                }
              }
              steps {
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
      }
   `;

    const variables = {
      data: {
          name: props.name !== undefined ? props.name : undefined,
  slug: props.slug !== undefined ? props.slug : undefined,
  type: props.type !== undefined ? props.type : undefined,
  user: props.user ? {
    connectOrCreate: {
      where: {
        id: props.user.id !== undefined ? props.user.id : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        name: props.user.name !== undefined ? {
            equals: props.user.name 
           } : undefined,
      },
      create: {
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        currentMode: props.user.currentMode !== undefined ? props.user.currentMode : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
    customer: props.user.customer ? {
      connectOrCreate: {
        where: {
          id: props.user.customer.id !== undefined ? props.user.customer.id : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
             } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? {
      connectOrCreate: props.user.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
    sessions: props.user.sessions ? {
      connectOrCreate: props.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: props.user.authenticators ? {
      connectOrCreate: props.user.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
          publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
          counter: item.counter !== undefined ? item.counter : undefined,
        },
      }))
    } : undefined,
    trades: props.user.trades ? {
      connectOrCreate: props.user.trades.map((item: any) => ({
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
    orders: props.user.orders ? {
      connectOrCreate: props.user.orders.map((item: any) => ({
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
    aiRecommendations: props.user.aiRecommendations ? {
      connectOrCreate: props.user.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    riskAllocations: props.user.riskAllocations ? {
      connectOrCreate: props.user.riskAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          assetType: item.assetType !== undefined ? item.assetType : undefined,
          allocation: item.allocation !== undefined ? item.allocation : undefined,
        },
      }))
    } : undefined,
    alerts: props.user.alerts ? {
      connectOrCreate: props.user.alerts.map((item: any) => ({
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
    performanceMetrics: props.user.performanceMetrics ? {
      connectOrCreate: props.user.performanceMetrics.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  holdings: props.holdings ? {
    connectOrCreate: props.holdings.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
    asset: item.asset ? {
      connectOrCreate: {
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
    asset: item.asset ? {
      connectOrCreate: {
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
    asset: item.asset ? {
      connectOrCreate: {
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
    asset: item.asset ? {
      connectOrCreate: {
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
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  riskAllocations: props.riskAllocations ? {
    connectOrCreate: props.riskAllocations.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        assetType: item.assetType !== undefined ? item.assetType : undefined,
        allocation: item.allocation !== undefined ? item.allocation : undefined,
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
      },
    }))
  } : undefined,
  alerts: props.alerts ? {
    connectOrCreate: props.alerts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        message: item.message !== undefined ? item.message : undefined,
        type: item.type !== undefined ? item.type : undefined,
        isRead: item.isRead !== undefined ? item.isRead : undefined,
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
      },
    }))
  } : undefined,
  performanceMetrics: props.performanceMetrics ? {
    connectOrCreate: props.performanceMetrics.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        label: item.label !== undefined ? item.label : undefined,
        value: item.value !== undefined ? item.value : undefined,
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
      },
    }))
  } : undefined,
  environmentVariables: props.environmentVariables ? {
    connectOrCreate: props.environmentVariables.map((item: any) => ({
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
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_ONE_TRADINGACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneTradingAccount) {
        return response.data.createOneTradingAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneTradingAccount:', error);
      throw error;
    }
  },

  /**
   * Create multiple TradingAccount records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: TradingAccountType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_TRADINGACCOUNT = gql`
      mutation createManyTradingAccount($data: [TradingAccountCreateManyInput!]!) {
        createManyTradingAccount(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  name: prop.name !== undefined ? prop.name : undefined,
  slug: prop.slug !== undefined ? prop.slug : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  userId: prop.userId !== undefined ? prop.userId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_TRADINGACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyTradingAccount) {
        return response.data.createManyTradingAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyTradingAccount:', error);
      throw error;
    }
  },

  /**
   * Update a single TradingAccount record.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated TradingAccount or null.
   */
  async update(props: TradingAccountType, client: ApolloClient<NormalizedCacheObject>): Promise<TradingAccountType> {
    const UPDATE_ONE_TRADINGACCOUNT = gql`
      mutation updateOneTradingAccount($data: TradingAccountUpdateInput!, $where: TradingAccountWhereUniqueInput!) {
        updateOneTradingAccount(data: $data, where: $where) {
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
                }
              }
              steps {
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
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        slug: props.slug !== undefined ? props.slug : undefined,
        name: props.name !== undefined ? {
            equals: props.name 
           } : undefined,
      },
      data: {
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  user: props.user ? {
    upsert: {
      where: {
        id: props.user.id !== undefined ? {
            equals: props.user.id 
           } : undefined,
        name: props.user.name !== undefined ? {
            equals: props.user.name 
           } : undefined,
        email: props.user.email !== undefined ? {
            equals: props.user.email 
           } : undefined,
      },
      update: {
        name: props.user.name !== undefined ? {
            set: props.user.name  
           } : undefined,
        email: props.user.email !== undefined ? {
            set: props.user.email  
           } : undefined,
        emailVerified: props.user.emailVerified !== undefined ? {
            set: props.user.emailVerified  
           } : undefined,
        image: props.user.image !== undefined ? {
            set: props.user.image  
           } : undefined,
        role: props.user.role !== undefined ? {
            set: props.user.role  
           } : undefined,
        bio: props.user.bio !== undefined ? {
            set: props.user.bio  
           } : undefined,
        jobTitle: props.user.jobTitle !== undefined ? {
            set: props.user.jobTitle  
           } : undefined,
        currentMode: props.user.currentMode !== undefined ? {
            set: props.user.currentMode  
           } : undefined,
        plan: props.user.plan !== undefined ? {
            set: props.user.plan  
           } : undefined,
    customer: props.user.customer ? {
      upsert: {
        where: {
          id: props.user.customer.id !== undefined ? {
              equals: props.user.customer.id 
             } : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
             } : undefined,
        },
        update: {
          authUserId: props.user.customer.authUserId !== undefined ? {
              set: props.user.customer.authUserId  
             } : undefined,
          name: props.user.customer.name !== undefined ? {
              set: props.user.customer.name  
             } : undefined,
          plan: props.user.customer.plan !== undefined ? {
              set: props.user.customer.plan  
             } : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? {
              set: props.user.customer.stripeCustomerId  
             } : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? {
              set: props.user.customer.stripeSubscriptionId  
             } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              set: props.user.customer.stripePriceId  
             } : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? {
              set: props.user.customer.stripeCurrentPeriodEnd  
             } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? {
      upsert: props.user.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
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
    sessions: props.user.sessions ? {
      upsert: props.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
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
    authenticators: props.user.authenticators ? {
      upsert: props.user.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
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
    trades: props.user.trades ? {
      upsert: props.user.trades.map((item: any) => ({
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
    orders: props.user.orders ? {
      upsert: props.user.orders.map((item: any) => ({
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
    aiRecommendations: props.user.aiRecommendations ? {
      upsert: props.user.aiRecommendations.map((item: any) => ({
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
    riskAllocations: props.user.riskAllocations ? {
      upsert: props.user.riskAllocations.map((item: any) => ({
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
    alerts: props.user.alerts ? {
      upsert: props.user.alerts.map((item: any) => ({
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
    performanceMetrics: props.user.performanceMetrics ? {
      upsert: props.user.performanceMetrics.map((item: any) => ({
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
      },
      create: {
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        currentMode: props.user.currentMode !== undefined ? props.user.currentMode : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
    customer: props.user.customer ? {
      connectOrCreate: {
        where: {
          id: props.user.customer.id !== undefined ? props.user.customer.id : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
             } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? {
      connectOrCreate: props.user.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
    sessions: props.user.sessions ? {
      connectOrCreate: props.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: props.user.authenticators ? {
      connectOrCreate: props.user.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
          publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
          counter: item.counter !== undefined ? item.counter : undefined,
        },
      }))
    } : undefined,
    trades: props.user.trades ? {
      connectOrCreate: props.user.trades.map((item: any) => ({
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
    orders: props.user.orders ? {
      connectOrCreate: props.user.orders.map((item: any) => ({
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
    aiRecommendations: props.user.aiRecommendations ? {
      connectOrCreate: props.user.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    riskAllocations: props.user.riskAllocations ? {
      connectOrCreate: props.user.riskAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          assetType: item.assetType !== undefined ? item.assetType : undefined,
          allocation: item.allocation !== undefined ? item.allocation : undefined,
        },
      }))
    } : undefined,
    alerts: props.user.alerts ? {
      connectOrCreate: props.user.alerts.map((item: any) => ({
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
    performanceMetrics: props.user.performanceMetrics ? {
      connectOrCreate: props.user.performanceMetrics.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
      },
    }
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
        },
      }
    } : undefined,
      },
      create: {
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
    asset: item.asset ? {
      connectOrCreate: {
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
    asset: item.asset ? {
      connectOrCreate: {
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
    asset: item.asset ? {
      connectOrCreate: {
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
    asset: item.asset ? {
      connectOrCreate: {
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
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  riskAllocations: props.riskAllocations ? {
    upsert: props.riskAllocations.map((item: any) => ({
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
      },
      create: {
        assetType: item.assetType !== undefined ? item.assetType : undefined,
        allocation: item.allocation !== undefined ? item.allocation : undefined,
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
      },
    }))
  } : undefined,
  alerts: props.alerts ? {
    upsert: props.alerts.map((item: any) => ({
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
      },
      create: {
        message: item.message !== undefined ? item.message : undefined,
        type: item.type !== undefined ? item.type : undefined,
        isRead: item.isRead !== undefined ? item.isRead : undefined,
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
      },
    }))
  } : undefined,
  performanceMetrics: props.performanceMetrics ? {
    upsert: props.performanceMetrics.map((item: any) => ({
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
      },
      create: {
        label: item.label !== undefined ? item.label : undefined,
        value: item.value !== undefined ? item.value : undefined,
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
      },
    }))
  } : undefined,
  environmentVariables: props.environmentVariables ? {
    upsert: props.environmentVariables.map((item: any) => ({
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
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_TRADINGACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneTradingAccount) {
        return response.data.updateOneTradingAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneTradingAccount:', error);
      throw error;
    }
  },

  /**
   * Delete a single TradingAccount record.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The deleted TradingAccount or null.
   */
  async delete(props: TradingAccountType, client: ApolloClient<NormalizedCacheObject>): Promise<TradingAccountType> {
    const DELETE_ONE_TRADINGACCOUNT = gql`
      mutation deleteOneTradingAccount($where: TradingAccountWhereUniqueInput!) {
        deleteOneTradingAccount(where: $where) {
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
                }
              }
              steps {
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
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_TRADINGACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneTradingAccount) {
        return response.data.deleteOneTradingAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneTradingAccount:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single TradingAccount record by ID.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The retrieved TradingAccount or null.
   */
  async get(props: TradingAccountType, client: ApolloClient<NormalizedCacheObject>): Promise<TradingAccountType | null> {
    const GET_TRADINGACCOUNT = gql`
      query getTradingAccount($where: TradingAccountWhereUniqueInput!) {
        getTradingAccount(where: $where) {
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
                }
              }
              steps {
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
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        slug: props.slug !== undefined ? props.slug : undefined,
        name: props.name !== undefined ? {
            equals: props.name 
           } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_TRADINGACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getTradingAccount ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No TradingAccount found') {
        return null;
      } else {
        console.error('Error in getTradingAccount:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all TradingAccounts records.
   * @param client - Apollo Client instance.
   * @returns An array of TradingAccount records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<TradingAccountType[] | null> {
    const GET_ALL_TRADINGACCOUNT = gql`
      query getAllTradingAccount {
        tradingAccounts {
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
                }
              }
              steps {
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
      }`;

    try {
      const response = await client.query({ query: GET_ALL_TRADINGACCOUNT });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.tradingAccounts ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No TradingAccount found') {
        return null;
      } else {
        console.error('Error in getTradingAccount:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple TradingAccount records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found TradingAccount records or null.
   */
  async findMany(props: TradingAccountType, client: ApolloClient<NormalizedCacheObject>): Promise<TradingAccountType[] | null> {
    const FIND_MANY_TRADINGACCOUNT = gql`
      query findManyTradingAccount($where: TradingAccountWhereInput!) {
        tradingAccounts(where: $where) {
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
                }
              }
              steps {
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
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
            equals: props.id 
           } : undefined,
        name: props.name !== undefined ? {
            equals: props.name 
           } : undefined,
        slug: props.slug !== undefined ? {
            equals: props.slug 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_TRADINGACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.TradingAccounts) {
        return response.data.tradingAccounts;
      } else {
       return [] as TradingAccountType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No TradingAccount found') {
        return null;
      } else {
        console.error('Error in getTradingAccount:', error);
        throw error;
      }
    }
  }
};
