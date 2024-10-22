

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
          qty
          price
          total
          signal
          strategy
          analysis
          confidence
          timestamp
          createdAt
          updatedAt
          status
          alpacaAccount {
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
              alpacaAccountId
              assetId
              qty
              notional
              side
              type
              timeInForce
              limitPrice
              stopPrice
              trailPrice
              trailPercent
              extendedHours
              clientOrderId
              status
              createdAt
              updatedAt
              submittedAt
              filledAt
              filledAvgPrice
              actionId
              alpacaAccount {
                id
              }
              action {
                id
                sequence
                tradeId
                type
                note
                status
                fee
                trade {
                  id
                }
                order {
                  id
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
                sellPrice
                buyPrice
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
              fee
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
              alpacaAccount {
                id
              }
              alpacaAccountId
            }
            alerts {
              id
              alpacaAccountId
              message
              type
              isRead
              createdAt
              updatedAt
              alpacaAccount {
                id
              }
            }
          }
          asset {
            id
          }
          optionContractType
          actions {
            id
          }
        }
      }
   `;

    const variables = {
      data: {
        qty: props.qty !== undefined ? props.qty : undefined,
        price: props.price !== undefined ? props.price : undefined,
        total: props.total !== undefined ? props.total : undefined,
        signal: props.signal !== undefined ? props.signal : undefined,
        strategy: props.strategy !== undefined ? props.strategy : undefined,
        analysis: props.analysis !== undefined ? props.analysis : undefined,
        confidence: props.confidence !== undefined ? props.confidence : undefined,
        timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
        status: props.status !== undefined ? props.status : undefined,
        optionContractType: props.optionContractType !== undefined ? props.optionContractType : undefined,
        alpacaAccount: props.alpacaAccount ?
          typeof props.alpacaAccount === 'object' && Object.keys(props.alpacaAccount).length === 1 && Object.keys(props.alpacaAccount)[0] === 'id'
            ? {
              connect: {
                id: props.alpacaAccount.id
              }
            }
            : {
              connectOrCreate: {
                where: {
                  id: props.alpacaAccount.id !== undefined ? props.alpacaAccount.id : undefined,
                },
                create: {
                  type: props.alpacaAccount.type !== undefined ? props.alpacaAccount.type : undefined,
                  APIKey: props.alpacaAccount.APIKey !== undefined ? props.alpacaAccount.APIKey : undefined,
                  APISecret: props.alpacaAccount.APISecret !== undefined ? props.alpacaAccount.APISecret : undefined,
                  configuration: props.alpacaAccount.configuration !== undefined ? props.alpacaAccount.configuration : undefined,
                  marketOpen: props.alpacaAccount.marketOpen !== undefined ? props.alpacaAccount.marketOpen : undefined,
                  user: props.alpacaAccount.user ?
                    typeof props.alpacaAccount.user === 'object' && Object.keys(props.alpacaAccount.user).length === 1 && Object.keys(props.alpacaAccount.user)[0] === 'id'
                      ? {
                        connect: {
                          id: props.alpacaAccount.user.id
                        }
                      }
                      : {
                        connectOrCreate: {
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
                          },
                        }
                      } : undefined,
                  orders: props.alpacaAccount.orders ?
                    Array.isArray(props.alpacaAccount.orders) && props.alpacaAccount.orders.length > 0
                      ? props.alpacaAccount.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                        connect: props.alpacaAccount.orders.map((item: any) => ({
                          id: item.id
                        }))
                      }
                      : {
                        connectOrCreate: props.alpacaAccount.orders.map((item: any) => ({
                          where: {
                            id: item.id !== undefined ? item.id : undefined,
                          },
                          create: {
                            qty: item.qty !== undefined ? item.qty : undefined,
                            notional: item.notional !== undefined ? item.notional : undefined,
                            side: item.side !== undefined ? item.side : undefined,
                            type: item.type !== undefined ? item.type : undefined,
                            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
                            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
                            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
                            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
                            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
                            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
                            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
                            status: item.status !== undefined ? item.status : undefined,
                            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
                            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
                            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
                            fee: item.fee !== undefined ? item.fee : undefined,
                          },
                        }))
                      } : undefined,
                  positions: props.alpacaAccount.positions ?
                    Array.isArray(props.alpacaAccount.positions) && props.alpacaAccount.positions.length > 0
                      ? props.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                        connect: props.alpacaAccount.positions.map((item: any) => ({
                          id: item.id
                        }))
                      }
                      : {
                        connectOrCreate: props.alpacaAccount.positions.map((item: any) => ({
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
                  alerts: props.alpacaAccount.alerts ?
                    Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0
                      ? props.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                        connect: props.alpacaAccount.alerts.map((item: any) => ({
                          id: item.id
                        }))
                      }
                      : {
                        connectOrCreate: props.alpacaAccount.alerts.map((item: any) => ({
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
        asset: props.asset ?
          typeof props.asset === 'object' && Object.keys(props.asset).length === 1 && Object.keys(props.asset)[0] === 'id'
            ? {
              connect: {
                id: props.asset.id
              }
            }
            : {
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
                  sellPrice: props.asset.sellPrice !== undefined ? props.asset.sellPrice : undefined,
                  buyPrice: props.asset.buyPrice !== undefined ? props.asset.buyPrice : undefined,
                  orders: props.asset.orders ?
                    Array.isArray(props.asset.orders) && props.asset.orders.length > 0
                      ? props.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                        connect: props.asset.orders.map((item: any) => ({
                          id: item.id
                        }))
                      }
                      : {
                        connectOrCreate: props.asset.orders.map((item: any) => ({
                          where: {
                            id: item.id !== undefined ? item.id : undefined,
                          },
                          create: {
                            qty: item.qty !== undefined ? item.qty : undefined,
                            notional: item.notional !== undefined ? item.notional : undefined,
                            side: item.side !== undefined ? item.side : undefined,
                            type: item.type !== undefined ? item.type : undefined,
                            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
                            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
                            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
                            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
                            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
                            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
                            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
                            status: item.status !== undefined ? item.status : undefined,
                            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
                            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
                            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
                            fee: item.fee !== undefined ? item.fee : undefined,
                          },
                        }))
                      } : undefined,
                  positions: props.asset.positions ?
                    Array.isArray(props.asset.positions) && props.asset.positions.length > 0
                      ? props.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                        connect: props.asset.positions.map((item: any) => ({
                          id: item.id
                        }))
                      }
                      : {
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
                  newsMentions: props.asset.newsMentions ?
                    Array.isArray(props.asset.newsMentions) && props.asset.newsMentions.length > 0
                      ? props.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                        connect: props.asset.newsMentions.map((item: any) => ({
                          id: item.id
                        }))
                      }
                      : {
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
        actions: props.actions ?
          Array.isArray(props.actions) && props.actions.length > 0
            ? props.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
              connect: props.actions.map((item: any) => ({
                id: item.id
              }))
            }
            : {
              connectOrCreate: props.actions.map((item: any) => ({
                where: {
                  id: item.id !== undefined ? item.id : undefined,
                },
                create: {
                  sequence: item.sequence !== undefined ? item.sequence : undefined,
                  type: item.type !== undefined ? item.type : undefined,
                  note: item.note !== undefined ? item.note : undefined,
                  status: item.status !== undefined ? item.status : undefined,
                  fee: item.fee !== undefined ? item.fee : undefined,
                  order: item.order ?
                    typeof item.order === 'object' && Object.keys(item.order).length === 1 && Object.keys(item.order)[0] === 'id'
                      ? {
                        connect: {
                          id: item.order.id
                        }
                      }
                      : {
                        connectOrCreate: {
                          where: {
                            id: item.order.id !== undefined ? item.order.id : undefined,
                          },
                          create: {
                            qty: item.order.qty !== undefined ? item.order.qty : undefined,
                            notional: item.order.notional !== undefined ? item.order.notional : undefined,
                            side: item.order.side !== undefined ? item.order.side : undefined,
                            type: item.order.type !== undefined ? item.order.type : undefined,
                            timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
                            limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
                            stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
                            trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
                            trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
                            extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
                            clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
                            status: item.order.status !== undefined ? item.order.status : undefined,
                            submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
                            filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
                            filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
                            fee: item.order.fee !== undefined ? item.order.fee : undefined,
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
        qty: prop.qty !== undefined ? prop.qty : undefined,
        price: prop.price !== undefined ? prop.price : undefined,
        total: prop.total !== undefined ? prop.total : undefined,
        signal: prop.signal !== undefined ? prop.signal : undefined,
        strategy: prop.strategy !== undefined ? prop.strategy : undefined,
        analysis: prop.analysis !== undefined ? prop.analysis : undefined,
        confidence: prop.confidence !== undefined ? prop.confidence : undefined,
        timestamp: prop.timestamp !== undefined ? prop.timestamp : undefined,
        status: prop.status !== undefined ? prop.status : undefined,
        optionContractType: prop.optionContractType !== undefined ? prop.optionContractType : undefined,
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
          qty
          price
          total
          signal
          strategy
          analysis
          confidence
          timestamp
          createdAt
          updatedAt
          status
          alpacaAccount {
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
              alpacaAccountId
              assetId
              qty
              notional
              side
              type
              timeInForce
              limitPrice
              stopPrice
              trailPrice
              trailPercent
              extendedHours
              clientOrderId
              status
              createdAt
              updatedAt
              submittedAt
              filledAt
              filledAvgPrice
              actionId
              alpacaAccount {
                id
              }
              action {
                id
                sequence
                tradeId
                type
                note
                status
                fee
                trade {
                  id
                }
                order {
                  id
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
                sellPrice
                buyPrice
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
              fee
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
              alpacaAccount {
                id
              }
              alpacaAccountId
            }
            alerts {
              id
              alpacaAccountId
              message
              type
              isRead
              createdAt
              updatedAt
              alpacaAccount {
                id
              }
            }
          }
          asset {
            id
          }
          optionContractType
          actions {
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
        qty: props.qty !== undefined ? {
          set: props.qty
        } : undefined,
        price: props.price !== undefined ? {
          set: props.price
        } : undefined,
        total: props.total !== undefined ? {
          set: props.total
        } : undefined,
        signal: props.signal !== undefined ? {
          set: props.signal
        } : undefined,
        strategy: props.strategy !== undefined ? {
          set: props.strategy
        } : undefined,
        analysis: props.analysis !== undefined ? {
          set: props.analysis
        } : undefined,
        confidence: props.confidence !== undefined ? {
          set: props.confidence
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
        optionContractType: props.optionContractType !== undefined ? {
          set: props.optionContractType
        } : undefined,
        alpacaAccount: props.alpacaAccount ? {
          upsert: {
            where: {
              id: props.alpacaAccount.id !== undefined ? {
                equals: props.alpacaAccount.id
              } : undefined,
            },
            update: {
              id: props.alpacaAccount.id !== undefined ? {
                set: props.alpacaAccount.id
              } : undefined,
              type: props.alpacaAccount.type !== undefined ? {
                set: props.alpacaAccount.type
              } : undefined,
              APIKey: props.alpacaAccount.APIKey !== undefined ? {
                set: props.alpacaAccount.APIKey
              } : undefined,
              APISecret: props.alpacaAccount.APISecret !== undefined ? {
                set: props.alpacaAccount.APISecret
              } : undefined,
              configuration: props.alpacaAccount.configuration !== undefined ? {
                set: props.alpacaAccount.configuration
              } : undefined,
              marketOpen: props.alpacaAccount.marketOpen !== undefined ? {
                set: props.alpacaAccount.marketOpen
              } : undefined,
              user: props.alpacaAccount.user ? {
                upsert: {
                  where: {
                    id: props.alpacaAccount.user.id !== undefined ? {
                      equals: props.alpacaAccount.user.id
                    } : undefined,
                    name: props.alpacaAccount.user.name !== undefined ? {
                      equals: props.alpacaAccount.user.name
                    } : undefined,
                    email: props.alpacaAccount.user.email !== undefined ? {
                      equals: props.alpacaAccount.user.email
                    } : undefined,
                  },
                  update: {
                    id: props.alpacaAccount.user.id !== undefined ? {
                      set: props.alpacaAccount.user.id
                    } : undefined,
                    name: props.alpacaAccount.user.name !== undefined ? {
                      set: props.alpacaAccount.user.name
                    } : undefined,
                    email: props.alpacaAccount.user.email !== undefined ? {
                      set: props.alpacaAccount.user.email
                    } : undefined,
                    emailVerified: props.alpacaAccount.user.emailVerified !== undefined ? {
                      set: props.alpacaAccount.user.emailVerified
                    } : undefined,
                    image: props.alpacaAccount.user.image !== undefined ? {
                      set: props.alpacaAccount.user.image
                    } : undefined,
                    role: props.alpacaAccount.user.role !== undefined ? {
                      set: props.alpacaAccount.user.role
                    } : undefined,
                    bio: props.alpacaAccount.user.bio !== undefined ? {
                      set: props.alpacaAccount.user.bio
                    } : undefined,
                    jobTitle: props.alpacaAccount.user.jobTitle !== undefined ? {
                      set: props.alpacaAccount.user.jobTitle
                    } : undefined,
                    currentAccount: props.alpacaAccount.user.currentAccount !== undefined ? {
                      set: props.alpacaAccount.user.currentAccount
                    } : undefined,
                    plan: props.alpacaAccount.user.plan !== undefined ? {
                      set: props.alpacaAccount.user.plan
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
                  },
                }
              } : undefined,
              orders: props.alpacaAccount.orders ? {
                upsert: props.alpacaAccount.orders.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  update: {
                    id: item.id !== undefined ? {
                      set: item.id
                    } : undefined,
                    qty: item.qty !== undefined ? {
                      set: item.qty
                    } : undefined,
                    notional: item.notional !== undefined ? {
                      set: item.notional
                    } : undefined,
                    side: item.side !== undefined ? {
                      set: item.side
                    } : undefined,
                    type: item.type !== undefined ? {
                      set: item.type
                    } : undefined,
                    timeInForce: item.timeInForce !== undefined ? {
                      set: item.timeInForce
                    } : undefined,
                    limitPrice: item.limitPrice !== undefined ? {
                      set: item.limitPrice
                    } : undefined,
                    stopPrice: item.stopPrice !== undefined ? {
                      set: item.stopPrice
                    } : undefined,
                    trailPrice: item.trailPrice !== undefined ? {
                      set: item.trailPrice
                    } : undefined,
                    trailPercent: item.trailPercent !== undefined ? {
                      set: item.trailPercent
                    } : undefined,
                    extendedHours: item.extendedHours !== undefined ? {
                      set: item.extendedHours
                    } : undefined,
                    clientOrderId: item.clientOrderId !== undefined ? {
                      set: item.clientOrderId
                    } : undefined,
                    status: item.status !== undefined ? {
                      set: item.status
                    } : undefined,
                    submittedAt: item.submittedAt !== undefined ? {
                      set: item.submittedAt
                    } : undefined,
                    filledAt: item.filledAt !== undefined ? {
                      set: item.filledAt
                    } : undefined,
                    filledAvgPrice: item.filledAvgPrice !== undefined ? {
                      set: item.filledAvgPrice
                    } : undefined,
                    fee: item.fee !== undefined ? {
                      set: item.fee
                    } : undefined,
                  },
                  create: {
                    qty: item.qty !== undefined ? item.qty : undefined,
                    notional: item.notional !== undefined ? item.notional : undefined,
                    side: item.side !== undefined ? item.side : undefined,
                    type: item.type !== undefined ? item.type : undefined,
                    timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
                    limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
                    stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
                    trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
                    trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
                    extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
                    clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
                    status: item.status !== undefined ? item.status : undefined,
                    submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
                    filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
                    filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
                    fee: item.fee !== undefined ? item.fee : undefined,
                  },
                }))
              } : undefined,
              positions: props.alpacaAccount.positions ? {
                upsert: props.alpacaAccount.positions.map((item: any) => ({
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
              alerts: props.alpacaAccount.alerts ? {
                upsert: props.alpacaAccount.alerts.map((item: any) => ({
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
              type: props.alpacaAccount.type !== undefined ? props.alpacaAccount.type : undefined,
              APIKey: props.alpacaAccount.APIKey !== undefined ? props.alpacaAccount.APIKey : undefined,
              APISecret: props.alpacaAccount.APISecret !== undefined ? props.alpacaAccount.APISecret : undefined,
              configuration: props.alpacaAccount.configuration !== undefined ? props.alpacaAccount.configuration : undefined,
              marketOpen: props.alpacaAccount.marketOpen !== undefined ? props.alpacaAccount.marketOpen : undefined,
              user: props.alpacaAccount.user ?
                typeof props.alpacaAccount.user === 'object' && Object.keys(props.alpacaAccount.user).length === 1 && Object.keys(props.alpacaAccount.user)[0] === 'id'
                  ? {
                    connect: {
                      id: props.alpacaAccount.user.id
                    }
                  }
                  : {
                    connectOrCreate: {
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
                      },
                    }
                  } : undefined,
              orders: props.alpacaAccount.orders ?
                Array.isArray(props.alpacaAccount.orders) && props.alpacaAccount.orders.length > 0
                  ? props.alpacaAccount.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                    connect: props.alpacaAccount.orders.map((item: any) => ({
                      id: item.id
                    }))
                  }
                  : {
                    connectOrCreate: props.alpacaAccount.orders.map((item: any) => ({
                      where: {
                        id: item.id !== undefined ? item.id : undefined,
                      },
                      create: {
                        qty: item.qty !== undefined ? item.qty : undefined,
                        notional: item.notional !== undefined ? item.notional : undefined,
                        side: item.side !== undefined ? item.side : undefined,
                        type: item.type !== undefined ? item.type : undefined,
                        timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
                        limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
                        stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
                        trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
                        trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
                        extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
                        clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
                        status: item.status !== undefined ? item.status : undefined,
                        submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
                        filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
                        filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
                        fee: item.fee !== undefined ? item.fee : undefined,
                      },
                    }))
                  } : undefined,
              positions: props.alpacaAccount.positions ?
                Array.isArray(props.alpacaAccount.positions) && props.alpacaAccount.positions.length > 0
                  ? props.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                    connect: props.alpacaAccount.positions.map((item: any) => ({
                      id: item.id
                    }))
                  }
                  : {
                    connectOrCreate: props.alpacaAccount.positions.map((item: any) => ({
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
              alerts: props.alpacaAccount.alerts ?
                Array.isArray(props.alpacaAccount.alerts) && props.alpacaAccount.alerts.length > 0
                  ? props.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                    connect: props.alpacaAccount.alerts.map((item: any) => ({
                      id: item.id
                    }))
                  }
                  : {
                    connectOrCreate: props.alpacaAccount.alerts.map((item: any) => ({
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
              sellPrice: props.asset.sellPrice !== undefined ? {
                set: props.asset.sellPrice
              } : undefined,
              buyPrice: props.asset.buyPrice !== undefined ? {
                set: props.asset.buyPrice
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
                    qty: item.qty !== undefined ? {
                      set: item.qty
                    } : undefined,
                    notional: item.notional !== undefined ? {
                      set: item.notional
                    } : undefined,
                    side: item.side !== undefined ? {
                      set: item.side
                    } : undefined,
                    type: item.type !== undefined ? {
                      set: item.type
                    } : undefined,
                    timeInForce: item.timeInForce !== undefined ? {
                      set: item.timeInForce
                    } : undefined,
                    limitPrice: item.limitPrice !== undefined ? {
                      set: item.limitPrice
                    } : undefined,
                    stopPrice: item.stopPrice !== undefined ? {
                      set: item.stopPrice
                    } : undefined,
                    trailPrice: item.trailPrice !== undefined ? {
                      set: item.trailPrice
                    } : undefined,
                    trailPercent: item.trailPercent !== undefined ? {
                      set: item.trailPercent
                    } : undefined,
                    extendedHours: item.extendedHours !== undefined ? {
                      set: item.extendedHours
                    } : undefined,
                    clientOrderId: item.clientOrderId !== undefined ? {
                      set: item.clientOrderId
                    } : undefined,
                    status: item.status !== undefined ? {
                      set: item.status
                    } : undefined,
                    submittedAt: item.submittedAt !== undefined ? {
                      set: item.submittedAt
                    } : undefined,
                    filledAt: item.filledAt !== undefined ? {
                      set: item.filledAt
                    } : undefined,
                    filledAvgPrice: item.filledAvgPrice !== undefined ? {
                      set: item.filledAvgPrice
                    } : undefined,
                    fee: item.fee !== undefined ? {
                      set: item.fee
                    } : undefined,
                  },
                  create: {
                    qty: item.qty !== undefined ? item.qty : undefined,
                    notional: item.notional !== undefined ? item.notional : undefined,
                    side: item.side !== undefined ? item.side : undefined,
                    type: item.type !== undefined ? item.type : undefined,
                    timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
                    limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
                    stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
                    trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
                    trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
                    extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
                    clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
                    status: item.status !== undefined ? item.status : undefined,
                    submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
                    filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
                    filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
                    fee: item.fee !== undefined ? item.fee : undefined,
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
              sellPrice: props.asset.sellPrice !== undefined ? props.asset.sellPrice : undefined,
              buyPrice: props.asset.buyPrice !== undefined ? props.asset.buyPrice : undefined,
              orders: props.asset.orders ?
                Array.isArray(props.asset.orders) && props.asset.orders.length > 0
                  ? props.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                    connect: props.asset.orders.map((item: any) => ({
                      id: item.id
                    }))
                  }
                  : {
                    connectOrCreate: props.asset.orders.map((item: any) => ({
                      where: {
                        id: item.id !== undefined ? item.id : undefined,
                      },
                      create: {
                        qty: item.qty !== undefined ? item.qty : undefined,
                        notional: item.notional !== undefined ? item.notional : undefined,
                        side: item.side !== undefined ? item.side : undefined,
                        type: item.type !== undefined ? item.type : undefined,
                        timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
                        limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
                        stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
                        trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
                        trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
                        extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
                        clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
                        status: item.status !== undefined ? item.status : undefined,
                        submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
                        filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
                        filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
                        fee: item.fee !== undefined ? item.fee : undefined,
                      },
                    }))
                  } : undefined,
              positions: props.asset.positions ?
                Array.isArray(props.asset.positions) && props.asset.positions.length > 0
                  ? props.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                    connect: props.asset.positions.map((item: any) => ({
                      id: item.id
                    }))
                  }
                  : {
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
              newsMentions: props.asset.newsMentions ?
                Array.isArray(props.asset.newsMentions) && props.asset.newsMentions.length > 0
                  ? props.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                    connect: props.asset.newsMentions.map((item: any) => ({
                      id: item.id
                    }))
                  }
                  : {
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
              type: item.type !== undefined ? {
                set: item.type
              } : undefined,
              note: item.note !== undefined ? {
                set: item.note
              } : undefined,
              status: item.status !== undefined ? {
                set: item.status
              } : undefined,
              fee: item.fee !== undefined ? {
                set: item.fee
              } : undefined,
              order: item.order ? {
                upsert: {
                  where: {
                    id: item.order.id !== undefined ? {
                      equals: item.order.id
                    } : undefined,
                  },
                  update: {
                    id: item.order.id !== undefined ? {
                      set: item.order.id
                    } : undefined,
                    qty: item.order.qty !== undefined ? {
                      set: item.order.qty
                    } : undefined,
                    notional: item.order.notional !== undefined ? {
                      set: item.order.notional
                    } : undefined,
                    side: item.order.side !== undefined ? {
                      set: item.order.side
                    } : undefined,
                    type: item.order.type !== undefined ? {
                      set: item.order.type
                    } : undefined,
                    timeInForce: item.order.timeInForce !== undefined ? {
                      set: item.order.timeInForce
                    } : undefined,
                    limitPrice: item.order.limitPrice !== undefined ? {
                      set: item.order.limitPrice
                    } : undefined,
                    stopPrice: item.order.stopPrice !== undefined ? {
                      set: item.order.stopPrice
                    } : undefined,
                    trailPrice: item.order.trailPrice !== undefined ? {
                      set: item.order.trailPrice
                    } : undefined,
                    trailPercent: item.order.trailPercent !== undefined ? {
                      set: item.order.trailPercent
                    } : undefined,
                    extendedHours: item.order.extendedHours !== undefined ? {
                      set: item.order.extendedHours
                    } : undefined,
                    clientOrderId: item.order.clientOrderId !== undefined ? {
                      set: item.order.clientOrderId
                    } : undefined,
                    status: item.order.status !== undefined ? {
                      set: item.order.status
                    } : undefined,
                    submittedAt: item.order.submittedAt !== undefined ? {
                      set: item.order.submittedAt
                    } : undefined,
                    filledAt: item.order.filledAt !== undefined ? {
                      set: item.order.filledAt
                    } : undefined,
                    filledAvgPrice: item.order.filledAvgPrice !== undefined ? {
                      set: item.order.filledAvgPrice
                    } : undefined,
                    fee: item.order.fee !== undefined ? {
                      set: item.order.fee
                    } : undefined,
                  },
                  create: {
                    qty: item.order.qty !== undefined ? item.order.qty : undefined,
                    notional: item.order.notional !== undefined ? item.order.notional : undefined,
                    side: item.order.side !== undefined ? item.order.side : undefined,
                    type: item.order.type !== undefined ? item.order.type : undefined,
                    timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
                    limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
                    stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
                    trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
                    trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
                    extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
                    clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
                    status: item.order.status !== undefined ? item.order.status : undefined,
                    submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
                    filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
                    filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
                    fee: item.order.fee !== undefined ? item.order.fee : undefined,
                  },
                }
              } : undefined,
            },
            create: {
              sequence: item.sequence !== undefined ? item.sequence : undefined,
              type: item.type !== undefined ? item.type : undefined,
              note: item.note !== undefined ? item.note : undefined,
              status: item.status !== undefined ? item.status : undefined,
              fee: item.fee !== undefined ? item.fee : undefined,
              order: item.order ?
                typeof item.order === 'object' && Object.keys(item.order).length === 1 && Object.keys(item.order)[0] === 'id'
                  ? {
                    connect: {
                      id: item.order.id
                    }
                  }
                  : {
                    connectOrCreate: {
                      where: {
                        id: item.order.id !== undefined ? item.order.id : undefined,
                      },
                      create: {
                        qty: item.order.qty !== undefined ? item.order.qty : undefined,
                        notional: item.order.notional !== undefined ? item.order.notional : undefined,
                        side: item.order.side !== undefined ? item.order.side : undefined,
                        type: item.order.type !== undefined ? item.order.type : undefined,
                        timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
                        limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
                        stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
                        trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
                        trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
                        extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
                        clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
                        status: item.order.status !== undefined ? item.order.status : undefined,
                        submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
                        filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
                        filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
                        fee: item.order.fee !== undefined ? item.order.fee : undefined,
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
        qty: prop.qty !== undefined ? {
          set: prop.qty
        } : undefined,
        price: prop.price !== undefined ? {
          set: prop.price
        } : undefined,
        total: prop.total !== undefined ? {
          set: prop.total
        } : undefined,
        signal: prop.signal !== undefined ? {
          set: prop.signal
        } : undefined,
        strategy: prop.strategy !== undefined ? {
          set: prop.strategy
        } : undefined,
        analysis: prop.analysis !== undefined ? {
          set: prop.analysis
        } : undefined,
        confidence: prop.confidence !== undefined ? {
          set: prop.confidence
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
        optionContractType: prop.optionContractType !== undefined ? {
          set: prop.optionContractType
        } : undefined,
        alpacaAccount: prop.alpacaAccount ? {
          upsert: {
            where: {
              id: prop.alpacaAccount.id !== undefined ? {
                equals: prop.alpacaAccount.id
              } : undefined,
            },
            update: {
              id: prop.alpacaAccount.id !== undefined ? {
                set: prop.alpacaAccount.id
              } : undefined,
              type: prop.alpacaAccount.type !== undefined ? {
                set: prop.alpacaAccount.type
              } : undefined,
              APIKey: prop.alpacaAccount.APIKey !== undefined ? {
                set: prop.alpacaAccount.APIKey
              } : undefined,
              APISecret: prop.alpacaAccount.APISecret !== undefined ? {
                set: prop.alpacaAccount.APISecret
              } : undefined,
              configuration: prop.alpacaAccount.configuration !== undefined ? {
                set: prop.alpacaAccount.configuration
              } : undefined,
              marketOpen: prop.alpacaAccount.marketOpen !== undefined ? {
                set: prop.alpacaAccount.marketOpen
              } : undefined,
              user: prop.alpacaAccount.user ? {
                upsert: {
                  where: {
                    id: prop.alpacaAccount.user.id !== undefined ? {
                      equals: prop.alpacaAccount.user.id
                    } : undefined,
                    name: prop.alpacaAccount.user.name !== undefined ? {
                      equals: prop.alpacaAccount.user.name
                    } : undefined,
                    email: prop.alpacaAccount.user.email !== undefined ? {
                      equals: prop.alpacaAccount.user.email
                    } : undefined,
                  },
                  update: {
                    id: prop.alpacaAccount.user.id !== undefined ? {
                      set: prop.alpacaAccount.user.id
                    } : undefined,
                    name: prop.alpacaAccount.user.name !== undefined ? {
                      set: prop.alpacaAccount.user.name
                    } : undefined,
                    email: prop.alpacaAccount.user.email !== undefined ? {
                      set: prop.alpacaAccount.user.email
                    } : undefined,
                    emailVerified: prop.alpacaAccount.user.emailVerified !== undefined ? {
                      set: prop.alpacaAccount.user.emailVerified
                    } : undefined,
                    image: prop.alpacaAccount.user.image !== undefined ? {
                      set: prop.alpacaAccount.user.image
                    } : undefined,
                    role: prop.alpacaAccount.user.role !== undefined ? {
                      set: prop.alpacaAccount.user.role
                    } : undefined,
                    bio: prop.alpacaAccount.user.bio !== undefined ? {
                      set: prop.alpacaAccount.user.bio
                    } : undefined,
                    jobTitle: prop.alpacaAccount.user.jobTitle !== undefined ? {
                      set: prop.alpacaAccount.user.jobTitle
                    } : undefined,
                    currentAccount: prop.alpacaAccount.user.currentAccount !== undefined ? {
                      set: prop.alpacaAccount.user.currentAccount
                    } : undefined,
                    plan: prop.alpacaAccount.user.plan !== undefined ? {
                      set: prop.alpacaAccount.user.plan
                    } : undefined,
                  },
                  create: {
                    name: prop.alpacaAccount.user.name !== undefined ? prop.alpacaAccount.user.name : undefined,
                    email: prop.alpacaAccount.user.email !== undefined ? prop.alpacaAccount.user.email : undefined,
                    emailVerified: prop.alpacaAccount.user.emailVerified !== undefined ? prop.alpacaAccount.user.emailVerified : undefined,
                    image: prop.alpacaAccount.user.image !== undefined ? prop.alpacaAccount.user.image : undefined,
                    role: prop.alpacaAccount.user.role !== undefined ? prop.alpacaAccount.user.role : undefined,
                    bio: prop.alpacaAccount.user.bio !== undefined ? prop.alpacaAccount.user.bio : undefined,
                    jobTitle: prop.alpacaAccount.user.jobTitle !== undefined ? prop.alpacaAccount.user.jobTitle : undefined,
                    currentAccount: prop.alpacaAccount.user.currentAccount !== undefined ? prop.alpacaAccount.user.currentAccount : undefined,
                    plan: prop.alpacaAccount.user.plan !== undefined ? prop.alpacaAccount.user.plan : undefined,
                  },
                }
              } : undefined,
              orders: prop.alpacaAccount.orders ? {
                upsert: prop.alpacaAccount.orders.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  update: {
                    id: item.id !== undefined ? {
                      set: item.id
                    } : undefined,
                    qty: item.qty !== undefined ? {
                      set: item.qty
                    } : undefined,
                    notional: item.notional !== undefined ? {
                      set: item.notional
                    } : undefined,
                    side: item.side !== undefined ? {
                      set: item.side
                    } : undefined,
                    type: item.type !== undefined ? {
                      set: item.type
                    } : undefined,
                    timeInForce: item.timeInForce !== undefined ? {
                      set: item.timeInForce
                    } : undefined,
                    limitPrice: item.limitPrice !== undefined ? {
                      set: item.limitPrice
                    } : undefined,
                    stopPrice: item.stopPrice !== undefined ? {
                      set: item.stopPrice
                    } : undefined,
                    trailPrice: item.trailPrice !== undefined ? {
                      set: item.trailPrice
                    } : undefined,
                    trailPercent: item.trailPercent !== undefined ? {
                      set: item.trailPercent
                    } : undefined,
                    extendedHours: item.extendedHours !== undefined ? {
                      set: item.extendedHours
                    } : undefined,
                    clientOrderId: item.clientOrderId !== undefined ? {
                      set: item.clientOrderId
                    } : undefined,
                    status: item.status !== undefined ? {
                      set: item.status
                    } : undefined,
                    submittedAt: item.submittedAt !== undefined ? {
                      set: item.submittedAt
                    } : undefined,
                    filledAt: item.filledAt !== undefined ? {
                      set: item.filledAt
                    } : undefined,
                    filledAvgPrice: item.filledAvgPrice !== undefined ? {
                      set: item.filledAvgPrice
                    } : undefined,
                    fee: item.fee !== undefined ? {
                      set: item.fee
                    } : undefined,
                  },
                  create: {
                    qty: item.qty !== undefined ? item.qty : undefined,
                    notional: item.notional !== undefined ? item.notional : undefined,
                    side: item.side !== undefined ? item.side : undefined,
                    type: item.type !== undefined ? item.type : undefined,
                    timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
                    limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
                    stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
                    trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
                    trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
                    extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
                    clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
                    status: item.status !== undefined ? item.status : undefined,
                    submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
                    filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
                    filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
                    fee: item.fee !== undefined ? item.fee : undefined,
                  },
                }))
              } : undefined,
              positions: prop.alpacaAccount.positions ? {
                upsert: prop.alpacaAccount.positions.map((item: any) => ({
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
              alerts: prop.alpacaAccount.alerts ? {
                upsert: prop.alpacaAccount.alerts.map((item: any) => ({
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
              type: prop.alpacaAccount.type !== undefined ? prop.alpacaAccount.type : undefined,
              APIKey: prop.alpacaAccount.APIKey !== undefined ? prop.alpacaAccount.APIKey : undefined,
              APISecret: prop.alpacaAccount.APISecret !== undefined ? prop.alpacaAccount.APISecret : undefined,
              configuration: prop.alpacaAccount.configuration !== undefined ? prop.alpacaAccount.configuration : undefined,
              marketOpen: prop.alpacaAccount.marketOpen !== undefined ? prop.alpacaAccount.marketOpen : undefined,
              user: prop.alpacaAccount.user ?
                typeof prop.alpacaAccount.user === 'object' && Object.keys(prop.alpacaAccount.user).length === 1 && Object.keys(prop.alpacaAccount.user)[0] === 'id'
                  ? {
                    connect: {
                      id: prop.alpacaAccount.user.id
                    }
                  }
                  : {
                    connectOrCreate: {
                      where: {
                        id: prop.alpacaAccount.user.id !== undefined ? prop.alpacaAccount.user.id : undefined,
                        email: prop.alpacaAccount.user.email !== undefined ? prop.alpacaAccount.user.email : undefined,
                        name: prop.alpacaAccount.user.name !== undefined ? {
                          equals: prop.alpacaAccount.user.name
                        } : undefined,
                      },
                      create: {
                        name: prop.alpacaAccount.user.name !== undefined ? prop.alpacaAccount.user.name : undefined,
                        email: prop.alpacaAccount.user.email !== undefined ? prop.alpacaAccount.user.email : undefined,
                        emailVerified: prop.alpacaAccount.user.emailVerified !== undefined ? prop.alpacaAccount.user.emailVerified : undefined,
                        image: prop.alpacaAccount.user.image !== undefined ? prop.alpacaAccount.user.image : undefined,
                        role: prop.alpacaAccount.user.role !== undefined ? prop.alpacaAccount.user.role : undefined,
                        bio: prop.alpacaAccount.user.bio !== undefined ? prop.alpacaAccount.user.bio : undefined,
                        jobTitle: prop.alpacaAccount.user.jobTitle !== undefined ? prop.alpacaAccount.user.jobTitle : undefined,
                        currentAccount: prop.alpacaAccount.user.currentAccount !== undefined ? prop.alpacaAccount.user.currentAccount : undefined,
                        plan: prop.alpacaAccount.user.plan !== undefined ? prop.alpacaAccount.user.plan : undefined,
                      },
                    }
                  } : undefined,
              orders: prop.alpacaAccount.orders ?
                Array.isArray(prop.alpacaAccount.orders) && prop.alpacaAccount.orders.length > 0
                  ? prop.alpacaAccount.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                    connect: prop.alpacaAccount.orders.map((item: any) => ({
                      id: item.id
                    }))
                  }
                  : {
                    connectOrCreate: prop.alpacaAccount.orders.map((item: any) => ({
                      where: {
                        id: item.id !== undefined ? item.id : undefined,
                      },
                      create: {
                        qty: item.qty !== undefined ? item.qty : undefined,
                        notional: item.notional !== undefined ? item.notional : undefined,
                        side: item.side !== undefined ? item.side : undefined,
                        type: item.type !== undefined ? item.type : undefined,
                        timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
                        limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
                        stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
                        trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
                        trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
                        extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
                        clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
                        status: item.status !== undefined ? item.status : undefined,
                        submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
                        filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
                        filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
                        fee: item.fee !== undefined ? item.fee : undefined,
                      },
                    }))
                  } : undefined,
              positions: prop.alpacaAccount.positions ?
                Array.isArray(prop.alpacaAccount.positions) && prop.alpacaAccount.positions.length > 0
                  ? prop.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                    connect: prop.alpacaAccount.positions.map((item: any) => ({
                      id: item.id
                    }))
                  }
                  : {
                    connectOrCreate: prop.alpacaAccount.positions.map((item: any) => ({
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
              alerts: prop.alpacaAccount.alerts ?
                Array.isArray(prop.alpacaAccount.alerts) && prop.alpacaAccount.alerts.length > 0
                  ? prop.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                    connect: prop.alpacaAccount.alerts.map((item: any) => ({
                      id: item.id
                    }))
                  }
                  : {
                    connectOrCreate: prop.alpacaAccount.alerts.map((item: any) => ({
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
              sellPrice: prop.asset.sellPrice !== undefined ? {
                set: prop.asset.sellPrice
              } : undefined,
              buyPrice: prop.asset.buyPrice !== undefined ? {
                set: prop.asset.buyPrice
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
                    qty: item.qty !== undefined ? {
                      set: item.qty
                    } : undefined,
                    notional: item.notional !== undefined ? {
                      set: item.notional
                    } : undefined,
                    side: item.side !== undefined ? {
                      set: item.side
                    } : undefined,
                    type: item.type !== undefined ? {
                      set: item.type
                    } : undefined,
                    timeInForce: item.timeInForce !== undefined ? {
                      set: item.timeInForce
                    } : undefined,
                    limitPrice: item.limitPrice !== undefined ? {
                      set: item.limitPrice
                    } : undefined,
                    stopPrice: item.stopPrice !== undefined ? {
                      set: item.stopPrice
                    } : undefined,
                    trailPrice: item.trailPrice !== undefined ? {
                      set: item.trailPrice
                    } : undefined,
                    trailPercent: item.trailPercent !== undefined ? {
                      set: item.trailPercent
                    } : undefined,
                    extendedHours: item.extendedHours !== undefined ? {
                      set: item.extendedHours
                    } : undefined,
                    clientOrderId: item.clientOrderId !== undefined ? {
                      set: item.clientOrderId
                    } : undefined,
                    status: item.status !== undefined ? {
                      set: item.status
                    } : undefined,
                    submittedAt: item.submittedAt !== undefined ? {
                      set: item.submittedAt
                    } : undefined,
                    filledAt: item.filledAt !== undefined ? {
                      set: item.filledAt
                    } : undefined,
                    filledAvgPrice: item.filledAvgPrice !== undefined ? {
                      set: item.filledAvgPrice
                    } : undefined,
                    fee: item.fee !== undefined ? {
                      set: item.fee
                    } : undefined,
                  },
                  create: {
                    qty: item.qty !== undefined ? item.qty : undefined,
                    notional: item.notional !== undefined ? item.notional : undefined,
                    side: item.side !== undefined ? item.side : undefined,
                    type: item.type !== undefined ? item.type : undefined,
                    timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
                    limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
                    stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
                    trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
                    trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
                    extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
                    clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
                    status: item.status !== undefined ? item.status : undefined,
                    submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
                    filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
                    filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
                    fee: item.fee !== undefined ? item.fee : undefined,
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
              sellPrice: prop.asset.sellPrice !== undefined ? prop.asset.sellPrice : undefined,
              buyPrice: prop.asset.buyPrice !== undefined ? prop.asset.buyPrice : undefined,
              orders: prop.asset.orders ?
                Array.isArray(prop.asset.orders) && prop.asset.orders.length > 0
                  ? prop.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                    connect: prop.asset.orders.map((item: any) => ({
                      id: item.id
                    }))
                  }
                  : {
                    connectOrCreate: prop.asset.orders.map((item: any) => ({
                      where: {
                        id: item.id !== undefined ? item.id : undefined,
                      },
                      create: {
                        qty: item.qty !== undefined ? item.qty : undefined,
                        notional: item.notional !== undefined ? item.notional : undefined,
                        side: item.side !== undefined ? item.side : undefined,
                        type: item.type !== undefined ? item.type : undefined,
                        timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
                        limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
                        stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
                        trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
                        trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
                        extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
                        clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
                        status: item.status !== undefined ? item.status : undefined,
                        submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
                        filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
                        filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
                        fee: item.fee !== undefined ? item.fee : undefined,
                      },
                    }))
                  } : undefined,
              positions: prop.asset.positions ?
                Array.isArray(prop.asset.positions) && prop.asset.positions.length > 0
                  ? prop.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                    connect: prop.asset.positions.map((item: any) => ({
                      id: item.id
                    }))
                  }
                  : {
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
              newsMentions: prop.asset.newsMentions ?
                Array.isArray(prop.asset.newsMentions) && prop.asset.newsMentions.length > 0
                  ? prop.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) && {
                    connect: prop.asset.newsMentions.map((item: any) => ({
                      id: item.id
                    }))
                  }
                  : {
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
              type: item.type !== undefined ? {
                set: item.type
              } : undefined,
              note: item.note !== undefined ? {
                set: item.note
              } : undefined,
              status: item.status !== undefined ? {
                set: item.status
              } : undefined,
              fee: item.fee !== undefined ? {
                set: item.fee
              } : undefined,
              order: item.order ? {
                upsert: {
                  where: {
                    id: item.order.id !== undefined ? {
                      equals: item.order.id
                    } : undefined,
                  },
                  update: {
                    id: item.order.id !== undefined ? {
                      set: item.order.id
                    } : undefined,
                    qty: item.order.qty !== undefined ? {
                      set: item.order.qty
                    } : undefined,
                    notional: item.order.notional !== undefined ? {
                      set: item.order.notional
                    } : undefined,
                    side: item.order.side !== undefined ? {
                      set: item.order.side
                    } : undefined,
                    type: item.order.type !== undefined ? {
                      set: item.order.type
                    } : undefined,
                    timeInForce: item.order.timeInForce !== undefined ? {
                      set: item.order.timeInForce
                    } : undefined,
                    limitPrice: item.order.limitPrice !== undefined ? {
                      set: item.order.limitPrice
                    } : undefined,
                    stopPrice: item.order.stopPrice !== undefined ? {
                      set: item.order.stopPrice
                    } : undefined,
                    trailPrice: item.order.trailPrice !== undefined ? {
                      set: item.order.trailPrice
                    } : undefined,
                    trailPercent: item.order.trailPercent !== undefined ? {
                      set: item.order.trailPercent
                    } : undefined,
                    extendedHours: item.order.extendedHours !== undefined ? {
                      set: item.order.extendedHours
                    } : undefined,
                    clientOrderId: item.order.clientOrderId !== undefined ? {
                      set: item.order.clientOrderId
                    } : undefined,
                    status: item.order.status !== undefined ? {
                      set: item.order.status
                    } : undefined,
                    submittedAt: item.order.submittedAt !== undefined ? {
                      set: item.order.submittedAt
                    } : undefined,
                    filledAt: item.order.filledAt !== undefined ? {
                      set: item.order.filledAt
                    } : undefined,
                    filledAvgPrice: item.order.filledAvgPrice !== undefined ? {
                      set: item.order.filledAvgPrice
                    } : undefined,
                    fee: item.order.fee !== undefined ? {
                      set: item.order.fee
                    } : undefined,
                  },
                  create: {
                    qty: item.order.qty !== undefined ? item.order.qty : undefined,
                    notional: item.order.notional !== undefined ? item.order.notional : undefined,
                    side: item.order.side !== undefined ? item.order.side : undefined,
                    type: item.order.type !== undefined ? item.order.type : undefined,
                    timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
                    limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
                    stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
                    trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
                    trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
                    extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
                    clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
                    status: item.order.status !== undefined ? item.order.status : undefined,
                    submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
                    filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
                    filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
                    fee: item.order.fee !== undefined ? item.order.fee : undefined,
                  },
                }
              } : undefined,
            },
            create: {
              sequence: item.sequence !== undefined ? item.sequence : undefined,
              type: item.type !== undefined ? item.type : undefined,
              note: item.note !== undefined ? item.note : undefined,
              status: item.status !== undefined ? item.status : undefined,
              fee: item.fee !== undefined ? item.fee : undefined,
              order: item.order ?
                typeof item.order === 'object' && Object.keys(item.order).length === 1 && Object.keys(item.order)[0] === 'id'
                  ? {
                    connect: {
                      id: item.order.id
                    }
                  }
                  : {
                    connectOrCreate: {
                      where: {
                        id: item.order.id !== undefined ? item.order.id : undefined,
                      },
                      create: {
                        qty: item.order.qty !== undefined ? item.order.qty : undefined,
                        notional: item.order.notional !== undefined ? item.order.notional : undefined,
                        side: item.order.side !== undefined ? item.order.side : undefined,
                        type: item.order.type !== undefined ? item.order.type : undefined,
                        timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
                        limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
                        stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
                        trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
                        trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
                        extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
                        clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
                        status: item.order.status !== undefined ? item.order.status : undefined,
                        submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
                        filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
                        filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
                        fee: item.order.fee !== undefined ? item.order.fee : undefined,
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
          qty
          price
          total
          signal
          strategy
          analysis
          confidence
          timestamp
          createdAt
          updatedAt
          status
          alpacaAccount {
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
              alpacaAccountId
              assetId
              qty
              notional
              side
              type
              timeInForce
              limitPrice
              stopPrice
              trailPrice
              trailPercent
              extendedHours
              clientOrderId
              status
              createdAt
              updatedAt
              submittedAt
              filledAt
              filledAvgPrice
              actionId
              alpacaAccount {
                id
              }
              action {
                id
                sequence
                tradeId
                type
                note
                status
                fee
                trade {
                  id
                }
                order {
                  id
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
                sellPrice
                buyPrice
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
              fee
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
              alpacaAccount {
                id
              }
              alpacaAccountId
            }
            alerts {
              id
              alpacaAccountId
              message
              type
              isRead
              createdAt
              updatedAt
              alpacaAccount {
                id
              }
            }
          }
          asset {
            id
          }
          optionContractType
          actions {
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
          qty
          price
          total
          signal
          strategy
          analysis
          confidence
          timestamp
          createdAt
          updatedAt
          status
          alpacaAccount {
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
              alpacaAccountId
              assetId
              qty
              notional
              side
              type
              timeInForce
              limitPrice
              stopPrice
              trailPrice
              trailPercent
              extendedHours
              clientOrderId
              status
              createdAt
              updatedAt
              submittedAt
              filledAt
              filledAvgPrice
              actionId
              alpacaAccount {
                id
              }
              action {
                id
                sequence
                tradeId
                type
                note
                status
                fee
                trade {
                  id
                }
                order {
                  id
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
                sellPrice
                buyPrice
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
              fee
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
              alpacaAccount {
                id
              }
              alpacaAccountId
            }
            alerts {
              id
              alpacaAccountId
              message
              type
              isRead
              createdAt
              updatedAt
              alpacaAccount {
                id
              }
            }
          }
          asset {
            id
          }
          optionContractType
          actions {
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
          qty
          price
          total
          signal
          strategy
          analysis
          confidence
          timestamp
          createdAt
          updatedAt
          status
          alpacaAccount {
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
              alpacaAccountId
              assetId
              qty
              notional
              side
              type
              timeInForce
              limitPrice
              stopPrice
              trailPrice
              trailPercent
              extendedHours
              clientOrderId
              status
              createdAt
              updatedAt
              submittedAt
              filledAt
              filledAvgPrice
              actionId
              alpacaAccount {
                id
              }
              action {
                id
                sequence
                tradeId
                type
                note
                status
                fee
                trade {
                  id
                }
                order {
                  id
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
                sellPrice
                buyPrice
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
              fee
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
              alpacaAccount {
                id
              }
              alpacaAccountId
            }
            alerts {
              id
              alpacaAccountId
              message
              type
              isRead
              createdAt
              updatedAt
              alpacaAccount {
                id
              }
            }
          }
          asset {
            id
          }
          optionContractType
          actions {
            id
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
          qty
          price
          total
          signal
          strategy
          analysis
          confidence
          timestamp
          createdAt
          updatedAt
          status
          alpacaAccount {
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
              alpacaAccountId
              assetId
              qty
              notional
              side
              type
              timeInForce
              limitPrice
              stopPrice
              trailPrice
              trailPercent
              extendedHours
              clientOrderId
              status
              createdAt
              updatedAt
              submittedAt
              filledAt
              filledAvgPrice
              actionId
              alpacaAccount {
                id
              }
              action {
                id
                sequence
                tradeId
                type
                note
                status
                fee
                trade {
                  id
                }
                order {
                  id
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
                sellPrice
                buyPrice
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
              fee
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
              alpacaAccount {
                id
              }
              alpacaAccountId
            }
            alerts {
              id
              alpacaAccountId
              message
              type
              isRead
              createdAt
              updatedAt
              alpacaAccount {
                id
              }
            }
          }
          asset {
            id
          }
          optionContractType
          actions {
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
