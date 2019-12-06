import React from "react";

interface Props<T, P> {
  ref: React.MutableRefObject<P>;
  asyncCall: () => Promise<T>;
}
export async function useAsyncSafe<T, P>({
  ref,
  asyncCall
}: Props<T, P>): Promise<T> {
  const staticVal = { ...ref.current };
  const result = await asyncCall();
  if (staticVal !== ref.current) {
    return Promise.reject(
      `The ref value has changed since beginning the asynchronous operation. Original: ${staticVal} Current: ${ref.current}`
    );
  }
  return result;
}
