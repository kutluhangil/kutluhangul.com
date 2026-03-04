import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { z } from "zod";

function parseWithLogging<T>(schema: z.ZodSchema<T>, data: unknown, label: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(`[Zod] ${label} validation failed:`, result.error.format());
    throw result.error;
  }
  return result.data;
}

export function usePhotos() {
  return useQuery({
    queryKey: [api.photos.list.path],
    queryFn: async () => {
      const res = await fetch(api.photos.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch photos");
      const data = await res.json();
      return parseWithLogging(api.photos.list.responses[200], data, "photos.list");
    },
  });
}
