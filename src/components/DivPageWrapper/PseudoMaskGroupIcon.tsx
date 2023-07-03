import { memo, SVGProps } from 'react';

const PseudoMaskGroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <mask
      id='mask0_3_752'
      style={{
        maskType: 'alpha',
      }}
      maskUnits='userSpaceOnUse'
      x={0}
      y={0}
      width={16}
      height={16}
    >
      <g clipPath='url(#clip0_3_752)'>
        <path
          d='M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346625 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0ZM8.8 12H7.2V7.2H8.8V12ZM8.8 5.6H7.2V4H8.8V5.6Z'
          fill='black'
        />
      </g>
    </mask>
    <g mask='url(#mask0_3_752)'>
      <rect width={16} height={16} fill='#0085F2' />
    </g>
    <defs>
      <clipPath id='clip0_3_752'>
        <rect width={16} height={16} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(PseudoMaskGroupIcon);
export { Memo as PseudoMaskGroupIcon };
