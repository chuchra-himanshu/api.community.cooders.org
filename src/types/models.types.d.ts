interface PostSchemaInterface {
  user: ObjectId;
  description: string;
  attachments?: {
    url: string;
    id: string;
    type: "IMAGE" | "VIDEO" | "FILE" | "AUDIO";
  }[];
  snippets?: string[];
  tags?: string[];
  mentions?: ObjectId[];
  referenceLinks?: {
    title: string;
    url: string;
  }[];
  hidden: boolean;
  pinned: boolean;
  commentsEnabled: boolean;
  repliesEnabled: boolean;
  repostEnabled: boolean;
  quoteEnabled: boolean;
  private: boolean;
  isEdited: boolean;
  status: "PUBLISHED" | "DRAFT" | "DELETED";
}
