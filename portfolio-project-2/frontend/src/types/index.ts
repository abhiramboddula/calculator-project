export interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

export interface PortfolioResponse {
    items: PortfolioItem[];
    total: number;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}