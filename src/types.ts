/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface StepType {
  number: number;
  title: string;
  description: string;
  badge?: string;
  icon: string; // Lucide icon name
}

export interface ClientLogo {
  name: string;
  icon?: string;
}

export interface WebsiteType {
  id: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  image: string;
  icon: string;
  tagline: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  title: string;
  description: string;
  metrics: string;
  metricLabel: string;
  image: string;
  primaryColor: string;
  logoText: string;
  mockupText?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  badge?: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export interface PromiseType {
  id: string;
  title: string;
  description: string;
  icon: string;
}
