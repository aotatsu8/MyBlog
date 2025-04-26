import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

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

// getStaticPathsでretunで使うPathを取得する
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// idに基づいてブログ投稿データを返す
export async function getPostData(id: string) {
  const fullPath = path.join(postDirectory, `${id}.md`);

  // ファイルが存在するかチェック！
  if (!fs.existsSync(fullPath)) {
    return null; // 存在しなかったら null を返す
  }
  const fileContent = fs.readFileSync(fullPath, 'utf-8');

  const matterResult = matter(fileContent);

  const blogContent = await remark().use(html).process(matterResult.content);
  // matterResult.content これだと文字列として取得されるため、MarkDownに変換する必要があるためremarkを使用

  const blogContentHTML = blogContent.toString();
  const { title, date, thumbnail } = matterResult.data as MatterData;

  console.log(`★${matterResult.data}`);
  return {
    id,
    title,
    date,
    thumbnail,
    blogContentHTML,
  };
}
