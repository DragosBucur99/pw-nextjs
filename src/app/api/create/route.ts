import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server';


export async function GET() {
    const rootDir = path.resolve();
    const testsDir = path.join(rootDir, 'tests');
    const filePath = path.join(testsDir, 'example2.spec.ts');
    const fileContent = "console.log('testing')";
  
    try {
      // Create the example2.spec.ts file and write content to it
      fs.writeFileSync(filePath, fileContent);
  
      // Read the file to display its content
      const readContent = fs.readFileSync(filePath, 'utf-8');
  
      return NextResponse.json(
        { data: readContent },
        {
          status: 200,
        }
      );
    } catch (error) {
      return NextResponse.json(
        { error: 'File creation or reading failed.' },
        {
          status: 500, // You can use a different status code based on the error type.
        }
      );
    }
  }
  

  
  