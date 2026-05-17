import { Customer as CustomerType } from './generated/typegraphql-prisma/models/Customer';
import {
  client as importedClient,
  ApolloClientType,
  NormalizedCacheObject,
  getApolloModules,
} from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';

/**
 * CRUD operations for the Customer model.
 */

const selectionSet = `
    
  id
  authUserId
  name
  plan
  stripeCustomerId
  stripeSubscriptionId
  stripePriceId
  stripeCurrentPeriodEnd
  jurisdiction
  riskProfile
  amlStatus
  lastKycUpdate
  createdAt
  updatedAt
  users {
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
    orgMemberships {
      id
      organizationId
      organization {
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
        funds {
id
        }
      }
      userId
      role
      permissions
      createdAt
      updatedAt
    }
    fundAssignments {
      id
      fundId
      fund {
        id
        name
        slug
        description
        status
        tradingOverrides
        llmOverrides
        policyOverlays
        organizationId
        organization {
id
        }
        createdAt
        updatedAt
        deletedAt
        brokerageAccounts {
id
        }
        investments {
id
        }
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
        fundId
        fund {
id
        }
        investorId
        units
        investedAt
        status
        createdAt
        updatedAt
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
        token
        email
        waitlistEntryId
        waitlistEntry {
id
        }
        used
        usedAt
        expiresAt
        createdAt
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
    llmConfiguration {
      id
      userId
      defaultProvider
      miniProvider
      normalProvider
      advancedProvider
      miniModel
      normalModel
      advancedModel
      createdAt
      updatedAt
    }
  }

  `;

