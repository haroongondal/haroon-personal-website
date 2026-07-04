import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#0c101a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#38bdf8',
          fontWeight: 700,
          borderRadius: 8,
          border: '2px solid rgba(56, 189, 248, 0.55)',
          fontFamily: 'monospace',
        }}
      >
        HM
      </div>
    ),
    {
      ...size,
    }
  );
}
