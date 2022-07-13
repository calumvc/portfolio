import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const calum_data = await axios.get(
    "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/GvShpOFhnrIFuZ0onxjurPs0F4XVm0SBfRmtzDP3o_zzV38X",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36 OPR/88.0.4412.75",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        Origin: "https://developer.riotgames.com",
        "X-Riot-Token": process.env.RIOTGAMES,
      },
    }
  );
  console.log(calum_data)
  res.status(200).send(calum_data.data[0]);
};

// Tomas' League Id for later -> UPk6LtjPC9XxWqI2hG8AFXBP-VDmCjg6BzsaxhmG3MW9maMWwaPtyMxKGg
// Cameron's League Id for later -> i3I-fNocrTc5_1rXxCvwQkABK41RVAo8qKhbOtTCJJ8vfSxyS90WhS2nwA
// Neven's League Id for later -> TMblAZrSJFx8hL97zRDMd_TxoA2_EQSRG-3giY0SO3NikgnREjY7qx-F2w
