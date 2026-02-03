export const uploadToCloudinary = async (file: File) => {
  // 1. get signature
  const sigRes = await fetch("/api/cloudinary/sign", {
    method: "POST",
  });
  const sig = await sigRes.json();

  // 2. upload to cloudinary
  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", sig.apiKey);
  formData.append("timestamp", sig.timestamp);
  formData.append("signature", sig.signature);
  formData.append("folder", sig.folder);

  const cloudinaryRes = await fetch(
    `https://api.cloudinary.com/v1_1/${sig.cloudName}/auto/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await cloudinaryRes.json();

  return data.secure_url;
};
