
// import { uploadBytesResumable, getDownloadURL } from 'firebase/storage';
// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// // import firebase from '../firebase/config';
// import { storage } from '../firebase/config';

// const useStorage = () => {
//   const [progress, setProgress] = useState<number>(0);
//   const [error, setError] = useState<Error | null>(null);
//   const [url, setUrl] = useState<string | null>(null);

//   const startUpload = (file: File) => {
//     if (!file) return;

//     const fileId = uuidv4() + file.name;
//     console.log(fileId);
//     const storageRef = storage().ref(fileId); // Use fileId for unique naming
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       'state_changed',
//       (snapshot) => {
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setProgress(progress);
//       },
//       (error) => {
//         setError(error);
//       },
//       async () => {
//         try {
//           const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//           setUrl(downloadURL);
//           setProgress(progress);
//         } catch (err) {
//           setError(err as Error);
//         }
//       }
//     );
//   };

//   return {
//     progress,
//     error,
//     url,
//     startUpload,
//   };
// };

// export { useStorage };

import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../firebase/config'; // Ensure this is the correct path to your config
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from './useAuth';

const useStorage = () => {
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const {user} = useAuth();
  console.log(user);

  const startUpload = (file: File) => {
    if (!file) return;

    const fileId = uuidv4() + file.name;
    console.log(fileId);
    const storageRef = ref(storage, fileId); // Use fileId for unique naming
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setError(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUrl(downloadURL);
          setProgress(100); // Set progress to 100% upon successful upload
          //store data in firestore
          await addDoc(collection(db, 'images'), {
            imageUrl: downloadURL,
            createdAt: new Date(),
            userEmail: user?.email,
          });
        } catch (err) {
          setError(err as Error);
        }
      }
    );
  };

  return {
    progress,
    error,
    url,
    startUpload,
  };
};

export { useStorage };

