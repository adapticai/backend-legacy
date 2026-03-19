
  
import { Organization as OrganizationType } from './generated/typegraphql-prisma/models/Organization';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the Organization model.
   */

  const selectionSet = `
    
  id
  name
  slug
  logoUrl
  website
  businessType
  jurisdiction
  regulatoryStatus
  description
  tradingDefaults
  llmDefaults
  createdAt
  updatedAt
  deletedAt
  members {
    id
    organizationId
    userId
    user {
      id
      name
      email
      emailVerified
      image
      createdAt
      updatedAt
      deletedAt
      role
      bio
      jobTitle
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
      fundAssignments {
        id
        fundId
        fund {
id
        }
        userId
        role
        permissions
        createdAt
        updatedAt
      }
      investorProfile {
        id
        name
        email
        type
        kycStatus
        walletAddress
        userId
        createdAt
        updatedAt
        deletedAt
        investments {
id
        }
      }
      openaiAPIKey
      openaiModel
      passwordHash
      avatarUrl
      onboardingComplete
      signupCategory
      linkedProviders {
        id
        userId
        provider
        providerAccountId
        email
        accessToken
        refreshToken
        expiresAt
        linkedAt
        updatedAt
      }
      accountLinkingRequests {
        id
        userId
        email
        provider
        providerAccountId
        status
        verificationToken
        userAgent
        ipAddress
        createdAt
        expiresAt
        verifiedAt
        approvedAt
        rejectedAt
      }
      reviewedWaitlistEntries {
        id
        email
        fullName
        companyName
        companyWebsite
        jobRole
        professionalInvestorConfirmed
        status
        queuePosition
        createdAt
        updatedAt
        reviewedAt
        reviewedById
        inviteToken {
id
        }
      }
      dashboardLayouts {
        id
        userId
        role
        layout
        createdAt
        updatedAt
      }
    }
    role
    permissions
    createdAt
    updatedAt
  }
  funds {
    id
    name
    slug
    description
    status
    tradingOverrides
    llmOverrides
    organizationId
    createdAt
    updatedAt
    deletedAt
    brokerageAccounts {
      id
      provider
      type
      apiKey
      apiSecret
      configuration
      marketOpen
      realTime
      cryptoTradingEnabled
      cryptoTradingPairs
      cryptoTradeAllocationPct
      tradeAllocationPct
      allocation {
        id
        equities
        optionsContracts
        futures
        etfs
        forex
        crypto
        stocks
        options
        brokerageAccountId
        brokerageAccount {
id
        }
        createdAt
        updatedAt
      }
      autoAllocation
      minPercentageChange
      volumeThreshold
      enablePortfolioTrailingStop
      portfolioTrailPercent
      portfolioProfitThresholdPercent
      reducedPortfolioTrailPercent
      defaultTrailingStopPercentage100
      firstTrailReductionThreshold100
      secondTrailReductionThreshold100
      firstReducedTrailPercentage100
      secondReducedTrailPercentage100
      minimumPriceChangePercent100
      fundId
      createdAt
      updatedAt
      deletedAt
      alerts {
        id
        brokerageAccountId
        title
        message
        type
        severity
        category
        status
        isRead
        acknowledgedAt
        resolvedAt
        suppressedUntil
        retryCount
        metadata
        createdAt
        updatedAt
      }
      trades {
        id
        brokerageAccountId
        signal
        strategy
        analysis
        summary
        confidence
        timestamp
        createdAt
        updatedAt
        status
        deletedAt
        symbol
        actions {
id
        }
        entryPrice
        exitPrice
        entryQty
        exitQty
        entryValue
        exitValue
        entryTime
        exitTime
        pnlAmount
        pnlPercent
        durationMinutes
        marketPhase
        marketVolatility
        sessionHorizonMinutes
        thresholdsJson
      }
      optionsPositions {
        id
        brokerageAccountId
        contractId
        contract {
id
        }
        status
        openingSide
        quantity
        entryPrice
        entryCost
        entryTime
        exitPrice
        exitValue
        exitTime
        currentPrice
        currentValue
        unrealizedPnL
        unrealizedPnLPercent
        realizedPnL
        realizedPnLPercent
        totalFees
        currentDelta
        currentGamma
        currentTheta
        currentVega
        currentRho
        currentImpliedVolatility
        daysHeld
        exitReason
        strategyType
        tradeId
        metadata
        createdAt
        updatedAt
        executions {
id
        }
      }
      optionsTradeExecutions {
        id
        positionId
        position {
id
        }
        contractId
        contract {
id
        }
        brokerageAccountId
        brokerOrderId
        executionSide
        quantity
        executionPrice
        executionValue
        fees
        executionTime
        underlyingPriceAtExecution
        deltaAtExecution
        gammaAtExecution
        thetaAtExecution
        vegaAtExecution
        rhoAtExecution
        impliedVolatilityAtExecution
        orderType
        limitPrice
        stopPrice
        timeInForce
        venue
        slippage
        notes
        metadata
        createdAt
        updatedAt
      }
    }
    assignments {
      id
      fundId
      userId
      user {
        id
        name
        email
        emailVerified
        image
        createdAt
        updatedAt
        deletedAt
        role
        bio
        jobTitle
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
        orgMemberships {
id
        }
        investorProfile {
id
        }
        openaiAPIKey
        openaiModel
        passwordHash
        avatarUrl
        onboardingComplete
        signupCategory
        linkedProviders {
id
        }
        accountLinkingRequests {
id
        }
        reviewedWaitlistEntries {
id
        }
        dashboardLayouts {
id
        }
      }
      role
      permissions
      createdAt
      updatedAt
    }
    investments {
      id
      fundId
      investorId
      investor {
        id
        name
        email
        type
        kycStatus
        walletAddress
        userId
        user {
id
        }
        createdAt
        updatedAt
        deletedAt
      }
      units
      investedAt
      status
      createdAt
      updatedAt
    }
  }

  `;

  export const Organization = {

    /**
     * Create a new Organization record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Organization or null.
     */

    /**
     * Create a new Organization record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created Organization or null.
     */
    async create(props: OrganizationType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OrganizationType> {
      // Maximum number of retries for database connection issues
      const MAX_RETRIES = 2;
      let retryCount = 0;
      let lastError: any = null;

      // Retry loop to handle potential database connection issues
      while (retryCount < MAX_RETRIES) {
        try {
          const [modules, client] = await Promise.all([
            getApolloModules(),
            globalClient
              ? Promise.resolve(globalClient)
              : importedClient
          ]);

          const { gql, ApolloError } = modules;

          const CREATE_ONE_ORGANIZATION = gql`
              mutation createOneOrganization($data: OrganizationCreateInput!) {
                createOneOrganization(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                name: props.name !== undefined ? props.name : undefined,
  slug: props.slug !== undefined ? props.slug : undefined,
  logoUrl: props.logoUrl !== undefined ? props.logoUrl : undefined,
  website: props.website !== undefined ? props.website : undefined,
  businessType: props.businessType !== undefined ? props.businessType : undefined,
  jurisdiction: props.jurisdiction !== undefined ? props.jurisdiction : undefined,
  regulatoryStatus: props.regulatoryStatus !== undefined ? props.regulatoryStatus : undefined,
  description: props.description !== undefined ? props.description : undefined,
  tradingDefaults: props.tradingDefaults !== undefined ? props.tradingDefaults : undefined,
  llmDefaults: props.llmDefaults !== undefined ? props.llmDefaults : undefined,
  deletedAt: props.deletedAt !== undefined ? props.deletedAt : undefined,
  members: props.members ? 
    Array.isArray(props.members) && props.members.length > 0 &&  props.members.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.members.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.members.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        organizationId: item.organizationId !== undefined ? {
            equals: item.organizationId 
           } : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        role: item.role !== undefined ? item.role : undefined,
        permissions: item.permissions !== undefined ? {
            set: item.permissions 
           } : undefined,
    user: item.user ? 
      typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
          id: item.user.id
          }
        }
    : { connectOrCreate: {
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
          deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
          openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
          openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
          passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
          avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
          onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
          signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
      customer: item.user.customer ? 
        typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && Object.keys(item.user.customer)[0] === 'id'
    ? { connect: {
            id: item.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.customer.id !== undefined ? item.user.customer.id : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId 
               } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name 
               } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
        Array.isArray(item.user.accounts) && item.user.accounts.length > 0 &&  item.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
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
      sessions: item.user.sessions ? 
        Array.isArray(item.user.sessions) && item.user.sessions.length > 0 &&  item.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.sessions.map((item: any) => ({
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
      authenticators: item.user.authenticators ? 
        Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 &&  item.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.authenticators.map((item: any) => ({
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
      fundAssignments: item.user.fundAssignments ? 
        Array.isArray(item.user.fundAssignments) && item.user.fundAssignments.length > 0 &&  item.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.fundAssignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.fundAssignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investorProfile: item.user.investorProfile ? 
        typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && Object.keys(item.user.investorProfile)[0] === 'id'
    ? { connect: {
            id: item.user.investorProfile.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.investorProfile.id !== undefined ? item.user.investorProfile.id : undefined,
            userId: item.user.investorProfile.userId !== undefined ? item.user.investorProfile.userId : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name 
               } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email 
               } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
        Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 &&  item.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
        Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 &&  item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
        Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 &&  item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
        Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 &&  item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  funds: props.funds ? 
    Array.isArray(props.funds) && props.funds.length > 0 &&  props.funds.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.funds.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.funds.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        name: item.name !== undefined ? {
            equals: item.name 
           } : undefined,
        slug: item.slug !== undefined ? {
            equals: item.slug 
           } : undefined,
        organizationId: item.organizationId !== undefined ? {
            equals: item.organizationId 
           } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        slug: item.slug !== undefined ? item.slug : undefined,
        description: item.description !== undefined ? item.description : undefined,
        status: item.status !== undefined ? item.status : undefined,
        tradingOverrides: item.tradingOverrides !== undefined ? item.tradingOverrides : undefined,
        llmOverrides: item.llmOverrides !== undefined ? item.llmOverrides : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
    brokerageAccounts: item.brokerageAccounts ? 
      Array.isArray(item.brokerageAccounts) && item.brokerageAccounts.length > 0 &&  item.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.brokerageAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.brokerageAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
        },
        create: {
          provider: item.provider !== undefined ? item.provider : undefined,
          type: item.type !== undefined ? item.type : undefined,
          apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
          apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
          realTime: item.realTime !== undefined ? item.realTime : undefined,
          cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
              set: item.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
          autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
          deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
      allocation: item.allocation ? 
        typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && Object.keys(item.allocation)[0] === 'id'
    ? { connect: {
            id: item.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.allocation.id !== undefined ? item.allocation.id : undefined,
            brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? item.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
            optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
            futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
            forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
          },
        }
      } : undefined,
      alerts: item.alerts ? 
        Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
        Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsPositions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
        Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    assignments: item.assignments ? 
      Array.isArray(item.assignments) && item.assignments.length > 0 &&  item.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.assignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.assignments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      user: item.user ? 
        typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
            id: item.user.id
            }
          }
    : { connectOrCreate: {
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
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investments: item.investments ? 
      Array.isArray(item.investments) && item.investments.length > 0 &&  item.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.investments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.investments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
          investorId: item.investorId !== undefined ? {
              equals: item.investorId 
             } : undefined,
        },
        create: {
          units: item.units !== undefined ? item.units : undefined,
          investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
          status: item.status !== undefined ? item.status : undefined,
      investor: item.investor ? 
        typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && Object.keys(item.investor)[0] === 'id'
    ? { connect: {
            id: item.investor.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.id !== undefined ? item.investor.id : undefined,
            userId: item.investor.userId !== undefined ? item.investor.userId : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name 
               } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email 
               } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_ORGANIZATION,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneOrganization) {
            return response.data.createOneOrganization;
          } else {
            return null as any;
          }
        } catch (error: any) {
          lastError = error;

          // Check if this is a database connection error that we should retry
          const isConnectionError =
            error.message?.includes('Server has closed the connection') ||
            error.message?.includes('Cannot reach database server') ||
            error.message?.includes('Connection timed out') ||
            error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
            (error.networkError && error.networkError.message?.includes('Failed to fetch'));

          if (isConnectionError && retryCount < MAX_RETRIES - 1) {
            retryCount++;
            const baseDelay = Math.pow(2, retryCount) * 500;
            const jitter = Math.floor(Math.random() * 500);
            const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
            logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log the error and rethrow
          logger.error("Database error occurred", { error: String(error) });
          throw error;
        }
      }

      // If we exhausted retries, throw the last error
      throw lastError;
    },

  /**
   * Create multiple Organization records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Organization objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: OrganizationType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const CREATE_MANY_ORGANIZATION = gql`
          mutation createManyOrganization($data: [OrganizationCreateManyInput!]!) {
            createManyOrganization(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      name: prop.name !== undefined ? prop.name : undefined,
  slug: prop.slug !== undefined ? prop.slug : undefined,
  logoUrl: prop.logoUrl !== undefined ? prop.logoUrl : undefined,
  website: prop.website !== undefined ? prop.website : undefined,
  businessType: prop.businessType !== undefined ? prop.businessType : undefined,
  jurisdiction: prop.jurisdiction !== undefined ? prop.jurisdiction : undefined,
  regulatoryStatus: prop.regulatoryStatus !== undefined ? prop.regulatoryStatus : undefined,
  description: prop.description !== undefined ? prop.description : undefined,
  tradingDefaults: prop.tradingDefaults !== undefined ? prop.tradingDefaults : undefined,
  llmDefaults: prop.llmDefaults !== undefined ? prop.llmDefaults : undefined,
  deletedAt: prop.deletedAt !== undefined ? prop.deletedAt : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_ORGANIZATION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyOrganization) {
          return response.data.createManyOrganization;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update a single Organization record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Organization or null.
   */
  async update(props: OrganizationType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OrganizationType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_ONE_ORGANIZATION = gql`
          mutation updateOneOrganization($data: OrganizationUpdateInput!, $where: OrganizationWhereUniqueInput!) {
            updateOneOrganization(data: $data, where: $where) {
              ${selectionSet}
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
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  slug: props.slug !== undefined ? {
            set: props.slug 
           } : undefined,
  logoUrl: props.logoUrl !== undefined ? {
            set: props.logoUrl 
           } : undefined,
  website: props.website !== undefined ? {
            set: props.website 
           } : undefined,
  businessType: props.businessType !== undefined ? {
            set: props.businessType 
           } : undefined,
  jurisdiction: props.jurisdiction !== undefined ? {
            set: props.jurisdiction 
           } : undefined,
  regulatoryStatus: props.regulatoryStatus !== undefined ? {
            set: props.regulatoryStatus 
           } : undefined,
  description: props.description !== undefined ? {
            set: props.description 
           } : undefined,
  tradingDefaults: props.tradingDefaults !== undefined ? {
            set: props.tradingDefaults 
           } : undefined,
  llmDefaults: props.llmDefaults !== undefined ? {
            set: props.llmDefaults 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  deletedAt: props.deletedAt !== undefined ? {
            set: props.deletedAt 
           } : undefined,
  members: props.members ? 
  Array.isArray(props.members) && props.members.length > 0 && props.members.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.members.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.members.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        organizationId: item.organizationId !== undefined ? {
            equals: item.organizationId
          } : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        role: item.role !== undefined ? {
            set: item.role
          } : undefined,
        permissions: item.permissions !== undefined ? {
            set: item.permissions
          } : undefined,
    user: item.user ? 
    typeof item.user === 'object' && Object.keys(item.user).length === 1 && (Object.keys(item.user)[0] === 'id' || Object.keys(item.user)[0] === 'symbol')
? {
    connect: {
      id: item.user.id
    }
} : { upsert: {
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
          customerId: item.user.customerId !== undefined ? {
              equals: item.user.customerId
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
          deletedAt: item.user.deletedAt !== undefined ? {
              set: item.user.deletedAt
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
          plan: item.user.plan !== undefined ? {
              set: item.user.plan
            } : undefined,
          openaiAPIKey: item.user.openaiAPIKey !== undefined ? {
              set: item.user.openaiAPIKey
            } : undefined,
          openaiModel: item.user.openaiModel !== undefined ? {
              set: item.user.openaiModel
            } : undefined,
          passwordHash: item.user.passwordHash !== undefined ? {
              set: item.user.passwordHash
            } : undefined,
          avatarUrl: item.user.avatarUrl !== undefined ? {
              set: item.user.avatarUrl
            } : undefined,
          onboardingComplete: item.user.onboardingComplete !== undefined ? {
              set: item.user.onboardingComplete
            } : undefined,
          signupCategory: item.user.signupCategory !== undefined ? {
              set: item.user.signupCategory
            } : undefined,
      customer: item.user.customer ? 
      typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && (Object.keys(item.user.customer)[0] === 'id' || Object.keys(item.user.customer)[0] === 'symbol')
? {
      connect: {
        id: item.user.customer.id
      }
} : { upsert: {
          where: {
            id: item.user.customer.id !== undefined ? {
                equals: item.user.customer.id
              } : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId
              } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name
              } : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? {
                equals: item.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? {
                equals: item.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId
              } : undefined,
          },
          update: {
            authUserId: item.user.customer.authUserId !== undefined ? {
                set: item.user.customer.authUserId
              } : undefined,
            name: item.user.customer.name !== undefined ? {
                set: item.user.customer.name
              } : undefined,
            plan: item.user.customer.plan !== undefined ? {
                set: item.user.customer.plan
              } : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? {
                set: item.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? {
                set: item.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                set: item.user.customer.stripePriceId
              } : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: item.user.customer.stripeCurrentPeriodEnd
              } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
      Array.isArray(item.user.accounts) && item.user.accounts.length > 0 && item.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.accounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
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
      sessions: item.user.sessions ? 
      Array.isArray(item.user.sessions) && item.user.sessions.length > 0 && item.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.sessions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.sessions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
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
      authenticators: item.user.authenticators ? 
      Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 && item.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.authenticators.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.authenticators.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
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
      fundAssignments: item.user.fundAssignments ? 
      Array.isArray(item.user.fundAssignments) && item.user.fundAssignments.length > 0 && item.user.fundAssignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.fundAssignments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.fundAssignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId
              } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            role: item.role !== undefined ? {
                set: item.role
              } : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions
              } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investorProfile: item.user.investorProfile ? 
      typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && (Object.keys(item.user.investorProfile)[0] === 'id' || Object.keys(item.user.investorProfile)[0] === 'symbol')
? {
      connect: {
        id: item.user.investorProfile.id
      }
} : { upsert: {
          where: {
            id: item.user.investorProfile.id !== undefined ? {
                equals: item.user.investorProfile.id
              } : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name
              } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email
              } : undefined,
            userId: item.user.investorProfile.userId !== undefined ? {
                equals: item.user.investorProfile.userId
              } : undefined,
          },
          update: {
            id: item.user.investorProfile.id !== undefined ? {
                set: item.user.investorProfile.id
              } : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                set: item.user.investorProfile.name
              } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                set: item.user.investorProfile.email
              } : undefined,
            type: item.user.investorProfile.type !== undefined ? {
                set: item.user.investorProfile.type
              } : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? {
                set: item.user.investorProfile.kycStatus
              } : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? {
                set: item.user.investorProfile.walletAddress
              } : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? {
                set: item.user.investorProfile.deletedAt
              } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
      Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 && item.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.linkedProviders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId
              } : undefined,
            email: item.email !== undefined ? {
                equals: item.email
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                set: item.providerAccountId
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            accessToken: item.accessToken !== undefined ? {
                set: item.accessToken
              } : undefined,
            refreshToken: item.refreshToken !== undefined ? {
                set: item.refreshToken
              } : undefined,
            expiresAt: item.expiresAt !== undefined ? {
                set: item.expiresAt
              } : undefined,
            linkedAt: item.linkedAt !== undefined ? {
                set: item.linkedAt
              } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
      Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 && item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.accountLinkingRequests.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
            email: item.email !== undefined ? {
                equals: item.email
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                set: item.providerAccountId
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            verificationToken: item.verificationToken !== undefined ? {
                set: item.verificationToken
              } : undefined,
            userAgent: item.userAgent !== undefined ? {
                set: item.userAgent
              } : undefined,
            ipAddress: item.ipAddress !== undefined ? {
                set: item.ipAddress
              } : undefined,
            expiresAt: item.expiresAt !== undefined ? {
                set: item.expiresAt
              } : undefined,
            verifiedAt: item.verifiedAt !== undefined ? {
                set: item.verifiedAt
              } : undefined,
            approvedAt: item.approvedAt !== undefined ? {
                set: item.approvedAt
              } : undefined,
            rejectedAt: item.rejectedAt !== undefined ? {
                set: item.rejectedAt
              } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
      Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 && item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.reviewedWaitlistEntries.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
            reviewedById: item.reviewedById !== undefined ? {
                equals: item.reviewedById
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            fullName: item.fullName !== undefined ? {
                set: item.fullName
              } : undefined,
            companyName: item.companyName !== undefined ? {
                set: item.companyName
              } : undefined,
            companyWebsite: item.companyWebsite !== undefined ? {
                set: item.companyWebsite
              } : undefined,
            jobRole: item.jobRole !== undefined ? {
                set: item.jobRole
              } : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? {
                set: item.professionalInvestorConfirmed
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            queuePosition: item.queuePosition !== undefined ? {
                set: item.queuePosition
              } : undefined,
            reviewedAt: item.reviewedAt !== undefined ? {
                set: item.reviewedAt
              } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
      Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 && item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.dashboardLayouts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            role: item.role !== undefined ? {
                set: item.role
              } : undefined,
            layout: item.layout !== undefined ? {
                set: item.layout
              } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
          openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
          openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
          passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
          avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
          onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
          signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
      customer: item.user.customer ? 
        typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && Object.keys(item.user.customer)[0] === 'id'
    ? { connect: {
            id: item.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.customer.id !== undefined ? item.user.customer.id : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId 
               } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name 
               } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
        Array.isArray(item.user.accounts) && item.user.accounts.length > 0 &&  item.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
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
      sessions: item.user.sessions ? 
        Array.isArray(item.user.sessions) && item.user.sessions.length > 0 &&  item.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.sessions.map((item: any) => ({
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
      authenticators: item.user.authenticators ? 
        Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 &&  item.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.authenticators.map((item: any) => ({
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
      fundAssignments: item.user.fundAssignments ? 
        Array.isArray(item.user.fundAssignments) && item.user.fundAssignments.length > 0 &&  item.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.fundAssignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.fundAssignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investorProfile: item.user.investorProfile ? 
        typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && Object.keys(item.user.investorProfile)[0] === 'id'
    ? { connect: {
            id: item.user.investorProfile.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.investorProfile.id !== undefined ? item.user.investorProfile.id : undefined,
            userId: item.user.investorProfile.userId !== undefined ? item.user.investorProfile.userId : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name 
               } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email 
               } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
        Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 &&  item.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
        Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 &&  item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
        Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 &&  item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
        Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 &&  item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        role: item.role !== undefined ? item.role : undefined,
        permissions: item.permissions !== undefined ? {
            set: item.permissions 
           } : undefined,
    user: item.user ? 
      typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
          id: item.user.id
          }
        }
    : { connectOrCreate: {
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
          deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
          openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
          openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
          passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
          avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
          onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
          signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
      customer: item.user.customer ? 
        typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && Object.keys(item.user.customer)[0] === 'id'
    ? { connect: {
            id: item.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.customer.id !== undefined ? item.user.customer.id : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId 
               } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name 
               } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
        Array.isArray(item.user.accounts) && item.user.accounts.length > 0 &&  item.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
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
      sessions: item.user.sessions ? 
        Array.isArray(item.user.sessions) && item.user.sessions.length > 0 &&  item.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.sessions.map((item: any) => ({
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
      authenticators: item.user.authenticators ? 
        Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 &&  item.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.authenticators.map((item: any) => ({
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
      fundAssignments: item.user.fundAssignments ? 
        Array.isArray(item.user.fundAssignments) && item.user.fundAssignments.length > 0 &&  item.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.fundAssignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.fundAssignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investorProfile: item.user.investorProfile ? 
        typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && Object.keys(item.user.investorProfile)[0] === 'id'
    ? { connect: {
            id: item.user.investorProfile.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.investorProfile.id !== undefined ? item.user.investorProfile.id : undefined,
            userId: item.user.investorProfile.userId !== undefined ? item.user.investorProfile.userId : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name 
               } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email 
               } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
        Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 &&  item.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
        Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 &&  item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
        Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 &&  item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
        Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 &&  item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  funds: props.funds ? 
  Array.isArray(props.funds) && props.funds.length > 0 && props.funds.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.funds.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.funds.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        name: item.name !== undefined ? {
            equals: item.name
          } : undefined,
        slug: item.slug !== undefined ? {
            equals: item.slug
          } : undefined,
        organizationId: item.organizationId !== undefined ? {
            equals: item.organizationId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        name: item.name !== undefined ? {
            set: item.name
          } : undefined,
        slug: item.slug !== undefined ? {
            set: item.slug
          } : undefined,
        description: item.description !== undefined ? {
            set: item.description
          } : undefined,
        status: item.status !== undefined ? {
            set: item.status
          } : undefined,
        tradingOverrides: item.tradingOverrides !== undefined ? {
            set: item.tradingOverrides
          } : undefined,
        llmOverrides: item.llmOverrides !== undefined ? {
            set: item.llmOverrides
          } : undefined,
        deletedAt: item.deletedAt !== undefined ? {
            set: item.deletedAt
          } : undefined,
    brokerageAccounts: item.brokerageAccounts ? 
    Array.isArray(item.brokerageAccounts) && item.brokerageAccounts.length > 0 && item.brokerageAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.brokerageAccounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.brokerageAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          provider: item.provider !== undefined ? {
              set: item.provider
            } : undefined,
          type: item.type !== undefined ? {
              set: item.type
            } : undefined,
          apiKey: item.apiKey !== undefined ? {
              set: item.apiKey
            } : undefined,
          apiSecret: item.apiSecret !== undefined ? {
              set: item.apiSecret
            } : undefined,
          configuration: item.configuration !== undefined ? {
              set: item.configuration
            } : undefined,
          marketOpen: item.marketOpen !== undefined ? {
              set: item.marketOpen
            } : undefined,
          realTime: item.realTime !== undefined ? {
              set: item.realTime
            } : undefined,
          cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? {
              set: item.cryptoTradingEnabled
            } : undefined,
          cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
              set: item.cryptoTradingPairs
            } : undefined,
          cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? {
              set: item.cryptoTradeAllocationPct
            } : undefined,
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? {
              set: item.tradeAllocationPct
            } : undefined,
          autoAllocation: item.autoAllocation !== undefined ? {
              set: item.autoAllocation
            } : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? {
              set: item.minPercentageChange
            } : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? {
              set: item.volumeThreshold
            } : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? {
              set: item.enablePortfolioTrailingStop
            } : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? {
              set: item.portfolioTrailPercent
            } : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? {
              set: item.portfolioProfitThresholdPercent
            } : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? {
              set: item.reducedPortfolioTrailPercent
            } : undefined,
          defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? {
              set: item.defaultTrailingStopPercentage100
            } : undefined,
          firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? {
              set: item.firstTrailReductionThreshold100
            } : undefined,
          secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? {
              set: item.secondTrailReductionThreshold100
            } : undefined,
          firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? {
              set: item.firstReducedTrailPercentage100
            } : undefined,
          secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? {
              set: item.secondReducedTrailPercentage100
            } : undefined,
          minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? {
              set: item.minimumPriceChangePercent100
            } : undefined,
          deletedAt: item.deletedAt !== undefined ? {
              set: item.deletedAt
            } : undefined,
      allocation: item.allocation ? 
      typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && (Object.keys(item.allocation)[0] === 'id' || Object.keys(item.allocation)[0] === 'symbol')
? {
      connect: {
        id: item.allocation.id
      }
} : { upsert: {
          where: {
            id: item.allocation.id !== undefined ? {
                equals: item.allocation.id
              } : undefined,
            brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? {
                equals: item.allocation.brokerageAccountId
              } : undefined,
          },
          update: {
            id: item.allocation.id !== undefined ? {
                set: item.allocation.id
              } : undefined,
            equities: item.allocation.equities !== undefined ? {
                set: item.allocation.equities
              } : undefined,
            optionsContracts: item.allocation.optionsContracts !== undefined ? {
                set: item.allocation.optionsContracts
              } : undefined,
            futures: item.allocation.futures !== undefined ? {
                set: item.allocation.futures
              } : undefined,
            etfs: item.allocation.etfs !== undefined ? {
                set: item.allocation.etfs
              } : undefined,
            forex: item.allocation.forex !== undefined ? {
                set: item.allocation.forex
              } : undefined,
            crypto: item.allocation.crypto !== undefined ? {
                set: item.allocation.crypto
              } : undefined,
            stocks: item.allocation.stocks !== undefined ? {
                set: item.allocation.stocks
              } : undefined,
            options: item.allocation.options !== undefined ? {
                set: item.allocation.options
              } : undefined,
          },
          create: {
            equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
            optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
            futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
            forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
          },
        }
      } : undefined,
      alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0 && item.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.alerts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            title: item.title !== undefined ? {
                equals: item.title
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            title: item.title !== undefined ? {
                set: item.title
              } : undefined,
            message: item.message !== undefined ? {
                set: item.message
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            severity: item.severity !== undefined ? {
                set: item.severity
              } : undefined,
            category: item.category !== undefined ? {
                set: item.category
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            isRead: item.isRead !== undefined ? {
                set: item.isRead
              } : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? {
                set: item.acknowledgedAt
              } : undefined,
            resolvedAt: item.resolvedAt !== undefined ? {
                set: item.resolvedAt
              } : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? {
                set: item.suppressedUntil
              } : undefined,
            retryCount: item.retryCount !== undefined ? {
                set: item.retryCount
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      trades: item.trades ? 
      Array.isArray(item.trades) && item.trades.length > 0 && item.trades.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.trades.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
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
            summary: item.summary !== undefined ? {
                set: item.summary
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
            deletedAt: item.deletedAt !== undefined ? {
                set: item.deletedAt
              } : undefined,
            symbol: item.symbol !== undefined ? {
                set: item.symbol
              } : undefined,
            entryPrice: item.entryPrice !== undefined ? {
                set: item.entryPrice
              } : undefined,
            exitPrice: item.exitPrice !== undefined ? {
                set: item.exitPrice
              } : undefined,
            entryQty: item.entryQty !== undefined ? {
                set: item.entryQty
              } : undefined,
            exitQty: item.exitQty !== undefined ? {
                set: item.exitQty
              } : undefined,
            entryValue: item.entryValue !== undefined ? {
                set: item.entryValue
              } : undefined,
            exitValue: item.exitValue !== undefined ? {
                set: item.exitValue
              } : undefined,
            entryTime: item.entryTime !== undefined ? {
                set: item.entryTime
              } : undefined,
            exitTime: item.exitTime !== undefined ? {
                set: item.exitTime
              } : undefined,
            pnlAmount: item.pnlAmount !== undefined ? {
                set: item.pnlAmount
              } : undefined,
            pnlPercent: item.pnlPercent !== undefined ? {
                set: item.pnlPercent
              } : undefined,
            durationMinutes: item.durationMinutes !== undefined ? {
                set: item.durationMinutes
              } : undefined,
            marketPhase: item.marketPhase !== undefined ? {
                set: item.marketPhase
              } : undefined,
            marketVolatility: item.marketVolatility !== undefined ? {
                set: item.marketVolatility
              } : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? {
                set: item.sessionHorizonMinutes
              } : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? {
                set: item.thresholdsJson
              } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
      Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 && item.optionsPositions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.optionsPositions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            openingSide: item.openingSide !== undefined ? {
                set: item.openingSide
              } : undefined,
            quantity: item.quantity !== undefined ? {
                set: item.quantity
              } : undefined,
            entryPrice: item.entryPrice !== undefined ? {
                set: item.entryPrice
              } : undefined,
            entryCost: item.entryCost !== undefined ? {
                set: item.entryCost
              } : undefined,
            entryTime: item.entryTime !== undefined ? {
                set: item.entryTime
              } : undefined,
            exitPrice: item.exitPrice !== undefined ? {
                set: item.exitPrice
              } : undefined,
            exitValue: item.exitValue !== undefined ? {
                set: item.exitValue
              } : undefined,
            exitTime: item.exitTime !== undefined ? {
                set: item.exitTime
              } : undefined,
            currentPrice: item.currentPrice !== undefined ? {
                set: item.currentPrice
              } : undefined,
            currentValue: item.currentValue !== undefined ? {
                set: item.currentValue
              } : undefined,
            unrealizedPnL: item.unrealizedPnL !== undefined ? {
                set: item.unrealizedPnL
              } : undefined,
            unrealizedPnLPercent: item.unrealizedPnLPercent !== undefined ? {
                set: item.unrealizedPnLPercent
              } : undefined,
            realizedPnL: item.realizedPnL !== undefined ? {
                set: item.realizedPnL
              } : undefined,
            realizedPnLPercent: item.realizedPnLPercent !== undefined ? {
                set: item.realizedPnLPercent
              } : undefined,
            totalFees: item.totalFees !== undefined ? {
                set: item.totalFees
              } : undefined,
            currentDelta: item.currentDelta !== undefined ? {
                set: item.currentDelta
              } : undefined,
            currentGamma: item.currentGamma !== undefined ? {
                set: item.currentGamma
              } : undefined,
            currentTheta: item.currentTheta !== undefined ? {
                set: item.currentTheta
              } : undefined,
            currentVega: item.currentVega !== undefined ? {
                set: item.currentVega
              } : undefined,
            currentRho: item.currentRho !== undefined ? {
                set: item.currentRho
              } : undefined,
            currentImpliedVolatility: item.currentImpliedVolatility !== undefined ? {
                set: item.currentImpliedVolatility
              } : undefined,
            daysHeld: item.daysHeld !== undefined ? {
                set: item.daysHeld
              } : undefined,
            exitReason: item.exitReason !== undefined ? {
                set: item.exitReason
              } : undefined,
            strategyType: item.strategyType !== undefined ? {
                set: item.strategyType
              } : undefined,
            tradeId: item.tradeId !== undefined ? {
                set: item.tradeId
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
      Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 && item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.optionsTradeExecutions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                set: item.brokerOrderId
              } : undefined,
            executionSide: item.executionSide !== undefined ? {
                set: item.executionSide
              } : undefined,
            quantity: item.quantity !== undefined ? {
                set: item.quantity
              } : undefined,
            executionPrice: item.executionPrice !== undefined ? {
                set: item.executionPrice
              } : undefined,
            executionValue: item.executionValue !== undefined ? {
                set: item.executionValue
              } : undefined,
            fees: item.fees !== undefined ? {
                set: item.fees
              } : undefined,
            executionTime: item.executionTime !== undefined ? {
                set: item.executionTime
              } : undefined,
            underlyingPriceAtExecution: item.underlyingPriceAtExecution !== undefined ? {
                set: item.underlyingPriceAtExecution
              } : undefined,
            deltaAtExecution: item.deltaAtExecution !== undefined ? {
                set: item.deltaAtExecution
              } : undefined,
            gammaAtExecution: item.gammaAtExecution !== undefined ? {
                set: item.gammaAtExecution
              } : undefined,
            thetaAtExecution: item.thetaAtExecution !== undefined ? {
                set: item.thetaAtExecution
              } : undefined,
            vegaAtExecution: item.vegaAtExecution !== undefined ? {
                set: item.vegaAtExecution
              } : undefined,
            rhoAtExecution: item.rhoAtExecution !== undefined ? {
                set: item.rhoAtExecution
              } : undefined,
            impliedVolatilityAtExecution: item.impliedVolatilityAtExecution !== undefined ? {
                set: item.impliedVolatilityAtExecution
              } : undefined,
            orderType: item.orderType !== undefined ? {
                set: item.orderType
              } : undefined,
            limitPrice: item.limitPrice !== undefined ? {
                set: item.limitPrice
              } : undefined,
            stopPrice: item.stopPrice !== undefined ? {
                set: item.stopPrice
              } : undefined,
            timeInForce: item.timeInForce !== undefined ? {
                set: item.timeInForce
              } : undefined,
            venue: item.venue !== undefined ? {
                set: item.venue
              } : undefined,
            slippage: item.slippage !== undefined ? {
                set: item.slippage
              } : undefined,
            notes: item.notes !== undefined ? {
                set: item.notes
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          provider: item.provider !== undefined ? item.provider : undefined,
          type: item.type !== undefined ? item.type : undefined,
          apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
          apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
          realTime: item.realTime !== undefined ? item.realTime : undefined,
          cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
              set: item.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
          autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
          deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
      allocation: item.allocation ? 
        typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && Object.keys(item.allocation)[0] === 'id'
    ? { connect: {
            id: item.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.allocation.id !== undefined ? item.allocation.id : undefined,
            brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? item.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
            optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
            futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
            forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
          },
        }
      } : undefined,
      alerts: item.alerts ? 
        Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
        Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsPositions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
        Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    assignments: item.assignments ? 
    Array.isArray(item.assignments) && item.assignments.length > 0 && item.assignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.assignments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.assignments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId
            } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          role: item.role !== undefined ? {
              set: item.role
            } : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions
            } : undefined,
      user: item.user ? 
      typeof item.user === 'object' && Object.keys(item.user).length === 1 && (Object.keys(item.user)[0] === 'id' || Object.keys(item.user)[0] === 'symbol')
? {
      connect: {
        id: item.user.id
      }
} : { upsert: {
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
            customerId: item.user.customerId !== undefined ? {
                equals: item.user.customerId
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
            deletedAt: item.user.deletedAt !== undefined ? {
                set: item.user.deletedAt
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
            plan: item.user.plan !== undefined ? {
                set: item.user.plan
              } : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? {
                set: item.user.openaiAPIKey
              } : undefined,
            openaiModel: item.user.openaiModel !== undefined ? {
                set: item.user.openaiModel
              } : undefined,
            passwordHash: item.user.passwordHash !== undefined ? {
                set: item.user.passwordHash
              } : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? {
                set: item.user.avatarUrl
              } : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? {
                set: item.user.onboardingComplete
              } : undefined,
            signupCategory: item.user.signupCategory !== undefined ? {
                set: item.user.signupCategory
              } : undefined,
          },
          create: {
            name: item.user.name !== undefined ? item.user.name : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
            image: item.user.image !== undefined ? item.user.image : undefined,
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      user: item.user ? 
        typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
            id: item.user.id
            }
          }
    : { connectOrCreate: {
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
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investments: item.investments ? 
    Array.isArray(item.investments) && item.investments.length > 0 && item.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.investments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.investments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId
            } : undefined,
          investorId: item.investorId !== undefined ? {
              equals: item.investorId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          units: item.units !== undefined ? {
              set: item.units
            } : undefined,
          investedAt: item.investedAt !== undefined ? {
              set: item.investedAt
            } : undefined,
          status: item.status !== undefined ? {
              set: item.status
            } : undefined,
      investor: item.investor ? 
      typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && (Object.keys(item.investor)[0] === 'id' || Object.keys(item.investor)[0] === 'symbol')
? {
      connect: {
        id: item.investor.id
      }
} : { upsert: {
          where: {
            id: item.investor.id !== undefined ? {
                equals: item.investor.id
              } : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name
              } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email
              } : undefined,
            userId: item.investor.userId !== undefined ? {
                equals: item.investor.userId
              } : undefined,
          },
          update: {
            id: item.investor.id !== undefined ? {
                set: item.investor.id
              } : undefined,
            name: item.investor.name !== undefined ? {
                set: item.investor.name
              } : undefined,
            email: item.investor.email !== undefined ? {
                set: item.investor.email
              } : undefined,
            type: item.investor.type !== undefined ? {
                set: item.investor.type
              } : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? {
                set: item.investor.kycStatus
              } : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? {
                set: item.investor.walletAddress
              } : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? {
                set: item.investor.deletedAt
              } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          units: item.units !== undefined ? item.units : undefined,
          investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
          status: item.status !== undefined ? item.status : undefined,
      investor: item.investor ? 
        typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && Object.keys(item.investor)[0] === 'id'
    ? { connect: {
            id: item.investor.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.id !== undefined ? item.investor.id : undefined,
            userId: item.investor.userId !== undefined ? item.investor.userId : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name 
               } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email 
               } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        slug: item.slug !== undefined ? item.slug : undefined,
        description: item.description !== undefined ? item.description : undefined,
        status: item.status !== undefined ? item.status : undefined,
        tradingOverrides: item.tradingOverrides !== undefined ? item.tradingOverrides : undefined,
        llmOverrides: item.llmOverrides !== undefined ? item.llmOverrides : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
    brokerageAccounts: item.brokerageAccounts ? 
      Array.isArray(item.brokerageAccounts) && item.brokerageAccounts.length > 0 &&  item.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.brokerageAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.brokerageAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
        },
        create: {
          provider: item.provider !== undefined ? item.provider : undefined,
          type: item.type !== undefined ? item.type : undefined,
          apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
          apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
          realTime: item.realTime !== undefined ? item.realTime : undefined,
          cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
              set: item.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
          autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
          deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
      allocation: item.allocation ? 
        typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && Object.keys(item.allocation)[0] === 'id'
    ? { connect: {
            id: item.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.allocation.id !== undefined ? item.allocation.id : undefined,
            brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? item.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
            optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
            futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
            forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
          },
        }
      } : undefined,
      alerts: item.alerts ? 
        Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
        Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsPositions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
        Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    assignments: item.assignments ? 
      Array.isArray(item.assignments) && item.assignments.length > 0 &&  item.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.assignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.assignments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      user: item.user ? 
        typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
            id: item.user.id
            }
          }
    : { connectOrCreate: {
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
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investments: item.investments ? 
      Array.isArray(item.investments) && item.investments.length > 0 &&  item.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.investments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.investments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
          investorId: item.investorId !== undefined ? {
              equals: item.investorId 
             } : undefined,
        },
        create: {
          units: item.units !== undefined ? item.units : undefined,
          investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
          status: item.status !== undefined ? item.status : undefined,
      investor: item.investor ? 
        typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && Object.keys(item.investor)[0] === 'id'
    ? { connect: {
            id: item.investor.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.id !== undefined ? item.investor.id : undefined,
            userId: item.investor.userId !== undefined ? item.investor.userId : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name 
               } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email 
               } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_ORGANIZATION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneOrganization) {
          return response.data.updateOneOrganization;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Upsert a single Organization record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Organization or null.
   */
  async upsert(props: OrganizationType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OrganizationType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const UPSERT_ONE_ORGANIZATION = gql`
          mutation upsertOneOrganization($where: OrganizationWhereUniqueInput!, $create: OrganizationCreateInput!, $update: OrganizationUpdateInput!) {
            upsertOneOrganization(where: $where, create: $create, update: $update) {
              ${selectionSet}
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
          create: {
        name: props.name !== undefined ? props.name : undefined,
  slug: props.slug !== undefined ? props.slug : undefined,
  logoUrl: props.logoUrl !== undefined ? props.logoUrl : undefined,
  website: props.website !== undefined ? props.website : undefined,
  businessType: props.businessType !== undefined ? props.businessType : undefined,
  jurisdiction: props.jurisdiction !== undefined ? props.jurisdiction : undefined,
  regulatoryStatus: props.regulatoryStatus !== undefined ? props.regulatoryStatus : undefined,
  description: props.description !== undefined ? props.description : undefined,
  tradingDefaults: props.tradingDefaults !== undefined ? props.tradingDefaults : undefined,
  llmDefaults: props.llmDefaults !== undefined ? props.llmDefaults : undefined,
  deletedAt: props.deletedAt !== undefined ? props.deletedAt : undefined,
  members: props.members ? 
    Array.isArray(props.members) && props.members.length > 0 &&  props.members.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.members.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.members.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        organizationId: item.organizationId !== undefined ? {
            equals: item.organizationId 
           } : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        role: item.role !== undefined ? item.role : undefined,
        permissions: item.permissions !== undefined ? {
            set: item.permissions 
           } : undefined,
    user: item.user ? 
      typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
          id: item.user.id
          }
        }
    : { connectOrCreate: {
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
          deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
          openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
          openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
          passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
          avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
          onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
          signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
      customer: item.user.customer ? 
        typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && Object.keys(item.user.customer)[0] === 'id'
    ? { connect: {
            id: item.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.customer.id !== undefined ? item.user.customer.id : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId 
               } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name 
               } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
        Array.isArray(item.user.accounts) && item.user.accounts.length > 0 &&  item.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
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
      sessions: item.user.sessions ? 
        Array.isArray(item.user.sessions) && item.user.sessions.length > 0 &&  item.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.sessions.map((item: any) => ({
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
      authenticators: item.user.authenticators ? 
        Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 &&  item.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.authenticators.map((item: any) => ({
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
      fundAssignments: item.user.fundAssignments ? 
        Array.isArray(item.user.fundAssignments) && item.user.fundAssignments.length > 0 &&  item.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.fundAssignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.fundAssignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investorProfile: item.user.investorProfile ? 
        typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && Object.keys(item.user.investorProfile)[0] === 'id'
    ? { connect: {
            id: item.user.investorProfile.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.investorProfile.id !== undefined ? item.user.investorProfile.id : undefined,
            userId: item.user.investorProfile.userId !== undefined ? item.user.investorProfile.userId : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name 
               } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email 
               } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
        Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 &&  item.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
        Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 &&  item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
        Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 &&  item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
        Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 &&  item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  funds: props.funds ? 
    Array.isArray(props.funds) && props.funds.length > 0 &&  props.funds.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.funds.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.funds.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        name: item.name !== undefined ? {
            equals: item.name 
           } : undefined,
        slug: item.slug !== undefined ? {
            equals: item.slug 
           } : undefined,
        organizationId: item.organizationId !== undefined ? {
            equals: item.organizationId 
           } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        slug: item.slug !== undefined ? item.slug : undefined,
        description: item.description !== undefined ? item.description : undefined,
        status: item.status !== undefined ? item.status : undefined,
        tradingOverrides: item.tradingOverrides !== undefined ? item.tradingOverrides : undefined,
        llmOverrides: item.llmOverrides !== undefined ? item.llmOverrides : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
    brokerageAccounts: item.brokerageAccounts ? 
      Array.isArray(item.brokerageAccounts) && item.brokerageAccounts.length > 0 &&  item.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.brokerageAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.brokerageAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
        },
        create: {
          provider: item.provider !== undefined ? item.provider : undefined,
          type: item.type !== undefined ? item.type : undefined,
          apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
          apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
          realTime: item.realTime !== undefined ? item.realTime : undefined,
          cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
              set: item.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
          autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
          deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
      allocation: item.allocation ? 
        typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && Object.keys(item.allocation)[0] === 'id'
    ? { connect: {
            id: item.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.allocation.id !== undefined ? item.allocation.id : undefined,
            brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? item.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
            optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
            futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
            forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
          },
        }
      } : undefined,
      alerts: item.alerts ? 
        Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
        Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsPositions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
        Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    assignments: item.assignments ? 
      Array.isArray(item.assignments) && item.assignments.length > 0 &&  item.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.assignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.assignments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      user: item.user ? 
        typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
            id: item.user.id
            }
          }
    : { connectOrCreate: {
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
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investments: item.investments ? 
      Array.isArray(item.investments) && item.investments.length > 0 &&  item.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.investments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.investments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
          investorId: item.investorId !== undefined ? {
              equals: item.investorId 
             } : undefined,
        },
        create: {
          units: item.units !== undefined ? item.units : undefined,
          investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
          status: item.status !== undefined ? item.status : undefined,
      investor: item.investor ? 
        typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && Object.keys(item.investor)[0] === 'id'
    ? { connect: {
            id: item.investor.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.id !== undefined ? item.investor.id : undefined,
            userId: item.investor.userId !== undefined ? item.investor.userId : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name 
               } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email 
               } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
      },
          update: {
      name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  slug: props.slug !== undefined ? {
            set: props.slug 
           } : undefined,
  logoUrl: props.logoUrl !== undefined ? {
            set: props.logoUrl 
           } : undefined,
  website: props.website !== undefined ? {
            set: props.website 
           } : undefined,
  businessType: props.businessType !== undefined ? {
            set: props.businessType 
           } : undefined,
  jurisdiction: props.jurisdiction !== undefined ? {
            set: props.jurisdiction 
           } : undefined,
  regulatoryStatus: props.regulatoryStatus !== undefined ? {
            set: props.regulatoryStatus 
           } : undefined,
  description: props.description !== undefined ? {
            set: props.description 
           } : undefined,
  tradingDefaults: props.tradingDefaults !== undefined ? {
            set: props.tradingDefaults 
           } : undefined,
  llmDefaults: props.llmDefaults !== undefined ? {
            set: props.llmDefaults 
           } : undefined,
  deletedAt: props.deletedAt !== undefined ? {
            set: props.deletedAt 
           } : undefined,
  members: props.members ? 
  Array.isArray(props.members) && props.members.length > 0 && props.members.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.members.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.members.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        organizationId: item.organizationId !== undefined ? {
            equals: item.organizationId
          } : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        role: item.role !== undefined ? {
            set: item.role
          } : undefined,
        permissions: item.permissions !== undefined ? {
            set: item.permissions
          } : undefined,
    user: item.user ? 
    typeof item.user === 'object' && Object.keys(item.user).length === 1 && (Object.keys(item.user)[0] === 'id' || Object.keys(item.user)[0] === 'symbol')
? {
    connect: {
      id: item.user.id
    }
} : { upsert: {
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
          customerId: item.user.customerId !== undefined ? {
              equals: item.user.customerId
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
          deletedAt: item.user.deletedAt !== undefined ? {
              set: item.user.deletedAt
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
          plan: item.user.plan !== undefined ? {
              set: item.user.plan
            } : undefined,
          openaiAPIKey: item.user.openaiAPIKey !== undefined ? {
              set: item.user.openaiAPIKey
            } : undefined,
          openaiModel: item.user.openaiModel !== undefined ? {
              set: item.user.openaiModel
            } : undefined,
          passwordHash: item.user.passwordHash !== undefined ? {
              set: item.user.passwordHash
            } : undefined,
          avatarUrl: item.user.avatarUrl !== undefined ? {
              set: item.user.avatarUrl
            } : undefined,
          onboardingComplete: item.user.onboardingComplete !== undefined ? {
              set: item.user.onboardingComplete
            } : undefined,
          signupCategory: item.user.signupCategory !== undefined ? {
              set: item.user.signupCategory
            } : undefined,
      customer: item.user.customer ? 
      typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && (Object.keys(item.user.customer)[0] === 'id' || Object.keys(item.user.customer)[0] === 'symbol')
? {
      connect: {
        id: item.user.customer.id
      }
} : { upsert: {
          where: {
            id: item.user.customer.id !== undefined ? {
                equals: item.user.customer.id
              } : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId
              } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name
              } : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? {
                equals: item.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? {
                equals: item.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId
              } : undefined,
          },
          update: {
            authUserId: item.user.customer.authUserId !== undefined ? {
                set: item.user.customer.authUserId
              } : undefined,
            name: item.user.customer.name !== undefined ? {
                set: item.user.customer.name
              } : undefined,
            plan: item.user.customer.plan !== undefined ? {
                set: item.user.customer.plan
              } : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? {
                set: item.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? {
                set: item.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                set: item.user.customer.stripePriceId
              } : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: item.user.customer.stripeCurrentPeriodEnd
              } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
      Array.isArray(item.user.accounts) && item.user.accounts.length > 0 && item.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.accounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
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
      sessions: item.user.sessions ? 
      Array.isArray(item.user.sessions) && item.user.sessions.length > 0 && item.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.sessions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.sessions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
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
      authenticators: item.user.authenticators ? 
      Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 && item.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.authenticators.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.authenticators.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
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
      fundAssignments: item.user.fundAssignments ? 
      Array.isArray(item.user.fundAssignments) && item.user.fundAssignments.length > 0 && item.user.fundAssignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.fundAssignments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.fundAssignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId
              } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            role: item.role !== undefined ? {
                set: item.role
              } : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions
              } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investorProfile: item.user.investorProfile ? 
      typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && (Object.keys(item.user.investorProfile)[0] === 'id' || Object.keys(item.user.investorProfile)[0] === 'symbol')
? {
      connect: {
        id: item.user.investorProfile.id
      }
} : { upsert: {
          where: {
            id: item.user.investorProfile.id !== undefined ? {
                equals: item.user.investorProfile.id
              } : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name
              } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email
              } : undefined,
            userId: item.user.investorProfile.userId !== undefined ? {
                equals: item.user.investorProfile.userId
              } : undefined,
          },
          update: {
            id: item.user.investorProfile.id !== undefined ? {
                set: item.user.investorProfile.id
              } : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                set: item.user.investorProfile.name
              } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                set: item.user.investorProfile.email
              } : undefined,
            type: item.user.investorProfile.type !== undefined ? {
                set: item.user.investorProfile.type
              } : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? {
                set: item.user.investorProfile.kycStatus
              } : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? {
                set: item.user.investorProfile.walletAddress
              } : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? {
                set: item.user.investorProfile.deletedAt
              } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
      Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 && item.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.linkedProviders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId
              } : undefined,
            email: item.email !== undefined ? {
                equals: item.email
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                set: item.providerAccountId
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            accessToken: item.accessToken !== undefined ? {
                set: item.accessToken
              } : undefined,
            refreshToken: item.refreshToken !== undefined ? {
                set: item.refreshToken
              } : undefined,
            expiresAt: item.expiresAt !== undefined ? {
                set: item.expiresAt
              } : undefined,
            linkedAt: item.linkedAt !== undefined ? {
                set: item.linkedAt
              } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
      Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 && item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.accountLinkingRequests.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
            email: item.email !== undefined ? {
                equals: item.email
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                set: item.providerAccountId
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            verificationToken: item.verificationToken !== undefined ? {
                set: item.verificationToken
              } : undefined,
            userAgent: item.userAgent !== undefined ? {
                set: item.userAgent
              } : undefined,
            ipAddress: item.ipAddress !== undefined ? {
                set: item.ipAddress
              } : undefined,
            expiresAt: item.expiresAt !== undefined ? {
                set: item.expiresAt
              } : undefined,
            verifiedAt: item.verifiedAt !== undefined ? {
                set: item.verifiedAt
              } : undefined,
            approvedAt: item.approvedAt !== undefined ? {
                set: item.approvedAt
              } : undefined,
            rejectedAt: item.rejectedAt !== undefined ? {
                set: item.rejectedAt
              } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
      Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 && item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.reviewedWaitlistEntries.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
            reviewedById: item.reviewedById !== undefined ? {
                equals: item.reviewedById
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            fullName: item.fullName !== undefined ? {
                set: item.fullName
              } : undefined,
            companyName: item.companyName !== undefined ? {
                set: item.companyName
              } : undefined,
            companyWebsite: item.companyWebsite !== undefined ? {
                set: item.companyWebsite
              } : undefined,
            jobRole: item.jobRole !== undefined ? {
                set: item.jobRole
              } : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? {
                set: item.professionalInvestorConfirmed
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            queuePosition: item.queuePosition !== undefined ? {
                set: item.queuePosition
              } : undefined,
            reviewedAt: item.reviewedAt !== undefined ? {
                set: item.reviewedAt
              } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
      Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 && item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.dashboardLayouts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            role: item.role !== undefined ? {
                set: item.role
              } : undefined,
            layout: item.layout !== undefined ? {
                set: item.layout
              } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
          openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
          openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
          passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
          avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
          onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
          signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
      customer: item.user.customer ? 
        typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && Object.keys(item.user.customer)[0] === 'id'
    ? { connect: {
            id: item.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.customer.id !== undefined ? item.user.customer.id : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId 
               } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name 
               } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
        Array.isArray(item.user.accounts) && item.user.accounts.length > 0 &&  item.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
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
      sessions: item.user.sessions ? 
        Array.isArray(item.user.sessions) && item.user.sessions.length > 0 &&  item.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.sessions.map((item: any) => ({
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
      authenticators: item.user.authenticators ? 
        Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 &&  item.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.authenticators.map((item: any) => ({
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
      fundAssignments: item.user.fundAssignments ? 
        Array.isArray(item.user.fundAssignments) && item.user.fundAssignments.length > 0 &&  item.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.fundAssignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.fundAssignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investorProfile: item.user.investorProfile ? 
        typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && Object.keys(item.user.investorProfile)[0] === 'id'
    ? { connect: {
            id: item.user.investorProfile.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.investorProfile.id !== undefined ? item.user.investorProfile.id : undefined,
            userId: item.user.investorProfile.userId !== undefined ? item.user.investorProfile.userId : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name 
               } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email 
               } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
        Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 &&  item.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
        Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 &&  item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
        Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 &&  item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
        Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 &&  item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        role: item.role !== undefined ? item.role : undefined,
        permissions: item.permissions !== undefined ? {
            set: item.permissions 
           } : undefined,
    user: item.user ? 
      typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
          id: item.user.id
          }
        }
    : { connectOrCreate: {
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
          deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
          openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
          openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
          passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
          avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
          onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
          signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
      customer: item.user.customer ? 
        typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && Object.keys(item.user.customer)[0] === 'id'
    ? { connect: {
            id: item.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.customer.id !== undefined ? item.user.customer.id : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId 
               } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name 
               } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
        Array.isArray(item.user.accounts) && item.user.accounts.length > 0 &&  item.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
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
      sessions: item.user.sessions ? 
        Array.isArray(item.user.sessions) && item.user.sessions.length > 0 &&  item.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.sessions.map((item: any) => ({
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
      authenticators: item.user.authenticators ? 
        Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 &&  item.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.authenticators.map((item: any) => ({
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
      fundAssignments: item.user.fundAssignments ? 
        Array.isArray(item.user.fundAssignments) && item.user.fundAssignments.length > 0 &&  item.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.fundAssignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.fundAssignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investorProfile: item.user.investorProfile ? 
        typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && Object.keys(item.user.investorProfile)[0] === 'id'
    ? { connect: {
            id: item.user.investorProfile.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.investorProfile.id !== undefined ? item.user.investorProfile.id : undefined,
            userId: item.user.investorProfile.userId !== undefined ? item.user.investorProfile.userId : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name 
               } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email 
               } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
        Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 &&  item.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
        Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 &&  item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
        Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 &&  item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
        Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 &&  item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  funds: props.funds ? 
  Array.isArray(props.funds) && props.funds.length > 0 && props.funds.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.funds.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.funds.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        name: item.name !== undefined ? {
            equals: item.name
          } : undefined,
        slug: item.slug !== undefined ? {
            equals: item.slug
          } : undefined,
        organizationId: item.organizationId !== undefined ? {
            equals: item.organizationId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        name: item.name !== undefined ? {
            set: item.name
          } : undefined,
        slug: item.slug !== undefined ? {
            set: item.slug
          } : undefined,
        description: item.description !== undefined ? {
            set: item.description
          } : undefined,
        status: item.status !== undefined ? {
            set: item.status
          } : undefined,
        tradingOverrides: item.tradingOverrides !== undefined ? {
            set: item.tradingOverrides
          } : undefined,
        llmOverrides: item.llmOverrides !== undefined ? {
            set: item.llmOverrides
          } : undefined,
        deletedAt: item.deletedAt !== undefined ? {
            set: item.deletedAt
          } : undefined,
    brokerageAccounts: item.brokerageAccounts ? 
    Array.isArray(item.brokerageAccounts) && item.brokerageAccounts.length > 0 && item.brokerageAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.brokerageAccounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.brokerageAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          provider: item.provider !== undefined ? {
              set: item.provider
            } : undefined,
          type: item.type !== undefined ? {
              set: item.type
            } : undefined,
          apiKey: item.apiKey !== undefined ? {
              set: item.apiKey
            } : undefined,
          apiSecret: item.apiSecret !== undefined ? {
              set: item.apiSecret
            } : undefined,
          configuration: item.configuration !== undefined ? {
              set: item.configuration
            } : undefined,
          marketOpen: item.marketOpen !== undefined ? {
              set: item.marketOpen
            } : undefined,
          realTime: item.realTime !== undefined ? {
              set: item.realTime
            } : undefined,
          cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? {
              set: item.cryptoTradingEnabled
            } : undefined,
          cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
              set: item.cryptoTradingPairs
            } : undefined,
          cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? {
              set: item.cryptoTradeAllocationPct
            } : undefined,
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? {
              set: item.tradeAllocationPct
            } : undefined,
          autoAllocation: item.autoAllocation !== undefined ? {
              set: item.autoAllocation
            } : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? {
              set: item.minPercentageChange
            } : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? {
              set: item.volumeThreshold
            } : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? {
              set: item.enablePortfolioTrailingStop
            } : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? {
              set: item.portfolioTrailPercent
            } : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? {
              set: item.portfolioProfitThresholdPercent
            } : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? {
              set: item.reducedPortfolioTrailPercent
            } : undefined,
          defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? {
              set: item.defaultTrailingStopPercentage100
            } : undefined,
          firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? {
              set: item.firstTrailReductionThreshold100
            } : undefined,
          secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? {
              set: item.secondTrailReductionThreshold100
            } : undefined,
          firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? {
              set: item.firstReducedTrailPercentage100
            } : undefined,
          secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? {
              set: item.secondReducedTrailPercentage100
            } : undefined,
          minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? {
              set: item.minimumPriceChangePercent100
            } : undefined,
          deletedAt: item.deletedAt !== undefined ? {
              set: item.deletedAt
            } : undefined,
      allocation: item.allocation ? 
      typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && (Object.keys(item.allocation)[0] === 'id' || Object.keys(item.allocation)[0] === 'symbol')
? {
      connect: {
        id: item.allocation.id
      }
} : { upsert: {
          where: {
            id: item.allocation.id !== undefined ? {
                equals: item.allocation.id
              } : undefined,
            brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? {
                equals: item.allocation.brokerageAccountId
              } : undefined,
          },
          update: {
            id: item.allocation.id !== undefined ? {
                set: item.allocation.id
              } : undefined,
            equities: item.allocation.equities !== undefined ? {
                set: item.allocation.equities
              } : undefined,
            optionsContracts: item.allocation.optionsContracts !== undefined ? {
                set: item.allocation.optionsContracts
              } : undefined,
            futures: item.allocation.futures !== undefined ? {
                set: item.allocation.futures
              } : undefined,
            etfs: item.allocation.etfs !== undefined ? {
                set: item.allocation.etfs
              } : undefined,
            forex: item.allocation.forex !== undefined ? {
                set: item.allocation.forex
              } : undefined,
            crypto: item.allocation.crypto !== undefined ? {
                set: item.allocation.crypto
              } : undefined,
            stocks: item.allocation.stocks !== undefined ? {
                set: item.allocation.stocks
              } : undefined,
            options: item.allocation.options !== undefined ? {
                set: item.allocation.options
              } : undefined,
          },
          create: {
            equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
            optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
            futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
            forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
          },
        }
      } : undefined,
      alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0 && item.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.alerts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            title: item.title !== undefined ? {
                equals: item.title
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            title: item.title !== undefined ? {
                set: item.title
              } : undefined,
            message: item.message !== undefined ? {
                set: item.message
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            severity: item.severity !== undefined ? {
                set: item.severity
              } : undefined,
            category: item.category !== undefined ? {
                set: item.category
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            isRead: item.isRead !== undefined ? {
                set: item.isRead
              } : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? {
                set: item.acknowledgedAt
              } : undefined,
            resolvedAt: item.resolvedAt !== undefined ? {
                set: item.resolvedAt
              } : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? {
                set: item.suppressedUntil
              } : undefined,
            retryCount: item.retryCount !== undefined ? {
                set: item.retryCount
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      trades: item.trades ? 
      Array.isArray(item.trades) && item.trades.length > 0 && item.trades.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.trades.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
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
            summary: item.summary !== undefined ? {
                set: item.summary
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
            deletedAt: item.deletedAt !== undefined ? {
                set: item.deletedAt
              } : undefined,
            symbol: item.symbol !== undefined ? {
                set: item.symbol
              } : undefined,
            entryPrice: item.entryPrice !== undefined ? {
                set: item.entryPrice
              } : undefined,
            exitPrice: item.exitPrice !== undefined ? {
                set: item.exitPrice
              } : undefined,
            entryQty: item.entryQty !== undefined ? {
                set: item.entryQty
              } : undefined,
            exitQty: item.exitQty !== undefined ? {
                set: item.exitQty
              } : undefined,
            entryValue: item.entryValue !== undefined ? {
                set: item.entryValue
              } : undefined,
            exitValue: item.exitValue !== undefined ? {
                set: item.exitValue
              } : undefined,
            entryTime: item.entryTime !== undefined ? {
                set: item.entryTime
              } : undefined,
            exitTime: item.exitTime !== undefined ? {
                set: item.exitTime
              } : undefined,
            pnlAmount: item.pnlAmount !== undefined ? {
                set: item.pnlAmount
              } : undefined,
            pnlPercent: item.pnlPercent !== undefined ? {
                set: item.pnlPercent
              } : undefined,
            durationMinutes: item.durationMinutes !== undefined ? {
                set: item.durationMinutes
              } : undefined,
            marketPhase: item.marketPhase !== undefined ? {
                set: item.marketPhase
              } : undefined,
            marketVolatility: item.marketVolatility !== undefined ? {
                set: item.marketVolatility
              } : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? {
                set: item.sessionHorizonMinutes
              } : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? {
                set: item.thresholdsJson
              } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
      Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 && item.optionsPositions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.optionsPositions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            openingSide: item.openingSide !== undefined ? {
                set: item.openingSide
              } : undefined,
            quantity: item.quantity !== undefined ? {
                set: item.quantity
              } : undefined,
            entryPrice: item.entryPrice !== undefined ? {
                set: item.entryPrice
              } : undefined,
            entryCost: item.entryCost !== undefined ? {
                set: item.entryCost
              } : undefined,
            entryTime: item.entryTime !== undefined ? {
                set: item.entryTime
              } : undefined,
            exitPrice: item.exitPrice !== undefined ? {
                set: item.exitPrice
              } : undefined,
            exitValue: item.exitValue !== undefined ? {
                set: item.exitValue
              } : undefined,
            exitTime: item.exitTime !== undefined ? {
                set: item.exitTime
              } : undefined,
            currentPrice: item.currentPrice !== undefined ? {
                set: item.currentPrice
              } : undefined,
            currentValue: item.currentValue !== undefined ? {
                set: item.currentValue
              } : undefined,
            unrealizedPnL: item.unrealizedPnL !== undefined ? {
                set: item.unrealizedPnL
              } : undefined,
            unrealizedPnLPercent: item.unrealizedPnLPercent !== undefined ? {
                set: item.unrealizedPnLPercent
              } : undefined,
            realizedPnL: item.realizedPnL !== undefined ? {
                set: item.realizedPnL
              } : undefined,
            realizedPnLPercent: item.realizedPnLPercent !== undefined ? {
                set: item.realizedPnLPercent
              } : undefined,
            totalFees: item.totalFees !== undefined ? {
                set: item.totalFees
              } : undefined,
            currentDelta: item.currentDelta !== undefined ? {
                set: item.currentDelta
              } : undefined,
            currentGamma: item.currentGamma !== undefined ? {
                set: item.currentGamma
              } : undefined,
            currentTheta: item.currentTheta !== undefined ? {
                set: item.currentTheta
              } : undefined,
            currentVega: item.currentVega !== undefined ? {
                set: item.currentVega
              } : undefined,
            currentRho: item.currentRho !== undefined ? {
                set: item.currentRho
              } : undefined,
            currentImpliedVolatility: item.currentImpliedVolatility !== undefined ? {
                set: item.currentImpliedVolatility
              } : undefined,
            daysHeld: item.daysHeld !== undefined ? {
                set: item.daysHeld
              } : undefined,
            exitReason: item.exitReason !== undefined ? {
                set: item.exitReason
              } : undefined,
            strategyType: item.strategyType !== undefined ? {
                set: item.strategyType
              } : undefined,
            tradeId: item.tradeId !== undefined ? {
                set: item.tradeId
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
      Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 && item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.optionsTradeExecutions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                set: item.brokerOrderId
              } : undefined,
            executionSide: item.executionSide !== undefined ? {
                set: item.executionSide
              } : undefined,
            quantity: item.quantity !== undefined ? {
                set: item.quantity
              } : undefined,
            executionPrice: item.executionPrice !== undefined ? {
                set: item.executionPrice
              } : undefined,
            executionValue: item.executionValue !== undefined ? {
                set: item.executionValue
              } : undefined,
            fees: item.fees !== undefined ? {
                set: item.fees
              } : undefined,
            executionTime: item.executionTime !== undefined ? {
                set: item.executionTime
              } : undefined,
            underlyingPriceAtExecution: item.underlyingPriceAtExecution !== undefined ? {
                set: item.underlyingPriceAtExecution
              } : undefined,
            deltaAtExecution: item.deltaAtExecution !== undefined ? {
                set: item.deltaAtExecution
              } : undefined,
            gammaAtExecution: item.gammaAtExecution !== undefined ? {
                set: item.gammaAtExecution
              } : undefined,
            thetaAtExecution: item.thetaAtExecution !== undefined ? {
                set: item.thetaAtExecution
              } : undefined,
            vegaAtExecution: item.vegaAtExecution !== undefined ? {
                set: item.vegaAtExecution
              } : undefined,
            rhoAtExecution: item.rhoAtExecution !== undefined ? {
                set: item.rhoAtExecution
              } : undefined,
            impliedVolatilityAtExecution: item.impliedVolatilityAtExecution !== undefined ? {
                set: item.impliedVolatilityAtExecution
              } : undefined,
            orderType: item.orderType !== undefined ? {
                set: item.orderType
              } : undefined,
            limitPrice: item.limitPrice !== undefined ? {
                set: item.limitPrice
              } : undefined,
            stopPrice: item.stopPrice !== undefined ? {
                set: item.stopPrice
              } : undefined,
            timeInForce: item.timeInForce !== undefined ? {
                set: item.timeInForce
              } : undefined,
            venue: item.venue !== undefined ? {
                set: item.venue
              } : undefined,
            slippage: item.slippage !== undefined ? {
                set: item.slippage
              } : undefined,
            notes: item.notes !== undefined ? {
                set: item.notes
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          provider: item.provider !== undefined ? item.provider : undefined,
          type: item.type !== undefined ? item.type : undefined,
          apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
          apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
          realTime: item.realTime !== undefined ? item.realTime : undefined,
          cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
              set: item.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
          autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
          deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
      allocation: item.allocation ? 
        typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && Object.keys(item.allocation)[0] === 'id'
    ? { connect: {
            id: item.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.allocation.id !== undefined ? item.allocation.id : undefined,
            brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? item.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
            optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
            futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
            forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
          },
        }
      } : undefined,
      alerts: item.alerts ? 
        Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
        Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsPositions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
        Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    assignments: item.assignments ? 
    Array.isArray(item.assignments) && item.assignments.length > 0 && item.assignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.assignments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.assignments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId
            } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          role: item.role !== undefined ? {
              set: item.role
            } : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions
            } : undefined,
      user: item.user ? 
      typeof item.user === 'object' && Object.keys(item.user).length === 1 && (Object.keys(item.user)[0] === 'id' || Object.keys(item.user)[0] === 'symbol')
? {
      connect: {
        id: item.user.id
      }
} : { upsert: {
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
            customerId: item.user.customerId !== undefined ? {
                equals: item.user.customerId
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
            deletedAt: item.user.deletedAt !== undefined ? {
                set: item.user.deletedAt
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
            plan: item.user.plan !== undefined ? {
                set: item.user.plan
              } : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? {
                set: item.user.openaiAPIKey
              } : undefined,
            openaiModel: item.user.openaiModel !== undefined ? {
                set: item.user.openaiModel
              } : undefined,
            passwordHash: item.user.passwordHash !== undefined ? {
                set: item.user.passwordHash
              } : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? {
                set: item.user.avatarUrl
              } : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? {
                set: item.user.onboardingComplete
              } : undefined,
            signupCategory: item.user.signupCategory !== undefined ? {
                set: item.user.signupCategory
              } : undefined,
          },
          create: {
            name: item.user.name !== undefined ? item.user.name : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
            image: item.user.image !== undefined ? item.user.image : undefined,
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      user: item.user ? 
        typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
            id: item.user.id
            }
          }
    : { connectOrCreate: {
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
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investments: item.investments ? 
    Array.isArray(item.investments) && item.investments.length > 0 && item.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.investments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.investments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId
            } : undefined,
          investorId: item.investorId !== undefined ? {
              equals: item.investorId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          units: item.units !== undefined ? {
              set: item.units
            } : undefined,
          investedAt: item.investedAt !== undefined ? {
              set: item.investedAt
            } : undefined,
          status: item.status !== undefined ? {
              set: item.status
            } : undefined,
      investor: item.investor ? 
      typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && (Object.keys(item.investor)[0] === 'id' || Object.keys(item.investor)[0] === 'symbol')
? {
      connect: {
        id: item.investor.id
      }
} : { upsert: {
          where: {
            id: item.investor.id !== undefined ? {
                equals: item.investor.id
              } : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name
              } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email
              } : undefined,
            userId: item.investor.userId !== undefined ? {
                equals: item.investor.userId
              } : undefined,
          },
          update: {
            id: item.investor.id !== undefined ? {
                set: item.investor.id
              } : undefined,
            name: item.investor.name !== undefined ? {
                set: item.investor.name
              } : undefined,
            email: item.investor.email !== undefined ? {
                set: item.investor.email
              } : undefined,
            type: item.investor.type !== undefined ? {
                set: item.investor.type
              } : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? {
                set: item.investor.kycStatus
              } : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? {
                set: item.investor.walletAddress
              } : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? {
                set: item.investor.deletedAt
              } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          units: item.units !== undefined ? item.units : undefined,
          investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
          status: item.status !== undefined ? item.status : undefined,
      investor: item.investor ? 
        typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && Object.keys(item.investor)[0] === 'id'
    ? { connect: {
            id: item.investor.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.id !== undefined ? item.investor.id : undefined,
            userId: item.investor.userId !== undefined ? item.investor.userId : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name 
               } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email 
               } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        slug: item.slug !== undefined ? item.slug : undefined,
        description: item.description !== undefined ? item.description : undefined,
        status: item.status !== undefined ? item.status : undefined,
        tradingOverrides: item.tradingOverrides !== undefined ? item.tradingOverrides : undefined,
        llmOverrides: item.llmOverrides !== undefined ? item.llmOverrides : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
    brokerageAccounts: item.brokerageAccounts ? 
      Array.isArray(item.brokerageAccounts) && item.brokerageAccounts.length > 0 &&  item.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.brokerageAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.brokerageAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
        },
        create: {
          provider: item.provider !== undefined ? item.provider : undefined,
          type: item.type !== undefined ? item.type : undefined,
          apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
          apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
          realTime: item.realTime !== undefined ? item.realTime : undefined,
          cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
              set: item.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
          autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
          deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
      allocation: item.allocation ? 
        typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && Object.keys(item.allocation)[0] === 'id'
    ? { connect: {
            id: item.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.allocation.id !== undefined ? item.allocation.id : undefined,
            brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? item.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
            optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
            futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
            forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
          },
        }
      } : undefined,
      alerts: item.alerts ? 
        Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
        Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsPositions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
        Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    assignments: item.assignments ? 
      Array.isArray(item.assignments) && item.assignments.length > 0 &&  item.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.assignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.assignments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      user: item.user ? 
        typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
            id: item.user.id
            }
          }
    : { connectOrCreate: {
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
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investments: item.investments ? 
      Array.isArray(item.investments) && item.investments.length > 0 &&  item.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.investments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.investments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
          investorId: item.investorId !== undefined ? {
              equals: item.investorId 
             } : undefined,
        },
        create: {
          units: item.units !== undefined ? item.units : undefined,
          investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
          status: item.status !== undefined ? item.status : undefined,
      investor: item.investor ? 
        typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && Object.keys(item.investor)[0] === 'id'
    ? { connect: {
            id: item.investor.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.id !== undefined ? item.investor.id : undefined,
            userId: item.investor.userId !== undefined ? item.investor.userId : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name 
               } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email 
               } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_ORGANIZATION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneOrganization) {
          return response.data.upsertOneOrganization;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update multiple Organization records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Organization objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: OrganizationType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_MANY_ORGANIZATION = gql`
          mutation updateManyOrganization($data: [OrganizationCreateManyInput!]!) {
            updateManyOrganization(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  slug: prop.slug !== undefined ? prop.slug : undefined,
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
  slug: prop.slug !== undefined ? {
            set: prop.slug 
           } : undefined,
  logoUrl: prop.logoUrl !== undefined ? {
            set: prop.logoUrl 
           } : undefined,
  website: prop.website !== undefined ? {
            set: prop.website 
           } : undefined,
  businessType: prop.businessType !== undefined ? {
            set: prop.businessType 
           } : undefined,
  jurisdiction: prop.jurisdiction !== undefined ? {
            set: prop.jurisdiction 
           } : undefined,
  regulatoryStatus: prop.regulatoryStatus !== undefined ? {
            set: prop.regulatoryStatus 
           } : undefined,
  description: prop.description !== undefined ? {
            set: prop.description 
           } : undefined,
  tradingDefaults: prop.tradingDefaults !== undefined ? {
            set: prop.tradingDefaults 
           } : undefined,
  llmDefaults: prop.llmDefaults !== undefined ? {
            set: prop.llmDefaults 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  deletedAt: prop.deletedAt !== undefined ? {
            set: prop.deletedAt 
           } : undefined,
  members: prop.members ? 
  Array.isArray(prop.members) && prop.members.length > 0 && prop.members.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.members.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.members.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        organizationId: item.organizationId !== undefined ? {
            equals: item.organizationId
          } : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        role: item.role !== undefined ? {
            set: item.role
          } : undefined,
        permissions: item.permissions !== undefined ? {
            set: item.permissions
          } : undefined,
    user: item.user ? 
    typeof item.user === 'object' && Object.keys(item.user).length === 1 && (Object.keys(item.user)[0] === 'id' || Object.keys(item.user)[0] === 'symbol')
? {
    connect: {
      id: item.user.id
    }
} : { upsert: {
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
          customerId: item.user.customerId !== undefined ? {
              equals: item.user.customerId
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
          deletedAt: item.user.deletedAt !== undefined ? {
              set: item.user.deletedAt
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
          plan: item.user.plan !== undefined ? {
              set: item.user.plan
            } : undefined,
          openaiAPIKey: item.user.openaiAPIKey !== undefined ? {
              set: item.user.openaiAPIKey
            } : undefined,
          openaiModel: item.user.openaiModel !== undefined ? {
              set: item.user.openaiModel
            } : undefined,
          passwordHash: item.user.passwordHash !== undefined ? {
              set: item.user.passwordHash
            } : undefined,
          avatarUrl: item.user.avatarUrl !== undefined ? {
              set: item.user.avatarUrl
            } : undefined,
          onboardingComplete: item.user.onboardingComplete !== undefined ? {
              set: item.user.onboardingComplete
            } : undefined,
          signupCategory: item.user.signupCategory !== undefined ? {
              set: item.user.signupCategory
            } : undefined,
      customer: item.user.customer ? 
      typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && (Object.keys(item.user.customer)[0] === 'id' || Object.keys(item.user.customer)[0] === 'symbol')
? {
      connect: {
        id: item.user.customer.id
      }
} : { upsert: {
          where: {
            id: item.user.customer.id !== undefined ? {
                equals: item.user.customer.id
              } : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId
              } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name
              } : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? {
                equals: item.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? {
                equals: item.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId
              } : undefined,
          },
          update: {
            authUserId: item.user.customer.authUserId !== undefined ? {
                set: item.user.customer.authUserId
              } : undefined,
            name: item.user.customer.name !== undefined ? {
                set: item.user.customer.name
              } : undefined,
            plan: item.user.customer.plan !== undefined ? {
                set: item.user.customer.plan
              } : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? {
                set: item.user.customer.stripeCustomerId
              } : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? {
                set: item.user.customer.stripeSubscriptionId
              } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                set: item.user.customer.stripePriceId
              } : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? {
                set: item.user.customer.stripeCurrentPeriodEnd
              } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
      Array.isArray(item.user.accounts) && item.user.accounts.length > 0 && item.user.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.accounts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
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
      sessions: item.user.sessions ? 
      Array.isArray(item.user.sessions) && item.user.sessions.length > 0 && item.user.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.sessions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.sessions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
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
      authenticators: item.user.authenticators ? 
      Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 && item.user.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.authenticators.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.authenticators.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
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
      fundAssignments: item.user.fundAssignments ? 
      Array.isArray(item.user.fundAssignments) && item.user.fundAssignments.length > 0 && item.user.fundAssignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.fundAssignments.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.fundAssignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId
              } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            role: item.role !== undefined ? {
                set: item.role
              } : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions
              } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investorProfile: item.user.investorProfile ? 
      typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && (Object.keys(item.user.investorProfile)[0] === 'id' || Object.keys(item.user.investorProfile)[0] === 'symbol')
? {
      connect: {
        id: item.user.investorProfile.id
      }
} : { upsert: {
          where: {
            id: item.user.investorProfile.id !== undefined ? {
                equals: item.user.investorProfile.id
              } : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name
              } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email
              } : undefined,
            userId: item.user.investorProfile.userId !== undefined ? {
                equals: item.user.investorProfile.userId
              } : undefined,
          },
          update: {
            id: item.user.investorProfile.id !== undefined ? {
                set: item.user.investorProfile.id
              } : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                set: item.user.investorProfile.name
              } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                set: item.user.investorProfile.email
              } : undefined,
            type: item.user.investorProfile.type !== undefined ? {
                set: item.user.investorProfile.type
              } : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? {
                set: item.user.investorProfile.kycStatus
              } : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? {
                set: item.user.investorProfile.walletAddress
              } : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? {
                set: item.user.investorProfile.deletedAt
              } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
      Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 && item.user.linkedProviders.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.linkedProviders.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId
              } : undefined,
            email: item.email !== undefined ? {
                equals: item.email
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                set: item.providerAccountId
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            accessToken: item.accessToken !== undefined ? {
                set: item.accessToken
              } : undefined,
            refreshToken: item.refreshToken !== undefined ? {
                set: item.refreshToken
              } : undefined,
            expiresAt: item.expiresAt !== undefined ? {
                set: item.expiresAt
              } : undefined,
            linkedAt: item.linkedAt !== undefined ? {
                set: item.linkedAt
              } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
      Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 && item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.accountLinkingRequests.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
            email: item.email !== undefined ? {
                equals: item.email
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            provider: item.provider !== undefined ? {
                set: item.provider
              } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                set: item.providerAccountId
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            verificationToken: item.verificationToken !== undefined ? {
                set: item.verificationToken
              } : undefined,
            userAgent: item.userAgent !== undefined ? {
                set: item.userAgent
              } : undefined,
            ipAddress: item.ipAddress !== undefined ? {
                set: item.ipAddress
              } : undefined,
            expiresAt: item.expiresAt !== undefined ? {
                set: item.expiresAt
              } : undefined,
            verifiedAt: item.verifiedAt !== undefined ? {
                set: item.verifiedAt
              } : undefined,
            approvedAt: item.approvedAt !== undefined ? {
                set: item.approvedAt
              } : undefined,
            rejectedAt: item.rejectedAt !== undefined ? {
                set: item.rejectedAt
              } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
      Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 && item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.reviewedWaitlistEntries.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
            reviewedById: item.reviewedById !== undefined ? {
                equals: item.reviewedById
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            email: item.email !== undefined ? {
                set: item.email
              } : undefined,
            fullName: item.fullName !== undefined ? {
                set: item.fullName
              } : undefined,
            companyName: item.companyName !== undefined ? {
                set: item.companyName
              } : undefined,
            companyWebsite: item.companyWebsite !== undefined ? {
                set: item.companyWebsite
              } : undefined,
            jobRole: item.jobRole !== undefined ? {
                set: item.jobRole
              } : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? {
                set: item.professionalInvestorConfirmed
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            queuePosition: item.queuePosition !== undefined ? {
                set: item.queuePosition
              } : undefined,
            reviewedAt: item.reviewedAt !== undefined ? {
                set: item.reviewedAt
              } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
      Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 && item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.user.dashboardLayouts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            role: item.role !== undefined ? {
                set: item.role
              } : undefined,
            layout: item.layout !== undefined ? {
                set: item.layout
              } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
          openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
          openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
          passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
          avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
          onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
          signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
      customer: item.user.customer ? 
        typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && Object.keys(item.user.customer)[0] === 'id'
    ? { connect: {
            id: item.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.customer.id !== undefined ? item.user.customer.id : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId 
               } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name 
               } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
        Array.isArray(item.user.accounts) && item.user.accounts.length > 0 &&  item.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
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
      sessions: item.user.sessions ? 
        Array.isArray(item.user.sessions) && item.user.sessions.length > 0 &&  item.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.sessions.map((item: any) => ({
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
      authenticators: item.user.authenticators ? 
        Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 &&  item.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.authenticators.map((item: any) => ({
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
      fundAssignments: item.user.fundAssignments ? 
        Array.isArray(item.user.fundAssignments) && item.user.fundAssignments.length > 0 &&  item.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.fundAssignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.fundAssignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investorProfile: item.user.investorProfile ? 
        typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && Object.keys(item.user.investorProfile)[0] === 'id'
    ? { connect: {
            id: item.user.investorProfile.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.investorProfile.id !== undefined ? item.user.investorProfile.id : undefined,
            userId: item.user.investorProfile.userId !== undefined ? item.user.investorProfile.userId : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name 
               } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email 
               } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
        Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 &&  item.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
        Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 &&  item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
        Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 &&  item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
        Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 &&  item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        role: item.role !== undefined ? item.role : undefined,
        permissions: item.permissions !== undefined ? {
            set: item.permissions 
           } : undefined,
    user: item.user ? 
      typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
          id: item.user.id
          }
        }
    : { connectOrCreate: {
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
          deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
          openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
          openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
          passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
          avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
          onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
          signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
      customer: item.user.customer ? 
        typeof item.user.customer === 'object' && Object.keys(item.user.customer).length === 1 && Object.keys(item.user.customer)[0] === 'id'
    ? { connect: {
            id: item.user.customer.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.customer.id !== undefined ? item.user.customer.id : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            authUserId: item.user.customer.authUserId !== undefined ? {
                equals: item.user.customer.authUserId 
               } : undefined,
            name: item.user.customer.name !== undefined ? {
                equals: item.user.customer.name 
               } : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? {
                equals: item.user.customer.stripePriceId 
               } : undefined,
          },
          create: {
            authUserId: item.user.customer.authUserId !== undefined ? item.user.customer.authUserId : undefined,
            name: item.user.customer.name !== undefined ? item.user.customer.name : undefined,
            plan: item.user.customer.plan !== undefined ? item.user.customer.plan : undefined,
            stripeCustomerId: item.user.customer.stripeCustomerId !== undefined ? item.user.customer.stripeCustomerId : undefined,
            stripeSubscriptionId: item.user.customer.stripeSubscriptionId !== undefined ? item.user.customer.stripeSubscriptionId : undefined,
            stripePriceId: item.user.customer.stripePriceId !== undefined ? item.user.customer.stripePriceId : undefined,
            stripeCurrentPeriodEnd: item.user.customer.stripeCurrentPeriodEnd !== undefined ? item.user.customer.stripeCurrentPeriodEnd : undefined,
          },
        }
      } : undefined,
      accounts: item.user.accounts ? 
        Array.isArray(item.user.accounts) && item.user.accounts.length > 0 &&  item.user.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accounts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accounts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
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
      sessions: item.user.sessions ? 
        Array.isArray(item.user.sessions) && item.user.sessions.length > 0 &&  item.user.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.sessions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.sessions.map((item: any) => ({
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
      authenticators: item.user.authenticators ? 
        Array.isArray(item.user.authenticators) && item.user.authenticators.length > 0 &&  item.user.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.authenticators.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.authenticators.map((item: any) => ({
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
      fundAssignments: item.user.fundAssignments ? 
        Array.isArray(item.user.fundAssignments) && item.user.fundAssignments.length > 0 &&  item.user.fundAssignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.fundAssignments.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.fundAssignments.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            fundId: item.fundId !== undefined ? {
                equals: item.fundId 
               } : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            permissions: item.permissions !== undefined ? {
                set: item.permissions 
               } : undefined,
          },
        }))
      } : undefined,
      investorProfile: item.user.investorProfile ? 
        typeof item.user.investorProfile === 'object' && Object.keys(item.user.investorProfile).length === 1 && Object.keys(item.user.investorProfile)[0] === 'id'
    ? { connect: {
            id: item.user.investorProfile.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.user.investorProfile.id !== undefined ? item.user.investorProfile.id : undefined,
            userId: item.user.investorProfile.userId !== undefined ? item.user.investorProfile.userId : undefined,
            name: item.user.investorProfile.name !== undefined ? {
                equals: item.user.investorProfile.name 
               } : undefined,
            email: item.user.investorProfile.email !== undefined ? {
                equals: item.user.investorProfile.email 
               } : undefined,
          },
          create: {
            name: item.user.investorProfile.name !== undefined ? item.user.investorProfile.name : undefined,
            email: item.user.investorProfile.email !== undefined ? item.user.investorProfile.email : undefined,
            type: item.user.investorProfile.type !== undefined ? item.user.investorProfile.type : undefined,
            kycStatus: item.user.investorProfile.kycStatus !== undefined ? item.user.investorProfile.kycStatus : undefined,
            walletAddress: item.user.investorProfile.walletAddress !== undefined ? item.user.investorProfile.walletAddress : undefined,
            deletedAt: item.user.investorProfile.deletedAt !== undefined ? item.user.investorProfile.deletedAt : undefined,
          },
        }
      } : undefined,
      linkedProviders: item.user.linkedProviders ? 
        Array.isArray(item.user.linkedProviders) && item.user.linkedProviders.length > 0 &&  item.user.linkedProviders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.linkedProviders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.linkedProviders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
          },
          create: {
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            email: item.email !== undefined ? item.email : undefined,
            accessToken: item.accessToken !== undefined ? item.accessToken : undefined,
            refreshToken: item.refreshToken !== undefined ? item.refreshToken : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            linkedAt: item.linkedAt !== undefined ? item.linkedAt : undefined,
          },
        }))
      } : undefined,
      accountLinkingRequests: item.user.accountLinkingRequests ? 
        Array.isArray(item.user.accountLinkingRequests) && item.user.accountLinkingRequests.length > 0 &&  item.user.accountLinkingRequests.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.accountLinkingRequests.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.accountLinkingRequests.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
            email: item.email !== undefined ? {
                equals: item.email 
               } : undefined,
            providerAccountId: item.providerAccountId !== undefined ? {
                equals: item.providerAccountId 
               } : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            provider: item.provider !== undefined ? item.provider : undefined,
            providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
            status: item.status !== undefined ? item.status : undefined,
            verificationToken: item.verificationToken !== undefined ? item.verificationToken : undefined,
            userAgent: item.userAgent !== undefined ? item.userAgent : undefined,
            ipAddress: item.ipAddress !== undefined ? item.ipAddress : undefined,
            expiresAt: item.expiresAt !== undefined ? item.expiresAt : undefined,
            verifiedAt: item.verifiedAt !== undefined ? item.verifiedAt : undefined,
            approvedAt: item.approvedAt !== undefined ? item.approvedAt : undefined,
            rejectedAt: item.rejectedAt !== undefined ? item.rejectedAt : undefined,
          },
        }))
      } : undefined,
      reviewedWaitlistEntries: item.user.reviewedWaitlistEntries ? 
        Array.isArray(item.user.reviewedWaitlistEntries) && item.user.reviewedWaitlistEntries.length > 0 &&  item.user.reviewedWaitlistEntries.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.reviewedWaitlistEntries.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.reviewedWaitlistEntries.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            email: item.email !== undefined ? item.email : undefined,
          },
          create: {
            email: item.email !== undefined ? item.email : undefined,
            fullName: item.fullName !== undefined ? item.fullName : undefined,
            companyName: item.companyName !== undefined ? item.companyName : undefined,
            companyWebsite: item.companyWebsite !== undefined ? item.companyWebsite : undefined,
            jobRole: item.jobRole !== undefined ? item.jobRole : undefined,
            professionalInvestorConfirmed: item.professionalInvestorConfirmed !== undefined ? item.professionalInvestorConfirmed : undefined,
            status: item.status !== undefined ? item.status : undefined,
            queuePosition: item.queuePosition !== undefined ? item.queuePosition : undefined,
            reviewedAt: item.reviewedAt !== undefined ? item.reviewedAt : undefined,
          },
        }))
      } : undefined,
      dashboardLayouts: item.user.dashboardLayouts ? 
        Array.isArray(item.user.dashboardLayouts) && item.user.dashboardLayouts.length > 0 &&  item.user.dashboardLayouts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.user.dashboardLayouts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.user.dashboardLayouts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            userId: item.userId !== undefined ? {
                equals: item.userId 
               } : undefined,
          },
          create: {
            role: item.role !== undefined ? item.role : undefined,
            layout: item.layout !== undefined ? item.layout : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  funds: prop.funds ? 
  Array.isArray(prop.funds) && prop.funds.length > 0 && prop.funds.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.funds.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.funds.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        name: item.name !== undefined ? {
            equals: item.name
          } : undefined,
        slug: item.slug !== undefined ? {
            equals: item.slug
          } : undefined,
        organizationId: item.organizationId !== undefined ? {
            equals: item.organizationId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        name: item.name !== undefined ? {
            set: item.name
          } : undefined,
        slug: item.slug !== undefined ? {
            set: item.slug
          } : undefined,
        description: item.description !== undefined ? {
            set: item.description
          } : undefined,
        status: item.status !== undefined ? {
            set: item.status
          } : undefined,
        tradingOverrides: item.tradingOverrides !== undefined ? {
            set: item.tradingOverrides
          } : undefined,
        llmOverrides: item.llmOverrides !== undefined ? {
            set: item.llmOverrides
          } : undefined,
        deletedAt: item.deletedAt !== undefined ? {
            set: item.deletedAt
          } : undefined,
    brokerageAccounts: item.brokerageAccounts ? 
    Array.isArray(item.brokerageAccounts) && item.brokerageAccounts.length > 0 && item.brokerageAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.brokerageAccounts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.brokerageAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          provider: item.provider !== undefined ? {
              set: item.provider
            } : undefined,
          type: item.type !== undefined ? {
              set: item.type
            } : undefined,
          apiKey: item.apiKey !== undefined ? {
              set: item.apiKey
            } : undefined,
          apiSecret: item.apiSecret !== undefined ? {
              set: item.apiSecret
            } : undefined,
          configuration: item.configuration !== undefined ? {
              set: item.configuration
            } : undefined,
          marketOpen: item.marketOpen !== undefined ? {
              set: item.marketOpen
            } : undefined,
          realTime: item.realTime !== undefined ? {
              set: item.realTime
            } : undefined,
          cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? {
              set: item.cryptoTradingEnabled
            } : undefined,
          cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
              set: item.cryptoTradingPairs
            } : undefined,
          cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? {
              set: item.cryptoTradeAllocationPct
            } : undefined,
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? {
              set: item.tradeAllocationPct
            } : undefined,
          autoAllocation: item.autoAllocation !== undefined ? {
              set: item.autoAllocation
            } : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? {
              set: item.minPercentageChange
            } : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? {
              set: item.volumeThreshold
            } : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? {
              set: item.enablePortfolioTrailingStop
            } : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? {
              set: item.portfolioTrailPercent
            } : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? {
              set: item.portfolioProfitThresholdPercent
            } : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? {
              set: item.reducedPortfolioTrailPercent
            } : undefined,
          defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? {
              set: item.defaultTrailingStopPercentage100
            } : undefined,
          firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? {
              set: item.firstTrailReductionThreshold100
            } : undefined,
          secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? {
              set: item.secondTrailReductionThreshold100
            } : undefined,
          firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? {
              set: item.firstReducedTrailPercentage100
            } : undefined,
          secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? {
              set: item.secondReducedTrailPercentage100
            } : undefined,
          minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? {
              set: item.minimumPriceChangePercent100
            } : undefined,
          deletedAt: item.deletedAt !== undefined ? {
              set: item.deletedAt
            } : undefined,
      allocation: item.allocation ? 
      typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && (Object.keys(item.allocation)[0] === 'id' || Object.keys(item.allocation)[0] === 'symbol')
? {
      connect: {
        id: item.allocation.id
      }
} : { upsert: {
          where: {
            id: item.allocation.id !== undefined ? {
                equals: item.allocation.id
              } : undefined,
            brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? {
                equals: item.allocation.brokerageAccountId
              } : undefined,
          },
          update: {
            id: item.allocation.id !== undefined ? {
                set: item.allocation.id
              } : undefined,
            equities: item.allocation.equities !== undefined ? {
                set: item.allocation.equities
              } : undefined,
            optionsContracts: item.allocation.optionsContracts !== undefined ? {
                set: item.allocation.optionsContracts
              } : undefined,
            futures: item.allocation.futures !== undefined ? {
                set: item.allocation.futures
              } : undefined,
            etfs: item.allocation.etfs !== undefined ? {
                set: item.allocation.etfs
              } : undefined,
            forex: item.allocation.forex !== undefined ? {
                set: item.allocation.forex
              } : undefined,
            crypto: item.allocation.crypto !== undefined ? {
                set: item.allocation.crypto
              } : undefined,
            stocks: item.allocation.stocks !== undefined ? {
                set: item.allocation.stocks
              } : undefined,
            options: item.allocation.options !== undefined ? {
                set: item.allocation.options
              } : undefined,
          },
          create: {
            equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
            optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
            futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
            forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
          },
        }
      } : undefined,
      alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0 && item.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.alerts.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            title: item.title !== undefined ? {
                equals: item.title
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            title: item.title !== undefined ? {
                set: item.title
              } : undefined,
            message: item.message !== undefined ? {
                set: item.message
              } : undefined,
            type: item.type !== undefined ? {
                set: item.type
              } : undefined,
            severity: item.severity !== undefined ? {
                set: item.severity
              } : undefined,
            category: item.category !== undefined ? {
                set: item.category
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            isRead: item.isRead !== undefined ? {
                set: item.isRead
              } : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? {
                set: item.acknowledgedAt
              } : undefined,
            resolvedAt: item.resolvedAt !== undefined ? {
                set: item.resolvedAt
              } : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? {
                set: item.suppressedUntil
              } : undefined,
            retryCount: item.retryCount !== undefined ? {
                set: item.retryCount
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      trades: item.trades ? 
      Array.isArray(item.trades) && item.trades.length > 0 && item.trades.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.trades.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
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
            summary: item.summary !== undefined ? {
                set: item.summary
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
            deletedAt: item.deletedAt !== undefined ? {
                set: item.deletedAt
              } : undefined,
            symbol: item.symbol !== undefined ? {
                set: item.symbol
              } : undefined,
            entryPrice: item.entryPrice !== undefined ? {
                set: item.entryPrice
              } : undefined,
            exitPrice: item.exitPrice !== undefined ? {
                set: item.exitPrice
              } : undefined,
            entryQty: item.entryQty !== undefined ? {
                set: item.entryQty
              } : undefined,
            exitQty: item.exitQty !== undefined ? {
                set: item.exitQty
              } : undefined,
            entryValue: item.entryValue !== undefined ? {
                set: item.entryValue
              } : undefined,
            exitValue: item.exitValue !== undefined ? {
                set: item.exitValue
              } : undefined,
            entryTime: item.entryTime !== undefined ? {
                set: item.entryTime
              } : undefined,
            exitTime: item.exitTime !== undefined ? {
                set: item.exitTime
              } : undefined,
            pnlAmount: item.pnlAmount !== undefined ? {
                set: item.pnlAmount
              } : undefined,
            pnlPercent: item.pnlPercent !== undefined ? {
                set: item.pnlPercent
              } : undefined,
            durationMinutes: item.durationMinutes !== undefined ? {
                set: item.durationMinutes
              } : undefined,
            marketPhase: item.marketPhase !== undefined ? {
                set: item.marketPhase
              } : undefined,
            marketVolatility: item.marketVolatility !== undefined ? {
                set: item.marketVolatility
              } : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? {
                set: item.sessionHorizonMinutes
              } : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? {
                set: item.thresholdsJson
              } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
      Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 && item.optionsPositions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.optionsPositions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            tradeId: item.tradeId !== undefined ? {
                equals: item.tradeId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            status: item.status !== undefined ? {
                set: item.status
              } : undefined,
            openingSide: item.openingSide !== undefined ? {
                set: item.openingSide
              } : undefined,
            quantity: item.quantity !== undefined ? {
                set: item.quantity
              } : undefined,
            entryPrice: item.entryPrice !== undefined ? {
                set: item.entryPrice
              } : undefined,
            entryCost: item.entryCost !== undefined ? {
                set: item.entryCost
              } : undefined,
            entryTime: item.entryTime !== undefined ? {
                set: item.entryTime
              } : undefined,
            exitPrice: item.exitPrice !== undefined ? {
                set: item.exitPrice
              } : undefined,
            exitValue: item.exitValue !== undefined ? {
                set: item.exitValue
              } : undefined,
            exitTime: item.exitTime !== undefined ? {
                set: item.exitTime
              } : undefined,
            currentPrice: item.currentPrice !== undefined ? {
                set: item.currentPrice
              } : undefined,
            currentValue: item.currentValue !== undefined ? {
                set: item.currentValue
              } : undefined,
            unrealizedPnL: item.unrealizedPnL !== undefined ? {
                set: item.unrealizedPnL
              } : undefined,
            unrealizedPnLPercent: item.unrealizedPnLPercent !== undefined ? {
                set: item.unrealizedPnLPercent
              } : undefined,
            realizedPnL: item.realizedPnL !== undefined ? {
                set: item.realizedPnL
              } : undefined,
            realizedPnLPercent: item.realizedPnLPercent !== undefined ? {
                set: item.realizedPnLPercent
              } : undefined,
            totalFees: item.totalFees !== undefined ? {
                set: item.totalFees
              } : undefined,
            currentDelta: item.currentDelta !== undefined ? {
                set: item.currentDelta
              } : undefined,
            currentGamma: item.currentGamma !== undefined ? {
                set: item.currentGamma
              } : undefined,
            currentTheta: item.currentTheta !== undefined ? {
                set: item.currentTheta
              } : undefined,
            currentVega: item.currentVega !== undefined ? {
                set: item.currentVega
              } : undefined,
            currentRho: item.currentRho !== undefined ? {
                set: item.currentRho
              } : undefined,
            currentImpliedVolatility: item.currentImpliedVolatility !== undefined ? {
                set: item.currentImpliedVolatility
              } : undefined,
            daysHeld: item.daysHeld !== undefined ? {
                set: item.daysHeld
              } : undefined,
            exitReason: item.exitReason !== undefined ? {
                set: item.exitReason
              } : undefined,
            strategyType: item.strategyType !== undefined ? {
                set: item.strategyType
              } : undefined,
            tradeId: item.tradeId !== undefined ? {
                set: item.tradeId
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
      Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 && item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
      connect: item.optionsTradeExecutions.map((item: any) => ({
        id: item.id
      }))
} : { upsert: item.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId
              } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId
              } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId
              } : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id
              } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                set: item.brokerOrderId
              } : undefined,
            executionSide: item.executionSide !== undefined ? {
                set: item.executionSide
              } : undefined,
            quantity: item.quantity !== undefined ? {
                set: item.quantity
              } : undefined,
            executionPrice: item.executionPrice !== undefined ? {
                set: item.executionPrice
              } : undefined,
            executionValue: item.executionValue !== undefined ? {
                set: item.executionValue
              } : undefined,
            fees: item.fees !== undefined ? {
                set: item.fees
              } : undefined,
            executionTime: item.executionTime !== undefined ? {
                set: item.executionTime
              } : undefined,
            underlyingPriceAtExecution: item.underlyingPriceAtExecution !== undefined ? {
                set: item.underlyingPriceAtExecution
              } : undefined,
            deltaAtExecution: item.deltaAtExecution !== undefined ? {
                set: item.deltaAtExecution
              } : undefined,
            gammaAtExecution: item.gammaAtExecution !== undefined ? {
                set: item.gammaAtExecution
              } : undefined,
            thetaAtExecution: item.thetaAtExecution !== undefined ? {
                set: item.thetaAtExecution
              } : undefined,
            vegaAtExecution: item.vegaAtExecution !== undefined ? {
                set: item.vegaAtExecution
              } : undefined,
            rhoAtExecution: item.rhoAtExecution !== undefined ? {
                set: item.rhoAtExecution
              } : undefined,
            impliedVolatilityAtExecution: item.impliedVolatilityAtExecution !== undefined ? {
                set: item.impliedVolatilityAtExecution
              } : undefined,
            orderType: item.orderType !== undefined ? {
                set: item.orderType
              } : undefined,
            limitPrice: item.limitPrice !== undefined ? {
                set: item.limitPrice
              } : undefined,
            stopPrice: item.stopPrice !== undefined ? {
                set: item.stopPrice
              } : undefined,
            timeInForce: item.timeInForce !== undefined ? {
                set: item.timeInForce
              } : undefined,
            venue: item.venue !== undefined ? {
                set: item.venue
              } : undefined,
            slippage: item.slippage !== undefined ? {
                set: item.slippage
              } : undefined,
            notes: item.notes !== undefined ? {
                set: item.notes
              } : undefined,
            metadata: item.metadata !== undefined ? {
                set: item.metadata
              } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          provider: item.provider !== undefined ? item.provider : undefined,
          type: item.type !== undefined ? item.type : undefined,
          apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
          apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
          realTime: item.realTime !== undefined ? item.realTime : undefined,
          cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
              set: item.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
          autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
          deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
      allocation: item.allocation ? 
        typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && Object.keys(item.allocation)[0] === 'id'
    ? { connect: {
            id: item.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.allocation.id !== undefined ? item.allocation.id : undefined,
            brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? item.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
            optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
            futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
            forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
          },
        }
      } : undefined,
      alerts: item.alerts ? 
        Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
        Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsPositions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
        Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    assignments: item.assignments ? 
    Array.isArray(item.assignments) && item.assignments.length > 0 && item.assignments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.assignments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.assignments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId
            } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          role: item.role !== undefined ? {
              set: item.role
            } : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions
            } : undefined,
      user: item.user ? 
      typeof item.user === 'object' && Object.keys(item.user).length === 1 && (Object.keys(item.user)[0] === 'id' || Object.keys(item.user)[0] === 'symbol')
? {
      connect: {
        id: item.user.id
      }
} : { upsert: {
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
            customerId: item.user.customerId !== undefined ? {
                equals: item.user.customerId
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
            deletedAt: item.user.deletedAt !== undefined ? {
                set: item.user.deletedAt
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
            plan: item.user.plan !== undefined ? {
                set: item.user.plan
              } : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? {
                set: item.user.openaiAPIKey
              } : undefined,
            openaiModel: item.user.openaiModel !== undefined ? {
                set: item.user.openaiModel
              } : undefined,
            passwordHash: item.user.passwordHash !== undefined ? {
                set: item.user.passwordHash
              } : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? {
                set: item.user.avatarUrl
              } : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? {
                set: item.user.onboardingComplete
              } : undefined,
            signupCategory: item.user.signupCategory !== undefined ? {
                set: item.user.signupCategory
              } : undefined,
          },
          create: {
            name: item.user.name !== undefined ? item.user.name : undefined,
            email: item.user.email !== undefined ? item.user.email : undefined,
            emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
            image: item.user.image !== undefined ? item.user.image : undefined,
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      user: item.user ? 
        typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
            id: item.user.id
            }
          }
    : { connectOrCreate: {
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
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investments: item.investments ? 
    Array.isArray(item.investments) && item.investments.length > 0 && item.investments.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.investments.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.investments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId
            } : undefined,
          investorId: item.investorId !== undefined ? {
              equals: item.investorId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          units: item.units !== undefined ? {
              set: item.units
            } : undefined,
          investedAt: item.investedAt !== undefined ? {
              set: item.investedAt
            } : undefined,
          status: item.status !== undefined ? {
              set: item.status
            } : undefined,
      investor: item.investor ? 
      typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && (Object.keys(item.investor)[0] === 'id' || Object.keys(item.investor)[0] === 'symbol')
? {
      connect: {
        id: item.investor.id
      }
} : { upsert: {
          where: {
            id: item.investor.id !== undefined ? {
                equals: item.investor.id
              } : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name
              } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email
              } : undefined,
            userId: item.investor.userId !== undefined ? {
                equals: item.investor.userId
              } : undefined,
          },
          update: {
            id: item.investor.id !== undefined ? {
                set: item.investor.id
              } : undefined,
            name: item.investor.name !== undefined ? {
                set: item.investor.name
              } : undefined,
            email: item.investor.email !== undefined ? {
                set: item.investor.email
              } : undefined,
            type: item.investor.type !== undefined ? {
                set: item.investor.type
              } : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? {
                set: item.investor.kycStatus
              } : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? {
                set: item.investor.walletAddress
              } : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? {
                set: item.investor.deletedAt
              } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
        create: {
          units: item.units !== undefined ? item.units : undefined,
          investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
          status: item.status !== undefined ? item.status : undefined,
      investor: item.investor ? 
        typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && Object.keys(item.investor)[0] === 'id'
    ? { connect: {
            id: item.investor.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.id !== undefined ? item.investor.id : undefined,
            userId: item.investor.userId !== undefined ? item.investor.userId : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name 
               } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email 
               } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        slug: item.slug !== undefined ? item.slug : undefined,
        description: item.description !== undefined ? item.description : undefined,
        status: item.status !== undefined ? item.status : undefined,
        tradingOverrides: item.tradingOverrides !== undefined ? item.tradingOverrides : undefined,
        llmOverrides: item.llmOverrides !== undefined ? item.llmOverrides : undefined,
        deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
    brokerageAccounts: item.brokerageAccounts ? 
      Array.isArray(item.brokerageAccounts) && item.brokerageAccounts.length > 0 &&  item.brokerageAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.brokerageAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.brokerageAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
        },
        create: {
          provider: item.provider !== undefined ? item.provider : undefined,
          type: item.type !== undefined ? item.type : undefined,
          apiKey: item.apiKey !== undefined ? item.apiKey : undefined,
          apiSecret: item.apiSecret !== undefined ? item.apiSecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
          realTime: item.realTime !== undefined ? item.realTime : undefined,
          cryptoTradingEnabled: item.cryptoTradingEnabled !== undefined ? item.cryptoTradingEnabled : undefined,
          cryptoTradingPairs: item.cryptoTradingPairs !== undefined ? {
              set: item.cryptoTradingPairs 
             } : undefined,
          cryptoTradeAllocationPct: item.cryptoTradeAllocationPct !== undefined ? item.cryptoTradeAllocationPct : undefined,
          tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
          autoAllocation: item.autoAllocation !== undefined ? item.autoAllocation : undefined,
          minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
          volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
          enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
          portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
          portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
          reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
          defaultTrailingStopPercentage100: item.defaultTrailingStopPercentage100 !== undefined ? item.defaultTrailingStopPercentage100 : undefined,
          firstTrailReductionThreshold100: item.firstTrailReductionThreshold100 !== undefined ? item.firstTrailReductionThreshold100 : undefined,
          secondTrailReductionThreshold100: item.secondTrailReductionThreshold100 !== undefined ? item.secondTrailReductionThreshold100 : undefined,
          firstReducedTrailPercentage100: item.firstReducedTrailPercentage100 !== undefined ? item.firstReducedTrailPercentage100 : undefined,
          secondReducedTrailPercentage100: item.secondReducedTrailPercentage100 !== undefined ? item.secondReducedTrailPercentage100 : undefined,
          minimumPriceChangePercent100: item.minimumPriceChangePercent100 !== undefined ? item.minimumPriceChangePercent100 : undefined,
          deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
      allocation: item.allocation ? 
        typeof item.allocation === 'object' && Object.keys(item.allocation).length === 1 && Object.keys(item.allocation)[0] === 'id'
    ? { connect: {
            id: item.allocation.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.allocation.id !== undefined ? item.allocation.id : undefined,
            brokerageAccountId: item.allocation.brokerageAccountId !== undefined ? item.allocation.brokerageAccountId : undefined,
          },
          create: {
            equities: item.allocation.equities !== undefined ? item.allocation.equities : undefined,
            optionsContracts: item.allocation.optionsContracts !== undefined ? item.allocation.optionsContracts : undefined,
            futures: item.allocation.futures !== undefined ? item.allocation.futures : undefined,
            etfs: item.allocation.etfs !== undefined ? item.allocation.etfs : undefined,
            forex: item.allocation.forex !== undefined ? item.allocation.forex : undefined,
            crypto: item.allocation.crypto !== undefined ? item.allocation.crypto : undefined,
            stocks: item.allocation.stocks !== undefined ? item.allocation.stocks : undefined,
            options: item.allocation.options !== undefined ? item.allocation.options : undefined,
          },
        }
      } : undefined,
      alerts: item.alerts ? 
        Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            title: item.title !== undefined ? {
                equals: item.title 
               } : undefined,
          },
          create: {
            title: item.title !== undefined ? item.title : undefined,
            message: item.message !== undefined ? item.message : undefined,
            type: item.type !== undefined ? item.type : undefined,
            severity: item.severity !== undefined ? item.severity : undefined,
            category: item.category !== undefined ? item.category : undefined,
            status: item.status !== undefined ? item.status : undefined,
            isRead: item.isRead !== undefined ? item.isRead : undefined,
            acknowledgedAt: item.acknowledgedAt !== undefined ? item.acknowledgedAt : undefined,
            resolvedAt: item.resolvedAt !== undefined ? item.resolvedAt : undefined,
            suppressedUntil: item.suppressedUntil !== undefined ? item.suppressedUntil : undefined,
            retryCount: item.retryCount !== undefined ? item.retryCount : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            symbol: item.symbol !== undefined ? {
                equals: item.symbol 
               } : undefined,
          },
          create: {
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            summary: item.summary !== undefined ? item.summary : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
            deletedAt: item.deletedAt !== undefined ? item.deletedAt : undefined,
            symbol: item.symbol !== undefined ? item.symbol : undefined,
            entryPrice: item.entryPrice !== undefined ? item.entryPrice : undefined,
            exitPrice: item.exitPrice !== undefined ? item.exitPrice : undefined,
            entryQty: item.entryQty !== undefined ? item.entryQty : undefined,
            exitQty: item.exitQty !== undefined ? item.exitQty : undefined,
            entryValue: item.entryValue !== undefined ? item.entryValue : undefined,
            exitValue: item.exitValue !== undefined ? item.exitValue : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            pnlAmount: item.pnlAmount !== undefined ? item.pnlAmount : undefined,
            pnlPercent: item.pnlPercent !== undefined ? item.pnlPercent : undefined,
            durationMinutes: item.durationMinutes !== undefined ? item.durationMinutes : undefined,
            marketPhase: item.marketPhase !== undefined ? item.marketPhase : undefined,
            marketVolatility: item.marketVolatility !== undefined ? item.marketVolatility : undefined,
            sessionHorizonMinutes: item.sessionHorizonMinutes !== undefined ? item.sessionHorizonMinutes : undefined,
            thresholdsJson: item.thresholdsJson !== undefined ? item.thresholdsJson : undefined,
          },
        }))
      } : undefined,
      optionsPositions: item.optionsPositions ? 
        Array.isArray(item.optionsPositions) && item.optionsPositions.length > 0 &&  item.optionsPositions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsPositions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.optionsPositions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
          },
          create: {
            status: item.status !== undefined ? item.status : undefined,
            openingSide: item.openingSide !== undefined ? item.openingSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            entryTime: item.entryTime !== undefined ? item.entryTime : undefined,
            exitTime: item.exitTime !== undefined ? item.exitTime : undefined,
            daysHeld: item.daysHeld !== undefined ? item.daysHeld : undefined,
            exitReason: item.exitReason !== undefined ? item.exitReason : undefined,
            strategyType: item.strategyType !== undefined ? item.strategyType : undefined,
            tradeId: item.tradeId !== undefined ? item.tradeId : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
      optionsTradeExecutions: item.optionsTradeExecutions ? 
        Array.isArray(item.optionsTradeExecutions) && item.optionsTradeExecutions.length > 0 &&  item.optionsTradeExecutions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.optionsTradeExecutions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.optionsTradeExecutions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            positionId: item.positionId !== undefined ? {
                equals: item.positionId 
               } : undefined,
            contractId: item.contractId !== undefined ? {
                equals: item.contractId 
               } : undefined,
            brokerageAccountId: item.brokerageAccountId !== undefined ? {
                equals: item.brokerageAccountId 
               } : undefined,
            brokerOrderId: item.brokerOrderId !== undefined ? {
                equals: item.brokerOrderId 
               } : undefined,
          },
          create: {
            brokerOrderId: item.brokerOrderId !== undefined ? item.brokerOrderId : undefined,
            executionSide: item.executionSide !== undefined ? item.executionSide : undefined,
            quantity: item.quantity !== undefined ? item.quantity : undefined,
            executionTime: item.executionTime !== undefined ? item.executionTime : undefined,
            orderType: item.orderType !== undefined ? item.orderType : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            venue: item.venue !== undefined ? item.venue : undefined,
            notes: item.notes !== undefined ? item.notes : undefined,
            metadata: item.metadata !== undefined ? item.metadata : undefined,
          },
        }))
      } : undefined,
        },
      }))
    } : undefined,
    assignments: item.assignments ? 
      Array.isArray(item.assignments) && item.assignments.length > 0 &&  item.assignments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.assignments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.assignments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
          userId: item.userId !== undefined ? {
              equals: item.userId 
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
          permissions: item.permissions !== undefined ? {
              set: item.permissions 
             } : undefined,
      user: item.user ? 
        typeof item.user === 'object' && Object.keys(item.user).length === 1 && Object.keys(item.user)[0] === 'id'
    ? { connect: {
            id: item.user.id
            }
          }
    : { connectOrCreate: {
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
            deletedAt: item.user.deletedAt !== undefined ? item.user.deletedAt : undefined,
            role: item.user.role !== undefined ? item.user.role : undefined,
            bio: item.user.bio !== undefined ? item.user.bio : undefined,
            jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
            plan: item.user.plan !== undefined ? item.user.plan : undefined,
            openaiAPIKey: item.user.openaiAPIKey !== undefined ? item.user.openaiAPIKey : undefined,
            openaiModel: item.user.openaiModel !== undefined ? item.user.openaiModel : undefined,
            passwordHash: item.user.passwordHash !== undefined ? item.user.passwordHash : undefined,
            avatarUrl: item.user.avatarUrl !== undefined ? item.user.avatarUrl : undefined,
            onboardingComplete: item.user.onboardingComplete !== undefined ? item.user.onboardingComplete : undefined,
            signupCategory: item.user.signupCategory !== undefined ? item.user.signupCategory : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
    investments: item.investments ? 
      Array.isArray(item.investments) && item.investments.length > 0 &&  item.investments.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.investments.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.investments.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          fundId: item.fundId !== undefined ? {
              equals: item.fundId 
             } : undefined,
          investorId: item.investorId !== undefined ? {
              equals: item.investorId 
             } : undefined,
        },
        create: {
          units: item.units !== undefined ? item.units : undefined,
          investedAt: item.investedAt !== undefined ? item.investedAt : undefined,
          status: item.status !== undefined ? item.status : undefined,
      investor: item.investor ? 
        typeof item.investor === 'object' && Object.keys(item.investor).length === 1 && Object.keys(item.investor)[0] === 'id'
    ? { connect: {
            id: item.investor.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: item.investor.id !== undefined ? item.investor.id : undefined,
            userId: item.investor.userId !== undefined ? item.investor.userId : undefined,
            name: item.investor.name !== undefined ? {
                equals: item.investor.name 
               } : undefined,
            email: item.investor.email !== undefined ? {
                equals: item.investor.email 
               } : undefined,
          },
          create: {
            name: item.investor.name !== undefined ? item.investor.name : undefined,
            email: item.investor.email !== undefined ? item.investor.email : undefined,
            type: item.investor.type !== undefined ? item.investor.type : undefined,
            kycStatus: item.investor.kycStatus !== undefined ? item.investor.kycStatus : undefined,
            walletAddress: item.investor.walletAddress !== undefined ? item.investor.walletAddress : undefined,
            deletedAt: item.investor.deletedAt !== undefined ? item.investor.deletedAt : undefined,
          },
        }
      } : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_ORGANIZATION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyOrganization) {
          return response.data.updateManyOrganization;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Delete a single Organization record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Organization or null.
   */
  async delete(props: OrganizationType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OrganizationType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const DELETE_ONE_ORGANIZATION = gql`
          mutation deleteOneOrganization($where: OrganizationWhereUniqueInput!) {
            deleteOneOrganization(where: $where) {
              id
            }
          }`;

        const variables = {
          where: {
            id: props.id ? props.id : undefined,
          }
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: DELETE_ONE_ORGANIZATION,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneOrganization) {
          return response.data.deleteOneOrganization;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve a single Organization record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved Organization or null.
   */
  async get(props: OrganizationType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<OrganizationType | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const GET_ORGANIZATION = gql`
          query getOrganization($where: OrganizationWhereUniqueInput!) {
            getOrganization(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  slug: props.slug !== undefined ? props.slug : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_ORGANIZATION,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getOrganization ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Organization found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve all Organizations records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Organization records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<OrganizationType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const GET_ALL_ORGANIZATION = gql`
          query getAllOrganization {
            organizations {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_ORGANIZATION,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.organizations ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Organization found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Find multiple Organization records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found Organization records or null.
   */
  async findMany(props: OrganizationType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<OrganizationType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const FIND_MANY_ORGANIZATION = gql`
          query findManyOrganization($where: OrganizationWhereInput!) {
            organizations(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
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

        const response = await client.query({
          query: FIND_MANY_ORGANIZATION,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.organizations) {
          return response.data.organizations;
        } else {
          return [] as OrganizationType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Organization found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn("Database connection error, retrying...", { retryCount, delayMs: delay });
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  }
};
