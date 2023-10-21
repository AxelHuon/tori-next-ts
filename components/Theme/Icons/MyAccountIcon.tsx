"use client";
import React from "react";
import { Colors } from "../../../theme/design_system/Colors";

interface MyAccountIconProps {
  color?: string;
  width?: string;
  height?: string;
}
const MyAccountIcon: React.FC<MyAccountIconProps> = ({
  color = Colors.WHITE,
  width = "24",
  height = "24",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.75 6C15.75 6.99456 15.3549 7.94839 14.6517 8.65165C13.9484 9.35491 12.9946 9.75 12 9.75C11.0054 9.75 10.0516 9.35491 9.34836 8.65165C8.6451 7.94839 8.25001 6.99456 8.25001 6C8.25001 5.00544 8.6451 4.05161 9.34836 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9946 2.25 13.9484 2.64509 14.6517 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6V6ZM4.50101 20.118C4.53314 18.1504 5.33735 16.2742 6.74018 14.894C8.14302 13.5139 10.0321 12.7405 12 12.7405C13.9679 12.7405 15.857 13.5139 17.2598 14.894C18.6627 16.2742 19.4669 18.1504 19.499 20.118C17.1464 21.1968 14.5882 21.7535 12 21.75C9.32401 21.75 6.78401 21.166 4.50101 20.118Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MyAccountIcon;
