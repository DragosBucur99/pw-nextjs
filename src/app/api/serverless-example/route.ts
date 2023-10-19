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
  try {

    await new Promise<void>((resolve, reject) => {
      const child = exec('npx playwright test')
  
      // pipe to log files
      child.on('close', async (code) => {
        if (code != 0) {
          reject(`playwright return code is non-zero: ${code}`)
        } else {
          resolve()
        }
      })
    })
  } catch(e) {
    console.log('Avem o problema: ' + e) 
  }

  return NextResponse.json(
    { execution: 'finished' },
    {
      status: 200,
    },
  );
}