// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse } from 'next/server'

export function middleware(request) {
    const { nextUrl } = request

    nextUrl.searchParams.set('middlewareEnv', process.env.MIDDLEWARE_ENV)
    return NextResponse.rewrite(nextUrl)
}