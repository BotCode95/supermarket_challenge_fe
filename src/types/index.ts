
export interface Product{
    _id:         string;
    name:        string;
    price_unit:  number;
    total:       number;
    stock:       number;
    category:    Category;
    user?:       UserProduct | string;
    created_at:  Date;
    modified_at: Date;   
}
export interface Category {
    _id:  string;
    name: string;
}

export interface UserProduct {
    _id: string;
    email: string
}



export interface User{
    _id:      string;
    name:     string;
    lastName: string;
    email:    string;
    role:     string;
    status:   boolean;    
}


export type StatusToken = 'checking' | 'authenticated' | 'no-authenticated'


export interface Login {
    email: string
    password: string
}