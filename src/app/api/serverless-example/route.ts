import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { exec } from 'child_process'

// export function GET(request: NextRequest) {
//   return NextResponse.json(
//     {
//       body: request.body,
//       path: request.nextUrl.pathname,
//       query: request.nextUrl.search,
//     },
//     {
//       status: 200,
//     },
//   );
// }



export async function GET(request: NextRequest) {
  await new Promise<void>((resolve, reject) => {
    const child = exec('npx playwright test')

    child.on('close', async (code) => {
      if (code != 0) {
        reject(`playwright return code is non-zero: ${code}`)
      } else {
        console.log("Done")
        resolve()
      }
    })
  })

  return NextResponse.json(
    {
      body: request.body,
      path: request.nextUrl.pathname,
      query: request.nextUrl.search,
    },
    {
      status: 200,
    },
  );
} 