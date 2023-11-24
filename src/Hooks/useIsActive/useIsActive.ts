export const useIsActive = () => {
  const isActiveLabel = (obj: { isActive: boolean }) =>
    obj.isActive ? "text-sky-400 font-bold" : "";

  const isActiveBtn = (obj: { isActive: boolean }) =>
    obj.isActive ? "btn primary" : "btn";

  return { isActiveLabel, isActiveBtn };
};
