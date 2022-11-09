import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React, { useState, useEffect } from 'react'; 
import { API } from 'aws-amplify';
import { S3Client } from '@aws-sdk/client-s3';
import { listContentLists } from './graphql/queries';  
import { createContentList as createContentListMutation, deleteContentList as deleteContentListMutation } from './graphql/mutations'; 
import ListContent from './components/ListContent';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
//import { fromIni } from '@aws-sdk/credential-providers';

const REGION = "ap-northeast-1";
const initialFormState = { thumbnailPath: '', contentPath: '' }  

export const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: 'XXXXXXXXX',
    secretAccessKey: 'YYYYYYYYY'
  }
});

function App() {
    const [contentlists, setContentlists] = useState([]);  
    const [formData, setFormData] = useState(initialFormState);  
    useEffect(() => {  
      fetchContentlist();  
    }, []);  
    async function fetchContentlist() {  
      const apiData = await API.graphql({ query: listContentLists});  
      setContentlists(apiData.data.listContentLists.items);  
      console.log("fetchContentlist()");
      const item = contentlists.map(note => {
        try {
          const bucketParams = {
            Bucket: note.contentBase,
            Key: note.thumbnailPath,
            Body: 'BODY'
          };
          const command = new GetObjectCommand(bucketParams);
          const signed_url = getSignedUrl(s3Client, command, {expiresIn: 3600});
          console.log("Signed_url in App.js %s", signed_url);
          const response = fetch(signed_url);
          note.image = response.text;
          console.log("Got presigned url for thumbnail %s", response.text);
          return {
            result: 200
          }
        } catch (e) {
          console.log(e.message);
          return {
            result: 500
          }
        }
      });
    }  
    async function createContentlist() {  
      if (!formData.AssetType || !formData.ReportBy || !formData.Storage) return;  
      await API.graphql({ query: createContentListMutation, variables: { input: formData } });  
      setContentlists([ ...contentlists, formData ]);  
      setFormData(initialFormState);  
    }  
    async function deleteContentlist({ id }) {
      console.log("Deletion request of id %d", id)
      const newContentlistsArray = contentlists.filter(note => note.id !== String(id));  
      setContentlists(newContentlistsArray);  
      await API.graphql({ query: deleteContentListMutation, variables: { input: { id } }});  
    }

//    console.log("item[0]=%s", contentlists)
    return (
    <Authenticator>
      {({ signOut, user }) => (
      	<main>
	        <h1>Hello {user.username}</h1>
          <ListContent contentItems={contentlists} deleteitem={deleteContentlist}/>
	        <button onClick={signOut}>Sign out</button>
      	</main>
	    )}
    </Authenticator>
  );
}

export default App;
