export interface ISeoConfig {
  urlFrontEnd: string;
}

export const configSeo: ISeoConfig = {
  urlFrontEnd: `${
    process?.env?.NEXT_PUBLIC_FRONT_URL || 'http://localhost:3000'
  }`,
};
