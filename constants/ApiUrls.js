const base = process.env.NEXT_PUBLIC_API;
const users = base + "users/";
const conversion = base + "convert/";
const documents = base + "documents/";

const Api = Object.freeze({
  // Auth
  register: users + "register",
  login: users + "login",
  oauth: users + "oauth",
  newPass: users + "newpass",
  forgetPass: users + "forgetpass",
  // Conversion
  convert: conversion,
  // Documents
  docget: documents + "get",
  docupload: documents + "upload",
  docdownload: documents + "download",
  getshared: documents + "getshared",
  downloadshared: documents + "downloadshared",
  docconvert: documents + "convert",
  docupdate: documents + "update",
  docdel: documents + "delete",
});

export default Api;
