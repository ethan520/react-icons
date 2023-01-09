import * as React from "react";
import { SVGProps } from "react";
export const CopyFillIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <mask
            id="mask0_887_1722"
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={24}
            height={24}
        >
            <rect width={24} height={24} fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_887_1722)">
            <path
                d="M9 18C8.45 18 7.97933 17.8043 7.588 17.413C7.196 17.021 7 16.55 7 16V4C7 3.45 7.196 2.979 7.588 2.587C7.97933 2.19567 8.45 2 9 2H18C18.55 2 19.021 2.19567 19.413 2.587C19.8043 2.979 20 3.45 20 4V16C20 16.55 19.8043 17.021 19.413 17.413C19.021 17.8043 18.55 18 18 18H9ZM5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V7C3 6.71667 3.096 6.479 3.288 6.287C3.47933 6.09567 3.71667 6 4 6C4.28333 6 4.521 6.09567 4.713 6.287C4.90433 6.479 5 6.71667 5 7V20H15C15.2833 20 15.521 20.096 15.713 20.288C15.9043 20.4793 16 20.7167 16 21C16 21.2833 15.9043 21.5207 15.713 21.712C15.521 21.904 15.2833 22 15 22H5Z"
                fill="currentColor"
            />
        </g>
    </svg>
);
CopyFillIcon.displayName = "CopyFillIcon";
