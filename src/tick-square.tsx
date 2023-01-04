import * as React from "react";
import { SVGProps } from "react";
export const TickSquareIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H15.75C16.236 2.5 16.6493 2.67 16.99 3.01C17.33 3.35067 17.5 3.764 17.5 4.25V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM4.25 15.75H15.75V4.25H4.25V15.75ZM8.875 13.188C8.98633 13.188 9.094 13.167 9.198 13.125C9.302 13.083 9.40267 13.0137 9.5 12.917L14.125 8.292C14.2917 8.12533 14.3783 7.924 14.385 7.688C14.3923 7.45133 14.3057 7.24267 14.125 7.062C13.9583 6.89533 13.7533 6.812 13.51 6.812C13.2673 6.812 13.0627 6.89533 12.896 7.062L8.875 11.083L7.125 9.333C6.95833 9.16633 6.76033 9.07967 6.531 9.073C6.30233 9.06567 6.09767 9.15233 5.917 9.333C5.75033 9.49967 5.667 9.70467 5.667 9.948C5.667 10.1907 5.75033 10.3953 5.917 10.562L8.25 12.917C8.34733 13.0137 8.448 13.083 8.552 13.125C8.656 13.167 8.76367 13.188 8.875 13.188Z"
            fill="currentColor"
        />
    </svg>
);
TickSquareIcon.displayName = "TickSquareIcon";
