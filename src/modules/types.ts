// src/modules/types.ts
export interface FieldType {
  isScalar: boolean;
  name: string;
  isList: boolean;
  isNullable: boolean;
  isFieldUpdate?: boolean;
  isFilterObject?: boolean;
  isSetObject?: boolean;
  gqlExclude?: boolean;
  gqlSkip?: boolean;
  ofType?: FieldType | FieldType[];
}

export interface FieldDefinition {
  name: string;
  type: FieldType;
}

export interface InputTypes {
  create: string;
  createMany: string;
  update: string;
  updateMany: string;
  whereUnique: string;
  scalarWhere: string;
  where: string;
}

export interface InputTypePaths {
  create: string;
  createMany: string;
  update: string;
  updateMany: string;
  whereUnique: string;
  scalarWhere: string;
  where: string;
}
