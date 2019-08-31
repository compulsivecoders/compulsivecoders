import * as dotenv from 'dotenv';
import * as Joi from '@hapi/joi';
import * as fs from 'fs';


export interface EnvConfig {
    [key: string]: string;
}

export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor(filePath: string) {
        const config = dotenv.parse(fs.readFileSync(filePath))
        this.envConfig = this.validateInput(config);
    }

    get(key: string): string {
        return this.envConfig[key];
    }

    /**
     * Ensures all needed variables are set, and returns the validated JavaScript object
     * including the applied default values.
     */
    private validateInput(envConfig: EnvConfig): EnvConfig {
        const envVarsSchema: Joi.ObjectSchema = Joi.object({
            NODE_ENV: Joi.string()
              .valid(['development', 'production', 'test', 'provision'])
              .default('development'),
            BASE_URL: Joi.string().required(),
            DB_NAME: Joi.string().required(),
            DB_HOSTNAME: Joi.string().required(),
            DB_USERNAME: Joi.string().required(),
            DB_PASSWORD: Joi.string().required(),
            DB_PORT: Joi.number().default(5432),
        });

        const { error, value: validatedEnvConfig } = Joi.validate(
          envConfig,
          envVarsSchema,
        );
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedEnvConfig;
    }

    get nodeEnv(): string {
        return this.envConfig.NODE_ENV;
    }

    get dbName(): string {
        return this.envConfig.DB_NAME;
    }

    get dbHost(): string {
        return this.envConfig.DB_HOSTNAME;
    }

    get dbUsername(): string {
        return this.envConfig.DB_USERNAME;
    }

    get dbPassword(): string {
        return this.envConfig.DB_PASSWORD;
    }

    get dbPort(): number {
        return Number(this.envConfig.DB_PORT);
    }
}
