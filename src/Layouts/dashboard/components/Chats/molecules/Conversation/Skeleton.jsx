import { Stack, Skeleton } from "@mui/material";

const ConversationSkeleton = () => {
  return (
    <Stack height="100%" maxHeight={"100vh"} width="auto">
      {/* Chat Header */}

      <Skeleton
        variant="rectangular"
        p={2}
        sx={{ height: 100, width: "100%" }}
      ></Skeleton>

      {/* Msg */}
      <Stack
        width="100%"
        direction={"column"}
        spacing={2}
        sx={{ height: "100%", overflowY: "scroll", py: 3, px: 2 }}
      >
        <Skeleton variant="text" width="60%" height={30} />
        <Skeleton
          variant="text"
          width="30%"
          sx={{ display: "flex", alignSelf: "end", height: 30 }}
        />
        <Skeleton variant="text" width="30%" height={30} />
        <Skeleton
          variant="text"
          width="50%"
          sx={{ display: "flex", alignSelf: "end", height: 30 }}
        />
        <Skeleton
          variant="rounded"
          width="25%"
          sx={{ display: "flex", alignSelf: "start", height: 200 }}
        />
        <Skeleton variant="text" width="60%" height={30} />
        <Skeleton
          variant="text"
          width="30%"
          sx={{ display: "flex", alignSelf: "end", height: 30 }}
        />
        <Skeleton variant="text" width="40%" height={30} />
      </Stack>
      {/* Chat Footer */}
      <Skeleton
        variant="rectangular"
        p={2}
        sx={{ height: 100, width: "100%" }}
      ></Skeleton>
    </Stack>
  );
};

export default ConversationSkeleton