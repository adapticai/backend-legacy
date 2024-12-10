
  
import { User as UserType } from './generated/typegraphql-prisma/models/User';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the User model.
   */

  const selectionSet = `
    
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
  alpacaAccounts {
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
  }
  openaiAPIKey
  openaiModel

  `;

  export const User = {

    /**
     * Create a new User record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created User or null.
     */

    async create(props: UserType, globalClient?: ApolloClient<any>): Promise<UserType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_USER = gql`
        mutation createOneUser($data: UserCreateInput!) {
          createOneUser(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            name: props.name !== undefined ? props.name : undefined,
  email: props.email !== undefined ? props.email : undefined,
  emailVerified: props.emailVerified !== undefined ? props.emailVerified : undefined,
  image: props.image !== undefined ? props.image : undefined,
  role: props.role !== undefined ? props.role : undefined,
  bio: props.bio !== undefined ? props.bio : undefined,
  jobTitle: props.jobTitle !== undefined ? props.jobTitle : undefined,
  currentAccount: props.currentAccount !== undefined ? props.currentAccount : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? props.openaiAPIKey : undefined,
  openaiModel: props.openaiModel !== undefined ? props.openaiModel : undefined,
  customer: props.customer ? 
    typeof props.customer === 'object' && Object.keys(props.customer).length === 1 && Object.keys(props.customer)[0] === 'id'
    ? { connect: {
        id: props.customer.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.customer.id !== undefined ? props.customer.id : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        authUserId: props.customer.authUserId !== undefined ? {
            equals: props.customer.authUserId 
           } : undefined,
        name: props.customer.name !== undefined ? {
            equals: props.customer.name 
           } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            equals: props.customer.stripePriceId 
           } : undefined,
      },
      create: {
        authUserId: props.customer.authUserId !== undefined ? props.customer.authUserId : undefined,
        name: props.customer.name !== undefined ? props.customer.name : undefined,
        plan: props.customer.plan !== undefined ? props.customer.plan : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? props.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? props.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: props.accounts ? 
    Array.isArray(props.accounts) && props.accounts.length > 0 &&  props.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.accounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.accounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
        providerAccountId: item.providerAccountId !== undefined ? {
            equals: item.providerAccountId 
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
  sessions: props.sessions ? 
    Array.isArray(props.sessions) && props.sessions.length > 0 &&  props.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.sessions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.sessions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
        expires: item.expires !== undefined ? item.expires : undefined,
      },
    }))
  } : undefined,
  authenticators: props.authenticators ? 
    Array.isArray(props.authenticators) && props.authenticators.length > 0 &&  props.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.authenticators.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.authenticators.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
        publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
        counter: item.counter !== undefined ? item.counter : undefined,
      },
    }))
  } : undefined,
  alpacaAccounts: props.alpacaAccounts ? 
    Array.isArray(props.alpacaAccounts) && props.alpacaAccounts.length > 0 &&  props.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.alpacaAccounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.alpacaAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
        APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
        configuration: item.configuration !== undefined ? item.configuration : undefined,
        marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        realTime: item.realTime !== undefined ? item.realTime : undefined,
        minOrderSize: item.minOrderSize !== undefined ? item.minOrderSize : undefined,
        maxOrderSize: item.maxOrderSize !== undefined ? item.maxOrderSize : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
        trades: item.trades !== undefined ? {
            set: item.trades
          } : undefined,
        orders: item.orders !== undefined ? {
            set: item.orders
          } : undefined,
        positions: item.positions !== undefined ? {
            set: item.positions
          } : undefined,
        alerts: item.alerts !== undefined ? {
            set: item.alerts
          } : undefined,
      },
    }))
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneUser) {
        return response.data.createOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneUser:', error);
      throw error;
    }
  },

  /**
   * Create multiple User records.
   * @param props - Array of User objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: UserType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_USER = gql`
      mutation createManyUser($data: [UserCreateManyInput!]!) {
        createManyUser(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  name: prop.name !== undefined ? prop.name : undefined,
  email: prop.email !== undefined ? prop.email : undefined,
  emailVerified: prop.emailVerified !== undefined ? prop.emailVerified : undefined,
  image: prop.image !== undefined ? prop.image : undefined,
  role: prop.role !== undefined ? prop.role : undefined,
  bio: prop.bio !== undefined ? prop.bio : undefined,
  jobTitle: prop.jobTitle !== undefined ? prop.jobTitle : undefined,
  currentAccount: prop.currentAccount !== undefined ? prop.currentAccount : undefined,
  customerId: prop.customerId !== undefined ? prop.customerId : undefined,
  plan: prop.plan !== undefined ? prop.plan : undefined,
  openaiAPIKey: prop.openaiAPIKey !== undefined ? prop.openaiAPIKey : undefined,
  openaiModel: prop.openaiModel !== undefined ? prop.openaiModel : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyUser) {
        return response.data.createManyUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyUser:', error);
      throw error;
    }
  },

  /**
   * Update a single User record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated User or null.
   */
  async update(props: UserType, globalClient?: ApolloClient<any>): Promise<UserType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_USER = gql`
      mutation updateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
        updateOneUser(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  emailVerified: props.emailVerified !== undefined ? {
            set: props.emailVerified 
           } : undefined,
  image: props.image !== undefined ? {
            set: props.image 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  role: props.role !== undefined ? {
            set: props.role 
           } : undefined,
  bio: props.bio !== undefined ? {
            set: props.bio 
           } : undefined,
  jobTitle: props.jobTitle !== undefined ? {
            set: props.jobTitle 
           } : undefined,
  currentAccount: props.currentAccount !== undefined ? {
            set: props.currentAccount 
           } : undefined,
  plan: props.plan !== undefined ? {
            set: props.plan 
           } : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? {
            set: props.openaiAPIKey 
           } : undefined,
  openaiModel: props.openaiModel !== undefined ? {
            set: props.openaiModel 
           } : undefined,
  customer: props.customer !== undefined ? {
            set: props.customer 
           } : undefined,
  accounts: props.accounts !== undefined ? {
            set: props.accounts 
           } : undefined,
  sessions: props.sessions !== undefined ? {
            set: props.sessions 
           } : undefined,
  authenticators: props.authenticators !== undefined ? {
            set: props.authenticators 
           } : undefined,
  alpacaAccounts: props.alpacaAccounts !== undefined ? {
            set: props.alpacaAccounts 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneUser) {
        return response.data.updateOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneUser:', error);
      throw error;
    }
  },

  /**
   * Upsert a single User record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated User or null.
   */
  async upsert(props: UserType, globalClient?: ApolloClient<any>): Promise<UserType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_USER = gql`
      mutation upsertOneUser($where: UserWhereUniqueInput!, $create: UserCreateInput!, $update: UserUpdateInput!) {
        upsertOneUser(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
      },
      create: {
    name: props.name !== undefined ? props.name : undefined,
  email: props.email !== undefined ? props.email : undefined,
  emailVerified: props.emailVerified !== undefined ? props.emailVerified : undefined,
  image: props.image !== undefined ? props.image : undefined,
  role: props.role !== undefined ? props.role : undefined,
  bio: props.bio !== undefined ? props.bio : undefined,
  jobTitle: props.jobTitle !== undefined ? props.jobTitle : undefined,
  currentAccount: props.currentAccount !== undefined ? props.currentAccount : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? props.openaiAPIKey : undefined,
  openaiModel: props.openaiModel !== undefined ? props.openaiModel : undefined,
  customer: props.customer ? 
    typeof props.customer === 'object' && Object.keys(props.customer).length === 1 && Object.keys(props.customer)[0] === 'id'
    ? { connect: {
        id: props.customer.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.customer.id !== undefined ? props.customer.id : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        authUserId: props.customer.authUserId !== undefined ? {
            equals: props.customer.authUserId 
           } : undefined,
        name: props.customer.name !== undefined ? {
            equals: props.customer.name 
           } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            equals: props.customer.stripePriceId 
           } : undefined,
      },
      create: {
        authUserId: props.customer.authUserId !== undefined ? props.customer.authUserId : undefined,
        name: props.customer.name !== undefined ? props.customer.name : undefined,
        plan: props.customer.plan !== undefined ? props.customer.plan : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? props.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? props.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: props.accounts ? 
    Array.isArray(props.accounts) && props.accounts.length > 0 &&  props.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.accounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.accounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
        providerAccountId: item.providerAccountId !== undefined ? {
            equals: item.providerAccountId 
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
  sessions: props.sessions ? 
    Array.isArray(props.sessions) && props.sessions.length > 0 &&  props.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.sessions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.sessions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
        expires: item.expires !== undefined ? item.expires : undefined,
      },
    }))
  } : undefined,
  authenticators: props.authenticators ? 
    Array.isArray(props.authenticators) && props.authenticators.length > 0 &&  props.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.authenticators.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.authenticators.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
        publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
        counter: item.counter !== undefined ? item.counter : undefined,
      },
    }))
  } : undefined,
  alpacaAccounts: props.alpacaAccounts ? 
    Array.isArray(props.alpacaAccounts) && props.alpacaAccounts.length > 0 &&  props.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.alpacaAccounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.alpacaAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
        APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
        configuration: item.configuration !== undefined ? item.configuration : undefined,
        marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        realTime: item.realTime !== undefined ? item.realTime : undefined,
        minOrderSize: item.minOrderSize !== undefined ? item.minOrderSize : undefined,
        maxOrderSize: item.maxOrderSize !== undefined ? item.maxOrderSize : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
        trades: item.trades !== undefined ? {
            set: item.trades
          } : undefined,
        orders: item.orders !== undefined ? {
            set: item.orders
          } : undefined,
        positions: item.positions !== undefined ? {
            set: item.positions
          } : undefined,
        alerts: item.alerts !== undefined ? {
            set: item.alerts
          } : undefined,
      },
    }))
  } : undefined,
      },
      update: {
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  emailVerified: props.emailVerified !== undefined ? {
            set: props.emailVerified 
           } : undefined,
  image: props.image !== undefined ? {
            set: props.image 
           } : undefined,
  role: props.role !== undefined ? {
            set: props.role 
           } : undefined,
  bio: props.bio !== undefined ? {
            set: props.bio 
           } : undefined,
  jobTitle: props.jobTitle !== undefined ? {
            set: props.jobTitle 
           } : undefined,
  currentAccount: props.currentAccount !== undefined ? {
            set: props.currentAccount 
           } : undefined,
  plan: props.plan !== undefined ? {
            set: props.plan 
           } : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? {
            set: props.openaiAPIKey 
           } : undefined,
  openaiModel: props.openaiModel !== undefined ? {
            set: props.openaiModel 
           } : undefined,
  customer: props.customer !== undefined ? {
            set: props.customer 
           } : undefined,
  accounts: props.accounts !== undefined ? {
            set: props.accounts 
           } : undefined,
  sessions: props.sessions !== undefined ? {
            set: props.sessions 
           } : undefined,
  authenticators: props.authenticators !== undefined ? {
            set: props.authenticators 
           } : undefined,
  alpacaAccounts: props.alpacaAccounts !== undefined ? {
            set: props.alpacaAccounts 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneUser) {
        return response.data.upsertOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneUser:', error);
      throw error;
    }
  },

  /**
   * Update multiple User records.
   * @param props - Array of User objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: UserType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_USER = gql`
      mutation updateManyUser($data: [UserCreateManyInput!]!) {
        updateManyUser(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  email: prop.email !== undefined ? prop.email : undefined,
  name: prop.name !== undefined ? {
    equals: prop.name 
  } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  name: prop.name !== undefined ? {
            set: prop.name 
           } : undefined,
  email: prop.email !== undefined ? {
            set: prop.email 
           } : undefined,
  emailVerified: prop.emailVerified !== undefined ? {
            set: prop.emailVerified 
           } : undefined,
  image: prop.image !== undefined ? {
            set: prop.image 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  role: prop.role !== undefined ? {
            set: prop.role 
           } : undefined,
  bio: prop.bio !== undefined ? {
            set: prop.bio 
           } : undefined,
  jobTitle: prop.jobTitle !== undefined ? {
            set: prop.jobTitle 
           } : undefined,
  currentAccount: prop.currentAccount !== undefined ? {
            set: prop.currentAccount 
           } : undefined,
  plan: prop.plan !== undefined ? {
            set: prop.plan 
           } : undefined,
  openaiAPIKey: prop.openaiAPIKey !== undefined ? {
            set: prop.openaiAPIKey 
           } : undefined,
  openaiModel: prop.openaiModel !== undefined ? {
            set: prop.openaiModel 
           } : undefined,
  customer: prop.customer !== undefined ? {
            set: prop.customer 
           } : undefined,
  accounts: prop.accounts !== undefined ? {
            set: prop.accounts 
           } : undefined,
  sessions: prop.sessions !== undefined ? {
            set: prop.sessions 
           } : undefined,
  authenticators: prop.authenticators !== undefined ? {
            set: prop.authenticators 
           } : undefined,
  alpacaAccounts: prop.alpacaAccounts !== undefined ? {
            set: prop.alpacaAccounts 
           } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyUser) {
        return response.data.updateManyUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyUser:', error);
      throw error;
    }
  },

  /**
   * Delete a single User record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted User or null.
   */
  async delete(props: UserType, globalClient?: ApolloClient<any>): Promise<UserType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_USER = gql`
      mutation deleteOneUser($where: UserWhereUniqueInput!) {
        deleteOneUser(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneUser) {
        return response.data.deleteOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneUser:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single User record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved User or null.
   */
  async get(props: UserType, globalClient?: ApolloClient<any>): Promise<UserType | null> {

    const client = globalClient || importedClient;

    const GET_USER = gql`
      query getUser($where: UserWhereUniqueInput!) {
        getUser(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getUser ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No User found') {
        return null;
      } else {
        console.error('Error in getUser:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Users records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of User records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<UserType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_USER = gql`
      query getAllUser {
        users {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_USER });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.users ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No User found') {
        return null;
      } else {
        console.error('Error in getUser:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple User records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found User records or null.
   */
  async findMany(props: UserType, globalClient?: ApolloClient<any>): Promise<UserType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_USER = gql`
      query findManyUser($where: UserWhereInput!) {
        users(where: $where) {
          ${selectionSet}
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
  email: props.email !== undefined ? {
    equals: props.email 
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Users) {
        return response.data.users;
      } else {
       return [] as UserType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No User found') {
        return null;
      } else {
        console.error('Error in getUser:', error);
        throw error;
      }
    }
  }
};
