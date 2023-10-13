import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { getMetadataArgsStorage } from 'routing-controllers';
import { routingControllersToSpec } from 'routing-controllers-openapi';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { routingControllerOptions } from '../../config/Routing';
import { SWAGGER_CONFIG } from '../../config/Env';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaultMetadataStorage } = require('class-transformer/cjs/storage');

export function useSwagger(app: express.Application) {
  const schemas = validationMetadatasToSchemas({
    refPointerPrefix: '#/components/schemas/',
    classTransformerMetadataStorage: defaultMetadataStorage,
  });

  const storage = getMetadataArgsStorage();
  const spec = routingControllersToSpec(storage, routingControllerOptions, {
    components: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      schemas,
    },
    security: [{ bearerAuth: [] }],
    info: {
      title: 'very short url',
      description: 'very short url API',
      version: '1.0.0',
    },
  });

  app.use(SWAGGER_CONFIG.ROUTE, swaggerUi.serve, swaggerUi.setup(spec));
}
