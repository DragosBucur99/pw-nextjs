import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import util from 'util'
import { exec } from 'child_process'

export async function GET(request: NextRequest) {
  const execPromise = util.promisify(exec)
  try {
    await execPromise(`npx playwright install --with-deps`)
    console.log('Playwright installed')
  } catch (e: any) {
    console.error(`jobs: Playwright install failed (${e.message || e})`)
    console.error(e.stdout)
    console.error(e.stderr)
  }

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