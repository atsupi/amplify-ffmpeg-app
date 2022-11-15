import React from 'react'
//import { S3Client } from '@aws-sdk/client-s3';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3Client } from '../App.js';

function Thumbnail(props) {
  const thumbnailPath = 'S3://' + props.base + '/' + props.path
  return <p>{thumbnailPath}</p>;
}

//async function ThumbnailImage(props) {
async function ThumbnailImage(props) {
  try {
    const bucketParams = {
        Bucket: props.base,
        Key: props.path,
        Body: 'BODY'
    };
    const command = new GetObjectCommand(bucketParams);
//    const signed_url = await getSignedUrl(s3Client, command, {expiresIn: 3600});
       const signed_url = await getSignedUrl(s3Client, command, {expiresIn: 3600});
    console.log("Signed_url in ContentItem %s", signed_url);
//    const response = fetch(signed_url);
//    console.log("Response.text %s", response.text);
//    return <img src={response.text} style={{witdh: 200}} alt="thumbnail" />;
    return <img src={signed_url} style={{witdh: 200}} alt="thumbnail" />;
//    return <p><img src="" style={{width: 200}} alt="thumbnail" /></p>;
  } catch(e) {
    console.log(e.massage);
    return <img src="" style={{width: 200}} alt="thumbnail" />;
  }
}



function playMovie(base, key) {


}

function ContentItem (props) {
    const item = props.contentLists.map(note => (
//        (note.contentPath !== "") && 
        <tr key={note.id}>
          <td>{note.id}</td>
          <td>{note.contentBase}</td>
          <td>
            {note.thumbnailPath}

          {
//                note.image && <img src={note.image} style={{width: 400}} alt="thumbnail" />
            }
            <Thumbnail base={note.contentBase} path={note.thumbnailPath} />
            <ThumbnailImage base={note.contentBase} path={note.thumbnailPath} />
            </td>
          <td>
            {note.contentPath} <button onClick={() => playMovie(note.contentBase, note.contentPath)}>Play</button>
          </td>
          <td>{note.owner}</td>
          <td>{note.description}</td>
          <td>{note.duration}</td>
          <td>
            <button onClick={() => props.deleteitem(note)}>Delete</button>
          </td>
        </tr>
    ))  
    return (
      <>
      {item}
      </>
    )
}

export default ContentItem;
