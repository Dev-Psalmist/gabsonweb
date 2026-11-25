# Security Policy

## Reporting a vulnerability

Please report suspected vulnerabilities privately to the repository owner through GitHub's private vulnerability reporting feature, if enabled. Do not publish credentials, tokens, personal data, or exploit details in public issues.

## Maintenance expectations

- Keep dependencies patched and review automated security alerts.
- Store secrets only in Vercel environment variables; never commit `.env` files or credentials.
- Require the repository owner's review before merging changes to the production branch.
- Deploy production only from the trusted GitHub repository and protected production branch.
