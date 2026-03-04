import { db } from "./db";
import {
  photos,
  messages,
  type InsertPhoto,
  type InsertMessage,
  type Photo,
  type Message
} from "@shared/schema";

export interface IStorage {
  getPhotos(): Promise<Photo[]>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async getPhotos(): Promise<Photo[]> {
    return await db.select().from(photos);
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }
}

export const storage = new DatabaseStorage();
