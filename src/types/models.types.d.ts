interface PostSchemaInterface {
  user: ObjectId;
  description: string;
  snippets?: string[];
  tags?: string[];
  mentions?: ObjectId[];
  attachments?: {
    url: string;
    id: string;
    type: "IMAGE" | "VIDEO" | "FILE" | "AUDIO";
  }[];
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
  quoteId?: ObjectId;
  repostId?: ObjectId;
}

interface CommentSchemaInterface {
  user: ObjectId;
  post: ObjectId;
  content: string;
  snippets?: string[];
  mentions?: ObjectId[];
  attachments?: {
    url: string;
    id: string;
    type: "IMAGE" | "VIDEO" | "FILE" | "AUDIO";
  }[];
  referenceLinks?: {
    title: string;
    url: string;
  }[];
  hidden: boolean;
  pinned: boolean;
  repliesEnabled: boolean;
  quoteEnabled: boolean;
  isEdited: boolean;
  status: "PUBLISHED" | "DRAFT" | "DELETED";
  quoteId?: ObjectId;
}

interface ReplySchemaInterface {
  user: ObjectId;
  post: ObjectId;
  comment: ObjectId;
  content: string;
  snippets?: string[];
  mentions?: ObjectId[];
  attachments?: {
    url: string;
    id: string;
    type: "IMAGE" | "VIDEO" | "FILE" | "AUDIO";
  }[];
  referenceLinks?: {
    title: string;
    url: string;
  }[];
  hidden: boolean;
  pinned: boolean;
  quoteEnabled: boolean;
  isEdited: boolean;
  status: "PUBLISHED" | "DRAFT" | "DELETED";
  quoteId?: ObjectId;
}

interface ReactionSchemaInterface {
  user: ObjectId;
  targetModel: "POST" | "COMMENT" | "REPLY";
  targetId: ObjectId;
}

interface FollowSchemaInterface {
  sender: ObjectId;
  receiver: ObjectId;
  status: "ACCEPTED" | "REJECTED" | "PENDING";
}
