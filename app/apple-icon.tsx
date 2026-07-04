import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 92,
          background: '#0c101a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#38bdf8',
          fontWeight: 700,
          borderRadius: 40,
          border: '6px solid rgba(56, 189, 248, 0.55)',
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
