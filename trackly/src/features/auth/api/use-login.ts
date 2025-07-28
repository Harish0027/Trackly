
import {client } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";
import type { InferRequestType, InferResponseType } from "hono";

type Req = InferRequestType<typeof client.api.auth.login["$post"]>;
type Res = InferResponseType<typeof client.api.auth.login["$post"]>;

export const useLogin = () => {
  return useMutation<Res, Error, Req>({
    mutationFn: async (json) => {
      const res = await client.api.auth.login["$post"]({ json });
      return res.json();
    },
  });
};
