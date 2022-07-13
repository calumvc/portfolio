import { Box, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { summoner } from "../interfaces/summoner";

interface StatProps {}

export const Stat: FC<StatProps> = () => {
  const { data, isLoading } = useQuery<summoner>("stats", async () => {
    const { data } = await axios.get("/api/stats");
    return data;
  });

  const [winrate, setWinrate] = useState<number>(0);
  useEffect(() => {
    if (!isLoading) {
      setWinrate(Math.round((data.wins / (data.losses + data.wins)) * 100));
    }
  }, [isLoading, data]);

  return (
    <Box>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Text color="text" textAlign="center">
            {data.tier} {data.rank}
          </Text>
          <Text color="text" textAlign="center">
            {winrate}%
          </Text>
        </>
      )}
    </Box>
  );
};
