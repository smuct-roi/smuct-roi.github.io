// helpers.js — shared utility helpers used across the app
// - normalizeUrl: sanitizes/normalizes social links
// - findMemberByName: finds a member by exact name match (case-insensitive)

import { advisors, supervisors, developers } from '../data/members';

export const normalizeUrl = (u) => {
  if (!u) return null;
  if (u === '#') return null;
  const s = String(u).trim();
  if (s.startsWith('http://') || s.startsWith('https://')) return s;
  return `https://${s}`;
};

const allMembers = [...advisors, ...supervisors, ...developers];

export const findMemberByName = (name) => {
  if (!name) return null;
  const target = String(name).toLowerCase().trim();
  return allMembers.find(m => String(m.name).toLowerCase().trim() === target) || null;
};
