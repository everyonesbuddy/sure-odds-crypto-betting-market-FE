import React from "react";
import { Box, Typography } from "@mui/material";
// import KofiWidget from "./KofiWidget";
import Footer from "./Footer";
import ContestCard from "./ContestCard";
import "../css/Home.css";

const Home = () => {
  const contest = [
    {
      contestName: "Doink Sports",
      primaryImageUrl: "https://i.ibb.co/xzk85XK/0k0-A7-Ib3-400x400.jpg",
      price: "Win a free 2 months subscription to Doink Sports",
      spreadsheetUrl:
        "https://sheet.best/api/sheets/b9c7054b-1a70-4afb-9a14-c49967e8faf8",
      sponsored: false,
      affiliateUrl: "https://doinksports.com/?via=Sure-Odds",
      affiliateCopy: "Try Doink Sports Research Platform For Free",
      contestEndDate: "1/31/2025",
      contestStartDate: "12/8/2024",
      contestLeague: ["americanfootball_nfl", "basketball_nba", "soccer_epl"],
    },
    {
      contestName: "DG Fantasy",
      primaryImageUrl: "https://i.ibb.co/p4w0j39/o-GXbjunp-400x400.png",
      price: "Win a free 2 months subscription to DG Fantasy",
      spreadsheetUrl:
        "https://api.sheetbest.com/sheets/8dc7d109-648f-4403-8d28-37303439a580",
      sponsored: false,
      affiliateUrl: "https://dgfantasy.com/membership-signup?ref=mjkwmti",
      affiliateCopy: "Try DG Fantasy Research Platform For Free",
      contestEndDate: "1/31/2025",
      contestStartDate: "12/8/2024",
      contestLeague: [
        "americanfootball_nfl",
        "basketball_nba",
        "soccer_epl",
        "soccer_germany_bundesliga",
      ],
    },
    {
      contestName: "Prize Picks",
      primaryImageUrl: "https://i.ibb.co/C8Cb5BF/Po6-QETC5-400x400.jpg",
      price: "Win $100 to play on Prize Picks or whatever you want",
      spreadsheetUrl:
        "https://api.sheetbest.com/sheets/09d34a2c-8cc1-4cf6-951c-dbc2ce537971",
      sponsored: false,
      affiliateUrl: "https://app.prizepicks.com/sign-up?invite_code=PR-SUWVT13",
      affiliateCopy:
        "Place a $5 Lineup, Get $50 Instantly - No Strings Attached!",
      contestEndDate: "1/31/2025",
      contestStartDate: "12/8/2024",
      contestLeague: ["americanfootball_nfl", "basketball_nba", "soccer_epl"],
    },
    {
      contestName: "Underdog",
      primaryImageUrl: "https://i.ibb.co/0Z74yfz/Qt3-Ggq-We-400x400.jpg",
      price: "Win $100 to play on Underdog or whatever you want",
      spreadsheetUrl:
        "https://api.sheetbest.com/sheets/996f6b90-a6e4-4ddf-b3a8-a3c004d0a2fa",
      sponsored: false,
      affiliateUrl: "https://play.underdogfantasy.com/magnusdomitor",
      affiliateCopy:
        "Get up to $1000 Bonus Cash when you make your first deposit!",
      contestEndDate: "1/31/2025",
      contestStartDate: "12/8/2024",
      contestLeague: ["americanfootball_nfl", "basketball_nba"],
    },
  ];

  return (
    <>
      <Box sx={{ width: "auto", textAlign: "center", p: 3 }}>
        <div>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              mb: 3,
              p: 2,
              fontWeight: "bold",
            }}
          >
            Africas #1 Crypto betting market
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "white",
            }}
          >
            Think you can predict the game? Compete in our free-to-play pick'em
            contests for a chance to win amazing prizes. It’s free, fun, and
            global!
          </Typography>
          <div style={{ paddingTop: 10 }}>
            <iframe
              src="https://embeds.beehiiv.com/7fcc300a-4395-4b66-a558-f5e61ef24bdf?slim=true"
              data-test-id="beehiiv-embed"
              height="52"
              title="Beehiiv Embed"
              frameBorder="0"
              scrolling="no"
              style={{
                margin: 0,
                borderRadius: "0px",
                backgroundColor: "transparent",
              }}
            ></iframe>
            <p style={{ color: "gray", fontSize: "12px" }}>
              Join the smartest sport bettors community
            </p>
          </div>
        </div>
        <Typography
          variant="h4"
          sx={{
            color: "white",
            mb: 3,
            p: 2,
            fontWeight: "bold",
          }}
        >
          Contests
        </Typography>

        <div className="card-container">
          {contest.map((item, index) => (
            <ContestCard
              key={index}
              primaryImageUrl={item.primaryImageUrl}
              contestName={item.contestName}
              price={item.price}
              contestEndDate={item.contestEndDate}
              contestStartDate={item.contestStartDate}
              contestLeague={item.contestLeague}
              affiliateUrl={item.affiliateUrl}
              affiliateCopy={item.affiliateCopy}
            />
          ))}
        </div>
      </Box>
      {/* <KofiWidget /> */}
      <Footer />
    </>
  );
};

export default Home;
