import {
  type InsertPost,
  type InsertMessage,
  type Post,
  type Message,
  type NowEntry,
} from "@shared/schema";

export interface IStorage {
  getPosts(): Promise<Post[]>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  getNow(): Promise<NowEntry | undefined>;
  createMessage(message: InsertMessage): Promise<Message>;
}

// In-memory fallback storage for development without a database
class MemoryStorage implements IStorage {
  private messages: Message[] = [];
  private messageIdCounter = 1;

  async getPosts(): Promise<Post[]> {
    return [];
  }

  async getPostBySlug(_slug: string): Promise<Post | undefined> {
    return undefined;
  }

  async getNow(): Promise<NowEntry | undefined> {
    return undefined;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const message: Message = {
      id: this.messageIdCounter++,
      ...insertMessage,
      createdAt: new Date(),
    };
    this.messages.push(message);
    return message;
  }
}

// Attempt to load DatabaseStorage only when DATABASE_URL is set
async function createStorage(): Promise<IStorage> {
  if (!process.env.DATABASE_URL) {
    console.log("[storage] No DATABASE_URL — using in-memory storage");
    return new MemoryStorage();
  }

  try {
    const { DatabaseStorage } = await import("./db-storage.js");
    return new DatabaseStorage();
  } catch (err) {
    console.warn("[storage] Failed to connect to database, falling back to in-memory storage:", err);
    return new MemoryStorage();
  }
}

export const storagePromise = createStorage();
export let storage: IStorage = new MemoryStorage();

storagePromise.then((s) => {
  storage = s;
});
