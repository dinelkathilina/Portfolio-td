import React from 'react';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  color: string;
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: React.ReactNode;
}