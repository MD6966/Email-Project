import { Stack, Typography, Box, useTheme } from "@mui/material";
import Image from "mui-image";
import { useChatsStyles } from "../styles";

const DefaultMessage = () => {
  const theme = useTheme();
  const styles = useChatsStyles({ theme });

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent={"center"}
      sx={styles.defaultStack}
      spacing={2}
    >
      <Box sx={styles.defaultImageBox}>
        <Image
          src={"/default-chat.jpg"}
          style={styles.defaultImage}
          alt="default-chat"
        />
      </Box>

      <Typography sx={styles.startConversation}>
        Let's Start a Conversation
      </Typography>
    </Stack>
  );
};

export default DefaultMessage;