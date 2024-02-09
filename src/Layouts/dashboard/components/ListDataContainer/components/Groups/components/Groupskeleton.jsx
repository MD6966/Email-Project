import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Groupskeleton = () => {
  return (
    <Box>
      {["1", "2", "3"].map((val) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              sx={{ mr: 1 }}
            />
            <Skeleton variant="rectangular" width={250} height={40} />
          </Box>
        );
      })}
    </Box>
  );
};

export default Groupskeleton;
