import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export const GET = (req) => {
    return Response.json({ message: "ranking" }, { status: 401 })
}
