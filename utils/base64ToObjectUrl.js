function base64ToObjectUrl(base64, fileType) {
  const byteCharacters = Buffer.from(base64, "base64");
  const blob = new Blob([byteCharacters], { type: fileType });
  return URL.createObjectURL(blob);
}

export default base64ToObjectUrl;