export const Customer = {
  /**
   * Create a new Customer record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created Customer or null.
   */

  /**
   * Create a new Customer record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties for the new record.
   * @param globalClient - Apollo Client instance.
   * @returns The created Customer or null.
   */
  async create(
    props: CustomerType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<CustomerType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const CREATE_ONE_CUSTOMER = gql`
              mutation createOneCustomer($data: CustomerCreateInput!) {
                createOneCustomer(data: $data) {
                  ${selectionSet}
                }
              }
           `;

        const variables = {
          data: {
            authUserId:
              props.authUserId !== undefined ? props.authUserId : undefined,
            name: props.name !== undefined ? props.name : undefined,
            plan: props.plan !== undefined ? props.plan : undefined,
            stripeCustomerId:
              props.stripeCustomerId !== undefined
                ? props.stripeCustomerId
                : undefined,
            stripeSubscriptionId:
              props.stripeSubscriptionId !== undefined
                ? props.stripeSubscriptionId
                : undefined,
            stripePriceId:
              props.stripePriceId !== undefined
                ? props.stripePriceId
                : undefined,
            stripeCurrentPeriodEnd:
              props.stripeCurrentPeriodEnd !== undefined
                ? props.stripeCurrentPeriodEnd
                : undefined,
            jurisdiction:
              props.jurisdiction !== undefined ? props.jurisdiction : undefined,
            riskProfile:
              props.riskProfile !== undefined ? props.riskProfile : undefined,
            amlStatus:
              props.amlStatus !== undefined ? props.amlStatus : undefined,
            lastKycUpdate:
              props.lastKycUpdate !== undefined
                ? props.lastKycUpdate
                : undefined,
            users: props.users
              ? Array.isArray(props.users) &&
                props.users.length > 0 &&
                props.users.every(
                  (item: any) =>
                    typeof item === 'object' &&
                    'id' in item &&
                    Object.keys(item).length === 1
                )
                ? {
                    connect: props.users.map((item: any) => ({
                      id: item.id,
                    })),
                  }
                : {
                    connectOrCreate: props.users.map((item: any) => ({
                      where: {
                        id: item.id !== undefined ? item.id : undefined,
                        email:
                          item.email !== undefined ? item.email : undefined,
                        name:
                          item.name !== undefined
                            ? {
                                equals: item.name,
                              }
                            : undefined,
                      },
                      create: {
                        name: item.name !== undefined ? item.name : undefined,
                        email:
                          item.email !== undefined ? item.email : undefined,
                        emailVerified:
                          item.emailVerified !== undefined
                            ? item.emailVerified
                            : undefined,
                        image:
                          item.image !== undefined ? item.image : undefined,
                        deletedAt:
                          item.deletedAt !== undefined
                            ? item.deletedAt
                            : undefined,
                        role: item.role !== undefined ? item.role : undefined,
                        bio: item.bio !== undefined ? item.bio : undefined,
                        jobTitle:
                          item.jobTitle !== undefined
                            ? item.jobTitle
                            : undefined,
                        plan: item.plan !== undefined ? item.plan : undefined,
                        openaiAPIKey:
                          item.openaiAPIKey !== undefined
                            ? item.openaiAPIKey
                            : undefined,
                        openaiModel:
                          item.openaiModel !== undefined
                            ? item.openaiModel
                            : undefined,
                        passwordHash:
                          item.passwordHash !== undefined
                            ? item.passwordHash
                            : undefined,
                        avatarUrl:
                          item.avatarUrl !== undefined
                            ? item.avatarUrl
                            : undefined,
                        onboardingComplete:
                          item.onboardingComplete !== undefined
                            ? item.onboardingComplete
                            : undefined,
                        signupCategory:
                          item.signupCategory !== undefined
                            ? item.signupCategory
                            : undefined,
                        accounts: item.accounts
                          ? Array.isArray(item.accounts) &&
                            item.accounts.length > 0 &&
                            item.accounts.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.accounts.map((item: any) => ({
                                  id: item.id,
                                })),
                              }
                            : {
                                connectOrCreate: item.accounts.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      type:
                                        item.type !== undefined
                                          ? item.type
                                          : undefined,
                                      provider:
                                        item.provider !== undefined
                                          ? item.provider
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      refresh_token:
                                        item.refresh_token !== undefined
                                          ? item.refresh_token
                                          : undefined,
                                      access_token:
                                        item.access_token !== undefined
                                          ? item.access_token
                                          : undefined,
                                      expires_at:
                                        item.expires_at !== undefined
                                          ? item.expires_at
                                          : undefined,
                                      token_type:
                                        item.token_type !== undefined
                                          ? item.token_type
                                          : undefined,
                                      scope:
                                        item.scope !== undefined
                                          ? item.scope
                                          : undefined,
                                      id_token:
                                        item.id_token !== undefined
                                          ? item.id_token
                                          : undefined,
                                      session_state:
                                        item.session_state !== undefined
                                          ? item.session_state
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        sessions: item.sessions
                          ? Array.isArray(item.sessions) &&
                            item.sessions.length > 0 &&
                            item.sessions.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.sessions.map((item: any) => ({
                                  id: item.id,
                                })),
                              }
                            : {
                                connectOrCreate: item.sessions.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      sessionToken:
                                        item.sessionToken !== undefined
                                          ? item.sessionToken
                                          : undefined,
                                      expires:
                                        item.expires !== undefined
                                          ? item.expires
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        authenticators: item.authenticators
                          ? Array.isArray(item.authenticators) &&
                            item.authenticators.length > 0 &&
                            item.authenticators.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.authenticators.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.authenticators.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      credentialID:
                                        item.credentialID !== undefined
                                          ? item.credentialID
                                          : undefined,
                                      publicKey:
                                        item.publicKey !== undefined
                                          ? item.publicKey
                                          : undefined,
                                      counter:
                                        item.counter !== undefined
                                          ? item.counter
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        orgMemberships: item.orgMemberships
                          ? Array.isArray(item.orgMemberships) &&
                            item.orgMemberships.length > 0 &&
                            item.orgMemberships.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.orgMemberships.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.orgMemberships.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      organizationId:
                                        item.organizationId !== undefined
                                          ? {
                                              equals: item.organizationId,
                                            }
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      organization: item.organization
                                        ? typeof item.organization ===
                                            'object' &&
                                          Object.keys(item.organization)
                                            .length === 1 &&
                                          Object.keys(item.organization)[0] ===
                                            'id'
                                          ? {
                                              connect: {
                                                id: item.organization.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.organization.id !==
                                                    undefined
                                                      ? item.organization.id
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .name,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? item.organization.name
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  logoUrl:
                                                    item.organization
                                                      .logoUrl !== undefined
                                                      ? item.organization
                                                          .logoUrl
                                                      : undefined,
                                                  website:
                                                    item.organization
                                                      .website !== undefined
                                                      ? item.organization
                                                          .website
                                                      : undefined,
                                                  businessType:
                                                    item.organization
                                                      .businessType !==
                                                    undefined
                                                      ? item.organization
                                                          .businessType
                                                      : undefined,
                                                  jurisdiction:
                                                    item.organization
                                                      .jurisdiction !==
                                                    undefined
                                                      ? item.organization
                                                          .jurisdiction
                                                      : undefined,
                                                  regulatoryStatus:
                                                    item.organization
                                                      .regulatoryStatus !==
                                                    undefined
                                                      ? item.organization
                                                          .regulatoryStatus
                                                      : undefined,
                                                  description:
                                                    item.organization
                                                      .description !== undefined
                                                      ? item.organization
                                                          .description
                                                      : undefined,
                                                  tradingDefaults:
                                                    item.organization
                                                      .tradingDefaults !==
                                                    undefined
                                                      ? item.organization
                                                          .tradingDefaults
                                                      : undefined,
                                                  llmDefaults:
                                                    item.organization
                                                      .llmDefaults !== undefined
                                                      ? item.organization
                                                          .llmDefaults
                                                      : undefined,
                                                  deletedAt:
                                                    item.organization
                                                      .deletedAt !== undefined
                                                      ? item.organization
                                                          .deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        fundAssignments: item.fundAssignments
                          ? Array.isArray(item.fundAssignments) &&
                            item.fundAssignments.length > 0 &&
                            item.fundAssignments.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.fundAssignments.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.fundAssignments.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      fundId:
                                        item.fundId !== undefined
                                          ? {
                                              equals: item.fundId,
                                            }
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      fund: item.fund
                                        ? typeof item.fund === 'object' &&
                                          Object.keys(item.fund).length === 1 &&
                                          Object.keys(item.fund)[0] === 'id'
                                          ? {
                                              connect: {
                                                id: item.fund.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.fund.id !== undefined
                                                      ? item.fund.id
                                                      : undefined,
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.slug,
                                                        }
                                                      : undefined,
                                                  organizationId:
                                                    item.fund.organizationId !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.fund
                                                              .organizationId,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? item.fund.name
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? item.fund.slug
                                                      : undefined,
                                                  description:
                                                    item.fund.description !==
                                                    undefined
                                                      ? item.fund.description
                                                      : undefined,
                                                  status:
                                                    item.fund.status !==
                                                    undefined
                                                      ? item.fund.status
                                                      : undefined,
                                                  tradingOverrides:
                                                    item.fund
                                                      .tradingOverrides !==
                                                    undefined
                                                      ? item.fund
                                                          .tradingOverrides
                                                      : undefined,
                                                  llmOverrides:
                                                    item.fund.llmOverrides !==
                                                    undefined
                                                      ? item.fund.llmOverrides
                                                      : undefined,
                                                  policyOverlays:
                                                    item.fund.policyOverlays !==
                                                    undefined
                                                      ? item.fund.policyOverlays
                                                      : undefined,
                                                  deletedAt:
                                                    item.fund.deletedAt !==
                                                    undefined
                                                      ? item.fund.deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        investorProfile: item.investorProfile
                          ? typeof item.investorProfile === 'object' &&
                            Object.keys(item.investorProfile).length === 1 &&
                            Object.keys(item.investorProfile)[0] === 'id'
                            ? {
                                connect: {
                                  id: item.investorProfile.id,
                                },
                              }
                            : {
                                connectOrCreate: {
                                  where: {
                                    id:
                                      item.investorProfile.id !== undefined
                                        ? item.investorProfile.id
                                        : undefined,
                                    userId:
                                      item.investorProfile.userId !== undefined
                                        ? item.investorProfile.userId
                                        : undefined,
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? {
                                            equals: item.investorProfile.name,
                                          }
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? {
                                            equals: item.investorProfile.email,
                                          }
                                        : undefined,
                                  },
                                  create: {
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? item.investorProfile.name
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? item.investorProfile.email
                                        : undefined,
                                    type:
                                      item.investorProfile.type !== undefined
                                        ? item.investorProfile.type
                                        : undefined,
                                    kycStatus:
                                      item.investorProfile.kycStatus !==
                                      undefined
                                        ? item.investorProfile.kycStatus
                                        : undefined,
                                    walletAddress:
                                      item.investorProfile.walletAddress !==
                                      undefined
                                        ? item.investorProfile.walletAddress
                                        : undefined,
                                    deletedAt:
                                      item.investorProfile.deletedAt !==
                                      undefined
                                        ? item.investorProfile.deletedAt
                                        : undefined,
                                    investments: item.investorProfile
                                      .investments
                                      ? Array.isArray(
                                          item.investorProfile.investments
                                        ) &&
                                        item.investorProfile.investments
                                          .length > 0 &&
                                        item.investorProfile.investments.every(
                                          (item: any) =>
                                            typeof item === 'object' &&
                                            'id' in item &&
                                            Object.keys(item).length === 1
                                        )
                                        ? {
                                            connect:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  id: item.id,
                                                })
                                              ),
                                          }
                                        : {
                                            connectOrCreate:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  where: {
                                                    id:
                                                      item.id !== undefined
                                                        ? item.id
                                                        : undefined,
                                                    fundId:
                                                      item.fundId !== undefined
                                                        ? {
                                                            equals: item.fundId,
                                                          }
                                                        : undefined,
                                                    investorId:
                                                      item.investorId !==
                                                      undefined
                                                        ? {
                                                            equals:
                                                              item.investorId,
                                                          }
                                                        : undefined,
                                                  },
                                                  create: {
                                                    units:
                                                      item.units !== undefined
                                                        ? item.units
                                                        : undefined,
                                                    investedAt:
                                                      item.investedAt !==
                                                      undefined
                                                        ? item.investedAt
                                                        : undefined,
                                                    status:
                                                      item.status !== undefined
                                                        ? item.status
                                                        : undefined,
                                                  },
                                                })
                                              ),
                                          }
                                      : undefined,
                                  },
                                },
                              }
                          : undefined,
                        linkedProviders: item.linkedProviders
                          ? Array.isArray(item.linkedProviders) &&
                            item.linkedProviders.length > 0 &&
                            item.linkedProviders.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.linkedProviders.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.linkedProviders.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              equals: item.providerAccountId,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              equals: item.email,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      provider:
                                        item.provider !== undefined
                                          ? item.provider
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      accessToken:
                                        item.accessToken !== undefined
                                          ? item.accessToken
                                          : undefined,
                                      refreshToken:
                                        item.refreshToken !== undefined
                                          ? item.refreshToken
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? item.expiresAt
                                          : undefined,
                                      linkedAt:
                                        item.linkedAt !== undefined
                                          ? item.linkedAt
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        accountLinkingRequests: item.accountLinkingRequests
                          ? Array.isArray(item.accountLinkingRequests) &&
                            item.accountLinkingRequests.length > 0 &&
                            item.accountLinkingRequests.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.accountLinkingRequests.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate:
                                  item.accountLinkingRequests.map(
                                    (item: any) => ({
                                      where: {
                                        id:
                                          item.id !== undefined
                                            ? item.id
                                            : undefined,
                                        userId:
                                          item.userId !== undefined
                                            ? {
                                                equals: item.userId,
                                              }
                                            : undefined,
                                        email:
                                          item.email !== undefined
                                            ? {
                                                equals: item.email,
                                              }
                                            : undefined,
                                        providerAccountId:
                                          item.providerAccountId !== undefined
                                            ? {
                                                equals: item.providerAccountId,
                                              }
                                            : undefined,
                                      },
                                      create: {
                                        email:
                                          item.email !== undefined
                                            ? item.email
                                            : undefined,
                                        provider:
                                          item.provider !== undefined
                                            ? item.provider
                                            : undefined,
                                        providerAccountId:
                                          item.providerAccountId !== undefined
                                            ? item.providerAccountId
                                            : undefined,
                                        status:
                                          item.status !== undefined
                                            ? item.status
                                            : undefined,
                                        verificationToken:
                                          item.verificationToken !== undefined
                                            ? item.verificationToken
                                            : undefined,
                                        userAgent:
                                          item.userAgent !== undefined
                                            ? item.userAgent
                                            : undefined,
                                        ipAddress:
                                          item.ipAddress !== undefined
                                            ? item.ipAddress
                                            : undefined,
                                        expiresAt:
                                          item.expiresAt !== undefined
                                            ? item.expiresAt
                                            : undefined,
                                        verifiedAt:
                                          item.verifiedAt !== undefined
                                            ? item.verifiedAt
                                            : undefined,
                                        approvedAt:
                                          item.approvedAt !== undefined
                                            ? item.approvedAt
                                            : undefined,
                                        rejectedAt:
                                          item.rejectedAt !== undefined
                                            ? item.rejectedAt
                                            : undefined,
                                      },
                                    })
                                  ),
                              }
                          : undefined,
                        reviewedWaitlistEntries: item.reviewedWaitlistEntries
                          ? Array.isArray(item.reviewedWaitlistEntries) &&
                            item.reviewedWaitlistEntries.length > 0 &&
                            item.reviewedWaitlistEntries.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.reviewedWaitlistEntries.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate:
                                  item.reviewedWaitlistEntries.map(
                                    (item: any) => ({
                                      where: {
                                        id:
                                          item.id !== undefined
                                            ? item.id
                                            : undefined,
                                        email:
                                          item.email !== undefined
                                            ? item.email
                                            : undefined,
                                      },
                                      create: {
                                        email:
                                          item.email !== undefined
                                            ? item.email
                                            : undefined,
                                        fullName:
                                          item.fullName !== undefined
                                            ? item.fullName
                                            : undefined,
                                        companyName:
                                          item.companyName !== undefined
                                            ? item.companyName
                                            : undefined,
                                        companyWebsite:
                                          item.companyWebsite !== undefined
                                            ? item.companyWebsite
                                            : undefined,
                                        jobRole:
                                          item.jobRole !== undefined
                                            ? item.jobRole
                                            : undefined,
                                        professionalInvestorConfirmed:
                                          item.professionalInvestorConfirmed !==
                                          undefined
                                            ? item.professionalInvestorConfirmed
                                            : undefined,
                                        status:
                                          item.status !== undefined
                                            ? item.status
                                            : undefined,
                                        queuePosition:
                                          item.queuePosition !== undefined
                                            ? item.queuePosition
                                            : undefined,
                                        reviewedAt:
                                          item.reviewedAt !== undefined
                                            ? item.reviewedAt
                                            : undefined,
                                        inviteToken: item.inviteToken
                                          ? typeof item.inviteToken ===
                                              'object' &&
                                            Object.keys(item.inviteToken)
                                              .length === 1 &&
                                            Object.keys(item.inviteToken)[0] ===
                                              'id'
                                            ? {
                                                connect: {
                                                  id: item.inviteToken.id,
                                                },
                                              }
                                            : {
                                                connectOrCreate: {
                                                  where: {
                                                    id:
                                                      item.inviteToken.id !==
                                                      undefined
                                                        ? item.inviteToken.id
                                                        : undefined,
                                                    waitlistEntryId:
                                                      item.inviteToken
                                                        .waitlistEntryId !==
                                                      undefined
                                                        ? item.inviteToken
                                                            .waitlistEntryId
                                                        : undefined,
                                                    email:
                                                      item.inviteToken.email !==
                                                      undefined
                                                        ? {
                                                            equals:
                                                              item.inviteToken
                                                                .email,
                                                          }
                                                        : undefined,
                                                  },
                                                  create: {
                                                    token:
                                                      item.inviteToken.token !==
                                                      undefined
                                                        ? item.inviteToken.token
                                                        : undefined,
                                                    email:
                                                      item.inviteToken.email !==
                                                      undefined
                                                        ? item.inviteToken.email
                                                        : undefined,
                                                    used:
                                                      item.inviteToken.used !==
                                                      undefined
                                                        ? item.inviteToken.used
                                                        : undefined,
                                                    usedAt:
                                                      item.inviteToken
                                                        .usedAt !== undefined
                                                        ? item.inviteToken
                                                            .usedAt
                                                        : undefined,
                                                    expiresAt:
                                                      item.inviteToken
                                                        .expiresAt !== undefined
                                                        ? item.inviteToken
                                                            .expiresAt
                                                        : undefined,
                                                  },
                                                },
                                              }
                                          : undefined,
                                      },
                                    })
                                  ),
                              }
                          : undefined,
                        dashboardLayouts: item.dashboardLayouts
                          ? Array.isArray(item.dashboardLayouts) &&
                            item.dashboardLayouts.length > 0 &&
                            item.dashboardLayouts.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.dashboardLayouts.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.dashboardLayouts.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      layout:
                                        item.layout !== undefined
                                          ? item.layout
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        llmConfiguration: item.llmConfiguration
                          ? typeof item.llmConfiguration === 'object' &&
                            Object.keys(item.llmConfiguration).length === 1 &&
                            Object.keys(item.llmConfiguration)[0] === 'id'
                            ? {
                                connect: {
                                  id: item.llmConfiguration.id,
                                },
                              }
                            : {
                                connectOrCreate: {
                                  where: {
                                    id:
                                      item.llmConfiguration.id !== undefined
                                        ? item.llmConfiguration.id
                                        : undefined,
                                    userId:
                                      item.llmConfiguration.userId !== undefined
                                        ? item.llmConfiguration.userId
                                        : undefined,
                                  },
                                  create: {
                                    defaultProvider:
                                      item.llmConfiguration.defaultProvider !==
                                      undefined
                                        ? item.llmConfiguration.defaultProvider
                                        : undefined,
                                    miniProvider:
                                      item.llmConfiguration.miniProvider !==
                                      undefined
                                        ? item.llmConfiguration.miniProvider
                                        : undefined,
                                    normalProvider:
                                      item.llmConfiguration.normalProvider !==
                                      undefined
                                        ? item.llmConfiguration.normalProvider
                                        : undefined,
                                    advancedProvider:
                                      item.llmConfiguration.advancedProvider !==
                                      undefined
                                        ? item.llmConfiguration.advancedProvider
                                        : undefined,
                                    miniModel:
                                      item.llmConfiguration.miniModel !==
                                      undefined
                                        ? item.llmConfiguration.miniModel
                                        : undefined,
                                    normalModel:
                                      item.llmConfiguration.normalModel !==
                                      undefined
                                        ? item.llmConfiguration.normalModel
                                        : undefined,
                                    advancedModel:
                                      item.llmConfiguration.advancedModel !==
                                      undefined
                                        ? item.llmConfiguration.advancedModel
                                        : undefined,
                                    openaiApiKey:
                                      item.llmConfiguration.openaiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.openaiApiKey
                                        : undefined,
                                    anthropicApiKey:
                                      item.llmConfiguration.anthropicApiKey !==
                                      undefined
                                        ? item.llmConfiguration.anthropicApiKey
                                        : undefined,
                                    deepseekApiKey:
                                      item.llmConfiguration.deepseekApiKey !==
                                      undefined
                                        ? item.llmConfiguration.deepseekApiKey
                                        : undefined,
                                    kimiApiKey:
                                      item.llmConfiguration.kimiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.kimiApiKey
                                        : undefined,
                                    qwenApiKey:
                                      item.llmConfiguration.qwenApiKey !==
                                      undefined
                                        ? item.llmConfiguration.qwenApiKey
                                        : undefined,
                                    xaiApiKey:
                                      item.llmConfiguration.xaiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.xaiApiKey
                                        : undefined,
                                    geminiApiKey:
                                      item.llmConfiguration.geminiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.geminiApiKey
                                        : undefined,
                                  },
                                },
                              }
                          : undefined,
                      },
                    })),
                  }
              : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_ONE_CUSTOMER,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createOneCustomer) {
          return response.data.createOneCustomer;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn('Database connection error, retrying...', {
            retryCount,
            delayMs: delay,
          });
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Create multiple Customer records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Customer objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(
    props: CustomerType[],
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const CREATE_MANY_CUSTOMER = gql`
          mutation createManyCustomer($data: [CustomerCreateManyInput!]!) {
            createManyCustomer(data: $data) {
              count
            }
          }
        `;

        const variables = {
          data: props.map((prop) => ({
            authUserId:
              prop.authUserId !== undefined ? prop.authUserId : undefined,
            name: prop.name !== undefined ? prop.name : undefined,
            plan: prop.plan !== undefined ? prop.plan : undefined,
            stripeCustomerId:
              prop.stripeCustomerId !== undefined
                ? prop.stripeCustomerId
                : undefined,
            stripeSubscriptionId:
              prop.stripeSubscriptionId !== undefined
                ? prop.stripeSubscriptionId
                : undefined,
            stripePriceId:
              prop.stripePriceId !== undefined ? prop.stripePriceId : undefined,
            stripeCurrentPeriodEnd:
              prop.stripeCurrentPeriodEnd !== undefined
                ? prop.stripeCurrentPeriodEnd
                : undefined,
            jurisdiction:
              prop.jurisdiction !== undefined ? prop.jurisdiction : undefined,
            riskProfile:
              prop.riskProfile !== undefined ? prop.riskProfile : undefined,
            amlStatus:
              prop.amlStatus !== undefined ? prop.amlStatus : undefined,
            lastKycUpdate:
              prop.lastKycUpdate !== undefined ? prop.lastKycUpdate : undefined,
          })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_CUSTOMER,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyCustomer) {
          return response.data.createManyCustomer;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn('Database connection error, retrying...', {
            retryCount,
            delayMs: delay,
          });
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update a single Customer record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Customer or null.
   */
  async update(
    props: CustomerType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<CustomerType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_ONE_CUSTOMER = gql`
          mutation updateOneCustomer($data: CustomerUpdateInput!, $where: CustomerWhereUniqueInput!) {
            updateOneCustomer(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
            stripeCustomerId:
              props.stripeCustomerId !== undefined
                ? props.stripeCustomerId
                : undefined,
            stripeSubscriptionId:
              props.stripeSubscriptionId !== undefined
                ? props.stripeSubscriptionId
                : undefined,
            authUserId:
              props.authUserId !== undefined
                ? {
                    equals: props.authUserId,
                  }
                : undefined,
            name:
              props.name !== undefined
                ? {
                    equals: props.name,
                  }
                : undefined,
            stripePriceId:
              props.stripePriceId !== undefined
                ? {
                    equals: props.stripePriceId,
                  }
                : undefined,
          },
          data: {
            authUserId:
              props.authUserId !== undefined
                ? {
                    set: props.authUserId,
                  }
                : undefined,
            name:
              props.name !== undefined
                ? {
                    set: props.name,
                  }
                : undefined,
            plan:
              props.plan !== undefined
                ? {
                    set: props.plan,
                  }
                : undefined,
            stripeCustomerId:
              props.stripeCustomerId !== undefined
                ? {
                    set: props.stripeCustomerId,
                  }
                : undefined,
            stripeSubscriptionId:
              props.stripeSubscriptionId !== undefined
                ? {
                    set: props.stripeSubscriptionId,
                  }
                : undefined,
            stripePriceId:
              props.stripePriceId !== undefined
                ? {
                    set: props.stripePriceId,
                  }
                : undefined,
            stripeCurrentPeriodEnd:
              props.stripeCurrentPeriodEnd !== undefined
                ? {
                    set: props.stripeCurrentPeriodEnd,
                  }
                : undefined,
            jurisdiction:
              props.jurisdiction !== undefined
                ? {
                    set: props.jurisdiction,
                  }
                : undefined,
            riskProfile:
              props.riskProfile !== undefined
                ? {
                    set: props.riskProfile,
                  }
                : undefined,
            amlStatus:
              props.amlStatus !== undefined
                ? {
                    set: props.amlStatus,
                  }
                : undefined,
            lastKycUpdate:
              props.lastKycUpdate !== undefined
                ? {
                    set: props.lastKycUpdate,
                  }
                : undefined,
            createdAt:
              props.createdAt !== undefined
                ? {
                    set: props.createdAt,
                  }
                : undefined,
            updatedAt:
              props.updatedAt !== undefined
                ? {
                    set: props.updatedAt,
                  }
                : undefined,
            users: props.users
              ? Array.isArray(props.users) &&
                props.users.length > 0 &&
                props.users.every(
                  (item: any) =>
                    typeof item === 'object' &&
                    ('id' in item || 'symbol' in item) &&
                    Object.keys(item).length === 1
                )
                ? {
                    connect: props.users.map((item: any) => ({
                      id: item.id,
                    })),
                  }
                : {
                    upsert: props.users.map((item: any) => ({
                      where: {
                        id: item.id !== undefined ? item.id : undefined,
                        email:
                          item.email !== undefined ? item.email : undefined,
                        name:
                          item.name !== undefined
                            ? {
                                equals: item.name,
                              }
                            : undefined,
                        customerId:
                          item.customerId !== undefined
                            ? {
                                equals: item.customerId,
                              }
                            : undefined,
                      },
                      update: {
                        id:
                          item.id !== undefined
                            ? {
                                set: item.id,
                              }
                            : undefined,
                        name:
                          item.name !== undefined
                            ? {
                                set: item.name,
                              }
                            : undefined,
                        email:
                          item.email !== undefined
                            ? {
                                set: item.email,
                              }
                            : undefined,
                        emailVerified:
                          item.emailVerified !== undefined
                            ? {
                                set: item.emailVerified,
                              }
                            : undefined,
                        image:
                          item.image !== undefined
                            ? {
                                set: item.image,
                              }
                            : undefined,
                        deletedAt:
                          item.deletedAt !== undefined
                            ? {
                                set: item.deletedAt,
                              }
                            : undefined,
                        role:
                          item.role !== undefined
                            ? {
                                set: item.role,
                              }
                            : undefined,
                        bio:
                          item.bio !== undefined
                            ? {
                                set: item.bio,
                              }
                            : undefined,
                        jobTitle:
                          item.jobTitle !== undefined
                            ? {
                                set: item.jobTitle,
                              }
                            : undefined,
                        plan:
                          item.plan !== undefined
                            ? {
                                set: item.plan,
                              }
                            : undefined,
                        openaiAPIKey:
                          item.openaiAPIKey !== undefined
                            ? {
                                set: item.openaiAPIKey,
                              }
                            : undefined,
                        openaiModel:
                          item.openaiModel !== undefined
                            ? {
                                set: item.openaiModel,
                              }
                            : undefined,
                        passwordHash:
                          item.passwordHash !== undefined
                            ? {
                                set: item.passwordHash,
                              }
                            : undefined,
                        avatarUrl:
                          item.avatarUrl !== undefined
                            ? {
                                set: item.avatarUrl,
                              }
                            : undefined,
                        onboardingComplete:
                          item.onboardingComplete !== undefined
                            ? {
                                set: item.onboardingComplete,
                              }
                            : undefined,
                        signupCategory:
                          item.signupCategory !== undefined
                            ? {
                                set: item.signupCategory,
                              }
                            : undefined,
                        accounts: item.accounts
                          ? Array.isArray(item.accounts) &&
                            item.accounts.length > 0 &&
                            item.accounts.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.accounts.map((item: any) => ({
                                  id: item.id,
                                })),
                              }
                            : {
                                upsert: item.accounts.map((item: any) => ({
                                  where: {
                                    id:
                                      item.id !== undefined
                                        ? item.id
                                        : undefined,
                                    providerAccountId:
                                      item.providerAccountId !== undefined
                                        ? item.providerAccountId
                                        : undefined,
                                    userId:
                                      item.userId !== undefined
                                        ? {
                                            equals: item.userId,
                                          }
                                        : undefined,
                                  },
                                  update: {
                                    id:
                                      item.id !== undefined
                                        ? {
                                            set: item.id,
                                          }
                                        : undefined,
                                    type:
                                      item.type !== undefined
                                        ? {
                                            set: item.type,
                                          }
                                        : undefined,
                                    provider:
                                      item.provider !== undefined
                                        ? {
                                            set: item.provider,
                                          }
                                        : undefined,
                                    providerAccountId:
                                      item.providerAccountId !== undefined
                                        ? {
                                            set: item.providerAccountId,
                                          }
                                        : undefined,
                                    refresh_token:
                                      item.refresh_token !== undefined
                                        ? {
                                            set: item.refresh_token,
                                          }
                                        : undefined,
                                    access_token:
                                      item.access_token !== undefined
                                        ? {
                                            set: item.access_token,
                                          }
                                        : undefined,
                                    expires_at:
                                      item.expires_at !== undefined
                                        ? {
                                            set: item.expires_at,
                                          }
                                        : undefined,
                                    token_type:
                                      item.token_type !== undefined
                                        ? {
                                            set: item.token_type,
                                          }
                                        : undefined,
                                    scope:
                                      item.scope !== undefined
                                        ? {
                                            set: item.scope,
                                          }
                                        : undefined,
                                    id_token:
                                      item.id_token !== undefined
                                        ? {
                                            set: item.id_token,
                                          }
                                        : undefined,
                                    session_state:
                                      item.session_state !== undefined
                                        ? {
                                            set: item.session_state,
                                          }
                                        : undefined,
                                  },
                                  create: {
                                    type:
                                      item.type !== undefined
                                        ? item.type
                                        : undefined,
                                    provider:
                                      item.provider !== undefined
                                        ? item.provider
                                        : undefined,
                                    providerAccountId:
                                      item.providerAccountId !== undefined
                                        ? item.providerAccountId
                                        : undefined,
                                    refresh_token:
                                      item.refresh_token !== undefined
                                        ? item.refresh_token
                                        : undefined,
                                    access_token:
                                      item.access_token !== undefined
                                        ? item.access_token
                                        : undefined,
                                    expires_at:
                                      item.expires_at !== undefined
                                        ? item.expires_at
                                        : undefined,
                                    token_type:
                                      item.token_type !== undefined
                                        ? item.token_type
                                        : undefined,
                                    scope:
                                      item.scope !== undefined
                                        ? item.scope
                                        : undefined,
                                    id_token:
                                      item.id_token !== undefined
                                        ? item.id_token
                                        : undefined,
                                    session_state:
                                      item.session_state !== undefined
                                        ? item.session_state
                                        : undefined,
                                  },
                                })),
                              }
                          : undefined,
                        sessions: item.sessions
                          ? Array.isArray(item.sessions) &&
                            item.sessions.length > 0 &&
                            item.sessions.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.sessions.map((item: any) => ({
                                  id: item.id,
                                })),
                              }
                            : {
                                upsert: item.sessions.map((item: any) => ({
                                  where: {
                                    id:
                                      item.id !== undefined
                                        ? item.id
                                        : undefined,
                                    userId:
                                      item.userId !== undefined
                                        ? {
                                            equals: item.userId,
                                          }
                                        : undefined,
                                  },
                                  update: {
                                    id:
                                      item.id !== undefined
                                        ? {
                                            set: item.id,
                                          }
                                        : undefined,
                                    sessionToken:
                                      item.sessionToken !== undefined
                                        ? {
                                            set: item.sessionToken,
                                          }
                                        : undefined,
                                    expires:
                                      item.expires !== undefined
                                        ? {
                                            set: item.expires,
                                          }
                                        : undefined,
                                  },
                                  create: {
                                    sessionToken:
                                      item.sessionToken !== undefined
                                        ? item.sessionToken
                                        : undefined,
                                    expires:
                                      item.expires !== undefined
                                        ? item.expires
                                        : undefined,
                                  },
                                })),
                              }
                          : undefined,
                        authenticators: item.authenticators
                          ? Array.isArray(item.authenticators) &&
                            item.authenticators.length > 0 &&
                            item.authenticators.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.authenticators.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.authenticators.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      credentialID:
                                        item.credentialID !== undefined
                                          ? {
                                              set: item.credentialID,
                                            }
                                          : undefined,
                                      publicKey:
                                        item.publicKey !== undefined
                                          ? {
                                              set: item.publicKey,
                                            }
                                          : undefined,
                                      counter:
                                        item.counter !== undefined
                                          ? {
                                              set: item.counter,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      credentialID:
                                        item.credentialID !== undefined
                                          ? item.credentialID
                                          : undefined,
                                      publicKey:
                                        item.publicKey !== undefined
                                          ? item.publicKey
                                          : undefined,
                                      counter:
                                        item.counter !== undefined
                                          ? item.counter
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        orgMemberships: item.orgMemberships
                          ? Array.isArray(item.orgMemberships) &&
                            item.orgMemberships.length > 0 &&
                            item.orgMemberships.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.orgMemberships.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.orgMemberships.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      organizationId:
                                        item.organizationId !== undefined
                                          ? {
                                              equals: item.organizationId,
                                            }
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      role:
                                        item.role !== undefined
                                          ? {
                                              set: item.role,
                                            }
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      organization: item.organization
                                        ? typeof item.organization ===
                                            'object' &&
                                          Object.keys(item.organization)
                                            .length === 1 &&
                                          (Object.keys(item.organization)[0] ===
                                            'id' ||
                                            Object.keys(
                                              item.organization
                                            )[0] === 'symbol')
                                          ? {
                                              connect: {
                                                id: item.organization.id,
                                              },
                                            }
                                          : {
                                              upsert: {
                                                where: {
                                                  id:
                                                    item.organization.id !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .id,
                                                        }
                                                      : undefined,
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .slug,
                                                        }
                                                      : undefined,
                                                },
                                                update: {
                                                  id:
                                                    item.organization.id !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .id,
                                                        }
                                                      : undefined,
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .slug,
                                                        }
                                                      : undefined,
                                                  logoUrl:
                                                    item.organization
                                                      .logoUrl !== undefined
                                                      ? {
                                                          set: item.organization
                                                            .logoUrl,
                                                        }
                                                      : undefined,
                                                  website:
                                                    item.organization
                                                      .website !== undefined
                                                      ? {
                                                          set: item.organization
                                                            .website,
                                                        }
                                                      : undefined,
                                                  businessType:
                                                    item.organization
                                                      .businessType !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .businessType,
                                                        }
                                                      : undefined,
                                                  jurisdiction:
                                                    item.organization
                                                      .jurisdiction !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .jurisdiction,
                                                        }
                                                      : undefined,
                                                  regulatoryStatus:
                                                    item.organization
                                                      .regulatoryStatus !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .regulatoryStatus,
                                                        }
                                                      : undefined,
                                                  description:
                                                    item.organization
                                                      .description !== undefined
                                                      ? {
                                                          set: item.organization
                                                            .description,
                                                        }
                                                      : undefined,
                                                  tradingDefaults:
                                                    item.organization
                                                      .tradingDefaults !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .tradingDefaults,
                                                        }
                                                      : undefined,
                                                  llmDefaults:
                                                    item.organization
                                                      .llmDefaults !== undefined
                                                      ? {
                                                          set: item.organization
                                                            .llmDefaults,
                                                        }
                                                      : undefined,
                                                  deletedAt:
                                                    item.organization
                                                      .deletedAt !== undefined
                                                      ? {
                                                          set: item.organization
                                                            .deletedAt,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? item.organization.name
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  logoUrl:
                                                    item.organization
                                                      .logoUrl !== undefined
                                                      ? item.organization
                                                          .logoUrl
                                                      : undefined,
                                                  website:
                                                    item.organization
                                                      .website !== undefined
                                                      ? item.organization
                                                          .website
                                                      : undefined,
                                                  businessType:
                                                    item.organization
                                                      .businessType !==
                                                    undefined
                                                      ? item.organization
                                                          .businessType
                                                      : undefined,
                                                  jurisdiction:
                                                    item.organization
                                                      .jurisdiction !==
                                                    undefined
                                                      ? item.organization
                                                          .jurisdiction
                                                      : undefined,
                                                  regulatoryStatus:
                                                    item.organization
                                                      .regulatoryStatus !==
                                                    undefined
                                                      ? item.organization
                                                          .regulatoryStatus
                                                      : undefined,
                                                  description:
                                                    item.organization
                                                      .description !== undefined
                                                      ? item.organization
                                                          .description
                                                      : undefined,
                                                  tradingDefaults:
                                                    item.organization
                                                      .tradingDefaults !==
                                                    undefined
                                                      ? item.organization
                                                          .tradingDefaults
                                                      : undefined,
                                                  llmDefaults:
                                                    item.organization
                                                      .llmDefaults !== undefined
                                                      ? item.organization
                                                          .llmDefaults
                                                      : undefined,
                                                  deletedAt:
                                                    item.organization
                                                      .deletedAt !== undefined
                                                      ? item.organization
                                                          .deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      organization: item.organization
                                        ? typeof item.organization ===
                                            'object' &&
                                          Object.keys(item.organization)
                                            .length === 1 &&
                                          Object.keys(item.organization)[0] ===
                                            'id'
                                          ? {
                                              connect: {
                                                id: item.organization.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.organization.id !==
                                                    undefined
                                                      ? item.organization.id
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .name,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? item.organization.name
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  logoUrl:
                                                    item.organization
                                                      .logoUrl !== undefined
                                                      ? item.organization
                                                          .logoUrl
                                                      : undefined,
                                                  website:
                                                    item.organization
                                                      .website !== undefined
                                                      ? item.organization
                                                          .website
                                                      : undefined,
                                                  businessType:
                                                    item.organization
                                                      .businessType !==
                                                    undefined
                                                      ? item.organization
                                                          .businessType
                                                      : undefined,
                                                  jurisdiction:
                                                    item.organization
                                                      .jurisdiction !==
                                                    undefined
                                                      ? item.organization
                                                          .jurisdiction
                                                      : undefined,
                                                  regulatoryStatus:
                                                    item.organization
                                                      .regulatoryStatus !==
                                                    undefined
                                                      ? item.organization
                                                          .regulatoryStatus
                                                      : undefined,
                                                  description:
                                                    item.organization
                                                      .description !== undefined
                                                      ? item.organization
                                                          .description
                                                      : undefined,
                                                  tradingDefaults:
                                                    item.organization
                                                      .tradingDefaults !==
                                                    undefined
                                                      ? item.organization
                                                          .tradingDefaults
                                                      : undefined,
                                                  llmDefaults:
                                                    item.organization
                                                      .llmDefaults !== undefined
                                                      ? item.organization
                                                          .llmDefaults
                                                      : undefined,
                                                  deletedAt:
                                                    item.organization
                                                      .deletedAt !== undefined
                                                      ? item.organization
                                                          .deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        fundAssignments: item.fundAssignments
                          ? Array.isArray(item.fundAssignments) &&
                            item.fundAssignments.length > 0 &&
                            item.fundAssignments.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.fundAssignments.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.fundAssignments.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      fundId:
                                        item.fundId !== undefined
                                          ? {
                                              equals: item.fundId,
                                            }
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      role:
                                        item.role !== undefined
                                          ? {
                                              set: item.role,
                                            }
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      fund: item.fund
                                        ? typeof item.fund === 'object' &&
                                          Object.keys(item.fund).length === 1 &&
                                          (Object.keys(item.fund)[0] === 'id' ||
                                            Object.keys(item.fund)[0] ===
                                              'symbol')
                                          ? {
                                              connect: {
                                                id: item.fund.id,
                                              },
                                            }
                                          : {
                                              upsert: {
                                                where: {
                                                  id:
                                                    item.fund.id !== undefined
                                                      ? {
                                                          equals: item.fund.id,
                                                        }
                                                      : undefined,
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.slug,
                                                        }
                                                      : undefined,
                                                  organizationId:
                                                    item.fund.organizationId !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.fund
                                                              .organizationId,
                                                        }
                                                      : undefined,
                                                },
                                                update: {
                                                  id:
                                                    item.fund.id !== undefined
                                                      ? {
                                                          set: item.fund.id,
                                                        }
                                                      : undefined,
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? {
                                                          set: item.fund.name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? {
                                                          set: item.fund.slug,
                                                        }
                                                      : undefined,
                                                  description:
                                                    item.fund.description !==
                                                    undefined
                                                      ? {
                                                          set: item.fund
                                                            .description,
                                                        }
                                                      : undefined,
                                                  status:
                                                    item.fund.status !==
                                                    undefined
                                                      ? {
                                                          set: item.fund.status,
                                                        }
                                                      : undefined,
                                                  tradingOverrides:
                                                    item.fund
                                                      .tradingOverrides !==
                                                    undefined
                                                      ? {
                                                          set: item.fund
                                                            .tradingOverrides,
                                                        }
                                                      : undefined,
                                                  llmOverrides:
                                                    item.fund.llmOverrides !==
                                                    undefined
                                                      ? {
                                                          set: item.fund
                                                            .llmOverrides,
                                                        }
                                                      : undefined,
                                                  policyOverlays:
                                                    item.fund.policyOverlays !==
                                                    undefined
                                                      ? {
                                                          set: item.fund
                                                            .policyOverlays,
                                                        }
                                                      : undefined,
                                                  deletedAt:
                                                    item.fund.deletedAt !==
                                                    undefined
                                                      ? {
                                                          set: item.fund
                                                            .deletedAt,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? item.fund.name
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? item.fund.slug
                                                      : undefined,
                                                  description:
                                                    item.fund.description !==
                                                    undefined
                                                      ? item.fund.description
                                                      : undefined,
                                                  status:
                                                    item.fund.status !==
                                                    undefined
                                                      ? item.fund.status
                                                      : undefined,
                                                  tradingOverrides:
                                                    item.fund
                                                      .tradingOverrides !==
                                                    undefined
                                                      ? item.fund
                                                          .tradingOverrides
                                                      : undefined,
                                                  llmOverrides:
                                                    item.fund.llmOverrides !==
                                                    undefined
                                                      ? item.fund.llmOverrides
                                                      : undefined,
                                                  policyOverlays:
                                                    item.fund.policyOverlays !==
                                                    undefined
                                                      ? item.fund.policyOverlays
                                                      : undefined,
                                                  deletedAt:
                                                    item.fund.deletedAt !==
                                                    undefined
                                                      ? item.fund.deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      fund: item.fund
                                        ? typeof item.fund === 'object' &&
                                          Object.keys(item.fund).length === 1 &&
                                          Object.keys(item.fund)[0] === 'id'
                                          ? {
                                              connect: {
                                                id: item.fund.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.fund.id !== undefined
                                                      ? item.fund.id
                                                      : undefined,
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.slug,
                                                        }
                                                      : undefined,
                                                  organizationId:
                                                    item.fund.organizationId !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.fund
                                                              .organizationId,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? item.fund.name
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? item.fund.slug
                                                      : undefined,
                                                  description:
                                                    item.fund.description !==
                                                    undefined
                                                      ? item.fund.description
                                                      : undefined,
                                                  status:
                                                    item.fund.status !==
                                                    undefined
                                                      ? item.fund.status
                                                      : undefined,
                                                  tradingOverrides:
                                                    item.fund
                                                      .tradingOverrides !==
                                                    undefined
                                                      ? item.fund
                                                          .tradingOverrides
                                                      : undefined,
                                                  llmOverrides:
                                                    item.fund.llmOverrides !==
                                                    undefined
                                                      ? item.fund.llmOverrides
                                                      : undefined,
                                                  policyOverlays:
                                                    item.fund.policyOverlays !==
                                                    undefined
                                                      ? item.fund.policyOverlays
                                                      : undefined,
                                                  deletedAt:
                                                    item.fund.deletedAt !==
                                                    undefined
                                                      ? item.fund.deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        investorProfile: item.investorProfile
                          ? typeof item.investorProfile === 'object' &&
                            Object.keys(item.investorProfile).length === 1 &&
                            (Object.keys(item.investorProfile)[0] === 'id' ||
                              Object.keys(item.investorProfile)[0] === 'symbol')
                            ? {
                                connect: {
                                  id: item.investorProfile.id,
                                },
                              }
                            : {
                                upsert: {
                                  where: {
                                    id:
                                      item.investorProfile.id !== undefined
                                        ? {
                                            equals: item.investorProfile.id,
                                          }
                                        : undefined,
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? {
                                            equals: item.investorProfile.name,
                                          }
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? {
                                            equals: item.investorProfile.email,
                                          }
                                        : undefined,
                                    userId:
                                      item.investorProfile.userId !== undefined
                                        ? {
                                            equals: item.investorProfile.userId,
                                          }
                                        : undefined,
                                  },
                                  update: {
                                    id:
                                      item.investorProfile.id !== undefined
                                        ? {
                                            set: item.investorProfile.id,
                                          }
                                        : undefined,
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? {
                                            set: item.investorProfile.name,
                                          }
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? {
                                            set: item.investorProfile.email,
                                          }
                                        : undefined,
                                    type:
                                      item.investorProfile.type !== undefined
                                        ? {
                                            set: item.investorProfile.type,
                                          }
                                        : undefined,
                                    kycStatus:
                                      item.investorProfile.kycStatus !==
                                      undefined
                                        ? {
                                            set: item.investorProfile.kycStatus,
                                          }
                                        : undefined,
                                    walletAddress:
                                      item.investorProfile.walletAddress !==
                                      undefined
                                        ? {
                                            set: item.investorProfile
                                              .walletAddress,
                                          }
                                        : undefined,
                                    deletedAt:
                                      item.investorProfile.deletedAt !==
                                      undefined
                                        ? {
                                            set: item.investorProfile.deletedAt,
                                          }
                                        : undefined,
                                    investments: item.investorProfile
                                      .investments
                                      ? Array.isArray(
                                          item.investorProfile.investments
                                        ) &&
                                        item.investorProfile.investments
                                          .length > 0 &&
                                        item.investorProfile.investments.every(
                                          (item: any) =>
                                            typeof item === 'object' &&
                                            ('id' in item ||
                                              'symbol' in item) &&
                                            Object.keys(item).length === 1
                                        )
                                        ? {
                                            connect:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  id: item.id,
                                                })
                                              ),
                                          }
                                        : {
                                            upsert:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  where: {
                                                    id:
                                                      item.id !== undefined
                                                        ? item.id
                                                        : undefined,
                                                    fundId:
                                                      item.fundId !== undefined
                                                        ? {
                                                            equals: item.fundId,
                                                          }
                                                        : undefined,
                                                    investorId:
                                                      item.investorId !==
                                                      undefined
                                                        ? {
                                                            equals:
                                                              item.investorId,
                                                          }
                                                        : undefined,
                                                  },
                                                  update: {
                                                    id:
                                                      item.id !== undefined
                                                        ? {
                                                            set: item.id,
                                                          }
                                                        : undefined,
                                                    units:
                                                      item.units !== undefined
                                                        ? {
                                                            set: item.units,
                                                          }
                                                        : undefined,
                                                    investedAt:
                                                      item.investedAt !==
                                                      undefined
                                                        ? {
                                                            set: item.investedAt,
                                                          }
                                                        : undefined,
                                                    status:
                                                      item.status !== undefined
                                                        ? {
                                                            set: item.status,
                                                          }
                                                        : undefined,
                                                  },
                                                  create: {
                                                    units:
                                                      item.units !== undefined
                                                        ? item.units
                                                        : undefined,
                                                    investedAt:
                                                      item.investedAt !==
                                                      undefined
                                                        ? item.investedAt
                                                        : undefined,
                                                    status:
                                                      item.status !== undefined
                                                        ? item.status
                                                        : undefined,
                                                  },
                                                })
                                              ),
                                          }
                                      : undefined,
                                  },
                                  create: {
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? item.investorProfile.name
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? item.investorProfile.email
                                        : undefined,
                                    type:
                                      item.investorProfile.type !== undefined
                                        ? item.investorProfile.type
                                        : undefined,
                                    kycStatus:
                                      item.investorProfile.kycStatus !==
                                      undefined
                                        ? item.investorProfile.kycStatus
                                        : undefined,
                                    walletAddress:
                                      item.investorProfile.walletAddress !==
                                      undefined
                                        ? item.investorProfile.walletAddress
                                        : undefined,
                                    deletedAt:
                                      item.investorProfile.deletedAt !==
                                      undefined
                                        ? item.investorProfile.deletedAt
                                        : undefined,
                                    investments: item.investorProfile
                                      .investments
                                      ? Array.isArray(
                                          item.investorProfile.investments
                                        ) &&
                                        item.investorProfile.investments
                                          .length > 0 &&
                                        item.investorProfile.investments.every(
                                          (item: any) =>
                                            typeof item === 'object' &&
                                            'id' in item &&
                                            Object.keys(item).length === 1
                                        )
                                        ? {
                                            connect:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  id: item.id,
                                                })
                                              ),
                                          }
                                        : {
                                            connectOrCreate:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  where: {
                                                    id:
                                                      item.id !== undefined
                                                        ? item.id
                                                        : undefined,
                                                    fundId:
                                                      item.fundId !== undefined
                                                        ? {
                                                            equals: item.fundId,
                                                          }
                                                        : undefined,
                                                    investorId:
                                                      item.investorId !==
                                                      undefined
                                                        ? {
                                                            equals:
                                                              item.investorId,
                                                          }
                                                        : undefined,
                                                  },
                                                  create: {
                                                    units:
                                                      item.units !== undefined
                                                        ? item.units
                                                        : undefined,
                                                    investedAt:
                                                      item.investedAt !==
                                                      undefined
                                                        ? item.investedAt
                                                        : undefined,
                                                    status:
                                                      item.status !== undefined
                                                        ? item.status
                                                        : undefined,
                                                  },
                                                })
                                              ),
                                          }
                                      : undefined,
                                  },
                                },
                              }
                          : undefined,
                        linkedProviders: item.linkedProviders
                          ? Array.isArray(item.linkedProviders) &&
                            item.linkedProviders.length > 0 &&
                            item.linkedProviders.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.linkedProviders.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.linkedProviders.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              equals: item.providerAccountId,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              equals: item.email,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      provider:
                                        item.provider !== undefined
                                          ? {
                                              set: item.provider,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              set: item.providerAccountId,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              set: item.email,
                                            }
                                          : undefined,
                                      accessToken:
                                        item.accessToken !== undefined
                                          ? {
                                              set: item.accessToken,
                                            }
                                          : undefined,
                                      refreshToken:
                                        item.refreshToken !== undefined
                                          ? {
                                              set: item.refreshToken,
                                            }
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? {
                                              set: item.expiresAt,
                                            }
                                          : undefined,
                                      linkedAt:
                                        item.linkedAt !== undefined
                                          ? {
                                              set: item.linkedAt,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      provider:
                                        item.provider !== undefined
                                          ? item.provider
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      accessToken:
                                        item.accessToken !== undefined
                                          ? item.accessToken
                                          : undefined,
                                      refreshToken:
                                        item.refreshToken !== undefined
                                          ? item.refreshToken
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? item.expiresAt
                                          : undefined,
                                      linkedAt:
                                        item.linkedAt !== undefined
                                          ? item.linkedAt
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        accountLinkingRequests: item.accountLinkingRequests
                          ? Array.isArray(item.accountLinkingRequests) &&
                            item.accountLinkingRequests.length > 0 &&
                            item.accountLinkingRequests.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.accountLinkingRequests.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.accountLinkingRequests.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              equals: item.email,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              equals: item.providerAccountId,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              set: item.email,
                                            }
                                          : undefined,
                                      provider:
                                        item.provider !== undefined
                                          ? {
                                              set: item.provider,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              set: item.providerAccountId,
                                            }
                                          : undefined,
                                      status:
                                        item.status !== undefined
                                          ? {
                                              set: item.status,
                                            }
                                          : undefined,
                                      verificationToken:
                                        item.verificationToken !== undefined
                                          ? {
                                              set: item.verificationToken,
                                            }
                                          : undefined,
                                      userAgent:
                                        item.userAgent !== undefined
                                          ? {
                                              set: item.userAgent,
                                            }
                                          : undefined,
                                      ipAddress:
                                        item.ipAddress !== undefined
                                          ? {
                                              set: item.ipAddress,
                                            }
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? {
                                              set: item.expiresAt,
                                            }
                                          : undefined,
                                      verifiedAt:
                                        item.verifiedAt !== undefined
                                          ? {
                                              set: item.verifiedAt,
                                            }
                                          : undefined,
                                      approvedAt:
                                        item.approvedAt !== undefined
                                          ? {
                                              set: item.approvedAt,
                                            }
                                          : undefined,
                                      rejectedAt:
                                        item.rejectedAt !== undefined
                                          ? {
                                              set: item.rejectedAt,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      provider:
                                        item.provider !== undefined
                                          ? item.provider
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      status:
                                        item.status !== undefined
                                          ? item.status
                                          : undefined,
                                      verificationToken:
                                        item.verificationToken !== undefined
                                          ? item.verificationToken
                                          : undefined,
                                      userAgent:
                                        item.userAgent !== undefined
                                          ? item.userAgent
                                          : undefined,
                                      ipAddress:
                                        item.ipAddress !== undefined
                                          ? item.ipAddress
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? item.expiresAt
                                          : undefined,
                                      verifiedAt:
                                        item.verifiedAt !== undefined
                                          ? item.verifiedAt
                                          : undefined,
                                      approvedAt:
                                        item.approvedAt !== undefined
                                          ? item.approvedAt
                                          : undefined,
                                      rejectedAt:
                                        item.rejectedAt !== undefined
                                          ? item.rejectedAt
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        reviewedWaitlistEntries: item.reviewedWaitlistEntries
                          ? Array.isArray(item.reviewedWaitlistEntries) &&
                            item.reviewedWaitlistEntries.length > 0 &&
                            item.reviewedWaitlistEntries.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.reviewedWaitlistEntries.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.reviewedWaitlistEntries.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      reviewedById:
                                        item.reviewedById !== undefined
                                          ? {
                                              equals: item.reviewedById,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              set: item.email,
                                            }
                                          : undefined,
                                      fullName:
                                        item.fullName !== undefined
                                          ? {
                                              set: item.fullName,
                                            }
                                          : undefined,
                                      companyName:
                                        item.companyName !== undefined
                                          ? {
                                              set: item.companyName,
                                            }
                                          : undefined,
                                      companyWebsite:
                                        item.companyWebsite !== undefined
                                          ? {
                                              set: item.companyWebsite,
                                            }
                                          : undefined,
                                      jobRole:
                                        item.jobRole !== undefined
                                          ? {
                                              set: item.jobRole,
                                            }
                                          : undefined,
                                      professionalInvestorConfirmed:
                                        item.professionalInvestorConfirmed !==
                                        undefined
                                          ? {
                                              set: item.professionalInvestorConfirmed,
                                            }
                                          : undefined,
                                      status:
                                        item.status !== undefined
                                          ? {
                                              set: item.status,
                                            }
                                          : undefined,
                                      queuePosition:
                                        item.queuePosition !== undefined
                                          ? {
                                              set: item.queuePosition,
                                            }
                                          : undefined,
                                      reviewedAt:
                                        item.reviewedAt !== undefined
                                          ? {
                                              set: item.reviewedAt,
                                            }
                                          : undefined,
                                      inviteToken: item.inviteToken
                                        ? typeof item.inviteToken ===
                                            'object' &&
                                          Object.keys(item.inviteToken)
                                            .length === 1 &&
                                          (Object.keys(item.inviteToken)[0] ===
                                            'id' ||
                                            Object.keys(item.inviteToken)[0] ===
                                              'symbol')
                                          ? {
                                              connect: {
                                                id: item.inviteToken.id,
                                              },
                                            }
                                          : {
                                              upsert: {
                                                where: {
                                                  id:
                                                    item.inviteToken.id !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.inviteToken.id,
                                                        }
                                                      : undefined,
                                                  email:
                                                    item.inviteToken.email !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.inviteToken
                                                              .email,
                                                        }
                                                      : undefined,
                                                  waitlistEntryId:
                                                    item.inviteToken
                                                      .waitlistEntryId !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.inviteToken
                                                              .waitlistEntryId,
                                                        }
                                                      : undefined,
                                                },
                                                update: {
                                                  id:
                                                    item.inviteToken.id !==
                                                    undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .id,
                                                        }
                                                      : undefined,
                                                  token:
                                                    item.inviteToken.token !==
                                                    undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .token,
                                                        }
                                                      : undefined,
                                                  email:
                                                    item.inviteToken.email !==
                                                    undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .email,
                                                        }
                                                      : undefined,
                                                  used:
                                                    item.inviteToken.used !==
                                                    undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .used,
                                                        }
                                                      : undefined,
                                                  usedAt:
                                                    item.inviteToken.usedAt !==
                                                    undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .usedAt,
                                                        }
                                                      : undefined,
                                                  expiresAt:
                                                    item.inviteToken
                                                      .expiresAt !== undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .expiresAt,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  token:
                                                    item.inviteToken.token !==
                                                    undefined
                                                      ? item.inviteToken.token
                                                      : undefined,
                                                  email:
                                                    item.inviteToken.email !==
                                                    undefined
                                                      ? item.inviteToken.email
                                                      : undefined,
                                                  used:
                                                    item.inviteToken.used !==
                                                    undefined
                                                      ? item.inviteToken.used
                                                      : undefined,
                                                  usedAt:
                                                    item.inviteToken.usedAt !==
                                                    undefined
                                                      ? item.inviteToken.usedAt
                                                      : undefined,
                                                  expiresAt:
                                                    item.inviteToken
                                                      .expiresAt !== undefined
                                                      ? item.inviteToken
                                                          .expiresAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                    create: {
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      fullName:
                                        item.fullName !== undefined
                                          ? item.fullName
                                          : undefined,
                                      companyName:
                                        item.companyName !== undefined
                                          ? item.companyName
                                          : undefined,
                                      companyWebsite:
                                        item.companyWebsite !== undefined
                                          ? item.companyWebsite
                                          : undefined,
                                      jobRole:
                                        item.jobRole !== undefined
                                          ? item.jobRole
                                          : undefined,
                                      professionalInvestorConfirmed:
                                        item.professionalInvestorConfirmed !==
                                        undefined
                                          ? item.professionalInvestorConfirmed
                                          : undefined,
                                      status:
                                        item.status !== undefined
                                          ? item.status
                                          : undefined,
                                      queuePosition:
                                        item.queuePosition !== undefined
                                          ? item.queuePosition
                                          : undefined,
                                      reviewedAt:
                                        item.reviewedAt !== undefined
                                          ? item.reviewedAt
                                          : undefined,
                                      inviteToken: item.inviteToken
                                        ? typeof item.inviteToken ===
                                            'object' &&
                                          Object.keys(item.inviteToken)
                                            .length === 1 &&
                                          Object.keys(item.inviteToken)[0] ===
                                            'id'
                                          ? {
                                              connect: {
                                                id: item.inviteToken.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.inviteToken.id !==
                                                    undefined
                                                      ? item.inviteToken.id
                                                      : undefined,
                                                  waitlistEntryId:
                                                    item.inviteToken
                                                      .waitlistEntryId !==
                                                    undefined
                                                      ? item.inviteToken
                                                          .waitlistEntryId
                                                      : undefined,
                                                  email:
                                                    item.inviteToken.email !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.inviteToken
                                                              .email,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  token:
                                                    item.inviteToken.token !==
                                                    undefined
                                                      ? item.inviteToken.token
                                                      : undefined,
                                                  email:
                                                    item.inviteToken.email !==
                                                    undefined
                                                      ? item.inviteToken.email
                                                      : undefined,
                                                  used:
                                                    item.inviteToken.used !==
                                                    undefined
                                                      ? item.inviteToken.used
                                                      : undefined,
                                                  usedAt:
                                                    item.inviteToken.usedAt !==
                                                    undefined
                                                      ? item.inviteToken.usedAt
                                                      : undefined,
                                                  expiresAt:
                                                    item.inviteToken
                                                      .expiresAt !== undefined
                                                      ? item.inviteToken
                                                          .expiresAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        dashboardLayouts: item.dashboardLayouts
                          ? Array.isArray(item.dashboardLayouts) &&
                            item.dashboardLayouts.length > 0 &&
                            item.dashboardLayouts.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.dashboardLayouts.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.dashboardLayouts.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      role:
                                        item.role !== undefined
                                          ? {
                                              set: item.role,
                                            }
                                          : undefined,
                                      layout:
                                        item.layout !== undefined
                                          ? {
                                              set: item.layout,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      layout:
                                        item.layout !== undefined
                                          ? item.layout
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        llmConfiguration: item.llmConfiguration
                          ? typeof item.llmConfiguration === 'object' &&
                            Object.keys(item.llmConfiguration).length === 1 &&
                            (Object.keys(item.llmConfiguration)[0] === 'id' ||
                              Object.keys(item.llmConfiguration)[0] ===
                                'symbol')
                            ? {
                                connect: {
                                  id: item.llmConfiguration.id,
                                },
                              }
                            : {
                                upsert: {
                                  where: {
                                    id:
                                      item.llmConfiguration.id !== undefined
                                        ? {
                                            equals: item.llmConfiguration.id,
                                          }
                                        : undefined,
                                    userId:
                                      item.llmConfiguration.userId !== undefined
                                        ? {
                                            equals:
                                              item.llmConfiguration.userId,
                                          }
                                        : undefined,
                                  },
                                  update: {
                                    id:
                                      item.llmConfiguration.id !== undefined
                                        ? {
                                            set: item.llmConfiguration.id,
                                          }
                                        : undefined,
                                    defaultProvider:
                                      item.llmConfiguration.defaultProvider !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .defaultProvider,
                                          }
                                        : undefined,
                                    miniProvider:
                                      item.llmConfiguration.miniProvider !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .miniProvider,
                                          }
                                        : undefined,
                                    normalProvider:
                                      item.llmConfiguration.normalProvider !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .normalProvider,
                                          }
                                        : undefined,
                                    advancedProvider:
                                      item.llmConfiguration.advancedProvider !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .advancedProvider,
                                          }
                                        : undefined,
                                    miniModel:
                                      item.llmConfiguration.miniModel !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .miniModel,
                                          }
                                        : undefined,
                                    normalModel:
                                      item.llmConfiguration.normalModel !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .normalModel,
                                          }
                                        : undefined,
                                    advancedModel:
                                      item.llmConfiguration.advancedModel !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .advancedModel,
                                          }
                                        : undefined,
                                    openaiApiKey:
                                      item.llmConfiguration.openaiApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .openaiApiKey,
                                          }
                                        : undefined,
                                    anthropicApiKey:
                                      item.llmConfiguration.anthropicApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .anthropicApiKey,
                                          }
                                        : undefined,
                                    deepseekApiKey:
                                      item.llmConfiguration.deepseekApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .deepseekApiKey,
                                          }
                                        : undefined,
                                    kimiApiKey:
                                      item.llmConfiguration.kimiApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .kimiApiKey,
                                          }
                                        : undefined,
                                    qwenApiKey:
                                      item.llmConfiguration.qwenApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .qwenApiKey,
                                          }
                                        : undefined,
                                    xaiApiKey:
                                      item.llmConfiguration.xaiApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .xaiApiKey,
                                          }
                                        : undefined,
                                    geminiApiKey:
                                      item.llmConfiguration.geminiApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .geminiApiKey,
                                          }
                                        : undefined,
                                  },
                                  create: {
                                    defaultProvider:
                                      item.llmConfiguration.defaultProvider !==
                                      undefined
                                        ? item.llmConfiguration.defaultProvider
                                        : undefined,
                                    miniProvider:
                                      item.llmConfiguration.miniProvider !==
                                      undefined
                                        ? item.llmConfiguration.miniProvider
                                        : undefined,
                                    normalProvider:
                                      item.llmConfiguration.normalProvider !==
                                      undefined
                                        ? item.llmConfiguration.normalProvider
                                        : undefined,
                                    advancedProvider:
                                      item.llmConfiguration.advancedProvider !==
                                      undefined
                                        ? item.llmConfiguration.advancedProvider
                                        : undefined,
                                    miniModel:
                                      item.llmConfiguration.miniModel !==
                                      undefined
                                        ? item.llmConfiguration.miniModel
                                        : undefined,
                                    normalModel:
                                      item.llmConfiguration.normalModel !==
                                      undefined
                                        ? item.llmConfiguration.normalModel
                                        : undefined,
                                    advancedModel:
                                      item.llmConfiguration.advancedModel !==
                                      undefined
                                        ? item.llmConfiguration.advancedModel
                                        : undefined,
                                    openaiApiKey:
                                      item.llmConfiguration.openaiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.openaiApiKey
                                        : undefined,
                                    anthropicApiKey:
                                      item.llmConfiguration.anthropicApiKey !==
                                      undefined
                                        ? item.llmConfiguration.anthropicApiKey
                                        : undefined,
                                    deepseekApiKey:
                                      item.llmConfiguration.deepseekApiKey !==
                                      undefined
                                        ? item.llmConfiguration.deepseekApiKey
                                        : undefined,
                                    kimiApiKey:
                                      item.llmConfiguration.kimiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.kimiApiKey
                                        : undefined,
                                    qwenApiKey:
                                      item.llmConfiguration.qwenApiKey !==
                                      undefined
                                        ? item.llmConfiguration.qwenApiKey
                                        : undefined,
                                    xaiApiKey:
                                      item.llmConfiguration.xaiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.xaiApiKey
                                        : undefined,
                                    geminiApiKey:
                                      item.llmConfiguration.geminiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.geminiApiKey
                                        : undefined,
                                  },
                                },
                              }
                          : undefined,
                      },
                      create: {
                        name: item.name !== undefined ? item.name : undefined,
                        email:
                          item.email !== undefined ? item.email : undefined,
                        emailVerified:
                          item.emailVerified !== undefined
                            ? item.emailVerified
                            : undefined,
                        image:
                          item.image !== undefined ? item.image : undefined,
                        deletedAt:
                          item.deletedAt !== undefined
                            ? item.deletedAt
                            : undefined,
                        role: item.role !== undefined ? item.role : undefined,
                        bio: item.bio !== undefined ? item.bio : undefined,
                        jobTitle:
                          item.jobTitle !== undefined
                            ? item.jobTitle
                            : undefined,
                        plan: item.plan !== undefined ? item.plan : undefined,
                        openaiAPIKey:
                          item.openaiAPIKey !== undefined
                            ? item.openaiAPIKey
                            : undefined,
                        openaiModel:
                          item.openaiModel !== undefined
                            ? item.openaiModel
                            : undefined,
                        passwordHash:
                          item.passwordHash !== undefined
                            ? item.passwordHash
                            : undefined,
                        avatarUrl:
                          item.avatarUrl !== undefined
                            ? item.avatarUrl
                            : undefined,
                        onboardingComplete:
                          item.onboardingComplete !== undefined
                            ? item.onboardingComplete
                            : undefined,
                        signupCategory:
                          item.signupCategory !== undefined
                            ? item.signupCategory
                            : undefined,
                        accounts: item.accounts
                          ? Array.isArray(item.accounts) &&
                            item.accounts.length > 0 &&
                            item.accounts.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.accounts.map((item: any) => ({
                                  id: item.id,
                                })),
                              }
                            : {
                                connectOrCreate: item.accounts.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      type:
                                        item.type !== undefined
                                          ? item.type
                                          : undefined,
                                      provider:
                                        item.provider !== undefined
                                          ? item.provider
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      refresh_token:
                                        item.refresh_token !== undefined
                                          ? item.refresh_token
                                          : undefined,
                                      access_token:
                                        item.access_token !== undefined
                                          ? item.access_token
                                          : undefined,
                                      expires_at:
                                        item.expires_at !== undefined
                                          ? item.expires_at
                                          : undefined,
                                      token_type:
                                        item.token_type !== undefined
                                          ? item.token_type
                                          : undefined,
                                      scope:
                                        item.scope !== undefined
                                          ? item.scope
                                          : undefined,
                                      id_token:
                                        item.id_token !== undefined
                                          ? item.id_token
                                          : undefined,
                                      session_state:
                                        item.session_state !== undefined
                                          ? item.session_state
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        sessions: item.sessions
                          ? Array.isArray(item.sessions) &&
                            item.sessions.length > 0 &&
                            item.sessions.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.sessions.map((item: any) => ({
                                  id: item.id,
                                })),
                              }
                            : {
                                connectOrCreate: item.sessions.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      sessionToken:
                                        item.sessionToken !== undefined
                                          ? item.sessionToken
                                          : undefined,
                                      expires:
                                        item.expires !== undefined
                                          ? item.expires
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        authenticators: item.authenticators
                          ? Array.isArray(item.authenticators) &&
                            item.authenticators.length > 0 &&
                            item.authenticators.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.authenticators.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.authenticators.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      credentialID:
                                        item.credentialID !== undefined
                                          ? item.credentialID
                                          : undefined,
                                      publicKey:
                                        item.publicKey !== undefined
                                          ? item.publicKey
                                          : undefined,
                                      counter:
                                        item.counter !== undefined
                                          ? item.counter
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        orgMemberships: item.orgMemberships
                          ? Array.isArray(item.orgMemberships) &&
                            item.orgMemberships.length > 0 &&
                            item.orgMemberships.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.orgMemberships.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.orgMemberships.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      organizationId:
                                        item.organizationId !== undefined
                                          ? {
                                              equals: item.organizationId,
                                            }
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      organization: item.organization
                                        ? typeof item.organization ===
                                            'object' &&
                                          Object.keys(item.organization)
                                            .length === 1 &&
                                          Object.keys(item.organization)[0] ===
                                            'id'
                                          ? {
                                              connect: {
                                                id: item.organization.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.organization.id !==
                                                    undefined
                                                      ? item.organization.id
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .name,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? item.organization.name
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  logoUrl:
                                                    item.organization
                                                      .logoUrl !== undefined
                                                      ? item.organization
                                                          .logoUrl
                                                      : undefined,
                                                  website:
                                                    item.organization
                                                      .website !== undefined
                                                      ? item.organization
                                                          .website
                                                      : undefined,
                                                  businessType:
                                                    item.organization
                                                      .businessType !==
                                                    undefined
                                                      ? item.organization
                                                          .businessType
                                                      : undefined,
                                                  jurisdiction:
                                                    item.organization
                                                      .jurisdiction !==
                                                    undefined
                                                      ? item.organization
                                                          .jurisdiction
                                                      : undefined,
                                                  regulatoryStatus:
                                                    item.organization
                                                      .regulatoryStatus !==
                                                    undefined
                                                      ? item.organization
                                                          .regulatoryStatus
                                                      : undefined,
                                                  description:
                                                    item.organization
                                                      .description !== undefined
                                                      ? item.organization
                                                          .description
                                                      : undefined,
                                                  tradingDefaults:
                                                    item.organization
                                                      .tradingDefaults !==
                                                    undefined
                                                      ? item.organization
                                                          .tradingDefaults
                                                      : undefined,
                                                  llmDefaults:
                                                    item.organization
                                                      .llmDefaults !== undefined
                                                      ? item.organization
                                                          .llmDefaults
                                                      : undefined,
                                                  deletedAt:
                                                    item.organization
                                                      .deletedAt !== undefined
                                                      ? item.organization
                                                          .deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        fundAssignments: item.fundAssignments
                          ? Array.isArray(item.fundAssignments) &&
                            item.fundAssignments.length > 0 &&
                            item.fundAssignments.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.fundAssignments.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.fundAssignments.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      fundId:
                                        item.fundId !== undefined
                                          ? {
                                              equals: item.fundId,
                                            }
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      fund: item.fund
                                        ? typeof item.fund === 'object' &&
                                          Object.keys(item.fund).length === 1 &&
                                          Object.keys(item.fund)[0] === 'id'
                                          ? {
                                              connect: {
                                                id: item.fund.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.fund.id !== undefined
                                                      ? item.fund.id
                                                      : undefined,
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.slug,
                                                        }
                                                      : undefined,
                                                  organizationId:
                                                    item.fund.organizationId !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.fund
                                                              .organizationId,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? item.fund.name
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? item.fund.slug
                                                      : undefined,
                                                  description:
                                                    item.fund.description !==
                                                    undefined
                                                      ? item.fund.description
                                                      : undefined,
                                                  status:
                                                    item.fund.status !==
                                                    undefined
                                                      ? item.fund.status
                                                      : undefined,
                                                  tradingOverrides:
                                                    item.fund
                                                      .tradingOverrides !==
                                                    undefined
                                                      ? item.fund
                                                          .tradingOverrides
                                                      : undefined,
                                                  llmOverrides:
                                                    item.fund.llmOverrides !==
                                                    undefined
                                                      ? item.fund.llmOverrides
                                                      : undefined,
                                                  policyOverlays:
                                                    item.fund.policyOverlays !==
                                                    undefined
                                                      ? item.fund.policyOverlays
                                                      : undefined,
                                                  deletedAt:
                                                    item.fund.deletedAt !==
                                                    undefined
                                                      ? item.fund.deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        investorProfile: item.investorProfile
                          ? typeof item.investorProfile === 'object' &&
                            Object.keys(item.investorProfile).length === 1 &&
                            Object.keys(item.investorProfile)[0] === 'id'
                            ? {
                                connect: {
                                  id: item.investorProfile.id,
                                },
                              }
                            : {
                                connectOrCreate: {
                                  where: {
                                    id:
                                      item.investorProfile.id !== undefined
                                        ? item.investorProfile.id
                                        : undefined,
                                    userId:
                                      item.investorProfile.userId !== undefined
                                        ? item.investorProfile.userId
                                        : undefined,
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? {
                                            equals: item.investorProfile.name,
                                          }
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? {
                                            equals: item.investorProfile.email,
                                          }
                                        : undefined,
                                  },
                                  create: {
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? item.investorProfile.name
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? item.investorProfile.email
                                        : undefined,
                                    type:
                                      item.investorProfile.type !== undefined
                                        ? item.investorProfile.type
                                        : undefined,
                                    kycStatus:
                                      item.investorProfile.kycStatus !==
                                      undefined
                                        ? item.investorProfile.kycStatus
                                        : undefined,
                                    walletAddress:
                                      item.investorProfile.walletAddress !==
                                      undefined
                                        ? item.investorProfile.walletAddress
                                        : undefined,
                                    deletedAt:
                                      item.investorProfile.deletedAt !==
                                      undefined
                                        ? item.investorProfile.deletedAt
                                        : undefined,
                                    investments: item.investorProfile
                                      .investments
                                      ? Array.isArray(
                                          item.investorProfile.investments
                                        ) &&
                                        item.investorProfile.investments
                                          .length > 0 &&
                                        item.investorProfile.investments.every(
                                          (item: any) =>
                                            typeof item === 'object' &&
                                            'id' in item &&
                                            Object.keys(item).length === 1
                                        )
                                        ? {
                                            connect:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  id: item.id,
                                                })
                                              ),
                                          }
                                        : {
                                            connectOrCreate:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  where: {
                                                    id:
                                                      item.id !== undefined
                                                        ? item.id
                                                        : undefined,
                                                    fundId:
                                                      item.fundId !== undefined
                                                        ? {
                                                            equals: item.fundId,
                                                          }
                                                        : undefined,
                                                    investorId:
                                                      item.investorId !==
                                                      undefined
                                                        ? {
                                                            equals:
                                                              item.investorId,
                                                          }
                                                        : undefined,
                                                  },
                                                  create: {
                                                    units:
                                                      item.units !== undefined
                                                        ? item.units
                                                        : undefined,
                                                    investedAt:
                                                      item.investedAt !==
                                                      undefined
                                                        ? item.investedAt
                                                        : undefined,
                                                    status:
                                                      item.status !== undefined
                                                        ? item.status
                                                        : undefined,
                                                  },
                                                })
                                              ),
                                          }
                                      : undefined,
                                  },
                                },
                              }
                          : undefined,
                        linkedProviders: item.linkedProviders
                          ? Array.isArray(item.linkedProviders) &&
                            item.linkedProviders.length > 0 &&
                            item.linkedProviders.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.linkedProviders.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.linkedProviders.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              equals: item.providerAccountId,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              equals: item.email,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      provider:
                                        item.provider !== undefined
                                          ? item.provider
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      accessToken:
                                        item.accessToken !== undefined
                                          ? item.accessToken
                                          : undefined,
                                      refreshToken:
                                        item.refreshToken !== undefined
                                          ? item.refreshToken
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? item.expiresAt
                                          : undefined,
                                      linkedAt:
                                        item.linkedAt !== undefined
                                          ? item.linkedAt
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        accountLinkingRequests: item.accountLinkingRequests
                          ? Array.isArray(item.accountLinkingRequests) &&
                            item.accountLinkingRequests.length > 0 &&
                            item.accountLinkingRequests.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.accountLinkingRequests.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate:
                                  item.accountLinkingRequests.map(
                                    (item: any) => ({
                                      where: {
                                        id:
                                          item.id !== undefined
                                            ? item.id
                                            : undefined,
                                        userId:
                                          item.userId !== undefined
                                            ? {
                                                equals: item.userId,
                                              }
                                            : undefined,
                                        email:
                                          item.email !== undefined
                                            ? {
                                                equals: item.email,
                                              }
                                            : undefined,
                                        providerAccountId:
                                          item.providerAccountId !== undefined
                                            ? {
                                                equals: item.providerAccountId,
                                              }
                                            : undefined,
                                      },
                                      create: {
                                        email:
                                          item.email !== undefined
                                            ? item.email
                                            : undefined,
                                        provider:
                                          item.provider !== undefined
                                            ? item.provider
                                            : undefined,
                                        providerAccountId:
                                          item.providerAccountId !== undefined
                                            ? item.providerAccountId
                                            : undefined,
                                        status:
                                          item.status !== undefined
                                            ? item.status
                                            : undefined,
                                        verificationToken:
                                          item.verificationToken !== undefined
                                            ? item.verificationToken
                                            : undefined,
                                        userAgent:
                                          item.userAgent !== undefined
                                            ? item.userAgent
                                            : undefined,
                                        ipAddress:
                                          item.ipAddress !== undefined
                                            ? item.ipAddress
                                            : undefined,
                                        expiresAt:
                                          item.expiresAt !== undefined
                                            ? item.expiresAt
                                            : undefined,
                                        verifiedAt:
                                          item.verifiedAt !== undefined
                                            ? item.verifiedAt
                                            : undefined,
                                        approvedAt:
                                          item.approvedAt !== undefined
                                            ? item.approvedAt
                                            : undefined,
                                        rejectedAt:
                                          item.rejectedAt !== undefined
                                            ? item.rejectedAt
                                            : undefined,
                                      },
                                    })
                                  ),
                              }
                          : undefined,
                        reviewedWaitlistEntries: item.reviewedWaitlistEntries
                          ? Array.isArray(item.reviewedWaitlistEntries) &&
                            item.reviewedWaitlistEntries.length > 0 &&
                            item.reviewedWaitlistEntries.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.reviewedWaitlistEntries.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate:
                                  item.reviewedWaitlistEntries.map(
                                    (item: any) => ({
                                      where: {
                                        id:
                                          item.id !== undefined
                                            ? item.id
                                            : undefined,
                                        email:
                                          item.email !== undefined
                                            ? item.email
                                            : undefined,
                                      },
                                      create: {
                                        email:
                                          item.email !== undefined
                                            ? item.email
                                            : undefined,
                                        fullName:
                                          item.fullName !== undefined
                                            ? item.fullName
                                            : undefined,
                                        companyName:
                                          item.companyName !== undefined
                                            ? item.companyName
                                            : undefined,
                                        companyWebsite:
                                          item.companyWebsite !== undefined
                                            ? item.companyWebsite
                                            : undefined,
                                        jobRole:
                                          item.jobRole !== undefined
                                            ? item.jobRole
                                            : undefined,
                                        professionalInvestorConfirmed:
                                          item.professionalInvestorConfirmed !==
                                          undefined
                                            ? item.professionalInvestorConfirmed
                                            : undefined,
                                        status:
                                          item.status !== undefined
                                            ? item.status
                                            : undefined,
                                        queuePosition:
                                          item.queuePosition !== undefined
                                            ? item.queuePosition
                                            : undefined,
                                        reviewedAt:
                                          item.reviewedAt !== undefined
                                            ? item.reviewedAt
                                            : undefined,
                                        inviteToken: item.inviteToken
                                          ? typeof item.inviteToken ===
                                              'object' &&
                                            Object.keys(item.inviteToken)
                                              .length === 1 &&
                                            Object.keys(item.inviteToken)[0] ===
                                              'id'
                                            ? {
                                                connect: {
                                                  id: item.inviteToken.id,
                                                },
                                              }
                                            : {
                                                connectOrCreate: {
                                                  where: {
                                                    id:
                                                      item.inviteToken.id !==
                                                      undefined
                                                        ? item.inviteToken.id
                                                        : undefined,
                                                    waitlistEntryId:
                                                      item.inviteToken
                                                        .waitlistEntryId !==
                                                      undefined
                                                        ? item.inviteToken
                                                            .waitlistEntryId
                                                        : undefined,
                                                    email:
                                                      item.inviteToken.email !==
                                                      undefined
                                                        ? {
                                                            equals:
                                                              item.inviteToken
                                                                .email,
                                                          }
                                                        : undefined,
                                                  },
                                                  create: {
                                                    token:
                                                      item.inviteToken.token !==
                                                      undefined
                                                        ? item.inviteToken.token
                                                        : undefined,
                                                    email:
                                                      item.inviteToken.email !==
                                                      undefined
                                                        ? item.inviteToken.email
                                                        : undefined,
                                                    used:
                                                      item.inviteToken.used !==
                                                      undefined
                                                        ? item.inviteToken.used
                                                        : undefined,
                                                    usedAt:
                                                      item.inviteToken
                                                        .usedAt !== undefined
                                                        ? item.inviteToken
                                                            .usedAt
                                                        : undefined,
                                                    expiresAt:
                                                      item.inviteToken
                                                        .expiresAt !== undefined
                                                        ? item.inviteToken
                                                            .expiresAt
                                                        : undefined,
                                                  },
                                                },
                                              }
                                          : undefined,
                                      },
                                    })
                                  ),
                              }
                          : undefined,
                        dashboardLayouts: item.dashboardLayouts
                          ? Array.isArray(item.dashboardLayouts) &&
                            item.dashboardLayouts.length > 0 &&
                            item.dashboardLayouts.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.dashboardLayouts.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.dashboardLayouts.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      layout:
                                        item.layout !== undefined
                                          ? item.layout
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        llmConfiguration: item.llmConfiguration
                          ? typeof item.llmConfiguration === 'object' &&
                            Object.keys(item.llmConfiguration).length === 1 &&
                            Object.keys(item.llmConfiguration)[0] === 'id'
                            ? {
                                connect: {
                                  id: item.llmConfiguration.id,
                                },
                              }
                            : {
                                connectOrCreate: {
                                  where: {
                                    id:
                                      item.llmConfiguration.id !== undefined
                                        ? item.llmConfiguration.id
                                        : undefined,
                                    userId:
                                      item.llmConfiguration.userId !== undefined
                                        ? item.llmConfiguration.userId
                                        : undefined,
                                  },
                                  create: {
                                    defaultProvider:
                                      item.llmConfiguration.defaultProvider !==
                                      undefined
                                        ? item.llmConfiguration.defaultProvider
                                        : undefined,
                                    miniProvider:
                                      item.llmConfiguration.miniProvider !==
                                      undefined
                                        ? item.llmConfiguration.miniProvider
                                        : undefined,
                                    normalProvider:
                                      item.llmConfiguration.normalProvider !==
                                      undefined
                                        ? item.llmConfiguration.normalProvider
                                        : undefined,
                                    advancedProvider:
                                      item.llmConfiguration.advancedProvider !==
                                      undefined
                                        ? item.llmConfiguration.advancedProvider
                                        : undefined,
                                    miniModel:
                                      item.llmConfiguration.miniModel !==
                                      undefined
                                        ? item.llmConfiguration.miniModel
                                        : undefined,
                                    normalModel:
                                      item.llmConfiguration.normalModel !==
                                      undefined
                                        ? item.llmConfiguration.normalModel
                                        : undefined,
                                    advancedModel:
                                      item.llmConfiguration.advancedModel !==
                                      undefined
                                        ? item.llmConfiguration.advancedModel
                                        : undefined,
                                    openaiApiKey:
                                      item.llmConfiguration.openaiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.openaiApiKey
                                        : undefined,
                                    anthropicApiKey:
                                      item.llmConfiguration.anthropicApiKey !==
                                      undefined
                                        ? item.llmConfiguration.anthropicApiKey
                                        : undefined,
                                    deepseekApiKey:
                                      item.llmConfiguration.deepseekApiKey !==
                                      undefined
                                        ? item.llmConfiguration.deepseekApiKey
                                        : undefined,
                                    kimiApiKey:
                                      item.llmConfiguration.kimiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.kimiApiKey
                                        : undefined,
                                    qwenApiKey:
                                      item.llmConfiguration.qwenApiKey !==
                                      undefined
                                        ? item.llmConfiguration.qwenApiKey
                                        : undefined,
                                    xaiApiKey:
                                      item.llmConfiguration.xaiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.xaiApiKey
                                        : undefined,
                                    geminiApiKey:
                                      item.llmConfiguration.geminiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.geminiApiKey
                                        : undefined,
                                  },
                                },
                              }
                          : undefined,
                      },
                    })),
                  }
              : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_CUSTOMER,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneCustomer) {
          return response.data.updateOneCustomer;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn('Database connection error, retrying...', {
            retryCount,
            delayMs: delay,
          });
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Upsert a single Customer record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Customer or null.
   */
  async upsert(
    props: CustomerType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<CustomerType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const UPSERT_ONE_CUSTOMER = gql`
          mutation upsertOneCustomer($where: CustomerWhereUniqueInput!, $create: CustomerCreateInput!, $update: CustomerUpdateInput!) {
            upsertOneCustomer(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
            stripeCustomerId:
              props.stripeCustomerId !== undefined
                ? props.stripeCustomerId
                : undefined,
            stripeSubscriptionId:
              props.stripeSubscriptionId !== undefined
                ? props.stripeSubscriptionId
                : undefined,
            authUserId:
              props.authUserId !== undefined
                ? {
                    equals: props.authUserId,
                  }
                : undefined,
            name:
              props.name !== undefined
                ? {
                    equals: props.name,
                  }
                : undefined,
            stripePriceId:
              props.stripePriceId !== undefined
                ? {
                    equals: props.stripePriceId,
                  }
                : undefined,
          },
          create: {
            authUserId:
              props.authUserId !== undefined ? props.authUserId : undefined,
            name: props.name !== undefined ? props.name : undefined,
            plan: props.plan !== undefined ? props.plan : undefined,
            stripeCustomerId:
              props.stripeCustomerId !== undefined
                ? props.stripeCustomerId
                : undefined,
            stripeSubscriptionId:
              props.stripeSubscriptionId !== undefined
                ? props.stripeSubscriptionId
                : undefined,
            stripePriceId:
              props.stripePriceId !== undefined
                ? props.stripePriceId
                : undefined,
            stripeCurrentPeriodEnd:
              props.stripeCurrentPeriodEnd !== undefined
                ? props.stripeCurrentPeriodEnd
                : undefined,
            jurisdiction:
              props.jurisdiction !== undefined ? props.jurisdiction : undefined,
            riskProfile:
              props.riskProfile !== undefined ? props.riskProfile : undefined,
            amlStatus:
              props.amlStatus !== undefined ? props.amlStatus : undefined,
            lastKycUpdate:
              props.lastKycUpdate !== undefined
                ? props.lastKycUpdate
                : undefined,
            users: props.users
              ? Array.isArray(props.users) &&
                props.users.length > 0 &&
                props.users.every(
                  (item: any) =>
                    typeof item === 'object' &&
                    'id' in item &&
                    Object.keys(item).length === 1
                )
                ? {
                    connect: props.users.map((item: any) => ({
                      id: item.id,
                    })),
                  }
                : {
                    connectOrCreate: props.users.map((item: any) => ({
                      where: {
                        id: item.id !== undefined ? item.id : undefined,
                        email:
                          item.email !== undefined ? item.email : undefined,
                        name:
                          item.name !== undefined
                            ? {
                                equals: item.name,
                              }
                            : undefined,
                      },
                      create: {
                        name: item.name !== undefined ? item.name : undefined,
                        email:
                          item.email !== undefined ? item.email : undefined,
                        emailVerified:
                          item.emailVerified !== undefined
                            ? item.emailVerified
                            : undefined,
                        image:
                          item.image !== undefined ? item.image : undefined,
                        deletedAt:
                          item.deletedAt !== undefined
                            ? item.deletedAt
                            : undefined,
                        role: item.role !== undefined ? item.role : undefined,
                        bio: item.bio !== undefined ? item.bio : undefined,
                        jobTitle:
                          item.jobTitle !== undefined
                            ? item.jobTitle
                            : undefined,
                        plan: item.plan !== undefined ? item.plan : undefined,
                        openaiAPIKey:
                          item.openaiAPIKey !== undefined
                            ? item.openaiAPIKey
                            : undefined,
                        openaiModel:
                          item.openaiModel !== undefined
                            ? item.openaiModel
                            : undefined,
                        passwordHash:
                          item.passwordHash !== undefined
                            ? item.passwordHash
                            : undefined,
                        avatarUrl:
                          item.avatarUrl !== undefined
                            ? item.avatarUrl
                            : undefined,
                        onboardingComplete:
                          item.onboardingComplete !== undefined
                            ? item.onboardingComplete
                            : undefined,
                        signupCategory:
                          item.signupCategory !== undefined
                            ? item.signupCategory
                            : undefined,
                        accounts: item.accounts
                          ? Array.isArray(item.accounts) &&
                            item.accounts.length > 0 &&
                            item.accounts.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.accounts.map((item: any) => ({
                                  id: item.id,
                                })),
                              }
                            : {
                                connectOrCreate: item.accounts.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      type:
                                        item.type !== undefined
                                          ? item.type
                                          : undefined,
                                      provider:
                                        item.provider !== undefined
                                          ? item.provider
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      refresh_token:
                                        item.refresh_token !== undefined
                                          ? item.refresh_token
                                          : undefined,
                                      access_token:
                                        item.access_token !== undefined
                                          ? item.access_token
                                          : undefined,
                                      expires_at:
                                        item.expires_at !== undefined
                                          ? item.expires_at
                                          : undefined,
                                      token_type:
                                        item.token_type !== undefined
                                          ? item.token_type
                                          : undefined,
                                      scope:
                                        item.scope !== undefined
                                          ? item.scope
                                          : undefined,
                                      id_token:
                                        item.id_token !== undefined
                                          ? item.id_token
                                          : undefined,
                                      session_state:
                                        item.session_state !== undefined
                                          ? item.session_state
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        sessions: item.sessions
                          ? Array.isArray(item.sessions) &&
                            item.sessions.length > 0 &&
                            item.sessions.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.sessions.map((item: any) => ({
                                  id: item.id,
                                })),
                              }
                            : {
                                connectOrCreate: item.sessions.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      sessionToken:
                                        item.sessionToken !== undefined
                                          ? item.sessionToken
                                          : undefined,
                                      expires:
                                        item.expires !== undefined
                                          ? item.expires
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        authenticators: item.authenticators
                          ? Array.isArray(item.authenticators) &&
                            item.authenticators.length > 0 &&
                            item.authenticators.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.authenticators.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.authenticators.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      credentialID:
                                        item.credentialID !== undefined
                                          ? item.credentialID
                                          : undefined,
                                      publicKey:
                                        item.publicKey !== undefined
                                          ? item.publicKey
                                          : undefined,
                                      counter:
                                        item.counter !== undefined
                                          ? item.counter
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        orgMemberships: item.orgMemberships
                          ? Array.isArray(item.orgMemberships) &&
                            item.orgMemberships.length > 0 &&
                            item.orgMemberships.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.orgMemberships.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.orgMemberships.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      organizationId:
                                        item.organizationId !== undefined
                                          ? {
                                              equals: item.organizationId,
                                            }
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      organization: item.organization
                                        ? typeof item.organization ===
                                            'object' &&
                                          Object.keys(item.organization)
                                            .length === 1 &&
                                          Object.keys(item.organization)[0] ===
                                            'id'
                                          ? {
                                              connect: {
                                                id: item.organization.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.organization.id !==
                                                    undefined
                                                      ? item.organization.id
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .name,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? item.organization.name
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  logoUrl:
                                                    item.organization
                                                      .logoUrl !== undefined
                                                      ? item.organization
                                                          .logoUrl
                                                      : undefined,
                                                  website:
                                                    item.organization
                                                      .website !== undefined
                                                      ? item.organization
                                                          .website
                                                      : undefined,
                                                  businessType:
                                                    item.organization
                                                      .businessType !==
                                                    undefined
                                                      ? item.organization
                                                          .businessType
                                                      : undefined,
                                                  jurisdiction:
                                                    item.organization
                                                      .jurisdiction !==
                                                    undefined
                                                      ? item.organization
                                                          .jurisdiction
                                                      : undefined,
                                                  regulatoryStatus:
                                                    item.organization
                                                      .regulatoryStatus !==
                                                    undefined
                                                      ? item.organization
                                                          .regulatoryStatus
                                                      : undefined,
                                                  description:
                                                    item.organization
                                                      .description !== undefined
                                                      ? item.organization
                                                          .description
                                                      : undefined,
                                                  tradingDefaults:
                                                    item.organization
                                                      .tradingDefaults !==
                                                    undefined
                                                      ? item.organization
                                                          .tradingDefaults
                                                      : undefined,
                                                  llmDefaults:
                                                    item.organization
                                                      .llmDefaults !== undefined
                                                      ? item.organization
                                                          .llmDefaults
                                                      : undefined,
                                                  deletedAt:
                                                    item.organization
                                                      .deletedAt !== undefined
                                                      ? item.organization
                                                          .deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        fundAssignments: item.fundAssignments
                          ? Array.isArray(item.fundAssignments) &&
                            item.fundAssignments.length > 0 &&
                            item.fundAssignments.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.fundAssignments.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.fundAssignments.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      fundId:
                                        item.fundId !== undefined
                                          ? {
                                              equals: item.fundId,
                                            }
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      fund: item.fund
                                        ? typeof item.fund === 'object' &&
                                          Object.keys(item.fund).length === 1 &&
                                          Object.keys(item.fund)[0] === 'id'
                                          ? {
                                              connect: {
                                                id: item.fund.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.fund.id !== undefined
                                                      ? item.fund.id
                                                      : undefined,
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.slug,
                                                        }
                                                      : undefined,
                                                  organizationId:
                                                    item.fund.organizationId !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.fund
                                                              .organizationId,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? item.fund.name
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? item.fund.slug
                                                      : undefined,
                                                  description:
                                                    item.fund.description !==
                                                    undefined
                                                      ? item.fund.description
                                                      : undefined,
                                                  status:
                                                    item.fund.status !==
                                                    undefined
                                                      ? item.fund.status
                                                      : undefined,
                                                  tradingOverrides:
                                                    item.fund
                                                      .tradingOverrides !==
                                                    undefined
                                                      ? item.fund
                                                          .tradingOverrides
                                                      : undefined,
                                                  llmOverrides:
                                                    item.fund.llmOverrides !==
                                                    undefined
                                                      ? item.fund.llmOverrides
                                                      : undefined,
                                                  policyOverlays:
                                                    item.fund.policyOverlays !==
                                                    undefined
                                                      ? item.fund.policyOverlays
                                                      : undefined,
                                                  deletedAt:
                                                    item.fund.deletedAt !==
                                                    undefined
                                                      ? item.fund.deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        investorProfile: item.investorProfile
                          ? typeof item.investorProfile === 'object' &&
                            Object.keys(item.investorProfile).length === 1 &&
                            Object.keys(item.investorProfile)[0] === 'id'
                            ? {
                                connect: {
                                  id: item.investorProfile.id,
                                },
                              }
                            : {
                                connectOrCreate: {
                                  where: {
                                    id:
                                      item.investorProfile.id !== undefined
                                        ? item.investorProfile.id
                                        : undefined,
                                    userId:
                                      item.investorProfile.userId !== undefined
                                        ? item.investorProfile.userId
                                        : undefined,
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? {
                                            equals: item.investorProfile.name,
                                          }
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? {
                                            equals: item.investorProfile.email,
                                          }
                                        : undefined,
                                  },
                                  create: {
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? item.investorProfile.name
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? item.investorProfile.email
                                        : undefined,
                                    type:
                                      item.investorProfile.type !== undefined
                                        ? item.investorProfile.type
                                        : undefined,
                                    kycStatus:
                                      item.investorProfile.kycStatus !==
                                      undefined
                                        ? item.investorProfile.kycStatus
                                        : undefined,
                                    walletAddress:
                                      item.investorProfile.walletAddress !==
                                      undefined
                                        ? item.investorProfile.walletAddress
                                        : undefined,
                                    deletedAt:
                                      item.investorProfile.deletedAt !==
                                      undefined
                                        ? item.investorProfile.deletedAt
                                        : undefined,
                                    investments: item.investorProfile
                                      .investments
                                      ? Array.isArray(
                                          item.investorProfile.investments
                                        ) &&
                                        item.investorProfile.investments
                                          .length > 0 &&
                                        item.investorProfile.investments.every(
                                          (item: any) =>
                                            typeof item === 'object' &&
                                            'id' in item &&
                                            Object.keys(item).length === 1
                                        )
                                        ? {
                                            connect:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  id: item.id,
                                                })
                                              ),
                                          }
                                        : {
                                            connectOrCreate:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  where: {
                                                    id:
                                                      item.id !== undefined
                                                        ? item.id
                                                        : undefined,
                                                    fundId:
                                                      item.fundId !== undefined
                                                        ? {
                                                            equals: item.fundId,
                                                          }
                                                        : undefined,
                                                    investorId:
                                                      item.investorId !==
                                                      undefined
                                                        ? {
                                                            equals:
                                                              item.investorId,
                                                          }
                                                        : undefined,
                                                  },
                                                  create: {
                                                    units:
                                                      item.units !== undefined
                                                        ? item.units
                                                        : undefined,
                                                    investedAt:
                                                      item.investedAt !==
                                                      undefined
                                                        ? item.investedAt
                                                        : undefined,
                                                    status:
                                                      item.status !== undefined
                                                        ? item.status
                                                        : undefined,
                                                  },
                                                })
                                              ),
                                          }
                                      : undefined,
                                  },
                                },
                              }
                          : undefined,
                        linkedProviders: item.linkedProviders
                          ? Array.isArray(item.linkedProviders) &&
                            item.linkedProviders.length > 0 &&
                            item.linkedProviders.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.linkedProviders.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.linkedProviders.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              equals: item.providerAccountId,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              equals: item.email,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      provider:
                                        item.provider !== undefined
                                          ? item.provider
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      accessToken:
                                        item.accessToken !== undefined
                                          ? item.accessToken
                                          : undefined,
                                      refreshToken:
                                        item.refreshToken !== undefined
                                          ? item.refreshToken
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? item.expiresAt
                                          : undefined,
                                      linkedAt:
                                        item.linkedAt !== undefined
                                          ? item.linkedAt
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        accountLinkingRequests: item.accountLinkingRequests
                          ? Array.isArray(item.accountLinkingRequests) &&
                            item.accountLinkingRequests.length > 0 &&
                            item.accountLinkingRequests.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.accountLinkingRequests.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate:
                                  item.accountLinkingRequests.map(
                                    (item: any) => ({
                                      where: {
                                        id:
                                          item.id !== undefined
                                            ? item.id
                                            : undefined,
                                        userId:
                                          item.userId !== undefined
                                            ? {
                                                equals: item.userId,
                                              }
                                            : undefined,
                                        email:
                                          item.email !== undefined
                                            ? {
                                                equals: item.email,
                                              }
                                            : undefined,
                                        providerAccountId:
                                          item.providerAccountId !== undefined
                                            ? {
                                                equals: item.providerAccountId,
                                              }
                                            : undefined,
                                      },
                                      create: {
                                        email:
                                          item.email !== undefined
                                            ? item.email
                                            : undefined,
                                        provider:
                                          item.provider !== undefined
                                            ? item.provider
                                            : undefined,
                                        providerAccountId:
                                          item.providerAccountId !== undefined
                                            ? item.providerAccountId
                                            : undefined,
                                        status:
                                          item.status !== undefined
                                            ? item.status
                                            : undefined,
                                        verificationToken:
                                          item.verificationToken !== undefined
                                            ? item.verificationToken
                                            : undefined,
                                        userAgent:
                                          item.userAgent !== undefined
                                            ? item.userAgent
                                            : undefined,
                                        ipAddress:
                                          item.ipAddress !== undefined
                                            ? item.ipAddress
                                            : undefined,
                                        expiresAt:
                                          item.expiresAt !== undefined
                                            ? item.expiresAt
                                            : undefined,
                                        verifiedAt:
                                          item.verifiedAt !== undefined
                                            ? item.verifiedAt
                                            : undefined,
                                        approvedAt:
                                          item.approvedAt !== undefined
                                            ? item.approvedAt
                                            : undefined,
                                        rejectedAt:
                                          item.rejectedAt !== undefined
                                            ? item.rejectedAt
                                            : undefined,
                                      },
                                    })
                                  ),
                              }
                          : undefined,
                        reviewedWaitlistEntries: item.reviewedWaitlistEntries
                          ? Array.isArray(item.reviewedWaitlistEntries) &&
                            item.reviewedWaitlistEntries.length > 0 &&
                            item.reviewedWaitlistEntries.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.reviewedWaitlistEntries.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate:
                                  item.reviewedWaitlistEntries.map(
                                    (item: any) => ({
                                      where: {
                                        id:
                                          item.id !== undefined
                                            ? item.id
                                            : undefined,
                                        email:
                                          item.email !== undefined
                                            ? item.email
                                            : undefined,
                                      },
                                      create: {
                                        email:
                                          item.email !== undefined
                                            ? item.email
                                            : undefined,
                                        fullName:
                                          item.fullName !== undefined
                                            ? item.fullName
                                            : undefined,
                                        companyName:
                                          item.companyName !== undefined
                                            ? item.companyName
                                            : undefined,
                                        companyWebsite:
                                          item.companyWebsite !== undefined
                                            ? item.companyWebsite
                                            : undefined,
                                        jobRole:
                                          item.jobRole !== undefined
                                            ? item.jobRole
                                            : undefined,
                                        professionalInvestorConfirmed:
                                          item.professionalInvestorConfirmed !==
                                          undefined
                                            ? item.professionalInvestorConfirmed
                                            : undefined,
                                        status:
                                          item.status !== undefined
                                            ? item.status
                                            : undefined,
                                        queuePosition:
                                          item.queuePosition !== undefined
                                            ? item.queuePosition
                                            : undefined,
                                        reviewedAt:
                                          item.reviewedAt !== undefined
                                            ? item.reviewedAt
                                            : undefined,
                                        inviteToken: item.inviteToken
                                          ? typeof item.inviteToken ===
                                              'object' &&
                                            Object.keys(item.inviteToken)
                                              .length === 1 &&
                                            Object.keys(item.inviteToken)[0] ===
                                              'id'
                                            ? {
                                                connect: {
                                                  id: item.inviteToken.id,
                                                },
                                              }
                                            : {
                                                connectOrCreate: {
                                                  where: {
                                                    id:
                                                      item.inviteToken.id !==
                                                      undefined
                                                        ? item.inviteToken.id
                                                        : undefined,
                                                    waitlistEntryId:
                                                      item.inviteToken
                                                        .waitlistEntryId !==
                                                      undefined
                                                        ? item.inviteToken
                                                            .waitlistEntryId
                                                        : undefined,
                                                    email:
                                                      item.inviteToken.email !==
                                                      undefined
                                                        ? {
                                                            equals:
                                                              item.inviteToken
                                                                .email,
                                                          }
                                                        : undefined,
                                                  },
                                                  create: {
                                                    token:
                                                      item.inviteToken.token !==
                                                      undefined
                                                        ? item.inviteToken.token
                                                        : undefined,
                                                    email:
                                                      item.inviteToken.email !==
                                                      undefined
                                                        ? item.inviteToken.email
                                                        : undefined,
                                                    used:
                                                      item.inviteToken.used !==
                                                      undefined
                                                        ? item.inviteToken.used
                                                        : undefined,
                                                    usedAt:
                                                      item.inviteToken
                                                        .usedAt !== undefined
                                                        ? item.inviteToken
                                                            .usedAt
                                                        : undefined,
                                                    expiresAt:
                                                      item.inviteToken
                                                        .expiresAt !== undefined
                                                        ? item.inviteToken
                                                            .expiresAt
                                                        : undefined,
                                                  },
                                                },
                                              }
                                          : undefined,
                                      },
                                    })
                                  ),
                              }
                          : undefined,
                        dashboardLayouts: item.dashboardLayouts
                          ? Array.isArray(item.dashboardLayouts) &&
                            item.dashboardLayouts.length > 0 &&
                            item.dashboardLayouts.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.dashboardLayouts.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.dashboardLayouts.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      layout:
                                        item.layout !== undefined
                                          ? item.layout
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        llmConfiguration: item.llmConfiguration
                          ? typeof item.llmConfiguration === 'object' &&
                            Object.keys(item.llmConfiguration).length === 1 &&
                            Object.keys(item.llmConfiguration)[0] === 'id'
                            ? {
                                connect: {
                                  id: item.llmConfiguration.id,
                                },
                              }
                            : {
                                connectOrCreate: {
                                  where: {
                                    id:
                                      item.llmConfiguration.id !== undefined
                                        ? item.llmConfiguration.id
                                        : undefined,
                                    userId:
                                      item.llmConfiguration.userId !== undefined
                                        ? item.llmConfiguration.userId
                                        : undefined,
                                  },
                                  create: {
                                    defaultProvider:
                                      item.llmConfiguration.defaultProvider !==
                                      undefined
                                        ? item.llmConfiguration.defaultProvider
                                        : undefined,
                                    miniProvider:
                                      item.llmConfiguration.miniProvider !==
                                      undefined
                                        ? item.llmConfiguration.miniProvider
                                        : undefined,
                                    normalProvider:
                                      item.llmConfiguration.normalProvider !==
                                      undefined
                                        ? item.llmConfiguration.normalProvider
                                        : undefined,
                                    advancedProvider:
                                      item.llmConfiguration.advancedProvider !==
                                      undefined
                                        ? item.llmConfiguration.advancedProvider
                                        : undefined,
                                    miniModel:
                                      item.llmConfiguration.miniModel !==
                                      undefined
                                        ? item.llmConfiguration.miniModel
                                        : undefined,
                                    normalModel:
                                      item.llmConfiguration.normalModel !==
                                      undefined
                                        ? item.llmConfiguration.normalModel
                                        : undefined,
                                    advancedModel:
                                      item.llmConfiguration.advancedModel !==
                                      undefined
                                        ? item.llmConfiguration.advancedModel
                                        : undefined,
                                    openaiApiKey:
                                      item.llmConfiguration.openaiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.openaiApiKey
                                        : undefined,
                                    anthropicApiKey:
                                      item.llmConfiguration.anthropicApiKey !==
                                      undefined
                                        ? item.llmConfiguration.anthropicApiKey
                                        : undefined,
                                    deepseekApiKey:
                                      item.llmConfiguration.deepseekApiKey !==
                                      undefined
                                        ? item.llmConfiguration.deepseekApiKey
                                        : undefined,
                                    kimiApiKey:
                                      item.llmConfiguration.kimiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.kimiApiKey
                                        : undefined,
                                    qwenApiKey:
                                      item.llmConfiguration.qwenApiKey !==
                                      undefined
                                        ? item.llmConfiguration.qwenApiKey
                                        : undefined,
                                    xaiApiKey:
                                      item.llmConfiguration.xaiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.xaiApiKey
                                        : undefined,
                                    geminiApiKey:
                                      item.llmConfiguration.geminiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.geminiApiKey
                                        : undefined,
                                  },
                                },
                              }
                          : undefined,
                      },
                    })),
                  }
              : undefined,
          },
          update: {
            authUserId:
              props.authUserId !== undefined
                ? {
                    set: props.authUserId,
                  }
                : undefined,
            name:
              props.name !== undefined
                ? {
                    set: props.name,
                  }
                : undefined,
            plan:
              props.plan !== undefined
                ? {
                    set: props.plan,
                  }
                : undefined,
            stripeCustomerId:
              props.stripeCustomerId !== undefined
                ? {
                    set: props.stripeCustomerId,
                  }
                : undefined,
            stripeSubscriptionId:
              props.stripeSubscriptionId !== undefined
                ? {
                    set: props.stripeSubscriptionId,
                  }
                : undefined,
            stripePriceId:
              props.stripePriceId !== undefined
                ? {
                    set: props.stripePriceId,
                  }
                : undefined,
            stripeCurrentPeriodEnd:
              props.stripeCurrentPeriodEnd !== undefined
                ? {
                    set: props.stripeCurrentPeriodEnd,
                  }
                : undefined,
            jurisdiction:
              props.jurisdiction !== undefined
                ? {
                    set: props.jurisdiction,
                  }
                : undefined,
            riskProfile:
              props.riskProfile !== undefined
                ? {
                    set: props.riskProfile,
                  }
                : undefined,
            amlStatus:
              props.amlStatus !== undefined
                ? {
                    set: props.amlStatus,
                  }
                : undefined,
            lastKycUpdate:
              props.lastKycUpdate !== undefined
                ? {
                    set: props.lastKycUpdate,
                  }
                : undefined,
            users: props.users
              ? Array.isArray(props.users) &&
                props.users.length > 0 &&
                props.users.every(
                  (item: any) =>
                    typeof item === 'object' &&
                    ('id' in item || 'symbol' in item) &&
                    Object.keys(item).length === 1
                )
                ? {
                    connect: props.users.map((item: any) => ({
                      id: item.id,
                    })),
                  }
                : {
                    upsert: props.users.map((item: any) => ({
                      where: {
                        id: item.id !== undefined ? item.id : undefined,
                        email:
                          item.email !== undefined ? item.email : undefined,
                        name:
                          item.name !== undefined
                            ? {
                                equals: item.name,
                              }
                            : undefined,
                        customerId:
                          item.customerId !== undefined
                            ? {
                                equals: item.customerId,
                              }
                            : undefined,
                      },
                      update: {
                        id:
                          item.id !== undefined
                            ? {
                                set: item.id,
                              }
                            : undefined,
                        name:
                          item.name !== undefined
                            ? {
                                set: item.name,
                              }
                            : undefined,
                        email:
                          item.email !== undefined
                            ? {
                                set: item.email,
                              }
                            : undefined,
                        emailVerified:
                          item.emailVerified !== undefined
                            ? {
                                set: item.emailVerified,
                              }
                            : undefined,
                        image:
                          item.image !== undefined
                            ? {
                                set: item.image,
                              }
                            : undefined,
                        deletedAt:
                          item.deletedAt !== undefined
                            ? {
                                set: item.deletedAt,
                              }
                            : undefined,
                        role:
                          item.role !== undefined
                            ? {
                                set: item.role,
                              }
                            : undefined,
                        bio:
                          item.bio !== undefined
                            ? {
                                set: item.bio,
                              }
                            : undefined,
                        jobTitle:
                          item.jobTitle !== undefined
                            ? {
                                set: item.jobTitle,
                              }
                            : undefined,
                        plan:
                          item.plan !== undefined
                            ? {
                                set: item.plan,
                              }
                            : undefined,
                        openaiAPIKey:
                          item.openaiAPIKey !== undefined
                            ? {
                                set: item.openaiAPIKey,
                              }
                            : undefined,
                        openaiModel:
                          item.openaiModel !== undefined
                            ? {
                                set: item.openaiModel,
                              }
                            : undefined,
                        passwordHash:
                          item.passwordHash !== undefined
                            ? {
                                set: item.passwordHash,
                              }
                            : undefined,
                        avatarUrl:
                          item.avatarUrl !== undefined
                            ? {
                                set: item.avatarUrl,
                              }
                            : undefined,
                        onboardingComplete:
                          item.onboardingComplete !== undefined
                            ? {
                                set: item.onboardingComplete,
                              }
                            : undefined,
                        signupCategory:
                          item.signupCategory !== undefined
                            ? {
                                set: item.signupCategory,
                              }
                            : undefined,
                        accounts: item.accounts
                          ? Array.isArray(item.accounts) &&
                            item.accounts.length > 0 &&
                            item.accounts.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.accounts.map((item: any) => ({
                                  id: item.id,
                                })),
                              }
                            : {
                                upsert: item.accounts.map((item: any) => ({
                                  where: {
                                    id:
                                      item.id !== undefined
                                        ? item.id
                                        : undefined,
                                    providerAccountId:
                                      item.providerAccountId !== undefined
                                        ? item.providerAccountId
                                        : undefined,
                                    userId:
                                      item.userId !== undefined
                                        ? {
                                            equals: item.userId,
                                          }
                                        : undefined,
                                  },
                                  update: {
                                    id:
                                      item.id !== undefined
                                        ? {
                                            set: item.id,
                                          }
                                        : undefined,
                                    type:
                                      item.type !== undefined
                                        ? {
                                            set: item.type,
                                          }
                                        : undefined,
                                    provider:
                                      item.provider !== undefined
                                        ? {
                                            set: item.provider,
                                          }
                                        : undefined,
                                    providerAccountId:
                                      item.providerAccountId !== undefined
                                        ? {
                                            set: item.providerAccountId,
                                          }
                                        : undefined,
                                    refresh_token:
                                      item.refresh_token !== undefined
                                        ? {
                                            set: item.refresh_token,
                                          }
                                        : undefined,
                                    access_token:
                                      item.access_token !== undefined
                                        ? {
                                            set: item.access_token,
                                          }
                                        : undefined,
                                    expires_at:
                                      item.expires_at !== undefined
                                        ? {
                                            set: item.expires_at,
                                          }
                                        : undefined,
                                    token_type:
                                      item.token_type !== undefined
                                        ? {
                                            set: item.token_type,
                                          }
                                        : undefined,
                                    scope:
                                      item.scope !== undefined
                                        ? {
                                            set: item.scope,
                                          }
                                        : undefined,
                                    id_token:
                                      item.id_token !== undefined
                                        ? {
                                            set: item.id_token,
                                          }
                                        : undefined,
                                    session_state:
                                      item.session_state !== undefined
                                        ? {
                                            set: item.session_state,
                                          }
                                        : undefined,
                                  },
                                  create: {
                                    type:
                                      item.type !== undefined
                                        ? item.type
                                        : undefined,
                                    provider:
                                      item.provider !== undefined
                                        ? item.provider
                                        : undefined,
                                    providerAccountId:
                                      item.providerAccountId !== undefined
                                        ? item.providerAccountId
                                        : undefined,
                                    refresh_token:
                                      item.refresh_token !== undefined
                                        ? item.refresh_token
                                        : undefined,
                                    access_token:
                                      item.access_token !== undefined
                                        ? item.access_token
                                        : undefined,
                                    expires_at:
                                      item.expires_at !== undefined
                                        ? item.expires_at
                                        : undefined,
                                    token_type:
                                      item.token_type !== undefined
                                        ? item.token_type
                                        : undefined,
                                    scope:
                                      item.scope !== undefined
                                        ? item.scope
                                        : undefined,
                                    id_token:
                                      item.id_token !== undefined
                                        ? item.id_token
                                        : undefined,
                                    session_state:
                                      item.session_state !== undefined
                                        ? item.session_state
                                        : undefined,
                                  },
                                })),
                              }
                          : undefined,
                        sessions: item.sessions
                          ? Array.isArray(item.sessions) &&
                            item.sessions.length > 0 &&
                            item.sessions.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.sessions.map((item: any) => ({
                                  id: item.id,
                                })),
                              }
                            : {
                                upsert: item.sessions.map((item: any) => ({
                                  where: {
                                    id:
                                      item.id !== undefined
                                        ? item.id
                                        : undefined,
                                    userId:
                                      item.userId !== undefined
                                        ? {
                                            equals: item.userId,
                                          }
                                        : undefined,
                                  },
                                  update: {
                                    id:
                                      item.id !== undefined
                                        ? {
                                            set: item.id,
                                          }
                                        : undefined,
                                    sessionToken:
                                      item.sessionToken !== undefined
                                        ? {
                                            set: item.sessionToken,
                                          }
                                        : undefined,
                                    expires:
                                      item.expires !== undefined
                                        ? {
                                            set: item.expires,
                                          }
                                        : undefined,
                                  },
                                  create: {
                                    sessionToken:
                                      item.sessionToken !== undefined
                                        ? item.sessionToken
                                        : undefined,
                                    expires:
                                      item.expires !== undefined
                                        ? item.expires
                                        : undefined,
                                  },
                                })),
                              }
                          : undefined,
                        authenticators: item.authenticators
                          ? Array.isArray(item.authenticators) &&
                            item.authenticators.length > 0 &&
                            item.authenticators.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.authenticators.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.authenticators.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      credentialID:
                                        item.credentialID !== undefined
                                          ? {
                                              set: item.credentialID,
                                            }
                                          : undefined,
                                      publicKey:
                                        item.publicKey !== undefined
                                          ? {
                                              set: item.publicKey,
                                            }
                                          : undefined,
                                      counter:
                                        item.counter !== undefined
                                          ? {
                                              set: item.counter,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      credentialID:
                                        item.credentialID !== undefined
                                          ? item.credentialID
                                          : undefined,
                                      publicKey:
                                        item.publicKey !== undefined
                                          ? item.publicKey
                                          : undefined,
                                      counter:
                                        item.counter !== undefined
                                          ? item.counter
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        orgMemberships: item.orgMemberships
                          ? Array.isArray(item.orgMemberships) &&
                            item.orgMemberships.length > 0 &&
                            item.orgMemberships.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.orgMemberships.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.orgMemberships.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      organizationId:
                                        item.organizationId !== undefined
                                          ? {
                                              equals: item.organizationId,
                                            }
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      role:
                                        item.role !== undefined
                                          ? {
                                              set: item.role,
                                            }
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      organization: item.organization
                                        ? typeof item.organization ===
                                            'object' &&
                                          Object.keys(item.organization)
                                            .length === 1 &&
                                          (Object.keys(item.organization)[0] ===
                                            'id' ||
                                            Object.keys(
                                              item.organization
                                            )[0] === 'symbol')
                                          ? {
                                              connect: {
                                                id: item.organization.id,
                                              },
                                            }
                                          : {
                                              upsert: {
                                                where: {
                                                  id:
                                                    item.organization.id !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .id,
                                                        }
                                                      : undefined,
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .slug,
                                                        }
                                                      : undefined,
                                                },
                                                update: {
                                                  id:
                                                    item.organization.id !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .id,
                                                        }
                                                      : undefined,
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .slug,
                                                        }
                                                      : undefined,
                                                  logoUrl:
                                                    item.organization
                                                      .logoUrl !== undefined
                                                      ? {
                                                          set: item.organization
                                                            .logoUrl,
                                                        }
                                                      : undefined,
                                                  website:
                                                    item.organization
                                                      .website !== undefined
                                                      ? {
                                                          set: item.organization
                                                            .website,
                                                        }
                                                      : undefined,
                                                  businessType:
                                                    item.organization
                                                      .businessType !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .businessType,
                                                        }
                                                      : undefined,
                                                  jurisdiction:
                                                    item.organization
                                                      .jurisdiction !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .jurisdiction,
                                                        }
                                                      : undefined,
                                                  regulatoryStatus:
                                                    item.organization
                                                      .regulatoryStatus !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .regulatoryStatus,
                                                        }
                                                      : undefined,
                                                  description:
                                                    item.organization
                                                      .description !== undefined
                                                      ? {
                                                          set: item.organization
                                                            .description,
                                                        }
                                                      : undefined,
                                                  tradingDefaults:
                                                    item.organization
                                                      .tradingDefaults !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .tradingDefaults,
                                                        }
                                                      : undefined,
                                                  llmDefaults:
                                                    item.organization
                                                      .llmDefaults !== undefined
                                                      ? {
                                                          set: item.organization
                                                            .llmDefaults,
                                                        }
                                                      : undefined,
                                                  deletedAt:
                                                    item.organization
                                                      .deletedAt !== undefined
                                                      ? {
                                                          set: item.organization
                                                            .deletedAt,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? item.organization.name
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  logoUrl:
                                                    item.organization
                                                      .logoUrl !== undefined
                                                      ? item.organization
                                                          .logoUrl
                                                      : undefined,
                                                  website:
                                                    item.organization
                                                      .website !== undefined
                                                      ? item.organization
                                                          .website
                                                      : undefined,
                                                  businessType:
                                                    item.organization
                                                      .businessType !==
                                                    undefined
                                                      ? item.organization
                                                          .businessType
                                                      : undefined,
                                                  jurisdiction:
                                                    item.organization
                                                      .jurisdiction !==
                                                    undefined
                                                      ? item.organization
                                                          .jurisdiction
                                                      : undefined,
                                                  regulatoryStatus:
                                                    item.organization
                                                      .regulatoryStatus !==
                                                    undefined
                                                      ? item.organization
                                                          .regulatoryStatus
                                                      : undefined,
                                                  description:
                                                    item.organization
                                                      .description !== undefined
                                                      ? item.organization
                                                          .description
                                                      : undefined,
                                                  tradingDefaults:
                                                    item.organization
                                                      .tradingDefaults !==
                                                    undefined
                                                      ? item.organization
                                                          .tradingDefaults
                                                      : undefined,
                                                  llmDefaults:
                                                    item.organization
                                                      .llmDefaults !== undefined
                                                      ? item.organization
                                                          .llmDefaults
                                                      : undefined,
                                                  deletedAt:
                                                    item.organization
                                                      .deletedAt !== undefined
                                                      ? item.organization
                                                          .deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      organization: item.organization
                                        ? typeof item.organization ===
                                            'object' &&
                                          Object.keys(item.organization)
                                            .length === 1 &&
                                          Object.keys(item.organization)[0] ===
                                            'id'
                                          ? {
                                              connect: {
                                                id: item.organization.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.organization.id !==
                                                    undefined
                                                      ? item.organization.id
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .name,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? item.organization.name
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  logoUrl:
                                                    item.organization
                                                      .logoUrl !== undefined
                                                      ? item.organization
                                                          .logoUrl
                                                      : undefined,
                                                  website:
                                                    item.organization
                                                      .website !== undefined
                                                      ? item.organization
                                                          .website
                                                      : undefined,
                                                  businessType:
                                                    item.organization
                                                      .businessType !==
                                                    undefined
                                                      ? item.organization
                                                          .businessType
                                                      : undefined,
                                                  jurisdiction:
                                                    item.organization
                                                      .jurisdiction !==
                                                    undefined
                                                      ? item.organization
                                                          .jurisdiction
                                                      : undefined,
                                                  regulatoryStatus:
                                                    item.organization
                                                      .regulatoryStatus !==
                                                    undefined
                                                      ? item.organization
                                                          .regulatoryStatus
                                                      : undefined,
                                                  description:
                                                    item.organization
                                                      .description !== undefined
                                                      ? item.organization
                                                          .description
                                                      : undefined,
                                                  tradingDefaults:
                                                    item.organization
                                                      .tradingDefaults !==
                                                    undefined
                                                      ? item.organization
                                                          .tradingDefaults
                                                      : undefined,
                                                  llmDefaults:
                                                    item.organization
                                                      .llmDefaults !== undefined
                                                      ? item.organization
                                                          .llmDefaults
                                                      : undefined,
                                                  deletedAt:
                                                    item.organization
                                                      .deletedAt !== undefined
                                                      ? item.organization
                                                          .deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        fundAssignments: item.fundAssignments
                          ? Array.isArray(item.fundAssignments) &&
                            item.fundAssignments.length > 0 &&
                            item.fundAssignments.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.fundAssignments.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.fundAssignments.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      fundId:
                                        item.fundId !== undefined
                                          ? {
                                              equals: item.fundId,
                                            }
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      role:
                                        item.role !== undefined
                                          ? {
                                              set: item.role,
                                            }
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      fund: item.fund
                                        ? typeof item.fund === 'object' &&
                                          Object.keys(item.fund).length === 1 &&
                                          (Object.keys(item.fund)[0] === 'id' ||
                                            Object.keys(item.fund)[0] ===
                                              'symbol')
                                          ? {
                                              connect: {
                                                id: item.fund.id,
                                              },
                                            }
                                          : {
                                              upsert: {
                                                where: {
                                                  id:
                                                    item.fund.id !== undefined
                                                      ? {
                                                          equals: item.fund.id,
                                                        }
                                                      : undefined,
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.slug,
                                                        }
                                                      : undefined,
                                                  organizationId:
                                                    item.fund.organizationId !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.fund
                                                              .organizationId,
                                                        }
                                                      : undefined,
                                                },
                                                update: {
                                                  id:
                                                    item.fund.id !== undefined
                                                      ? {
                                                          set: item.fund.id,
                                                        }
                                                      : undefined,
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? {
                                                          set: item.fund.name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? {
                                                          set: item.fund.slug,
                                                        }
                                                      : undefined,
                                                  description:
                                                    item.fund.description !==
                                                    undefined
                                                      ? {
                                                          set: item.fund
                                                            .description,
                                                        }
                                                      : undefined,
                                                  status:
                                                    item.fund.status !==
                                                    undefined
                                                      ? {
                                                          set: item.fund.status,
                                                        }
                                                      : undefined,
                                                  tradingOverrides:
                                                    item.fund
                                                      .tradingOverrides !==
                                                    undefined
                                                      ? {
                                                          set: item.fund
                                                            .tradingOverrides,
                                                        }
                                                      : undefined,
                                                  llmOverrides:
                                                    item.fund.llmOverrides !==
                                                    undefined
                                                      ? {
                                                          set: item.fund
                                                            .llmOverrides,
                                                        }
                                                      : undefined,
                                                  policyOverlays:
                                                    item.fund.policyOverlays !==
                                                    undefined
                                                      ? {
                                                          set: item.fund
                                                            .policyOverlays,
                                                        }
                                                      : undefined,
                                                  deletedAt:
                                                    item.fund.deletedAt !==
                                                    undefined
                                                      ? {
                                                          set: item.fund
                                                            .deletedAt,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? item.fund.name
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? item.fund.slug
                                                      : undefined,
                                                  description:
                                                    item.fund.description !==
                                                    undefined
                                                      ? item.fund.description
                                                      : undefined,
                                                  status:
                                                    item.fund.status !==
                                                    undefined
                                                      ? item.fund.status
                                                      : undefined,
                                                  tradingOverrides:
                                                    item.fund
                                                      .tradingOverrides !==
                                                    undefined
                                                      ? item.fund
                                                          .tradingOverrides
                                                      : undefined,
                                                  llmOverrides:
                                                    item.fund.llmOverrides !==
                                                    undefined
                                                      ? item.fund.llmOverrides
                                                      : undefined,
                                                  policyOverlays:
                                                    item.fund.policyOverlays !==
                                                    undefined
                                                      ? item.fund.policyOverlays
                                                      : undefined,
                                                  deletedAt:
                                                    item.fund.deletedAt !==
                                                    undefined
                                                      ? item.fund.deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      fund: item.fund
                                        ? typeof item.fund === 'object' &&
                                          Object.keys(item.fund).length === 1 &&
                                          Object.keys(item.fund)[0] === 'id'
                                          ? {
                                              connect: {
                                                id: item.fund.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.fund.id !== undefined
                                                      ? item.fund.id
                                                      : undefined,
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.slug,
                                                        }
                                                      : undefined,
                                                  organizationId:
                                                    item.fund.organizationId !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.fund
                                                              .organizationId,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? item.fund.name
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? item.fund.slug
                                                      : undefined,
                                                  description:
                                                    item.fund.description !==
                                                    undefined
                                                      ? item.fund.description
                                                      : undefined,
                                                  status:
                                                    item.fund.status !==
                                                    undefined
                                                      ? item.fund.status
                                                      : undefined,
                                                  tradingOverrides:
                                                    item.fund
                                                      .tradingOverrides !==
                                                    undefined
                                                      ? item.fund
                                                          .tradingOverrides
                                                      : undefined,
                                                  llmOverrides:
                                                    item.fund.llmOverrides !==
                                                    undefined
                                                      ? item.fund.llmOverrides
                                                      : undefined,
                                                  policyOverlays:
                                                    item.fund.policyOverlays !==
                                                    undefined
                                                      ? item.fund.policyOverlays
                                                      : undefined,
                                                  deletedAt:
                                                    item.fund.deletedAt !==
                                                    undefined
                                                      ? item.fund.deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        investorProfile: item.investorProfile
                          ? typeof item.investorProfile === 'object' &&
                            Object.keys(item.investorProfile).length === 1 &&
                            (Object.keys(item.investorProfile)[0] === 'id' ||
                              Object.keys(item.investorProfile)[0] === 'symbol')
                            ? {
                                connect: {
                                  id: item.investorProfile.id,
                                },
                              }
                            : {
                                upsert: {
                                  where: {
                                    id:
                                      item.investorProfile.id !== undefined
                                        ? {
                                            equals: item.investorProfile.id,
                                          }
                                        : undefined,
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? {
                                            equals: item.investorProfile.name,
                                          }
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? {
                                            equals: item.investorProfile.email,
                                          }
                                        : undefined,
                                    userId:
                                      item.investorProfile.userId !== undefined
                                        ? {
                                            equals: item.investorProfile.userId,
                                          }
                                        : undefined,
                                  },
                                  update: {
                                    id:
                                      item.investorProfile.id !== undefined
                                        ? {
                                            set: item.investorProfile.id,
                                          }
                                        : undefined,
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? {
                                            set: item.investorProfile.name,
                                          }
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? {
                                            set: item.investorProfile.email,
                                          }
                                        : undefined,
                                    type:
                                      item.investorProfile.type !== undefined
                                        ? {
                                            set: item.investorProfile.type,
                                          }
                                        : undefined,
                                    kycStatus:
                                      item.investorProfile.kycStatus !==
                                      undefined
                                        ? {
                                            set: item.investorProfile.kycStatus,
                                          }
                                        : undefined,
                                    walletAddress:
                                      item.investorProfile.walletAddress !==
                                      undefined
                                        ? {
                                            set: item.investorProfile
                                              .walletAddress,
                                          }
                                        : undefined,
                                    deletedAt:
                                      item.investorProfile.deletedAt !==
                                      undefined
                                        ? {
                                            set: item.investorProfile.deletedAt,
                                          }
                                        : undefined,
                                    investments: item.investorProfile
                                      .investments
                                      ? Array.isArray(
                                          item.investorProfile.investments
                                        ) &&
                                        item.investorProfile.investments
                                          .length > 0 &&
                                        item.investorProfile.investments.every(
                                          (item: any) =>
                                            typeof item === 'object' &&
                                            ('id' in item ||
                                              'symbol' in item) &&
                                            Object.keys(item).length === 1
                                        )
                                        ? {
                                            connect:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  id: item.id,
                                                })
                                              ),
                                          }
                                        : {
                                            upsert:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  where: {
                                                    id:
                                                      item.id !== undefined
                                                        ? item.id
                                                        : undefined,
                                                    fundId:
                                                      item.fundId !== undefined
                                                        ? {
                                                            equals: item.fundId,
                                                          }
                                                        : undefined,
                                                    investorId:
                                                      item.investorId !==
                                                      undefined
                                                        ? {
                                                            equals:
                                                              item.investorId,
                                                          }
                                                        : undefined,
                                                  },
                                                  update: {
                                                    id:
                                                      item.id !== undefined
                                                        ? {
                                                            set: item.id,
                                                          }
                                                        : undefined,
                                                    units:
                                                      item.units !== undefined
                                                        ? {
                                                            set: item.units,
                                                          }
                                                        : undefined,
                                                    investedAt:
                                                      item.investedAt !==
                                                      undefined
                                                        ? {
                                                            set: item.investedAt,
                                                          }
                                                        : undefined,
                                                    status:
                                                      item.status !== undefined
                                                        ? {
                                                            set: item.status,
                                                          }
                                                        : undefined,
                                                  },
                                                  create: {
                                                    units:
                                                      item.units !== undefined
                                                        ? item.units
                                                        : undefined,
                                                    investedAt:
                                                      item.investedAt !==
                                                      undefined
                                                        ? item.investedAt
                                                        : undefined,
                                                    status:
                                                      item.status !== undefined
                                                        ? item.status
                                                        : undefined,
                                                  },
                                                })
                                              ),
                                          }
                                      : undefined,
                                  },
                                  create: {
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? item.investorProfile.name
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? item.investorProfile.email
                                        : undefined,
                                    type:
                                      item.investorProfile.type !== undefined
                                        ? item.investorProfile.type
                                        : undefined,
                                    kycStatus:
                                      item.investorProfile.kycStatus !==
                                      undefined
                                        ? item.investorProfile.kycStatus
                                        : undefined,
                                    walletAddress:
                                      item.investorProfile.walletAddress !==
                                      undefined
                                        ? item.investorProfile.walletAddress
                                        : undefined,
                                    deletedAt:
                                      item.investorProfile.deletedAt !==
                                      undefined
                                        ? item.investorProfile.deletedAt
                                        : undefined,
                                    investments: item.investorProfile
                                      .investments
                                      ? Array.isArray(
                                          item.investorProfile.investments
                                        ) &&
                                        item.investorProfile.investments
                                          .length > 0 &&
                                        item.investorProfile.investments.every(
                                          (item: any) =>
                                            typeof item === 'object' &&
                                            'id' in item &&
                                            Object.keys(item).length === 1
                                        )
                                        ? {
                                            connect:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  id: item.id,
                                                })
                                              ),
                                          }
                                        : {
                                            connectOrCreate:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  where: {
                                                    id:
                                                      item.id !== undefined
                                                        ? item.id
                                                        : undefined,
                                                    fundId:
                                                      item.fundId !== undefined
                                                        ? {
                                                            equals: item.fundId,
                                                          }
                                                        : undefined,
                                                    investorId:
                                                      item.investorId !==
                                                      undefined
                                                        ? {
                                                            equals:
                                                              item.investorId,
                                                          }
                                                        : undefined,
                                                  },
                                                  create: {
                                                    units:
                                                      item.units !== undefined
                                                        ? item.units
                                                        : undefined,
                                                    investedAt:
                                                      item.investedAt !==
                                                      undefined
                                                        ? item.investedAt
                                                        : undefined,
                                                    status:
                                                      item.status !== undefined
                                                        ? item.status
                                                        : undefined,
                                                  },
                                                })
                                              ),
                                          }
                                      : undefined,
                                  },
                                },
                              }
                          : undefined,
                        linkedProviders: item.linkedProviders
                          ? Array.isArray(item.linkedProviders) &&
                            item.linkedProviders.length > 0 &&
                            item.linkedProviders.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.linkedProviders.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.linkedProviders.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              equals: item.providerAccountId,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              equals: item.email,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      provider:
                                        item.provider !== undefined
                                          ? {
                                              set: item.provider,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              set: item.providerAccountId,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              set: item.email,
                                            }
                                          : undefined,
                                      accessToken:
                                        item.accessToken !== undefined
                                          ? {
                                              set: item.accessToken,
                                            }
                                          : undefined,
                                      refreshToken:
                                        item.refreshToken !== undefined
                                          ? {
                                              set: item.refreshToken,
                                            }
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? {
                                              set: item.expiresAt,
                                            }
                                          : undefined,
                                      linkedAt:
                                        item.linkedAt !== undefined
                                          ? {
                                              set: item.linkedAt,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      provider:
                                        item.provider !== undefined
                                          ? item.provider
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      accessToken:
                                        item.accessToken !== undefined
                                          ? item.accessToken
                                          : undefined,
                                      refreshToken:
                                        item.refreshToken !== undefined
                                          ? item.refreshToken
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? item.expiresAt
                                          : undefined,
                                      linkedAt:
                                        item.linkedAt !== undefined
                                          ? item.linkedAt
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        accountLinkingRequests: item.accountLinkingRequests
                          ? Array.isArray(item.accountLinkingRequests) &&
                            item.accountLinkingRequests.length > 0 &&
                            item.accountLinkingRequests.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.accountLinkingRequests.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.accountLinkingRequests.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              equals: item.email,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              equals: item.providerAccountId,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              set: item.email,
                                            }
                                          : undefined,
                                      provider:
                                        item.provider !== undefined
                                          ? {
                                              set: item.provider,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              set: item.providerAccountId,
                                            }
                                          : undefined,
                                      status:
                                        item.status !== undefined
                                          ? {
                                              set: item.status,
                                            }
                                          : undefined,
                                      verificationToken:
                                        item.verificationToken !== undefined
                                          ? {
                                              set: item.verificationToken,
                                            }
                                          : undefined,
                                      userAgent:
                                        item.userAgent !== undefined
                                          ? {
                                              set: item.userAgent,
                                            }
                                          : undefined,
                                      ipAddress:
                                        item.ipAddress !== undefined
                                          ? {
                                              set: item.ipAddress,
                                            }
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? {
                                              set: item.expiresAt,
                                            }
                                          : undefined,
                                      verifiedAt:
                                        item.verifiedAt !== undefined
                                          ? {
                                              set: item.verifiedAt,
                                            }
                                          : undefined,
                                      approvedAt:
                                        item.approvedAt !== undefined
                                          ? {
                                              set: item.approvedAt,
                                            }
                                          : undefined,
                                      rejectedAt:
                                        item.rejectedAt !== undefined
                                          ? {
                                              set: item.rejectedAt,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      provider:
                                        item.provider !== undefined
                                          ? item.provider
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      status:
                                        item.status !== undefined
                                          ? item.status
                                          : undefined,
                                      verificationToken:
                                        item.verificationToken !== undefined
                                          ? item.verificationToken
                                          : undefined,
                                      userAgent:
                                        item.userAgent !== undefined
                                          ? item.userAgent
                                          : undefined,
                                      ipAddress:
                                        item.ipAddress !== undefined
                                          ? item.ipAddress
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? item.expiresAt
                                          : undefined,
                                      verifiedAt:
                                        item.verifiedAt !== undefined
                                          ? item.verifiedAt
                                          : undefined,
                                      approvedAt:
                                        item.approvedAt !== undefined
                                          ? item.approvedAt
                                          : undefined,
                                      rejectedAt:
                                        item.rejectedAt !== undefined
                                          ? item.rejectedAt
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        reviewedWaitlistEntries: item.reviewedWaitlistEntries
                          ? Array.isArray(item.reviewedWaitlistEntries) &&
                            item.reviewedWaitlistEntries.length > 0 &&
                            item.reviewedWaitlistEntries.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.reviewedWaitlistEntries.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.reviewedWaitlistEntries.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      reviewedById:
                                        item.reviewedById !== undefined
                                          ? {
                                              equals: item.reviewedById,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              set: item.email,
                                            }
                                          : undefined,
                                      fullName:
                                        item.fullName !== undefined
                                          ? {
                                              set: item.fullName,
                                            }
                                          : undefined,
                                      companyName:
                                        item.companyName !== undefined
                                          ? {
                                              set: item.companyName,
                                            }
                                          : undefined,
                                      companyWebsite:
                                        item.companyWebsite !== undefined
                                          ? {
                                              set: item.companyWebsite,
                                            }
                                          : undefined,
                                      jobRole:
                                        item.jobRole !== undefined
                                          ? {
                                              set: item.jobRole,
                                            }
                                          : undefined,
                                      professionalInvestorConfirmed:
                                        item.professionalInvestorConfirmed !==
                                        undefined
                                          ? {
                                              set: item.professionalInvestorConfirmed,
                                            }
                                          : undefined,
                                      status:
                                        item.status !== undefined
                                          ? {
                                              set: item.status,
                                            }
                                          : undefined,
                                      queuePosition:
                                        item.queuePosition !== undefined
                                          ? {
                                              set: item.queuePosition,
                                            }
                                          : undefined,
                                      reviewedAt:
                                        item.reviewedAt !== undefined
                                          ? {
                                              set: item.reviewedAt,
                                            }
                                          : undefined,
                                      inviteToken: item.inviteToken
                                        ? typeof item.inviteToken ===
                                            'object' &&
                                          Object.keys(item.inviteToken)
                                            .length === 1 &&
                                          (Object.keys(item.inviteToken)[0] ===
                                            'id' ||
                                            Object.keys(item.inviteToken)[0] ===
                                              'symbol')
                                          ? {
                                              connect: {
                                                id: item.inviteToken.id,
                                              },
                                            }
                                          : {
                                              upsert: {
                                                where: {
                                                  id:
                                                    item.inviteToken.id !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.inviteToken.id,
                                                        }
                                                      : undefined,
                                                  email:
                                                    item.inviteToken.email !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.inviteToken
                                                              .email,
                                                        }
                                                      : undefined,
                                                  waitlistEntryId:
                                                    item.inviteToken
                                                      .waitlistEntryId !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.inviteToken
                                                              .waitlistEntryId,
                                                        }
                                                      : undefined,
                                                },
                                                update: {
                                                  id:
                                                    item.inviteToken.id !==
                                                    undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .id,
                                                        }
                                                      : undefined,
                                                  token:
                                                    item.inviteToken.token !==
                                                    undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .token,
                                                        }
                                                      : undefined,
                                                  email:
                                                    item.inviteToken.email !==
                                                    undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .email,
                                                        }
                                                      : undefined,
                                                  used:
                                                    item.inviteToken.used !==
                                                    undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .used,
                                                        }
                                                      : undefined,
                                                  usedAt:
                                                    item.inviteToken.usedAt !==
                                                    undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .usedAt,
                                                        }
                                                      : undefined,
                                                  expiresAt:
                                                    item.inviteToken
                                                      .expiresAt !== undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .expiresAt,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  token:
                                                    item.inviteToken.token !==
                                                    undefined
                                                      ? item.inviteToken.token
                                                      : undefined,
                                                  email:
                                                    item.inviteToken.email !==
                                                    undefined
                                                      ? item.inviteToken.email
                                                      : undefined,
                                                  used:
                                                    item.inviteToken.used !==
                                                    undefined
                                                      ? item.inviteToken.used
                                                      : undefined,
                                                  usedAt:
                                                    item.inviteToken.usedAt !==
                                                    undefined
                                                      ? item.inviteToken.usedAt
                                                      : undefined,
                                                  expiresAt:
                                                    item.inviteToken
                                                      .expiresAt !== undefined
                                                      ? item.inviteToken
                                                          .expiresAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                    create: {
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      fullName:
                                        item.fullName !== undefined
                                          ? item.fullName
                                          : undefined,
                                      companyName:
                                        item.companyName !== undefined
                                          ? item.companyName
                                          : undefined,
                                      companyWebsite:
                                        item.companyWebsite !== undefined
                                          ? item.companyWebsite
                                          : undefined,
                                      jobRole:
                                        item.jobRole !== undefined
                                          ? item.jobRole
                                          : undefined,
                                      professionalInvestorConfirmed:
                                        item.professionalInvestorConfirmed !==
                                        undefined
                                          ? item.professionalInvestorConfirmed
                                          : undefined,
                                      status:
                                        item.status !== undefined
                                          ? item.status
                                          : undefined,
                                      queuePosition:
                                        item.queuePosition !== undefined
                                          ? item.queuePosition
                                          : undefined,
                                      reviewedAt:
                                        item.reviewedAt !== undefined
                                          ? item.reviewedAt
                                          : undefined,
                                      inviteToken: item.inviteToken
                                        ? typeof item.inviteToken ===
                                            'object' &&
                                          Object.keys(item.inviteToken)
                                            .length === 1 &&
                                          Object.keys(item.inviteToken)[0] ===
                                            'id'
                                          ? {
                                              connect: {
                                                id: item.inviteToken.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.inviteToken.id !==
                                                    undefined
                                                      ? item.inviteToken.id
                                                      : undefined,
                                                  waitlistEntryId:
                                                    item.inviteToken
                                                      .waitlistEntryId !==
                                                    undefined
                                                      ? item.inviteToken
                                                          .waitlistEntryId
                                                      : undefined,
                                                  email:
                                                    item.inviteToken.email !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.inviteToken
                                                              .email,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  token:
                                                    item.inviteToken.token !==
                                                    undefined
                                                      ? item.inviteToken.token
                                                      : undefined,
                                                  email:
                                                    item.inviteToken.email !==
                                                    undefined
                                                      ? item.inviteToken.email
                                                      : undefined,
                                                  used:
                                                    item.inviteToken.used !==
                                                    undefined
                                                      ? item.inviteToken.used
                                                      : undefined,
                                                  usedAt:
                                                    item.inviteToken.usedAt !==
                                                    undefined
                                                      ? item.inviteToken.usedAt
                                                      : undefined,
                                                  expiresAt:
                                                    item.inviteToken
                                                      .expiresAt !== undefined
                                                      ? item.inviteToken
                                                          .expiresAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        dashboardLayouts: item.dashboardLayouts
                          ? Array.isArray(item.dashboardLayouts) &&
                            item.dashboardLayouts.length > 0 &&
                            item.dashboardLayouts.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.dashboardLayouts.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.dashboardLayouts.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      role:
                                        item.role !== undefined
                                          ? {
                                              set: item.role,
                                            }
                                          : undefined,
                                      layout:
                                        item.layout !== undefined
                                          ? {
                                              set: item.layout,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      layout:
                                        item.layout !== undefined
                                          ? item.layout
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        llmConfiguration: item.llmConfiguration
                          ? typeof item.llmConfiguration === 'object' &&
                            Object.keys(item.llmConfiguration).length === 1 &&
                            (Object.keys(item.llmConfiguration)[0] === 'id' ||
                              Object.keys(item.llmConfiguration)[0] ===
                                'symbol')
                            ? {
                                connect: {
                                  id: item.llmConfiguration.id,
                                },
                              }
                            : {
                                upsert: {
                                  where: {
                                    id:
                                      item.llmConfiguration.id !== undefined
                                        ? {
                                            equals: item.llmConfiguration.id,
                                          }
                                        : undefined,
                                    userId:
                                      item.llmConfiguration.userId !== undefined
                                        ? {
                                            equals:
                                              item.llmConfiguration.userId,
                                          }
                                        : undefined,
                                  },
                                  update: {
                                    id:
                                      item.llmConfiguration.id !== undefined
                                        ? {
                                            set: item.llmConfiguration.id,
                                          }
                                        : undefined,
                                    defaultProvider:
                                      item.llmConfiguration.defaultProvider !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .defaultProvider,
                                          }
                                        : undefined,
                                    miniProvider:
                                      item.llmConfiguration.miniProvider !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .miniProvider,
                                          }
                                        : undefined,
                                    normalProvider:
                                      item.llmConfiguration.normalProvider !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .normalProvider,
                                          }
                                        : undefined,
                                    advancedProvider:
                                      item.llmConfiguration.advancedProvider !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .advancedProvider,
                                          }
                                        : undefined,
                                    miniModel:
                                      item.llmConfiguration.miniModel !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .miniModel,
                                          }
                                        : undefined,
                                    normalModel:
                                      item.llmConfiguration.normalModel !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .normalModel,
                                          }
                                        : undefined,
                                    advancedModel:
                                      item.llmConfiguration.advancedModel !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .advancedModel,
                                          }
                                        : undefined,
                                    openaiApiKey:
                                      item.llmConfiguration.openaiApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .openaiApiKey,
                                          }
                                        : undefined,
                                    anthropicApiKey:
                                      item.llmConfiguration.anthropicApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .anthropicApiKey,
                                          }
                                        : undefined,
                                    deepseekApiKey:
                                      item.llmConfiguration.deepseekApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .deepseekApiKey,
                                          }
                                        : undefined,
                                    kimiApiKey:
                                      item.llmConfiguration.kimiApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .kimiApiKey,
                                          }
                                        : undefined,
                                    qwenApiKey:
                                      item.llmConfiguration.qwenApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .qwenApiKey,
                                          }
                                        : undefined,
                                    xaiApiKey:
                                      item.llmConfiguration.xaiApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .xaiApiKey,
                                          }
                                        : undefined,
                                    geminiApiKey:
                                      item.llmConfiguration.geminiApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .geminiApiKey,
                                          }
                                        : undefined,
                                  },
                                  create: {
                                    defaultProvider:
                                      item.llmConfiguration.defaultProvider !==
                                      undefined
                                        ? item.llmConfiguration.defaultProvider
                                        : undefined,
                                    miniProvider:
                                      item.llmConfiguration.miniProvider !==
                                      undefined
                                        ? item.llmConfiguration.miniProvider
                                        : undefined,
                                    normalProvider:
                                      item.llmConfiguration.normalProvider !==
                                      undefined
                                        ? item.llmConfiguration.normalProvider
                                        : undefined,
                                    advancedProvider:
                                      item.llmConfiguration.advancedProvider !==
                                      undefined
                                        ? item.llmConfiguration.advancedProvider
                                        : undefined,
                                    miniModel:
                                      item.llmConfiguration.miniModel !==
                                      undefined
                                        ? item.llmConfiguration.miniModel
                                        : undefined,
                                    normalModel:
                                      item.llmConfiguration.normalModel !==
                                      undefined
                                        ? item.llmConfiguration.normalModel
                                        : undefined,
                                    advancedModel:
                                      item.llmConfiguration.advancedModel !==
                                      undefined
                                        ? item.llmConfiguration.advancedModel
                                        : undefined,
                                    openaiApiKey:
                                      item.llmConfiguration.openaiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.openaiApiKey
                                        : undefined,
                                    anthropicApiKey:
                                      item.llmConfiguration.anthropicApiKey !==
                                      undefined
                                        ? item.llmConfiguration.anthropicApiKey
                                        : undefined,
                                    deepseekApiKey:
                                      item.llmConfiguration.deepseekApiKey !==
                                      undefined
                                        ? item.llmConfiguration.deepseekApiKey
                                        : undefined,
                                    kimiApiKey:
                                      item.llmConfiguration.kimiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.kimiApiKey
                                        : undefined,
                                    qwenApiKey:
                                      item.llmConfiguration.qwenApiKey !==
                                      undefined
                                        ? item.llmConfiguration.qwenApiKey
                                        : undefined,
                                    xaiApiKey:
                                      item.llmConfiguration.xaiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.xaiApiKey
                                        : undefined,
                                    geminiApiKey:
                                      item.llmConfiguration.geminiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.geminiApiKey
                                        : undefined,
                                  },
                                },
                              }
                          : undefined,
                      },
                      create: {
                        name: item.name !== undefined ? item.name : undefined,
                        email:
                          item.email !== undefined ? item.email : undefined,
                        emailVerified:
                          item.emailVerified !== undefined
                            ? item.emailVerified
                            : undefined,
                        image:
                          item.image !== undefined ? item.image : undefined,
                        deletedAt:
                          item.deletedAt !== undefined
                            ? item.deletedAt
                            : undefined,
                        role: item.role !== undefined ? item.role : undefined,
                        bio: item.bio !== undefined ? item.bio : undefined,
                        jobTitle:
                          item.jobTitle !== undefined
                            ? item.jobTitle
                            : undefined,
                        plan: item.plan !== undefined ? item.plan : undefined,
                        openaiAPIKey:
                          item.openaiAPIKey !== undefined
                            ? item.openaiAPIKey
                            : undefined,
                        openaiModel:
                          item.openaiModel !== undefined
                            ? item.openaiModel
                            : undefined,
                        passwordHash:
                          item.passwordHash !== undefined
                            ? item.passwordHash
                            : undefined,
                        avatarUrl:
                          item.avatarUrl !== undefined
                            ? item.avatarUrl
                            : undefined,
                        onboardingComplete:
                          item.onboardingComplete !== undefined
                            ? item.onboardingComplete
                            : undefined,
                        signupCategory:
                          item.signupCategory !== undefined
                            ? item.signupCategory
                            : undefined,
                        accounts: item.accounts
                          ? Array.isArray(item.accounts) &&
                            item.accounts.length > 0 &&
                            item.accounts.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.accounts.map((item: any) => ({
                                  id: item.id,
                                })),
                              }
                            : {
                                connectOrCreate: item.accounts.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      type:
                                        item.type !== undefined
                                          ? item.type
                                          : undefined,
                                      provider:
                                        item.provider !== undefined
                                          ? item.provider
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      refresh_token:
                                        item.refresh_token !== undefined
                                          ? item.refresh_token
                                          : undefined,
                                      access_token:
                                        item.access_token !== undefined
                                          ? item.access_token
                                          : undefined,
                                      expires_at:
                                        item.expires_at !== undefined
                                          ? item.expires_at
                                          : undefined,
                                      token_type:
                                        item.token_type !== undefined
                                          ? item.token_type
                                          : undefined,
                                      scope:
                                        item.scope !== undefined
                                          ? item.scope
                                          : undefined,
                                      id_token:
                                        item.id_token !== undefined
                                          ? item.id_token
                                          : undefined,
                                      session_state:
                                        item.session_state !== undefined
                                          ? item.session_state
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        sessions: item.sessions
                          ? Array.isArray(item.sessions) &&
                            item.sessions.length > 0 &&
                            item.sessions.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.sessions.map((item: any) => ({
                                  id: item.id,
                                })),
                              }
                            : {
                                connectOrCreate: item.sessions.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      sessionToken:
                                        item.sessionToken !== undefined
                                          ? item.sessionToken
                                          : undefined,
                                      expires:
                                        item.expires !== undefined
                                          ? item.expires
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        authenticators: item.authenticators
                          ? Array.isArray(item.authenticators) &&
                            item.authenticators.length > 0 &&
                            item.authenticators.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.authenticators.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.authenticators.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      credentialID:
                                        item.credentialID !== undefined
                                          ? item.credentialID
                                          : undefined,
                                      publicKey:
                                        item.publicKey !== undefined
                                          ? item.publicKey
                                          : undefined,
                                      counter:
                                        item.counter !== undefined
                                          ? item.counter
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        orgMemberships: item.orgMemberships
                          ? Array.isArray(item.orgMemberships) &&
                            item.orgMemberships.length > 0 &&
                            item.orgMemberships.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.orgMemberships.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.orgMemberships.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      organizationId:
                                        item.organizationId !== undefined
                                          ? {
                                              equals: item.organizationId,
                                            }
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      organization: item.organization
                                        ? typeof item.organization ===
                                            'object' &&
                                          Object.keys(item.organization)
                                            .length === 1 &&
                                          Object.keys(item.organization)[0] ===
                                            'id'
                                          ? {
                                              connect: {
                                                id: item.organization.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.organization.id !==
                                                    undefined
                                                      ? item.organization.id
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .name,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? item.organization.name
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  logoUrl:
                                                    item.organization
                                                      .logoUrl !== undefined
                                                      ? item.organization
                                                          .logoUrl
                                                      : undefined,
                                                  website:
                                                    item.organization
                                                      .website !== undefined
                                                      ? item.organization
                                                          .website
                                                      : undefined,
                                                  businessType:
                                                    item.organization
                                                      .businessType !==
                                                    undefined
                                                      ? item.organization
                                                          .businessType
                                                      : undefined,
                                                  jurisdiction:
                                                    item.organization
                                                      .jurisdiction !==
                                                    undefined
                                                      ? item.organization
                                                          .jurisdiction
                                                      : undefined,
                                                  regulatoryStatus:
                                                    item.organization
                                                      .regulatoryStatus !==
                                                    undefined
                                                      ? item.organization
                                                          .regulatoryStatus
                                                      : undefined,
                                                  description:
                                                    item.organization
                                                      .description !== undefined
                                                      ? item.organization
                                                          .description
                                                      : undefined,
                                                  tradingDefaults:
                                                    item.organization
                                                      .tradingDefaults !==
                                                    undefined
                                                      ? item.organization
                                                          .tradingDefaults
                                                      : undefined,
                                                  llmDefaults:
                                                    item.organization
                                                      .llmDefaults !== undefined
                                                      ? item.organization
                                                          .llmDefaults
                                                      : undefined,
                                                  deletedAt:
                                                    item.organization
                                                      .deletedAt !== undefined
                                                      ? item.organization
                                                          .deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        fundAssignments: item.fundAssignments
                          ? Array.isArray(item.fundAssignments) &&
                            item.fundAssignments.length > 0 &&
                            item.fundAssignments.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.fundAssignments.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.fundAssignments.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      fundId:
                                        item.fundId !== undefined
                                          ? {
                                              equals: item.fundId,
                                            }
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      fund: item.fund
                                        ? typeof item.fund === 'object' &&
                                          Object.keys(item.fund).length === 1 &&
                                          Object.keys(item.fund)[0] === 'id'
                                          ? {
                                              connect: {
                                                id: item.fund.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.fund.id !== undefined
                                                      ? item.fund.id
                                                      : undefined,
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.slug,
                                                        }
                                                      : undefined,
                                                  organizationId:
                                                    item.fund.organizationId !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.fund
                                                              .organizationId,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? item.fund.name
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? item.fund.slug
                                                      : undefined,
                                                  description:
                                                    item.fund.description !==
                                                    undefined
                                                      ? item.fund.description
                                                      : undefined,
                                                  status:
                                                    item.fund.status !==
                                                    undefined
                                                      ? item.fund.status
                                                      : undefined,
                                                  tradingOverrides:
                                                    item.fund
                                                      .tradingOverrides !==
                                                    undefined
                                                      ? item.fund
                                                          .tradingOverrides
                                                      : undefined,
                                                  llmOverrides:
                                                    item.fund.llmOverrides !==
                                                    undefined
                                                      ? item.fund.llmOverrides
                                                      : undefined,
                                                  policyOverlays:
                                                    item.fund.policyOverlays !==
                                                    undefined
                                                      ? item.fund.policyOverlays
                                                      : undefined,
                                                  deletedAt:
                                                    item.fund.deletedAt !==
                                                    undefined
                                                      ? item.fund.deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        investorProfile: item.investorProfile
                          ? typeof item.investorProfile === 'object' &&
                            Object.keys(item.investorProfile).length === 1 &&
                            Object.keys(item.investorProfile)[0] === 'id'
                            ? {
                                connect: {
                                  id: item.investorProfile.id,
                                },
                              }
                            : {
                                connectOrCreate: {
                                  where: {
                                    id:
                                      item.investorProfile.id !== undefined
                                        ? item.investorProfile.id
                                        : undefined,
                                    userId:
                                      item.investorProfile.userId !== undefined
                                        ? item.investorProfile.userId
                                        : undefined,
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? {
                                            equals: item.investorProfile.name,
                                          }
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? {
                                            equals: item.investorProfile.email,
                                          }
                                        : undefined,
                                  },
                                  create: {
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? item.investorProfile.name
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? item.investorProfile.email
                                        : undefined,
                                    type:
                                      item.investorProfile.type !== undefined
                                        ? item.investorProfile.type
                                        : undefined,
                                    kycStatus:
                                      item.investorProfile.kycStatus !==
                                      undefined
                                        ? item.investorProfile.kycStatus
                                        : undefined,
                                    walletAddress:
                                      item.investorProfile.walletAddress !==
                                      undefined
                                        ? item.investorProfile.walletAddress
                                        : undefined,
                                    deletedAt:
                                      item.investorProfile.deletedAt !==
                                      undefined
                                        ? item.investorProfile.deletedAt
                                        : undefined,
                                    investments: item.investorProfile
                                      .investments
                                      ? Array.isArray(
                                          item.investorProfile.investments
                                        ) &&
                                        item.investorProfile.investments
                                          .length > 0 &&
                                        item.investorProfile.investments.every(
                                          (item: any) =>
                                            typeof item === 'object' &&
                                            'id' in item &&
                                            Object.keys(item).length === 1
                                        )
                                        ? {
                                            connect:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  id: item.id,
                                                })
                                              ),
                                          }
                                        : {
                                            connectOrCreate:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  where: {
                                                    id:
                                                      item.id !== undefined
                                                        ? item.id
                                                        : undefined,
                                                    fundId:
                                                      item.fundId !== undefined
                                                        ? {
                                                            equals: item.fundId,
                                                          }
                                                        : undefined,
                                                    investorId:
                                                      item.investorId !==
                                                      undefined
                                                        ? {
                                                            equals:
                                                              item.investorId,
                                                          }
                                                        : undefined,
                                                  },
                                                  create: {
                                                    units:
                                                      item.units !== undefined
                                                        ? item.units
                                                        : undefined,
                                                    investedAt:
                                                      item.investedAt !==
                                                      undefined
                                                        ? item.investedAt
                                                        : undefined,
                                                    status:
                                                      item.status !== undefined
                                                        ? item.status
                                                        : undefined,
                                                  },
                                                })
                                              ),
                                          }
                                      : undefined,
                                  },
                                },
                              }
                          : undefined,
                        linkedProviders: item.linkedProviders
                          ? Array.isArray(item.linkedProviders) &&
                            item.linkedProviders.length > 0 &&
                            item.linkedProviders.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.linkedProviders.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.linkedProviders.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              equals: item.providerAccountId,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              equals: item.email,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      provider:
                                        item.provider !== undefined
                                          ? item.provider
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      accessToken:
                                        item.accessToken !== undefined
                                          ? item.accessToken
                                          : undefined,
                                      refreshToken:
                                        item.refreshToken !== undefined
                                          ? item.refreshToken
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? item.expiresAt
                                          : undefined,
                                      linkedAt:
                                        item.linkedAt !== undefined
                                          ? item.linkedAt
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        accountLinkingRequests: item.accountLinkingRequests
                          ? Array.isArray(item.accountLinkingRequests) &&
                            item.accountLinkingRequests.length > 0 &&
                            item.accountLinkingRequests.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.accountLinkingRequests.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate:
                                  item.accountLinkingRequests.map(
                                    (item: any) => ({
                                      where: {
                                        id:
                                          item.id !== undefined
                                            ? item.id
                                            : undefined,
                                        userId:
                                          item.userId !== undefined
                                            ? {
                                                equals: item.userId,
                                              }
                                            : undefined,
                                        email:
                                          item.email !== undefined
                                            ? {
                                                equals: item.email,
                                              }
                                            : undefined,
                                        providerAccountId:
                                          item.providerAccountId !== undefined
                                            ? {
                                                equals: item.providerAccountId,
                                              }
                                            : undefined,
                                      },
                                      create: {
                                        email:
                                          item.email !== undefined
                                            ? item.email
                                            : undefined,
                                        provider:
                                          item.provider !== undefined
                                            ? item.provider
                                            : undefined,
                                        providerAccountId:
                                          item.providerAccountId !== undefined
                                            ? item.providerAccountId
                                            : undefined,
                                        status:
                                          item.status !== undefined
                                            ? item.status
                                            : undefined,
                                        verificationToken:
                                          item.verificationToken !== undefined
                                            ? item.verificationToken
                                            : undefined,
                                        userAgent:
                                          item.userAgent !== undefined
                                            ? item.userAgent
                                            : undefined,
                                        ipAddress:
                                          item.ipAddress !== undefined
                                            ? item.ipAddress
                                            : undefined,
                                        expiresAt:
                                          item.expiresAt !== undefined
                                            ? item.expiresAt
                                            : undefined,
                                        verifiedAt:
                                          item.verifiedAt !== undefined
                                            ? item.verifiedAt
                                            : undefined,
                                        approvedAt:
                                          item.approvedAt !== undefined
                                            ? item.approvedAt
                                            : undefined,
                                        rejectedAt:
                                          item.rejectedAt !== undefined
                                            ? item.rejectedAt
                                            : undefined,
                                      },
                                    })
                                  ),
                              }
                          : undefined,
                        reviewedWaitlistEntries: item.reviewedWaitlistEntries
                          ? Array.isArray(item.reviewedWaitlistEntries) &&
                            item.reviewedWaitlistEntries.length > 0 &&
                            item.reviewedWaitlistEntries.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.reviewedWaitlistEntries.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate:
                                  item.reviewedWaitlistEntries.map(
                                    (item: any) => ({
                                      where: {
                                        id:
                                          item.id !== undefined
                                            ? item.id
                                            : undefined,
                                        email:
                                          item.email !== undefined
                                            ? item.email
                                            : undefined,
                                      },
                                      create: {
                                        email:
                                          item.email !== undefined
                                            ? item.email
                                            : undefined,
                                        fullName:
                                          item.fullName !== undefined
                                            ? item.fullName
                                            : undefined,
                                        companyName:
                                          item.companyName !== undefined
                                            ? item.companyName
                                            : undefined,
                                        companyWebsite:
                                          item.companyWebsite !== undefined
                                            ? item.companyWebsite
                                            : undefined,
                                        jobRole:
                                          item.jobRole !== undefined
                                            ? item.jobRole
                                            : undefined,
                                        professionalInvestorConfirmed:
                                          item.professionalInvestorConfirmed !==
                                          undefined
                                            ? item.professionalInvestorConfirmed
                                            : undefined,
                                        status:
                                          item.status !== undefined
                                            ? item.status
                                            : undefined,
                                        queuePosition:
                                          item.queuePosition !== undefined
                                            ? item.queuePosition
                                            : undefined,
                                        reviewedAt:
                                          item.reviewedAt !== undefined
                                            ? item.reviewedAt
                                            : undefined,
                                        inviteToken: item.inviteToken
                                          ? typeof item.inviteToken ===
                                              'object' &&
                                            Object.keys(item.inviteToken)
                                              .length === 1 &&
                                            Object.keys(item.inviteToken)[0] ===
                                              'id'
                                            ? {
                                                connect: {
                                                  id: item.inviteToken.id,
                                                },
                                              }
                                            : {
                                                connectOrCreate: {
                                                  where: {
                                                    id:
                                                      item.inviteToken.id !==
                                                      undefined
                                                        ? item.inviteToken.id
                                                        : undefined,
                                                    waitlistEntryId:
                                                      item.inviteToken
                                                        .waitlistEntryId !==
                                                      undefined
                                                        ? item.inviteToken
                                                            .waitlistEntryId
                                                        : undefined,
                                                    email:
                                                      item.inviteToken.email !==
                                                      undefined
                                                        ? {
                                                            equals:
                                                              item.inviteToken
                                                                .email,
                                                          }
                                                        : undefined,
                                                  },
                                                  create: {
                                                    token:
                                                      item.inviteToken.token !==
                                                      undefined
                                                        ? item.inviteToken.token
                                                        : undefined,
                                                    email:
                                                      item.inviteToken.email !==
                                                      undefined
                                                        ? item.inviteToken.email
                                                        : undefined,
                                                    used:
                                                      item.inviteToken.used !==
                                                      undefined
                                                        ? item.inviteToken.used
                                                        : undefined,
                                                    usedAt:
                                                      item.inviteToken
                                                        .usedAt !== undefined
                                                        ? item.inviteToken
                                                            .usedAt
                                                        : undefined,
                                                    expiresAt:
                                                      item.inviteToken
                                                        .expiresAt !== undefined
                                                        ? item.inviteToken
                                                            .expiresAt
                                                        : undefined,
                                                  },
                                                },
                                              }
                                          : undefined,
                                      },
                                    })
                                  ),
                              }
                          : undefined,
                        dashboardLayouts: item.dashboardLayouts
                          ? Array.isArray(item.dashboardLayouts) &&
                            item.dashboardLayouts.length > 0 &&
                            item.dashboardLayouts.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.dashboardLayouts.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.dashboardLayouts.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      layout:
                                        item.layout !== undefined
                                          ? item.layout
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        llmConfiguration: item.llmConfiguration
                          ? typeof item.llmConfiguration === 'object' &&
                            Object.keys(item.llmConfiguration).length === 1 &&
                            Object.keys(item.llmConfiguration)[0] === 'id'
                            ? {
                                connect: {
                                  id: item.llmConfiguration.id,
                                },
                              }
                            : {
                                connectOrCreate: {
                                  where: {
                                    id:
                                      item.llmConfiguration.id !== undefined
                                        ? item.llmConfiguration.id
                                        : undefined,
                                    userId:
                                      item.llmConfiguration.userId !== undefined
                                        ? item.llmConfiguration.userId
                                        : undefined,
                                  },
                                  create: {
                                    defaultProvider:
                                      item.llmConfiguration.defaultProvider !==
                                      undefined
                                        ? item.llmConfiguration.defaultProvider
                                        : undefined,
                                    miniProvider:
                                      item.llmConfiguration.miniProvider !==
                                      undefined
                                        ? item.llmConfiguration.miniProvider
                                        : undefined,
                                    normalProvider:
                                      item.llmConfiguration.normalProvider !==
                                      undefined
                                        ? item.llmConfiguration.normalProvider
                                        : undefined,
                                    advancedProvider:
                                      item.llmConfiguration.advancedProvider !==
                                      undefined
                                        ? item.llmConfiguration.advancedProvider
                                        : undefined,
                                    miniModel:
                                      item.llmConfiguration.miniModel !==
                                      undefined
                                        ? item.llmConfiguration.miniModel
                                        : undefined,
                                    normalModel:
                                      item.llmConfiguration.normalModel !==
                                      undefined
                                        ? item.llmConfiguration.normalModel
                                        : undefined,
                                    advancedModel:
                                      item.llmConfiguration.advancedModel !==
                                      undefined
                                        ? item.llmConfiguration.advancedModel
                                        : undefined,
                                    openaiApiKey:
                                      item.llmConfiguration.openaiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.openaiApiKey
                                        : undefined,
                                    anthropicApiKey:
                                      item.llmConfiguration.anthropicApiKey !==
                                      undefined
                                        ? item.llmConfiguration.anthropicApiKey
                                        : undefined,
                                    deepseekApiKey:
                                      item.llmConfiguration.deepseekApiKey !==
                                      undefined
                                        ? item.llmConfiguration.deepseekApiKey
                                        : undefined,
                                    kimiApiKey:
                                      item.llmConfiguration.kimiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.kimiApiKey
                                        : undefined,
                                    qwenApiKey:
                                      item.llmConfiguration.qwenApiKey !==
                                      undefined
                                        ? item.llmConfiguration.qwenApiKey
                                        : undefined,
                                    xaiApiKey:
                                      item.llmConfiguration.xaiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.xaiApiKey
                                        : undefined,
                                    geminiApiKey:
                                      item.llmConfiguration.geminiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.geminiApiKey
                                        : undefined,
                                  },
                                },
                              }
                          : undefined,
                      },
                    })),
                  }
              : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_CUSTOMER,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneCustomer) {
          return response.data.upsertOneCustomer;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn('Database connection error, retrying...', {
            retryCount,
            delayMs: delay,
          });
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update multiple Customer records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of Customer objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(
    props: CustomerType[],
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_MANY_CUSTOMER = gql`
          mutation updateManyCustomer($data: [CustomerCreateManyInput!]!) {
            updateManyCustomer(data: $data) {
              count
            }
          }
        `;

        const variables = props.map((prop) => ({
          where: {
            id: prop.id !== undefined ? prop.id : undefined,
            stripeCustomerId:
              prop.stripeCustomerId !== undefined
                ? prop.stripeCustomerId
                : undefined,
            stripeSubscriptionId:
              prop.stripeSubscriptionId !== undefined
                ? prop.stripeSubscriptionId
                : undefined,
            authUserId:
              prop.authUserId !== undefined
                ? {
                    equals: prop.authUserId,
                  }
                : undefined,
            name:
              prop.name !== undefined
                ? {
                    equals: prop.name,
                  }
                : undefined,
            stripePriceId:
              prop.stripePriceId !== undefined
                ? {
                    equals: prop.stripePriceId,
                  }
                : undefined,
          },
          data: {
            authUserId:
              prop.authUserId !== undefined
                ? {
                    set: prop.authUserId,
                  }
                : undefined,
            name:
              prop.name !== undefined
                ? {
                    set: prop.name,
                  }
                : undefined,
            plan:
              prop.plan !== undefined
                ? {
                    set: prop.plan,
                  }
                : undefined,
            stripeCustomerId:
              prop.stripeCustomerId !== undefined
                ? {
                    set: prop.stripeCustomerId,
                  }
                : undefined,
            stripeSubscriptionId:
              prop.stripeSubscriptionId !== undefined
                ? {
                    set: prop.stripeSubscriptionId,
                  }
                : undefined,
            stripePriceId:
              prop.stripePriceId !== undefined
                ? {
                    set: prop.stripePriceId,
                  }
                : undefined,
            stripeCurrentPeriodEnd:
              prop.stripeCurrentPeriodEnd !== undefined
                ? {
                    set: prop.stripeCurrentPeriodEnd,
                  }
                : undefined,
            jurisdiction:
              prop.jurisdiction !== undefined
                ? {
                    set: prop.jurisdiction,
                  }
                : undefined,
            riskProfile:
              prop.riskProfile !== undefined
                ? {
                    set: prop.riskProfile,
                  }
                : undefined,
            amlStatus:
              prop.amlStatus !== undefined
                ? {
                    set: prop.amlStatus,
                  }
                : undefined,
            lastKycUpdate:
              prop.lastKycUpdate !== undefined
                ? {
                    set: prop.lastKycUpdate,
                  }
                : undefined,
            createdAt:
              prop.createdAt !== undefined
                ? {
                    set: prop.createdAt,
                  }
                : undefined,
            updatedAt:
              prop.updatedAt !== undefined
                ? {
                    set: prop.updatedAt,
                  }
                : undefined,
            users: prop.users
              ? Array.isArray(prop.users) &&
                prop.users.length > 0 &&
                prop.users.every(
                  (item: any) =>
                    typeof item === 'object' &&
                    ('id' in item || 'symbol' in item) &&
                    Object.keys(item).length === 1
                )
                ? {
                    connect: prop.users.map((item: any) => ({
                      id: item.id,
                    })),
                  }
                : {
                    upsert: prop.users.map((item: any) => ({
                      where: {
                        id: item.id !== undefined ? item.id : undefined,
                        email:
                          item.email !== undefined ? item.email : undefined,
                        name:
                          item.name !== undefined
                            ? {
                                equals: item.name,
                              }
                            : undefined,
                        customerId:
                          item.customerId !== undefined
                            ? {
                                equals: item.customerId,
                              }
                            : undefined,
                      },
                      update: {
                        id:
                          item.id !== undefined
                            ? {
                                set: item.id,
                              }
                            : undefined,
                        name:
                          item.name !== undefined
                            ? {
                                set: item.name,
                              }
                            : undefined,
                        email:
                          item.email !== undefined
                            ? {
                                set: item.email,
                              }
                            : undefined,
                        emailVerified:
                          item.emailVerified !== undefined
                            ? {
                                set: item.emailVerified,
                              }
                            : undefined,
                        image:
                          item.image !== undefined
                            ? {
                                set: item.image,
                              }
                            : undefined,
                        deletedAt:
                          item.deletedAt !== undefined
                            ? {
                                set: item.deletedAt,
                              }
                            : undefined,
                        role:
                          item.role !== undefined
                            ? {
                                set: item.role,
                              }
                            : undefined,
                        bio:
                          item.bio !== undefined
                            ? {
                                set: item.bio,
                              }
                            : undefined,
                        jobTitle:
                          item.jobTitle !== undefined
                            ? {
                                set: item.jobTitle,
                              }
                            : undefined,
                        plan:
                          item.plan !== undefined
                            ? {
                                set: item.plan,
                              }
                            : undefined,
                        openaiAPIKey:
                          item.openaiAPIKey !== undefined
                            ? {
                                set: item.openaiAPIKey,
                              }
                            : undefined,
                        openaiModel:
                          item.openaiModel !== undefined
                            ? {
                                set: item.openaiModel,
                              }
                            : undefined,
                        passwordHash:
                          item.passwordHash !== undefined
                            ? {
                                set: item.passwordHash,
                              }
                            : undefined,
                        avatarUrl:
                          item.avatarUrl !== undefined
                            ? {
                                set: item.avatarUrl,
                              }
                            : undefined,
                        onboardingComplete:
                          item.onboardingComplete !== undefined
                            ? {
                                set: item.onboardingComplete,
                              }
                            : undefined,
                        signupCategory:
                          item.signupCategory !== undefined
                            ? {
                                set: item.signupCategory,
                              }
                            : undefined,
                        accounts: item.accounts
                          ? Array.isArray(item.accounts) &&
                            item.accounts.length > 0 &&
                            item.accounts.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.accounts.map((item: any) => ({
                                  id: item.id,
                                })),
                              }
                            : {
                                upsert: item.accounts.map((item: any) => ({
                                  where: {
                                    id:
                                      item.id !== undefined
                                        ? item.id
                                        : undefined,
                                    providerAccountId:
                                      item.providerAccountId !== undefined
                                        ? item.providerAccountId
                                        : undefined,
                                    userId:
                                      item.userId !== undefined
                                        ? {
                                            equals: item.userId,
                                          }
                                        : undefined,
                                  },
                                  update: {
                                    id:
                                      item.id !== undefined
                                        ? {
                                            set: item.id,
                                          }
                                        : undefined,
                                    type:
                                      item.type !== undefined
                                        ? {
                                            set: item.type,
                                          }
                                        : undefined,
                                    provider:
                                      item.provider !== undefined
                                        ? {
                                            set: item.provider,
                                          }
                                        : undefined,
                                    providerAccountId:
                                      item.providerAccountId !== undefined
                                        ? {
                                            set: item.providerAccountId,
                                          }
                                        : undefined,
                                    refresh_token:
                                      item.refresh_token !== undefined
                                        ? {
                                            set: item.refresh_token,
                                          }
                                        : undefined,
                                    access_token:
                                      item.access_token !== undefined
                                        ? {
                                            set: item.access_token,
                                          }
                                        : undefined,
                                    expires_at:
                                      item.expires_at !== undefined
                                        ? {
                                            set: item.expires_at,
                                          }
                                        : undefined,
                                    token_type:
                                      item.token_type !== undefined
                                        ? {
                                            set: item.token_type,
                                          }
                                        : undefined,
                                    scope:
                                      item.scope !== undefined
                                        ? {
                                            set: item.scope,
                                          }
                                        : undefined,
                                    id_token:
                                      item.id_token !== undefined
                                        ? {
                                            set: item.id_token,
                                          }
                                        : undefined,
                                    session_state:
                                      item.session_state !== undefined
                                        ? {
                                            set: item.session_state,
                                          }
                                        : undefined,
                                  },
                                  create: {
                                    type:
                                      item.type !== undefined
                                        ? item.type
                                        : undefined,
                                    provider:
                                      item.provider !== undefined
                                        ? item.provider
                                        : undefined,
                                    providerAccountId:
                                      item.providerAccountId !== undefined
                                        ? item.providerAccountId
                                        : undefined,
                                    refresh_token:
                                      item.refresh_token !== undefined
                                        ? item.refresh_token
                                        : undefined,
                                    access_token:
                                      item.access_token !== undefined
                                        ? item.access_token
                                        : undefined,
                                    expires_at:
                                      item.expires_at !== undefined
                                        ? item.expires_at
                                        : undefined,
                                    token_type:
                                      item.token_type !== undefined
                                        ? item.token_type
                                        : undefined,
                                    scope:
                                      item.scope !== undefined
                                        ? item.scope
                                        : undefined,
                                    id_token:
                                      item.id_token !== undefined
                                        ? item.id_token
                                        : undefined,
                                    session_state:
                                      item.session_state !== undefined
                                        ? item.session_state
                                        : undefined,
                                  },
                                })),
                              }
                          : undefined,
                        sessions: item.sessions
                          ? Array.isArray(item.sessions) &&
                            item.sessions.length > 0 &&
                            item.sessions.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.sessions.map((item: any) => ({
                                  id: item.id,
                                })),
                              }
                            : {
                                upsert: item.sessions.map((item: any) => ({
                                  where: {
                                    id:
                                      item.id !== undefined
                                        ? item.id
                                        : undefined,
                                    userId:
                                      item.userId !== undefined
                                        ? {
                                            equals: item.userId,
                                          }
                                        : undefined,
                                  },
                                  update: {
                                    id:
                                      item.id !== undefined
                                        ? {
                                            set: item.id,
                                          }
                                        : undefined,
                                    sessionToken:
                                      item.sessionToken !== undefined
                                        ? {
                                            set: item.sessionToken,
                                          }
                                        : undefined,
                                    expires:
                                      item.expires !== undefined
                                        ? {
                                            set: item.expires,
                                          }
                                        : undefined,
                                  },
                                  create: {
                                    sessionToken:
                                      item.sessionToken !== undefined
                                        ? item.sessionToken
                                        : undefined,
                                    expires:
                                      item.expires !== undefined
                                        ? item.expires
                                        : undefined,
                                  },
                                })),
                              }
                          : undefined,
                        authenticators: item.authenticators
                          ? Array.isArray(item.authenticators) &&
                            item.authenticators.length > 0 &&
                            item.authenticators.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.authenticators.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.authenticators.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      credentialID:
                                        item.credentialID !== undefined
                                          ? {
                                              set: item.credentialID,
                                            }
                                          : undefined,
                                      publicKey:
                                        item.publicKey !== undefined
                                          ? {
                                              set: item.publicKey,
                                            }
                                          : undefined,
                                      counter:
                                        item.counter !== undefined
                                          ? {
                                              set: item.counter,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      credentialID:
                                        item.credentialID !== undefined
                                          ? item.credentialID
                                          : undefined,
                                      publicKey:
                                        item.publicKey !== undefined
                                          ? item.publicKey
                                          : undefined,
                                      counter:
                                        item.counter !== undefined
                                          ? item.counter
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        orgMemberships: item.orgMemberships
                          ? Array.isArray(item.orgMemberships) &&
                            item.orgMemberships.length > 0 &&
                            item.orgMemberships.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.orgMemberships.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.orgMemberships.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      organizationId:
                                        item.organizationId !== undefined
                                          ? {
                                              equals: item.organizationId,
                                            }
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      role:
                                        item.role !== undefined
                                          ? {
                                              set: item.role,
                                            }
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      organization: item.organization
                                        ? typeof item.organization ===
                                            'object' &&
                                          Object.keys(item.organization)
                                            .length === 1 &&
                                          (Object.keys(item.organization)[0] ===
                                            'id' ||
                                            Object.keys(
                                              item.organization
                                            )[0] === 'symbol')
                                          ? {
                                              connect: {
                                                id: item.organization.id,
                                              },
                                            }
                                          : {
                                              upsert: {
                                                where: {
                                                  id:
                                                    item.organization.id !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .id,
                                                        }
                                                      : undefined,
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .slug,
                                                        }
                                                      : undefined,
                                                },
                                                update: {
                                                  id:
                                                    item.organization.id !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .id,
                                                        }
                                                      : undefined,
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .slug,
                                                        }
                                                      : undefined,
                                                  logoUrl:
                                                    item.organization
                                                      .logoUrl !== undefined
                                                      ? {
                                                          set: item.organization
                                                            .logoUrl,
                                                        }
                                                      : undefined,
                                                  website:
                                                    item.organization
                                                      .website !== undefined
                                                      ? {
                                                          set: item.organization
                                                            .website,
                                                        }
                                                      : undefined,
                                                  businessType:
                                                    item.organization
                                                      .businessType !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .businessType,
                                                        }
                                                      : undefined,
                                                  jurisdiction:
                                                    item.organization
                                                      .jurisdiction !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .jurisdiction,
                                                        }
                                                      : undefined,
                                                  regulatoryStatus:
                                                    item.organization
                                                      .regulatoryStatus !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .regulatoryStatus,
                                                        }
                                                      : undefined,
                                                  description:
                                                    item.organization
                                                      .description !== undefined
                                                      ? {
                                                          set: item.organization
                                                            .description,
                                                        }
                                                      : undefined,
                                                  tradingDefaults:
                                                    item.organization
                                                      .tradingDefaults !==
                                                    undefined
                                                      ? {
                                                          set: item.organization
                                                            .tradingDefaults,
                                                        }
                                                      : undefined,
                                                  llmDefaults:
                                                    item.organization
                                                      .llmDefaults !== undefined
                                                      ? {
                                                          set: item.organization
                                                            .llmDefaults,
                                                        }
                                                      : undefined,
                                                  deletedAt:
                                                    item.organization
                                                      .deletedAt !== undefined
                                                      ? {
                                                          set: item.organization
                                                            .deletedAt,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? item.organization.name
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  logoUrl:
                                                    item.organization
                                                      .logoUrl !== undefined
                                                      ? item.organization
                                                          .logoUrl
                                                      : undefined,
                                                  website:
                                                    item.organization
                                                      .website !== undefined
                                                      ? item.organization
                                                          .website
                                                      : undefined,
                                                  businessType:
                                                    item.organization
                                                      .businessType !==
                                                    undefined
                                                      ? item.organization
                                                          .businessType
                                                      : undefined,
                                                  jurisdiction:
                                                    item.organization
                                                      .jurisdiction !==
                                                    undefined
                                                      ? item.organization
                                                          .jurisdiction
                                                      : undefined,
                                                  regulatoryStatus:
                                                    item.organization
                                                      .regulatoryStatus !==
                                                    undefined
                                                      ? item.organization
                                                          .regulatoryStatus
                                                      : undefined,
                                                  description:
                                                    item.organization
                                                      .description !== undefined
                                                      ? item.organization
                                                          .description
                                                      : undefined,
                                                  tradingDefaults:
                                                    item.organization
                                                      .tradingDefaults !==
                                                    undefined
                                                      ? item.organization
                                                          .tradingDefaults
                                                      : undefined,
                                                  llmDefaults:
                                                    item.organization
                                                      .llmDefaults !== undefined
                                                      ? item.organization
                                                          .llmDefaults
                                                      : undefined,
                                                  deletedAt:
                                                    item.organization
                                                      .deletedAt !== undefined
                                                      ? item.organization
                                                          .deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      organization: item.organization
                                        ? typeof item.organization ===
                                            'object' &&
                                          Object.keys(item.organization)
                                            .length === 1 &&
                                          Object.keys(item.organization)[0] ===
                                            'id'
                                          ? {
                                              connect: {
                                                id: item.organization.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.organization.id !==
                                                    undefined
                                                      ? item.organization.id
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .name,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? item.organization.name
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  logoUrl:
                                                    item.organization
                                                      .logoUrl !== undefined
                                                      ? item.organization
                                                          .logoUrl
                                                      : undefined,
                                                  website:
                                                    item.organization
                                                      .website !== undefined
                                                      ? item.organization
                                                          .website
                                                      : undefined,
                                                  businessType:
                                                    item.organization
                                                      .businessType !==
                                                    undefined
                                                      ? item.organization
                                                          .businessType
                                                      : undefined,
                                                  jurisdiction:
                                                    item.organization
                                                      .jurisdiction !==
                                                    undefined
                                                      ? item.organization
                                                          .jurisdiction
                                                      : undefined,
                                                  regulatoryStatus:
                                                    item.organization
                                                      .regulatoryStatus !==
                                                    undefined
                                                      ? item.organization
                                                          .regulatoryStatus
                                                      : undefined,
                                                  description:
                                                    item.organization
                                                      .description !== undefined
                                                      ? item.organization
                                                          .description
                                                      : undefined,
                                                  tradingDefaults:
                                                    item.organization
                                                      .tradingDefaults !==
                                                    undefined
                                                      ? item.organization
                                                          .tradingDefaults
                                                      : undefined,
                                                  llmDefaults:
                                                    item.organization
                                                      .llmDefaults !== undefined
                                                      ? item.organization
                                                          .llmDefaults
                                                      : undefined,
                                                  deletedAt:
                                                    item.organization
                                                      .deletedAt !== undefined
                                                      ? item.organization
                                                          .deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        fundAssignments: item.fundAssignments
                          ? Array.isArray(item.fundAssignments) &&
                            item.fundAssignments.length > 0 &&
                            item.fundAssignments.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.fundAssignments.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.fundAssignments.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      fundId:
                                        item.fundId !== undefined
                                          ? {
                                              equals: item.fundId,
                                            }
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      role:
                                        item.role !== undefined
                                          ? {
                                              set: item.role,
                                            }
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      fund: item.fund
                                        ? typeof item.fund === 'object' &&
                                          Object.keys(item.fund).length === 1 &&
                                          (Object.keys(item.fund)[0] === 'id' ||
                                            Object.keys(item.fund)[0] ===
                                              'symbol')
                                          ? {
                                              connect: {
                                                id: item.fund.id,
                                              },
                                            }
                                          : {
                                              upsert: {
                                                where: {
                                                  id:
                                                    item.fund.id !== undefined
                                                      ? {
                                                          equals: item.fund.id,
                                                        }
                                                      : undefined,
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.slug,
                                                        }
                                                      : undefined,
                                                  organizationId:
                                                    item.fund.organizationId !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.fund
                                                              .organizationId,
                                                        }
                                                      : undefined,
                                                },
                                                update: {
                                                  id:
                                                    item.fund.id !== undefined
                                                      ? {
                                                          set: item.fund.id,
                                                        }
                                                      : undefined,
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? {
                                                          set: item.fund.name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? {
                                                          set: item.fund.slug,
                                                        }
                                                      : undefined,
                                                  description:
                                                    item.fund.description !==
                                                    undefined
                                                      ? {
                                                          set: item.fund
                                                            .description,
                                                        }
                                                      : undefined,
                                                  status:
                                                    item.fund.status !==
                                                    undefined
                                                      ? {
                                                          set: item.fund.status,
                                                        }
                                                      : undefined,
                                                  tradingOverrides:
                                                    item.fund
                                                      .tradingOverrides !==
                                                    undefined
                                                      ? {
                                                          set: item.fund
                                                            .tradingOverrides,
                                                        }
                                                      : undefined,
                                                  llmOverrides:
                                                    item.fund.llmOverrides !==
                                                    undefined
                                                      ? {
                                                          set: item.fund
                                                            .llmOverrides,
                                                        }
                                                      : undefined,
                                                  policyOverlays:
                                                    item.fund.policyOverlays !==
                                                    undefined
                                                      ? {
                                                          set: item.fund
                                                            .policyOverlays,
                                                        }
                                                      : undefined,
                                                  deletedAt:
                                                    item.fund.deletedAt !==
                                                    undefined
                                                      ? {
                                                          set: item.fund
                                                            .deletedAt,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? item.fund.name
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? item.fund.slug
                                                      : undefined,
                                                  description:
                                                    item.fund.description !==
                                                    undefined
                                                      ? item.fund.description
                                                      : undefined,
                                                  status:
                                                    item.fund.status !==
                                                    undefined
                                                      ? item.fund.status
                                                      : undefined,
                                                  tradingOverrides:
                                                    item.fund
                                                      .tradingOverrides !==
                                                    undefined
                                                      ? item.fund
                                                          .tradingOverrides
                                                      : undefined,
                                                  llmOverrides:
                                                    item.fund.llmOverrides !==
                                                    undefined
                                                      ? item.fund.llmOverrides
                                                      : undefined,
                                                  policyOverlays:
                                                    item.fund.policyOverlays !==
                                                    undefined
                                                      ? item.fund.policyOverlays
                                                      : undefined,
                                                  deletedAt:
                                                    item.fund.deletedAt !==
                                                    undefined
                                                      ? item.fund.deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      fund: item.fund
                                        ? typeof item.fund === 'object' &&
                                          Object.keys(item.fund).length === 1 &&
                                          Object.keys(item.fund)[0] === 'id'
                                          ? {
                                              connect: {
                                                id: item.fund.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.fund.id !== undefined
                                                      ? item.fund.id
                                                      : undefined,
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.slug,
                                                        }
                                                      : undefined,
                                                  organizationId:
                                                    item.fund.organizationId !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.fund
                                                              .organizationId,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? item.fund.name
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? item.fund.slug
                                                      : undefined,
                                                  description:
                                                    item.fund.description !==
                                                    undefined
                                                      ? item.fund.description
                                                      : undefined,
                                                  status:
                                                    item.fund.status !==
                                                    undefined
                                                      ? item.fund.status
                                                      : undefined,
                                                  tradingOverrides:
                                                    item.fund
                                                      .tradingOverrides !==
                                                    undefined
                                                      ? item.fund
                                                          .tradingOverrides
                                                      : undefined,
                                                  llmOverrides:
                                                    item.fund.llmOverrides !==
                                                    undefined
                                                      ? item.fund.llmOverrides
                                                      : undefined,
                                                  policyOverlays:
                                                    item.fund.policyOverlays !==
                                                    undefined
                                                      ? item.fund.policyOverlays
                                                      : undefined,
                                                  deletedAt:
                                                    item.fund.deletedAt !==
                                                    undefined
                                                      ? item.fund.deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        investorProfile: item.investorProfile
                          ? typeof item.investorProfile === 'object' &&
                            Object.keys(item.investorProfile).length === 1 &&
                            (Object.keys(item.investorProfile)[0] === 'id' ||
                              Object.keys(item.investorProfile)[0] === 'symbol')
                            ? {
                                connect: {
                                  id: item.investorProfile.id,
                                },
                              }
                            : {
                                upsert: {
                                  where: {
                                    id:
                                      item.investorProfile.id !== undefined
                                        ? {
                                            equals: item.investorProfile.id,
                                          }
                                        : undefined,
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? {
                                            equals: item.investorProfile.name,
                                          }
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? {
                                            equals: item.investorProfile.email,
                                          }
                                        : undefined,
                                    userId:
                                      item.investorProfile.userId !== undefined
                                        ? {
                                            equals: item.investorProfile.userId,
                                          }
                                        : undefined,
                                  },
                                  update: {
                                    id:
                                      item.investorProfile.id !== undefined
                                        ? {
                                            set: item.investorProfile.id,
                                          }
                                        : undefined,
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? {
                                            set: item.investorProfile.name,
                                          }
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? {
                                            set: item.investorProfile.email,
                                          }
                                        : undefined,
                                    type:
                                      item.investorProfile.type !== undefined
                                        ? {
                                            set: item.investorProfile.type,
                                          }
                                        : undefined,
                                    kycStatus:
                                      item.investorProfile.kycStatus !==
                                      undefined
                                        ? {
                                            set: item.investorProfile.kycStatus,
                                          }
                                        : undefined,
                                    walletAddress:
                                      item.investorProfile.walletAddress !==
                                      undefined
                                        ? {
                                            set: item.investorProfile
                                              .walletAddress,
                                          }
                                        : undefined,
                                    deletedAt:
                                      item.investorProfile.deletedAt !==
                                      undefined
                                        ? {
                                            set: item.investorProfile.deletedAt,
                                          }
                                        : undefined,
                                    investments: item.investorProfile
                                      .investments
                                      ? Array.isArray(
                                          item.investorProfile.investments
                                        ) &&
                                        item.investorProfile.investments
                                          .length > 0 &&
                                        item.investorProfile.investments.every(
                                          (item: any) =>
                                            typeof item === 'object' &&
                                            ('id' in item ||
                                              'symbol' in item) &&
                                            Object.keys(item).length === 1
                                        )
                                        ? {
                                            connect:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  id: item.id,
                                                })
                                              ),
                                          }
                                        : {
                                            upsert:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  where: {
                                                    id:
                                                      item.id !== undefined
                                                        ? item.id
                                                        : undefined,
                                                    fundId:
                                                      item.fundId !== undefined
                                                        ? {
                                                            equals: item.fundId,
                                                          }
                                                        : undefined,
                                                    investorId:
                                                      item.investorId !==
                                                      undefined
                                                        ? {
                                                            equals:
                                                              item.investorId,
                                                          }
                                                        : undefined,
                                                  },
                                                  update: {
                                                    id:
                                                      item.id !== undefined
                                                        ? {
                                                            set: item.id,
                                                          }
                                                        : undefined,
                                                    units:
                                                      item.units !== undefined
                                                        ? {
                                                            set: item.units,
                                                          }
                                                        : undefined,
                                                    investedAt:
                                                      item.investedAt !==
                                                      undefined
                                                        ? {
                                                            set: item.investedAt,
                                                          }
                                                        : undefined,
                                                    status:
                                                      item.status !== undefined
                                                        ? {
                                                            set: item.status,
                                                          }
                                                        : undefined,
                                                  },
                                                  create: {
                                                    units:
                                                      item.units !== undefined
                                                        ? item.units
                                                        : undefined,
                                                    investedAt:
                                                      item.investedAt !==
                                                      undefined
                                                        ? item.investedAt
                                                        : undefined,
                                                    status:
                                                      item.status !== undefined
                                                        ? item.status
                                                        : undefined,
                                                  },
                                                })
                                              ),
                                          }
                                      : undefined,
                                  },
                                  create: {
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? item.investorProfile.name
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? item.investorProfile.email
                                        : undefined,
                                    type:
                                      item.investorProfile.type !== undefined
                                        ? item.investorProfile.type
                                        : undefined,
                                    kycStatus:
                                      item.investorProfile.kycStatus !==
                                      undefined
                                        ? item.investorProfile.kycStatus
                                        : undefined,
                                    walletAddress:
                                      item.investorProfile.walletAddress !==
                                      undefined
                                        ? item.investorProfile.walletAddress
                                        : undefined,
                                    deletedAt:
                                      item.investorProfile.deletedAt !==
                                      undefined
                                        ? item.investorProfile.deletedAt
                                        : undefined,
                                    investments: item.investorProfile
                                      .investments
                                      ? Array.isArray(
                                          item.investorProfile.investments
                                        ) &&
                                        item.investorProfile.investments
                                          .length > 0 &&
                                        item.investorProfile.investments.every(
                                          (item: any) =>
                                            typeof item === 'object' &&
                                            'id' in item &&
                                            Object.keys(item).length === 1
                                        )
                                        ? {
                                            connect:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  id: item.id,
                                                })
                                              ),
                                          }
                                        : {
                                            connectOrCreate:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  where: {
                                                    id:
                                                      item.id !== undefined
                                                        ? item.id
                                                        : undefined,
                                                    fundId:
                                                      item.fundId !== undefined
                                                        ? {
                                                            equals: item.fundId,
                                                          }
                                                        : undefined,
                                                    investorId:
                                                      item.investorId !==
                                                      undefined
                                                        ? {
                                                            equals:
                                                              item.investorId,
                                                          }
                                                        : undefined,
                                                  },
                                                  create: {
                                                    units:
                                                      item.units !== undefined
                                                        ? item.units
                                                        : undefined,
                                                    investedAt:
                                                      item.investedAt !==
                                                      undefined
                                                        ? item.investedAt
                                                        : undefined,
                                                    status:
                                                      item.status !== undefined
                                                        ? item.status
                                                        : undefined,
                                                  },
                                                })
                                              ),
                                          }
                                      : undefined,
                                  },
                                },
                              }
                          : undefined,
                        linkedProviders: item.linkedProviders
                          ? Array.isArray(item.linkedProviders) &&
                            item.linkedProviders.length > 0 &&
                            item.linkedProviders.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.linkedProviders.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.linkedProviders.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              equals: item.providerAccountId,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              equals: item.email,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      provider:
                                        item.provider !== undefined
                                          ? {
                                              set: item.provider,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              set: item.providerAccountId,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              set: item.email,
                                            }
                                          : undefined,
                                      accessToken:
                                        item.accessToken !== undefined
                                          ? {
                                              set: item.accessToken,
                                            }
                                          : undefined,
                                      refreshToken:
                                        item.refreshToken !== undefined
                                          ? {
                                              set: item.refreshToken,
                                            }
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? {
                                              set: item.expiresAt,
                                            }
                                          : undefined,
                                      linkedAt:
                                        item.linkedAt !== undefined
                                          ? {
                                              set: item.linkedAt,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      provider:
                                        item.provider !== undefined
                                          ? item.provider
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      accessToken:
                                        item.accessToken !== undefined
                                          ? item.accessToken
                                          : undefined,
                                      refreshToken:
                                        item.refreshToken !== undefined
                                          ? item.refreshToken
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? item.expiresAt
                                          : undefined,
                                      linkedAt:
                                        item.linkedAt !== undefined
                                          ? item.linkedAt
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        accountLinkingRequests: item.accountLinkingRequests
                          ? Array.isArray(item.accountLinkingRequests) &&
                            item.accountLinkingRequests.length > 0 &&
                            item.accountLinkingRequests.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.accountLinkingRequests.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.accountLinkingRequests.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              equals: item.email,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              equals: item.providerAccountId,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              set: item.email,
                                            }
                                          : undefined,
                                      provider:
                                        item.provider !== undefined
                                          ? {
                                              set: item.provider,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              set: item.providerAccountId,
                                            }
                                          : undefined,
                                      status:
                                        item.status !== undefined
                                          ? {
                                              set: item.status,
                                            }
                                          : undefined,
                                      verificationToken:
                                        item.verificationToken !== undefined
                                          ? {
                                              set: item.verificationToken,
                                            }
                                          : undefined,
                                      userAgent:
                                        item.userAgent !== undefined
                                          ? {
                                              set: item.userAgent,
                                            }
                                          : undefined,
                                      ipAddress:
                                        item.ipAddress !== undefined
                                          ? {
                                              set: item.ipAddress,
                                            }
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? {
                                              set: item.expiresAt,
                                            }
                                          : undefined,
                                      verifiedAt:
                                        item.verifiedAt !== undefined
                                          ? {
                                              set: item.verifiedAt,
                                            }
                                          : undefined,
                                      approvedAt:
                                        item.approvedAt !== undefined
                                          ? {
                                              set: item.approvedAt,
                                            }
                                          : undefined,
                                      rejectedAt:
                                        item.rejectedAt !== undefined
                                          ? {
                                              set: item.rejectedAt,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      provider:
                                        item.provider !== undefined
                                          ? item.provider
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      status:
                                        item.status !== undefined
                                          ? item.status
                                          : undefined,
                                      verificationToken:
                                        item.verificationToken !== undefined
                                          ? item.verificationToken
                                          : undefined,
                                      userAgent:
                                        item.userAgent !== undefined
                                          ? item.userAgent
                                          : undefined,
                                      ipAddress:
                                        item.ipAddress !== undefined
                                          ? item.ipAddress
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? item.expiresAt
                                          : undefined,
                                      verifiedAt:
                                        item.verifiedAt !== undefined
                                          ? item.verifiedAt
                                          : undefined,
                                      approvedAt:
                                        item.approvedAt !== undefined
                                          ? item.approvedAt
                                          : undefined,
                                      rejectedAt:
                                        item.rejectedAt !== undefined
                                          ? item.rejectedAt
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        reviewedWaitlistEntries: item.reviewedWaitlistEntries
                          ? Array.isArray(item.reviewedWaitlistEntries) &&
                            item.reviewedWaitlistEntries.length > 0 &&
                            item.reviewedWaitlistEntries.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.reviewedWaitlistEntries.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.reviewedWaitlistEntries.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      reviewedById:
                                        item.reviewedById !== undefined
                                          ? {
                                              equals: item.reviewedById,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              set: item.email,
                                            }
                                          : undefined,
                                      fullName:
                                        item.fullName !== undefined
                                          ? {
                                              set: item.fullName,
                                            }
                                          : undefined,
                                      companyName:
                                        item.companyName !== undefined
                                          ? {
                                              set: item.companyName,
                                            }
                                          : undefined,
                                      companyWebsite:
                                        item.companyWebsite !== undefined
                                          ? {
                                              set: item.companyWebsite,
                                            }
                                          : undefined,
                                      jobRole:
                                        item.jobRole !== undefined
                                          ? {
                                              set: item.jobRole,
                                            }
                                          : undefined,
                                      professionalInvestorConfirmed:
                                        item.professionalInvestorConfirmed !==
                                        undefined
                                          ? {
                                              set: item.professionalInvestorConfirmed,
                                            }
                                          : undefined,
                                      status:
                                        item.status !== undefined
                                          ? {
                                              set: item.status,
                                            }
                                          : undefined,
                                      queuePosition:
                                        item.queuePosition !== undefined
                                          ? {
                                              set: item.queuePosition,
                                            }
                                          : undefined,
                                      reviewedAt:
                                        item.reviewedAt !== undefined
                                          ? {
                                              set: item.reviewedAt,
                                            }
                                          : undefined,
                                      inviteToken: item.inviteToken
                                        ? typeof item.inviteToken ===
                                            'object' &&
                                          Object.keys(item.inviteToken)
                                            .length === 1 &&
                                          (Object.keys(item.inviteToken)[0] ===
                                            'id' ||
                                            Object.keys(item.inviteToken)[0] ===
                                              'symbol')
                                          ? {
                                              connect: {
                                                id: item.inviteToken.id,
                                              },
                                            }
                                          : {
                                              upsert: {
                                                where: {
                                                  id:
                                                    item.inviteToken.id !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.inviteToken.id,
                                                        }
                                                      : undefined,
                                                  email:
                                                    item.inviteToken.email !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.inviteToken
                                                              .email,
                                                        }
                                                      : undefined,
                                                  waitlistEntryId:
                                                    item.inviteToken
                                                      .waitlistEntryId !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.inviteToken
                                                              .waitlistEntryId,
                                                        }
                                                      : undefined,
                                                },
                                                update: {
                                                  id:
                                                    item.inviteToken.id !==
                                                    undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .id,
                                                        }
                                                      : undefined,
                                                  token:
                                                    item.inviteToken.token !==
                                                    undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .token,
                                                        }
                                                      : undefined,
                                                  email:
                                                    item.inviteToken.email !==
                                                    undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .email,
                                                        }
                                                      : undefined,
                                                  used:
                                                    item.inviteToken.used !==
                                                    undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .used,
                                                        }
                                                      : undefined,
                                                  usedAt:
                                                    item.inviteToken.usedAt !==
                                                    undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .usedAt,
                                                        }
                                                      : undefined,
                                                  expiresAt:
                                                    item.inviteToken
                                                      .expiresAt !== undefined
                                                      ? {
                                                          set: item.inviteToken
                                                            .expiresAt,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  token:
                                                    item.inviteToken.token !==
                                                    undefined
                                                      ? item.inviteToken.token
                                                      : undefined,
                                                  email:
                                                    item.inviteToken.email !==
                                                    undefined
                                                      ? item.inviteToken.email
                                                      : undefined,
                                                  used:
                                                    item.inviteToken.used !==
                                                    undefined
                                                      ? item.inviteToken.used
                                                      : undefined,
                                                  usedAt:
                                                    item.inviteToken.usedAt !==
                                                    undefined
                                                      ? item.inviteToken.usedAt
                                                      : undefined,
                                                  expiresAt:
                                                    item.inviteToken
                                                      .expiresAt !== undefined
                                                      ? item.inviteToken
                                                          .expiresAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                    create: {
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      fullName:
                                        item.fullName !== undefined
                                          ? item.fullName
                                          : undefined,
                                      companyName:
                                        item.companyName !== undefined
                                          ? item.companyName
                                          : undefined,
                                      companyWebsite:
                                        item.companyWebsite !== undefined
                                          ? item.companyWebsite
                                          : undefined,
                                      jobRole:
                                        item.jobRole !== undefined
                                          ? item.jobRole
                                          : undefined,
                                      professionalInvestorConfirmed:
                                        item.professionalInvestorConfirmed !==
                                        undefined
                                          ? item.professionalInvestorConfirmed
                                          : undefined,
                                      status:
                                        item.status !== undefined
                                          ? item.status
                                          : undefined,
                                      queuePosition:
                                        item.queuePosition !== undefined
                                          ? item.queuePosition
                                          : undefined,
                                      reviewedAt:
                                        item.reviewedAt !== undefined
                                          ? item.reviewedAt
                                          : undefined,
                                      inviteToken: item.inviteToken
                                        ? typeof item.inviteToken ===
                                            'object' &&
                                          Object.keys(item.inviteToken)
                                            .length === 1 &&
                                          Object.keys(item.inviteToken)[0] ===
                                            'id'
                                          ? {
                                              connect: {
                                                id: item.inviteToken.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.inviteToken.id !==
                                                    undefined
                                                      ? item.inviteToken.id
                                                      : undefined,
                                                  waitlistEntryId:
                                                    item.inviteToken
                                                      .waitlistEntryId !==
                                                    undefined
                                                      ? item.inviteToken
                                                          .waitlistEntryId
                                                      : undefined,
                                                  email:
                                                    item.inviteToken.email !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.inviteToken
                                                              .email,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  token:
                                                    item.inviteToken.token !==
                                                    undefined
                                                      ? item.inviteToken.token
                                                      : undefined,
                                                  email:
                                                    item.inviteToken.email !==
                                                    undefined
                                                      ? item.inviteToken.email
                                                      : undefined,
                                                  used:
                                                    item.inviteToken.used !==
                                                    undefined
                                                      ? item.inviteToken.used
                                                      : undefined,
                                                  usedAt:
                                                    item.inviteToken.usedAt !==
                                                    undefined
                                                      ? item.inviteToken.usedAt
                                                      : undefined,
                                                  expiresAt:
                                                    item.inviteToken
                                                      .expiresAt !== undefined
                                                      ? item.inviteToken
                                                          .expiresAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        dashboardLayouts: item.dashboardLayouts
                          ? Array.isArray(item.dashboardLayouts) &&
                            item.dashboardLayouts.length > 0 &&
                            item.dashboardLayouts.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                ('id' in item || 'symbol' in item) &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.dashboardLayouts.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                upsert: item.dashboardLayouts.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    update: {
                                      id:
                                        item.id !== undefined
                                          ? {
                                              set: item.id,
                                            }
                                          : undefined,
                                      role:
                                        item.role !== undefined
                                          ? {
                                              set: item.role,
                                            }
                                          : undefined,
                                      layout:
                                        item.layout !== undefined
                                          ? {
                                              set: item.layout,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      layout:
                                        item.layout !== undefined
                                          ? item.layout
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        llmConfiguration: item.llmConfiguration
                          ? typeof item.llmConfiguration === 'object' &&
                            Object.keys(item.llmConfiguration).length === 1 &&
                            (Object.keys(item.llmConfiguration)[0] === 'id' ||
                              Object.keys(item.llmConfiguration)[0] ===
                                'symbol')
                            ? {
                                connect: {
                                  id: item.llmConfiguration.id,
                                },
                              }
                            : {
                                upsert: {
                                  where: {
                                    id:
                                      item.llmConfiguration.id !== undefined
                                        ? {
                                            equals: item.llmConfiguration.id,
                                          }
                                        : undefined,
                                    userId:
                                      item.llmConfiguration.userId !== undefined
                                        ? {
                                            equals:
                                              item.llmConfiguration.userId,
                                          }
                                        : undefined,
                                  },
                                  update: {
                                    id:
                                      item.llmConfiguration.id !== undefined
                                        ? {
                                            set: item.llmConfiguration.id,
                                          }
                                        : undefined,
                                    defaultProvider:
                                      item.llmConfiguration.defaultProvider !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .defaultProvider,
                                          }
                                        : undefined,
                                    miniProvider:
                                      item.llmConfiguration.miniProvider !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .miniProvider,
                                          }
                                        : undefined,
                                    normalProvider:
                                      item.llmConfiguration.normalProvider !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .normalProvider,
                                          }
                                        : undefined,
                                    advancedProvider:
                                      item.llmConfiguration.advancedProvider !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .advancedProvider,
                                          }
                                        : undefined,
                                    miniModel:
                                      item.llmConfiguration.miniModel !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .miniModel,
                                          }
                                        : undefined,
                                    normalModel:
                                      item.llmConfiguration.normalModel !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .normalModel,
                                          }
                                        : undefined,
                                    advancedModel:
                                      item.llmConfiguration.advancedModel !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .advancedModel,
                                          }
                                        : undefined,
                                    openaiApiKey:
                                      item.llmConfiguration.openaiApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .openaiApiKey,
                                          }
                                        : undefined,
                                    anthropicApiKey:
                                      item.llmConfiguration.anthropicApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .anthropicApiKey,
                                          }
                                        : undefined,
                                    deepseekApiKey:
                                      item.llmConfiguration.deepseekApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .deepseekApiKey,
                                          }
                                        : undefined,
                                    kimiApiKey:
                                      item.llmConfiguration.kimiApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .kimiApiKey,
                                          }
                                        : undefined,
                                    qwenApiKey:
                                      item.llmConfiguration.qwenApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .qwenApiKey,
                                          }
                                        : undefined,
                                    xaiApiKey:
                                      item.llmConfiguration.xaiApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .xaiApiKey,
                                          }
                                        : undefined,
                                    geminiApiKey:
                                      item.llmConfiguration.geminiApiKey !==
                                      undefined
                                        ? {
                                            set: item.llmConfiguration
                                              .geminiApiKey,
                                          }
                                        : undefined,
                                  },
                                  create: {
                                    defaultProvider:
                                      item.llmConfiguration.defaultProvider !==
                                      undefined
                                        ? item.llmConfiguration.defaultProvider
                                        : undefined,
                                    miniProvider:
                                      item.llmConfiguration.miniProvider !==
                                      undefined
                                        ? item.llmConfiguration.miniProvider
                                        : undefined,
                                    normalProvider:
                                      item.llmConfiguration.normalProvider !==
                                      undefined
                                        ? item.llmConfiguration.normalProvider
                                        : undefined,
                                    advancedProvider:
                                      item.llmConfiguration.advancedProvider !==
                                      undefined
                                        ? item.llmConfiguration.advancedProvider
                                        : undefined,
                                    miniModel:
                                      item.llmConfiguration.miniModel !==
                                      undefined
                                        ? item.llmConfiguration.miniModel
                                        : undefined,
                                    normalModel:
                                      item.llmConfiguration.normalModel !==
                                      undefined
                                        ? item.llmConfiguration.normalModel
                                        : undefined,
                                    advancedModel:
                                      item.llmConfiguration.advancedModel !==
                                      undefined
                                        ? item.llmConfiguration.advancedModel
                                        : undefined,
                                    openaiApiKey:
                                      item.llmConfiguration.openaiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.openaiApiKey
                                        : undefined,
                                    anthropicApiKey:
                                      item.llmConfiguration.anthropicApiKey !==
                                      undefined
                                        ? item.llmConfiguration.anthropicApiKey
                                        : undefined,
                                    deepseekApiKey:
                                      item.llmConfiguration.deepseekApiKey !==
                                      undefined
                                        ? item.llmConfiguration.deepseekApiKey
                                        : undefined,
                                    kimiApiKey:
                                      item.llmConfiguration.kimiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.kimiApiKey
                                        : undefined,
                                    qwenApiKey:
                                      item.llmConfiguration.qwenApiKey !==
                                      undefined
                                        ? item.llmConfiguration.qwenApiKey
                                        : undefined,
                                    xaiApiKey:
                                      item.llmConfiguration.xaiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.xaiApiKey
                                        : undefined,
                                    geminiApiKey:
                                      item.llmConfiguration.geminiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.geminiApiKey
                                        : undefined,
                                  },
                                },
                              }
                          : undefined,
                      },
                      create: {
                        name: item.name !== undefined ? item.name : undefined,
                        email:
                          item.email !== undefined ? item.email : undefined,
                        emailVerified:
                          item.emailVerified !== undefined
                            ? item.emailVerified
                            : undefined,
                        image:
                          item.image !== undefined ? item.image : undefined,
                        deletedAt:
                          item.deletedAt !== undefined
                            ? item.deletedAt
                            : undefined,
                        role: item.role !== undefined ? item.role : undefined,
                        bio: item.bio !== undefined ? item.bio : undefined,
                        jobTitle:
                          item.jobTitle !== undefined
                            ? item.jobTitle
                            : undefined,
                        plan: item.plan !== undefined ? item.plan : undefined,
                        openaiAPIKey:
                          item.openaiAPIKey !== undefined
                            ? item.openaiAPIKey
                            : undefined,
                        openaiModel:
                          item.openaiModel !== undefined
                            ? item.openaiModel
                            : undefined,
                        passwordHash:
                          item.passwordHash !== undefined
                            ? item.passwordHash
                            : undefined,
                        avatarUrl:
                          item.avatarUrl !== undefined
                            ? item.avatarUrl
                            : undefined,
                        onboardingComplete:
                          item.onboardingComplete !== undefined
                            ? item.onboardingComplete
                            : undefined,
                        signupCategory:
                          item.signupCategory !== undefined
                            ? item.signupCategory
                            : undefined,
                        accounts: item.accounts
                          ? Array.isArray(item.accounts) &&
                            item.accounts.length > 0 &&
                            item.accounts.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.accounts.map((item: any) => ({
                                  id: item.id,
                                })),
                              }
                            : {
                                connectOrCreate: item.accounts.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      type:
                                        item.type !== undefined
                                          ? item.type
                                          : undefined,
                                      provider:
                                        item.provider !== undefined
                                          ? item.provider
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      refresh_token:
                                        item.refresh_token !== undefined
                                          ? item.refresh_token
                                          : undefined,
                                      access_token:
                                        item.access_token !== undefined
                                          ? item.access_token
                                          : undefined,
                                      expires_at:
                                        item.expires_at !== undefined
                                          ? item.expires_at
                                          : undefined,
                                      token_type:
                                        item.token_type !== undefined
                                          ? item.token_type
                                          : undefined,
                                      scope:
                                        item.scope !== undefined
                                          ? item.scope
                                          : undefined,
                                      id_token:
                                        item.id_token !== undefined
                                          ? item.id_token
                                          : undefined,
                                      session_state:
                                        item.session_state !== undefined
                                          ? item.session_state
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        sessions: item.sessions
                          ? Array.isArray(item.sessions) &&
                            item.sessions.length > 0 &&
                            item.sessions.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.sessions.map((item: any) => ({
                                  id: item.id,
                                })),
                              }
                            : {
                                connectOrCreate: item.sessions.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      sessionToken:
                                        item.sessionToken !== undefined
                                          ? item.sessionToken
                                          : undefined,
                                      expires:
                                        item.expires !== undefined
                                          ? item.expires
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        authenticators: item.authenticators
                          ? Array.isArray(item.authenticators) &&
                            item.authenticators.length > 0 &&
                            item.authenticators.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.authenticators.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.authenticators.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      credentialID:
                                        item.credentialID !== undefined
                                          ? item.credentialID
                                          : undefined,
                                      publicKey:
                                        item.publicKey !== undefined
                                          ? item.publicKey
                                          : undefined,
                                      counter:
                                        item.counter !== undefined
                                          ? item.counter
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        orgMemberships: item.orgMemberships
                          ? Array.isArray(item.orgMemberships) &&
                            item.orgMemberships.length > 0 &&
                            item.orgMemberships.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.orgMemberships.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.orgMemberships.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      organizationId:
                                        item.organizationId !== undefined
                                          ? {
                                              equals: item.organizationId,
                                            }
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      organization: item.organization
                                        ? typeof item.organization ===
                                            'object' &&
                                          Object.keys(item.organization)
                                            .length === 1 &&
                                          Object.keys(item.organization)[0] ===
                                            'id'
                                          ? {
                                              connect: {
                                                id: item.organization.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.organization.id !==
                                                    undefined
                                                      ? item.organization.id
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.organization
                                                              .name,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.organization.name !==
                                                    undefined
                                                      ? item.organization.name
                                                      : undefined,
                                                  slug:
                                                    item.organization.slug !==
                                                    undefined
                                                      ? item.organization.slug
                                                      : undefined,
                                                  logoUrl:
                                                    item.organization
                                                      .logoUrl !== undefined
                                                      ? item.organization
                                                          .logoUrl
                                                      : undefined,
                                                  website:
                                                    item.organization
                                                      .website !== undefined
                                                      ? item.organization
                                                          .website
                                                      : undefined,
                                                  businessType:
                                                    item.organization
                                                      .businessType !==
                                                    undefined
                                                      ? item.organization
                                                          .businessType
                                                      : undefined,
                                                  jurisdiction:
                                                    item.organization
                                                      .jurisdiction !==
                                                    undefined
                                                      ? item.organization
                                                          .jurisdiction
                                                      : undefined,
                                                  regulatoryStatus:
                                                    item.organization
                                                      .regulatoryStatus !==
                                                    undefined
                                                      ? item.organization
                                                          .regulatoryStatus
                                                      : undefined,
                                                  description:
                                                    item.organization
                                                      .description !== undefined
                                                      ? item.organization
                                                          .description
                                                      : undefined,
                                                  tradingDefaults:
                                                    item.organization
                                                      .tradingDefaults !==
                                                    undefined
                                                      ? item.organization
                                                          .tradingDefaults
                                                      : undefined,
                                                  llmDefaults:
                                                    item.organization
                                                      .llmDefaults !== undefined
                                                      ? item.organization
                                                          .llmDefaults
                                                      : undefined,
                                                  deletedAt:
                                                    item.organization
                                                      .deletedAt !== undefined
                                                      ? item.organization
                                                          .deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        fundAssignments: item.fundAssignments
                          ? Array.isArray(item.fundAssignments) &&
                            item.fundAssignments.length > 0 &&
                            item.fundAssignments.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.fundAssignments.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.fundAssignments.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      fundId:
                                        item.fundId !== undefined
                                          ? {
                                              equals: item.fundId,
                                            }
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      permissions:
                                        item.permissions !== undefined
                                          ? {
                                              set: item.permissions,
                                            }
                                          : undefined,
                                      fund: item.fund
                                        ? typeof item.fund === 'object' &&
                                          Object.keys(item.fund).length === 1 &&
                                          Object.keys(item.fund)[0] === 'id'
                                          ? {
                                              connect: {
                                                id: item.fund.id,
                                              },
                                            }
                                          : {
                                              connectOrCreate: {
                                                where: {
                                                  id:
                                                    item.fund.id !== undefined
                                                      ? item.fund.id
                                                      : undefined,
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.name,
                                                        }
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? {
                                                          equals:
                                                            item.fund.slug,
                                                        }
                                                      : undefined,
                                                  organizationId:
                                                    item.fund.organizationId !==
                                                    undefined
                                                      ? {
                                                          equals:
                                                            item.fund
                                                              .organizationId,
                                                        }
                                                      : undefined,
                                                },
                                                create: {
                                                  name:
                                                    item.fund.name !== undefined
                                                      ? item.fund.name
                                                      : undefined,
                                                  slug:
                                                    item.fund.slug !== undefined
                                                      ? item.fund.slug
                                                      : undefined,
                                                  description:
                                                    item.fund.description !==
                                                    undefined
                                                      ? item.fund.description
                                                      : undefined,
                                                  status:
                                                    item.fund.status !==
                                                    undefined
                                                      ? item.fund.status
                                                      : undefined,
                                                  tradingOverrides:
                                                    item.fund
                                                      .tradingOverrides !==
                                                    undefined
                                                      ? item.fund
                                                          .tradingOverrides
                                                      : undefined,
                                                  llmOverrides:
                                                    item.fund.llmOverrides !==
                                                    undefined
                                                      ? item.fund.llmOverrides
                                                      : undefined,
                                                  policyOverlays:
                                                    item.fund.policyOverlays !==
                                                    undefined
                                                      ? item.fund.policyOverlays
                                                      : undefined,
                                                  deletedAt:
                                                    item.fund.deletedAt !==
                                                    undefined
                                                      ? item.fund.deletedAt
                                                      : undefined,
                                                },
                                              },
                                            }
                                        : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        investorProfile: item.investorProfile
                          ? typeof item.investorProfile === 'object' &&
                            Object.keys(item.investorProfile).length === 1 &&
                            Object.keys(item.investorProfile)[0] === 'id'
                            ? {
                                connect: {
                                  id: item.investorProfile.id,
                                },
                              }
                            : {
                                connectOrCreate: {
                                  where: {
                                    id:
                                      item.investorProfile.id !== undefined
                                        ? item.investorProfile.id
                                        : undefined,
                                    userId:
                                      item.investorProfile.userId !== undefined
                                        ? item.investorProfile.userId
                                        : undefined,
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? {
                                            equals: item.investorProfile.name,
                                          }
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? {
                                            equals: item.investorProfile.email,
                                          }
                                        : undefined,
                                  },
                                  create: {
                                    name:
                                      item.investorProfile.name !== undefined
                                        ? item.investorProfile.name
                                        : undefined,
                                    email:
                                      item.investorProfile.email !== undefined
                                        ? item.investorProfile.email
                                        : undefined,
                                    type:
                                      item.investorProfile.type !== undefined
                                        ? item.investorProfile.type
                                        : undefined,
                                    kycStatus:
                                      item.investorProfile.kycStatus !==
                                      undefined
                                        ? item.investorProfile.kycStatus
                                        : undefined,
                                    walletAddress:
                                      item.investorProfile.walletAddress !==
                                      undefined
                                        ? item.investorProfile.walletAddress
                                        : undefined,
                                    deletedAt:
                                      item.investorProfile.deletedAt !==
                                      undefined
                                        ? item.investorProfile.deletedAt
                                        : undefined,
                                    investments: item.investorProfile
                                      .investments
                                      ? Array.isArray(
                                          item.investorProfile.investments
                                        ) &&
                                        item.investorProfile.investments
                                          .length > 0 &&
                                        item.investorProfile.investments.every(
                                          (item: any) =>
                                            typeof item === 'object' &&
                                            'id' in item &&
                                            Object.keys(item).length === 1
                                        )
                                        ? {
                                            connect:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  id: item.id,
                                                })
                                              ),
                                          }
                                        : {
                                            connectOrCreate:
                                              item.investorProfile.investments.map(
                                                (item: any) => ({
                                                  where: {
                                                    id:
                                                      item.id !== undefined
                                                        ? item.id
                                                        : undefined,
                                                    fundId:
                                                      item.fundId !== undefined
                                                        ? {
                                                            equals: item.fundId,
                                                          }
                                                        : undefined,
                                                    investorId:
                                                      item.investorId !==
                                                      undefined
                                                        ? {
                                                            equals:
                                                              item.investorId,
                                                          }
                                                        : undefined,
                                                  },
                                                  create: {
                                                    units:
                                                      item.units !== undefined
                                                        ? item.units
                                                        : undefined,
                                                    investedAt:
                                                      item.investedAt !==
                                                      undefined
                                                        ? item.investedAt
                                                        : undefined,
                                                    status:
                                                      item.status !== undefined
                                                        ? item.status
                                                        : undefined,
                                                  },
                                                })
                                              ),
                                          }
                                      : undefined,
                                  },
                                },
                              }
                          : undefined,
                        linkedProviders: item.linkedProviders
                          ? Array.isArray(item.linkedProviders) &&
                            item.linkedProviders.length > 0 &&
                            item.linkedProviders.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.linkedProviders.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.linkedProviders.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? {
                                              equals: item.providerAccountId,
                                            }
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? {
                                              equals: item.email,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      provider:
                                        item.provider !== undefined
                                          ? item.provider
                                          : undefined,
                                      providerAccountId:
                                        item.providerAccountId !== undefined
                                          ? item.providerAccountId
                                          : undefined,
                                      email:
                                        item.email !== undefined
                                          ? item.email
                                          : undefined,
                                      accessToken:
                                        item.accessToken !== undefined
                                          ? item.accessToken
                                          : undefined,
                                      refreshToken:
                                        item.refreshToken !== undefined
                                          ? item.refreshToken
                                          : undefined,
                                      expiresAt:
                                        item.expiresAt !== undefined
                                          ? item.expiresAt
                                          : undefined,
                                      linkedAt:
                                        item.linkedAt !== undefined
                                          ? item.linkedAt
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        accountLinkingRequests: item.accountLinkingRequests
                          ? Array.isArray(item.accountLinkingRequests) &&
                            item.accountLinkingRequests.length > 0 &&
                            item.accountLinkingRequests.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.accountLinkingRequests.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate:
                                  item.accountLinkingRequests.map(
                                    (item: any) => ({
                                      where: {
                                        id:
                                          item.id !== undefined
                                            ? item.id
                                            : undefined,
                                        userId:
                                          item.userId !== undefined
                                            ? {
                                                equals: item.userId,
                                              }
                                            : undefined,
                                        email:
                                          item.email !== undefined
                                            ? {
                                                equals: item.email,
                                              }
                                            : undefined,
                                        providerAccountId:
                                          item.providerAccountId !== undefined
                                            ? {
                                                equals: item.providerAccountId,
                                              }
                                            : undefined,
                                      },
                                      create: {
                                        email:
                                          item.email !== undefined
                                            ? item.email
                                            : undefined,
                                        provider:
                                          item.provider !== undefined
                                            ? item.provider
                                            : undefined,
                                        providerAccountId:
                                          item.providerAccountId !== undefined
                                            ? item.providerAccountId
                                            : undefined,
                                        status:
                                          item.status !== undefined
                                            ? item.status
                                            : undefined,
                                        verificationToken:
                                          item.verificationToken !== undefined
                                            ? item.verificationToken
                                            : undefined,
                                        userAgent:
                                          item.userAgent !== undefined
                                            ? item.userAgent
                                            : undefined,
                                        ipAddress:
                                          item.ipAddress !== undefined
                                            ? item.ipAddress
                                            : undefined,
                                        expiresAt:
                                          item.expiresAt !== undefined
                                            ? item.expiresAt
                                            : undefined,
                                        verifiedAt:
                                          item.verifiedAt !== undefined
                                            ? item.verifiedAt
                                            : undefined,
                                        approvedAt:
                                          item.approvedAt !== undefined
                                            ? item.approvedAt
                                            : undefined,
                                        rejectedAt:
                                          item.rejectedAt !== undefined
                                            ? item.rejectedAt
                                            : undefined,
                                      },
                                    })
                                  ),
                              }
                          : undefined,
                        reviewedWaitlistEntries: item.reviewedWaitlistEntries
                          ? Array.isArray(item.reviewedWaitlistEntries) &&
                            item.reviewedWaitlistEntries.length > 0 &&
                            item.reviewedWaitlistEntries.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.reviewedWaitlistEntries.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate:
                                  item.reviewedWaitlistEntries.map(
                                    (item: any) => ({
                                      where: {
                                        id:
                                          item.id !== undefined
                                            ? item.id
                                            : undefined,
                                        email:
                                          item.email !== undefined
                                            ? item.email
                                            : undefined,
                                      },
                                      create: {
                                        email:
                                          item.email !== undefined
                                            ? item.email
                                            : undefined,
                                        fullName:
                                          item.fullName !== undefined
                                            ? item.fullName
                                            : undefined,
                                        companyName:
                                          item.companyName !== undefined
                                            ? item.companyName
                                            : undefined,
                                        companyWebsite:
                                          item.companyWebsite !== undefined
                                            ? item.companyWebsite
                                            : undefined,
                                        jobRole:
                                          item.jobRole !== undefined
                                            ? item.jobRole
                                            : undefined,
                                        professionalInvestorConfirmed:
                                          item.professionalInvestorConfirmed !==
                                          undefined
                                            ? item.professionalInvestorConfirmed
                                            : undefined,
                                        status:
                                          item.status !== undefined
                                            ? item.status
                                            : undefined,
                                        queuePosition:
                                          item.queuePosition !== undefined
                                            ? item.queuePosition
                                            : undefined,
                                        reviewedAt:
                                          item.reviewedAt !== undefined
                                            ? item.reviewedAt
                                            : undefined,
                                        inviteToken: item.inviteToken
                                          ? typeof item.inviteToken ===
                                              'object' &&
                                            Object.keys(item.inviteToken)
                                              .length === 1 &&
                                            Object.keys(item.inviteToken)[0] ===
                                              'id'
                                            ? {
                                                connect: {
                                                  id: item.inviteToken.id,
                                                },
                                              }
                                            : {
                                                connectOrCreate: {
                                                  where: {
                                                    id:
                                                      item.inviteToken.id !==
                                                      undefined
                                                        ? item.inviteToken.id
                                                        : undefined,
                                                    waitlistEntryId:
                                                      item.inviteToken
                                                        .waitlistEntryId !==
                                                      undefined
                                                        ? item.inviteToken
                                                            .waitlistEntryId
                                                        : undefined,
                                                    email:
                                                      item.inviteToken.email !==
                                                      undefined
                                                        ? {
                                                            equals:
                                                              item.inviteToken
                                                                .email,
                                                          }
                                                        : undefined,
                                                  },
                                                  create: {
                                                    token:
                                                      item.inviteToken.token !==
                                                      undefined
                                                        ? item.inviteToken.token
                                                        : undefined,
                                                    email:
                                                      item.inviteToken.email !==
                                                      undefined
                                                        ? item.inviteToken.email
                                                        : undefined,
                                                    used:
                                                      item.inviteToken.used !==
                                                      undefined
                                                        ? item.inviteToken.used
                                                        : undefined,
                                                    usedAt:
                                                      item.inviteToken
                                                        .usedAt !== undefined
                                                        ? item.inviteToken
                                                            .usedAt
                                                        : undefined,
                                                    expiresAt:
                                                      item.inviteToken
                                                        .expiresAt !== undefined
                                                        ? item.inviteToken
                                                            .expiresAt
                                                        : undefined,
                                                  },
                                                },
                                              }
                                          : undefined,
                                      },
                                    })
                                  ),
                              }
                          : undefined,
                        dashboardLayouts: item.dashboardLayouts
                          ? Array.isArray(item.dashboardLayouts) &&
                            item.dashboardLayouts.length > 0 &&
                            item.dashboardLayouts.every(
                              (item: any) =>
                                typeof item === 'object' &&
                                'id' in item &&
                                Object.keys(item).length === 1
                            )
                            ? {
                                connect: item.dashboardLayouts.map(
                                  (item: any) => ({
                                    id: item.id,
                                  })
                                ),
                              }
                            : {
                                connectOrCreate: item.dashboardLayouts.map(
                                  (item: any) => ({
                                    where: {
                                      id:
                                        item.id !== undefined
                                          ? item.id
                                          : undefined,
                                      userId:
                                        item.userId !== undefined
                                          ? {
                                              equals: item.userId,
                                            }
                                          : undefined,
                                    },
                                    create: {
                                      role:
                                        item.role !== undefined
                                          ? item.role
                                          : undefined,
                                      layout:
                                        item.layout !== undefined
                                          ? item.layout
                                          : undefined,
                                    },
                                  })
                                ),
                              }
                          : undefined,
                        llmConfiguration: item.llmConfiguration
                          ? typeof item.llmConfiguration === 'object' &&
                            Object.keys(item.llmConfiguration).length === 1 &&
                            Object.keys(item.llmConfiguration)[0] === 'id'
                            ? {
                                connect: {
                                  id: item.llmConfiguration.id,
                                },
                              }
                            : {
                                connectOrCreate: {
                                  where: {
                                    id:
                                      item.llmConfiguration.id !== undefined
                                        ? item.llmConfiguration.id
                                        : undefined,
                                    userId:
                                      item.llmConfiguration.userId !== undefined
                                        ? item.llmConfiguration.userId
                                        : undefined,
                                  },
                                  create: {
                                    defaultProvider:
                                      item.llmConfiguration.defaultProvider !==
                                      undefined
                                        ? item.llmConfiguration.defaultProvider
                                        : undefined,
                                    miniProvider:
                                      item.llmConfiguration.miniProvider !==
                                      undefined
                                        ? item.llmConfiguration.miniProvider
                                        : undefined,
                                    normalProvider:
                                      item.llmConfiguration.normalProvider !==
                                      undefined
                                        ? item.llmConfiguration.normalProvider
                                        : undefined,
                                    advancedProvider:
                                      item.llmConfiguration.advancedProvider !==
                                      undefined
                                        ? item.llmConfiguration.advancedProvider
                                        : undefined,
                                    miniModel:
                                      item.llmConfiguration.miniModel !==
                                      undefined
                                        ? item.llmConfiguration.miniModel
                                        : undefined,
                                    normalModel:
                                      item.llmConfiguration.normalModel !==
                                      undefined
                                        ? item.llmConfiguration.normalModel
                                        : undefined,
                                    advancedModel:
                                      item.llmConfiguration.advancedModel !==
                                      undefined
                                        ? item.llmConfiguration.advancedModel
                                        : undefined,
                                    openaiApiKey:
                                      item.llmConfiguration.openaiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.openaiApiKey
                                        : undefined,
                                    anthropicApiKey:
                                      item.llmConfiguration.anthropicApiKey !==
                                      undefined
                                        ? item.llmConfiguration.anthropicApiKey
                                        : undefined,
                                    deepseekApiKey:
                                      item.llmConfiguration.deepseekApiKey !==
                                      undefined
                                        ? item.llmConfiguration.deepseekApiKey
                                        : undefined,
                                    kimiApiKey:
                                      item.llmConfiguration.kimiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.kimiApiKey
                                        : undefined,
                                    qwenApiKey:
                                      item.llmConfiguration.qwenApiKey !==
                                      undefined
                                        ? item.llmConfiguration.qwenApiKey
                                        : undefined,
                                    xaiApiKey:
                                      item.llmConfiguration.xaiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.xaiApiKey
                                        : undefined,
                                    geminiApiKey:
                                      item.llmConfiguration.geminiApiKey !==
                                      undefined
                                        ? item.llmConfiguration.geminiApiKey
                                        : undefined,
                                  },
                                },
                              }
                          : undefined,
                      },
                    })),
                  }
              : undefined,
          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_CUSTOMER,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyCustomer) {
          return response.data.updateManyCustomer;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn('Database connection error, retrying...', {
            retryCount,
            delayMs: delay,
          });
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Delete a single Customer record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Customer or null.
   */
  async delete(
    props: CustomerType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<CustomerType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const DELETE_ONE_CUSTOMER = gql`
          mutation deleteOneCustomer($where: CustomerWhereUniqueInput!) {
            deleteOneCustomer(where: $where) {
              id
            }
          }
        `;

        const variables = {
          where: {
            id: props.id ? props.id : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: DELETE_ONE_CUSTOMER,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneCustomer) {
          return response.data.deleteOneCustomer;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn('Database connection error, retrying...', {
            retryCount,
            delayMs: delay,
          });
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve a single Customer record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved Customer or null.
   */
  async get(
    props: CustomerType,
    globalClient?: ApolloClientType<NormalizedCacheObject>,
    whereInput?: any
  ): Promise<CustomerType | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const GET_CUSTOMER = gql`
          query getCustomer($where: CustomerWhereUniqueInput!) {
            getCustomer(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput
            ? whereInput
            : {
                id: props.id !== undefined ? props.id : undefined,
                stripeCustomerId:
                  props.stripeCustomerId !== undefined
                    ? props.stripeCustomerId
                    : undefined,
                stripeSubscriptionId:
                  props.stripeSubscriptionId !== undefined
                    ? props.stripeSubscriptionId
                    : undefined,
                authUserId:
                  props.authUserId !== undefined
                    ? {
                        equals: props.authUserId,
                      }
                    : undefined,
                name:
                  props.name !== undefined
                    ? {
                        equals: props.name,
                      }
                    : undefined,
                stripePriceId:
                  props.stripePriceId !== undefined
                    ? {
                        equals: props.stripePriceId,
                      }
                    : undefined,
              },
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_CUSTOMER,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        return response.data?.getCustomer ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Customer found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn('Database connection error, retrying...', {
            retryCount,
            delayMs: delay,
          });
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve all Customers records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Customer records or null.
   */
  async getAll(
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<CustomerType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const GET_ALL_CUSTOMER = gql`
          query getAllCustomer {
            customers {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_CUSTOMER,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        return response.data?.customers ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Customer found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn('Database connection error, retrying...', {
            retryCount,
            delayMs: delay,
          });
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Find multiple Customer records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found Customer records or null.
   */
  async findMany(
    props: CustomerType,
    globalClient?: ApolloClientType<NormalizedCacheObject>,
    whereInput?: any
  ): Promise<CustomerType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 2;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const FIND_MANY_CUSTOMER = gql`
          query findManyCustomer($where: CustomerWhereInput!) {
            customers(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput
            ? whereInput
            : {
                id:
                  props.id !== undefined
                    ? {
                        equals: props.id,
                      }
                    : undefined,
                authUserId:
                  props.authUserId !== undefined
                    ? {
                        equals: props.authUserId,
                      }
                    : undefined,
                name:
                  props.name !== undefined
                    ? {
                        equals: props.name,
                      }
                    : undefined,
                stripeCustomerId:
                  props.stripeCustomerId !== undefined
                    ? {
                        equals: props.stripeCustomerId,
                      }
                    : undefined,
                stripeSubscriptionId:
                  props.stripeSubscriptionId !== undefined
                    ? {
                        equals: props.stripeSubscriptionId,
                      }
                    : undefined,
                stripePriceId:
                  props.stripePriceId !== undefined
                    ? {
                        equals: props.stripePriceId,
                      }
                    : undefined,
              },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_CUSTOMER,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.customers) {
          return response.data.customers;
        } else {
          return [] as CustomerType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No Customer found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const baseDelay = Math.pow(2, retryCount) * 500;
          const jitter = Math.floor(Math.random() * 500);
          const delay = baseDelay + jitter; // Exponential backoff with jitter to avoid thundering herd
          logger.warn('Database connection error, retrying...', {
            retryCount,
            delayMs: delay,
          });
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },
};
