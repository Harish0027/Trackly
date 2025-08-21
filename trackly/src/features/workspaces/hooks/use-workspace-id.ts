import { useParams } from "next/navigation";

// ✅ Custom hook
function useWorkspaceId() {
  const params = useParams();
  return params.workSpaceId;
}
