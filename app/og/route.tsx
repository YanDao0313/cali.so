import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
 
    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'default title';
 
    return new ImageResponse(
      (
        <div
  style={{
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '-.02em',
    fontWeight: 700,
    background: 'white',
  }}
>
  <div
    style={{
      left: 42,
      top: 42,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <span
      style={{
        width: 24,
        height: 24,
        background: 'black',
      }}
    />
    <span
      style={{
        marginLeft: 8,
        fontSize: 30,
        fontFamily: '"Typewriter"',
      }}
    >
      krisyan.dev
    </span>
  </div>
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '20px 50px',
      margin: '0 42px',
      fontSize: 45,
      width: 'auto',
      maxWidth: 550,
      textAlign: 'center',
      backgroundColor: 'black',
      color: 'white',
      lineHeight: 1.4,
      alignItems: 'center',
    }}
  >
    {title}
  </div>
</div>
      ),
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}