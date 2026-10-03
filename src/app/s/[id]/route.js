import destinations from "../../../data/review-destinations.json";
import { reviewResponse } from "../../../lib/review-response.mjs";

export const dynamic = "force-dynamic";

export function GET(_request, { params }) {
  return reviewResponse("s", params.id, destinations);
}
