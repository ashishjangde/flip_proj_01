export interface ApiResponse<T> {
    localDateTime: Date;
    data : T | null;
    apiError?: ApiError | [];
}

export interface ApiError {
    statusCode: number;
    message: string;
    errors?: string[];
}