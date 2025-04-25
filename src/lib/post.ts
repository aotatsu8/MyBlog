import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'src/posts');

// Markdown ファイルのデータ型を定義
export interface PostData {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
}

export interface MatterData {
  title: string;
  date: string;
  thumbnail: string;
}

// mdファイルのデータを取り出す
export function getPostsData(): PostData[] {
  // postsディレクトリの中にあるファイル名を取得
  const fileNames = fs.readdirSync(postDirectory);

  // ファイル名を元にidを取得
  const allPostData = fileNames.map((fileName) => {
    // idはファイル名から.mdを取り除いたもの
    const id = fileName.replace(/\.md$/, '');

    // markdownファイルを文字列として読み込む
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // matterでメタデータを解析
    const matterResult = matter(fileContents);

    // idとデータを返す
    const data = matterResult.data as MatterData;
    return {
      id,
      title: data.title || '',
      date: data.date || '',
      thumbnail: data.thumbnail || '',
    };
  });

  return allPostData;
}
