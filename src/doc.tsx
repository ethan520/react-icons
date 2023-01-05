import * as React from "react";
import { SVGProps } from "react";
export const DocIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M5.5 18C5.08333 18 4.72933 17.854 4.438 17.562C4.146 17.2707 4 16.9167 4 16.5V3.5C4 3.08333 4.146 2.72933 4.438 2.438C4.72933 2.146 5.08333 2 5.5 2H11.375C11.5697 2 11.7573 2.03467 11.938 2.104C12.118 2.17333 12.2847 2.28467 12.438 2.438L15.562 5.562C15.7153 5.71533 15.8267 5.88233 15.896 6.063C15.9653 6.243 16 6.43033 16 6.625V16.5C16 16.9167 15.854 17.2707 15.562 17.562C15.2707 17.854 14.9167 18 14.5 18H5.5ZM11 6.25V3.5H5.5V16.5H14.5V7H11.75C11.542 7 11.365 6.927 11.219 6.781C11.073 6.635 11 6.458 11 6.25Z"
            fill="currentColor"
        />
    </svg>
);
DocIcon.displayName = "DocIcon";
