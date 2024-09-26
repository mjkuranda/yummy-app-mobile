type HttpStatusCode =
    | 200  // OK
    | 201  // Created
    | 400  // Bad Request
    | 401  // Unauthorized
    | 403  // Forbidden
    | 404  // Not Found
    | 500  // Internal Server Error
    | 502  // Bad Gateway
    | 503; // Service Unavailable

type ApiErrorContext = `${string}/${string}`;

export interface ApiErrorResponse {
    context: ApiErrorContext,
    message: string,
    path: string,
    statusCode: HttpStatusCode,
    timestamp: `${number}-${number}-${number}T${string}:${string}:${string}.${number}Z`
}

export class ApiError extends Error {
    constructor(private readonly statusCode: HttpStatusCode, message?: string) {
        super(message ?? 'ApiError occurred.');
    }
}

export class BadRequestError extends ApiError {
    constructor(message: string, context: ApiErrorContext) {
        super(400, getBadRequestMessage(message, context));
    }
}

export class UnauthorizedError extends ApiError {
    constructor(message: string) {
        super(401, message);
    }
}

export class ForbiddenError extends ApiError {
    constructor(message: string) {
        super(403, message);
    }
}

export class NotFoundError extends ApiError {
    constructor(message: string) {
        super(404, message);
    }
}

export class NotFoundActivationForUser extends NotFoundError {
    constructor() {
        super('Not found any request for activation');
    }
}

export function throwApiError(res: ApiErrorResponse): never {
    switch (res.statusCode) {
    case 400:
        throw new BadRequestError(res.message, res.context);
    case 401:
        throw new UnauthorizedError(res.message);
    case 403:
        throw new ForbiddenError(res.message);
    case 404:
        if (res.message.includes('Not found any request for activation')) {
            throw new NotFoundActivationForUser();
        }
    }

    throw new Error('Wystąpił nieoczekiwany błąd.');
}

// export function handleApiError(err: ApiError, router: AppRouterInstance, userContext: UserContextValues): void {
//     if (err instanceof UnauthorizedError) {
//         toastInfo('Twoja sesja wygasła. Zaloguj się ponownie.');
//         router.push('/users/login');
//         userContext.logoutUser();
//     }
//
//     if (err instanceof ForbiddenError) {
//         toastError('Nie jesteś uprawniony do wykonywania akcji admina.');
//         router.push('/');
//     }
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getBadRequestMessage(message: string, context: ApiErrorContext): string {
    if (message.startsWith('Incorrect credentials')) {
        return 'Niepoprawne dane logowania';
    }

    if (message.includes('login has already exists')) {
        return 'Wprowadzony login już istnieje';
    }

    if (message.includes('User') && message.includes('does not exist')) {
        return 'Użytkownik o podanym loginie nie istnieje';
    }

    return 'Wystąpił błąd';
}