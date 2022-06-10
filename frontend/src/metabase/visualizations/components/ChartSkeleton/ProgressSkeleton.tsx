import React, { HTMLAttributes } from "react";
import SkeletonCaption from "./SkeletonCaption";
import { SkeletonImage, SkeletonRoot } from "./FunnelSkeleton.styled";

export interface ProgressSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  displayName?: string | null;
  description?: string | null;
}

const ProgressSkeleton = ({
  displayName,
  description,
  ...props
}: ProgressSkeletonProps): JSX.Element => {
  return (
    <SkeletonRoot {...props}>
      <SkeletonCaption name={displayName} description={description} />
      <SkeletonImage
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 404 57"
        preserveAspectRatio="xMidYMid"
      >
        <rect
          opacity=".32"
          y="12"
          width="404"
          height="45"
          rx="4"
          fill="currentColor"
        />
        <path
          d="M0 16a4 4 0 0 1 4-4h298v45H4a4 4 0 0 1-4-4V16ZM302 .485h8.485L302 8.971 293.515.485H302Z"
          fill="currentColor"
        />
      </SkeletonImage>
    </SkeletonRoot>
  );
};

export default ProgressSkeleton;
