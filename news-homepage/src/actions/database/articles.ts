"use server";
import { SelectArticle } from "@/src/lib/database/schema";
import { mockTrendingArticles, mockRecentArticles } from "@/src/lib/data/data";

export async function getTrending(): Promise<SelectArticle[]> {
  return mockTrendingArticles;
}

export async function getRecent(): Promise<SelectArticle[]> {
  return mockRecentArticles;
}

export async function getMostRecent(): Promise<SelectArticle> {
  return mockRecentArticles[0];
}
