export type UploadParams = {
  cloudName: string;
  uploadPreset: string;
  sources: string | string[];
};

type UploadResult = Promise<{
  img?: string;
  tmb?: string;
  reason?: string;
  type: "success" | "error";
}>;

function useCloudinary() {
  const upload = (params?: UploadParams): UploadResult =>
    new Promise((resolve, reject) => {
      console.log(window.cloudinary.openUploadWidget);
      const uploadWidget = window.cloudinary.openUploadWidget(
        {
          cloudName: params?.cloudName ?? "dsypltyvs",
          uploadPreset: params?.uploadPreset ?? "ml_default",
          sources: params?.sources ?? ["local", "camera", "url"],
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (error: any, result: any) => {
          console.log(error, result);
          if (!error && result.event === "success") {
            const img = result.info.url;
            const tmb = result.info.thumbnail_url;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            resolve({ img, tmb, type: "success" });
          } else if (error && result.event === "error") {
            reject({
              reason: result,
              type: "error",
            });
          }
        }
      );
      uploadWidget.open();
    });

  return { upload };
}

export default useCloudinary;
