export interface commentsCreate {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}
export interface commentsList {
    postId: number;
    name: string;
    email: string;
    body: string;
}