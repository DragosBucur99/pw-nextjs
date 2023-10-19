import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const rootDir = path.resolve();
  const testsDir = path.join(rootDir, 'tests');
  const newFolderDir = path.join(testsDir, 'newFolder'); // Path for the new folder
  const filePath = path.join(newFolderDir, 'example2.spec.ts'); // Path for the new file
  const fileContent = "console.log('testing')";

  try {
    // Create the 'newFolder' directory if it doesn't exist
    if (!fs.existsSync(newFolderDir)) {
      fs.mkdirSync(newFolderDir);
    }

    // Create the 'example2.spec.ts' file inside 'newFolder' and write content to it
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
