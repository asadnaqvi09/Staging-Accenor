import { NextResponse } from "next/server";

// Uniform success payload: { success: true, data }
export function apiSuccess(data, status = 200) {
  return NextResponse.json({ success: true, data }, { status });
}

// Uniform error payload: { success: false, error }
// Never attach stack traces or internal details to the client body.
export function apiError(error, status = 400, extras = undefined) {
  const body = { success: false, error };

  if (extras && typeof extras === "object") {
    Object.assign(body, extras);
  }

  return NextResponse.json(body, { status });
}
