import { memo, SVGProps } from 'react';

const SpanIconMaskGroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <mask
      id='mask0_3_745'
      style={{
        maskType: 'alpha',
      }}
      maskUnits='userSpaceOnUse'
      x={0}
      y={0}
      width={16}
      height={16}
    >
      <g clipPath='url(#clip0_3_745)'>
        <path
          d='M6.5 12.25C9.67564 12.25 12.25 9.67564 12.25 6.5C12.25 3.32436 9.67564 0.75 6.5 0.75C3.32436 0.75 0.75 3.32436 0.75 6.5C0.75 9.67564 3.32436 12.25 6.5 12.25Z'
          stroke='#FBFBFE'
          strokeWidth={1.5}
        />
        <path d='M11.0607 11L15 14.9393' stroke='#FBFBFE' strokeWidth={1.5} strokeLinecap='round' />
      </g>
    </mask>
    <g mask='url(#mask0_3_745)'>
      <rect width={16} height={16} fill='#B3B3B3' />
    </g>
    <defs>
      <clipPath id='clip0_3_745'>
        <rect width={16} height={16} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SpanIconMaskGroupIcon);
export { Memo as SpanIconMaskGroupIcon };
