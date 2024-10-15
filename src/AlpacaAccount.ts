

import { AlpacaAccount as AlpacaAccountType } from './generated/typegraphql-prisma/models/AlpacaAccount';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the AlpacaAccount model.
 */

export const AlpacaAccount = {

  /**
   * Create a new AlpacaAccount record.
   * @param props - Properties for the new record.
   * @returns The created AlpacaAccount or null.
   */

  async create(props: AlpacaAccountType): Promise<AlpacaAccountType> {

  const client = createApolloClient();

  const CREATE_ONE_ALPACAACCOUNT = gql`
      mutation createOneAlpacaAccount($data: AlpacaAccountCreateInput!) {
        createOneAlpacaAccount(data: $data) {
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
          }
        }
      }
   `;

    const variables = {
      data: {
          type: props.type !== undefined ? props.type : undefined,
  APIKey: props.APIKey !== undefined ? props.APIKey : undefined,
  APISecret: props.APISecret !== undefined ? props.APISecret : undefined,
  configuration: props.configuration !== undefined ? props.configuration : undefined,
  marketOpen: props.marketOpen !== undefined ? props.marketOpen : undefined,
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
        currentAccount: props.user.currentAccount !== undefined ? props.user.currentAccount : undefined,
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
      },
    }
  } : undefined,
  trades: props.trades ? {
    connectOrCreate: props.trades.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        price: item.price !== undefined ? item.price : undefined,
        total: item.total !== undefined ? item.total : undefined,
        timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        status: item.status !== undefined ? item.status : undefined,
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
    actions: item.actions ? {
      connectOrCreate: item.actions.map((item: any) => ({
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
          currentAccount: item.user.currentAccount !== undefined ? item.user.currentAccount : undefined,
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
  positions: props.positions ? {
    connectOrCreate: props.positions.map((item: any) => ({
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
  Alert: props.Alert ? {
    connectOrCreate: props.Alert.map((item: any) => ({
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
          currentAccount: item.user.currentAccount !== undefined ? item.user.currentAccount : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
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
      const response = await client.mutate({ mutation: CREATE_ONE_ALPACAACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneAlpacaAccount) {
        return response.data.createOneAlpacaAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneAlpacaAccount:', error);
      throw error;
    }
  },

  /**
   * Create multiple AlpacaAccount records.
   * @param props - Array of AlpacaAccount objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: AlpacaAccountType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const CREATE_MANY_ALPACAACCOUNT = gql`
      mutation createManyAlpacaAccount($data: [AlpacaAccountCreateManyInput!]!) {
        createManyAlpacaAccount(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  type: prop.type !== undefined ? prop.type : undefined,
  APIKey: prop.APIKey !== undefined ? prop.APIKey : undefined,
  APISecret: prop.APISecret !== undefined ? prop.APISecret : undefined,
  configuration: prop.configuration !== undefined ? prop.configuration : undefined,
  marketOpen: prop.marketOpen !== undefined ? prop.marketOpen : undefined,
  userId: prop.userId !== undefined ? prop.userId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_ALPACAACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyAlpacaAccount) {
        return response.data.createManyAlpacaAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyAlpacaAccount:', error);
      throw error;
    }
  },

  /**
   * Update a single AlpacaAccount record.
   * @param props - Properties to update.
   * @returns The updated AlpacaAccount or null.
   */
  async update(props: AlpacaAccountType): Promise<AlpacaAccountType> {

    const client = createApolloClient();

      const UPDATE_ONE_ALPACAACCOUNT = gql`
      mutation updateOneAlpacaAccount($data: AlpacaAccountUpdateInput!, $where: AlpacaAccountWhereUniqueInput!) {
        updateOneAlpacaAccount(data: $data, where: $where) {
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
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  APIKey: props.APIKey !== undefined ? {
            set: props.APIKey 
           } : undefined,
  APISecret: props.APISecret !== undefined ? {
            set: props.APISecret 
           } : undefined,
  configuration: props.configuration !== undefined ? {
            set: props.configuration 
           } : undefined,
  marketOpen: props.marketOpen !== undefined ? {
            set: props.marketOpen 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
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
        id: props.user.id !== undefined ? {
            set: props.user.id  
           } : undefined,
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
        currentAccount: props.user.currentAccount !== undefined ? {
            set: props.user.currentAccount  
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
    sessions: props.user.sessions ? {
      upsert: props.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
    authenticators: props.user.authenticators ? {
      upsert: props.user.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
    orders: props.user.orders ? {
      upsert: props.user.orders.map((item: any) => ({
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
    alerts: props.user.alerts ? {
      upsert: props.user.alerts.map((item: any) => ({
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
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        currentAccount: props.user.currentAccount !== undefined ? props.user.currentAccount : undefined,
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
      },
    }
  } : undefined,
  trades: props.trades ? {
    upsert: props.trades.map((item: any) => ({
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
    actions: item.actions ? {
      upsert: item.actions.map((item: any) => ({
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
      create: {
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        price: item.price !== undefined ? item.price : undefined,
        total: item.total !== undefined ? item.total : undefined,
        timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        status: item.status !== undefined ? item.status : undefined,
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
    actions: item.actions ? {
      connectOrCreate: item.actions.map((item: any) => ({
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
          id: item.user.id !== undefined ? {
              set: item.user.id  
             } : undefined,
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
          currentAccount: item.user.currentAccount !== undefined ? {
              set: item.user.currentAccount  
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
          currentAccount: item.user.currentAccount !== undefined ? item.user.currentAccount : undefined,
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
          currentAccount: item.user.currentAccount !== undefined ? item.user.currentAccount : undefined,
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
  positions: props.positions ? {
    upsert: props.positions.map((item: any) => ({
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
  Alert: props.Alert ? {
    upsert: props.Alert.map((item: any) => ({
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
          id: item.user.id !== undefined ? {
              set: item.user.id  
             } : undefined,
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
          currentAccount: item.user.currentAccount !== undefined ? {
              set: item.user.currentAccount  
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
          currentAccount: item.user.currentAccount !== undefined ? item.user.currentAccount : undefined,
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
          currentAccount: item.user.currentAccount !== undefined ? item.user.currentAccount : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
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
      const response = await client.mutate({ mutation: UPDATE_ONE_ALPACAACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneAlpacaAccount) {
        return response.data.updateOneAlpacaAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneAlpacaAccount:', error);
      throw error;
    }
  },

  /**
   * Update multiple AlpacaAccount records.
   * @param props - Array of AlpacaAccount objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: AlpacaAccountType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const UPDATE_MANY_ALPACAACCOUNT = gql`
      mutation updateManyAlpacaAccount($data: [AlpacaAccountCreateManyInput!]!) {
        updateManyAlpacaAccount(data: $data) {
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
  type: prop.type !== undefined ? {
            set: prop.type 
           } : undefined,
  APIKey: prop.APIKey !== undefined ? {
            set: prop.APIKey 
           } : undefined,
  APISecret: prop.APISecret !== undefined ? {
            set: prop.APISecret 
           } : undefined,
  configuration: prop.configuration !== undefined ? {
            set: prop.configuration 
           } : undefined,
  marketOpen: prop.marketOpen !== undefined ? {
            set: prop.marketOpen 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  user: prop.user ? {
    upsert: {
      where: {
        id: prop.user.id !== undefined ? {
            equals: prop.user.id 
           } : undefined,
        name: prop.user.name !== undefined ? {
            equals: prop.user.name 
           } : undefined,
        email: prop.user.email !== undefined ? {
            equals: prop.user.email 
           } : undefined,
      },
      update: {
        id: prop.user.id !== undefined ? {
            set: prop.user.id  
           } : undefined,
        name: prop.user.name !== undefined ? {
            set: prop.user.name  
           } : undefined,
        email: prop.user.email !== undefined ? {
            set: prop.user.email  
           } : undefined,
        emailVerified: prop.user.emailVerified !== undefined ? {
            set: prop.user.emailVerified  
           } : undefined,
        image: prop.user.image !== undefined ? {
            set: prop.user.image  
           } : undefined,
        role: prop.user.role !== undefined ? {
            set: prop.user.role  
           } : undefined,
        bio: prop.user.bio !== undefined ? {
            set: prop.user.bio  
           } : undefined,
        jobTitle: prop.user.jobTitle !== undefined ? {
            set: prop.user.jobTitle  
           } : undefined,
        currentAccount: prop.user.currentAccount !== undefined ? {
            set: prop.user.currentAccount  
           } : undefined,
        plan: prop.user.plan !== undefined ? {
            set: prop.user.plan  
           } : undefined,
    customer: prop.user.customer ? {
      upsert: {
        where: {
          id: prop.user.customer.id !== undefined ? {
              equals: prop.user.customer.id 
             } : undefined,
          name: prop.user.customer.name !== undefined ? {
              equals: prop.user.customer.name 
             } : undefined,
        },
        update: {
          authUserId: prop.user.customer.authUserId !== undefined ? {
              set: prop.user.customer.authUserId  
             } : undefined,
          name: prop.user.customer.name !== undefined ? {
              set: prop.user.customer.name  
             } : undefined,
          plan: prop.user.customer.plan !== undefined ? {
              set: prop.user.customer.plan  
             } : undefined,
          stripeCustomerId: prop.user.customer.stripeCustomerId !== undefined ? {
              set: prop.user.customer.stripeCustomerId  
             } : undefined,
          stripeSubscriptionId: prop.user.customer.stripeSubscriptionId !== undefined ? {
              set: prop.user.customer.stripeSubscriptionId  
             } : undefined,
          stripePriceId: prop.user.customer.stripePriceId !== undefined ? {
              set: prop.user.customer.stripePriceId  
             } : undefined,
          stripeCurrentPeriodEnd: prop.user.customer.stripeCurrentPeriodEnd !== undefined ? {
              set: prop.user.customer.stripeCurrentPeriodEnd  
             } : undefined,
        },
        create: {
          authUserId: prop.user.customer.authUserId !== undefined ? prop.user.customer.authUserId : undefined,
          name: prop.user.customer.name !== undefined ? prop.user.customer.name : undefined,
          plan: prop.user.customer.plan !== undefined ? prop.user.customer.plan : undefined,
          stripeCustomerId: prop.user.customer.stripeCustomerId !== undefined ? prop.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: prop.user.customer.stripeSubscriptionId !== undefined ? prop.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: prop.user.customer.stripePriceId !== undefined ? prop.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: prop.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: prop.user.accounts ? {
      upsert: prop.user.accounts.map((item: any) => ({
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
    sessions: prop.user.sessions ? {
      upsert: prop.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
    authenticators: prop.user.authenticators ? {
      upsert: prop.user.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
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
    orders: prop.user.orders ? {
      upsert: prop.user.orders.map((item: any) => ({
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
    alerts: prop.user.alerts ? {
      upsert: prop.user.alerts.map((item: any) => ({
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
        name: prop.user.name !== undefined ? prop.user.name : undefined,
        email: prop.user.email !== undefined ? prop.user.email : undefined,
        emailVerified: prop.user.emailVerified !== undefined ? prop.user.emailVerified : undefined,
        image: prop.user.image !== undefined ? prop.user.image : undefined,
        role: prop.user.role !== undefined ? prop.user.role : undefined,
        bio: prop.user.bio !== undefined ? prop.user.bio : undefined,
        jobTitle: prop.user.jobTitle !== undefined ? prop.user.jobTitle : undefined,
        currentAccount: prop.user.currentAccount !== undefined ? prop.user.currentAccount : undefined,
        plan: prop.user.plan !== undefined ? prop.user.plan : undefined,
    customer: prop.user.customer ? {
      connectOrCreate: {
        where: {
          id: prop.user.customer.id !== undefined ? prop.user.customer.id : undefined,
          name: prop.user.customer.name !== undefined ? {
              equals: prop.user.customer.name 
             } : undefined,
        },
        create: {
          authUserId: prop.user.customer.authUserId !== undefined ? prop.user.customer.authUserId : undefined,
          name: prop.user.customer.name !== undefined ? prop.user.customer.name : undefined,
          plan: prop.user.customer.plan !== undefined ? prop.user.customer.plan : undefined,
          stripeCustomerId: prop.user.customer.stripeCustomerId !== undefined ? prop.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: prop.user.customer.stripeSubscriptionId !== undefined ? prop.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: prop.user.customer.stripePriceId !== undefined ? prop.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: prop.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: prop.user.accounts ? {
      connectOrCreate: prop.user.accounts.map((item: any) => ({
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
    sessions: prop.user.sessions ? {
      connectOrCreate: prop.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: prop.user.authenticators ? {
      connectOrCreate: prop.user.authenticators.map((item: any) => ({
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
    orders: prop.user.orders ? {
      connectOrCreate: prop.user.orders.map((item: any) => ({
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
    alerts: prop.user.alerts ? {
      connectOrCreate: prop.user.alerts.map((item: any) => ({
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
  trades: prop.trades ? {
    upsert: prop.trades.map((item: any) => ({
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
    actions: item.actions ? {
      upsert: item.actions.map((item: any) => ({
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
      create: {
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        price: item.price !== undefined ? item.price : undefined,
        total: item.total !== undefined ? item.total : undefined,
        timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        status: item.status !== undefined ? item.status : undefined,
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
    actions: item.actions ? {
      connectOrCreate: item.actions.map((item: any) => ({
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
  orders: prop.orders ? {
    upsert: prop.orders.map((item: any) => ({
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
          id: item.user.id !== undefined ? {
              set: item.user.id  
             } : undefined,
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
          currentAccount: item.user.currentAccount !== undefined ? {
              set: item.user.currentAccount  
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
          currentAccount: item.user.currentAccount !== undefined ? item.user.currentAccount : undefined,
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
          currentAccount: item.user.currentAccount !== undefined ? item.user.currentAccount : undefined,
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
  positions: prop.positions ? {
    upsert: prop.positions.map((item: any) => ({
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
  Alert: prop.Alert ? {
    upsert: prop.Alert.map((item: any) => ({
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
          id: item.user.id !== undefined ? {
              set: item.user.id  
             } : undefined,
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
          currentAccount: item.user.currentAccount !== undefined ? {
              set: item.user.currentAccount  
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
          currentAccount: item.user.currentAccount !== undefined ? item.user.currentAccount : undefined,
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
          currentAccount: item.user.currentAccount !== undefined ? item.user.currentAccount : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_ALPACAACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyAlpacaAccount) {
        return response.data.updateManyAlpacaAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyAlpacaAccount:', error);
      throw error;
    }
  },

  /**
   * Delete a single AlpacaAccount record.
   * @param props - Properties to update.
   * @returns The deleted AlpacaAccount or null.
   */
  async delete(props: AlpacaAccountType): Promise<AlpacaAccountType> {

    const client = createApolloClient();

      const DELETE_ONE_ALPACAACCOUNT = gql`
      mutation deleteOneAlpacaAccount($where: AlpacaAccountWhereUniqueInput!) {
        deleteOneAlpacaAccount(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_ALPACAACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneAlpacaAccount) {
        return response.data.deleteOneAlpacaAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneAlpacaAccount:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single AlpacaAccount record by ID.
   * @param props - Properties to update.
   * @returns The retrieved AlpacaAccount or null.
   */
  async get(props: AlpacaAccountType): Promise<AlpacaAccountType | null> {

    const client = createApolloClient();

      const GET_ALPACAACCOUNT = gql`
      query getAlpacaAccount($where: AlpacaAccountWhereUniqueInput!) {
        getAlpacaAccount(where: $where) {
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
      const response = await client.query({ query: GET_ALPACAACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getAlpacaAccount ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No AlpacaAccount found') {
        return null;
      } else {
        console.error('Error in getAlpacaAccount:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all AlpacaAccounts records.
   * @returns An array of AlpacaAccount records or null.
   */
  async getAll(): Promise<AlpacaAccountType[] | null> {

    const client = createApolloClient();

      const GET_ALL_ALPACAACCOUNT = gql`
      query getAllAlpacaAccount {
        alpacaAccounts {
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
          }
      }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_ALPACAACCOUNT });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.alpacaAccounts ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No AlpacaAccount found') {
        return null;
      } else {
        console.error('Error in getAlpacaAccount:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple AlpacaAccount records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found AlpacaAccount records or null.
   */
  async findMany(props: AlpacaAccountType): Promise<AlpacaAccountType[] | null> {

    const client = createApolloClient();

      const FIND_MANY_ALPACAACCOUNT = gql`
      query findManyAlpacaAccount($where: AlpacaAccountWhereInput!) {
        alpacaAccounts(where: $where) {
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
      const response = await client.query({ query: FIND_MANY_ALPACAACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.AlpacaAccounts) {
        return response.data.alpacaAccounts;
      } else {
       return [] as AlpacaAccountType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No AlpacaAccount found') {
        return null;
      } else {
        console.error('Error in getAlpacaAccount:', error);
        throw error;
      }
    }
  }
};
