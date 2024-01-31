import { Stack, Skeleton, Box, Divider, useTheme } from "@mui/material";
import { useChatsStyles } from "../../styles";

const ChatBoxSkeleton = () => {
  const theme = useTheme();
  const styles = useChatsStyles({ theme });
  return (
    // <Stack spacing={1}>
    //   {/* For variant="text", adjust the height via font-size */}
    //   <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    //   {/* For other variants, adjust the size with width and height */}
    //   <Skeleton variant="circular" width={40} height={40} />
    //   <Skeleton variant="rectangular" width={210} height={60} />
    //   <Skeleton variant="rounded" width={210} height={60} />
    // </Stack>

    <Box sx={styles.mainBox}>
      <Stack p={3} spacing={2.5} sx={styles.chatContainerStack}>
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Skeleton variant="text" width={20} sx={{ fontSize: "1rem" }} />
          <Skeleton variant="circular" width={28} height={28} />
        </Stack>

        <Stack>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} height={32} />
        </Stack>

        <Divider />

        <Stack spacing={2} direction="column" sx={styles.chatsParentStack}>
          <Stack spacing={2}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="rectangular" width={260} height={60} />
            <Skeleton variant="rectangular" width={260} height={60} />
            <Skeleton variant="rectangular" width={260} height={60} />
            <Skeleton variant="rectangular" width={260} height={60} />
            <Skeleton variant="rectangular" width={260} height={60} />
            <Skeleton variant="rectangular" width={260} height={60} />
            <Skeleton variant="rectangular" width={260} height={60} />
            <Skeleton variant="rectangular" width={260} height={60} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatBoxSkeleton;