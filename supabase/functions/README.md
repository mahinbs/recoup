# Edge functions (server-side pieces that need a secret key)

These are written and ready, but they are NOT deployed or tested: each one needs an account key that
only Recoup can supply. Nothing in the website breaks without them; the matching feature simply stays
off until the function is deployed and its secret is set.

| Function | Switches on | Secret(s) to set (Supabase > Edge Functions > Secrets) |
|---|---|---|
| `send-notifications` | Sends the emails queued in `notification_outbox` | `RESEND_API_KEY`, `MAIL_FROM` |
| `razorpay-create-order` | Online payment at checkout | `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET` |
| `razorpay-verify` | Confirms the payment and marks the order paid | `RAZORPAY_KEY_SECRET` |
| `ai-blog-draft` | "Draft with AI" in the blog admin | `OPENAI_API_KEY` |

Deploy with the Supabase CLI: `supabase functions deploy <name> --project-ref xophoqawuxmfkchlckbj`.
Never put these secrets in the website code.
