import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  increment, 
  updateDoc,
} from "firebase/firestore";
import { db } from "@/api/firebaseConfig";

// REFERENCE COLLECTION
const globalHeartCollection = collection(db, "globalHeart");
const fanQuestionVoteCollection = collection(db, "fanQuestionVote-breakfast");

// APIs
export const testFirebaseConnection = async () => {
  try {
    const testDoc = await getDocs(globalHeartCollection);
    console.log('Firebase 連接成功');
    console.log('集合中的文件數量:', testDoc.size);
    return true;
  } catch (error) {
    console.error('Firebase 連接失敗:', error);
    return false;
  }
};

export const getGlobalHearts = async () => {
  try {
    const querySnapshot = await getDocs(globalHeartCollection);
    let result = [];
    
    querySnapshot.forEach((doc) => {  // 移除 async，因為 forEach 不需要非同步
      const data = doc.data();
      result.push({
        id: doc.id,
        picId: data.picId,
        getHeartQty: data.getHeartQty
      });
    });
    
    console.log('取得所有愛心資料:', result);
    return result;
  } catch (error) {
    console.error('取得所有愛心資料時發生錯誤:', error);
    throw error;
  }
};

export const getGlobalHeartById = async ({ queryKey }) => {
  try {
    console.log('開始查詢文件...');
    const [picId] = queryKey;
    console.log('要查詢的 picId:', picId);
    
    const q = query(globalHeartCollection, where("picId", "==", picId));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log('找不到文件');
      return null;
    }

    const docData = querySnapshot.docs[0].data();
    console.log('成功取得資料:', docData);
    return docData;
  } catch (error) {
    console.error('讀取資料時發生錯誤:', error);
    throw error;
  }
};

// 更新愛心數量的函數
export const updateGlobalHeartQty = async ({ picId, newQty }) => {
  try {
    const q = query(globalHeartCollection, where("picId", "==", picId));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.error('找不到要更新的文件');
      return false;
    }

    const docRef = doc(globalHeartCollection, querySnapshot.docs[0].id);
    await setDoc(docRef, { 
      picId,
      getHeartQty: newQty 
    }, { merge: true });
    
    console.log('成功更新愛心數量');
    return true;
  } catch (error) {
    console.error('更新愛心數量時發生錯誤:', error);
    throw error;
  }
};



export const getFanQuestionVotes = async () => {
  try {
    const querySnapshot = await getDocs(fanQuestionVoteCollection);
    let result = {
      left: 0,
      right: 0
    };
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      result[data.way] += data.voteNum; 
    });
    
    console.log('目前投票結果:', result); 
    return result;
  } catch (error) {
    console.error('取得投票資料時發生錯誤:', error);
    throw error;
  }
};

// export const updateFanQuestionVote = async ({ way, voteNum }) => {
//   try {
//     const docRef = doc(fanQuestionVoteCollection, way);
//     await setDoc(docRef, {
//       way,
//       voteNum: voteNum,
//       timestamp: new Date().toISOString()
//     }, { merge: true });
    
//     console.log(`成功更新 ${way} 的票數為 ${voteNum}`);
//     return true;
//   } catch (error) {
//     console.error('更新投票數量時發生錯誤:', error);
//     throw error;
//   }
// };

export const updateFanQuestionVote = async ({ way }) => {
  try {
    console.log('開始更新投票, way:', way);
    
    // 使用 where 查詢找到對應的文件
    const q = query(fanQuestionVoteCollection, where("way", "==", way));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.error('找不到要更新的投票文件');
      return false;
    }

    // 取得文件參考
    const docRef = doc(fanQuestionVoteCollection, querySnapshot.docs[0].id);
    const currentDoc = querySnapshot.docs[0].data();
    const currentVoteNum = currentDoc.voteNum || 0;

    // 更新文件
    await updateDoc(docRef, {
      voteNum: currentVoteNum + 1,
      timestamp: new Date().toISOString()
    });
    
    console.log(`成功更新 ${way} 的票數為 ${currentVoteNum + 1}`);
    return true;
  } catch (error) {
    console.error('更新投票數量時發生錯誤:', error);
    console.error('錯誤詳情:', error.code, error.message);
    throw error;
  }
};