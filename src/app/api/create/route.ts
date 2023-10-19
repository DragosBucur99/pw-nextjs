import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server';


export async function GET() {
    const rootDir = path.resolve();
    const filePath = path.join(rootDir, 'tests', 'example.spec.ts');
  
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      return NextResponse.json(
        { data: fileContent,
        rootDir },
        {
          status: 200,
        }
      );
    } catch (error) {
      return NextResponse.json(
        { error: 'File not found or could not be read.' },
        {
          status: 404, // You can use a different status code based on the error type.
        }
      );
    }
  }
  

  
  