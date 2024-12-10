
  
import { AlpacaAccount as AlpacaAccountType } from './generated/typegraphql-prisma/models/AlpacaAccount';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the AlpacaAccount model.
   */

  const selectionSet = `
    
  id
  type
  APIKey
  APISecret
  configuration
  marketOpen
  realTime
  minOrderSize
  maxOrderSize
  minPercentageChange
  volumeThreshold
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
    }
    sessions {
      id
      sessionToken
      userId
      expires
      createdAt
      updatedAt
    }
    authenticators {
      id
      userId
      credentialID
      publicKey
      counter
      createdAt
      updatedAt
    }
    plan
    openaiAPIKey
    openaiModel
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
    optionType
    signal
    strategy
    analysis
    summary
    confidence
    timestamp
    createdAt
    updatedAt
    status
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
      askPrice
      bidPrice
      createdAt
      updatedAt
    }
    actions {
      id
      sequence
      tradeId
      type
      note
      status
      fee
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
        }
        takeProfit {
id
        }
        trailPrice
        trailPercent
        extendedHours
        status
        createdAt
        updatedAt
        submittedAt
        filledAt
        filledQty
        filledAvgPrice
        cancelRequestedAt
        canceledAt
        actionId
        asset {
id
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
        contractId
      }
      dependsOn
      dependedOnBy
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
    }
    takeProfit {
      id
      limitPrice
      stopPrice
      createdAt
      updatedAt
      orderId
    }
    trailPrice
    trailPercent
    extendedHours
    status
    createdAt
    updatedAt
    submittedAt
    filledAt
    filledQty
    filledAvgPrice
    cancelRequestedAt
    canceledAt
    actionId
    action {
      id
      sequence
      tradeId
      type
      note
      status
      fee
      dependsOn
      dependedOnBy
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
      askPrice
      bidPrice
      createdAt
      updatedAt
    }
    fee
    strikePrice
    expirationDate
    optionType
    stopLossId
    takeProfitId
    contractId
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
      askPrice
      bidPrice
      createdAt
      updatedAt
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
    closed
    createdAt
    updatedAt
  }
  alerts {
    id
    alpacaAccountId
    message
    type
    isRead
    createdAt
    updatedAt
  }

  `;

  export const AlpacaAccount = {

    /**
     * Create a new AlpacaAccount record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created AlpacaAccount or null.
     */

    async create(props: AlpacaAccountType, globalClient?: ApolloClient<any>): Promise<AlpacaAccountType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_ALPACAACCOUNT = gql`
        mutation createOneAlpacaAccount($data: AlpacaAccountCreateInput!) {
          createOneAlpacaAccount(data: $data) {
            ${selectionSet}
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
  realTime: props.realTime !== undefined ? props.realTime : undefined,
  minOrderSize: props.minOrderSize !== undefined ? props.minOrderSize : undefined,
  maxOrderSize: props.maxOrderSize !== undefined ? props.maxOrderSize : undefined,
  minPercentageChange: props.minPercentageChange !== undefined ? props.minPercentageChange : undefined,
  volumeThreshold: props.volumeThreshold !== undefined ? props.volumeThreshold : undefined,
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
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? props.user.openaiAPIKey : undefined,
        openaiModel: props.user.openaiModel !== undefined ? props.user.openaiModel : undefined,
        customer: props.user.customer !== undefined ? {
            set: props.user.customer
          } : undefined,
        accounts: props.user.accounts !== undefined ? {
            set: props.user.accounts
          } : undefined,
        sessions: props.user.sessions !== undefined ? {
            set: props.user.sessions
          } : undefined,
        authenticators: props.user.authenticators !== undefined ? {
            set: props.user.authenticators
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
        alpacaAccountId: item.alpacaAccountId !== undefined ? {
            equals: item.alpacaAccountId 
           } : undefined,
      },
      create: {
        qty: item.qty !== undefined ? item.qty : undefined,
        price: item.price !== undefined ? item.price : undefined,
        total: item.total !== undefined ? item.total : undefined,
        optionType: item.optionType !== undefined ? item.optionType : undefined,
        signal: item.signal !== undefined ? item.signal : undefined,
        strategy: item.strategy !== undefined ? item.strategy : undefined,
        analysis: item.analysis !== undefined ? item.analysis : undefined,
        summary: item.summary !== undefined ? item.summary : undefined,
        confidence: item.confidence !== undefined ? item.confidence : undefined,
        timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        status: item.status !== undefined ? item.status : undefined,
        asset: item.asset !== undefined ? {
            set: item.asset
          } : undefined,
        actions: item.actions !== undefined ? {
            set: item.actions
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
        clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
        actionId: item.actionId !== undefined ? item.actionId : undefined,
        stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
        contractId: item.contractId !== undefined ? item.contractId : undefined,
        alpacaAccountId: item.alpacaAccountId !== undefined ? {
            equals: item.alpacaAccountId 
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
        filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
        filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
        cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
        canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
        fee: item.fee !== undefined ? item.fee : undefined,
        strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
        expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
        optionType: item.optionType !== undefined ? item.optionType : undefined,
        stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
        takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
        stopLoss: item.stopLoss !== undefined ? {
            set: item.stopLoss
          } : undefined,
        takeProfit: item.takeProfit !== undefined ? {
            set: item.takeProfit
          } : undefined,
        action: item.action !== undefined ? {
            set: item.action
          } : undefined,
        asset: item.asset !== undefined ? {
            set: item.asset
          } : undefined,
        contract: item.contract !== undefined ? {
            set: item.contract
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
        alpacaAccountId: item.alpacaAccountId !== undefined ? {
            equals: item.alpacaAccountId 
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
        closed: item.closed !== undefined ? item.closed : undefined,
        asset: item.asset !== undefined ? {
            set: item.asset
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
        alpacaAccountId: item.alpacaAccountId !== undefined ? {
            equals: item.alpacaAccountId 
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
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: AlpacaAccountType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

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
  realTime: prop.realTime !== undefined ? prop.realTime : undefined,
  minOrderSize: prop.minOrderSize !== undefined ? prop.minOrderSize : undefined,
  maxOrderSize: prop.maxOrderSize !== undefined ? prop.maxOrderSize : undefined,
  minPercentageChange: prop.minPercentageChange !== undefined ? prop.minPercentageChange : undefined,
  volumeThreshold: prop.volumeThreshold !== undefined ? prop.volumeThreshold : undefined,
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
   * @param globalClient - Apollo Client instance.
   * @returns The updated AlpacaAccount or null.
   */
  async update(props: AlpacaAccountType, globalClient?: ApolloClient<any>): Promise<AlpacaAccountType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_ALPACAACCOUNT = gql`
      mutation updateOneAlpacaAccount($data: AlpacaAccountUpdateInput!, $where: AlpacaAccountWhereUniqueInput!) {
        updateOneAlpacaAccount(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
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
  realTime: props.realTime !== undefined ? {
            set: props.realTime 
           } : undefined,
  minOrderSize: props.minOrderSize !== undefined ? {
            set: props.minOrderSize 
           } : undefined,
  maxOrderSize: props.maxOrderSize !== undefined ? {
            set: props.maxOrderSize 
           } : undefined,
  minPercentageChange: props.minPercentageChange !== undefined ? {
            set: props.minPercentageChange 
           } : undefined,
  volumeThreshold: props.volumeThreshold !== undefined ? {
            set: props.volumeThreshold 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  user: props.user !== undefined ? {
            set: props.user 
           } : undefined,
  trades: props.trades !== undefined ? {
            set: props.trades 
           } : undefined,
  orders: props.orders !== undefined ? {
            set: props.orders 
           } : undefined,
  positions: props.positions !== undefined ? {
            set: props.positions 
           } : undefined,
  alerts: props.alerts !== undefined ? {
            set: props.alerts 
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
   * Upsert a single AlpacaAccount record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated AlpacaAccount or null.
   */
  async upsert(props: AlpacaAccountType, globalClient?: ApolloClient<any>): Promise<AlpacaAccountType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_ALPACAACCOUNT = gql`
      mutation upsertOneAlpacaAccount($where: AlpacaAccountWhereUniqueInput!, $create: AlpacaAccountCreateInput!, $update: AlpacaAccountUpdateInput!) {
        upsertOneAlpacaAccount(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
      },
      create: {
    type: props.type !== undefined ? props.type : undefined,
  APIKey: props.APIKey !== undefined ? props.APIKey : undefined,
  APISecret: props.APISecret !== undefined ? props.APISecret : undefined,
  configuration: props.configuration !== undefined ? props.configuration : undefined,
  marketOpen: props.marketOpen !== undefined ? props.marketOpen : undefined,
  realTime: props.realTime !== undefined ? props.realTime : undefined,
  minOrderSize: props.minOrderSize !== undefined ? props.minOrderSize : undefined,
  maxOrderSize: props.maxOrderSize !== undefined ? props.maxOrderSize : undefined,
  minPercentageChange: props.minPercentageChange !== undefined ? props.minPercentageChange : undefined,
  volumeThreshold: props.volumeThreshold !== undefined ? props.volumeThreshold : undefined,
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
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? props.user.openaiAPIKey : undefined,
        openaiModel: props.user.openaiModel !== undefined ? props.user.openaiModel : undefined,
        customer: props.user.customer !== undefined ? {
            set: props.user.customer
          } : undefined,
        accounts: props.user.accounts !== undefined ? {
            set: props.user.accounts
          } : undefined,
        sessions: props.user.sessions !== undefined ? {
            set: props.user.sessions
          } : undefined,
        authenticators: props.user.authenticators !== undefined ? {
            set: props.user.authenticators
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
        alpacaAccountId: item.alpacaAccountId !== undefined ? {
            equals: item.alpacaAccountId 
           } : undefined,
      },
      create: {
        qty: item.qty !== undefined ? item.qty : undefined,
        price: item.price !== undefined ? item.price : undefined,
        total: item.total !== undefined ? item.total : undefined,
        optionType: item.optionType !== undefined ? item.optionType : undefined,
        signal: item.signal !== undefined ? item.signal : undefined,
        strategy: item.strategy !== undefined ? item.strategy : undefined,
        analysis: item.analysis !== undefined ? item.analysis : undefined,
        summary: item.summary !== undefined ? item.summary : undefined,
        confidence: item.confidence !== undefined ? item.confidence : undefined,
        timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        status: item.status !== undefined ? item.status : undefined,
        asset: item.asset !== undefined ? {
            set: item.asset
          } : undefined,
        actions: item.actions !== undefined ? {
            set: item.actions
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
        clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
        actionId: item.actionId !== undefined ? item.actionId : undefined,
        stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
        contractId: item.contractId !== undefined ? item.contractId : undefined,
        alpacaAccountId: item.alpacaAccountId !== undefined ? {
            equals: item.alpacaAccountId 
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
        filledQty: item.filledQty !== undefined ? item.filledQty : undefined,
        filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
        cancelRequestedAt: item.cancelRequestedAt !== undefined ? item.cancelRequestedAt : undefined,
        canceledAt: item.canceledAt !== undefined ? item.canceledAt : undefined,
        fee: item.fee !== undefined ? item.fee : undefined,
        strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
        expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
        optionType: item.optionType !== undefined ? item.optionType : undefined,
        stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
        takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
        stopLoss: item.stopLoss !== undefined ? {
            set: item.stopLoss
          } : undefined,
        takeProfit: item.takeProfit !== undefined ? {
            set: item.takeProfit
          } : undefined,
        action: item.action !== undefined ? {
            set: item.action
          } : undefined,
        asset: item.asset !== undefined ? {
            set: item.asset
          } : undefined,
        contract: item.contract !== undefined ? {
            set: item.contract
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
        alpacaAccountId: item.alpacaAccountId !== undefined ? {
            equals: item.alpacaAccountId 
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
        closed: item.closed !== undefined ? item.closed : undefined,
        asset: item.asset !== undefined ? {
            set: item.asset
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
        alpacaAccountId: item.alpacaAccountId !== undefined ? {
            equals: item.alpacaAccountId 
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
      update: {
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
  realTime: props.realTime !== undefined ? {
            set: props.realTime 
           } : undefined,
  minOrderSize: props.minOrderSize !== undefined ? {
            set: props.minOrderSize 
           } : undefined,
  maxOrderSize: props.maxOrderSize !== undefined ? {
            set: props.maxOrderSize 
           } : undefined,
  minPercentageChange: props.minPercentageChange !== undefined ? {
            set: props.minPercentageChange 
           } : undefined,
  volumeThreshold: props.volumeThreshold !== undefined ? {
            set: props.volumeThreshold 
           } : undefined,
  user: props.user !== undefined ? {
            set: props.user 
           } : undefined,
  trades: props.trades !== undefined ? {
            set: props.trades 
           } : undefined,
  orders: props.orders !== undefined ? {
            set: props.orders 
           } : undefined,
  positions: props.positions !== undefined ? {
            set: props.positions 
           } : undefined,
  alerts: props.alerts !== undefined ? {
            set: props.alerts 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_ALPACAACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneAlpacaAccount) {
        return response.data.upsertOneAlpacaAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneAlpacaAccount:', error);
      throw error;
    }
  },

  /**
   * Update multiple AlpacaAccount records.
   * @param props - Array of AlpacaAccount objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: AlpacaAccountType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_ALPACAACCOUNT = gql`
      mutation updateManyAlpacaAccount($data: [AlpacaAccountCreateManyInput!]!) {
        updateManyAlpacaAccount(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  userId: prop.userId !== undefined ? {
    equals: prop.userId 
  } : undefined,

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
  realTime: prop.realTime !== undefined ? {
            set: prop.realTime 
           } : undefined,
  minOrderSize: prop.minOrderSize !== undefined ? {
            set: prop.minOrderSize 
           } : undefined,
  maxOrderSize: prop.maxOrderSize !== undefined ? {
            set: prop.maxOrderSize 
           } : undefined,
  minPercentageChange: prop.minPercentageChange !== undefined ? {
            set: prop.minPercentageChange 
           } : undefined,
  volumeThreshold: prop.volumeThreshold !== undefined ? {
            set: prop.volumeThreshold 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  user: prop.user !== undefined ? {
            set: prop.user 
           } : undefined,
  trades: prop.trades !== undefined ? {
            set: prop.trades 
           } : undefined,
  orders: prop.orders !== undefined ? {
            set: prop.orders 
           } : undefined,
  positions: prop.positions !== undefined ? {
            set: prop.positions 
           } : undefined,
  alerts: prop.alerts !== undefined ? {
            set: prop.alerts 
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
   * @param globalClient - Apollo Client instance.
   * @returns The deleted AlpacaAccount or null.
   */
  async delete(props: AlpacaAccountType, globalClient?: ApolloClient<any>): Promise<AlpacaAccountType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_ALPACAACCOUNT = gql`
      mutation deleteOneAlpacaAccount($where: AlpacaAccountWhereUniqueInput!) {
        deleteOneAlpacaAccount(where: $where) {
          ${selectionSet}
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
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved AlpacaAccount or null.
   */
  async get(props: AlpacaAccountType, globalClient?: ApolloClient<any>): Promise<AlpacaAccountType | null> {

    const client = globalClient || importedClient;

    const GET_ALPACAACCOUNT = gql`
      query getAlpacaAccount($where: AlpacaAccountWhereUniqueInput!) {
        getAlpacaAccount(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
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
   * @param globalClient - Apollo Client instance.
   * @returns An array of AlpacaAccount records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<AlpacaAccountType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_ALPACAACCOUNT = gql`
      query getAllAlpacaAccount {
        alpacaAccounts {
          ${selectionSet}
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
   * @param globalClient - Apollo Client instance.
   * @returns An array of found AlpacaAccount records or null.
   */
  async findMany(props: AlpacaAccountType, globalClient?: ApolloClient<any>): Promise<AlpacaAccountType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_ALPACAACCOUNT = gql`
      query findManyAlpacaAccount($where: AlpacaAccountWhereInput!) {
        alpacaAccounts(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
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
