import { NextResponse } from "next/server";

// Example: /api/placeholder/40/40
export async function GET(
  req: Request,
  { params }: { params: { width: string; height: string } }
) {
  const { width, height } = params;

  // Redirect to an external placeholder service
  return NextResponse.redirect(`https://placehold.co/${width}x${height}`);
}
