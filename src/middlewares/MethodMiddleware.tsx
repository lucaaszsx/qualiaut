import type { NextApiRequest, NextApiResponse } from 'next';
import { StatusCodes } from 'http-status-codes';

export type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
export function MethodMiddleware(
    methods: Method[],
    handler: (req: NextApiRequest, res: NextApiResponse) => void | Promise<void>
) {
    return async(req: NextApiRequest, res: NextApiResponse) => {
        if (!methods.includes(req.method as Method)) return res.status(StatusCodes.METHOD_NOT_ALLOWED).send({
            message: `Cannot ${req.method} ${req.url?.split('?').at(0)}`,
            code: StatusCodes.METHOD_NOT_ALLOWED
        });

        return handler(req, res);
    }
}