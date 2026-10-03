# Tapin2Review activation

This first version adds the 200 printed addresses: /s/001–/s/100 and /p/001–/p/100.
It does not include a dashboard or database. Assignments are edited in GitHub and
take effect after a successful Vercel production deployment. All units begin unassigned.

## Activate one unit

1. Scan the physical QR and check that its encoded address matches its ID.
2. Obtain and test the customer's Google Business Profile review link.
3. Edit src/data/review-destinations.json. Replace null for the matching key
   with the full HTTPS Google review link in double quotes. Preserve all other entries.
   Example structure: "s/001": "YOUR_ACTUAL_GOOGLE_REVIEW_LINK"
   Do not deploy that placeholder.
4. Save the change on a branch, review it, and merge when ready for production.
5. Wait for Vercel to deploy successfully. Check the production URL and its destination.
6. In NFC Tools choose Write, Add a record, URL / URI. Write the exact printed
   address (for example https://www.djmobangs.com/s/001) to that unit's NFC chip.
7. Test NFC and QR separately on customer phones.

Destinations must use HTTPS and one of the Google hosts listed in
src/lib/review-response.mjs. This validates the host, not that it is the correct
business or review form; manually test every destination.

Use null to unassign a unit. Invalid IDs return 404, unassigned IDs show an
activation message, and invalid destinations return 503 without redirecting.
Redirects use 302 and no-store so reassignment is not made permanent in browsers.
Both www.djmobangs.com and djmobangs.com should be configured in Vercel, with
canonical domain redirects preserving the full path.

The repository is public. Store only public review URLs here. Keep private customer
details and contact information outside this file. Retain the client's agreement
to use the domain and keep the domain renewed while printed units are in service.

## Verification

Run node --test tests/review-links.test.mjs, then npm run build.
Test a valid unassigned path, an assigned path, and an invalid path on the Vercel
preview before merging. No real customer destinations are included in this change.
A future dashboard requires persistent storage and authenticated administrative writes.
