#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { StaticSiteStack } from './lib/static-site-stack';

const app = new cdk.App();

const tags = {
  Application: 'mysmallbusinessblog',
  Environment: 'production',
  ManagedBy: 'cdk',
  Repository: 'MMeffert/mysmallbusinessblog.com',
};

const stack = new StaticSiteStack(app, 'mysmallbusinessblog-stack', {
  siteName: 'mysmallbusinessblog',
  domain: 'mysmallbusinessblog.com',
  githubRepo: 'MMeffert/mysmallbusinessblog.com',
  subdomains: ['www'],
  env: {
    account: '241654197557',
    region: 'us-east-1',
  },
});

Object.entries(tags).forEach(([key, value]) => {
  cdk.Tags.of(stack).add(key, value);
});

app.synth();
