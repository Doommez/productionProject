export interface User {
    id: number;
    name: string;
    username: string;
    createdAt: string;
    updateAt: string;
    // roles: Role[]
    // comments: Comment[]
}

export interface UserSchema {
    authData?: User;
}
