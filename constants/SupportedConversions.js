const SupportedConversions = Object.freeze({
    ".pdf":["pdftoword","pdftoexcel","pdftoppt","pdftopng","pdftojpg"],
    ".doc":["wordtopdf"],
    ".docx":["wordtopdf"],
    ".xls": ["exceltopdf"],
    ".xlsx": ["exceltopdf"],
    ".ppt": ["ppttopdf"],
    ".pptx": ["ppttopdf"],
    ".png": ["pngtopdf"],
    ".jpg": ["jpgtopdf"],
    ".jpeg": ["jpgtopdf"],
    ".tiff": ["jpgtopdf"],
    ".gif": ["jpgtopdf"],
    ".ico": ["jpgtopdf"],
    ".icns": ["jpgtopdf"],
    ".webp": ["jpgtopdf"],
    ".bmp": ["jpgtopdf"],
})

export default SupportedConversions