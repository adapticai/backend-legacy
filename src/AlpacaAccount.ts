

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
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
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
    actions {
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
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
      }
    }
  }
  orders {
    id
    clientOrderId
    alpacaAccountId
    assetId
    qty
    notional
    side
    type
    orderClass
    timeInForce
    limitPrice
    stopPrice
    stopLoss {
      id
      stopPrice
      limitPrice
      createdAt
      updatedAt
      orderId
      Order {
        id
      }
    }
    takeProfit {
      id
      limitPrice
      stopPrice
      createdAt
      updatedAt
      orderId
      Order {
        id
      }
    }
    trailPrice
    trailPercent
    extendedHours
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
        actions {
          id
        }
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
        }
        asset {
          id
        }
        actions {
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
        alpacaAccount {
          id
        }
        alpacaAccountId
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
    fee
    strikePrice
    expirationDate
    optionType
    stopLossId
    takeProfitId
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
      sellPrice
      buyPrice
      createdAt
      updatedAt
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
        }
        asset {
          id
        }
        actions {
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
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
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
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
        }
      }
      orders {
        id
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
            }
            asset {
              id
            }
            actions {
              id
            }
          }
          order {
            id
          }
        }
        asset {
          id
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
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
      }
   `;

    const variables = {
      data: {
          type: props.type !== undefined ? props.type : undefined,
  APIKey: props.APIKey !== undefined ? props.APIKey : undefined,
  APISecret: props.APISecret !== undefined ? props.APISecret : undefined,
  configuration: props.configuration !== undefined ? props.configuration : undefined,
  marketOpen: props.marketOpen !== undefined ? props.marketOpen : undefined,
  user: props.user ? 
    typeof props.user === 'object' && Object.keys(props.user).length === 1 && Object.keys(props.user)[0] === 'id'
    ? { connect: {
        id: props.user.id
        }
      }
    : { connectOrCreate: {
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
    customer: props.user.customer ? 
      typeof props.user.customer === 'object' && Object.keys(props.user.customer).length === 1 && Object.keys(props.user.customer)[0] === 'id'
    ? { connect: {
          id: props.user.customer.id
          }
        }
    : { connectOrCreate: {
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
    accounts: props.user.accounts ? 
      Array.isArray(props.user.accounts) && props.user.accounts.length > 0 &&  props.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accounts.map((item: any) => ({
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
    sessions: props.user.sessions ? 
      Array.isArray(props.user.sessions) && props.user.sessions.length > 0 &&  props.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: props.user.authenticators ? 
      Array.isArray(props.user.authenticators) && props.user.authenticators.length > 0 &&  props.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.authenticators.map((item: any) => ({
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
      },
    }
  } : undefined,
  trades: props.trades ? 
    Array.isArray(props.trades) && props.trades.length > 0 &&  props.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.trades.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.trades.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        qty: item.qty !== undefined ? item.qty : undefined,
        price: item.price !== undefined ? item.price : undefined,
        total: item.total !== undefined ? item.total : undefined,
        signal: item.signal !== undefined ? item.signal : undefined,
        strategy: item.strategy !== undefined ? item.strategy : undefined,
        analysis: item.analysis !== undefined ? item.analysis : undefined,
        confidence: item.confidence !== undefined ? item.confidence : undefined,
        timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        status: item.status !== undefined ? item.status : undefined,
    asset: item.asset ? 
      typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
          id: item.asset.id
          }
        }
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
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      orders: item.asset.orders ? 
        Array.isArray(item.asset.orders) && item.asset.orders.length > 0 &&  item.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
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
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? 
        Array.isArray(item.asset.positions) && item.asset.positions.length > 0 &&  item.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.positions.map((item: any) => ({
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
      newsMentions: item.asset.newsMentions ? 
        Array.isArray(item.asset.newsMentions) && item.asset.newsMentions.length > 0 &&  item.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.newsMentions.map((item: any) => ({
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
    actions: item.actions ? 
      Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.actions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
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
    ? { connect: {
            id: item.order.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.id !== undefined ? item.order.id : undefined,
          },
          create: {
            clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
            qty: item.order.qty !== undefined ? item.order.qty : undefined,
            notional: item.order.notional !== undefined ? item.order.notional : undefined,
            side: item.order.side !== undefined ? item.order.side : undefined,
            type: item.order.type !== undefined ? item.order.type : undefined,
            orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
            timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
            limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
            stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
            trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
            trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
            extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
            status: item.order.status !== undefined ? item.order.status : undefined,
            submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
            filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
            filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
            fee: item.order.fee !== undefined ? item.order.fee : undefined,
            strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
            expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
            optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
            stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
  orders: props.orders ? 
    Array.isArray(props.orders) && props.orders.length > 0 &&  props.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.orders.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.orders.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
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
        filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
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
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.stopLoss.id !== undefined ? item.stopLoss.id : undefined,
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
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.takeProfit.id !== undefined ? item.takeProfit.id : undefined,
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
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.action.id !== undefined ? item.action.id : undefined,
        },
        create: {
          sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
          type: item.action.type !== undefined ? item.action.type : undefined,
          note: item.action.note !== undefined ? item.action.note : undefined,
          status: item.action.status !== undefined ? item.action.status : undefined,
          fee: item.action.fee !== undefined ? item.action.fee : undefined,
      trade: item.action.trade ? 
        typeof item.action.trade === 'object' && Object.keys(item.action.trade).length === 1 && Object.keys(item.action.trade)[0] === 'id'
    ? { connect: {
            id: item.action.trade.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.action.trade.id !== undefined ? item.action.trade.id : undefined,
          },
          create: {
            qty: item.action.trade.qty !== undefined ? item.action.trade.qty : undefined,
            price: item.action.trade.price !== undefined ? item.action.trade.price : undefined,
            total: item.action.trade.total !== undefined ? item.action.trade.total : undefined,
            signal: item.action.trade.signal !== undefined ? item.action.trade.signal : undefined,
            strategy: item.action.trade.strategy !== undefined ? item.action.trade.strategy : undefined,
            analysis: item.action.trade.analysis !== undefined ? item.action.trade.analysis : undefined,
            confidence: item.action.trade.confidence !== undefined ? item.action.trade.confidence : undefined,
            timestamp: item.action.trade.timestamp !== undefined ? item.action.trade.timestamp : undefined,
            status: item.action.trade.status !== undefined ? item.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    asset: item.asset ? 
      typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
          id: item.asset.id
          }
        }
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
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      trades: item.asset.trades ? 
        Array.isArray(item.asset.trades) && item.asset.trades.length > 0 &&  item.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? 
        Array.isArray(item.asset.positions) && item.asset.positions.length > 0 &&  item.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.positions.map((item: any) => ({
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
      newsMentions: item.asset.newsMentions ? 
        Array.isArray(item.asset.newsMentions) && item.asset.newsMentions.length > 0 &&  item.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.newsMentions.map((item: any) => ({
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
    }))
  } : undefined,
  positions: props.positions ? 
    Array.isArray(props.positions) && props.positions.length > 0 &&  props.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.positions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.positions.map((item: any) => ({
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
    asset: item.asset ? 
      typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
          id: item.asset.id
          }
        }
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
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      trades: item.asset.trades ? 
        Array.isArray(item.asset.trades) && item.asset.trades.length > 0 &&  item.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.asset.orders ? 
        Array.isArray(item.asset.orders) && item.asset.orders.length > 0 &&  item.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
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
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      newsMentions: item.asset.newsMentions ? 
        Array.isArray(item.asset.newsMentions) && item.asset.newsMentions.length > 0 &&  item.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.newsMentions.map((item: any) => ({
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
    }))
  } : undefined,
  alerts: props.alerts ? 
    Array.isArray(props.alerts) && props.alerts.length > 0 &&  props.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.alerts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.alerts.map((item: any) => ({
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
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
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
    actions {
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
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
      }
    }
  }
  orders {
    id
    clientOrderId
    alpacaAccountId
    assetId
    qty
    notional
    side
    type
    orderClass
    timeInForce
    limitPrice
    stopPrice
    stopLoss {
      id
      stopPrice
      limitPrice
      createdAt
      updatedAt
      orderId
      Order {
        id
      }
    }
    takeProfit {
      id
      limitPrice
      stopPrice
      createdAt
      updatedAt
      orderId
      Order {
        id
      }
    }
    trailPrice
    trailPercent
    extendedHours
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
        actions {
          id
        }
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
        }
        asset {
          id
        }
        actions {
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
        alpacaAccount {
          id
        }
        alpacaAccountId
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
    fee
    strikePrice
    expirationDate
    optionType
    stopLossId
    takeProfitId
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
      sellPrice
      buyPrice
      createdAt
      updatedAt
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
        }
        asset {
          id
        }
        actions {
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
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
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
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
        }
      }
      orders {
        id
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
            }
            asset {
              id
            }
            actions {
              id
            }
          }
          order {
            id
          }
        }
        asset {
          id
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
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
    customer: props.user.customer ? 
      typeof props.user.customer === 'object' && Object.keys(props.user.customer).length === 1 && Object.keys(props.user.customer)[0] === 'id'
    ? { connect: {
          id: props.user.customer.id
          }
        }
    : { connectOrCreate: {
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
    accounts: props.user.accounts ? 
      Array.isArray(props.user.accounts) && props.user.accounts.length > 0 &&  props.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.accounts.map((item: any) => ({
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
    sessions: props.user.sessions ? 
      Array.isArray(props.user.sessions) && props.user.sessions.length > 0 &&  props.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: props.user.authenticators ? 
      Array.isArray(props.user.authenticators) && props.user.authenticators.length > 0 &&  props.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      props.user.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: props.user.authenticators.map((item: any) => ({
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
        qty: item.qty !== undefined ? {
            set: item.qty  
           } : undefined,
        price: item.price !== undefined ? {
            set: item.price  
           } : undefined,
        total: item.total !== undefined ? {
            set: item.total  
           } : undefined,
        signal: item.signal !== undefined ? {
            set: item.signal  
           } : undefined,
        strategy: item.strategy !== undefined ? {
            set: item.strategy  
           } : undefined,
        analysis: item.analysis !== undefined ? {
            set: item.analysis  
           } : undefined,
        confidence: item.confidence !== undefined ? {
            set: item.confidence  
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
          sellPrice: item.asset.sellPrice !== undefined ? {
              set: item.asset.sellPrice  
             } : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? {
              set: item.asset.buyPrice  
             } : undefined,
      orders: item.asset.orders ? {
        upsert: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            clientOrderId: item.clientOrderId !== undefined ? {
                set: item.clientOrderId  
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
            orderClass: item.orderClass !== undefined ? {
                set: item.orderClass  
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
            strikePrice: item.strikePrice !== undefined ? {
                set: item.strikePrice  
               } : undefined,
            expirationDate: item.expirationDate !== undefined ? {
                set: item.expirationDate  
               } : undefined,
            optionType: item.optionType !== undefined ? {
                set: item.optionType  
               } : undefined,
            stopLossId: item.stopLossId !== undefined ? {
                set: item.stopLossId  
               } : undefined,
            takeProfitId: item.takeProfitId !== undefined ? {
                set: item.takeProfitId  
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
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? {
        upsert: item.asset.positions.map((item: any) => ({
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
      newsMentions: item.asset.newsMentions ? {
        upsert: item.asset.newsMentions.map((item: any) => ({
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
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      orders: item.asset.orders ? 
        Array.isArray(item.asset.orders) && item.asset.orders.length > 0 &&  item.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
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
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? 
        Array.isArray(item.asset.positions) && item.asset.positions.length > 0 &&  item.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.positions.map((item: any) => ({
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
      newsMentions: item.asset.newsMentions ? 
        Array.isArray(item.asset.newsMentions) && item.asset.newsMentions.length > 0 &&  item.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.newsMentions.map((item: any) => ({
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
            clientOrderId: item.order.clientOrderId !== undefined ? {
                set: item.order.clientOrderId  
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
            orderClass: item.order.orderClass !== undefined ? {
                set: item.order.orderClass  
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
            strikePrice: item.order.strikePrice !== undefined ? {
                set: item.order.strikePrice  
               } : undefined,
            expirationDate: item.order.expirationDate !== undefined ? {
                set: item.order.expirationDate  
               } : undefined,
            optionType: item.order.optionType !== undefined ? {
                set: item.order.optionType  
               } : undefined,
            stopLossId: item.order.stopLossId !== undefined ? {
                set: item.order.stopLossId  
               } : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? {
                set: item.order.takeProfitId  
               } : undefined,
          },
          create: {
            clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
            qty: item.order.qty !== undefined ? item.order.qty : undefined,
            notional: item.order.notional !== undefined ? item.order.notional : undefined,
            side: item.order.side !== undefined ? item.order.side : undefined,
            type: item.order.type !== undefined ? item.order.type : undefined,
            orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
            timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
            limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
            stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
            trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
            trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
            extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
            status: item.order.status !== undefined ? item.order.status : undefined,
            submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
            filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
            filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
            fee: item.order.fee !== undefined ? item.order.fee : undefined,
            strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
            expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
            optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
            stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
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
    ? { connect: {
            id: item.order.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.id !== undefined ? item.order.id : undefined,
          },
          create: {
            clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
            qty: item.order.qty !== undefined ? item.order.qty : undefined,
            notional: item.order.notional !== undefined ? item.order.notional : undefined,
            side: item.order.side !== undefined ? item.order.side : undefined,
            type: item.order.type !== undefined ? item.order.type : undefined,
            orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
            timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
            limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
            stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
            trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
            trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
            extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
            status: item.order.status !== undefined ? item.order.status : undefined,
            submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
            filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
            filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
            fee: item.order.fee !== undefined ? item.order.fee : undefined,
            strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
            expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
            optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
            stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        qty: item.qty !== undefined ? item.qty : undefined,
        price: item.price !== undefined ? item.price : undefined,
        total: item.total !== undefined ? item.total : undefined,
        signal: item.signal !== undefined ? item.signal : undefined,
        strategy: item.strategy !== undefined ? item.strategy : undefined,
        analysis: item.analysis !== undefined ? item.analysis : undefined,
        confidence: item.confidence !== undefined ? item.confidence : undefined,
        timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        status: item.status !== undefined ? item.status : undefined,
    asset: item.asset ? 
      typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
          id: item.asset.id
          }
        }
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
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      orders: item.asset.orders ? 
        Array.isArray(item.asset.orders) && item.asset.orders.length > 0 &&  item.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
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
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? 
        Array.isArray(item.asset.positions) && item.asset.positions.length > 0 &&  item.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.positions.map((item: any) => ({
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
      newsMentions: item.asset.newsMentions ? 
        Array.isArray(item.asset.newsMentions) && item.asset.newsMentions.length > 0 &&  item.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.newsMentions.map((item: any) => ({
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
    actions: item.actions ? 
      Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.actions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
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
    ? { connect: {
            id: item.order.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.id !== undefined ? item.order.id : undefined,
          },
          create: {
            clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
            qty: item.order.qty !== undefined ? item.order.qty : undefined,
            notional: item.order.notional !== undefined ? item.order.notional : undefined,
            side: item.order.side !== undefined ? item.order.side : undefined,
            type: item.order.type !== undefined ? item.order.type : undefined,
            orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
            timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
            limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
            stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
            trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
            trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
            extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
            status: item.order.status !== undefined ? item.order.status : undefined,
            submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
            filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
            filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
            fee: item.order.fee !== undefined ? item.order.fee : undefined,
            strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
            expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
            optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
            stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
          },
        }
      } : undefined,
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
        clientOrderId: item.clientOrderId !== undefined ? {
            set: item.clientOrderId  
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
        orderClass: item.orderClass !== undefined ? {
            set: item.orderClass  
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
        strikePrice: item.strikePrice !== undefined ? {
            set: item.strikePrice  
           } : undefined,
        expirationDate: item.expirationDate !== undefined ? {
            set: item.expirationDate  
           } : undefined,
        optionType: item.optionType !== undefined ? {
            set: item.optionType  
           } : undefined,
        stopLossId: item.stopLossId !== undefined ? {
            set: item.stopLossId  
           } : undefined,
        takeProfitId: item.takeProfitId !== undefined ? {
            set: item.takeProfitId  
           } : undefined,
    stopLoss: item.stopLoss ? {
      upsert: {
        where: {
          id: item.stopLoss.id !== undefined ? {
              equals: item.stopLoss.id 
             } : undefined,
        },
        update: {
          id: item.stopLoss.id !== undefined ? {
              set: item.stopLoss.id  
             } : undefined,
          stopPrice: item.stopLoss.stopPrice !== undefined ? {
              set: item.stopLoss.stopPrice  
             } : undefined,
          limitPrice: item.stopLoss.limitPrice !== undefined ? {
              set: item.stopLoss.limitPrice  
             } : undefined,
        },
        create: {
          stopPrice: item.stopLoss.stopPrice !== undefined ? item.stopLoss.stopPrice : undefined,
          limitPrice: item.stopLoss.limitPrice !== undefined ? item.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    takeProfit: item.takeProfit ? {
      upsert: {
        where: {
          id: item.takeProfit.id !== undefined ? {
              equals: item.takeProfit.id 
             } : undefined,
        },
        update: {
          id: item.takeProfit.id !== undefined ? {
              set: item.takeProfit.id  
             } : undefined,
          limitPrice: item.takeProfit.limitPrice !== undefined ? {
              set: item.takeProfit.limitPrice  
             } : undefined,
          stopPrice: item.takeProfit.stopPrice !== undefined ? {
              set: item.takeProfit.stopPrice  
             } : undefined,
        },
        create: {
          limitPrice: item.takeProfit.limitPrice !== undefined ? item.takeProfit.limitPrice : undefined,
          stopPrice: item.takeProfit.stopPrice !== undefined ? item.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    action: item.action ? {
      upsert: {
        where: {
          id: item.action.id !== undefined ? {
              equals: item.action.id 
             } : undefined,
        },
        update: {
          id: item.action.id !== undefined ? {
              set: item.action.id  
             } : undefined,
          sequence: item.action.sequence !== undefined ? {
              set: item.action.sequence  
             } : undefined,
          type: item.action.type !== undefined ? {
              set: item.action.type  
             } : undefined,
          note: item.action.note !== undefined ? {
              set: item.action.note  
             } : undefined,
          status: item.action.status !== undefined ? {
              set: item.action.status  
             } : undefined,
          fee: item.action.fee !== undefined ? {
              set: item.action.fee  
             } : undefined,
      trade: item.action.trade ? {
        upsert: {
          where: {
            id: item.action.trade.id !== undefined ? {
                equals: item.action.trade.id 
               } : undefined,
          },
          update: {
            id: item.action.trade.id !== undefined ? {
                set: item.action.trade.id  
               } : undefined,
            qty: item.action.trade.qty !== undefined ? {
                set: item.action.trade.qty  
               } : undefined,
            price: item.action.trade.price !== undefined ? {
                set: item.action.trade.price  
               } : undefined,
            total: item.action.trade.total !== undefined ? {
                set: item.action.trade.total  
               } : undefined,
            signal: item.action.trade.signal !== undefined ? {
                set: item.action.trade.signal  
               } : undefined,
            strategy: item.action.trade.strategy !== undefined ? {
                set: item.action.trade.strategy  
               } : undefined,
            analysis: item.action.trade.analysis !== undefined ? {
                set: item.action.trade.analysis  
               } : undefined,
            confidence: item.action.trade.confidence !== undefined ? {
                set: item.action.trade.confidence  
               } : undefined,
            timestamp: item.action.trade.timestamp !== undefined ? {
                set: item.action.trade.timestamp  
               } : undefined,
            status: item.action.trade.status !== undefined ? {
                set: item.action.trade.status  
               } : undefined,
          },
          create: {
            qty: item.action.trade.qty !== undefined ? item.action.trade.qty : undefined,
            price: item.action.trade.price !== undefined ? item.action.trade.price : undefined,
            total: item.action.trade.total !== undefined ? item.action.trade.total : undefined,
            signal: item.action.trade.signal !== undefined ? item.action.trade.signal : undefined,
            strategy: item.action.trade.strategy !== undefined ? item.action.trade.strategy : undefined,
            analysis: item.action.trade.analysis !== undefined ? item.action.trade.analysis : undefined,
            confidence: item.action.trade.confidence !== undefined ? item.action.trade.confidence : undefined,
            timestamp: item.action.trade.timestamp !== undefined ? item.action.trade.timestamp : undefined,
            status: item.action.trade.status !== undefined ? item.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
        create: {
          sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
          type: item.action.type !== undefined ? item.action.type : undefined,
          note: item.action.note !== undefined ? item.action.note : undefined,
          status: item.action.status !== undefined ? item.action.status : undefined,
          fee: item.action.fee !== undefined ? item.action.fee : undefined,
      trade: item.action.trade ? 
        typeof item.action.trade === 'object' && Object.keys(item.action.trade).length === 1 && Object.keys(item.action.trade)[0] === 'id'
    ? { connect: {
            id: item.action.trade.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.action.trade.id !== undefined ? item.action.trade.id : undefined,
          },
          create: {
            qty: item.action.trade.qty !== undefined ? item.action.trade.qty : undefined,
            price: item.action.trade.price !== undefined ? item.action.trade.price : undefined,
            total: item.action.trade.total !== undefined ? item.action.trade.total : undefined,
            signal: item.action.trade.signal !== undefined ? item.action.trade.signal : undefined,
            strategy: item.action.trade.strategy !== undefined ? item.action.trade.strategy : undefined,
            analysis: item.action.trade.analysis !== undefined ? item.action.trade.analysis : undefined,
            confidence: item.action.trade.confidence !== undefined ? item.action.trade.confidence : undefined,
            timestamp: item.action.trade.timestamp !== undefined ? item.action.trade.timestamp : undefined,
            status: item.action.trade.status !== undefined ? item.action.trade.status : undefined,
          },
        }
      } : undefined,
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
          sellPrice: item.asset.sellPrice !== undefined ? {
              set: item.asset.sellPrice  
             } : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? {
              set: item.asset.buyPrice  
             } : undefined,
      trades: item.asset.trades ? {
        upsert: item.asset.trades.map((item: any) => ({
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
            price: item.price !== undefined ? {
                set: item.price  
               } : undefined,
            total: item.total !== undefined ? {
                set: item.total  
               } : undefined,
            signal: item.signal !== undefined ? {
                set: item.signal  
               } : undefined,
            strategy: item.strategy !== undefined ? {
                set: item.strategy  
               } : undefined,
            analysis: item.analysis !== undefined ? {
                set: item.analysis  
               } : undefined,
            confidence: item.confidence !== undefined ? {
                set: item.confidence  
               } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? {
        upsert: item.asset.positions.map((item: any) => ({
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
      newsMentions: item.asset.newsMentions ? {
        upsert: item.asset.newsMentions.map((item: any) => ({
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
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      trades: item.asset.trades ? 
        Array.isArray(item.asset.trades) && item.asset.trades.length > 0 &&  item.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? 
        Array.isArray(item.asset.positions) && item.asset.positions.length > 0 &&  item.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.positions.map((item: any) => ({
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
      newsMentions: item.asset.newsMentions ? 
        Array.isArray(item.asset.newsMentions) && item.asset.newsMentions.length > 0 &&  item.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.newsMentions.map((item: any) => ({
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
        filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
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
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.stopLoss.id !== undefined ? item.stopLoss.id : undefined,
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
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.takeProfit.id !== undefined ? item.takeProfit.id : undefined,
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
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.action.id !== undefined ? item.action.id : undefined,
        },
        create: {
          sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
          type: item.action.type !== undefined ? item.action.type : undefined,
          note: item.action.note !== undefined ? item.action.note : undefined,
          status: item.action.status !== undefined ? item.action.status : undefined,
          fee: item.action.fee !== undefined ? item.action.fee : undefined,
      trade: item.action.trade ? 
        typeof item.action.trade === 'object' && Object.keys(item.action.trade).length === 1 && Object.keys(item.action.trade)[0] === 'id'
    ? { connect: {
            id: item.action.trade.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.action.trade.id !== undefined ? item.action.trade.id : undefined,
          },
          create: {
            qty: item.action.trade.qty !== undefined ? item.action.trade.qty : undefined,
            price: item.action.trade.price !== undefined ? item.action.trade.price : undefined,
            total: item.action.trade.total !== undefined ? item.action.trade.total : undefined,
            signal: item.action.trade.signal !== undefined ? item.action.trade.signal : undefined,
            strategy: item.action.trade.strategy !== undefined ? item.action.trade.strategy : undefined,
            analysis: item.action.trade.analysis !== undefined ? item.action.trade.analysis : undefined,
            confidence: item.action.trade.confidence !== undefined ? item.action.trade.confidence : undefined,
            timestamp: item.action.trade.timestamp !== undefined ? item.action.trade.timestamp : undefined,
            status: item.action.trade.status !== undefined ? item.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    asset: item.asset ? 
      typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
          id: item.asset.id
          }
        }
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
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      trades: item.asset.trades ? 
        Array.isArray(item.asset.trades) && item.asset.trades.length > 0 &&  item.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? 
        Array.isArray(item.asset.positions) && item.asset.positions.length > 0 &&  item.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.positions.map((item: any) => ({
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
      newsMentions: item.asset.newsMentions ? 
        Array.isArray(item.asset.newsMentions) && item.asset.newsMentions.length > 0 &&  item.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.newsMentions.map((item: any) => ({
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
          sellPrice: item.asset.sellPrice !== undefined ? {
              set: item.asset.sellPrice  
             } : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? {
              set: item.asset.buyPrice  
             } : undefined,
      trades: item.asset.trades ? {
        upsert: item.asset.trades.map((item: any) => ({
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
            price: item.price !== undefined ? {
                set: item.price  
               } : undefined,
            total: item.total !== undefined ? {
                set: item.total  
               } : undefined,
            signal: item.signal !== undefined ? {
                set: item.signal  
               } : undefined,
            strategy: item.strategy !== undefined ? {
                set: item.strategy  
               } : undefined,
            analysis: item.analysis !== undefined ? {
                set: item.analysis  
               } : undefined,
            confidence: item.confidence !== undefined ? {
                set: item.confidence  
               } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.asset.orders ? {
        upsert: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            clientOrderId: item.clientOrderId !== undefined ? {
                set: item.clientOrderId  
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
            orderClass: item.orderClass !== undefined ? {
                set: item.orderClass  
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
            strikePrice: item.strikePrice !== undefined ? {
                set: item.strikePrice  
               } : undefined,
            expirationDate: item.expirationDate !== undefined ? {
                set: item.expirationDate  
               } : undefined,
            optionType: item.optionType !== undefined ? {
                set: item.optionType  
               } : undefined,
            stopLossId: item.stopLossId !== undefined ? {
                set: item.stopLossId  
               } : undefined,
            takeProfitId: item.takeProfitId !== undefined ? {
                set: item.takeProfitId  
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
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      newsMentions: item.asset.newsMentions ? {
        upsert: item.asset.newsMentions.map((item: any) => ({
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
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      trades: item.asset.trades ? 
        Array.isArray(item.asset.trades) && item.asset.trades.length > 0 &&  item.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.asset.orders ? 
        Array.isArray(item.asset.orders) && item.asset.orders.length > 0 &&  item.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
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
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      newsMentions: item.asset.newsMentions ? 
        Array.isArray(item.asset.newsMentions) && item.asset.newsMentions.length > 0 &&  item.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.newsMentions.map((item: any) => ({
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
    asset: item.asset ? 
      typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
          id: item.asset.id
          }
        }
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
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      trades: item.asset.trades ? 
        Array.isArray(item.asset.trades) && item.asset.trades.length > 0 &&  item.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.asset.orders ? 
        Array.isArray(item.asset.orders) && item.asset.orders.length > 0 &&  item.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
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
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      newsMentions: item.asset.newsMentions ? 
        Array.isArray(item.asset.newsMentions) && item.asset.newsMentions.length > 0 &&  item.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.newsMentions.map((item: any) => ({
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
    }))
  } : undefined,
  alerts: props.alerts ? {
    upsert: props.alerts.map((item: any) => ({
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
    customer: prop.user.customer ? 
      typeof prop.user.customer === 'object' && Object.keys(prop.user.customer).length === 1 && Object.keys(prop.user.customer)[0] === 'id'
    ? { connect: {
          id: prop.user.customer.id
          }
        }
    : { connectOrCreate: {
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
    accounts: prop.user.accounts ? 
      Array.isArray(prop.user.accounts) && prop.user.accounts.length > 0 &&  prop.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.accounts.map((item: any) => ({
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
    sessions: prop.user.sessions ? 
      Array.isArray(prop.user.sessions) && prop.user.sessions.length > 0 &&  prop.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: prop.user.authenticators ? 
      Array.isArray(prop.user.authenticators) && prop.user.authenticators.length > 0 &&  prop.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      prop.user.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: prop.user.authenticators.map((item: any) => ({
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
        qty: item.qty !== undefined ? {
            set: item.qty  
           } : undefined,
        price: item.price !== undefined ? {
            set: item.price  
           } : undefined,
        total: item.total !== undefined ? {
            set: item.total  
           } : undefined,
        signal: item.signal !== undefined ? {
            set: item.signal  
           } : undefined,
        strategy: item.strategy !== undefined ? {
            set: item.strategy  
           } : undefined,
        analysis: item.analysis !== undefined ? {
            set: item.analysis  
           } : undefined,
        confidence: item.confidence !== undefined ? {
            set: item.confidence  
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
          sellPrice: item.asset.sellPrice !== undefined ? {
              set: item.asset.sellPrice  
             } : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? {
              set: item.asset.buyPrice  
             } : undefined,
      orders: item.asset.orders ? {
        upsert: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            clientOrderId: item.clientOrderId !== undefined ? {
                set: item.clientOrderId  
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
            orderClass: item.orderClass !== undefined ? {
                set: item.orderClass  
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
            strikePrice: item.strikePrice !== undefined ? {
                set: item.strikePrice  
               } : undefined,
            expirationDate: item.expirationDate !== undefined ? {
                set: item.expirationDate  
               } : undefined,
            optionType: item.optionType !== undefined ? {
                set: item.optionType  
               } : undefined,
            stopLossId: item.stopLossId !== undefined ? {
                set: item.stopLossId  
               } : undefined,
            takeProfitId: item.takeProfitId !== undefined ? {
                set: item.takeProfitId  
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
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? {
        upsert: item.asset.positions.map((item: any) => ({
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
      newsMentions: item.asset.newsMentions ? {
        upsert: item.asset.newsMentions.map((item: any) => ({
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
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      orders: item.asset.orders ? 
        Array.isArray(item.asset.orders) && item.asset.orders.length > 0 &&  item.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
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
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? 
        Array.isArray(item.asset.positions) && item.asset.positions.length > 0 &&  item.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.positions.map((item: any) => ({
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
      newsMentions: item.asset.newsMentions ? 
        Array.isArray(item.asset.newsMentions) && item.asset.newsMentions.length > 0 &&  item.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.newsMentions.map((item: any) => ({
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
            clientOrderId: item.order.clientOrderId !== undefined ? {
                set: item.order.clientOrderId  
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
            orderClass: item.order.orderClass !== undefined ? {
                set: item.order.orderClass  
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
            strikePrice: item.order.strikePrice !== undefined ? {
                set: item.order.strikePrice  
               } : undefined,
            expirationDate: item.order.expirationDate !== undefined ? {
                set: item.order.expirationDate  
               } : undefined,
            optionType: item.order.optionType !== undefined ? {
                set: item.order.optionType  
               } : undefined,
            stopLossId: item.order.stopLossId !== undefined ? {
                set: item.order.stopLossId  
               } : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? {
                set: item.order.takeProfitId  
               } : undefined,
          },
          create: {
            clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
            qty: item.order.qty !== undefined ? item.order.qty : undefined,
            notional: item.order.notional !== undefined ? item.order.notional : undefined,
            side: item.order.side !== undefined ? item.order.side : undefined,
            type: item.order.type !== undefined ? item.order.type : undefined,
            orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
            timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
            limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
            stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
            trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
            trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
            extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
            status: item.order.status !== undefined ? item.order.status : undefined,
            submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
            filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
            filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
            fee: item.order.fee !== undefined ? item.order.fee : undefined,
            strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
            expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
            optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
            stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
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
    ? { connect: {
            id: item.order.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.id !== undefined ? item.order.id : undefined,
          },
          create: {
            clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
            qty: item.order.qty !== undefined ? item.order.qty : undefined,
            notional: item.order.notional !== undefined ? item.order.notional : undefined,
            side: item.order.side !== undefined ? item.order.side : undefined,
            type: item.order.type !== undefined ? item.order.type : undefined,
            orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
            timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
            limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
            stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
            trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
            trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
            extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
            status: item.order.status !== undefined ? item.order.status : undefined,
            submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
            filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
            filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
            fee: item.order.fee !== undefined ? item.order.fee : undefined,
            strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
            expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
            optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
            stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        qty: item.qty !== undefined ? item.qty : undefined,
        price: item.price !== undefined ? item.price : undefined,
        total: item.total !== undefined ? item.total : undefined,
        signal: item.signal !== undefined ? item.signal : undefined,
        strategy: item.strategy !== undefined ? item.strategy : undefined,
        analysis: item.analysis !== undefined ? item.analysis : undefined,
        confidence: item.confidence !== undefined ? item.confidence : undefined,
        timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        status: item.status !== undefined ? item.status : undefined,
    asset: item.asset ? 
      typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
          id: item.asset.id
          }
        }
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
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      orders: item.asset.orders ? 
        Array.isArray(item.asset.orders) && item.asset.orders.length > 0 &&  item.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
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
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? 
        Array.isArray(item.asset.positions) && item.asset.positions.length > 0 &&  item.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.positions.map((item: any) => ({
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
      newsMentions: item.asset.newsMentions ? 
        Array.isArray(item.asset.newsMentions) && item.asset.newsMentions.length > 0 &&  item.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.newsMentions.map((item: any) => ({
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
    actions: item.actions ? 
      Array.isArray(item.actions) && item.actions.length > 0 &&  item.actions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.actions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.actions.map((item: any) => ({
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
    ? { connect: {
            id: item.order.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.order.id !== undefined ? item.order.id : undefined,
          },
          create: {
            clientOrderId: item.order.clientOrderId !== undefined ? item.order.clientOrderId : undefined,
            qty: item.order.qty !== undefined ? item.order.qty : undefined,
            notional: item.order.notional !== undefined ? item.order.notional : undefined,
            side: item.order.side !== undefined ? item.order.side : undefined,
            type: item.order.type !== undefined ? item.order.type : undefined,
            orderClass: item.order.orderClass !== undefined ? item.order.orderClass : undefined,
            timeInForce: item.order.timeInForce !== undefined ? item.order.timeInForce : undefined,
            limitPrice: item.order.limitPrice !== undefined ? item.order.limitPrice : undefined,
            stopPrice: item.order.stopPrice !== undefined ? item.order.stopPrice : undefined,
            trailPrice: item.order.trailPrice !== undefined ? item.order.trailPrice : undefined,
            trailPercent: item.order.trailPercent !== undefined ? item.order.trailPercent : undefined,
            extendedHours: item.order.extendedHours !== undefined ? item.order.extendedHours : undefined,
            status: item.order.status !== undefined ? item.order.status : undefined,
            submittedAt: item.order.submittedAt !== undefined ? item.order.submittedAt : undefined,
            filledAt: item.order.filledAt !== undefined ? item.order.filledAt : undefined,
            filledAvgPrice: item.order.filledAvgPrice !== undefined ? item.order.filledAvgPrice : undefined,
            fee: item.order.fee !== undefined ? item.order.fee : undefined,
            strikePrice: item.order.strikePrice !== undefined ? item.order.strikePrice : undefined,
            expirationDate: item.order.expirationDate !== undefined ? item.order.expirationDate : undefined,
            optionType: item.order.optionType !== undefined ? item.order.optionType : undefined,
            stopLossId: item.order.stopLossId !== undefined ? item.order.stopLossId : undefined,
            takeProfitId: item.order.takeProfitId !== undefined ? item.order.takeProfitId : undefined,
          },
        }
      } : undefined,
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
        clientOrderId: item.clientOrderId !== undefined ? {
            set: item.clientOrderId  
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
        orderClass: item.orderClass !== undefined ? {
            set: item.orderClass  
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
        strikePrice: item.strikePrice !== undefined ? {
            set: item.strikePrice  
           } : undefined,
        expirationDate: item.expirationDate !== undefined ? {
            set: item.expirationDate  
           } : undefined,
        optionType: item.optionType !== undefined ? {
            set: item.optionType  
           } : undefined,
        stopLossId: item.stopLossId !== undefined ? {
            set: item.stopLossId  
           } : undefined,
        takeProfitId: item.takeProfitId !== undefined ? {
            set: item.takeProfitId  
           } : undefined,
    stopLoss: item.stopLoss ? {
      upsert: {
        where: {
          id: item.stopLoss.id !== undefined ? {
              equals: item.stopLoss.id 
             } : undefined,
        },
        update: {
          id: item.stopLoss.id !== undefined ? {
              set: item.stopLoss.id  
             } : undefined,
          stopPrice: item.stopLoss.stopPrice !== undefined ? {
              set: item.stopLoss.stopPrice  
             } : undefined,
          limitPrice: item.stopLoss.limitPrice !== undefined ? {
              set: item.stopLoss.limitPrice  
             } : undefined,
        },
        create: {
          stopPrice: item.stopLoss.stopPrice !== undefined ? item.stopLoss.stopPrice : undefined,
          limitPrice: item.stopLoss.limitPrice !== undefined ? item.stopLoss.limitPrice : undefined,
        },
      }
    } : undefined,
    takeProfit: item.takeProfit ? {
      upsert: {
        where: {
          id: item.takeProfit.id !== undefined ? {
              equals: item.takeProfit.id 
             } : undefined,
        },
        update: {
          id: item.takeProfit.id !== undefined ? {
              set: item.takeProfit.id  
             } : undefined,
          limitPrice: item.takeProfit.limitPrice !== undefined ? {
              set: item.takeProfit.limitPrice  
             } : undefined,
          stopPrice: item.takeProfit.stopPrice !== undefined ? {
              set: item.takeProfit.stopPrice  
             } : undefined,
        },
        create: {
          limitPrice: item.takeProfit.limitPrice !== undefined ? item.takeProfit.limitPrice : undefined,
          stopPrice: item.takeProfit.stopPrice !== undefined ? item.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    action: item.action ? {
      upsert: {
        where: {
          id: item.action.id !== undefined ? {
              equals: item.action.id 
             } : undefined,
        },
        update: {
          id: item.action.id !== undefined ? {
              set: item.action.id  
             } : undefined,
          sequence: item.action.sequence !== undefined ? {
              set: item.action.sequence  
             } : undefined,
          type: item.action.type !== undefined ? {
              set: item.action.type  
             } : undefined,
          note: item.action.note !== undefined ? {
              set: item.action.note  
             } : undefined,
          status: item.action.status !== undefined ? {
              set: item.action.status  
             } : undefined,
          fee: item.action.fee !== undefined ? {
              set: item.action.fee  
             } : undefined,
      trade: item.action.trade ? {
        upsert: {
          where: {
            id: item.action.trade.id !== undefined ? {
                equals: item.action.trade.id 
               } : undefined,
          },
          update: {
            id: item.action.trade.id !== undefined ? {
                set: item.action.trade.id  
               } : undefined,
            qty: item.action.trade.qty !== undefined ? {
                set: item.action.trade.qty  
               } : undefined,
            price: item.action.trade.price !== undefined ? {
                set: item.action.trade.price  
               } : undefined,
            total: item.action.trade.total !== undefined ? {
                set: item.action.trade.total  
               } : undefined,
            signal: item.action.trade.signal !== undefined ? {
                set: item.action.trade.signal  
               } : undefined,
            strategy: item.action.trade.strategy !== undefined ? {
                set: item.action.trade.strategy  
               } : undefined,
            analysis: item.action.trade.analysis !== undefined ? {
                set: item.action.trade.analysis  
               } : undefined,
            confidence: item.action.trade.confidence !== undefined ? {
                set: item.action.trade.confidence  
               } : undefined,
            timestamp: item.action.trade.timestamp !== undefined ? {
                set: item.action.trade.timestamp  
               } : undefined,
            status: item.action.trade.status !== undefined ? {
                set: item.action.trade.status  
               } : undefined,
          },
          create: {
            qty: item.action.trade.qty !== undefined ? item.action.trade.qty : undefined,
            price: item.action.trade.price !== undefined ? item.action.trade.price : undefined,
            total: item.action.trade.total !== undefined ? item.action.trade.total : undefined,
            signal: item.action.trade.signal !== undefined ? item.action.trade.signal : undefined,
            strategy: item.action.trade.strategy !== undefined ? item.action.trade.strategy : undefined,
            analysis: item.action.trade.analysis !== undefined ? item.action.trade.analysis : undefined,
            confidence: item.action.trade.confidence !== undefined ? item.action.trade.confidence : undefined,
            timestamp: item.action.trade.timestamp !== undefined ? item.action.trade.timestamp : undefined,
            status: item.action.trade.status !== undefined ? item.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
        create: {
          sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
          type: item.action.type !== undefined ? item.action.type : undefined,
          note: item.action.note !== undefined ? item.action.note : undefined,
          status: item.action.status !== undefined ? item.action.status : undefined,
          fee: item.action.fee !== undefined ? item.action.fee : undefined,
      trade: item.action.trade ? 
        typeof item.action.trade === 'object' && Object.keys(item.action.trade).length === 1 && Object.keys(item.action.trade)[0] === 'id'
    ? { connect: {
            id: item.action.trade.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.action.trade.id !== undefined ? item.action.trade.id : undefined,
          },
          create: {
            qty: item.action.trade.qty !== undefined ? item.action.trade.qty : undefined,
            price: item.action.trade.price !== undefined ? item.action.trade.price : undefined,
            total: item.action.trade.total !== undefined ? item.action.trade.total : undefined,
            signal: item.action.trade.signal !== undefined ? item.action.trade.signal : undefined,
            strategy: item.action.trade.strategy !== undefined ? item.action.trade.strategy : undefined,
            analysis: item.action.trade.analysis !== undefined ? item.action.trade.analysis : undefined,
            confidence: item.action.trade.confidence !== undefined ? item.action.trade.confidence : undefined,
            timestamp: item.action.trade.timestamp !== undefined ? item.action.trade.timestamp : undefined,
            status: item.action.trade.status !== undefined ? item.action.trade.status : undefined,
          },
        }
      } : undefined,
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
          sellPrice: item.asset.sellPrice !== undefined ? {
              set: item.asset.sellPrice  
             } : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? {
              set: item.asset.buyPrice  
             } : undefined,
      trades: item.asset.trades ? {
        upsert: item.asset.trades.map((item: any) => ({
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
            price: item.price !== undefined ? {
                set: item.price  
               } : undefined,
            total: item.total !== undefined ? {
                set: item.total  
               } : undefined,
            signal: item.signal !== undefined ? {
                set: item.signal  
               } : undefined,
            strategy: item.strategy !== undefined ? {
                set: item.strategy  
               } : undefined,
            analysis: item.analysis !== undefined ? {
                set: item.analysis  
               } : undefined,
            confidence: item.confidence !== undefined ? {
                set: item.confidence  
               } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? {
        upsert: item.asset.positions.map((item: any) => ({
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
      newsMentions: item.asset.newsMentions ? {
        upsert: item.asset.newsMentions.map((item: any) => ({
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
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      trades: item.asset.trades ? 
        Array.isArray(item.asset.trades) && item.asset.trades.length > 0 &&  item.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? 
        Array.isArray(item.asset.positions) && item.asset.positions.length > 0 &&  item.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.positions.map((item: any) => ({
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
      newsMentions: item.asset.newsMentions ? 
        Array.isArray(item.asset.newsMentions) && item.asset.newsMentions.length > 0 &&  item.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.newsMentions.map((item: any) => ({
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
        filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
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
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.stopLoss.id !== undefined ? item.stopLoss.id : undefined,
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
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.takeProfit.id !== undefined ? item.takeProfit.id : undefined,
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
          }
        }
    : { connectOrCreate: {
        where: {
          id: item.action.id !== undefined ? item.action.id : undefined,
        },
        create: {
          sequence: item.action.sequence !== undefined ? item.action.sequence : undefined,
          type: item.action.type !== undefined ? item.action.type : undefined,
          note: item.action.note !== undefined ? item.action.note : undefined,
          status: item.action.status !== undefined ? item.action.status : undefined,
          fee: item.action.fee !== undefined ? item.action.fee : undefined,
      trade: item.action.trade ? 
        typeof item.action.trade === 'object' && Object.keys(item.action.trade).length === 1 && Object.keys(item.action.trade)[0] === 'id'
    ? { connect: {
            id: item.action.trade.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.action.trade.id !== undefined ? item.action.trade.id : undefined,
          },
          create: {
            qty: item.action.trade.qty !== undefined ? item.action.trade.qty : undefined,
            price: item.action.trade.price !== undefined ? item.action.trade.price : undefined,
            total: item.action.trade.total !== undefined ? item.action.trade.total : undefined,
            signal: item.action.trade.signal !== undefined ? item.action.trade.signal : undefined,
            strategy: item.action.trade.strategy !== undefined ? item.action.trade.strategy : undefined,
            analysis: item.action.trade.analysis !== undefined ? item.action.trade.analysis : undefined,
            confidence: item.action.trade.confidence !== undefined ? item.action.trade.confidence : undefined,
            timestamp: item.action.trade.timestamp !== undefined ? item.action.trade.timestamp : undefined,
            status: item.action.trade.status !== undefined ? item.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    asset: item.asset ? 
      typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
          id: item.asset.id
          }
        }
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
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      trades: item.asset.trades ? 
        Array.isArray(item.asset.trades) && item.asset.trades.length > 0 &&  item.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      positions: item.asset.positions ? 
        Array.isArray(item.asset.positions) && item.asset.positions.length > 0 &&  item.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.positions.map((item: any) => ({
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
      newsMentions: item.asset.newsMentions ? 
        Array.isArray(item.asset.newsMentions) && item.asset.newsMentions.length > 0 &&  item.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.newsMentions.map((item: any) => ({
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
          sellPrice: item.asset.sellPrice !== undefined ? {
              set: item.asset.sellPrice  
             } : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? {
              set: item.asset.buyPrice  
             } : undefined,
      trades: item.asset.trades ? {
        upsert: item.asset.trades.map((item: any) => ({
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
            price: item.price !== undefined ? {
                set: item.price  
               } : undefined,
            total: item.total !== undefined ? {
                set: item.total  
               } : undefined,
            signal: item.signal !== undefined ? {
                set: item.signal  
               } : undefined,
            strategy: item.strategy !== undefined ? {
                set: item.strategy  
               } : undefined,
            analysis: item.analysis !== undefined ? {
                set: item.analysis  
               } : undefined,
            confidence: item.confidence !== undefined ? {
                set: item.confidence  
               } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.asset.orders ? {
        upsert: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            clientOrderId: item.clientOrderId !== undefined ? {
                set: item.clientOrderId  
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
            orderClass: item.orderClass !== undefined ? {
                set: item.orderClass  
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
            strikePrice: item.strikePrice !== undefined ? {
                set: item.strikePrice  
               } : undefined,
            expirationDate: item.expirationDate !== undefined ? {
                set: item.expirationDate  
               } : undefined,
            optionType: item.optionType !== undefined ? {
                set: item.optionType  
               } : undefined,
            stopLossId: item.stopLossId !== undefined ? {
                set: item.stopLossId  
               } : undefined,
            takeProfitId: item.takeProfitId !== undefined ? {
                set: item.takeProfitId  
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
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      newsMentions: item.asset.newsMentions ? {
        upsert: item.asset.newsMentions.map((item: any) => ({
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
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      trades: item.asset.trades ? 
        Array.isArray(item.asset.trades) && item.asset.trades.length > 0 &&  item.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.asset.orders ? 
        Array.isArray(item.asset.orders) && item.asset.orders.length > 0 &&  item.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
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
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      newsMentions: item.asset.newsMentions ? 
        Array.isArray(item.asset.newsMentions) && item.asset.newsMentions.length > 0 &&  item.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.newsMentions.map((item: any) => ({
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
    asset: item.asset ? 
      typeof item.asset === 'object' && Object.keys(item.asset).length === 1 && Object.keys(item.asset)[0] === 'id'
    ? { connect: {
          id: item.asset.id
          }
        }
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
          sellPrice: item.asset.sellPrice !== undefined ? item.asset.sellPrice : undefined,
          buyPrice: item.asset.buyPrice !== undefined ? item.asset.buyPrice : undefined,
      trades: item.asset.trades ? 
        Array.isArray(item.asset.trades) && item.asset.trades.length > 0 &&  item.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.asset.orders ? 
        Array.isArray(item.asset.orders) && item.asset.orders.length > 0 &&  item.asset.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
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
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      newsMentions: item.asset.newsMentions ? 
        Array.isArray(item.asset.newsMentions) && item.asset.newsMentions.length > 0 &&  item.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.asset.newsMentions.map((item: any) => ({
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
    }))
  } : undefined,
  alerts: prop.alerts ? {
    upsert: prop.alerts.map((item: any) => ({
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
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
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
    actions {
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
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
      }
    }
  }
  orders {
    id
    clientOrderId
    alpacaAccountId
    assetId
    qty
    notional
    side
    type
    orderClass
    timeInForce
    limitPrice
    stopPrice
    stopLoss {
      id
      stopPrice
      limitPrice
      createdAt
      updatedAt
      orderId
      Order {
        id
      }
    }
    takeProfit {
      id
      limitPrice
      stopPrice
      createdAt
      updatedAt
      orderId
      Order {
        id
      }
    }
    trailPrice
    trailPercent
    extendedHours
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
        actions {
          id
        }
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
        }
        asset {
          id
        }
        actions {
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
        alpacaAccount {
          id
        }
        alpacaAccountId
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
    fee
    strikePrice
    expirationDate
    optionType
    stopLossId
    takeProfitId
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
      sellPrice
      buyPrice
      createdAt
      updatedAt
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
        }
        asset {
          id
        }
        actions {
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
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
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
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
        }
      }
      orders {
        id
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
            }
            asset {
              id
            }
            actions {
              id
            }
          }
          order {
            id
          }
        }
        asset {
          id
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
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
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
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
    actions {
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
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
      }
    }
  }
  orders {
    id
    clientOrderId
    alpacaAccountId
    assetId
    qty
    notional
    side
    type
    orderClass
    timeInForce
    limitPrice
    stopPrice
    stopLoss {
      id
      stopPrice
      limitPrice
      createdAt
      updatedAt
      orderId
      Order {
        id
      }
    }
    takeProfit {
      id
      limitPrice
      stopPrice
      createdAt
      updatedAt
      orderId
      Order {
        id
      }
    }
    trailPrice
    trailPercent
    extendedHours
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
        actions {
          id
        }
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
        }
        asset {
          id
        }
        actions {
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
        alpacaAccount {
          id
        }
        alpacaAccountId
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
    fee
    strikePrice
    expirationDate
    optionType
    stopLossId
    takeProfitId
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
      sellPrice
      buyPrice
      createdAt
      updatedAt
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
        }
        asset {
          id
        }
        actions {
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
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
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
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
        }
      }
      orders {
        id
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
            }
            asset {
              id
            }
            actions {
              id
            }
          }
          order {
            id
          }
        }
        asset {
          id
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
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
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
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
    actions {
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
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
      }
    }
  }
  orders {
    id
    clientOrderId
    alpacaAccountId
    assetId
    qty
    notional
    side
    type
    orderClass
    timeInForce
    limitPrice
    stopPrice
    stopLoss {
      id
      stopPrice
      limitPrice
      createdAt
      updatedAt
      orderId
      Order {
        id
      }
    }
    takeProfit {
      id
      limitPrice
      stopPrice
      createdAt
      updatedAt
      orderId
      Order {
        id
      }
    }
    trailPrice
    trailPercent
    extendedHours
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
        actions {
          id
        }
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
        }
        asset {
          id
        }
        actions {
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
        alpacaAccount {
          id
        }
        alpacaAccountId
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
    fee
    strikePrice
    expirationDate
    optionType
    stopLossId
    takeProfitId
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
      sellPrice
      buyPrice
      createdAt
      updatedAt
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
        }
        asset {
          id
        }
        actions {
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
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
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
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
        }
      }
      orders {
        id
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
            }
            asset {
              id
            }
            actions {
              id
            }
          }
          order {
            id
          }
        }
        asset {
          id
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
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
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
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
    actions {
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
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
      }
    }
  }
  orders {
    id
    clientOrderId
    alpacaAccountId
    assetId
    qty
    notional
    side
    type
    orderClass
    timeInForce
    limitPrice
    stopPrice
    stopLoss {
      id
      stopPrice
      limitPrice
      createdAt
      updatedAt
      orderId
      Order {
        id
      }
    }
    takeProfit {
      id
      limitPrice
      stopPrice
      createdAt
      updatedAt
      orderId
      Order {
        id
      }
    }
    trailPrice
    trailPercent
    extendedHours
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
        actions {
          id
        }
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
        }
        asset {
          id
        }
        actions {
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
        alpacaAccount {
          id
        }
        alpacaAccountId
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
    fee
    strikePrice
    expirationDate
    optionType
    stopLossId
    takeProfitId
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
      sellPrice
      buyPrice
      createdAt
      updatedAt
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
        }
        asset {
          id
        }
        actions {
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
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
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
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
        }
      }
      orders {
        id
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
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
            }
            asset {
              id
            }
            actions {
              id
            }
          }
          order {
            id
          }
        }
        asset {
          id
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
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
