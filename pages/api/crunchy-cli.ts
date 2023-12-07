import { Dropbox } from 'dropbox';
import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { runCrunchyCliDownload } from '../../crunchyWrapper';

const dbx = new Dropbox({
  accessToken:
    'sl.BrQk5m4iY8jAKev6EPUsUlQNMI63Z9WncWE86DwlGqPGTwe1exgQ1GvV9jtlk97YD6aNcw5rmS4V8tJ8Qi_laO-UpoGh_-RIQ5ni_p5gfPHWuJKhepvxvJ49aUWRPu_mvRyAejthVzjUShw',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url, title } = req.query;
  if (url && title) {
    const filePathExist = path.join(process.cwd(), 'public/downloadEp/', `${title.toString()}.mp4`);
    try {
      const fileMetadata = await dbx.filesGetMetadata({ path: filePathExist });
      if (fileMetadata.result) {
        const linksResponse = await dbx.sharingListSharedLinks({ path: filePathExist });
        const existingLink = linksResponse.result.links.find(link => link.path_lower === filePathExist.toLowerCase());
        if (existingLink) {
          return res.status(200).json({ message: "Succès", link: existingLink.url })
        }
      }
    }catch(error:any){
      console.log(error);
    }
    const requestDownloadEpisode = await runCrunchyCliDownload(url.toString(), title.toString());
    if (requestDownloadEpisode && title) {
      const filePath = path.join(process.cwd(), 'public/downloadEp/', `${title.toString()}.mp4`);
      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: 'Fichier non trouvé' });
      }
      try {
        const contents = fs.readFileSync(filePath);
        const uploadResponse = await dbx.filesUpload({ path: filePath, contents: contents, autorename:true });
        const sharedLinkResponse = await dbx.sharingCreateSharedLinkWithSettings({
          path: uploadResponse.result.path_lower || 'undefined',
        });

        // Récupérez l'URL du lien partagé
        const sharedLink = sharedLinkResponse.result.url.replace('?dl=0', '?raw=1');

        res.status(200).json({ message: 'Succès', link: sharedLink });
      } catch (error: any) {
        console.error(error);
        let errorMessage = "Erreur lors de l'opération";
        let errorCode = 500;
        if (error.error && error.error.error_summary) {
          errorMessage += `: ${error.error.error_summary}`;
          // Vous pouvez ajouter ici des cas spécifiques pour différents types d'erreurs Dropbox
          if (error.error.error_summary.startsWith('path/conflict/')) {
            errorCode = 409; // Conflit de chemin
          }
        }
        res.status(errorCode).json({ message: errorMessage, error: error });
      }
    }
  } else {
    return res.status(400).json({ message: 'url body is required' });
  }
}
