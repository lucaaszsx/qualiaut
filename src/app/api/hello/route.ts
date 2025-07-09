import type { NextRequest } from 'next/server';
import { StatusCodes } from 'http-status-codes';

export type HelloRouteResponse = { message: string };
export async function GET(req: NextRequest): Promise<Response> {
    return Response.json({ message: 'Hello, world!' } as HelloRouteResponse, {
        status: StatusCodes.OK
    });
}