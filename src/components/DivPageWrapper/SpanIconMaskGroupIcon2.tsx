import { memo, SVGProps } from 'react';

const SpanIconMaskGroupIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <mask
      id='mask0_3_757'
      style={{
        maskType: 'alpha',
      }}
      maskUnits='userSpaceOnUse'
      x={0}
      y={0}
      width={16}
      height={17}
    >
      <g clipPath='url(#clip0_3_757)'>
        <path
          d='M8 16.05C12.0041 16.05 15.25 12.8041 15.25 8.8C15.25 4.79594 12.0041 1.55 8 1.55C3.99594 1.55 0.75 4.79594 0.75 8.8C0.75 12.8041 3.99594 16.05 8 16.05Z'
          stroke='#5B5B66'
          strokeWidth={1.5}
        />
        <mask
          id='mask1_3_757'
          style={{
            maskType: 'alpha',
          }}
          maskUnits='userSpaceOnUse'
          x={0}
          y={0}
          width={16}
          height={17}
        >
          <path
            d='M8 16.05C12.0041 16.05 15.25 12.8041 15.25 8.8C15.25 4.79594 12.0041 1.55 8 1.55C3.99594 1.55 0.75 4.79594 0.75 8.8C0.75 12.8041 3.99594 16.05 8 16.05Z'
            fill='#5B5B66'
            stroke='#5B5B66'
            strokeWidth={1.5}
          />
        </mask>
        <g mask='url(#mask1_3_757)'>
          <path d='M0 0.8H8V16.8H0V0.8Z' fill='#5B5B66' />
        </g>
      </g>
    </mask>
    <g mask='url(#mask0_3_757)'>
      <rect y={0.8} width={16} height={16} fill='#4E4E4E' />
    </g>
    <defs>
      <clipPath id='clip0_3_757'>
        <rect width={16} height={16} fill='white' transform='translate(0 0.8)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SpanIconMaskGroupIcon2);
export { Memo as SpanIconMaskGroupIcon2 };
