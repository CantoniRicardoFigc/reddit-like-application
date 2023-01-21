export class Post {
    user: String;
    message: String;
    n_like: number;
    commenti: String[]=[];
    constructor(user: string, message: string) {
        this.user=user;
        this.message=message;
        this.n_like=0;
    }
}