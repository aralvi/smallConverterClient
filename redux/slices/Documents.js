import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "@constants/ApiUrls";
import Toast from "@components/allToasts/AllToasts";

const Documents = createSlice({
  name: "documents",
  initialState: {
    documents: [],
    toDownload: "",
    toDownloadName: "",
    loading: false,
    error: false,
    message: "",
  },
  reducers: {
    setDocuments: (state, action) => {
      state.documents = action.payload;
    },
    setDownload: (state, action) => {
      state.toDownload = action.payload;
    },
    setDownloadName: (state, action) => {
      state.toDownloadName = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    reset: (state) => {
      state.toDownload = "";
      state.toDownloadName = "";
      state.loading = false;
      state.error = false;
      state.message = "";
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDocs.pending, (state, action) => {})
      .addCase(getDocs.fulfilled, (state, action) => {})
      .addCase(getDocs.rejected, (state, action) => {}),
});

export const {
  setDocuments,
  setDownload,
  setDownloadName,
  setLoading,
  setError,
  setMessage,
  reset,
} = Documents.actions;

export default Documents.reducer;

export const getDocs = createAsyncThunk("docs/get", async (args, thunkApi) => {
  const state = thunkApi.getState();
  const config = {
    headers: {
      token: state.auth.token,
    },
  };
  try {
    thunkApi.dispatch(setLoading(true));
    const res = await axios.post(Api.docget, {}, config);
    thunkApi.dispatch(setDocuments(res.data.docs));
    thunkApi.dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    const message =
      error?.response?.data?.detail?.message ??
      error?.response?.data?.detail[0]?.message ??
      error.message ??
      error.toString();
    thunkApi.dispatch(setError(true));
    thunkApi.dispatch(setMessage(message));
  }
});

export const uploadDoc = createAsyncThunk(
  "docs/upload",
  async (args, thunkApi) => {
    const state = thunkApi.getState();
    // Checking if user have less than 10 files or not
    if (state.documents.documents.length > 10) {
      return Toast.warning("You cannot upload more than 10 files");
    }
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        token: state.auth.token,
      },
    };
    const form = new FormData();
    form.append("file", args.file, args.file.name);
    try {
      Toast.loading("Uploading File");
      const res = await axios.post(Api.docupload, form, config);
      thunkApi.dispatch(
        setDocuments([...state.documents.documents, res.data.docs])
      );
      Toast.success("File Uploaded Successfully");
      thunkApi.dispatch(setMessage("file uploaded"));
    } catch (error) {
      console.log(error);
      const message =
        error?.response?.data?.detail?.message ??
        error?.response?.data?.detail[0]?.message ??
        error.message ??
        error.toString();
      Toast.error(message);
    }
  }
);

export const downloadDoc = createAsyncThunk(
  "docs/download",
  async (args, thunkApi) => {
    const state = thunkApi.getState();
    const config = {
      headers: {
        token: state.auth.token,
      },
    };
    try {
      Toast.loading("Downloading File");
      const res = await axios.post(
        Api.docdownload,
        { docId: args.fileId },
        config
      );
      thunkApi.dispatch(setDownload(res.data.file));
      thunkApi.dispatch(setDownloadName(res.data.fileName));
      thunkApi.dispatch(setMessage("file downloaded"));
      Toast.success("File Downloaded");
    } catch (error) {
      console.log(error);
      const message =
        error?.response?.data?.detail?.message ??
        error?.response?.data?.detail[0]?.message ??
        error.message ??
        error.toString();
      Toast.error(message);
    }
  }
);

export const convertDoc = createAsyncThunk(
  "docs/convert",
  async (args, thunkApi) => {
    const state = thunkApi.getState();
    const config = {
      headers: {
        token: state.auth.token,
      },
    };
    try {
      Toast.loading("Converting File");
      const data = {
        docId: args.fileId,
        docName: args.fileName,
        docType: args.fileType,
        conversionType: args.conversionType,
        src: args.src,
        tgt: args.tgt,
      };
      const res = await axios.post(Api.docconvert, data, config);
      thunkApi.dispatch(setDownload(res.data.file));
      thunkApi.dispatch(setDownloadName(res.data.fileName));
      thunkApi.dispatch(setMessage("file downloaded"));
      Toast.success("File Converted");
    } catch (error) {
      console.log(error);
      const message =
        error?.response?.data?.detail?.message ??
        error?.response?.data?.detail[0]?.message ??
        error.message ??
        error.toString();
      Toast.error(message);
    }
  }
);

export const deleteDoc = createAsyncThunk(
  "docs/delete",
  async (args, thunkApi) => {
    const state = thunkApi.getState();
    const config = {
      headers: {
        token: state.auth.token,
      },
    };
    try {
      Toast.loading("Deleting File");
      const res = await axios.post(Api.docdel, { id: args.docId }, config);
      const filteredDocs = state.documents.documents.filter(
        (doc) => doc.fileId !== args.docId
      );
      thunkApi.dispatch(setDocuments(filteredDocs));
      thunkApi.dispatch(setMessage("file deleted"));
      Toast.success("File Deleted");
    } catch (error) {
      console.log(error);
      const message =
        error?.response?.data?.detail?.message ??
        error?.response?.data?.detail[0]?.message ??
        error.message ??
        error.toString();
      Toast.error(message);
    }
  }
);
export const updateDoc = createAsyncThunk(
  "docs/update",
  async (args, thunkApi) => {
    const state = thunkApi.getState();
    const config = {
      headers: {
        token: state.auth.token,
      },
    };
    try {
      Toast.loading("Renaming File");
      const data = {
        id: args.docId,
        updateData: { fileName: args.docName },
      };
      const res = await axios.post(Api.docupdate, data, config);
      const filteredDocs = state.documents.documents.map((doc) => {
        if (doc.fileId === args.docId) {
          return { ...doc, fileName: args.docName };
        } else {
          return doc;
        }
      });
      thunkApi.dispatch(setDocuments(filteredDocs));
      thunkApi.dispatch(setMessage("file renamed"));
      Toast.success("File Renamed");
    } catch (error) {
      console.log(error);
      const message =
        error?.response?.data?.detail?.message ??
        error?.response?.data?.detail[0]?.message ??
        error.message ??
        error.toString();
      Toast.error(message);
    }
  }
);
