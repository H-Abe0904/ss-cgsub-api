import * as fs from 'fs';

/**
 * 非同期でファイルを読み取るユーティリティ関数
 * @param path ファイルのパス
 * @param encoding 文字エンコーディング（デフォルトは 'utf-8'）
 * @returns ファイルの内容を含むPromise
 */
export async function readFileAsync(path: string, encoding: BufferEncoding = 'utf-8'): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		fs.readFile(path, { encoding }, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}