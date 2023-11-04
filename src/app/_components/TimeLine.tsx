"use client";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import LoyaltySharpIcon from "@mui/icons-material/LoyaltySharp";
import WaterSharpIcon from "@mui/icons-material/WaterSharp";
import NightShelterSharpIcon from "@mui/icons-material/NightShelterSharp";
import { IconButton } from "@mui/material";

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      {/* 1st */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          // color="text.secondary"
          color={"white"}
        >
          14 FEB 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <IconButton href="/album" size="small" aria-label="delete">
              <LoyaltySharpIcon />
            </IconButton>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            1st Date
          </Typography>
          <Typography> Valentine&apos;s Day!</Typography>
        </TimelineContent>
      </TimelineItem>
      {/* 2nd */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          // color="text.secondary"
          color={"white"}
        >
          13 MAR 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <WaterSharpIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Blackpool
          </Typography>
          <Typography>First trip together!</Typography>
        </TimelineContent>
      </TimelineItem>
      {/* 3rd */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          // color="text.secondary"
          color={"white"}
        >
          25 MAR 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <NightShelterSharpIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            London
          </Typography>
          <Typography>Two days trip together with Nanako!</Typography>
        </TimelineContent>
      </TimelineItem>
      {/* 4th */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          // color="text.secondary"
          color={"white"}
        >
          1 APR 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            First date night
          </Typography>
          <Typography>Before Jupi&apos;s Easter Holiday!</Typography>
        </TimelineContent>
      </TimelineItem>
      {/* 5h */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          // color="text.secondary"
          color={"white"}
        >
          30 APR 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Military Field Trip
          </Typography>
          <Typography>Uni trip to Preston - Fulwood!</Typography>
        </TimelineContent>
      </TimelineItem>
      {/* 6th */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          // color="text.secondary"
          color={"white"}
        >
          13 JUN 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Ale&apos;s graduation
          </Typography>
          <Typography>
            One week trip to Bucharest! Graduation ceremony On the 16th
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {/* 7th */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          // color="text.secondary"
          color={"white"}
        >
          18 JUN 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Meeting Jupi&apos;s Familiy
          </Typography>
          <Typography>One week trip to Austria!</Typography>
        </TimelineContent>
      </TimelineItem>
      {/* 8th */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          // color="text.secondary"
          color={"white"}
        >
          04 July 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Scotland
          </Typography>
          <Typography>3 Days Exploring Glasgow & Edinburgh</Typography>
        </TimelineContent>
      </TimelineItem>
      {/* 8th */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          // color="text.secondary"
          color={"white"}
        >
          08 JULY 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Liverpool
          </Typography>
          <Typography>One day trip to Liverpool!</Typography>
        </TimelineContent>
      </TimelineItem>
      {/* 9th */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          // color="text.secondary"
          color={"white"}
        >
          12 JULY 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Our Graduation
          </Typography>
          <Typography>
            BSc Software Engineering, UCLAN, Preston, United Kingdom
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
