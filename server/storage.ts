import { db } from "./db";
import {
  posts,
  messages,
  nowContent,
  type InsertPost,
  type InsertMessage,
  type Post,
  type Message,
  type NowEntry
} from "@shared/schema";
import { desc, eq } from "drizzle-orm";

export interface IStorage {
  getPosts(): Promise<Post[]>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  getNow(): Promise<NowEntry | undefined>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async getPosts(): Promise<Post[]> {
    return await db.select().from(posts).orderBy(desc(posts.createdAt));
  }

  async getPostBySlug(slug: string): Promise<Post | undefined> {
    const [post] = await db.select().from(posts).where(eq(posts.slug, slug));
    return post;
  }

  async getNow(): Promise<NowEntry | undefined> {
    const [now] = await db.select().from(nowContent).orderBy(desc(nowContent.updatedAt)).limit(1);
    return now;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }
}

export const storage = new DatabaseStorage();
