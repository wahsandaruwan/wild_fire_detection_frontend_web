// -----Third-party components and modules-----
import axios from "axios";

// Function to get data from the json file
export const getData = async () => {
  // Get current status
  const res = await axios.get(`http://127.0.0.1:5000/data/read`);

  return res.data;
};

// Function to update status
export const updateStatus = async (currStatus: number) => {
  let result;

  try {
    // Check current status
    if (currStatus == 0 || currStatus == 1) {
      // Update status
      const res = await axios.get(
        `http://127.0.0.1:5000/data/update?status=${currStatus}`
      );
      result = res.data;
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};
