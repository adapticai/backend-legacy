import fs from 'fs';
import path from 'path';
import { findChangedModels } from './schema-utils.mjs';
import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const { MY_AWS_REGION, MY_AWS_ACCESS_KEY_ID, MY_AWS_SECRET_ACCESS_KEY } = process.env;

// Initialize Lambda Client
const lambdaClient = new LambdaClient({
  region: MY_AWS_REGION,
  credentials: {
    accessKeyId: MY_AWS_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: MY_AWS_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY,
  }
});

async function updateBackendFunctions() {
  const schemaPath = path.join(process.cwd(), 'prisma', 'schema.prisma');
  const prevSchemaPath = path.join(process.cwd(), 'prisma', 'prevSchema.prisma');

  // Load the current and previous schema files
  const schema = fs.readFileSync(schemaPath, 'utf-8');
  const prevSchema = fs.readFileSync(prevSchemaPath, 'utf-8');

  // Identify the models that have changed
  const changedModels = findChangedModels(schema, prevSchema);

  if (changedModels.length > 0) {

    console.log('Changed models:', changedModels);

    console.log('Updating backend functions...');
    // Prepare the payload for invoking the createOrUpdateBackendFunctions Lambda function
    const payload = { contentModels: changedModels };

    // Invoke the createOrUpdateBackendFunctions Lambda function
    const command = new InvokeCommand({
      FunctionName: 'createOrUpdateBackendFunctions',
      Payload: Buffer.from(JSON.stringify(payload)),
    });

    await lambdaClient.send(command);

    console.log('Backend functions updated successfully');

    // Update prevSchema.prisma with the current schema.prisma content
    fs.writeFileSync(prevSchemaPath, schema);
  }
}

updateBackendFunctions().catch(console.error);
