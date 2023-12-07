
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { runCrunchyCliDownload } from '../../crunchyWrapper';
import { Client } from 'basic-ftp';


const uploadFileToFTP = async (localPath:string, title:string) => {
  const client = new Client();
  try {
    await client.access({
      host: process.env.HOSTFTP,
      user: process.env.HOSTUSER,
      password: process.env.HOSTPASSWORD,
      secure: false
    });
    await client.uploadFrom(localPath, `tori-app.huax3940.odns.fr/videos/${title}.mp4`);
  } catch (error) {
    console.log(error);
    throw error;
  }
  client.close();
};



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url, title } = req.query;
  if (url && title) {
    const requestDownloadEpisode = await runCrunchyCliDownload(url.toString(), title.toString());
    if (requestDownloadEpisode && title) {
      try{
        const localFilePath = path.join(process.cwd(), `public/downloadEp/${title.toString()}.mp4`);
        await uploadFileToFTP(localFilePath,title.toString());
        res.status(200).json({ message: 'Fichier transféré avec succès' , url:`http://tori-app.huax3940.odns.fr/videos/${title}` });
      }catch (error:any){
        console.log(error);
        res.status(400).json({ message: 'Error' });
      }
    }
  } else {
    return res.status(400).json({ message: 'url body is required' });
  }
}
