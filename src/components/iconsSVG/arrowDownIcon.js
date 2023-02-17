import React from "react";

const ArrowDownIcon = (props) => {
  return (
    <svg
      width="9"
      height="15"
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-1.3307e-06 14.0214C-0.000173925 13.8929 0.02661 13.7656 0.0788123 13.6468C0.131015 13.5281 0.207606 13.4202 0.304184 13.3294L6.49293 7.49721L0.304186 1.66497C0.112055 1.48094 0.00487403 1.23281 0.00598987 0.974645C0.00710476 0.716479 0.116426 0.469186 0.310141 0.286633C0.503856 0.10408 0.766268 0.00105801 1.04022 6.82734e-06C1.31417 -0.00104436 1.57747 0.0999606 1.77275 0.281021L8.69586 6.80523C8.8906 6.98876 9 7.23767 9 7.49721C9 7.75674 8.8906 8.00565 8.69586 8.18918L1.77275 14.7134C1.62752 14.8502 1.44248 14.9434 1.24105 14.9812C1.03961 15.019 0.830817 14.9996 0.641068 14.9255C0.451319 14.8514 0.289136 14.726 0.175027 14.5651C0.0609184 14.4042 9.12818e-06 14.215 -1.3307e-06 14.0214Z"
        fill={props.color}
      />
    </svg>
  );
};
export default ArrowDownIcon;