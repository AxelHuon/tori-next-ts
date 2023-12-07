const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

export async function runCrunchyCliDownload(url: string, title: string) {
  try {
    const { stdout, stderr } = await execPromise(
      `./bin/crunchy-cli/target/release/crunchy-cli download --skip-existing -t 1 -a ja-JP -o "./public/downloadEp/${title}.mp4" ${url}`,
    );
    console.log(stdout);
    console.error(stderr);
    return true;
  } catch (error) {
    console.log(error);
    throw new Error("Une erreur est survenue");
    return false;
  }
}
