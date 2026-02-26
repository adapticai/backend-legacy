import * as TypeGraphQL from 'type-graphql';

/**
 * System-wide summary statistics for OptionsGreeksHistory data
 */
@TypeGraphQL.ObjectType('OptionsGreeksHistorySystemSummary', {})
export class OptionsGreeksHistorySystemSummary {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
    description: 'Total number of unique accounts with Greeks history',
  })
  totalAccounts!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
    description: 'Total number of Greeks snapshots across all accounts',
  })
  totalSnapshots!: number;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
    description: 'Timestamp of the oldest Greeks snapshot in the system',
  })
  oldestSnapshot!: Date | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
    description: 'Timestamp of the newest Greeks snapshot in the system',
  })
  newestSnapshot!: Date | null;
}
