export interface Comment {
  id: string;
  text: string;
  expenseId: string;
  date: number;
}

export interface Comments {
  [id: string]: Comment;
}
