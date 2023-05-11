import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

/*
- fs is a Node.js module that let's you read files from the file system.
- path is a Node.js module that let's you manipulate file paths.
- matter is a library that let's you parse the metadata in each markdown file.
- In Next.js, the lib folder does not have an assigned name like the pages folder, so
 you can name it anything. It's usually convention to use lib or utils.
*/


export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// export async function getSortedPostsData() {
//     // Instead of the file system,
//     // fetch post data from an external API endpoint
//     const res = await fetch('..');
//     return res.json();
//   }