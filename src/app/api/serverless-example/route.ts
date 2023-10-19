import { NextResponse } from 'next/server';
import fs from 'fs'
import path from 'path'
import util from 'util'
import { exec } from 'child_process'


const execPromise = util.promisify(exec)

 
// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const hasTitle = searchParams.has('title');
//   const title = hasTitle
//     ? searchParams.get('title')?.slice(0, 100)
//     : 'My default title';
 
//   return NextResponse.json(
//     { title },
//     {
//       status: 200,
//     },
//   );

// }
export async function GET() {
  const execPromise = util.promisify(exec)
  try {
    await execPromise(`npm ci && npx playwright install`)
  } catch (e: any) {
    console.error(`jobs: Playwright install failed (${e.message || e})`)
    console.error(e.stdout)
    console.error(e.stderr)
  }

  try {
    const child = exec('npx playwright test');
    let output = ''; // Variable to store the command output
    let errorOutput = ''

    // Attach event listeners to capture the output
    child.stdout?.on('data', (data) => {
      output += data;
    });

    child.stderr?.on('data', (data) => {
      errorOutput += data; // Log any errors to the console
    });

    // Promise that resolves when the command completes
    await new Promise<void>((resolve, reject) => {
      child.on('close', (code) => {
        if (code !== 0) {
          const errorMessage = `playwright return code is non-zero: ${code}\n${errorOutput}`;
          reject(errorMessage);
        } else {
          resolve();
        }
      });
    });

    return NextResponse.json(
      { data: output },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.error('Avem o problema: ' + e);
    return NextResponse.json(
      { data: e },
      {
        status: 500,
      }
    );
  }
}