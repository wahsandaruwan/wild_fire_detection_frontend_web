// -----Custom components and modules-----
import { getData, updateStatus } from "../services/main";

// Function to start reading
export const startReading = async () => {
  let final = "";
  try {
    // Get current data
    const currData = await getData();

    // Check current status
    if (currData.status == 0) {
      // Update status to 1
      const data = await updateStatus(1);
      final = data;
    } else if (currData.status == 1 || currData.status == 2) {
      // Update status to 1
      const data = await updateStatus(0);
      final = data;
    }
  } catch (error) {
    console.log(error);
  }

  return final;
};
